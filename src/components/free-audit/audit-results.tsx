import type { AuditSummary, Bucket, PreviewCell, ResultCell, Score } from "@/api/free-audit.api";
import { BUCKETS, BUCKET_COLOR, bucketOf, percent, rankText } from "./free-audit-data";

type HeatCell = { row: number; col: number; bucket: Bucket; label?: string };

const toHeatCells = (cells: PreviewCell[] | ResultCell[]): HeatCell[] =>
  cells.map((c) =>
    "bucket" in c
      ? { row: c.row, col: c.col, bucket: c.bucket }
      : { row: c.row, col: c.col, bucket: bucketOf(c.rank, c.status), label: rankText(c.rank, c.status) },
  );

const BUCKET_TEXT: Record<Bucket, string> = {
  pack: "top 3",
  visible: "rank 4 to 10",
  low: "rank 11 to 20",
  invisible: "rank 21 to 30",
  not_found: "not in the top 30",
  error: "no answer",
};

/**
 * 7×7 grid: row 0 is north, col 0 is west, the centre is the business or city.
 * The preview has colours only — the server doesn't send rank numbers until the email is verified.
 */
export function Heatmap({
  cells,
  size = 7,
  spacingKm,
  centerLabel,
}: {
  cells: PreviewCell[] | ResultCell[];
  size?: number;
  spacingKm?: number;
  centerLabel: string;
}) {
  const heat = toHeatCells(cells);
  const byPos = new Map(heat.map((c) => [`${c.row}:${c.col}`, c]));
  const mid = Math.floor(size / 2);

  return (
    <figure>
      <div className="relative mx-auto max-w-md rounded-2xl bg-surface-muted p-2 sm:p-3">
        <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 rounded-full bg-card px-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground ring-soft">
          N
        </span>
        <div role="list" aria-label="Ranking map" className="grid gap-1 sm:gap-1.5" style={{ gridTemplateColumns: `repeat(${size}, minmax(0, 1fr))` }}>
          {Array.from({ length: size * size }, (_, i) => {
            const row = Math.floor(i / size);
            const col = i % size;
            const cell = byPos.get(`${row}:${col}`);
            const isCenter = row === mid && col === mid;
            const bucket = cell?.bucket ?? "error";
            const description = cell?.label
              ? `Rank ${cell.label}`
              : BUCKET_TEXT[bucket].charAt(0).toUpperCase() + BUCKET_TEXT[bucket].slice(1);
            return (
              <div
                key={i}
                role="listitem"
                aria-label={`${isCenter ? `${centerLabel} (centre)` : `Row ${row + 1}, column ${col + 1}`}: ${description}`}
                title={isCenter ? `${centerLabel}: ${description}` : description}
                className={`flex aspect-square items-center justify-center rounded-md text-xs font-semibold text-white sm:rounded-lg sm:text-sm ${
                  isCenter ? "ring-2 ring-foreground ring-offset-2 ring-offset-surface-muted" : ""
                }`}
                style={{ backgroundColor: BUCKET_COLOR[bucket] }}
              >
                {cell?.label}
              </div>
            );
          })}
        </div>
      </div>
      <figcaption className="mt-4">
        <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
          {BUCKETS.map((b) => (
            <li key={b.id} className="flex items-center gap-1.5">
              <span className="h-3 w-3 rounded-sm" style={{ backgroundColor: b.color }} aria-hidden />
              {b.legend}
            </li>
          ))}
        </ul>
        <p className="mt-2 text-center text-xs text-muted-foreground">
          Outlined square: {centerLabel}.
          {spacingKm ? ` Points are ${spacingKm.toFixed(1)} km (${(spacingKm * 0.621).toFixed(1)} mi) apart.` : ""}
        </p>
      </figcaption>
    </figure>
  );
}

export function SummaryStats({ summary, centerSource }: { summary: AuditSummary; centerSource: "business" | "city" }) {
  const stats = [
    {
      label: centerSource === "city" ? "Rank at the city centre" : "Rank at your business",
      value: summary.center_status === "error" ? "–" : summary.center_rank === null ? "30+" : `#${summary.center_rank}`,
    },
    { label: "Average rank in the area", value: summary.avg_rank === null ? "–" : summary.avg_rank > 30 ? "30+" : summary.avg_rank.toFixed(1) },
    { label: "Of the area in the top 30", value: percent(summary.found_rate) },
    { label: "Of the area in the top 3", value: percent(summary.top3_rate) },
  ];
  return (
    <dl className="grid grid-cols-2 gap-3 lg:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label} className="rounded-2xl bg-card p-4 ring-soft shadow-card">
          <dt className="text-xs text-muted-foreground">{s.label}</dt>
          <dd className="mt-1 font-display text-3xl text-foreground md:text-4xl">{s.value}</dd>
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
        <p className="text-xs text-muted-foreground">Google profile quick score</p>
      </div>
    </div>
  );
}
