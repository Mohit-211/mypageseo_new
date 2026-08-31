import { Users, Target, Cpu } from "lucide-react";

const REASONS = [
  {
    icon: Users,
    t: "One team, six specialties",
    c: "Every service works together under one strategy and one point of contact — not six vendors pulling in different directions.",
  },
  {
    icon: Target,
    t: "Built around your business",
    c: "No templated packages. Every engagement is scoped around your locations, goals, and competitive landscape.",
  },
  {
    icon: Cpu,
    t: "Local search-first",
    c: "Every service is built around the realities of Local SEO — not generic marketing.",
  },
];

export function WhySection() {
  return (
    <section className="bg-surface/60 border-y border-border/60">
      <div className="container-page py-16 grid gap-6 md:grid-cols-3">
        {REASONS.map((x) => (
          <div
            key={x.t}
            className="rounded-3xl border border-border/70 bg-background p-7 shadow-card"
          >
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/10 text-accent">
              <x.icon className="h-5 w-5" strokeWidth={1.75} />
            </span>
            <h3 className="mt-4 text-base font-semibold text-foreground">
              {x.t}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              {x.c}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
