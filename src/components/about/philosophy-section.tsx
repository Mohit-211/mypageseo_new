import { Eye, Ruler, TrendingUp } from "lucide-react";
import { Reveal } from "@/components/reveal";

const principles = [
  { icon: Eye, t: "Clarity", d: "You should always understand what we're doing and why — no jargon, no hand-waving." },
  { icon: Ruler, t: "Consistency", d: "Local SEO rewards patient, compounding execution — not aggressive shortcuts." },
  { icon: TrendingUp, t: "Measurable growth", d: "Every action ties back to a business outcome: calls, bookings, visits, revenue." },
];

export function PhilosophySection() {
  return (
    <section className="container-page py-24 md:py-32">
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-xs font-semibold uppercase tracking-wider text-accent">Our philosophy</div>
          <h2 className="mt-3 font-display text-5xl md:text-7xl tracking-tight leading-[1.05]">
            Easier to <em className="not-italic text-gradient">discover</em>.<br />
            Easier to <em className="not-italic text-gradient">trust</em>.<br />
            Easier to <em className="not-italic text-gradient">choose</em>.
          </h2>
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Local SEO isn&apos;t about chasing algorithms. It&apos;s about making great businesses impossible to miss
            when nearby customers are ready to buy.
          </p>
        </div>
      </Reveal>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {principles.map((p, i) => (
          <Reveal key={p.t} delay={i * 100}>
            <div className="rounded-3xl border border-border bg-card p-8 shadow-card">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/10 text-accent">
                <p.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-6 font-display text-2xl">{p.t}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{p.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
