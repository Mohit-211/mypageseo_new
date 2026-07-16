import { challenges } from "@/components/industries/industries-data";

export function ChallengesSection() {
  return (
    <section className="bg-surface/60 border-y border-border/60">
      <div className="container-page py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">Why industry matters</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
            Every industry has different local search challenges.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            The Local SEO playbook is the same. The plays are not. Category dictates which levers matter most, which
            keywords are worth pursuing, and which profile signals your customers actually care about.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {challenges.map((c) => (
            <div
              key={c.title}
              className="group rounded-2xl border border-border/70 bg-background p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/5 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <c.icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 text-base font-semibold text-foreground">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
