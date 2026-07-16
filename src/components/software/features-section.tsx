import { features } from "@/components/software/software-data";
import { FeatureCard } from "@/components/software/feature-card";

export function FeaturesSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-medium text-accent uppercase tracking-wider mb-3">
            Platform capabilities
          </div>
          <h2 className="text-3xl md:text-5xl font-display text-foreground leading-tight">
            Everything you need to understand your local presence.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Local SEO success depends on dozens of interconnected ranking
            signals. The platform brings them together in one intuitive
            interface.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <FeatureCard key={f.t} f={f} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
