"use client";

import { useState } from "react";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  CircleDashed,
  Download,
  Globe,
  Loader2,
  Lock,
  MapPin,
  Phone,
  Star,
  XCircle,
} from "lucide-react";
import {
  downloadAuditPdf,
  type AuditView,
  type CheckItem,
  type Competitor,
  type PublicFacts,
  type RankedBusiness,
  type Warning,
} from "@/api/free-audit.api";
import { GoogleAttribution } from "./audit-ui";
import { Heatmap, ScoreBadge, SummaryStats } from "./audit-results";
import { CONTACT_URL, friendlyError } from "./free-audit-data";

// ---- Shared ----

function Rating({ rating, count }: { rating: number | null | undefined; count: number | null | undefined }) {
  if (rating == null) return <span className="text-muted-foreground">No rating yet</span>;
  return (
    <span className="inline-flex items-center gap-1">
      <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
      <span className="font-medium text-foreground">{rating.toFixed(1)}</span>
      <span className="text-muted-foreground">({count ?? 0})</span>
    </span>
  );
}

export function BusinessHeader({ view }: { view: AuditView }) {
  const b = view.business;
  return (
    <div className="rounded-3xl bg-card p-6 shadow-card ring-soft md:p-8">
      <p className="text-xs font-semibold uppercase tracking-wider text-accent">Local visibility audit</p>
      <div className="mt-2 flex flex-wrap items-start justify-between gap-4">
        <div className="min-w-0">
          <h2 className="font-display text-3xl text-foreground md:text-4xl">{b.name ?? "Your business"}</h2>
          <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
            {b.category && <span>{b.category}</span>}
            <Rating rating={b.rating} count={b.user_rating_count} />
            {b.address && (
              <span className="inline-flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5" /> {b.address}
              </span>
            )}
          </div>
          {(b.website || b.phone) && (
            <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
              {b.website && (
                <span className="inline-flex min-w-0 items-center gap-1">
                  <Globe className="h-3.5 w-3.5 shrink-0" /> <span className="truncate">{b.website.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}</span>
                </span>
              )}
              {b.phone && (
                <span className="inline-flex items-center gap-1">
                  <Phone className="h-3.5 w-3.5" /> {b.phone}
                </span>
              )}
            </div>
          )}
          <GoogleAttribution text={view.attribution.text} className="mt-1" />
        </div>
      </div>
      <div className="mt-5 flex flex-wrap gap-2 text-sm">
        <span className="rounded-full bg-surface-muted px-3 py-1 text-foreground">
          Keyword: <span className="font-medium">&ldquo;{view.keyword}&rdquo;</span>
        </span>
        {view.center.label && (
          <span className="rounded-full bg-surface-muted px-3 py-1 text-foreground">
            Around: <span className="font-medium">{view.center.label}</span>
          </span>
        )}
      </div>
    </div>
  );
}

export function AuditProgress({ title, detail }: { title: string; detail: string }) {
  return (
    <div role="status" className="rounded-3xl bg-card p-8 text-center shadow-card ring-soft md:p-12">
      <div className="mx-auto grid w-40 grid-cols-7 gap-1" aria-hidden>
        {Array.from({ length: 49 }, (_, i) => (
          <span
            key={i}
            className="aspect-square animate-pulse rounded-[3px] bg-primary/15"
            style={{ animationDelay: `${((i % 7) + Math.floor(i / 7)) * 90}ms` }}
          />
        ))}
      </div>
      <p className="mt-6 inline-flex items-center gap-2 font-medium text-foreground">
        <Loader2 className="h-4 w-4 animate-spin text-accent" /> {title}
      </p>
      <p className="mt-1 text-sm text-muted-foreground">{detail}</p>
    </div>
  );
}

// ---- Preview (locked) ----

const PLACEHOLDER_ROWS = ["Placeholder Business One", "Placeholder Business Two", "Placeholder Business Three", "Placeholder Business Four"];

/** A blurred static placeholder: the API doesn't send the locked data, and we don't fake it. */
function LockedTeaser({ title, hint }: { title: string; hint: string }) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-card p-5 ring-soft shadow-card">
      <p className="text-sm font-semibold text-foreground">{title}</p>
      <div aria-hidden className="mt-3 select-none space-y-2.5 blur-[5px]">
        {PLACEHOLDER_ROWS.map((name, i) => (
          <div key={name} className="flex items-center gap-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-surface-muted text-xs font-semibold">{i + 1}</span>
            <span className="flex-1 text-sm">{name}</span>
            <span className="h-2 w-16 rounded-full bg-primary/20" />
          </div>
        ))}
      </div>
      <a
        href="#unlock-heading"
        className="absolute inset-0 top-10 flex flex-col items-center justify-center gap-1 bg-card/40 text-center"
      >
        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground">
          <Lock className="h-3.5 w-3.5" /> Unlock free below
        </span>
        <span className="px-6 text-xs text-muted-foreground">{hint}</span>
      </a>
    </div>
  );
}

export function PreviewReport({ view }: { view: AuditView }) {
  const preview = view.preview;
  if (!preview) return null;
  return (
    <div className="space-y-6">
      <SummaryStats summary={preview.summary} centerSource={view.center.source} />
      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="rounded-3xl bg-card p-6 shadow-card ring-soft md:p-8">
          <div className="mb-5 flex items-center justify-between gap-3">
            <h3 className="text-lg font-semibold text-foreground">Where you show up on Google Maps</h3>
            <span className="inline-flex items-center gap-1 rounded-full bg-surface-muted px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
              <Lock className="h-3 w-3" /> Ranks locked
            </span>
          </div>
          <Heatmap cells={preview.cells} size={view.grid.size} spacingKm={view.grid.spacing_km} centerLabel={view.center.label ?? "Centre"} />
        </div>
        <div className="space-y-4">
          {preview.score && (
            <div className="rounded-2xl bg-card p-5 ring-soft shadow-card">
              <ScoreBadge score={preview.score} />
              <p className="mt-3 text-xs text-muted-foreground">
                Unlock the checklist to see what&apos;s holding your score back.
              </p>
            </div>
          )}
          <LockedTeaser title="Who ranks higher" hint="Every business above you for this search" />
          <LockedTeaser title="How you compare with the top 3" hint="Their scores, reviews and profiles next to yours" />
        </div>
      </div>
    </div>
  );
}

// ---- Full report ----

const WARNING_TEXT: Record<Warning, string> = {
  some_points_failed: "Google didn't answer for some points on the map. Those squares are grey.",
  names_unavailable: "We couldn't load the list of businesses ranking above you this time.",
  some_competitors_unavailable: "We couldn't load the details for some of the top competitors.",
};

const CHECK_ICON = {
  good: <CheckCircle2 className="h-5 w-5 text-emerald-600" aria-label="Good" />,
  partial: <CircleDashed className="h-5 w-5 text-amber-600" aria-label="Could be better" />,
  missing: <XCircle className="h-5 w-5 text-red-600" aria-label="Missing" />,
};

function Checklist({ items }: { items: CheckItem[] }) {
  return (
    <ul className="divide-y divide-border">
      {items.map((item) => (
        <li key={item.id} className="flex items-center gap-3 py-3">
          {CHECK_ICON[item.state]}
          <span className="flex-1 text-sm font-medium text-foreground">{item.label}</span>
          <span className="text-right text-sm text-muted-foreground">{item.detail}</span>
        </li>
      ))}
    </ul>
  );
}

function HigherList({ higher, attribution }: { higher: RankedBusiness[] | null; attribution: string }) {
  if (higher === null) {
    return <p className="text-sm text-muted-foreground">We couldn&apos;t load this list this time.</p>;
  }
  if (higher.length === 0) {
    return (
      <p className="inline-flex items-center gap-2 text-sm font-medium text-emerald-700">
        <CheckCircle2 className="h-4 w-4" /> Nobody — you&apos;re #1 here.
      </p>
    );
  }
  return (
    <>
      <ol className="max-h-[28rem] divide-y divide-border overflow-y-auto pr-1">
        {higher.map((r) => (
          <li key={`${r.rank}-${r.name}`} className={`flex items-start gap-3 py-2.5 ${r.is_self ? "font-semibold" : ""}`}>
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-surface-muted text-xs font-semibold text-foreground">
              {r.rank}
            </span>
            <span className="min-w-0">
              <span className="block text-sm text-foreground">{r.name ?? "Unnamed business"}</span>
              {r.address && <span className="block truncate text-xs text-muted-foreground">{r.address}</span>}
            </span>
          </li>
        ))}
      </ol>
      <GoogleAttribution text={attribution} className="mt-2" />
    </>
  );
}

const yesNo = (v: boolean | null | undefined) =>
  v ? <CheckCircle2 className="h-4 w-4 text-emerald-600" aria-label="Yes" /> : <XCircle className="h-4 w-4 text-red-500" aria-label="No" />;

const photos = (n: number | null | undefined) => (n == null ? "–" : n >= 10 ? "10+" : String(n));

function CompareTable({ view, competitors }: { view: AuditView; competitors: Competitor[] }) {
  const b = view.business;
  const you = {
    key: "you",
    label: b.name ?? "You",
    rank: view.result?.summary.center_rank ?? null,
    score: b.score ?? null,
    facts: { rating: b.rating, user_rating_count: b.user_rating_count, website: b.website ?? null, has_hours: Boolean(b.has_hours), photo_count: b.photo_count ?? null } as PublicFacts,
    self: true,
  };
  const columns = [
    you,
    ...competitors.map((c) => ({ key: `${c.rank}`, label: c.name ?? "Unnamed business", rank: c.rank, score: c.score, facts: c.facts, self: false })),
  ];
  const rows: { label: string; render: (c: (typeof columns)[number]) => React.ReactNode }[] = [
    { label: "Rank here", render: (c) => (c.rank === null ? "30+" : `#${c.rank}`) },
    { label: "Quick score", render: (c) => (c.score ? <ScoreBadge score={c.score} size="sm" /> : "–") },
    { label: "Rating", render: (c) => (c.facts ? <Rating rating={c.facts.rating} count={c.facts.user_rating_count} /> : "–") },
    { label: "Website", render: (c) => (c.facts ? yesNo(Boolean(c.facts.website)) : "–") },
    { label: "Opening hours", render: (c) => (c.facts ? yesNo(c.facts.has_hours) : "–") },
    { label: "Photos", render: (c) => (c.facts ? photos(c.facts.photo_count) : "–") },
  ];

  return (
    <div className="-mx-6 overflow-x-auto px-6 md:mx-0 md:px-0">
      <table className="w-full min-w-[560px] text-sm">
        <thead>
          <tr>
            <th className="w-32 py-2 text-left text-xs font-medium text-muted-foreground" scope="col">
              <span className="sr-only">Measure</span>
            </th>
            {columns.map((c) => (
              <th
                key={c.key}
                scope="col"
                className={`px-3 py-2 text-left align-bottom text-sm font-semibold ${c.self ? "rounded-t-xl bg-primary-soft text-primary" : "text-foreground"}`}
              >
                {c.self && <span className="block text-[10px] font-semibold uppercase tracking-wider">You</span>}
                <span className="line-clamp-2">{c.label}</span>
                {!c.self && !c.facts && <span className="block text-xs font-normal text-muted-foreground">Details unavailable</span>}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label} className="border-t border-border">
              <th scope="row" className="py-2.5 text-left text-xs font-medium text-muted-foreground">
                {row.label}
              </th>
              {columns.map((c) => (
                <td key={c.key} className={`px-3 py-2.5 text-foreground ${c.self ? "bg-primary-soft" : ""}`}>
                  {row.render(c)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function PdfButton({ view, token }: { view: AuditView; token: string }) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const download = async () => {
    setBusy(true);
    setError(null);
    try {
      const blob = await downloadAuditPdf(view.id, token);
      const slug = (view.business.name ?? "report").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "report";
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `audit-${slug}.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    } catch (err) {
      setError(friendlyError(err).message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div>
      <button
        type="button"
        onClick={download}
        disabled={busy}
        className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 font-medium text-primary-foreground transition hover:opacity-95 disabled:opacity-60"
      >
        {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <Download className="h-4 w-4" />} Download PDF
      </button>
      {error && <p className="mt-2 text-xs text-accent">{error}</p>}
    </div>
  );
}

function Card({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <section className="min-w-0 rounded-3xl bg-card p-6 shadow-card ring-soft md:p-8">
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      {subtitle && <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>}
      <div className="mt-5">{children}</div>
    </section>
  );
}

export function FullReport({ view, token }: { view: AuditView; token: string }) {
  const result = view.result;
  if (!result) return null;
  const b = view.business;

  return (
    <div className="space-y-6">
      {view.pdf_available && (
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl bg-primary-soft p-5 md:p-6">
          <p className="text-sm text-foreground">
            <span className="font-semibold">Your full report is ready.</span> We&apos;ve also emailed the PDF
            {view.lead.email_masked ? ` to ${view.lead.email_masked}` : ""}.
          </p>
          <PdfButton view={view} token={token} />
        </div>
      )}

      {view.warnings.length > 0 && (
        <ul className="space-y-2">
          {view.warnings.map((w) => (
            <li key={w} className="flex items-start gap-2 rounded-xl bg-amber-50 px-4 py-3 text-sm text-amber-800">
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" /> {WARNING_TEXT[w] ?? w}
            </li>
          ))}
        </ul>
      )}

      <SummaryStats summary={result.summary} centerSource={view.center.source} />

      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <Card title="Your rank across the area" subtitle={`For “${view.keyword}”, at ${result.cells.length} points around ${view.center.label ?? "the centre"}.`}>
          <Heatmap cells={result.cells} size={view.grid.size} spacingKm={view.grid.spacing_km} centerLabel={view.center.label ?? "Centre"} />
        </Card>
        <Card title="Who ranks higher" subtitle="At the centre of the map, for this search.">
          <HigherList higher={result.higher} attribution={view.attribution.text} />
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr]">
        <Card title="Google profile quick score">
          {b.score && <ScoreBadge score={b.score} />}
          {b.checklist && b.checklist.length > 0 && (
            <div className="mt-5">
              <Checklist items={b.checklist} />
            </div>
          )}
        </Card>
        <Card title="How you compare with the top 3" subtitle="The three businesses Google shows first at the centre.">
          {result.competitors.length > 0 ? (
            <>
              <CompareTable view={view} competitors={result.competitors} />
              <GoogleAttribution text={view.attribution.text} className="mt-3" />
            </>
          ) : (
            <p className="text-sm text-muted-foreground">No other businesses ranked here for this search.</p>
          )}
        </Card>
      </div>

      <section className="relative overflow-hidden rounded-3xl bg-primary p-8 text-primary-foreground shadow-lift md:p-12">
        <div aria-hidden className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-accent/30 blur-3xl" />
        <div className="relative max-w-2xl">
          <h3 className="font-display text-3xl leading-tight md:text-4xl">Want this for all your keywords, every month?</h3>
          <p className="mt-3 text-primary-foreground/80">
            We track every search that matters to your business and fix what&apos;s holding your rankings back.
          </p>
          <Link
            href={CONTACT_URL}
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 font-medium text-accent-foreground transition hover:opacity-95"
          >
            Talk to us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
