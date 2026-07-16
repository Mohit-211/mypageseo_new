import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Check, ChevronDown, Sparkles } from "lucide-react";
import { getService, services, type Service } from "@/lib/ecosystem";
import {
  LocalPackIllustration,
  MobileGBPIllustration,
  
  GrowthCurveIllustration,
  HeatMapIllustration,
  ReviewWallIllustration,
  CitationNetworkIllustration,
  SearchResultIllustration,
  GBPHealthIllustration,
} from "@/components/illustrations";
import { Photo, type PhotoKey } from "@/components/photos";

export const Route = createFileRoute("/services/$slug")({
  head: ({ params }) => {
    const s = getService(params.slug);
    if (!s) return { meta: [{ title: "Service — MyPageSEO" }, { name: "robots", content: "noindex" }] };
    return {
      meta: [
        { title: `${s.name} — MyPageSEO` },
        { name: "description", content: s.tagline },
        { property: "og:title", content: `${s.name} — MyPageSEO` },
        { property: "og:description", content: s.tagline },
        { property: "og:type", content: "website" },
      ],
      links: [{ rel: "canonical", href: `/services/${s.slug}` }],
    };
  },
  loader: ({ params }) => {
    const s = getService(params.slug);
    if (!s) throw notFound();
    return { service: s };
  },
  component: ServiceDetail,
  notFoundComponent: () => (
    <div className="container-page py-24 text-center">
      <h1 className="text-2xl font-semibold">Service not found</h1>
      <Link to="/services" className="mt-4 inline-flex text-primary hover:text-accent">← All services</Link>
    </div>
  ),
});

function ServiceDetail() {
  const { service } = Route.useLoaderData() as { service: Service };
  const Icon = service.icon;
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <div className="bg-background">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-surface via-background to-background" />
        <div className="container-page pt-20 pb-16 md:pt-24 md:pb-20 grid gap-12 lg:grid-cols-[1.3fr_1fr] items-center">
          <div>
            <Link to="/services" className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground">
              ← All services
            </Link>
            <div className="mt-6 inline-flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent/10 text-accent">
                <Icon className="h-6 w-6" strokeWidth={1.75} />
              </span>
              <span className="text-xs font-semibold uppercase tracking-widest text-accent">Local SEO Service</span>
            </div>
            <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight text-foreground">{service.name}</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl leading-relaxed">{service.tagline}</p>
            <p className="mt-6 text-base text-foreground/80 max-w-xl leading-relaxed">{service.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/get-started" className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-card transition-all hover:-translate-y-0.5 hover:shadow-lift">
                Get Started <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary/40">
                Talk to a Specialist
              </Link>
            </div>
          </div>

          {/* Outcome card */}
          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 blur-2xl -z-10" />
            <div className="rounded-3xl border border-border/70 bg-background p-6 shadow-lift">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Typical outcomes</p>
              <div className="mt-5 space-y-4">
                {service.outcomes.map((o) => (
                  <div key={o.label} className="flex items-baseline justify-between rounded-2xl border border-border/60 bg-surface/40 p-4">
                    <span className="text-sm text-muted-foreground">{o.label}</span>
                    <span className="text-2xl font-semibold tracking-tight text-foreground">{o.value}</span>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-[11px] text-muted-foreground">Illustrative benchmarks. Actual results vary by market and category.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="bg-surface/60 border-y border-border/60">
        <div className="container-page py-20 grid gap-12 lg:grid-cols-[1fr_1.4fr] items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">Why it matters</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">The case for {service.name}.</h2>
          </div>
          <p className="text-lg text-foreground/80 leading-relaxed">{service.why}</p>
        </div>
      </section>

      {/* VISUAL: service-specific illustration + business outcome scene */}
      <section className="container-page py-20 grid gap-12 lg:grid-cols-2 items-center">
        <ServiceVisual slug={service.slug} />
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">Real businesses. Real outcomes.</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
            {service.name} shows up where it counts — in the neighborhoods you serve.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            When {service.name.toLowerCase()} is done right, the impact isn't a chart in a dashboard — it's a phone
            ringing, a customer walking in, and a booking on the calendar.
          </p>
          <div className="mt-6"><BusinessScene slug={service.slug} /></div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="container-page py-24">

        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">Our approach</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">How MyPageSEO delivers this service.</h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {service.approach.map((a, i) => (
            <div key={a.title} className="rounded-2xl border border-border/70 bg-background p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-lift">
              <span className="text-xs font-semibold text-accent">Step {String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-2 text-base font-semibold text-foreground">{a.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{a.copy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="bg-surface/60 border-y border-border/60">
        <div className="container-page py-20 grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">Deliverables</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">What's included.</h2>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {service.deliverables.map((d) => (
              <li key={d} className="flex items-start gap-3 rounded-xl border border-border/70 bg-background p-4 shadow-card">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent/10 text-accent">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                <span className="text-sm text-foreground">{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-page py-24 grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">FAQ</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">Common questions.</h2>
        </div>
        <div className="divide-y divide-border/60 rounded-2xl border border-border/70 bg-background shadow-card">
          {service.faqs.map((f) => (
            <FaqItem key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </section>

      {/* RELATED */}
      <section className="bg-surface/60 border-y border-border/60">
        <div className="container-page py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">Explore more</p>
          <h2 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight">Related services.</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {related.map((r) => (
              <Link key={r.slug} to="/services/$slug" params={{ slug: r.slug }} className="group rounded-2xl border border-border/70 bg-background p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-lift hover:border-accent/30">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/5 text-primary transition-colors group-hover:bg-accent/10 group-hover:text-accent">
                  <r.icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <h3 className="mt-4 text-sm font-semibold text-foreground">{r.name}</h3>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{r.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page py-24">
        <div className="relative overflow-hidden rounded-3xl px-8 py-16 md:px-16 text-center" style={{ background: "linear-gradient(135deg, var(--color-primary) 0%, color-mix(in oklab, var(--color-primary) 80%, var(--color-accent) 20%) 100%)" }}>
          <Sparkles className="relative mx-auto h-6 w-6 text-primary-foreground/70" />
          <h2 className="relative mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-primary-foreground max-w-2xl mx-auto">
            Ready to improve your local visibility?
          </h2>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/get-started" className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-lift transition-all hover:-translate-y-0.5">
              Get Started <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/5 px-6 py-3 text-sm font-semibold text-primary-foreground backdrop-blur transition-all hover:bg-primary-foreground/15">
              Talk to a Specialist
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen((o) => !o)} className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-surface/40">
        <span className="text-sm font-semibold text-foreground">{q}</span>
        <ChevronDown className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <div className={`grid overflow-hidden px-6 transition-all duration-300 ${open ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden">
          <p className="text-sm text-muted-foreground leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  );
}

/**
 * Map each service to a primary illustration and a "business scene" so the
 * visual language of each service page stays distinct.
 */
function ServiceVisual({ slug }: { slug: string }) {
  switch (slug) {
    case "local-seo":
      return <LocalPackIllustration />;
    case "gbp-optimization":
      return <MobileGBPIllustration />;
    case "citation-management":
      return <CitationNetworkIllustration />;
    case "local-landing-pages":
      return <SearchResultIllustration query="best emergency plumber" />;
    case "local-keyword-strategy":
      return <SearchResultIllustration query="family dentist near me" />;
    case "reputation-growth":
      return <ReviewWallIllustration />;
    case "multi-location-seo":
      return <HeatMapIllustration />;
    case "local-seo-reporting":
      return <GrowthCurveIllustration />;
    case "technical-local-seo":
      return <GBPHealthIllustration />;
    default:
      return <LocalPackIllustration />;
  }
}

function BusinessScene({ slug }: { slug: string }) {
  const map: Record<string, { photo: PhotoKey; alt: string }> = {
    "gbp-optimization": { photo: "dental", alt: "Dentist welcoming a patient in a modern clinic" },
    "local-landing-pages": { photo: "contractor", alt: "Contractor arriving at a customer's home" },
    "reputation-growth": { photo: "restaurant", alt: "Restaurant owner greeting a happy diner" },
    "local-keyword-strategy": { photo: "ownerPhone", alt: "Boutique owner reading an incoming customer inquiry on her phone" },
    "citation-management": { photo: "hotel", alt: "Hotel receptionist handing a keycard to a guest" },
    "technical-local-seo": { photo: "consult", alt: "Consultants advising a small-business owner" },
    "multi-location-seo": { photo: "team", alt: "Marketing team reviewing multi-location performance together" },
    "local-seo-reporting": { photo: "team", alt: "Team reviewing a Local SEO performance report" },
    "local-seo": { photo: "retail", alt: "Boutique owner handing a purchase to a customer" },
  };
  const m = map[slug] ?? { photo: "consult" as PhotoKey, alt: "Local business owner meeting with an advisor" };
  return <Photo src={m.photo} alt={m.alt} aspect="aspect-[4/3]" />;
}


