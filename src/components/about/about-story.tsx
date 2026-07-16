import { Reveal } from "@/components/reveal";

const storySteps = [
  { y: "The problem", t: "Countless agencies claim SEO. Very few specialize in Local SEO." },
  {
    y: "The gap",
    t: "Businesses that depend on nearby customers need a completely different playbook — GBP, citations, reviews, map visibility.",
  },
  {
    y: "Our answer",
    t: "MyPageSEO was built to solve those challenges specifically. Not everything for everyone — just Local SEO, done exceptionally well.",
  },
];

export function AboutStory() {
  return (
    <section className="container-page py-24 md:py-32">
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <div className="relative rounded-3xl border border-border bg-surface p-8 md:p-10 overflow-hidden">
            <div className="absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-primary via-accent to-transparent" aria-hidden />
            <div className="space-y-8 pl-14">
              {storySteps.map((s, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-14 top-1 grid h-6 w-6 place-items-center rounded-full bg-primary text-primary-foreground text-[10px] font-semibold">
                    {i + 1}
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-accent">{s.y}</div>
                  <div className="mt-1 text-lg font-medium text-foreground leading-snug">{s.t}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-accent">Our story</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl tracking-tight">Focused, on purpose.</h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              We started MyPageSEO because generalist marketing agencies were failing local businesses. Ranking a
              national blog is not the same as ranking a dental practice in Calgary or a plumber in Austin.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Local SEO demands its own strategy: Google Business Profile optimization, local authority, citation
              consistency, location relevance, reputation management and map visibility. So we built a team, a
              methodology and a software platform dedicated to exactly that.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Not everything for everyone. One problem. Solved well.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
