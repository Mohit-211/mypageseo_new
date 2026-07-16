import { Reveal } from "@/components/reveal";
import { process } from "./about-data";

export function ProcessSection() {
  return (
    <section className="bg-surface">
      <div className="container-page py-24 md:py-32">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs font-semibold uppercase tracking-wider text-accent">Our process</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl tracking-tight">From discovery to ongoing growth.</h2>
            <p className="mt-5 text-lg text-muted-foreground">Six connected stages, one dedicated team.</p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {process.map((s, i) => (
            <Reveal key={s.t} delay={i * 90}>
              <div className="relative h-full rounded-3xl border border-border bg-card p-7 shadow-card">
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary text-primary-foreground shadow-card">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <span className="font-display text-4xl text-muted-foreground/25">0{i + 1}</span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{s.t}</h3>
                <p className="mt-1.5 text-[15px] text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
