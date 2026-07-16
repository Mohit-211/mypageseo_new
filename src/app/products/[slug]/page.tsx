import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Check, ChevronDown, Sparkles, Play } from "lucide-react";
import { getProduct, products, type Product } from "@/lib/ecosystem";
import {
  LocalPackIllustration,
  MobileGBPIllustration,
  GrowthCurveIllustration,
  HeatMapIllustration,
  ReviewWallIllustration,
  CitationNetworkIllustration,
  SearchResultIllustration,
  GBPHealthIllustration,
  CollaborationIllustration,
} from "@/components/illustrations";

export const Route = createFileRoute("/products/$slug")({
  head: ({ params }) => {
    const p = getProduct(params.slug);
    if (!p) return { meta: [{ title: "Product — MyPageSEO" }, { name: "robots", content: "noindex" }] };
    return {
      meta: [
        { title: `${p.name} — MyPageSEO Product` },
        { name: "description", content: p.tagline },
        { property: "og:title", content: `${p.name} — MyPageSEO` },
        { property: "og:description", content: p.tagline },
        { property: "og:type", content: "website" },
      ],
      links: [{ rel: "canonical", href: `/products/${p.slug}` }],
    };
  },
  loader: ({ params }) => {
    const p = getProduct(params.slug);
    if (!p) throw notFound();
    return { product: p };
  },
  component: ProductDetail,
  notFoundComponent: () => (
    <div className="container-page py-24 text-center">
      <h1 className="text-2xl font-semibold">Product not found</h1>
      <Link to="/products" className="mt-4 inline-flex text-primary hover:text-accent">← All products</Link>
    </div>
  ),
});

function ProductDetail() {
  const { product } = Route.useLoaderData() as { product: Product };
  const Icon = product.icon;
  const other = products.filter((p) => p.slug !== product.slug).slice(0, 3);
  const isAccent = product.accent === "accent";

  return (
    <div className="bg-background">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-surface via-background to-background" />
        <div
          className="absolute inset-x-0 top-0 -z-10 h-[520px] opacity-70"
          style={{
            background: isAccent
              ? "radial-gradient(60% 60% at 50% 0%, color-mix(in oklab, var(--color-accent) 15%, transparent), transparent 70%)"
              : "radial-gradient(60% 60% at 50% 0%, color-mix(in oklab, var(--color-primary) 15%, transparent), transparent 70%)",
          }}
        />
        <div className="container-page pt-20 pb-16 md:pt-24 md:pb-24 grid gap-12 lg:grid-cols-[1.15fr_1fr] items-center">
          <div>
            <Link to="/products" className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground">
              ← Product Ecosystem
            </Link>
            <div className="mt-6 inline-flex items-center gap-3">
              <span className={`grid h-14 w-14 place-items-center rounded-2xl ${isAccent ? "bg-accent/10 text-accent" : "bg-primary/10 text-primary"}`}>
                <Icon className="h-6 w-6" strokeWidth={1.75} />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-accent">MyPageSEO Product</p>
                <p className="text-sm text-muted-foreground">{product.personality}</p>
              </div>
            </div>
            <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight text-foreground">{product.name}</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl">{product.tagline}</p>
            <p className="mt-6 text-base text-foreground/80 max-w-xl leading-relaxed">{product.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/get-started" className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-card transition-all hover:-translate-y-0.5 hover:shadow-lift">
                Start Using {product.name} <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary/40">
                <Play className="h-3.5 w-3.5" /> Request a Demo
              </Link>
            </div>
          </div>

          <ProductHeroIllustration slug={product.slug} />
        </div>
      </section>

      {/* Product-specific secondary illustration */}
      <section className="container-page pt-16 grid gap-10 lg:grid-cols-2 items-center">
        <ProductSecondaryIllustration slug={product.slug} />
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">In the wild</p>
          <h2 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight">
            How {product.name} shows up for real businesses.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">{product.intro}</p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-surface/60 border-y border-border/60">
        <div className="container-page py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">Features</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">What {product.name} does.</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {product.features.map((f) => (
              <div key={f.title} className="rounded-2xl border border-border/70 bg-background p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-lift">
                <span className={`grid h-11 w-11 place-items-center rounded-xl ${isAccent ? "bg-accent/10 text-accent" : "bg-primary/5 text-primary"}`}>
                  <f.icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 text-base font-semibold text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="container-page py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">Workflow</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">Built to fit how your team works.</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              {product.name} slots into your existing operations — one login, one dashboard, and connections to the rest of
              the MyPageSEO ecosystem so your data works together.
            </p>
            <ul className="mt-6 space-y-3">
              {["Connect your data sources", "Configure locations & teams", "Automate the repeatable work", "Report on outcomes, not activity"].map((s) => (
                <li key={s} className="flex items-center gap-3 text-sm text-foreground/80">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-accent/10 text-accent">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <WorkflowMockup isAccent={isAccent} />
        </div>
      </section>

      {/* USE CASES */}
      <section className="bg-surface/60 border-y border-border/60">
        <div className="container-page py-20 grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">Built for</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">Who uses {product.name}.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {product.useCases.map((u) => (
              <div key={u} className="rounded-2xl border border-border/70 bg-background p-6 shadow-card">
                <Sparkles className="h-4 w-4 text-accent" />
                <p className="mt-3 text-sm font-semibold text-foreground">{u}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-page py-24 grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">FAQ</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">Common questions.</h2>
        </div>
        <div className="divide-y divide-border/60 rounded-2xl border border-border/70 bg-background shadow-card">
          {product.faqs.map((f) => (
            <FaqItem key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </section>

      {/* OTHER PRODUCTS */}
      <section className="bg-surface/60 border-y border-border/60">
        <div className="container-page py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">Ecosystem</p>
          <h2 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight">Explore other products.</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {other.map((r) => (
              <Link key={r.slug} to="/products/$slug" params={{ slug: r.slug }} className="group rounded-2xl border border-border/70 bg-background p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-lift hover:border-accent/30">
                <span className={`grid h-10 w-10 place-items-center rounded-xl ${r.accent === "accent" ? "bg-accent/10 text-accent" : "bg-primary/5 text-primary"}`}>
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
          <h2 className="relative text-3xl md:text-4xl font-semibold tracking-tight text-primary-foreground max-w-2xl mx-auto">
            See {product.name} in action.
          </h2>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/get-started" className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-lift transition-all hover:-translate-y-0.5">
              Get Started <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/5 px-6 py-3 text-sm font-semibold text-primary-foreground backdrop-blur transition-all hover:bg-primary-foreground/15">
              Request a Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

/**
 * Every product gets a distinct hero illustration + a distinct secondary
 * illustration, chosen from the illustration library. This diversifies the
 * visual language across the product pages instead of repeating a dashboard.
 */
function ProductHeroIllustration({ slug }: { slug: string }) {
  switch (slug) {
    case "mypageseo":
      return <GBPHealthIllustration />;
    case "mypageads":
      return <GrowthCurveIllustration />;
    case "mypagesmo":
      return <SearchResultIllustration query="best coffee shop downtown" />;
    case "mypagereputation":
      return <ReviewWallIllustration />;
    case "mypagecontent":
      return <SearchResultIllustration query="plumber near me" />;
    case "mypagesites":
      return <MobileGBPIllustration />;
    default:
      return <GBPHealthIllustration />;
  }
}

function ProductSecondaryIllustration({ slug }: { slug: string }) {
  switch (slug) {
    case "mypageseo":
      return <HeatMapIllustration />;
    case "mypageads":
      return <LocalPackIllustration />;
    case "mypagesmo":
      return <ReviewWallIllustration />;
    case "mypagereputation":
      return <CollaborationIllustration />;
    case "mypagecontent":
      return <CitationNetworkIllustration />;
    case "mypagesites":
      return <GrowthCurveIllustration />;
    default:
      return <CitationNetworkIllustration />;
  }
}


function WorkflowMockup({ isAccent }: { isAccent: boolean }) {
  const steps = ["Connect", "Configure", "Automate", "Report"];
  return (
    <div className="relative">
      <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 blur-2xl -z-10" />
      <div className="rounded-2xl border border-border/70 bg-background p-6 shadow-lift">
        <div className="relative">
          <div className="absolute left-4 top-4 bottom-4 w-px bg-gradient-to-b from-accent/40 to-transparent" />
          <ol className="space-y-4">
            {steps.map((s, i) => (
              <li key={s} className="relative flex items-start gap-4">
                <span className={`relative z-10 grid h-8 w-8 shrink-0 place-items-center rounded-full text-xs font-semibold ${isAccent ? "bg-accent text-accent-foreground" : "bg-primary text-primary-foreground"}`}>
                  {i + 1}
                </span>
                <div className="flex-1 rounded-xl border border-border/60 bg-surface/40 p-4">
                  <p className="text-sm font-semibold text-foreground">{s}</p>
                  <div className="mt-2 h-1.5 rounded-full bg-muted-foreground/15 overflow-hidden">
                    <div className={`h-full ${isAccent ? "bg-accent" : "bg-primary"}`} style={{ width: `${(i + 1) * 25}%` }} />
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
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
