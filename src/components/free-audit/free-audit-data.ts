import { AuditApiError, type Bucket, type CellStatus } from "@/api/free-audit.api";

export const STORAGE_KEY = "mps_free_audit";
export const POLL_MS = 2500;
export const RESEND_COOLDOWN_S = 60;
export const CODE_TTL_S = 600;
export const CONTACT_URL = "/contact";

/** Cloudflare's always-pass test key is only a fallback for local development. */
export const TURNSTILE_SITE_KEY =
  process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ||
  (process.env.NODE_ENV === "production" ? "" : "1x00000000000000000000AA");

/** Heatmap colours — these match the PDF report, so they stay fixed hex values. */
export const BUCKETS: { id: Bucket; color: string; legend: string }[] = [
  { id: "pack", color: "#16a34a", legend: "1–3" },
  { id: "visible", color: "#65a30d", legend: "4–10" },
  { id: "low", color: "#d97706", legend: "11–20" },
  { id: "invisible", color: "#dc2626", legend: "21–30" },
  { id: "not_found", color: "#7f1d1d", legend: "30+" },
  { id: "error", color: "#9ca3af", legend: "No answer" },
];

export const BUCKET_COLOR = Object.fromEntries(BUCKETS.map((b) => [b.id, b.color])) as Record<Bucket, string>;

export function bucketOf(rank: number | null, status: CellStatus): Bucket {
  if (status === "error") return "error";
  if (status === "not_found" || rank === null) return "not_found";
  if (rank <= 3) return "pack";
  if (rank <= 10) return "visible";
  if (rank <= 20) return "low";
  return "invisible";
}

export function rankText(rank: number | null, status: CellStatus): string {
  if (status === "error") return "–";
  if (status === "not_found" || rank === null) return "30+";
  return String(rank);
}

// ---- Area figures (counted from the grid's buckets, so they work for the preview too) ----

export interface AreaCounts {
  /** Points with an answer (failed points are left out). */
  usable: number;
  top3: number;
  top10: number;
  /** Rank 11 or worse, or not in the top 30. */
  hardToFind: number;
  notFound: number;
}

export function areaCounts(buckets: Bucket[]): AreaCounts {
  const n = (...ids: Bucket[]) => buckets.filter((b) => ids.includes(b)).length;
  return {
    usable: buckets.length - n("error"),
    top3: n("pack"),
    top10: n("pack", "visible"),
    hardToFind: n("low", "invisible", "not_found"),
    notFound: n("not_found"),
  };
}

export const BUCKET_MEANING: Record<Bucket, string> = {
  pack: "in the top 3 (the Map Pack)",
  visible: "ranked 4 to 10",
  low: "ranked 11 to 20",
  invisible: "ranked 21 to 30",
  not_found: "not in the top 30",
  error: "no answer from Google",
};

/** "1.7 km (1.0 mi) north-west", from the grid step to the centre. */
export function placeFromCentre(row: number, col: number, size: number, spacingKm: number): string {
  const mid = Math.floor(size / 2);
  const north = (mid - row) * spacingKm;
  const east = (col - mid) * spacingKm;
  const km = Math.hypot(north, east);
  if (km < 0.01) return "At the centre";
  const ns = north > 0.01 ? "north" : north < -0.01 ? "south" : "";
  const ew = east > 0.01 ? "east" : east < -0.01 ? "west" : "";
  return `${km.toFixed(1)} km (${(km * 0.621).toFixed(1)} mi) ${[ns, ew].filter(Boolean).join("-")}`;
}

// ---- Map (Google Static Maps: Places-derived data shown on a map must be on a Google map) ----

export const GOOGLE_MAPS_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";
const MAP_PX = 640;
const metresPerPx = (lat: number, zoom: number) => (156543.03392 * Math.cos((lat * Math.PI) / 180)) / 2 ** zoom;

/** The closest zoom that still shows the whole grid plus a margin. */
export function mapZoom(lat: number, radiusKm: number): number {
  const span = radiusKm * 2 * 1000 * 1.25;
  let zoom = 15;
  while (zoom > 8 && MAP_PX * metresPerPx(lat, zoom) < span) zoom--;
  return zoom;
}

/** The grid step as a share of the map image's width (for placing the pins). */
export const stepShare = (lat: number, zoom: number, spacingKm: number) => (spacingKm * 1000) / (MAP_PX * metresPerPx(lat, zoom));

const MAP_STYLES = [
  "saturation:-75|lightness:20",
  "feature:poi|visibility:off",
  "feature:transit|visibility:off",
  "feature:road|element:labels.icon|visibility:off",
  "feature:water|color:0xc7dbe2",
];

export function staticMapUrl(lat: number, lng: number, zoom: number): string | null {
  if (!GOOGLE_MAPS_KEY) return null;
  const params = new URLSearchParams({
    center: `${lat.toFixed(6)},${lng.toFixed(6)}`,
    zoom: String(zoom),
    size: `${MAP_PX}x${MAP_PX}`,
    scale: "2",
    key: GOOGLE_MAPS_KEY,
  });
  for (const st of MAP_STYLES) params.append("style", st);
  return `https://maps.googleapis.com/maps/api/staticmap?${params}`;
}

export const percent = (v: number | null) => (v === null ? "–" : `${Math.round(v * 100)}%`);

// ---- Saved audit (sessionStorage only: id + access token, nothing about the visitor) ----

export interface SavedAudit {
  id: string;
  token: string;
}

export function readSaved(): SavedAudit | null {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const v = JSON.parse(raw);
    return typeof v?.id === "string" && typeof v?.access_token === "string" ? { id: v.id, token: v.access_token } : null;
  } catch {
    return null;
  }
}

export function writeSaved(id: string, token: string) {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ id, access_token: token }));
  } catch {
    // Storage blocked: the audit still works until the tab reloads.
  }
}

export function clearSaved() {
  try {
    sessionStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore
  }
}

// ---- Errors ----

export type ErrorAction = "contact" | "resend" | "run_again";

export interface FriendlyError {
  reason?: string;
  message: string;
  action?: ErrorAction;
  contactUrl?: string;
}

const LIMIT_WHO: Record<string, string> = { email: "email address", phone: "phone number" };

/** The backend's `data.reason` → the copy we show. Falls back to the server's message. */
export function friendlyError(err: unknown): FriendlyError {
  if (!(err instanceof AuditApiError)) return { message: "Something went wrong. Please try again." };
  const { reason, data } = err;
  const contactUrl = typeof data?.contact_url === "string" ? data.contact_url : CONTACT_URL;

  switch (reason) {
    case "turnstile_failed":
      // Cloudflare's reason (e.g. hostname_mismatch, invalid-input-secret); never the token itself.
      if (process.env.NODE_ENV !== "production") console.warn("Turnstile rejected by the API:", data?.errors);
      return { reason, message: "The security check failed. Please try again." };
    case "limit_reached": {
      const which = data?.which as string | undefined;
      if (which === "business")
        return { reason, contactUrl, action: "contact", message: "This business has already had its free audits (2 every 90 days). Contact us for a detailed report." };
      if (which === "ip")
        return { reason, contactUrl, action: "contact", message: "You've run the maximum number of free audits today. Contact us for a detailed report." };
      return {
        reason,
        contactUrl,
        action: "contact",
        message: `You've reached the limit of free audits for this ${LIMIT_WHO[which ?? ""] ?? "email address"}. Contact us to get a detailed report.`,
      };
    }
    case "daily_cap_reached":
      return { reason, contactUrl, action: "contact", message: "The free audit is very busy today. Please try again tomorrow, or contact us." };
    case "tool_disabled":
    case "places_not_configured":
      return { reason, message: "The free audit is unavailable right now." };
    case "places_error":
      return { reason, message: "Google didn't answer. Please try again in a minute." };
    case "unsupported_country":
      return { reason, message: "The free audit covers businesses in the US and Canada." };
    case "no_location":
      return { reason, message: "This business has no address on Google Maps. Choose a city to centre the audit on." };
    case "city_not_found":
      return { reason, message: "We couldn't place that city on the map. Please pick another." };
    case "invalid_phone":
      return { reason, message: "Enter a US or Canadian phone number." };
    case "code_invalid": {
      const left = data?.attempts_left;
      return { reason, message: `That code isn't right.${typeof left === "number" ? ` ${left} ${left === 1 ? "try" : "tries"} left.` : ""}` };
    }
    case "code_expired":
      return { reason, action: "resend", message: "This code has expired." };
    case "too_many_attempts":
      return { reason, action: "resend", message: "Too many wrong codes." };
    case "too_many_codes":
      return { reason, contactUrl, action: "contact", message: "Too many codes were sent. Please contact us." };
    case "email_failed":
      return { reason, message: "We couldn't send the email. Check the address and try again." };
    case "audit_failed":
      return { reason, action: "run_again", message: "This audit didn't finish." };
    case "audit_not_found":
      return { reason, message: "Your audit has expired. Start a new one." };
    default:
      return { reason, message: err.message || "Something went wrong. Please try again." };
  }
}
