import { Reveal } from "@/components/reveal";
import { industries } from "./about-data";

export function IndustriesSection() {
  return (
    <section className="container-page py-24 md:py-32">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs font-semibold uppercase tracking-wider text-accent">Industries</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl tracking-tight">Built for businesses that win locally.</h2>
        </div>
      </Reveal>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {industries.map((it, i) => (
          <Reveal key={it.t} delay={i * 40}>
            <div className="group h-full rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-lift">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-primary-soft to-accent/10 text-primary">
                <it.icon className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <div className="mt-5 text-sm font-semibold text-foreground">{it.t}</div>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{it.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
