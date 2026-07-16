import { Handshake, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/reveal";

const commitments = [
  "Clear scope, no surprises",
  "Monthly reports focused on outcomes",
  "Direct access to your strategist",
  "No guaranteed-rankings promises",
  "Cancel anytime — no lock-ins",
];

export function TransparencySection() {
  return (
    <section className="container-page py-20 md:py-28">
      <div className="relative overflow-hidden rounded-[2rem] border border-border bg-surface p-8 md:p-16">
        <div className="absolute -right-40 top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" aria-hidden />
        <div className="relative grid lg:grid-cols-5 gap-10 items-center">
          <Reveal className="lg:col-span-3">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-card px-3 py-1 text-xs font-medium border border-border">
                <Handshake className="h-3 w-3 text-accent" /> Our commitment to transparency
              </div>
              <h2 className="mt-4 font-display text-4xl md:text-5xl tracking-tight leading-tight">
                You&apos;ll always know what we&apos;re doing — and why.
              </h2>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                Clients always understand what work is being performed, why recommendations are made, and how
                progress is measured. Sustainable Local SEO requires consistency — not shortcuts or guaranteed
                rankings.
              </p>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-2" delay={150}>
            <ul className="space-y-3">
              {commitments.map((i) => (
                <li key={i} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-card">
                  <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-primary/10 text-primary">
                    <ShieldCheck className="h-3 w-3" />
                  </span>
                  <span className="text-sm font-medium text-foreground">{i}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
