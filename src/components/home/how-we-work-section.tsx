import { Search, Sparkles, TrendingUp, LineChart } from "lucide-react";

const steps = [
  {
    n: "01",
    icon: Search,
    t: "Analyze",
    d: "We audit your Google Business Profile, local rankings, citations and competitors.",
  },
  {
    n: "02",
    icon: Sparkles,
    t: "Optimize",
    d: "Our specialists optimize your profile, build citations and publish geo-relevant content.",
  },
  {
    n: "03",
    icon: TrendingUp,
    t: "Grow",
    d: "Rankings climb, calls increase and direction requests turn into paying customers.",
  },
  {
    n: "04",
    icon: LineChart,
    t: "Measure",
    d: "Transparent monthly reporting focused on outcomes — not vanity metrics.",
  },
];

export function HowWeWorkSection() {
  return (
    <section id="how-we-work" className="container-page py-20 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <div className="text-xs font-semibold uppercase tracking-wider text-accent">
          How we work
        </div>
        <h2 className="mt-3 font-display text-4xl md:text-5xl tracking-tight">
          A simple journey to local dominance.
        </h2>
        <p className="mt-5 text-lg text-muted-foreground">
          Four connected steps, one dedicated team.
        </p>
      </div>

      <div className="mt-16 relative">
        {/* connector line */}
        <div
          className="hidden lg:block absolute left-8 right-8 top-14 h-px bg-gradient-to-r from-transparent via-border to-transparent"
          aria-hidden
        />

        <div className="grid gap-6 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="relative rounded-3xl border border-border bg-card p-7 shadow-card animate-fade-up"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className="relative z-10 grid h-11 w-11 place-items-center rounded-xl bg-primary text-primary-foreground shadow-card">
                <s.icon className="h-5 w-5" />
              </div>
              <div className="mt-4 flex items-baseline gap-3">
                <span className="text-xs font-semibold text-accent">
                  STEP {s.n}
                </span>
              </div>
              <h3 className="mt-1 text-xl font-semibold text-foreground">
                {s.t}
              </h3>
              <p className="mt-2 text-[15px] text-muted-foreground leading-relaxed">
                {s.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
