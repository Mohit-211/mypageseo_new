import Link from "next/link";
import { Sparkles } from "lucide-react";
import { releases } from "./blog-data";

export function SoftwareUpdates() {
  return (
    <section className="py-20 md:py-24">
      <div className="container-page">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div>
            <div className="text-xs font-semibold text-accent uppercase tracking-wider mb-2 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" /> Latest software updates
            </div>
            <h2 className="text-3xl md:text-4xl font-display text-foreground leading-tight">
              A platform that keeps improving.
            </h2>
          </div>
          <Link href="/software" className="text-sm text-primary font-medium hover:opacity-80">
            Explore the platform →
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {releases.map((r, i) => (
            <div
              key={r.v}
              className="rounded-2xl bg-card ring-soft p-5 hover:shadow-lift hover:-translate-y-1 transition-all duration-300"
              style={{ transitionDelay: `${(i % 3) * 40}ms` }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="px-2 py-0.5 rounded-md bg-primary text-primary-foreground text-[11px] font-semibold">{r.v}</span>
                <span className="text-xs text-muted-foreground">{r.date}</span>
              </div>
              <h3 className="font-semibold text-foreground">{r.t}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{r.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
