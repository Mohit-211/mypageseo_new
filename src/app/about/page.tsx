import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  ArrowRight, MapPin, Sparkles, ShieldCheck, LineChart, HeartHandshake,
  Compass, Search, Target, Zap, TrendingUp, Trophy,
  Stethoscope, Scale, Wrench, Utensils, Building2, Car, Leaf, Hotel, Dumbbell, Briefcase,
  Users2, MapPinned, FileText, Link2, Star, Cog, Headset, Boxes,
  Eye, Handshake, Ruler, Plus, Minus,
  Phone, Navigation,
} from "lucide-react";
import { Photo } from "@/components/photos";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About MyPageSEO — Local SEO Specialists Building Better Visibility" },
      { name: "description", content: "MyPageSEO is a specialized Local SEO company combining experienced strategists with proprietary software to help North American businesses become the obvious choice in their local markets." },
      { property: "og:title", content: "About MyPageSEO" },
      { property: "og:description", content: "The story, philosophy and team behind MyPageSEO — the Local SEO company for North American businesses." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

/* ─── scroll-reveal ─── */
function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setShown(true)), { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ease-out ${shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ─── Hero illustration: team + monitors ─── */
function TeamIllustration() {
  return (
    <div className="relative w-full">
      <div className="absolute -inset-10 -z-10 rounded-[3rem] bg-gradient-to-br from-primary/10 via-accent/10 to-transparent blur-2xl" aria-hidden />

      {/* Office frame */}
      <div className="relative rounded-3xl border border-border bg-surface shadow-lift p-6 md:p-8 overflow-hidden">
        {/* Back wall gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-surface to-surface-muted" aria-hidden />
        <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-primary/5 to-transparent" aria-hidden />

        <div className="relative">
          {/* Big monitor */}
          <div className="mx-auto max-w-md rounded-2xl border border-border bg-card shadow-lift overflow-hidden">
            <div className="flex items-center gap-1.5 border-b border-border bg-surface px-3 py-2">
              <span className="h-2 w-2 rounded-full bg-red-400/70" />
              <span className="h-2 w-2 rounded-full bg-amber-400/70" />
              <span className="h-2 w-2 rounded-full bg-emerald-400/70" />
              <span className="ml-3 text-[10px] text-muted-foreground">Local performance — Q3</span>
            </div>
            <div className="p-4">
              <div className="flex items-end gap-1.5 h-24">
                {[35, 48, 42, 58, 52, 66, 72, 68, 82, 88, 91, 97].map((h, i) => (
                  <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-primary to-primary/40" style={{ height: `${h}%` }} />
                ))}
              </div>
              <div className="mt-3 grid grid-cols-3 gap-2 text-[10px]">
                {[["Calls", "+82%"], ["Directions", "+184"], ["GBP Score", "94"]].map(([k, v]) => (
                  <div key={k} className="rounded-md bg-surface-muted p-2">
                    <div className="text-muted-foreground">{k}</div>
                    <div className="mt-0.5 font-semibold text-foreground">{v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Desk */}
          <div className="mt-4 h-3 rounded-full bg-border/70" />

          {/* Team row */}
          <div className="mt-6 flex justify-center gap-4 md:gap-8">
            {[
              { c: "bg-primary", i: "AC" },
              { c: "bg-accent", i: "MK" },
              { c: "bg-primary/80", i: "JR" },
            ].map((p, idx) => (
              <div key={idx} className="flex flex-col items-center">
                {/* head */}
                <div className={`h-9 w-9 rounded-full ${p.c} text-white grid place-items-center text-[11px] font-semibold`}>{p.i}</div>
                {/* laptop */}
                <div className="mt-2 w-14 h-8 rounded-t-md bg-card border border-border grid place-items-center">
                  <div className="h-4 w-10 rounded-sm bg-primary/10" />
                </div>
                <div className="w-16 h-1 rounded-b-md bg-border" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating map card */}
      <div className="absolute -left-4 md:-left-10 top-24 rounded-2xl border border-border bg-card/90 backdrop-blur-xl shadow-lift p-4 w-52 animate-float hidden sm:block">
        <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">
          <MapPinned className="h-3 w-3 text-accent" /> Local grid
        </div>
        <div className="mt-2 grid grid-cols-5 gap-1">
          {Array.from({ length: 20 }).map((_, i) => {
            const r = ((i * 3) % 12) + 1;
            const c = r <= 3 ? "bg-emerald-400" : r <= 7 ? "bg-amber-300" : "bg-rose-300/80";
            return <div key={i} className={`aspect-square rounded-sm ${c}`} />;
          })}
        </div>
      </div>

      {/* Floating GBP card */}
      <div
        className="absolute -right-4 md:-right-10 bottom-16 rounded-2xl border border-border bg-card/90 backdrop-blur-xl shadow-lift p-4 w-56 hidden sm:block"
        style={{ animation: "float 7s ease-in-out infinite 1s" }}
      >
        <div className="flex items-center justify-between">
          <div className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground">GBP Audit</div>
          <ShieldCheck className="h-3.5 w-3.5 text-accent" />
        </div>
        <div className="mt-2 font-display text-3xl">94<span className="text-sm text-muted-foreground">/100</span></div>
        <div className="mt-2 h-1 rounded-full bg-surface-muted overflow-hidden">
          <div className="h-full bg-primary rounded-full" style={{ width: "94%" }} />
        </div>
      </div>
    </div>
  );
}

/* ─── Data ─── */
const differentiators = [
  { icon: MapPin, t: "Local SEO specialization", d: "We don't do broad organic SEO campaigns. Every strategy, every playbook and every hire is dedicated to local visibility." },
  { icon: Sparkles, t: "Experts + proprietary software", d: "Experienced Local SEO strategists paired with in-house software that continuously measures your local performance." },
  { icon: LineChart, t: "Transparent reporting", d: "Clear, actionable insights — not spreadsheet dumps. You always know exactly what's happening and why." },
  { icon: HeartHandshake, t: "Long-term partnerships", d: "We build sustainable growth, not short-term ranking tricks that evaporate the moment Google updates." },
];

const industries = [
  { icon: Stethoscope, t: "Healthcare", d: "Fill appointment books with patients from your service area." },
  { icon: Scale, t: "Legal", d: "Rank for high-intent local searches when clients need counsel now." },
  { icon: Wrench, t: "Home Services", d: "Show up when homeowners are in an emergency and searching fast." },
  { icon: Utensils, t: "Restaurants", d: "Own the map pack for cuisine and neighborhood searches." },
  { icon: Building2, t: "Real Estate", d: "Become the recognized name in your city and its neighborhoods." },
  { icon: Car, t: "Automotive", d: "Convert nearby drivers into loyal service and repair customers." },
  { icon: Leaf, t: "Wellness", d: "Attract nearby clients searching for spa, yoga and holistic care." },
  { icon: Hotel, t: "Hospitality", d: "Capture travelers researching your city on Google Maps." },
  { icon: Dumbbell, t: "Fitness", d: "Fill memberships with people searching for gyms and studios near them." },
  { icon: Briefcase, t: "Professional Services", d: "Be the trusted local expert when businesses look for a partner." },
];

const teamRoles = [
  { icon: Compass, t: "Local SEO Strategy", d: "Senior strategists who architect the roadmap for every client engagement." },
  { icon: MapPin, t: "Google Business Profile Specialists", d: "Experts dedicated exclusively to GBP optimization and management." },
  { icon: FileText, t: "Content & Local Landing Pages", d: "Writers who craft geo-relevant pages that rank and convert." },
  { icon: Link2, t: "Citation Management", d: "Specialists who build, clean and monitor citation profiles." },
  { icon: Star, t: "Reputation Growth", d: "Reviews systems, response strategy and reputation monitoring." },
  { icon: Cog, t: "Technical Optimization", d: "Schema, site speed, mobile-first UX and local technical foundations." },
  { icon: Headset, t: "Customer Success", d: "Your primary point of contact — accountable to your business outcomes." },
  { icon: Boxes, t: "Product Development", d: "The engineers behind the MyPageSEO software platform." },
];

const process = [
  { icon: Compass, t: "Discover", d: "We learn your business, service area, competitors and growth goals." },
  { icon: Search, t: "Audit", d: "A full baseline of your Google Business Profile, rankings, citations and reviews." },
  { icon: Target, t: "Strategy", d: "A clear Local SEO roadmap tied to measurable business outcomes." },
  { icon: Zap, t: "Optimize", d: "Our specialists execute across GBP, citations, content and reputation." },
  { icon: LineChart, t: "Measure", d: "Transparent monthly reporting with focus on calls, bookings and visits." },
  { icon: TrendingUp, t: "Grow", d: "Compound gains as rankings, reviews and citations reinforce each other." },
];

const faqs = [
  { q: "Is Local SEO different from traditional SEO?", a: "Yes — completely. Traditional SEO chases global rankings for informational searches. Local SEO focuses on Google Maps, Google Business Profile, citations, reviews and location signals to win nearby customers with buying intent. It's a different discipline with different playbooks." },
  { q: "Do I need a physical location to benefit from Local SEO?", a: "Not always. Service-area businesses (contractors, plumbers, mobile services) can rank in local search without a storefront by properly configuring service areas in Google Business Profile and building local authority." },
  { q: "How long until I see results?", a: "Meaningful movement typically appears within 60–90 days, with compounding results across 6–12 months. Local SEO rewards consistency — we build sustainable rankings, not shortcuts." },
  { q: "Is Google Business Profile optimization included?", a: "Yes. GBP optimization and ongoing management is included in every MyPageSEO engagement. It's the single most important local ranking factor." },
  { q: "Is the software available separately?", a: "The MyPageSEO software is included with every engagement. We're evaluating a stand-alone version — reach out if you'd like early access." },
];

/* ─── Page ─── */
function AboutPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden pt-16 md:pt-24 pb-20 md:pb-28">
        <div className="absolute inset-0 -z-10 bg-hero" aria-hidden />
        <div className="absolute -top-40 -left-20 -z-10 h-96 w-96 rounded-full bg-primary/10 blur-3xl" aria-hidden />
        <div className="absolute -top-20 right-0 -z-10 h-96 w-96 rounded-full bg-accent/10 blur-3xl" aria-hidden />

        <div className="container-page grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 backdrop-blur px-3 py-1 text-xs font-medium text-muted-foreground shadow-card">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              About MyPageSEO
            </div>
            <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl leading-[1.03] tracking-tight text-foreground">
              Built around one belief: <span className="text-gradient">local businesses deserve better visibility</span> — where customers actually search.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
              MyPageSEO exists to help businesses become the obvious choice in their local markets. We do that through specialized Local SEO strategies, experienced strategists and proprietary software that turns data into measurable growth.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/services" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lift hover:-translate-y-0.5 transition">
                Explore Services <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/get-started" className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-card hover:-translate-y-0.5 transition">
                Get Started
              </Link>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <Photo src="team" alt="MyPageSEO team collaborating around a laptop" aspect="aspect-[5/4]" eager />
          </Reveal>
        </div>
      </section>

      {/* STORY */}
      <section className="container-page py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <div className="relative rounded-3xl border border-border bg-surface p-8 md:p-10 overflow-hidden">
              {/* narrative timeline */}
              <div className="absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-primary via-accent to-transparent" aria-hidden />
              <div className="space-y-8 pl-14">
                {[
                  { y: "The problem", t: "Countless agencies claim SEO. Very few specialize in Local SEO." },
                  { y: "The gap", t: "Businesses that depend on nearby customers need a completely different playbook — GBP, citations, reviews, map visibility." },
                  { y: "Our answer", t: "MyPageSEO was built to solve those challenges specifically. Not everything for everyone — just Local SEO, done exceptionally well." },
                ].map((s, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-14 top-1 grid h-6 w-6 place-items-center rounded-full bg-primary text-primary-foreground text-[10px] font-semibold">
                      {i + 1}
                    </div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-accent">{s.y}</div>
                    <div className="mt-1 text-lg font-medium text-foreground leading-snug">{s.t}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-accent">Our story</div>
              <h2 className="mt-3 font-display text-4xl md:text-5xl tracking-tight">Focused, on purpose.</h2>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                We started MyPageSEO because generalist marketing agencies were failing local businesses. Ranking a national blog is not the same as ranking a dental practice in Calgary or a plumber in Austin.
              </p>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Local SEO demands its own strategy: Google Business Profile optimization, local authority, citation consistency, location relevance, reputation management and map visibility. So we built a team, a methodology and a software platform dedicated to exactly that.
              </p>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Not everything for everyone. One problem. Solved well.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHAT MAKES US DIFFERENT */}
      <section className="container-page py-20 md:py-28">
        <Reveal>
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-accent">What makes us different</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl tracking-tight">Not another marketing agency.</h2>
            <p className="mt-5 text-lg text-muted-foreground">Four commitments that shape every engagement.</p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {differentiators.map((d, i) => (
            <Reveal key={d.t} delay={i * 80}>
              <div className="group h-full rounded-3xl border border-border bg-card p-8 shadow-card transition-all hover:-translate-y-1 hover:shadow-lift">
                <div className="flex items-start justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <d.icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <span className="font-display text-3xl text-muted-foreground/30">0{i + 1}</span>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-foreground">{d.t}</h3>
                <p className="mt-2 text-[15px] text-muted-foreground leading-relaxed">{d.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SOFTWARE EXTENSION */}
      <section className="container-page py-20 md:py-28">
        <div className="relative overflow-hidden rounded-[2rem] border border-border bg-surface p-8 md:p-16">
          <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl" aria-hidden />
          <div className="absolute -left-40 -bottom-40 h-96 w-96 rounded-full bg-accent/10 blur-3xl" aria-hidden />

          <div className="relative grid lg:grid-cols-2 gap-14 items-center">
            <Reveal>
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-card px-3 py-1 text-xs font-medium border border-border shadow-card">
                  <Sparkles className="h-3 w-3 text-accent" /> Extension of our expertise
                </div>
                <h2 className="mt-4 font-display text-4xl md:text-5xl tracking-tight">
                  Software that backs every recommendation we make.
                </h2>
                <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-lg">
                  Our proprietary reporting platform continuously audits Google Business Profiles, citation consistency, local rankings, business visibility, reviews and optimization opportunities. It's the ground truth behind every move we make on your behalf.
                </p>
                <Link to="/software" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lift hover:-translate-y-0.5 transition">
                  Explore the Software <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="relative h-[380px]">
                {/* Screenshot A */}
                <div className="absolute right-0 top-0 w-[85%] rounded-2xl border border-border bg-card/80 backdrop-blur-xl p-4 shadow-lift">
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Local Performance</div>
                  <div className="mt-3 flex items-end gap-1.5 h-20">
                    {[28, 40, 36, 52, 46, 60, 68, 64, 78, 82, 88, 95].map((h, i) => (
                      <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-primary to-primary/40" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
                {/* Screenshot B */}
                <div className="absolute left-0 top-28 w-52 rounded-2xl border border-border bg-card/80 backdrop-blur-xl p-4 shadow-lift animate-float">
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Geo-Grid</div>
                  <div className="mt-3 grid grid-cols-6 gap-1">
                    {Array.from({ length: 36 }).map((_, i) => {
                      const r = ((i * 5) % 18) + 1;
                      const c = r <= 3 ? "bg-emerald-400" : r <= 8 ? "bg-amber-300" : "bg-rose-300/80";
                      return <div key={i} className={`aspect-square rounded-sm ${c}`} />;
                    })}
                  </div>
                </div>
                {/* Screenshot C */}
                <div
                  className="absolute right-8 bottom-0 w-60 rounded-2xl border border-border bg-card/80 backdrop-blur-xl p-4 shadow-lift"
                  style={{ animation: "float 8s ease-in-out infinite 1.5s" }}
                >
                  <div className="flex items-center justify-between">
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">GBP Audit</div>
                    <ShieldCheck className="h-3.5 w-3.5 text-accent" />
                  </div>
                  <div className="mt-2 font-display text-4xl">94<span className="text-sm text-muted-foreground">/100</span></div>
                  <div className="mt-3 h-1 rounded-full bg-surface-muted overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: "94%" }} />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="container-page py-24 md:py-32">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-xs font-semibold uppercase tracking-wider text-accent">Our philosophy</div>
            <h2 className="mt-3 font-display text-5xl md:text-7xl tracking-tight leading-[1.05]">
              Easier to <em className="not-italic text-gradient">discover</em>.<br />
              Easier to <em className="not-italic text-gradient">trust</em>.<br />
              Easier to <em className="not-italic text-gradient">choose</em>.
            </h2>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
              Local SEO isn't about chasing algorithms. It's about making great businesses impossible to miss when nearby customers are ready to buy.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {[
            { icon: Eye, t: "Clarity", d: "You should always understand what we're doing and why — no jargon, no hand-waving." },
            { icon: Ruler, t: "Consistency", d: "Local SEO rewards patient, compounding execution — not aggressive shortcuts." },
            { icon: TrendingUp, t: "Measurable growth", d: "Every action ties back to a business outcome: calls, bookings, visits, revenue." },
          ].map((p, i) => (
            <Reveal key={p.t} delay={i * 100}>
              <div className="rounded-3xl border border-border bg-card p-8 shadow-card">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/10 text-accent">
                  <p.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-6 font-display text-2xl">{p.t}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-surface">
        <div className="container-page py-24 md:py-32">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <div className="text-xs font-semibold uppercase tracking-wider text-accent">Our process</div>
              <h2 className="mt-3 font-display text-4xl md:text-5xl tracking-tight">From discovery to ongoing growth.</h2>
              <p className="mt-5 text-lg text-muted-foreground">Six connected stages, one dedicated team.</p>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {process.map((s, i) => (
              <Reveal key={s.t} delay={i * 90}>
                <div className="relative h-full rounded-3xl border border-border bg-card p-7 shadow-card">
                  <div className="flex items-center justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary text-primary-foreground shadow-card">
                      <s.icon className="h-5 w-5" />
                    </span>
                    <span className="font-display text-4xl text-muted-foreground/25">0{i + 1}</span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-foreground">{s.t}</h3>
                  <p className="mt-1.5 text-[15px] text-muted-foreground leading-relaxed">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="container-page py-24 md:py-32">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs font-semibold uppercase tracking-wider text-accent">Industries</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl tracking-tight">Built for businesses that win locally.</h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {industries.map((it, i) => (
            <Reveal key={it.t} delay={i * 40}>
              <div className="group h-full rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-lift">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-primary-soft to-accent/10 text-primary">
                  <it.icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <div className="mt-5 text-sm font-semibold text-foreground">{it.t}</div>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{it.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TEAM (roles, not people) */}
      <section className="container-page py-20 md:py-28">
        <Reveal>
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-accent">The team</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl tracking-tight">Meet the team behind the rankings.</h2>
            <p className="mt-5 text-lg text-muted-foreground">Departments and disciplines — because it takes more than one specialist to win local search.</p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {teamRoles.map((r, i) => (
            <Reveal key={r.t} delay={i * 50}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-lift">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary text-primary-foreground">
                  <r.icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 text-[15px] font-semibold text-foreground leading-snug">{r.t}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{r.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TRANSPARENCY */}
      <section className="container-page py-20 md:py-28">
        <div className="relative overflow-hidden rounded-[2rem] border border-border bg-surface p-8 md:p-16">
          <div className="absolute -right-40 top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" aria-hidden />
          <div className="relative grid lg:grid-cols-5 gap-10 items-center">
            <Reveal className="lg:col-span-3">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-card px-3 py-1 text-xs font-medium border border-border">
                  <Handshake className="h-3 w-3 text-accent" /> Our commitment to transparency
                </div>
                <h2 className="mt-4 font-display text-4xl md:text-5xl tracking-tight leading-tight">
                  You'll always know what we're doing — and why.
                </h2>
                <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                  Clients always understand what work is being performed, why recommendations are made, and how progress is measured. Sustainable Local SEO requires consistency — not shortcuts or guaranteed rankings.
                </p>
              </div>
            </Reveal>

            <Reveal className="lg:col-span-2" delay={150}>
              <ul className="space-y-3">
                {[
                  "Clear scope, no surprises",
                  "Monthly reports focused on outcomes",
                  "Direct access to your strategist",
                  "No guaranteed-rankings promises",
                  "Cancel anytime — no lock-ins",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-card">
                    <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-primary/10 text-primary">
                      <ShieldCheck className="h-3 w-3" />
                    </span>
                    <span className="text-sm font-medium text-foreground">{i}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-page py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-14">
          <Reveal>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-accent">FAQ</div>
              <h2 className="mt-3 font-display text-4xl md:text-5xl tracking-tight">Questions people ask before starting.</h2>
              <p className="mt-5 text-lg text-muted-foreground max-w-md">Have a different one? Reach out — a specialist will answer within one business day.</p>
              <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all">
                Ask a question <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <div className="space-y-3">
            {faqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <Reveal key={f.q} delay={i * 60}>
                  <div className={`rounded-2xl border bg-card overflow-hidden transition-all ${open ? "border-primary/30 shadow-lift" : "border-border shadow-card"}`}>
                    <button
                      onClick={() => setOpenFaq(open ? null : i)}
                      className="w-full flex items-center justify-between gap-4 p-5 text-left"
                    >
                      <span className="text-[15px] font-semibold text-foreground">{f.q}</span>
                      <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full ${open ? "bg-primary text-primary-foreground" : "bg-surface-muted text-muted-foreground"}`}>
                        {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                      </span>
                    </button>
                    <div
                      className="grid transition-all duration-300"
                      style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
                    >
                      <div className="overflow-hidden">
                        <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="container-page pb-24">
        <div className="relative overflow-hidden rounded-[2rem] p-10 md:p-16 text-primary-foreground">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary via-primary to-[oklch(0.28_0.04_225)]" aria-hidden />
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent/25 blur-3xl" aria-hidden />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/5 blur-3xl" aria-hidden />

          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium">
                <Trophy className="h-3 w-3 text-accent" /> Ready when you are
              </div>
              <h2 className="mt-4 font-display text-4xl md:text-5xl tracking-tight leading-tight">
                How visible is your business in local search — really?
              </h2>
              <p className="mt-4 text-primary-foreground/75 text-lg max-w-lg leading-relaxed">
                Discover where you stand today and what it would take to become the obvious choice in your market.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link to="/software" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-white/10 transition">
                Explore the Software
              </Link>
              <Link to="/get-started" className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:opacity-95 transition">
                Get Started <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="lg:col-span-2 mt-6 grid grid-cols-3 gap-4 text-center border-t border-white/10 pt-6">
              {[
                { icon: Phone, k: "Calls, not clicks" },
                { icon: Navigation, k: "Directions & visits" },
                { icon: Users2, k: "Real customers" },
              ].map((i) => (
                <div key={i.k} className="flex flex-col items-center gap-2 text-primary-foreground/80 text-xs sm:text-sm">
                  <i.icon className="h-4 w-4 text-accent" />
                  {i.k}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
