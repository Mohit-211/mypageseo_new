import { Reveal } from "@/components/reveal";
import { teamRoles } from "./about-data";

export function TeamRolesSection() {
  return (
    <section className="container-page py-20 md:py-28">
      <Reveal>
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-accent">The team</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl tracking-tight">Meet the team behind the rankings.</h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Departments and disciplines — because it takes more than one specialist to win local search.
          </p>
        </div>
      </Reveal>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {teamRoles.map((r, i) => (
          <Reveal key={r.t} delay={i * 50}>
            <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-lift">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary text-primary-foreground">
                <r.icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <h3 className="mt-5 text-[15px] font-semibold text-foreground leading-snug">{r.t}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{r.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
