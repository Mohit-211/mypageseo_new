import { showcases } from "@/components/software/software-data";
import { ShowcaseMockup } from "@/components/software/showcase-mockups";

export function ShowcaseSection() {
  return (
    <section id="reports" className="py-20 md:py-28 bg-surface">
      <div className="container-page">
        <div className="max-w-2xl mb-16">
          <div className="text-xs font-medium text-accent uppercase tracking-wider mb-3">
            Inside the platform
          </div>
          <h2 className="text-3xl md:text-5xl font-display text-foreground leading-tight">
            A closer look at how it works.
          </h2>
        </div>
        <div className="space-y-24">
          {showcases.map((s, i) => (
            <div
              key={s.title}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                i % 2 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div>
                <div className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">
                  0{i + 1}
                </div>
                <h3 className="text-2xl md:text-3xl font-display text-foreground mb-4">
                  {s.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {s.body}
                </p>
              </div>
              <ShowcaseMockup kind={s.mockup} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
