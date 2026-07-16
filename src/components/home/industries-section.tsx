import { industries } from "@/lib/home-data";

export function IndustriesSection() {
  return (
    <section className="bg-surface">
      <div className="container-page py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs font-semibold uppercase tracking-wider text-accent">
            Industries
          </div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl tracking-tight">
            Built for businesses that depend on local customers.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            If your customers come from a specific area, we're built for you.
          </p>
        </div>

        <div className="mt-14 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
          {industries.map((it) => (
            <div
              key={it.t}
              className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-lift"
            >
              <div
                className={`grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br ${it.g}`}
              >
                <it.icon className="h-7 w-7 text-primary" strokeWidth={1.5} />
              </div>
              <div className="mt-5 text-sm font-semibold text-foreground">
                {it.t}
              </div>
              <div className="mt-1 text-xs text-muted-foreground">
                Local SEO built for {it.t.toLowerCase()}.
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
