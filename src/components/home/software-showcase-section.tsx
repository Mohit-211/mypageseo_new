import Link from "next/link";
import { Sparkles, CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";

export function SoftwareShowcaseSection() {
  return (
    <section className="container-page py-20 md:py-28">
      <div className="relative overflow-hidden rounded-[2rem] bg-primary text-primary-foreground p-8 md:p-16">
        <div
          className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-accent/20 blur-3xl"
          aria-hidden
        />
        <div
          className="absolute -left-40 -bottom-40 h-96 w-96 rounded-full bg-white/5 blur-3xl"
          aria-hidden
        />

        <div className="relative grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium">
              <Sparkles className="h-3 w-3 text-accent" /> The MyPageSEO
              Platform
            </div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight">
              Every decision, backed by our own reporting platform.
            </h2>
            <p className="mt-5 text-primary-foreground/75 text-lg leading-relaxed max-w-lg">
              Local SEO Reports, Google Business Profile audits, Citation
              Reports, local performance tracking, competitor insights and
              actionable recommendations — all in one place, powering every move
              our specialists make.
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-3 max-w-md">
              {[
                "Local SEO Reports",
                "GBP Audits",
                "Citation Reports",
                "Local Performance",
                "Competitor Insights",
                "Recommendations",
              ].map((i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-sm text-primary-foreground/90"
                >
                  <CheckCircle2 className="h-4 w-4 text-accent" /> {i}
                </li>
              ))}
            </ul>
            <Link
              href="/software"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:opacity-95 transition"
            >
              Explore the Software <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Floating screenshots */}
          <div className="relative h-[440px] hidden lg:block">
            {/* Screenshot A — big */}
            <div className="absolute right-0 top-0 w-[85%] rounded-2xl border border-white/15 bg-white/10 backdrop-blur-xl p-4 shadow-lift">
              <div className="text-[10px] font-semibold uppercase tracking-wider text-primary-foreground/70">
                Local Performance
              </div>
              <div className="mt-3 flex items-end gap-1.5 h-24">
                {[30, 42, 38, 55, 48, 62, 70, 65, 78, 82, 88, 95].map(
                  (h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t bg-gradient-to-t from-accent to-accent/40"
                      style={{ height: `${h}%` }}
                    />
                  )
                )}
              </div>
              <div className="mt-3 flex justify-between text-[10px] text-primary-foreground/60">
                <span>Jan</span>
                <span>Dec</span>
              </div>
            </div>

            {/* Screenshot B — geo grid */}
            <div className="absolute left-0 top-32 w-56 rounded-2xl border border-white/15 bg-white/10 backdrop-blur-xl p-4 shadow-lift animate-float">
              <div className="text-[10px] font-semibold uppercase tracking-wider text-primary-foreground/70">
                Geo-Grid Rank
              </div>
              <div className="mt-3 grid grid-cols-6 gap-1">
                {Array.from({ length: 36 }).map((_, i) => {
                  const r = ((i * 5) % 18) + 1;
                  const c =
                    r <= 3
                      ? "bg-emerald-400"
                      : r <= 8
                      ? "bg-amber-300"
                      : "bg-rose-300/80";
                  return (
                    <div key={i} className={`aspect-square rounded-sm ${c}`} />
                  );
                })}
              </div>
            </div>

            {/* Screenshot C — GBP audit */}
            <div
              className="absolute right-8 bottom-0 w-64 rounded-2xl border border-white/15 bg-white/10 backdrop-blur-xl p-4 shadow-lift"
              style={{ animation: "float 8s ease-in-out infinite 1.5s" }}
            >
              <div className="flex items-center justify-between">
                <div className="text-[10px] font-semibold uppercase tracking-wider text-primary-foreground/70">
                  GBP Audit
                </div>
                <ShieldCheck className="h-3.5 w-3.5 text-accent" />
              </div>
              <div className="mt-3 font-display text-4xl">
                94
                <span className="text-sm text-primary-foreground/60">/100</span>
              </div>
              <div className="mt-2 text-[10px] text-primary-foreground/60">
                4 recommendations available
              </div>
              <div className="mt-3 h-1 rounded-full bg-white/10 overflow-hidden">
                <div
                  className="h-full bg-emerald-400 rounded-full"
                  style={{ width: "94%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
