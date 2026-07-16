import { process } from "./contact-data";
import { RevealCard } from "./reveal-card";

export function ProcessSteps() {
  return (
    <section className="py-20 md:py-24">
      <div className="container-page">
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">What happens next</div>
          <h2 className="text-3xl md:text-5xl font-display text-foreground leading-tight">
            A simple, transparent onboarding process.
          </h2>
        </div>
        <div className="relative">
          <div aria-hidden className="hidden lg:block absolute top-8 left-8 right-8 h-px bg-gradient-to-r from-primary/10 via-primary/40 to-primary/10" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {process.map((p, i) => (
              <RevealCard key={p.t} i={i} delayGroup={4}>
                <div className="rounded-2xl bg-card ring-soft p-6 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-card ring-soft shadow-card flex items-center justify-center relative z-10">
                      <p.i className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-xs font-bold text-accent">STEP {i + 1}</div>
                  </div>
                  <h3 className="font-semibold text-foreground">{p.t}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
                </div>
              </RevealCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
