import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Stethoscope,
  HeartPulse,
  Sparkles,
  PawPrint,
  Activity,
  Scale,
  Calculator,
  ShieldCheck,
  Home,
  Landmark,
  UtensilsCrossed,
  Hotel,
  Scissors,
  Dumbbell,
  HardHat,
  Wind,
  Wrench,
  Zap,
  Hammer,
  Trees,
  Sparkle,
  Bug,
  Car,
  CarFront,
  Truck,
  ShoppingBag,
  Gem,
  Sofa,
  Pill,
  Baby,
  GraduationCap,
  PartyPopper,
  Heart,
  Camera,
  Boxes,
  Warehouse,
  Building2,
  ClipboardCheck,
  Lock,
  Server,
  Megaphone,
  MapPin,
  Search,
  BarChart3,
  Star,
  Compass,
  Layers,
  Cpu,
  ArrowRight,
  ChevronDown,
  Check,
} from "lucide-react";
import { Photo } from "@/components/photos";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Serve — Local SEO by Industry | MyPageSEO" },
      {
        name: "description",
        content:
          "MyPageSEO builds industry-specific Local SEO campaigns for medical, legal, home services, retail, hospitality, and more across the US and Canada.",
      },
      { property: "og:title", content: "Industries We Serve — MyPageSEO" },
      {
        property: "og:description",
        content:
          "Local SEO strategies tailored to your industry — from dentists and law firms to HVAC, restaurants, and multi-location brands.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: IndustriesPage,
});

/* ---------- Data ---------- */

type Industry = { name: string; icon: typeof Stethoscope; blurb: string; group: string };

const industries: Industry[] = [
  { name: "Dentists & Dental Clinics", icon: Stethoscope, group: "Medical", blurb: "New-patient acquisition through Maps, reviews, and neighborhood-level intent." },
  { name: "Doctors & Medical Practices", icon: HeartPulse, group: "Medical", blurb: "Trust-first Local SEO for family, specialist, and urgent care practices." },
  { name: "Plastic Surgeons & Cosmetic Clinics", icon: Sparkles, group: "Medical", blurb: "High-intent, high-value keyword strategy with reputation depth." },
  { name: "Veterinarians & Animal Hospitals", icon: PawPrint, group: "Medical", blurb: "Community-driven visibility and review programs pet owners actually read." },
  { name: "Chiropractors & Physiotherapists", icon: Activity, group: "Medical", blurb: "Service-radius targeting with condition- and technique-specific keywords." },
  { name: "Law Firms & Attorneys", icon: Scale, group: "Professional", blurb: "Compete for premium local keywords with authority-grade content and citations." },
  { name: "Accountants & Tax Professionals", icon: Calculator, group: "Professional", blurb: "Seasonal-intent aware campaigns for CPA, tax prep, and advisory firms." },
  { name: "Financial Advisors & Insurance Agencies", icon: ShieldCheck, group: "Professional", blurb: "Trust-signal-heavy Local SEO built for regulated categories." },
  { name: "Real Estate Agents & Brokerages", icon: Home, group: "Professional", blurb: "Neighborhood-level ranking and Google Business Profile authority." },
  { name: "Mortgage Brokers", icon: Landmark, group: "Professional", blurb: "Rate-sensitive local intent captured across service areas." },
  { name: "Restaurants & Cafés", icon: UtensilsCrossed, group: "Hospitality", blurb: "Directions, photos, and reviews — the levers that fill tables." },
  { name: "Hotels, Resorts & Vacation Rentals", icon: Hotel, group: "Hospitality", blurb: "Destination and micro-market visibility for direct bookings." },
  { name: "Salons, Spas & Barbershops", icon: Scissors, group: "Personal", blurb: "Style-specific keywords and hyperlocal booking intent." },
  { name: "Gyms, Yoga Studios & Fitness Centers", icon: Dumbbell, group: "Personal", blurb: "Neighborhood-first campaigns for classes, memberships, and trials." },
  { name: "Contractors & Construction Companies", icon: HardHat, group: "Home Services", blurb: "Service-area SEO for GCs, remodelers, and specialty trades." },
  { name: "HVAC Companies", icon: Wind, group: "Home Services", blurb: "Emergency-intent Local SEO across seasonal demand curves." },
  { name: "Plumbing Companies", icon: Wrench, group: "Home Services", blurb: "24/7 service-area visibility built for lead-generation." },
  { name: "Electricians", icon: Zap, group: "Home Services", blurb: "Residential and commercial local search built around trade specialties." },
  { name: "Roofing Companies", icon: Hammer, group: "Home Services", blurb: "Storm-response and service-area campaigns tuned for high-ticket jobs." },
  { name: "Landscaping & Lawn Care", icon: Trees, group: "Home Services", blurb: "Seasonal local intent with neighborhood-level targeting." },
  { name: "Cleaning Services", icon: Sparkle, group: "Home Services", blurb: "Recurring-service Local SEO for residential and commercial." },
  { name: "Pest Control Companies", icon: Bug, group: "Home Services", blurb: "Pest-specific keywords across service radius and seasonality." },
  { name: "Auto Repair Shops & Mechanics", icon: Car, group: "Automotive", blurb: "Trust and proximity — the two things drivers search for." },
  { name: "Car Dealerships", icon: CarFront, group: "Automotive", blurb: "Inventory-aware Local SEO for new, used, and service departments." },
  { name: "Towing Companies", icon: Truck, group: "Automotive", blurb: "Immediate-intent visibility across the entire service radius." },
  { name: "Retail Stores & Boutiques", icon: ShoppingBag, group: "Retail", blurb: "Foot-traffic driven Local SEO with product-aware search." },
  { name: "Jewelers", icon: Gem, group: "Retail", blurb: "High-consideration purchases won through trust and local authority." },
  { name: "Furniture Stores", icon: Sofa, group: "Retail", blurb: "Showroom visibility across broader metro service areas." },
  { name: "Pharmacies", icon: Pill, group: "Retail", blurb: "Neighborhood convenience and specialty-service visibility." },
  { name: "Childcare Centers & Daycares", icon: Baby, group: "Education", blurb: "Trust-heavy Local SEO for parents researching close to home." },
  { name: "Schools & Educational Institutions", icon: GraduationCap, group: "Education", blurb: "Enrollment-focused campaigns across catchment areas." },
  { name: "Event Venues", icon: PartyPopper, group: "Events", blurb: "Occasion-specific intent tuned for weddings, corporate, and social." },
  { name: "Wedding Services", icon: Heart, group: "Events", blurb: "High-consideration category with review-driven decisions." },
  { name: "Photographers & Videographers", icon: Camera, group: "Events", blurb: "Portfolio-first Local SEO with style- and occasion-based keywords." },
  { name: "Moving Companies", icon: Boxes, group: "Logistics", blurb: "Origin/destination Local SEO for local and long-distance moves." },
  { name: "Storage Facilities", icon: Warehouse, group: "Logistics", blurb: "Radius-based visibility and unit-type-aware campaigns." },
  { name: "Property Management Companies", icon: Building2, group: "Real Estate", blurb: "Owner-acquisition and tenant-facing Local SEO across markets." },
  { name: "Home Inspection Services", icon: ClipboardCheck, group: "Real Estate", blurb: "Realtor-referral and homeowner search intent, mapped together." },
  { name: "Security System Providers", icon: Lock, group: "Home Services", blurb: "Residential and commercial security intent by service area." },
  { name: "IT & Managed Service Providers", icon: Server, group: "B2B", blurb: "B2B Local SEO across metros and industry verticals served." },
  { name: "Marketing Agencies (White-Label)", icon: Megaphone, group: "B2B", blurb: "White-label Local SEO delivery for agency partners." },
];

const challenges = [
  { icon: UtensilsCrossed, title: "Restaurants", copy: "Live on directions, photos, and review velocity. Ranking matters, but decision-making happens on the profile." },
  { icon: Scale, title: "Law firms", copy: "Compete for the most expensive local keywords in every market — authority, citations, and content depth win." },
  { icon: HeartPulse, title: "Medical practices", copy: "Trust is the ranking factor. Reviews, credentials, and consistent NAP data outperform aggressive tactics." },
  { icon: HardHat, title: "Contractors & trades", copy: "Service-area Local SEO across radius, seasonality, and emergency-vs-planned intent — profiles must adapt." },
  { icon: Building2, title: "Multi-location brands", copy: "Consistency at scale: citations, GBPs, reviews, and reporting standardized across every location." },
  { icon: ShoppingBag, title: "Retail & boutiques", copy: "Foot traffic depends on hyperlocal visibility, product-aware search, and picture-perfect profiles." },
];

const workflow = [
  { icon: Search, title: "Industry research", copy: "Map how customers actually search in your category." },
  { icon: Compass, title: "Competitor analysis", copy: "Benchmark local rivals across visibility and reviews." },
  { icon: MapPin, title: "GBP audit", copy: "Score profiles against category best practices." },
  { icon: Layers, title: "Keyword opportunity", copy: "Prioritize local intent by revenue potential." },
  { icon: ShieldCheck, title: "Citations & authority", copy: "Fix NAP, build local links, strengthen trust." },
  { icon: BarChart3, title: "Rank monitoring", copy: "Geo-grid tracking across your service area." },
  { icon: Cpu, title: "Continuous optimization", copy: "Software-guided iteration on what's working." },
];

const services = [
  { icon: MapPin, t: "Google Business Profile Optimization" },
  { icon: Layers, t: "Local Landing Pages" },
  { icon: ShieldCheck, t: "Citation Management" },
  { icon: Search, t: "Local Keyword Research" },
  { icon: Star, t: "Review Growth" },
  { icon: BarChart3, t: "Local Content Strategy" },
  { icon: Cpu, t: "Reporting & Dashboards" },
  { icon: Sparkles, t: "Reputation Management" },
  { icon: Building2, t: "Multi-location SEO" },
];

const faqs = [
  { q: "Do you work with businesses outside these industries?", a: "Yes. If your customers search locally, we can build a Local SEO campaign for you. These are the categories we serve most often — not a limit." },
  { q: "Do you support businesses with multiple locations?", a: "Absolutely. Multi-location Local SEO — with per-location profiles, citations, and reporting — is a core specialty." },
  { q: "Do franchises need a different strategy?", a: "Yes. Franchise programs balance corporate standards with local franchisee visibility. We coordinate both." },
  { q: "Are service-area businesses eligible?", a: "Yes. Home services, mobile businesses, and multi-radius operators are a large share of our client base." },
  { q: "Can Local SEO campaigns be fully customized?", a: "Every campaign is built around your industry's search behavior, competitive landscape, and business goals — never off a template." },
];

/* ---------- Reveal hook ---------- */

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && (setVisible(true), io.disconnect()),
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, visible };
}

/* ---------- Page ---------- */

function IndustriesPage() {
  const groups = Array.from(new Set(industries.map((i) => i.group)));
  const [filter, setFilter] = useState<string>("All");
  const shown = filter === "All" ? industries : industries.filter((i) => i.group === filter);

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
        <div className="container-page pt-24 pb-16 md:pt-28 md:pb-24 grid gap-12 lg:grid-cols-[1.1fr_1fr] items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/80 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              Industry-specific Local SEO
            </span>
            <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight text-foreground">
              Local SEO built around your industry.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
              No two industries compete the same way in local search. A law firm, dental clinic, restaurant, HVAC company,
              and real estate brokerage all require different Local SEO strategies — because customer intent, competition,
              and Google Business Profile signals vary dramatically. We build campaigns that respect those differences.
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
                Talk to a Local SEO Expert
              </Link>
            </div>
          </div>
          <HeroIllustration />
        </div>
      </section>

      {/* REAL BUSINESSES BAND */}
      <section className="container-page pb-16">
        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          <Photo src="restaurant" alt="Restaurant" aspect="aspect-square" />
          <Photo src="dental" alt="Healthcare clinic" aspect="aspect-square" />
          <Photo src="contractor" alt="Home services" aspect="aspect-square" />
          <Photo src="lawyer" alt="Legal services" aspect="aspect-square" />
          <Photo src="retail" alt="Retail" aspect="aspect-square" />
          <Photo src="hotel" alt="Hospitality" aspect="aspect-square" />
        </div>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Recognizable environments. Real customers. The kind of businesses we help grow every day.
        </p>
      </section>

      {/* INDUSTRY GRID */}
      <section className="container-page pb-24">

        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">Industries</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
              The categories we know inside and out.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {["All", ...groups].map((g) => (
              <button
                key={g}
                onClick={() => setFilter(g)}
                className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all ${
                  filter === g
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border/70 bg-background text-muted-foreground hover:text-foreground hover:border-border"
                }`}
              >
                {g}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {shown.map((ind, i) => (
            <IndustryCard key={ind.name} industry={ind} delay={(i % 12) * 30} />
          ))}
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="bg-surface/60 border-y border-border/60">
        <div className="container-page py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">Why industry matters</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
              Every industry has different local search challenges.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              The Local SEO playbook is the same. The plays are not. Category dictates which levers matter most, which
              keywords are worth pursuing, and which profile signals your customers actually care about.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {challenges.map((c) => (
              <div
                key={c.title}
                className="group rounded-2xl border border-border/70 bg-background p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/5 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <c.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 text-base font-semibold text-foreground">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="container-page py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">Our approach</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
            How we customize every Local SEO campaign.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            A repeatable methodology, tuned to your industry's realities. Every campaign moves through the same seven steps
            — the depth and emphasis change based on category.
          </p>
        </div>

        <div className="relative mt-14">
          <div className="absolute left-0 right-0 top-6 hidden lg:block h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-7 relative">
            {workflow.map((w, i) => (
              <WorkflowStep key={w.title} step={w} index={i} />
            ))}
          </ol>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-surface/60 border-y border-border/60">
        <div className="container-page py-24">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">Services adapted per industry</p>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
                Same services. Different execution.
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Our service catalog stays consistent. How each service is scoped, prioritized, and delivered depends on your
                category, competitive landscape, and business model.
              </p>
              <Link
                to="/services"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors"
              >
                See all services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
              {services.map((s) => (
                <div
                  key={s.t}
                  className="flex items-center gap-3 rounded-xl border border-border/70 bg-background p-4 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-lift"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent">
                    <s.icon className="h-4 w-4" strokeWidth={1.75} />
                  </span>
                  <span className="text-sm font-medium text-foreground">{s.t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="container-page py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">Coverage</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
            Local SEO for businesses across North America.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We work with independent businesses, multi-location brands, and franchise systems across the United States and
            Canada.
          </p>
        </div>
        <NorthAmericaMap />
      </section>

      {/* FAQ */}
      <section className="bg-surface/60 border-y border-border/60">
        <div className="container-page py-24 grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">FAQ</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">Common questions.</h2>
          </div>
          <div className="divide-y divide-border/60 rounded-2xl border border-border/70 bg-background shadow-card">
            {faqs.map((f) => (
              <FaqItem key={f.q} q={f.q} a={f.a} />
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
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full opacity-30 blur-3xl" style={{ background: "var(--color-accent)" }} />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full opacity-20 blur-3xl bg-white" />
          <h2 className="relative text-3xl md:text-5xl font-semibold tracking-tight text-primary-foreground max-w-3xl mx-auto">
            See what Local SEO looks like for your industry.
          </h2>
          <p className="relative mt-5 text-primary-foreground/80 max-w-xl mx-auto">
            We'll walk through category-specific opportunities, competitor gaps, and a plan tailored to your business.
          </p>
          <div className="relative mt-10 flex flex-wrap justify-center gap-3">
            <Link
              to="/get-started"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-lift transition-all hover:-translate-y-0.5"
            >
              Get Started <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/5 px-6 py-3 text-sm font-semibold text-primary-foreground backdrop-blur transition-all hover:bg-primary-foreground/15"
            >
              Talk to a Local SEO Expert
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---------- Sub-components ---------- */

function IndustryCard({ industry, delay }: { industry: Industry; delay: number }) {
  const { ref, visible } = useReveal<HTMLAnchorElement>();
  const Icon = industry.icon;
  return (
    <Link
      ref={ref}
      to="/contact"
      style={{ transitionDelay: `${delay}ms` }}
      className={`group relative flex flex-col rounded-2xl border border-border/70 bg-background p-5 shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-lift hover:border-accent/30 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
      }`}
    >
      <div className="flex items-start justify-between">
        <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/5 text-primary transition-colors group-hover:bg-accent/10 group-hover:text-accent">
          <Icon className="h-5 w-5" strokeWidth={1.75} />
        </span>
        <span className="rounded-full bg-surface px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
          {industry.group}
        </span>
      </div>
      <h3 className="mt-5 text-sm font-semibold text-foreground leading-snug">{industry.name}</h3>
      <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{industry.blurb}</p>
      <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
        Learn more <ArrowRight className="h-3 w-3" />
      </div>
    </Link>
  );
}

function WorkflowStep({ step, index }: { step: (typeof workflow)[number]; index: number }) {
  const { ref, visible } = useReveal<HTMLLIElement>();
  const Icon = step.icon;
  return (
    <li
      ref={ref}
      style={{ transitionDelay: `${index * 80}ms` }}
      className={`relative rounded-2xl border border-border/70 bg-background p-5 shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-lift ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
      }`}
    >
      <div className="flex items-center gap-2">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/10 text-accent">
          <Icon className="h-5 w-5" strokeWidth={1.75} />
        </span>
        <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          Step {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <h3 className="mt-4 text-sm font-semibold text-foreground">{step.title}</h3>
      <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{step.copy}</p>
    </li>
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

/* ---------- Illustrations ---------- */

function HeroIllustration() {
  return (
    <div className="relative">
      <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-primary/10 via-transparent to-accent/10 blur-2xl -z-10" />
      <div className="rounded-3xl border border-border/70 bg-background p-6 shadow-lift">
        {/* Map surface */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-surface/60">
          <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full">
            <defs>
              <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
                <path d="M 24 0 L 0 0 0 24" fill="none" stroke="currentColor" strokeWidth="0.4" className="text-border" />
              </pattern>
              <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.35" />
                <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="400" height="300" fill="url(#grid)" />
            {/* Roads */}
            <path d="M0 210 Q 120 180 200 200 T 400 190" stroke="currentColor" className="text-border" strokeWidth="1.5" fill="none" />
            <path d="M60 0 Q 80 120 130 180 T 200 300" stroke="currentColor" className="text-border" strokeWidth="1.5" fill="none" />
            <path d="M400 90 Q 300 100 250 140 T 120 260" stroke="currentColor" className="text-border" strokeWidth="1.5" fill="none" />
            {/* Glow circles */}
            <circle cx="140" cy="150" r="70" fill="url(#glow)" />
            <circle cx="280" cy="180" r="60" fill="url(#glow)" />
          </svg>

          {/* Business pins */}
          {[
            { x: "22%", y: "38%", icon: UtensilsCrossed },
            { x: "58%", y: "28%", icon: Scale },
            { x: "72%", y: "58%", icon: HeartPulse },
            { x: "38%", y: "62%", icon: HardHat },
            { x: "50%", y: "44%", icon: MapPin, primary: true },
            { x: "18%", y: "72%", icon: Home },
            { x: "82%", y: "38%", icon: ShoppingBag },
          ].map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={i}
                className="absolute -translate-x-1/2 -translate-y-1/2 animate-fade-in"
                style={{ left: p.x, top: p.y, animationDelay: `${i * 120}ms` }}
              >
                <div className={`relative grid place-items-center h-10 w-10 rounded-full shadow-lift ${p.primary ? "bg-accent text-accent-foreground" : "bg-background text-primary border border-border/70"}`}>
                  <Icon className="h-4 w-4" strokeWidth={2} />
                  {p.primary && <span className="absolute inset-0 rounded-full ring-4 ring-accent/30 animate-ping" />}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mini panels */}
        <div className="mt-4 grid grid-cols-3 gap-3">
          <MiniPanel icon={Star} label="Reviews" value="4.9" delta="+38" />
          <MiniPanel icon={MapPin} label="Map rank" value="#2" delta="+6" />
          <MiniPanel icon={BarChart3} label="Calls" value="482" delta="+63%" />
        </div>
      </div>
    </div>
  );
}

function MiniPanel({ icon: Icon, label, value, delta }: { icon: typeof Star; label: string; value: string; delta: string }) {
  return (
    <div className="rounded-xl border border-border/60 bg-surface/50 p-3">
      <div className="flex items-center gap-1.5 text-muted-foreground">
        <Icon className="h-3.5 w-3.5 text-accent" />
        <span className="text-[10px] font-medium">{label}</span>
      </div>
      <p className="mt-1 text-lg font-semibold text-foreground">{value}</p>
      <p className="text-[10px] font-semibold text-accent">{delta}</p>
    </div>
  );
}

function NorthAmericaMap() {
  const cities = [
    { x: 32, y: 42, label: "Vancouver" },
    { x: 58, y: 30, label: "Toronto" },
    { x: 62, y: 32, label: "Montréal" },
    { x: 20, y: 52, label: "Seattle" },
    { x: 22, y: 66, label: "SF Bay" },
    { x: 26, y: 76, label: "LA" },
    { x: 42, y: 78, label: "Dallas" },
    { x: 40, y: 62, label: "Denver" },
    { x: 56, y: 60, label: "Chicago" },
    { x: 70, y: 58, label: "NYC" },
    { x: 68, y: 72, label: "Atlanta" },
    { x: 66, y: 84, label: "Miami" },
    { x: 74, y: 66, label: "Boston" },
    { x: 34, y: 68, label: "Phoenix" },
    { x: 46, y: 70, label: "Austin" },
  ];
  return (
    <div className="mt-10 rounded-3xl border border-border/70 bg-gradient-to-b from-surface/40 to-background p-6 md:p-10 shadow-card">
      <div className="relative mx-auto aspect-[16/10] w-full max-w-4xl">
        <svg viewBox="0 0 100 62" className="absolute inset-0 h-full w-full">
          <defs>
            <radialGradient id="pin-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.5" />
              <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
            </radialGradient>
          </defs>
          {/* Stylized North America outline */}
          <path
            d="M8 20 Q 14 12 24 12 L 40 10 Q 52 8 62 12 L 74 14 Q 82 16 88 22 L 90 30 Q 88 36 82 40 L 74 42 L 70 50 Q 66 56 58 58 L 46 60 Q 36 60 30 54 L 22 46 Q 14 42 10 34 Z"
            fill="color-mix(in oklab, var(--color-primary) 6%, transparent)"
            stroke="var(--color-primary)"
            strokeOpacity="0.35"
            strokeWidth="0.4"
          />
          {/* Canada band */}
          <path
            d="M14 14 L 28 10 L 46 8 L 62 10 L 78 14 L 84 20"
            fill="none"
            stroke="var(--color-primary)"
            strokeOpacity="0.25"
            strokeWidth="0.3"
            strokeDasharray="1 1"
          />
          {cities.map((c, i) => (
            <g key={c.label}>
              <circle cx={c.x} cy={c.y} r="4" fill="url(#pin-glow)">
                <animate attributeName="r" values="3;5;3" dur="3s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
              </circle>
              <circle cx={c.x} cy={c.y} r="0.9" fill="var(--color-accent)" />
            </g>
          ))}
        </svg>
      </div>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-accent" /> Active service markets
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Check className="h-3.5 w-3.5 text-accent" /> United States & Canada
        </span>
      </div>
    </div>
  );
}
