import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/reveal";

const perfBars = [28, 40, 36, 52, 46, 60, 68, 64, 78, 82, 88, 95];

export function SoftwareExtensionSection() {
  return (
    <section className="container-page py-20 md:py-28">
      <div className="relative overflow-hidden rounded-[2rem] border border-border bg-surface p-8 md:p-16">
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl" aria-hidden />
        <div className="absolute -left-40 -bottom-40 h-96 w-96 rounded-full bg-accent/10 blur-3xl" aria-hidden />

        <div className="relative grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-card px-3 py-1 text-xs font-medium border border-border shadow-card">
                <Sparkles className="h-3 w-3 text-accent" /> Extension of our expertise
              </div>
              <h2 className="mt-4 font-display text-4xl md:text-5xl tracking-tight">
                Software that backs every recommendation we make.
              </h2>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-lg">
                Our proprietary reporting platform continuously audits Google Business Profiles, citation
                consistency, local rankings, business visibility, reviews and optimization opportunities. It&apos;s
                the ground truth behind every move we make on your behalf.
              </p>
              <Link
                href="/software"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lift hover:-translate-y-0.5 transition"
              >
                Explore the Software <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="relative h-[380px]">
              {/* Screenshot A */}
              <div className="absolute right-0 top-0 w-[85%] rounded-2xl border border-border bg-card/80 backdrop-blur-xl p-4 shadow-lift">
                <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Local Performance
                </div>
                <div className="mt-3 flex items-end gap-1.5 h-20">
                  {perfBars.map((h, i) => (
                    <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-primary to-primary/40" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
              {/* Screenshot B */}
              <div className="absolute left-0 top-28 w-52 rounded-2xl border border-border bg-card/80 backdrop-blur-xl p-4 shadow-lift animate-float">
                <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Geo-Grid</div>
                <div className="mt-3 grid grid-cols-6 gap-1">
                  {Array.from({ length: 36 }).map((_, i) => {
                    const r = ((i * 5) % 18) + 1;
                    const c = r <= 3 ? "bg-emerald-400" : r <= 8 ? "bg-amber-300" : "bg-rose-300/80";
                    return <div key={i} className={`aspect-square rounded-sm ${c}`} />;
                  })}
                </div>
              </div>
              {/* Screenshot C */}
              <div
                className="absolute right-8 bottom-0 w-60 rounded-2xl border border-border bg-card/80 backdrop-blur-xl p-4 shadow-lift"
                style={{ animation: "float 8s ease-in-out infinite 1.5s" }}
              >
                <div className="flex items-center justify-between">
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">GBP Audit</div>
                  <ShieldCheck className="h-3.5 w-3.5 text-accent" />
                </div>
                <div className="mt-2 font-display text-4xl">
                  94<span className="text-sm text-muted-foreground">/100</span>
                </div>
                <div className="mt-3 h-1 rounded-full bg-surface-muted overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: "94%" }} />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
