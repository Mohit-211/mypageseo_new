import { Reveal } from "@/components/reveal";
import { differentiators } from "./about-data";

export function DifferentiatorsSection() {
  return (
    <section className="container-page py-20 md:py-28">
      <Reveal>
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-accent">What makes us different</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl tracking-tight">Not another marketing agency.</h2>
          <p className="mt-5 text-lg text-muted-foreground">Four commitments that shape every engagement.</p>
        </div>
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {differentiators.map((d, i) => (
          <Reveal key={d.t} delay={i * 80}>
            <div className="group h-full rounded-3xl border border-border bg-card p-8 shadow-card transition-all hover:-translate-y-1 hover:shadow-lift">
              <div className="flex items-start justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <d.icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <span className="font-display text-3xl text-muted-foreground/30">0{i + 1}</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-foreground">{d.t}</h3>
              <p className="mt-2 text-[15px] text-muted-foreground leading-relaxed">{d.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
