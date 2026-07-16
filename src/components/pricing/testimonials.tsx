import { Star } from "lucide-react";
import { testimonials } from "./pricing-data";

export function Testimonials() {
  return (
    <section className="container-page py-24">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">Client outcomes</p>
        <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
          Real businesses. Measurable local growth.
        </h2>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="rounded-2xl border border-border/70 bg-background p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-lift"
          >
            <div className="flex gap-1 text-accent">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent" />
              ))}
            </div>
            <blockquote className="mt-4 text-[15px] leading-relaxed text-foreground">&quot;{t.quote}&quot;</blockquote>
            <figcaption className="mt-6 border-t border-border/60 pt-4">
              <p className="text-sm font-semibold text-foreground">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
