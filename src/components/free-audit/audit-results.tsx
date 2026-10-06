"use client";

import { useState } from "react";
import { TrendingDown, Trophy } from "lucide-react";
import type { AuditSummary, AuditView, Bucket, PreviewCell, ResultCell, Score } from "@/api/free-audit.api";
import { InfoTip } from "./audit-ui";
import {
  BUCKETS,
  BUCKET_COLOR,
  BUCKET_MEANING,
  bucketOf,
  mapZoom,
  placeFromCentre,
  rankText,
  stepShare,
  staticMapUrl,
  type AreaCounts,
} from "./free-audit-data";

type Pin = { row: number; col: number; bucket: Bucket; label?: string };

export const toPins = (cells: PreviewCell[] | ResultCell[]): Pin[] =>
  cells.map((c) =>
    "bucket" in c
      ? { row: c.row, col: c.col, bucket: c.bucket }
      : { row: c.row, col: c.col, bucket: bucketOf(c.rank, c.status), label: rankText(c.rank, c.status) },
  );

/** Share of the map's width the whole grid (pins included) takes up. */
const GRID_SHARE = 0.84;

/**
 * The grid drawn as pins over a muted Google map (row 0 is north, col 0 is west).
 * The preview has colours only: the server doesn't send rank numbers until the email is verified.
 * Without a Maps key or the centre's coordinates, the pins sit on a plain background.
 */
export function RankMap({ view, cells }: { view: AuditView; cells: PreviewCell[] | ResultCell[] }) {
  const { size, radius_km, spacing_km } = view.grid;
  const mid = Math.floor(size / 2);
  const pins = toPins(cells);
  const [hover, setHover] = useState<number | null>(null);
  const [picked, setPicked] = useState<number | null>(null);
  const [mapFailed, setMapFailed] = useState(false);

  // Centre coordinates: from the view (proposed for the preview) or the full report's centre cell.
  const centreCell = cells.find((c) => c.row === mid && c.col === mid);
  const lat = view.center.lat ?? (centreCell && "lat" in centreCell ? centreCell.lat : undefined);
  const lng = view.center.lng ?? (centreCell && "lng" in centreCell ? centreCell.lng : undefined);
  const zoom = lat !== undefined ? mapZoom(lat, radius_km) : 0;
  const mapUrl = lat !== undefined && lng !== undefined && !mapFailed ? staticMapUrl(lat, lng, zoom) : null;
  // Scale the image so the grid fills GRID_SHARE of the box; the pins then sit on a fixed step.
  const imageScale = lat !== undefined ? GRID_SHARE / (stepShare(lat, zoom, spacing_km) * size) : 1;
  const step = (GRID_SHARE / size) * 100;

  const active = hover ?? picked;
  const activePin = active !== null ? pins[active] : null;
  const centreLabel = view.center.label ?? "the centre";

  return (
    <figure>
      <div className="@container relative mx-auto aspect-square w-full max-w-[560px] overflow-hidden rounded-2xl bg-surface-muted ring-1 ring-border">
        {mapUrl ? (
          // eslint-disable-next-line @next/next/no-img-element -- a Google Static Maps image, not an asset to optimise
          <img
            src={mapUrl}
            alt={`Map around ${centreLabel}`}
            className="absolute inset-0 h-full w-full object-cover"
            style={{ transform: `scale(${Math.min(2.4, Math.max(0.8, imageScale))})` }}
            onError={() => setMapFailed(true)}
          />
        ) : (
          <div
            aria-hidden
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage:
                "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
              backgroundSize: `${step}% ${step}%`,
              backgroundPosition: "center",
            }}
          />
        )}
        <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/20" />
        <span className="absolute left-1/2 top-2 -translate-x-1/2 rounded-full bg-card/90 px-2 text-[10px] font-semibold tracking-wider text-muted-foreground ring-soft">
          N
        </span>

        <ul aria-label="Your rank at each spot" className="absolute inset-0">
          {pins.map((p, i) => {
            const isCentre = p.row === mid && p.col === mid;
            const dot = step * (isCentre ? 0.86 : 0.7);
            return (
              <li
                key={`${p.row}:${p.col}`}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${50 + (p.col - mid) * step}%`, top: `${50 + (p.row - mid) * step}%`, width: `${dot}%`, height: `${dot}%` }}
              >
                <button
                  type="button"
                  aria-label={`${placeFromCentre(p.row, p.col, size, spacing_km)}: ${p.label ? `rank ${p.label}` : BUCKET_MEANING[p.bucket]}`}
                  onMouseEnter={() => setHover(i)}
                  onMouseLeave={() => setHover(null)}
                  onFocus={() => setHover(i)}
                  onBlur={() => setHover(null)}
                  onClick={() => setPicked((cur) => (cur === i ? null : i))}
                  className={`flex h-full w-full items-center justify-center rounded-full text-[max(9px,3.1cqw)] font-bold text-white shadow-[0_2px_6px_rgba(0,0,0,0.25)] ring-2 transition-transform hover:scale-110 focus-visible:scale-110 focus-visible:outline-none ${
                    isCentre ? "ring-foreground" : active === i ? "ring-foreground/70" : "ring-white"
                  } ${active === i ? "scale-110" : ""}`}
                  style={{ backgroundColor: BUCKET_COLOR[p.bucket] }}
                >
                  {p.label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <p aria-live="polite" className="mx-auto mt-3 min-h-[2.5rem] max-w-[560px] text-center text-sm text-muted-foreground">
        {activePin ? (
          <>
            <span className="font-medium text-foreground">{placeFromCentre(activePin.row, activePin.col, size, spacing_km)}</span>
            {": "}
            {activePin.label && activePin.bucket !== "not_found" && activePin.bucket !== "error"
              ? `people searching “${view.keyword}” here see you at #${activePin.label}.`
              : `you're ${BUCKET_MEANING[activePin.bucket]} for “${view.keyword}” here.`}
          </>
        ) : (
          <>Each dot is a spot where we searched “{view.keyword}” on Google Maps. Hover or tap one to see your rank there.</>
        )}
      </p>

      <figcaption className="mt-2">
        <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
          {BUCKETS.map((b) => (
            <li key={b.id} className="flex items-center gap-1.5">
              <span className="h-3 w-3 rounded-full ring-1 ring-black/10" style={{ backgroundColor: b.color }} aria-hidden />
              {b.legend}
              {b.id === "pack" && (
                <InfoTip label="Map Pack">
                  The top 3 businesses Google shows first in Maps and in the map box on search results. Most calls and
                  clicks go to these three.
                </InfoTip>
              )}
            </li>
          ))}
        </ul>
        <p className="mt-2 text-center text-xs text-muted-foreground">
          The outlined dot is {centreLabel}. Spots are {spacing_km.toFixed(1)} km ({(spacing_km * 0.621).toFixed(1)} mi) apart.
        </p>
      </figcaption>
    </figure>
  );
}

/** The one-line takeaway: where customers don't see the business in the top 3. */
export function AreaInsight({ counts, keyword }: { counts: AreaCounts; keyword: string }) {
  const missing = counts.usable - counts.top3;
  if (counts.usable === 0) return null;
  if (missing === 0) {
    return (
      <div className="flex items-start gap-3 rounded-2xl bg-emerald-50 p-5 text-emerald-900 ring-1 ring-emerald-200">
        <Trophy className="mt-0.5 h-5 w-5 shrink-0" />
        <p className="text-sm md:text-base">
          You&apos;re in Google&apos;s top 3 for &ldquo;{keyword}&rdquo; at every spot we checked. The job now is keeping
          it that way as competitors catch up.
        </p>
      </div>
    );
  }
  return (
    <div className="flex items-start gap-3 rounded-2xl bg-accent/[0.07] p-5 ring-1 ring-accent/20">
      <TrendingDown className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
      <p className="text-sm text-foreground md:text-base">
        In <span className="font-semibold text-accent">{missing} of {counts.usable}</span>{" "}spots around you, people searching
        &ldquo;{keyword}&rdquo; don&apos;t see you in Google&apos;s top 3
        {counts.notFound > 0 && (
          <>
            {" "}— and in <span className="font-semibold">{counts.notFound}</span>{" "}they can&apos;t find you in the top 30 at all
          </>
        )}
        .
      </p>
    </div>
  );
}

export function SummaryStats({ summary, counts, seen }: { summary: AuditSummary; counts: AreaCounts; seen?: number }) {
  const pct = (n: number) => (counts.usable ? Math.round((n / counts.usable) * 100) : 0);
  const stats = [
    summary.area_rank !== undefined
      ? {
          label: "Your rank across the area",
          value: summary.area_rank === null ? "30+" : `#${summary.area_rank}`,
          sub:
            summary.area_rank === null
              ? "not in the top 30 at any spot"
              : seen
                ? `of ${seen} businesses we found`
                : "among every business we found",
          tip: "Where you place when every business is ranked by its average position over all the spots we checked.",
        }
      : {
          label: "Average rank",
          value: summary.avg_rank === null ? "–" : summary.avg_rank > 30 ? "30+" : summary.avg_rank.toFixed(1),
          sub: `across ${counts.usable} spots`,
          tip: "Your average position on Google Maps over all the spots we checked. Spots where you're not in the top 30 count as 31. Lower is better.",
        },
    {
      label: "In the top 3",
      value: `${pct(counts.top3)}%`,
      sub: `${counts.top3} of ${counts.usable} spots`,
      tip: "The share of spots where you're in the Map Pack: the 3 businesses Google shows first. Most calls and clicks go to them.",
    },
    {
      label: "In the top 10",
      value: `${pct(counts.top10)}%`,
      sub: `${counts.top10} of ${counts.usable} spots`,
      tip: "The share of spots where you're on the first screen of Google Maps results, before customers scroll.",
    },
    {
      label: "Hard to find",
      value: `${counts.hardToFind}`,
      sub: "spots ranked 11 or worse",
      tip: "Spots where customers have to scroll a long way to find you, or where you're not in the top 30 at all.",
      warn: counts.hardToFind > 0,
    },
  ];
  return (
    <dl className="grid grid-cols-2 gap-3 lg:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label} className="rounded-2xl bg-card p-4 shadow-card ring-soft">
          <dt className="flex items-center gap-1 text-xs text-muted-foreground">
            {s.label}
            <InfoTip label={s.label}>{s.tip}</InfoTip>
          </dt>
          <dd className={`mt-1 font-display text-3xl md:text-4xl ${"warn" in s && s.warn ? "text-accent" : "text-foreground"}`}>{s.value}</dd>
          <dd className="text-xs text-muted-foreground">{s.sub}</dd>
        </div>
      ))}
    </dl>
  );
}

const GRADE_TONE: Record<string, string> = {
  A: "bg-emerald-100 text-emerald-700",
  B: "bg-lime-100 text-lime-700",
  C: "bg-amber-100 text-amber-700",
  D: "bg-orange-100 text-orange-700",
  F: "bg-red-100 text-red-700",
};

export const SCORE_TIP =
  "A score out of 100 from your public Google profile: star rating, number of reviews, category, opening hours, website, phone and Google's description. It doesn't include rankings.";

export function ScoreBadge({ score, size = "md" }: { score: Score; size?: "sm" | "md" }) {
  const tone = GRADE_TONE[score.grade] ?? "bg-surface-muted text-foreground";
  if (size === "sm") {
    return (
      <span className="inline-flex items-baseline gap-1.5">
        <span className="font-semibold text-foreground">{score.score}</span>
        <span className="text-xs text-muted-foreground">/100</span>
        <span className={`rounded-md px-1.5 py-0.5 text-xs font-semibold ${tone}`}>{score.grade}</span>
      </span>
    );
  }
  return (
    <div className="flex items-center gap-4">
      <div className={`flex h-16 w-16 items-center justify-center rounded-2xl font-display text-4xl ${tone}`}>{score.grade}</div>
      <div>
        <p className="font-display text-3xl text-foreground">
          {score.score}
          <span className="text-lg text-muted-foreground">/100</span>
        </p>
        <p className="flex items-center gap-1 text-xs text-muted-foreground">
          Google profile quick score <InfoTip label="Quick score">{SCORE_TIP}</InfoTip>
        </p>
      </div>
    </div>
  );
}
