/**
 * Free audit API — the only part of the site that talks to the MyPageSEO app
 * API (api.mypageseo.com), not the marketing backend in client.ts. No login:
 * requests carry no cookies, and an audit is reached with its access token in
 * the X-Audit-Token header.
 */

const API_URL = (process.env.NEXT_PUBLIC_MPS_API_URL || "https://api.mypageseo.com/api/v1").replace(/\/$/, "");

// ---- Types (mirror the backend's public view) ----

export type Bucket = "pack" | "visible" | "low" | "invisible" | "not_found" | "error";
export type CellStatus = "ok" | "not_found" | "error";
export type Stage = "preview_queued" | "preview_running" | "preview_done" | "full_queued" | "full_running" | "done" | "failed";
export type CheckState = "good" | "partial" | "missing";
export type Warning = "some_points_failed" | "names_unavailable" | "some_competitors_unavailable";

export interface Suggestion {
  place_id: string;
  description: string;
  main_text: string;
  secondary_text: string;
  types: string[];
}

export interface Attribution {
  provider?: string;
  text: string;
}

export interface AuditSummary {
  center_rank: number | null;
  center_status: CellStatus;
  avg_rank: number | null;
  found_rate: number | null;
  top3_rate: number | null;
  points: number;
  failed_points: number;
}

export interface Score {
  score: number;
  grade: string;
}

export interface CheckItem {
  id: string;
  label: string;
  state: CheckState;
  detail: string;
}

export interface PublicFacts {
  name?: string | null;
  rating: number | null;
  user_rating_count: number | null;
  category?: string | null;
  website: string | null;
  phone?: string | null;
  has_hours: boolean;
  photo_count: number | null;
}

export interface Business extends Partial<PublicFacts> {
  name: string | null;
  address: string | null;
  rating: number | null;
  user_rating_count: number | null;
  category: string | null;
  country?: string | null;
  score?: Score & { parts?: unknown[] };
  checklist?: CheckItem[];
}

export interface PreviewCell {
  row: number;
  col: number;
  bucket: Bucket;
}

export interface ResultCell {
  row: number;
  col: number;
  lat: number;
  lng: number;
  rank: number | null;
  status: CellStatus;
}

export interface RankedBusiness {
  rank: number;
  name: string | null;
  address: string | null;
  is_self: boolean;
}

export interface Competitor {
  rank: number;
  name: string | null;
  address: string | null;
  facts: PublicFacts | null;
  score: Score | null;
  checklist: CheckItem[] | null;
}

export interface Lead {
  submitted: boolean;
  email_masked: string | null;
  verified: boolean;
  code_expires_at: string | null;
  attempts_left: number | null;
}

export interface AuditView {
  id: string;
  stage: Stage;
  preview_ready: boolean;
  full_ready: boolean;
  polling: boolean;
  locked: boolean;
  keyword: string;
  center: { source: "business" | "city"; label: string | null };
  grid: { size: number; radius_km: number; spacing_km: number };
  business: Business;
  preview: { summary: AuditSummary; cells: PreviewCell[]; score: Score | null } | null;
  result: {
    cells: ResultCell[];
    summary: AuditSummary;
    higher: RankedBusiness[] | null;
    competitors: Competitor[];
  } | null;
  pdf_available: boolean;
  lead: Lead;
  warnings: Warning[];
  failure_reason: string | null;
  attribution: Attribution;
}

export type Center = { source: "business" } | { source: "city"; place_id: string; session: string };

export interface StartPayload {
  turnstile_token: string;
  place_id: string;
  session: string;
  keyword: string;
  center: Center;
}

export interface LeadPayload {
  turnstile_token: string;
  business_name: string;
  name: string;
  email: string;
  phone: string;
  consent: true;
}

// ---- Transport ----

/** Error from the API; branch on `reason` (the backend's `data.reason`). */
export class AuditApiError extends Error {
  status: number;
  reason?: string;
  data?: Record<string, unknown>;

  constructor(message: string, status: number, reason?: string, data?: Record<string, unknown>) {
    super(message);
    this.name = "AuditApiError";
    this.status = status;
    this.reason = reason;
    this.data = data;
  }
}

interface RequestOptions {
  method?: "GET" | "POST";
  body?: unknown;
  auditToken?: string;
  signal?: AbortSignal;
}

async function send(path: string, { method = "GET", body, auditToken, signal }: RequestOptions = {}): Promise<Response> {
  try {
    return await fetch(`${API_URL}${path}`, {
      method,
      credentials: "omit",
      headers: {
        ...(body ? { "Content-Type": "application/json" } : {}),
        ...(auditToken ? { "X-Audit-Token": auditToken } : {}),
      },
      body: body ? JSON.stringify(body) : undefined,
      signal,
    });
  } catch (err) {
    if ((err as Error).name === "AbortError") throw err;
    throw new AuditApiError("We couldn't reach our servers. Check your connection and try again.", 0, "network");
  }
}

async function request<T>(path: string, options?: RequestOptions): Promise<T> {
  const res = await send(path, options);
  const json = await res.json().catch(() => null);
  if (!res.ok || !json) {
    throw new AuditApiError(
      json?.message || "Something went wrong. Please try again.",
      res.status,
      json?.data?.reason,
      json?.data ?? undefined,
    );
  }
  return json.data as T;
}

// ---- Endpoints ----

export const autocompletePlaces = (input: string, session: string, kind: "business" | "city", signal?: AbortSignal) =>
  request<{ suggestions: Suggestion[]; attribution: Attribution }>(
    `/public/audits/places/autocomplete?${new URLSearchParams({ input, session, kind })}`,
    { signal },
  );

export const startAudit = (payload: StartPayload) =>
  request<AuditView & { access_token: string }>("/public/audits", { method: "POST", body: payload });

export const getAudit = (id: string, auditToken: string) =>
  request<AuditView>(`/public/audits/${encodeURIComponent(id)}`, { auditToken });

export const submitLead = (id: string, auditToken: string, payload: LeadPayload) =>
  request<AuditView>(`/public/audits/${encodeURIComponent(id)}/lead`, { method: "POST", body: payload, auditToken });

export const resendCode = (id: string, auditToken: string) =>
  request<AuditView>(`/public/audits/${encodeURIComponent(id)}/lead/resend`, { method: "POST", auditToken });

export const verifyCode = (id: string, auditToken: string, code: string) =>
  request<AuditView>(`/public/audits/${encodeURIComponent(id)}/verify`, { method: "POST", body: { code }, auditToken });

/** The PDF as a blob (Content-Disposition isn't readable cross-origin, so the caller names the file). */
export async function downloadAuditPdf(id: string, auditToken: string): Promise<Blob> {
  const res = await send(`/public/audits/${encodeURIComponent(id)}/pdf`, { auditToken });
  if (!res.ok) {
    const json = await res.json().catch(() => null);
    throw new AuditApiError(json?.message || "We couldn't download the PDF.", res.status, json?.data?.reason, json?.data);
  }
  return res.blob();
}
