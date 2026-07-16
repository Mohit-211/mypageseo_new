import { Search, CheckCircle2, MapPin } from "lucide-react";

export function SeoComparisonSection() {
  return (
    <section className="container-page py-24 md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <div className="text-xs font-semibold uppercase tracking-wider text-accent">
          The distinction that changes everything
        </div>
        <h2 className="mt-3 font-display text-4xl md:text-6xl tracking-tight">
          Local SEO isn't SEO.
          <br />
          <span className="text-muted-foreground">Here's why.</span>
        </h2>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          Traditional SEO and Local SEO look similar from the outside. They're
          completely different disciplines with different playbooks, different
          signals, and different goals.
        </p>
      </div>

      <div className="mt-16 grid gap-6 lg:grid-cols-2">
        {/* Traditional SEO card */}
        <div className="rounded-3xl border border-border bg-surface p-8 md:p-10">
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-2 rounded-full bg-card px-3 py-1 text-xs font-medium text-muted-foreground border border-border">
              Traditional SEO
            </div>
            <Search className="h-6 w-6 text-muted-foreground" />
          </div>
          <h3 className="mt-6 font-display text-3xl text-foreground">
            Global rankings for informational searches.
          </h3>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Built for publishers, brands and content sites competing worldwide
            for broad keywords.
          </p>
          <ul className="mt-8 space-y-3">
            {[
              "Global keyword rankings",
              "Blog content & informational queries",
              "Backlinks from anywhere on the web",
              "Domain authority & topical breadth",
              "Traffic is the primary KPI",
            ].map((i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm text-foreground"
              >
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-muted-foreground/50" />
                {i}
              </li>
            ))}
          </ul>
        </div>

        {/* Local SEO card */}
        <div className="relative rounded-3xl border border-primary/30 bg-primary text-primary-foreground p-8 md:p-10 shadow-lift overflow-hidden">
          <div
            className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent/25 blur-3xl"
            aria-hidden
          />
          <div className="relative">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Local SEO — what we do
              </div>
              <MapPin className="h-6 w-6 text-accent" />
            </div>
            <h3 className="mt-6 font-display text-3xl">
              Nearby customers with buying intent.
            </h3>
            <p className="mt-3 text-primary-foreground/70 leading-relaxed">
              Built for businesses that live and die by customers in a specific
              geographic area — the ones ready to call, visit or book today.
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-3">
              {[
                "Google Maps & the 3-pack",
                "Google Business Profile",
                '"Near me" search intent',
                "Local citations & NAP",
                "Phone calls & directions",
                "Reviews & reputation",
                "Geo-relevant landing pages",
                "Real customers, not traffic",
              ].map((i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-accent shrink-0" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
