import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Check,
  Minus,
  ArrowRight,
  Sparkles,
  Rocket,
  Building2,
  Crown,
  LineChart,
  MapPin,
  Star,
  Phone,
  ShieldCheck,
  Gauge,
  Users,
  Zap,
  BarChart3,
  ChevronDown,
} from "lucide-react";
import { Photo } from "@/components/photos";

export const Route = createFileRoute("/get-started")({
  head: () => ({
    meta: [
      { title: "Pricing — Local SEO Plans That Scale | MyPageSEO" },
      {
        name: "description",
        content:
          "Transparent Local SEO pricing for single-location businesses to multi-location enterprises across the US and Canada.",
      },
      { property: "og:title", content: "MyPageSEO Pricing — Local SEO Plans" },
      {
        property: "og:description",
        content:
          "Simple, scalable Local SEO plans backed by proprietary reporting software. Base, Standard, Elite, and Enterprise.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/get-started" }],
  }),
  component: PricingPage,
});

/* ---------------- Data ---------------- */

type Plan = {
  id: string;
  icon: typeof Sparkles;
  name: string;
  tagline: string;
  price: number | null;
  setup?: string;
  cta: string;
  popular?: boolean;
  features: string[];
  inherits?: string;
};

const plans: Plan[] = [
  {
    id: "base",
    icon: Sparkles,
    name: "Base",
    tagline: "For businesses starting their Local SEO journey at a single location.",
    price: 499,
    setup: "One-time onboarding $299",
    cta: "Start with Base",
    features: [
      "1 business location",
      "Local SEO audit & foundation setup",
      "Google Business Profile optimization",
      "10 local keywords tracked",
      "Core citation cleanup (top 20 directories)",
      "Monthly performance report",
      "Email support",
    ],
  },
  {
    id: "standard",
    icon: Rocket,
    name: "Standard",
    tagline: "Ideal for growing businesses that need consistent optimization and stronger visibility.",
    price: 999,
    setup: "One-time onboarding $499",
    cta: "Choose Standard",
    popular: true,
    inherits: "Base",
    features: [
      "Up to 3 business locations",
      "30 local keywords tracked",
      "Extended citation management (60+ directories)",
      "Review monitoring & response guidance",
      "4 Google Business Profile posts / month",
      "1 local landing page / quarter",
      "Bi-weekly performance reporting",
      "Quarterly strategy call",
    ],
  },
  {
    id: "elite",
    icon: Crown,
    name: "Elite",
    tagline: "Built for multi-location brands running larger campaigns with deeper reporting needs.",
    price: 2199,
    setup: "One-time onboarding $999",
    cta: "Choose Elite",
    inherits: "Standard",
    features: [
      "Up to 10 business locations",
      "100 local keywords tracked",
      "Full citation network + suppression",
      "Weekly GBP posts across locations",
      "Monthly local landing pages",
      "Custom reporting dashboard",
      "Dedicated account manager",
      "Monthly strategy session",
      "Priority support",
    ],
  },
  {
    id: "enterprise",
    icon: Building2,
    name: "Enterprise",
    tagline: "Custom Local SEO programs for franchises, chains, and organizations with unique scale.",
    price: null,
    cta: "Talk to Sales",
    inherits: "Elite",
    features: [
      "Unlimited business locations",
      "Custom keyword & market strategy",
      "API integrations & data feeds",
      "White-label reporting available",
      "Executive quarterly business reviews",
      "SLA-backed priority support",
      "Multi-region campaign coordination",
      "Dedicated strategist + analyst team",
    ],
  },
];

const compareRows: { label: string; values: (string | boolean)[] }[] = [
  { label: "Business locations", values: ["1", "Up to 3", "Up to 10", "Unlimited"] },
  { label: "Local keywords tracked", values: ["10", "30", "100", "Custom"] },
  { label: "GBP optimization", values: [true, true, true, true] },
  { label: "Citation management", values: ["Top 20", "60+", "Full network", "Custom"] },
  { label: "Review monitoring", values: [false, true, true, true] },
  { label: "GBP posting", values: [false, "4 / mo", "Weekly", "Custom"] },
  { label: "Local landing pages", values: [false, "Quarterly", "Monthly", "Custom"] },
  { label: "Reporting cadence", values: ["Monthly", "Bi-weekly", "Weekly", "Real-time"] },
  { label: "Software dashboard access", values: [true, true, true, true] },
  { label: "Strategy sessions", values: [false, "Quarterly", "Monthly", "Executive QBRs"] },
  { label: "Dedicated account manager", values: [false, false, true, true] },
  { label: "API integrations", values: [false, false, false, true] },
  { label: "Support", values: ["Email", "Priority email", "Priority + phone", "SLA-backed"] },
];

const included = [
  { icon: BarChart3, title: "Transparent reporting", copy: "Clear dashboards showing exactly what changed and what it means for your business." },
  { icon: Gauge, title: "Continuous monitoring", copy: "We watch rankings, listings, and reviews around the clock so issues never linger." },
  { icon: MapPin, title: "GBP optimization", copy: "Ongoing profile tuning — categories, services, photos, and posts — to stay competitive." },
  { icon: LineChart, title: "MyPageSEO Software", copy: "Every plan includes access to our proprietary Local SEO reporting platform." },
  { icon: ShieldCheck, title: "Measurable performance", copy: "Track calls, direction requests, and qualified leads — not vanity metrics." },
  { icon: Users, title: "Dedicated onboarding", copy: "A guided 30-day launch with a Local SEO specialist ensures a strong start." },
  { icon: Sparkles, title: "Expert guidance", copy: "Real Local SEO strategists — not chatbots — answering questions and shaping strategy." },
  { icon: Zap, title: "Software-first workflow", copy: "Automation handles the heavy lifting so your team focuses on growth decisions." },
];

const testimonials = [
  { quote: "Calls from Google Maps doubled in the first three months. The reporting made it obvious where the growth came from.", name: "Marissa Chen", role: "Owner, Northside Dental" },
  { quote: "We manage 14 locations. MyPageSEO is the first partner that actually made multi-location reporting understandable.", name: "David Alvarez", role: "Marketing Director, Regional HVAC Group" },
  { quote: "Our direction requests are up 3x and we finally rank in the map pack for our core service areas.", name: "Priya Shah", role: "Founder, Bloom Wellness Studio" },
];

const faqs = [
  { q: "Are there any long-term contracts?", a: "No. Plans are month-to-month after your initial 90-day foundation period, which ensures results have time to compound." },
  { q: "What is your cancellation policy?", a: "Cancel anytime after the initial 90 days with 30 days' written notice. No penalties, no drama." },
  { q: "How long does onboarding take?", a: "Most businesses are fully onboarded within 14 days. Multi-location Elite programs typically launch inside 30 days." },
  { q: "Why is there a setup fee?", a: "The one-time fee covers your Local SEO audit, technical foundation, citation cleanup, and dashboard configuration." },
  { q: "Do I get access to your software?", a: "Yes. Every plan — including Base — includes access to the MyPageSEO reporting dashboard." },
  { q: "Can I upgrade my plan later?", a: "Absolutely. Upgrades are prorated and take effect at the start of your next billing cycle." },
  { q: "I have multiple locations — do I need Elite or Enterprise?", a: "Standard covers up to 3 locations. Elite fits 4–10. Enterprise is right for 10+ or franchise / multi-brand programs." },
  { q: "Is a consultation included before I sign up?", a: "Yes — every prospect receives a free 30-minute Local SEO consultation with a strategist." },
];

/* ---------------- Reveal hook ---------------- */

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && (setVisible(true), io.disconnect()),
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, visible };
}

/* ---------------- Page ---------------- */

function PricingPage() {
  const [yearly, setYearly] = useState(false);

  return (
    <div className="bg-background">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-surface via-background to-background" />
        <div
          className="absolute inset-x-0 top-0 -z-10 h-[480px] opacity-60"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 0%, color-mix(in oklab, var(--color-primary) 12%, transparent), transparent 70%)",
          }}
        />
        <div className="container-page pt-24 pb-16 md:pt-32 md:pb-20 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/80 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            Transparent Local SEO pricing
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight text-foreground max-w-4xl mx-auto">
            Simple Local SEO plans that grow with your business.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Whether you serve one neighborhood or hundreds of markets, MyPageSEO offers plans that scale to your local
            visibility goals — backed by proprietary reporting software and real strategists.
          </p>

          {/* Toggle */}
          <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-border/70 bg-background p-1 shadow-card">
            <button
              onClick={() => setYearly(false)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                !yearly ? "bg-primary text-primary-foreground shadow-card" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`relative rounded-full px-5 py-2 text-sm font-medium transition-all ${
                yearly ? "bg-primary text-primary-foreground shadow-card" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Yearly
              <span className="ml-2 rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-semibold text-accent">
                Coming soon
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* PRICING CARDS */}
      <section className="container-page pb-24">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan, i) => (
            <PricingCard key={plan.id} plan={plan} yearly={yearly} delay={i * 60} />
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-muted-foreground">
          Prices in USD. Canadian pricing available on request. All plans include MyPageSEO Software access.
        </p>
      </section>

      {/* COMPARISON TABLE */}
      <section className="bg-surface/60 border-y border-border/60">
        <div className="container-page py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">Compare plans</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">Every feature, side by side.</h2>
            <p className="mt-4 text-muted-foreground">
              A clear view of what each plan includes so you can choose with confidence.
            </p>
          </div>

          <div className="mt-10 overflow-x-auto rounded-2xl border border-border/70 bg-background shadow-card">
            <table className="w-full min-w-[720px] text-sm">
              <thead className="sticky top-0 bg-background">
                <tr className="border-b border-border/70">
                  <th className="px-6 py-5 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Feature
                  </th>
                  {plans.map((p) => (
                    <th key={p.id} className="px-6 py-5 text-left">
                      <div className="flex items-center gap-2">
                        <p.icon className="h-4 w-4 text-accent" />
                        <span className="font-semibold text-foreground">{p.name}</span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row, i) => (
                  <tr
                    key={row.label}
                    className={`border-b border-border/50 last:border-b-0 ${
                      i % 2 === 1 ? "bg-surface/40" : ""
                    }`}
                  >
                    <td className="px-6 py-4 font-medium text-foreground">{row.label}</td>
                    {row.values.map((v, j) => (
                      <td key={j} className="px-6 py-4 text-muted-foreground">
                        {v === true ? (
                          <Check className="h-4 w-4 text-accent" />
                        ) : v === false ? (
                          <Minus className="h-4 w-4 text-muted-foreground/40" />
                        ) : (
                          <span>{v}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* INCLUDED */}
      <section className="container-page py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">What's included</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
            The essentials, in every plan.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Every MyPageSEO customer — from Base to Enterprise — gets the same foundation of transparent Local SEO fundamentals.
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

      {/* SOFTWARE SPOTLIGHT */}
      <SoftwareSpotlight />

      {/* ROI CALCULATOR */}
      <RoiCalculator />

      {/* TESTIMONIALS */}
      <section className="container-page py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">Client outcomes</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
            Real businesses. Measurable local growth.
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="rounded-2xl border border-border/70 bg-background p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="flex gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent" />
                ))}
              </div>
              <blockquote className="mt-4 text-[15px] leading-relaxed text-foreground">"{t.quote}"</blockquote>
              <figcaption className="mt-6 border-t border-border/60 pt-4">
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* LIFESTYLE STRIP */}
      <section className="container-page pb-8">
        <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
          <Photo src="ownerPhone" alt="Business owner reading a new customer inquiry on her phone" aspect="aspect-[4/5]" />
          <Photo src="contractor" alt="Contractor arriving at a customer's home" aspect="aspect-[4/5]" />
          <Photo src="team" alt="Marketing team reviewing local performance" aspect="aspect-[4/5]" />
          <Photo src="retail" alt="Boutique owner handing a purchase to a customer" aspect="aspect-[4/5]" />
        </div>
      </section>


      {/* FAQ */}
      <section className="bg-surface/60 border-y border-border/60">
        <div className="container-page py-24 grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">FAQ</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">Pricing questions, answered.</h2>
            <p className="mt-4 text-muted-foreground">
              Straightforward answers about contracts, onboarding, upgrades, and what's included with every plan.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors"
            >
              Still curious? Talk to a strategist <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="divide-y divide-border/60 rounded-2xl border border-border/70 bg-background shadow-card">
            {faqs.map((f, i) => (
              <FaqItem key={i} q={f.q} a={f.a} />
            ))}
          </div>
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
          <div
            className="absolute -top-24 -right-24 h-72 w-72 rounded-full opacity-30 blur-3xl"
            style={{ background: "var(--color-accent)" }}
          />
          <div
            className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full opacity-20 blur-3xl"
            style={{ background: "white" }}
          />
          <h2 className="relative text-3xl md:text-5xl font-semibold tracking-tight text-primary-foreground max-w-3xl mx-auto">
            Stop competing for visibility. Start being the obvious choice.
          </h2>
          <p className="relative mt-5 text-primary-foreground/80 max-w-xl mx-auto">
            Join businesses across the US and Canada using MyPageSEO to win in local search.
          </p>
          <div className="relative mt-10 flex flex-wrap justify-center gap-3">
            <a
              href="#top"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-lift transition-all hover:-translate-y-0.5"
            >
              Get Started Today <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/5 px-6 py-3 text-sm font-semibold text-primary-foreground backdrop-blur transition-all hover:bg-primary-foreground/15"
            >
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---------------- Sub-components ---------------- */

function PricingCard({ plan, yearly, delay }: { plan: Plan; yearly: boolean; delay: number }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const Icon = plan.icon;
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`relative flex flex-col rounded-2xl border bg-background p-7 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      } ${
        plan.popular
          ? "border-accent/60 shadow-lift md:scale-[1.02] ring-1 ring-accent/20"
          : "border-border/70 shadow-card hover:-translate-y-1 hover:shadow-lift"
      }`}
    >
      {plan.popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent-foreground shadow-card">
          Most Popular
        </span>
      )}
      <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/5 text-primary">
        <Icon className="h-5 w-5" strokeWidth={1.75} />
      </div>
      <h3 className="mt-5 text-xl font-semibold text-foreground">{plan.name}</h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed min-h-[3.5rem]">{plan.tagline}</p>

      <div className="mt-6 min-h-[92px]">
        {plan.price !== null ? (
          <>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-semibold tracking-tight text-foreground">
                ${yearly ? Math.round(plan.price * 0.85) : plan.price}
              </span>
              <span className="text-sm text-muted-foreground">/mo</span>
            </div>
            {plan.setup && <p className="mt-2 text-xs text-muted-foreground">{plan.setup}</p>}
          </>
        ) : (
          <>
            <div className="text-4xl font-semibold tracking-tight text-foreground">Custom</div>
            <p className="mt-2 text-xs text-muted-foreground">Tailored scope & pricing</p>
          </>
        )}
      </div>

      <Link
        to={plan.price === null ? "/contact" : "/checkout"}
        className={`mt-6 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all ${
          plan.popular
            ? "bg-accent text-accent-foreground shadow-card hover:-translate-y-0.5 hover:shadow-lift"
            : "bg-primary text-primary-foreground shadow-card hover:-translate-y-0.5 hover:shadow-lift"
        }`}
      >
        {plan.cta} <ArrowRight className="h-4 w-4" />
      </Link>

      <div className="mt-7 border-t border-border/60 pt-6">
        {plan.inherits && (
          <p className="mb-4 text-xs font-medium text-muted-foreground">
            Everything in <span className="text-foreground font-semibold">{plan.inherits}</span>, plus:
          </p>
        )}
        <ul className="space-y-3">
          {plan.features.map((f) => (
            <li key={f} className="flex gap-3 text-sm text-foreground/90">
              <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent/10 text-accent">
                <Check className="h-3 w-3" strokeWidth={3} />
              </span>
              <span className="leading-relaxed">{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function SoftwareSpotlight() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section className="bg-surface/60 border-y border-border/60">
      <div className="container-page py-24 grid gap-12 lg:grid-cols-2 items-center">
        <div
          ref={ref}
          className={`transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">Included software</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
            Proprietary Local SEO reporting, in every plan.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            MyPageSEO Software audits Google Business Profiles, monitors citation consistency, tracks local rankings across
            geo-grids, benchmarks competitors, and surfaces optimization opportunities — all in one dashboard your team
            actually understands.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "GBP health scoring & audit history",
              "Geo-grid rank tracking across service areas",
              "Citation consistency & suppression tools",
              "Competitor visibility benchmarking",
            ].map((x) => (
              <li key={x} className="flex gap-3 text-sm text-foreground/90">
                <Check className="h-4 w-4 text-accent mt-0.5" strokeWidth={3} />
                {x}
              </li>
            ))}
          </ul>
          <Link
            to="/software"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors"
          >
            Explore MyPageSEO Software <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Dashboard mockup */}
        <div className="relative">
          <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 blur-2xl -z-10" />
          <div className="rounded-2xl border border-border/70 bg-background p-5 shadow-lift">
            <div className="flex items-center justify-between border-b border-border/60 pb-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-accent/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
                <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/20" />
              </div>
              <span className="text-[11px] font-medium text-muted-foreground">Local Visibility Overview</span>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {[
                { l: "GBP score", v: "94", d: "+8" },
                { l: "Rankings", v: "127", d: "+21" },
                { l: "Calls", v: "482", d: "+63%" },
              ].map((m) => (
                <div key={m.l} className="rounded-xl border border-border/60 bg-surface/60 p-3">
                  <p className="text-[11px] text-muted-foreground">{m.l}</p>
                  <p className="mt-1 text-xl font-semibold text-foreground">{m.v}</p>
                  <p className="text-[11px] font-semibold text-accent">{m.d}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-xl border border-border/60 bg-surface/40 p-4">
              <div className="flex items-center justify-between">
                <p className="text-xs font-medium text-foreground">Geo-grid rankings</p>
                <span className="text-[10px] text-muted-foreground">Last 30 days</span>
              </div>
              <div className="mt-3 grid grid-cols-7 gap-1.5">
                {Array.from({ length: 49 }).map((_, i) => {
                  const shade = (i * 37) % 100;
                  const bg =
                    shade > 70
                      ? "bg-accent"
                      : shade > 45
                      ? "bg-primary/70"
                      : shade > 20
                      ? "bg-primary/30"
                      : "bg-muted-foreground/15";
                  return <div key={i} className={`aspect-square rounded ${bg}`} />;
                })}
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-border/60 bg-surface/40 p-3">
                <p className="text-[11px] text-muted-foreground">Direction requests</p>
                <div className="mt-2 flex items-end gap-1 h-14">
                  {[30, 45, 40, 55, 65, 60, 78, 82].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm bg-gradient-to-t from-primary/70 to-accent/80"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
              <div className="rounded-xl border border-border/60 bg-surface/40 p-3">
                <p className="text-[11px] text-muted-foreground">Review velocity</p>
                <div className="mt-2 flex items-center gap-2">
                  <Star className="h-4 w-4 fill-accent text-accent" />
                  <span className="text-lg font-semibold text-foreground">4.8</span>
                  <span className="text-[11px] text-accent font-semibold">+27 this mo</span>
                </div>
                <div className="mt-2 h-1.5 rounded-full bg-muted-foreground/15 overflow-hidden">
                  <div className="h-full w-[82%] bg-gradient-to-r from-primary to-accent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RoiCalculator() {
  const [leads, setLeads] = useState(80);
  const [value, setValue] = useState(450);
  const [lift, setLift] = useState(35);

  const extraLeads = Math.round(leads * (lift / 100));
  const extraRevenue = extraLeads * value;
  const annual = extraRevenue * 12;

  return (
    <section className="container-page py-24">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] items-start">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">ROI Calculator</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
            Think in growth, not monthly cost.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Local SEO is an investment in demand. Estimate the additional calls, appointments, and revenue stronger local
            visibility could unlock for your business.
          </p>
        </div>

        <div className="rounded-3xl border border-border/70 bg-background p-8 shadow-lift">
          <div className="grid gap-6 sm:grid-cols-3">
            <Slider label="Monthly leads" min={10} max={500} value={leads} setValue={setLeads} suffix="" />
            <Slider label="Avg customer value" min={50} max={2000} step={50} value={value} setValue={setValue} suffix="$" prefix />
            <Slider label="Local visibility lift" min={5} max={100} value={lift} setValue={setLift} suffix="%" />
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <ResultTile icon={Phone} label="Extra leads / mo" value={`+${extraLeads}`} />
            <ResultTile icon={LineChart} label="Extra revenue / mo" value={`$${extraRevenue.toLocaleString()}`} />
            <ResultTile icon={BarChart3} label="Annual impact" value={`$${annual.toLocaleString()}`} highlight />
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            Illustrative estimate. Actual results depend on market, category, and campaign scope.
          </p>
        </div>
      </div>
    </section>
  );
}

function Slider({
  label,
  min,
  max,
  step = 1,
  value,
  setValue,
  suffix,
  prefix,
}: {
  label: string;
  min: number;
  max: number;
  step?: number;
  value: number;
  setValue: (n: number) => void;
  suffix: string;
  prefix?: boolean;
}) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <label className="text-xs font-medium text-muted-foreground">{label}</label>
        <span className="text-sm font-semibold text-foreground">
          {prefix && suffix}
          {value.toLocaleString()}
          {!prefix && suffix}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="mt-3 w-full accent-[var(--color-accent)]"
      />
    </div>
  );
}

function ResultTile({
  icon: Icon,
  label,
  value,
  highlight,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border p-5 transition-all ${
        highlight
          ? "border-accent/40 bg-gradient-to-br from-accent/10 to-primary/5"
          : "border-border/60 bg-surface/40"
      }`}
    >
      <div className="flex items-center gap-2 text-muted-foreground">
        <Icon className="h-4 w-4 text-accent" />
        <span className="text-xs font-medium">{label}</span>
      </div>
      <p className="mt-2 text-2xl font-semibold tracking-tight text-foreground">{value}</p>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-surface/40"
      >
        <span className="text-sm font-semibold text-foreground">{q}</span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`grid overflow-hidden px-6 transition-all duration-300 ${
          open ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-sm text-muted-foreground leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  );
}
