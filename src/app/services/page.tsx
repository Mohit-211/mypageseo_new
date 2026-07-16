import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Sparkles, MapPin, Compass, Layers } from "lucide-react";
import { services } from "@/lib/ecosystem";
import { LocalPackIllustration, CustomerJourneyIllustration, ComparisonIllustration } from "@/components/illustrations";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Local SEO Services — MyPageSEO" },
      {
        name: "description",
        content:
          "Specialized Local SEO services — GBP optimization, citations, local landing pages, reputation growth, multi-location SEO, reporting, and more.",
      },
      { property: "og:title", content: "MyPageSEO Services — Local SEO Specialists" },
      { property: "og:description", content: "A complete Local SEO service catalog for businesses across the US and Canada." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesHub,
});

function ServicesHub() {
  return (
    <div className="bg-background">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-surface via-background to-background" />
        <div
          className="absolute inset-x-0 top-0 -z-10 h-[520px] opacity-70"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 0%, color-mix(in oklab, var(--color-primary) 12%, transparent), transparent 70%)",
          }}
        />
        <div className="container-page pt-24 pb-16 md:pt-28 md:pb-20 grid gap-12 lg:grid-cols-[1.15fr_1fr] items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/80 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              Local SEO — a specialized discipline
            </span>
            <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight text-foreground">
              Every service, built to win in local search.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
              Local SEO isn't a subset of traditional SEO — it's a distinct discipline with its own signals, tools, and
              strategies. Every service below contributes to helping your business appear more prominently in Google Maps,
              Google Business Profile, and location-based search.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/get-started"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-card transition-all hover:-translate-y-0.5 hover:shadow-lift"
              >
                Explore Plans <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary/40"
              >
                Talk to a Specialist
              </Link>
            </div>
          </div>
          <HeroCollage />
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="container-page pb-24">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">Service catalog</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">One catalog. One methodology.</h2>
          <p className="mt-4 text-muted-foreground">
            Every service below is delivered by the same specialists, backed by the same software, and tied to the same
            outcome — more local customers.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="group relative flex flex-col rounded-3xl border border-border/70 bg-background p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift hover:border-accent/30"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/5 text-primary transition-colors group-hover:bg-accent/10 group-hover:text-accent">
                  <s.icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <h3 className="text-base font-semibold text-foreground">{s.name}</h3>
              </div>
              <p className="mt-5 text-sm text-muted-foreground leading-relaxed">{s.intro}</p>

              <ul className="mt-5 space-y-2">
                {s.deliverables.slice(0, 3).map((d) => (
                  <li key={d} className="flex gap-2 text-xs text-foreground/80">
                    <Check className="h-3.5 w-3.5 text-accent mt-0.5 shrink-0" strokeWidth={3} />
                    {d}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4">
                <div className="flex gap-4">
                  {s.outcomes.slice(0, 2).map((o) => (
                    <div key={o.label}>
                      <p className="text-sm font-semibold text-foreground">{o.value}</p>
                      <p className="text-[10px] text-muted-foreground">{o.label}</p>
                    </div>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary transition-colors group-hover:text-accent">
                  Learn more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CUSTOMER JOURNEY + COMPARISON */}
      <section className="container-page pb-24 grid gap-10 lg:grid-cols-2 items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">Local vs traditional</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">A different discipline entirely.</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-md">
            Traditional SEO earns national organic traffic. Local SEO earns customers within a driving radius. The
            signals, tools, and playbook are meaningfully different.
          </p>
        </div>
        <ComparisonIllustration />
      </section>

      <section className="container-page pb-24">
        <div className="mb-8 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">The customer journey</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">From search to storefront.</h2>
        </div>
        <CustomerJourneyIllustration />
      </section>

      {/* METHODOLOGY */}
      <section className="bg-surface/60 border-y border-border/60">

        <div className="container-page py-24 grid gap-12 lg:grid-cols-3">
          {[
            { icon: Compass, t: "Diagnose before we prescribe", c: "Every engagement begins with a rigorous audit. We don't guess at what needs fixing." },
            { icon: Layers, t: "Execute continuously", c: "Local SEO compounds. We work every week, not in one-off bursts." },
            { icon: MapPin, t: "Measure real outcomes", c: "Calls, direction requests, and qualified leads — not vanity metrics." },
          ].map((x) => (
            <div key={x.t} className="rounded-3xl border border-border/70 bg-background p-8 shadow-card">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/5 text-primary">
                <x.icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{x.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{x.c}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-page py-24">
        <div
          className="relative overflow-hidden rounded-3xl px-8 py-20 md:px-16 text-center"
          style={{
            background:
              "linear-gradient(135deg, var(--color-primary) 0%, color-mix(in oklab, var(--color-primary) 80%, var(--color-accent) 20%) 100%)",
          }}
        >
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full opacity-30 blur-3xl" style={{ background: "var(--color-accent)" }} />
          <h2 className="relative text-3xl md:text-5xl font-semibold tracking-tight text-primary-foreground max-w-3xl mx-auto">
            Ready to grow through Local SEO?
          </h2>
          <p className="relative mt-5 text-primary-foreground/80 max-w-xl mx-auto">
            Book a strategy call or explore a plan that fits your business.
          </p>
          <div className="relative mt-10 flex flex-wrap justify-center gap-3">
            <Link to="/get-started" className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-lift transition-all hover:-translate-y-0.5">
              Get Started <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/5 px-6 py-3 text-sm font-semibold text-primary-foreground backdrop-blur transition-all hover:bg-primary-foreground/15">
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function HeroCollage() {
  return <LocalPackIllustration />;
}

