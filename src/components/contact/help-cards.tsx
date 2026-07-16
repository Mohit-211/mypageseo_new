import { helpCards } from "./contact-data";
import { RevealCard } from "./reveal-card";

export function HelpCards() {
  return (
    <section className="py-20 md:py-24 bg-surface">
      <div className="container-page">
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">How can we help?</div>
          <h2 className="text-3xl md:text-5xl font-display text-foreground leading-tight">
            The most common reasons businesses reach out.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {helpCards.map((h, i) => (
            <RevealCard key={h.t} i={i} delayGroup={4}>
              <div className="group rounded-2xl bg-card ring-soft p-6 h-full hover:shadow-lift hover:-translate-y-1 transition-all duration-300">
                <div className="w-11 h-11 rounded-xl bg-primary-soft flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <h.i className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-foreground mb-1.5">{h.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{h.d}</p>
              </div>
            </RevealCard>
          ))}
        </div>
      </div>
    </section>
  );
}
