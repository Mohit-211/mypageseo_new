import { included } from "./pricing-data";

export function IncludedFeatures() {
  return (
    <section className="container-page py-24">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">What&apos;s included</p>
        <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">The essentials, in every plan.</h2>
        <p className="mt-4 text-muted-foreground">
          Every MyPageSEO customer — from Base to Enterprise — gets the same foundation of transparent Local SEO
          fundamentals.
        </p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {included.map((f) => (
          <div
            key={f.title}
            className="group rounded-2xl border border-border/70 bg-background p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-lift"
          >
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/5 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <f.icon className="h-5 w-5" strokeWidth={1.75} />
            </div>
            <h3 className="mt-5 text-base font-semibold text-foreground">{f.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
