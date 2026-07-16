import { Check, Target, Activity, MapPin, Eye, Award } from "lucide-react";
import {
  BrowserFrame,
  ScoreRing,
  Bar,
  HeatGrid,
  Sparkline,
} from "@/components/software/ui-primitives";
import { HeroMockup } from "@/components/software/hero-mockup";
import type { ShowcaseMockupKind } from "@/components/software/software-data";

export function ShowcaseMockup({ kind }: { kind: ShowcaseMockupKind }) {
  if (kind === "dashboard") return <HeroMockup />;

  if (kind === "gbp")
    return (
      <BrowserFrame title="app.mypageseo.com/gbp-audit">
        <div className="grid grid-cols-2 gap-4">
          <ScoreRing value={94} label="GBP health" />
          <div className="space-y-2">
            <Bar label="Primary category" value={100} />
            <Bar label="Services & products" value={82} />
            <Bar label="Photos & media" value={76} />
            <Bar label="Posts (90d)" value={64} tone="accent" />
            <Bar label="Q&A completeness" value={48} tone="accent" />
          </div>
        </div>
        <div className="mt-4 space-y-2">
          {[
            { t: "Add 6 service-specific photos", ok: false },
            { t: "Fill 4 missing service descriptions", ok: false },
            { t: "Business hours verified", ok: true },
          ].map((r, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-xs rounded-lg bg-surface-muted px-3 py-2"
            >
              {r.ok ? (
                <Check className="w-4 h-4 text-emerald-600" />
              ) : (
                <Target className="w-4 h-4 text-accent" />
              )}
              <span
                className={
                  r.ok
                    ? "text-muted-foreground line-through"
                    : "text-foreground"
                }
              >
                {r.t}
              </span>
            </div>
          ))}
        </div>
      </BrowserFrame>
    );

  if (kind === "citations")
    return (
      <BrowserFrame title="app.mypageseo.com/citations">
        <div className="grid grid-cols-3 gap-3 mb-4">
          {[
            { n: 142, l: "Listings found" },
            { n: 128, l: "Accurate" },
            { n: 14, l: "Needs fix" },
          ].map((x, i) => (
            <div key={i} className="rounded-xl bg-surface-muted p-3">
              <div className="text-2xl font-semibold text-primary">{x.n}</div>
              <div className="text-[10px] text-muted-foreground">{x.l}</div>
            </div>
          ))}
        </div>
        <div className="space-y-1.5">
          {[
            ["Google", "Accurate", true],
            ["Apple Maps", "Accurate", true],
            ["Yelp", "NAP mismatch", false],
            ["Bing Places", "Accurate", true],
            ["Yellow Pages", "Duplicate found", false],
            ["Facebook", "Accurate", true],
          ].map(([n, s, ok], i) => (
            <div
              key={i}
              className="flex items-center justify-between text-xs rounded-lg px-3 py-2 bg-surface-muted"
            >
              <span className="font-medium">{n}</span>
              <span className={ok ? "text-emerald-700" : "text-accent"}>
                {s}
              </span>
            </div>
          ))}
        </div>
      </BrowserFrame>
    );

  if (kind === "rankings")
    return (
      <BrowserFrame title="app.mypageseo.com/rankings">
        <div className="grid grid-cols-2 gap-5">
          <HeatGrid />
          <div className="space-y-3">
            {[
              { k: "dentist near me", v: 3, d: "+2" },
              { k: "family dentist [city]", v: 5, d: "+1" },
              { k: "emergency dental", v: 7, d: "−1" },
              { k: "teeth whitening", v: 4, d: "+3" },
            ].map((r, i) => (
              <div
                key={i}
                className="flex items-center justify-between text-xs"
              >
                <span className="text-foreground truncate">{r.k}</span>
                <span className="flex items-center gap-2">
                  <span className="font-semibold text-primary">#{r.v}</span>
                  <span
                    className={
                      r.d.startsWith("+") ? "text-emerald-700" : "text-accent"
                    }
                  >
                    {r.d}
                  </span>
                </span>
              </div>
            ))}
            <div className="pt-2">
              <Sparkline points={[7, 6, 6, 5, 5, 4, 4, 3, 3, 3]} />
            </div>
          </div>
        </div>
      </BrowserFrame>
    );

  if (kind === "reviews")
    return (
      <BrowserFrame title="app.mypageseo.com/reviews">
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="rounded-xl bg-surface-muted p-3">
            <div className="text-2xl font-semibold text-primary">4.7★</div>
            <div className="text-[10px] text-muted-foreground">
              Avg rating · 1,284
            </div>
          </div>
          <div className="rounded-xl bg-surface-muted p-3">
            <div className="text-2xl font-semibold text-primary">92%</div>
            <div className="text-[10px] text-muted-foreground">
              Response rate
            </div>
          </div>
          <div className="rounded-xl bg-surface-muted p-3">
            <div className="text-2xl font-semibold text-primary">+38</div>
            <div className="text-[10px] text-muted-foreground">
              New this month
            </div>
          </div>
        </div>
        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((s) => (
            <div key={s} className="flex items-center gap-2 text-xs">
              <span className="w-4">{s}★</span>
              <div className="flex-1 h-1.5 rounded-full bg-primary-soft overflow-hidden">
                <div
                  className="h-full bg-primary"
                  style={{ width: `${[74, 18, 5, 2, 1][5 - s]}%` }}
                />
              </div>
              <span className="w-8 text-right text-muted-foreground">
                {[74, 18, 5, 2, 1][5 - s]}%
              </span>
            </div>
          ))}
        </div>
      </BrowserFrame>
    );

  // exec
  return (
    <BrowserFrame title="app.mypageseo.com/executive-summary">
      <div className="mb-4">
        <div className="text-xs text-muted-foreground">
          Q3 Executive Summary
        </div>
        <div className="text-sm font-semibold">
          Local performance is trending up.
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 mb-4">
        {[
          { i: Activity, l: "Calls from GBP", v: "+42%" },
          { i: MapPin, l: "Direction requests", v: "+31%" },
          { i: Eye, l: "Local impressions", v: "+58%" },
          { i: Award, l: "Top-3 keywords", v: "37 → 61" },
        ].map((x, i) => (
          <div
            key={i}
            className="rounded-xl bg-surface-muted p-3 flex items-center gap-2"
          >
            <x.i className="w-4 h-4 text-accent" />
            <div>
              <div className="text-[10px] text-muted-foreground">{x.l}</div>
              <div className="text-sm font-semibold text-primary">{x.v}</div>
            </div>
          </div>
        ))}
      </div>
      <Sparkline points={[30, 34, 38, 42, 44, 50, 55, 62, 68, 72, 78, 84]} />
    </BrowserFrame>
  );
}
