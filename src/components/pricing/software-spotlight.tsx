"use client";

import Link from "next/link";
import { Check, ArrowRight, Star } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const spotlightPoints = [
  "GBP health scoring & audit history",
  "Geo-grid rank tracking across service areas",
  "Citation consistency & suppression tools",
  "Competitor visibility benchmarking",
];

const metrics = [
  { l: "GBP score", v: "94", d: "+8" },
  { l: "Rankings", v: "127", d: "+21" },
  { l: "Calls", v: "482", d: "+63%" },
];

export function SoftwareSpotlight() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="bg-surface/60 border-y border-border/60">
      <div className="container-page py-24 grid gap-12 lg:grid-cols-2 items-center">
        <div
          ref={ref}
          className={`transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">Included software</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
            Proprietary Local SEO reporting, in every plan.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            MyPageSEO Software audits Google Business Profiles, monitors citation consistency, tracks local rankings
            across geo-grids, benchmarks competitors, and surfaces optimization opportunities — all in one dashboard
            your team actually understands.
          </p>
          <ul className="mt-6 space-y-3">
            {spotlightPoints.map((x) => (
              <li key={x} className="flex gap-3 text-sm text-foreground/90">
                <Check className="h-4 w-4 text-accent mt-0.5" strokeWidth={3} />
                {x}
              </li>
            ))}
          </ul>
          <Link
            href="/software"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors"
          >
            Explore MyPageSEO Software <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Dashboard mockup */}
        <div className="relative">
          <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 blur-2xl -z-10" />
          <div className="rounded-2xl border border-border/70 bg-background p-5 shadow-lift">
            <div className="flex items-center justify-between border-b border-border/60 pb-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-accent/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
                <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/20" />
              </div>
              <span className="text-[11px] font-medium text-muted-foreground">Local Visibility Overview</span>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {metrics.map((m) => (
                <div key={m.l} className="rounded-xl border border-border/60 bg-surface/60 p-3">
                  <p className="text-[11px] text-muted-foreground">{m.l}</p>
                  <p className="mt-1 text-xl font-semibold text-foreground">{m.v}</p>
                  <p className="text-[11px] font-semibold text-accent">{m.d}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-xl border border-border/60 bg-surface/40 p-4">
              <div className="flex items-center justify-between">
                <p className="text-xs font-medium text-foreground">Geo-grid rankings</p>
                <span className="text-[10px] text-muted-foreground">Last 30 days</span>
              </div>
              <div className="mt-3 grid grid-cols-7 gap-1.5">
                {Array.from({ length: 49 }).map((_, i) => {
                  const shade = (i * 37) % 100;
                  const bg =
                    shade > 70 ? "bg-accent" : shade > 45 ? "bg-primary/70" : shade > 20 ? "bg-primary/30" : "bg-muted-foreground/15";
                  return <div key={i} className={`aspect-square rounded ${bg}`} />;
                })}
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-border/60 bg-surface/40 p-3">
                <p className="text-[11px] text-muted-foreground">Direction requests</p>
                <div className="mt-2 flex items-end gap-1 h-14">
                  {[30, 45, 40, 55, 65, 60, 78, 82].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm bg-gradient-to-t from-primary/70 to-accent/80"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
              <div className="rounded-xl border border-border/60 bg-surface/40 p-3">
                <p className="text-[11px] text-muted-foreground">Review velocity</p>
                <div className="mt-2 flex items-center gap-2">
                  <Star className="h-4 w-4 fill-accent text-accent" />
                  <span className="text-lg font-semibold text-foreground">4.8</span>
                  <span className="text-[11px] text-accent font-semibold">+27 this mo</span>
                </div>
                <div className="mt-2 h-1.5 rounded-full bg-muted-foreground/15 overflow-hidden">
                  <div className="h-full w-[82%] bg-gradient-to-r from-primary to-accent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
