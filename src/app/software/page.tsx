import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight, Gauge, MapPin, Star, Link2, Radar, Building2, Users, TrendingUp,
  FileBarChart, Layers, Palette, Sparkles, Check, X, Stethoscope,
  Scale, Utensils, ShoppingBag, Wrench, Briefcase, ChevronDown,
  Search, Award, Activity, Target, Zap, Eye, ClipboardList,
} from "lucide-react";

export const Route = createFileRoute("/software")({
  head: () => ({
    meta: [
      { title: "MyPageSEO Software — Local SEO Reporting & Auditing Platform" },
      { name: "description", content: "Intelligent Local SEO software that turns Google Business Profile, citations, rankings and review data into clear, actionable reports." },
      { property: "og:title", content: "MyPageSEO Software — Local SEO Reporting Platform" },
      { property: "og:description", content: "Better Local SEO decisions begin with better data. Purpose-built reporting for local businesses and agencies." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/software" }],
  }),
  component: Software,
});

/* -------------------- helpers -------------------- */

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && (setShown(true), io.disconnect()),
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, shown };
}

function useCountUp(target: number, start: boolean, duration = 1600) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, start, duration]);
  return n;
}

/* -------------------- shared UI -------------------- */

function BrowserFrame({ title, children, className = "" }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl bg-card ring-soft shadow-lift overflow-hidden ${className}`}>
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface-muted">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <div className="mx-auto text-xs text-muted-foreground font-medium truncate">{title}</div>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

function ScoreRing({ value, label, size = 96 }: { value: number; label: string; size?: number }) {
  const r = size / 2 - 8;
  const c = 2 * Math.PI * r;
  const off = c - (value / 100) * c;
  return (
    <div className="flex items-center gap-3">
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} strokeWidth="8" className="stroke-primary-soft" fill="none" />
        <circle
          cx={size / 2} cy={size / 2} r={r} strokeWidth="8" fill="none"
          strokeLinecap="round" strokeDasharray={c} strokeDashoffset={off}
          className="stroke-primary transition-all duration-1000"
        />
      </svg>
      <div>
        <div className="text-3xl font-semibold text-primary">{value}<span className="text-base text-muted-foreground">/100</span></div>
        <div className="text-xs text-muted-foreground">{label}</div>
      </div>
    </div>
  );
}

function Bar({ label, value, tone = "primary" }: { label: string; value: number; tone?: "primary" | "accent" }) {
  return (
    <div>
      <div className="flex justify-between text-xs mb-1">
        <span className="text-foreground/80">{label}</span>
        <span className="text-muted-foreground">{value}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-primary-soft overflow-hidden">
        <div
          className={`h-full rounded-full ${tone === "accent" ? "bg-accent" : "bg-primary"}`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

function HeatGrid() {
  const cells = Array.from({ length: 49 }, (_, i) => {
    const x = i % 7, y = Math.floor(i / 7);
    const cx = 3, cy = 3;
    const d = Math.hypot(x - cx, y - cy);
    const v = Math.max(1, 10 - Math.round(d * 1.8));
    return v;
  });
  const color = (v: number) =>
    v >= 8 ? "bg-emerald-500" : v >= 5 ? "bg-amber-400" : v >= 3 ? "bg-orange-400" : "bg-rose-500/80";
  return (
    <div className="grid grid-cols-7 gap-1.5">
      {cells.map((v, i) => (
        <div key={i} className={`aspect-square rounded ${color(v)} text-[10px] text-white flex items-center justify-center font-semibold`}>
          {v}
        </div>
      ))}
    </div>
  );
}

function Sparkline({ points, tone = "primary" }: { points: number[]; tone?: "primary" | "accent" }) {
  const w = 240, h = 60, max = Math.max(...points), min = Math.min(...points);
  const d = points.map((p, i) => {
    const x = (i / (points.length - 1)) * w;
    const y = h - ((p - min) / (max - min || 1)) * (h - 8) - 4;
    return `${i === 0 ? "M" : "L"}${x},${y}`;
  }).join(" ");
  const stroke = tone === "accent" ? "stroke-accent" : "stroke-primary";
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-14">
      <path d={d} fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={stroke} />
    </svg>
  );
}

/* -------------------- hero mockup -------------------- */

function HeroMockup() {
  return (
    <div className="relative">
      <div aria-hidden className="absolute -inset-8 bg-radial-soft rounded-[3rem] blur-2xl opacity-70" />
      <BrowserFrame title="app.mypageseo.com/dashboard" className="relative">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-muted-foreground">Local SEO Score</div>
                <div className="text-sm font-semibold text-foreground">Downtown Location</div>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 font-medium">+12 this month</span>
            </div>
            <ScoreRing value={87} label="Overall local performance" />
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="rounded-xl bg-surface-muted p-3">
                <div className="text-[10px] text-muted-foreground">GBP Health</div>
                <div className="text-lg font-semibold text-primary">94</div>
              </div>
              <div className="rounded-xl bg-surface-muted p-3">
                <div className="text-[10px] text-muted-foreground">Citations</div>
                <div className="text-lg font-semibold text-primary">78</div>
              </div>
              <div className="rounded-xl bg-surface-muted p-3">
                <div className="text-[10px] text-muted-foreground">Reviews</div>
                <div className="text-lg font-semibold text-primary">4.7★</div>
              </div>
            </div>
            <div className="rounded-xl bg-surface-muted p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-foreground">Local Visibility (30d)</span>
                <span className="text-[10px] text-emerald-700">▲ 18.4%</span>
              </div>
              <Sparkline points={[40, 45, 43, 52, 58, 55, 62, 68, 66, 74, 78, 82]} />
            </div>
          </div>
          <div className="space-y-3">
            <div className="text-xs font-medium text-foreground flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-accent" /> Visibility Heatmap
            </div>
            <HeatGrid />
            <div className="text-[10px] text-muted-foreground">Grid ranks for "dentist near me"</div>
          </div>
        </div>
      </BrowserFrame>

      <div className="hidden md:block absolute -left-8 top-24 w-56 rounded-2xl bg-card ring-soft shadow-lift p-4 animate-float">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
            <Star className="w-4 h-4 text-accent" />
          </div>
          <div>
            <div className="text-xs font-semibold">Reviews This Week</div>
            <div className="text-[10px] text-muted-foreground">Avg 4.8 · 12 new</div>
          </div>
        </div>
        <div className="flex items-end gap-1 h-12">
          {[6, 8, 5, 9, 12, 10, 14].map((v, i) => (
            <div key={i} className="flex-1 rounded-t bg-primary/80" style={{ height: `${(v / 14) * 100}%` }} />
          ))}
        </div>
      </div>

      <div className="hidden md:block absolute -right-6 bottom-16 w-64 rounded-2xl bg-card ring-soft shadow-lift p-4 animate-float" style={{ animationDelay: "1.2s" }}>
        <div className="text-xs font-semibold mb-3 flex items-center gap-1.5">
          <Radar className="w-3.5 h-3.5 text-primary" /> Competitor Snapshot
        </div>
        <div className="space-y-2">
          <Bar label="Your business" value={87} />
          <Bar label="Competitor A" value={72} tone="accent" />
          <Bar label="Competitor B" value={64} tone="accent" />
        </div>
      </div>
    </div>
  );
}

/* -------------------- data -------------------- */

const features = [
  { icon: FileBarChart, t: "Local SEO Report", d: "A complete overview of your local search performance in one clean, shareable report." },
  { icon: Building2, t: "Google Business Profile Audit", d: "Field-by-field evaluation of your GBP with prioritized fixes for every gap we find." },
  { icon: Link2, t: "Citation Report", d: "Track directory listings for accuracy, consistency, and coverage across the sites Google actually reads." },
  { icon: Star, t: "Review & Reputation Analysis", d: "Monitor volume, sentiment, response rate, and keyword themes across every review platform." },
  { icon: MapPin, t: "Local Ranking Tracker", d: "Grid-based rank tracking that shows exactly where you appear across your service area." },
  { icon: Radar, t: "Competitor Benchmarking", d: "Compare your Local SEO signals against real competitors ranking in your market." },
  { icon: Gauge, t: "Business Profile Health Score", d: "A single, weighted score that tells you exactly how well your GBP is optimized." },
  { icon: TrendingUp, t: "Performance Trends", d: "Historical charts for rankings, visibility, calls, direction requests, and profile actions." },
  { icon: Sparkles, t: "Optimization Recommendations", d: "Clear next steps prioritized by impact — not a wall of unfiltered data." },
  { icon: Layers, t: "Multi-location Monitoring", d: "Manage two locations or two hundred with rollup reports and per-location detail." },
  { icon: Eye, t: "Local Visibility Overview", d: "Understand exactly how often, where, and to whom your business is appearing locally." },
  { icon: Palette, t: "White-label Reporting", d: "Brand every report with your own logo, colors, and domain — ideal for agencies." },
];

const showcases = [
  {
    title: "Local SEO Dashboard",
    body: "A single control room for every Local SEO signal that matters. See profile health, visibility trends, ranking movement, review activity, and priority actions the moment you log in — no digging, no spreadsheets.",
    mockup: "dashboard" as const,
  },
  {
    title: "Google Business Profile Analysis",
    body: "We audit every element of your Google Business Profile — categories, services, hours, media, posts, Q&A, and attributes — and score each area against local ranking best practices with clear, prioritized fixes.",
    mockup: "gbp" as const,
  },
  {
    title: "Citation Management Report",
    body: "Discover every directory listing pointing to your business, catch inconsistent NAP data, and monitor coverage across the sites Google trusts most for local relevance.",
    mockup: "citations" as const,
  },
  {
    title: "Local Ranking Trends",
    body: "Move beyond a single rank position. Grid-based tracking shows exactly where you appear across every block of your service area, with weekly movement and competitor overlay.",
    mockup: "rankings" as const,
  },
  {
    title: "Review & Reputation Analytics",
    body: "Volume, velocity, sentiment, response rate, and keyword themes — all pulled together so you can see what customers are saying and how it's shaping local search performance.",
    mockup: "reviews" as const,
  },
  {
    title: "Executive Summary Report",
    body: "A boardroom-ready summary that translates Local SEO metrics into business outcomes: calls, direction requests, qualified leads, and where the biggest opportunities remain.",
    mockup: "exec" as const,
  },
];

const workflow = [
  { icon: ClipboardList, t: "Collect business information" },
  { icon: Building2, t: "Analyze Google Business Profile" },
  { icon: Search, t: "Evaluate local search signals" },
  { icon: Link2, t: "Review citations" },
  { icon: Radar, t: "Compare competitors" },
  { icon: Sparkles, t: "Generate actionable insights" },
  { icon: FileBarChart, t: "Produce professional reports" },
];

const reports = [
  { t: "Local SEO Report", d: "The full performance picture — visibility, rankings, GBP, citations, and reviews in one document." },
  { t: "Google Business Profile Report", d: "A field-level audit of every GBP element with prioritized optimization actions." },
  { t: "Citation Report", d: "Directory coverage, NAP consistency, duplicates, and missing high-authority listings." },
  { t: "Local Ranking Report", d: "Grid-based rankings across your service area, tracked week over week." },
  { t: "Reputation Report", d: "Review volume, sentiment, response rate, and platform-by-platform breakdown." },
  { t: "Competitor Snapshot", d: "How you compare against the businesses actually ranking in your local market." },
  { t: "Business Visibility Report", d: "Where, when, and how often your business is showing up in local search results." },
  { t: "Executive Summary", d: "A concise, outcome-focused report translating data into business impact." },
];

const audiences = [
  { icon: Briefcase, t: "Local SEO Agencies", d: "Deliver white-label reports at scale with per-client dashboards and rollups." },
  { icon: Users, t: "Marketing Consultants", d: "Show measurable local impact without building your own reporting stack." },
  { icon: Layers, t: "Franchise Businesses", d: "Consistent local visibility across every franchise location, monitored centrally." },
  { icon: Building2, t: "Multi-location Brands", d: "One rollup view plus deep per-location detail for regional managers." },
  { icon: Stethoscope, t: "Healthcare Practices", d: "Ensure patients find the right location, hours, and services when searching locally." },
  { icon: Scale, t: "Law Firms", d: "Compete for high-intent local searches with clear GBP and review reporting." },
  { icon: Wrench, t: "Contractors & Home Services", d: "Track service-area rankings block by block, not by an average city rank." },
  { icon: Utensils, t: "Restaurants", d: "Monitor reviews, photos, hours accuracy, and map pack visibility in real time." },
  { icon: ShoppingBag, t: "Retail Businesses", d: "Bring local shoppers to the storefront with accurate profiles and strong local signals." },
  { icon: MapPin, t: "Location-Dependent Companies", d: "Anywhere revenue depends on nearby customers, the platform pays for itself." },
];

const stats = [
  { n: 48200, s: "+", l: "Reports generated" },
  { n: 260, s: "+", l: "Local SEO signals analyzed" },
  { n: 12500, s: "+", l: "Business profiles evaluated" },
  { n: 190000, s: "+", l: "Citations monitored" },
  { n: 84000, s: "+", l: "Local keywords tracked" },
  { n: 320000, s: "+", l: "Recommendations delivered" },
];

const faqs = [
  { q: "Does the software support multiple locations?", a: "Yes. You can manage anywhere from two to several hundred locations with per-location detail and organization-wide rollup reporting." },
  { q: "Are reports white-labeled?", a: "Every report can be branded with your own logo, colors, and domain — ideal for agencies and consultants delivering to clients." },
  { q: "Can agencies use it for their clients?", a: "The platform is built with agencies in mind: client workspaces, permissions, white-label reports, and scheduled delivery are all included." },
  { q: "How often is data updated?", a: "GBP signals and reviews refresh daily. Rank tracking runs on a weekly cadence by default, with on-demand refresh available." },
  { q: "Is Google Business Profile integration supported?", a: "Yes. Connect your GBP once and the platform pulls insights, posts, reviews, and profile actions directly from Google." },
  { q: "Can I use the software without hiring MyPageSEO services?", a: "Absolutely. The software is a standalone product — use it independently, alongside our services, or with your existing team." },
];

/* -------------------- showcase mockups -------------------- */

function Showcase({ kind }: { kind: typeof showcases[number]["mockup"] }) {
  if (kind === "dashboard") return <HeroMockup />;
  if (kind === "gbp") return (
    <BrowserFrame title="app.mypageseo.com/gbp-audit">
      <div className="grid grid-cols-2 gap-4">
        <ScoreRing value={94} label="GBP health" />
        <div className="space-y-2">
          <Bar label="Primary category" value={100} />
          <Bar label="Services & products" value={82} />
          <Bar label="Photos & media" value={76} />
          <Bar label="Posts (90d)" value={64} tone="accent" />
          <Bar label="Q&A completeness" value={48} tone="accent" />
        </div>
      </div>
      <div className="mt-4 space-y-2">
        {[
          { t: "Add 6 service-specific photos", ok: false },
          { t: "Fill 4 missing service descriptions", ok: false },
          { t: "Business hours verified", ok: true },
        ].map((r, i) => (
          <div key={i} className="flex items-center gap-2 text-xs rounded-lg bg-surface-muted px-3 py-2">
            {r.ok ? <Check className="w-4 h-4 text-emerald-600" /> : <Target className="w-4 h-4 text-accent" />}
            <span className={r.ok ? "text-muted-foreground line-through" : "text-foreground"}>{r.t}</span>
          </div>
        ))}
      </div>
    </BrowserFrame>
  );
  if (kind === "citations") return (
    <BrowserFrame title="app.mypageseo.com/citations">
      <div className="grid grid-cols-3 gap-3 mb-4">
        {[{ n: 142, l: "Listings found" }, { n: 128, l: "Accurate" }, { n: 14, l: "Needs fix" }].map((x, i) => (
          <div key={i} className="rounded-xl bg-surface-muted p-3">
            <div className="text-2xl font-semibold text-primary">{x.n}</div>
            <div className="text-[10px] text-muted-foreground">{x.l}</div>
          </div>
        ))}
      </div>
      <div className="space-y-1.5">
        {[
          ["Google", "Accurate", true],
          ["Apple Maps", "Accurate", true],
          ["Yelp", "NAP mismatch", false],
          ["Bing Places", "Accurate", true],
          ["Yellow Pages", "Duplicate found", false],
          ["Facebook", "Accurate", true],
        ].map(([n, s, ok], i) => (
          <div key={i} className="flex items-center justify-between text-xs rounded-lg px-3 py-2 bg-surface-muted">
            <span className="font-medium">{n}</span>
            <span className={ok ? "text-emerald-700" : "text-accent"}>{s}</span>
          </div>
        ))}
      </div>
    </BrowserFrame>
  );
  if (kind === "rankings") return (
    <BrowserFrame title="app.mypageseo.com/rankings">
      <div className="grid grid-cols-2 gap-5">
        <HeatGrid />
        <div className="space-y-3">
          {[
            { k: "dentist near me", v: 3, d: "+2" },
            { k: "family dentist [city]", v: 5, d: "+1" },
            { k: "emergency dental", v: 7, d: "−1" },
            { k: "teeth whitening", v: 4, d: "+3" },
          ].map((r, i) => (
            <div key={i} className="flex items-center justify-between text-xs">
              <span className="text-foreground truncate">{r.k}</span>
              <span className="flex items-center gap-2">
                <span className="font-semibold text-primary">#{r.v}</span>
                <span className={r.d.startsWith("+") ? "text-emerald-700" : "text-accent"}>{r.d}</span>
              </span>
            </div>
          ))}
          <div className="pt-2">
            <Sparkline points={[7, 6, 6, 5, 5, 4, 4, 3, 3, 3]} />
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
  if (kind === "reviews") return (
    <BrowserFrame title="app.mypageseo.com/reviews">
      <div className="grid grid-cols-3 gap-3 mb-4">
        <div className="rounded-xl bg-surface-muted p-3">
          <div className="text-2xl font-semibold text-primary">4.7★</div>
          <div className="text-[10px] text-muted-foreground">Avg rating · 1,284</div>
        </div>
        <div className="rounded-xl bg-surface-muted p-3">
          <div className="text-2xl font-semibold text-primary">92%</div>
          <div className="text-[10px] text-muted-foreground">Response rate</div>
        </div>
        <div className="rounded-xl bg-surface-muted p-3">
          <div className="text-2xl font-semibold text-primary">+38</div>
          <div className="text-[10px] text-muted-foreground">New this month</div>
        </div>
      </div>
      <div className="space-y-2">
        {[5, 4, 3, 2, 1].map((s) => (
          <div key={s} className="flex items-center gap-2 text-xs">
            <span className="w-4">{s}★</span>
            <div className="flex-1 h-1.5 rounded-full bg-primary-soft overflow-hidden">
              <div className="h-full bg-primary" style={{ width: `${[74, 18, 5, 2, 1][5 - s]}%` }} />
            </div>
            <span className="w-8 text-right text-muted-foreground">{[74, 18, 5, 2, 1][5 - s]}%</span>
          </div>
        ))}
      </div>
    </BrowserFrame>
  );
  // exec
  return (
    <BrowserFrame title="app.mypageseo.com/executive-summary">
      <div className="mb-4">
        <div className="text-xs text-muted-foreground">Q3 Executive Summary</div>
        <div className="text-sm font-semibold">Local performance is trending up.</div>
      </div>
      <div className="grid grid-cols-2 gap-3 mb-4">
        {[
          { i: Activity, l: "Calls from GBP", v: "+42%" },
          { i: MapPin, l: "Direction requests", v: "+31%" },
          { i: Eye, l: "Local impressions", v: "+58%" },
          { i: Award, l: "Top-3 keywords", v: "37 → 61" },
        ].map((x, i) => (
          <div key={i} className="rounded-xl bg-surface-muted p-3 flex items-center gap-2">
            <x.i className="w-4 h-4 text-accent" />
            <div>
              <div className="text-[10px] text-muted-foreground">{x.l}</div>
              <div className="text-sm font-semibold text-primary">{x.v}</div>
            </div>
          </div>
        ))}
      </div>
      <Sparkline points={[30, 34, 38, 42, 44, 50, 55, 62, 68, 72, 78, 84]} />
    </BrowserFrame>
  );
}

/* -------------------- sections -------------------- */

function FeatureCard({ f, i }: { f: (typeof features)[number]; i: number }) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`group rounded-2xl bg-card ring-soft p-6 transition-all duration-500 hover:shadow-lift hover:-translate-y-1 ${shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      style={{ transitionDelay: `${(i % 4) * 60}ms` }}
    >
      <div className="w-11 h-11 rounded-xl bg-primary-soft flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
        <f.icon className="w-5 h-5" />
      </div>
      <h3 className="font-semibold text-foreground mb-1.5">{f.t}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{f.d}</p>
    </div>
  );
}

function StatItem({ n, s, l }: { n: number; s: string; l: string }) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  const v = useCountUp(n, shown);
  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-display text-primary tabular-nums">
        {v.toLocaleString()}{s}
      </div>
      <div className="text-sm text-muted-foreground mt-1">{l}</div>
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-medium text-foreground pr-6">{q}</span>
        <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <div className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden text-sm text-muted-foreground leading-relaxed">{a}</div>
      </div>
    </div>
  );
}

/* -------------------- page -------------------- */

function Software() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden pt-24 md:pt-32 pb-16 md:pb-24 bg-hero">
        <div className="container-page grid lg:grid-cols-2 gap-14 items-center">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card ring-soft text-xs font-medium text-primary">
              <Zap className="w-3.5 h-3.5 text-accent" /> MyPageSEO Software
            </span>
            <h1 className="mt-5 text-4xl md:text-6xl font-display leading-[1.05] text-foreground">
              Better Local SEO decisions <span className="text-gradient">begin with better data.</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl leading-relaxed">
              MyPageSEO Software is an intelligent Local SEO reporting and auditing platform. It transforms complex signals — Google Business Profile performance, local visibility, citations, rankings, reviews, and optimization opportunities — into clear, actionable reports.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-accent-foreground font-medium hover:opacity-95 transition shadow-lift">
                Request a Demo <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/get-started" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-95 transition">
                Get Started
              </Link>
              <a href="#reports" className="text-sm text-muted-foreground hover:text-primary transition ml-1">
                Explore the reports below →
              </a>
            </div>
          </div>
          <div className="animate-fade-up" style={{ animationDelay: "150ms" }}>
            <HeroMockup />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 md:py-28">
        <div className="container-page">
          <div className="max-w-2xl mb-14">
            <div className="text-xs font-medium text-accent uppercase tracking-wider mb-3">Platform capabilities</div>
            <h2 className="text-3xl md:text-5xl font-display text-foreground leading-tight">
              Everything you need to understand your local presence.
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Local SEO success depends on dozens of interconnected ranking signals. The platform brings them together in one intuitive interface.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {features.map((f, i) => <FeatureCard key={f.t} f={f} i={i} />)}
          </div>
        </div>
      </section>

      {/* SHOWCASE */}
      <section id="reports" className="py-20 md:py-28 bg-surface">
        <div className="container-page">
          <div className="max-w-2xl mb-16">
            <div className="text-xs font-medium text-accent uppercase tracking-wider mb-3">Inside the platform</div>
            <h2 className="text-3xl md:text-5xl font-display text-foreground leading-tight">
              A closer look at how it works.
            </h2>
          </div>
          <div className="space-y-24">
            {showcases.map((s, i) => (
              <div key={s.title} className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <div>
                  <div className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">0{i + 1}</div>
                  <h3 className="text-2xl md:text-3xl font-display text-foreground mb-4">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.body}</p>
                </div>
                <Showcase kind={s.mockup} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="py-20 md:py-28">
        <div className="container-page">
          <div className="max-w-2xl mb-14">
            <div className="text-xs font-medium text-accent uppercase tracking-wider mb-3">Reporting ecosystem</div>
            <h2 className="text-3xl md:text-5xl font-display text-foreground leading-tight">
              From raw Local SEO data to practical business decisions.
            </h2>
          </div>
          <div className="relative">
            <div aria-hidden className="hidden lg:block absolute top-8 left-8 right-8 h-px bg-gradient-to-r from-primary/10 via-primary/40 to-primary/10" />
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 relative">
              {workflow.map((w, i) => (
                <div key={w.t} className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-card ring-soft shadow-card flex items-center justify-center mb-3 relative z-10">
                    <w.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-xs font-semibold text-accent mb-1">Step {i + 1}</div>
                  <div className="text-sm font-medium text-foreground">{w.t}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REPORTS */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="container-page">
          <div className="max-w-2xl mb-14">
            <div className="text-xs font-medium text-accent uppercase tracking-wider mb-3">Report library</div>
            <h2 className="text-3xl md:text-5xl font-display text-foreground leading-tight">
              Reports designed for clarity and confidence.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {reports.map((r, i) => (
              <div key={r.t} className="group rounded-2xl bg-card ring-soft overflow-hidden hover:shadow-lift hover:-translate-y-1 transition-all duration-300">
                <div className="aspect-[4/3] bg-gradient-to-br from-primary-soft to-surface-muted p-4 relative overflow-hidden">
                  <div className="absolute inset-3 rounded-xl bg-card ring-soft p-3 flex flex-col gap-1.5">
                    <div className="h-1.5 w-2/3 rounded bg-primary/60" />
                    <div className="h-1 w-1/2 rounded bg-primary/20" />
                    <div className="flex-1 grid grid-cols-3 gap-1 mt-2">
                      {Array.from({ length: 6 }).map((_, k) => (
                        <div key={k} className="rounded bg-primary-soft" style={{ opacity: 0.4 + (k % 3) * 0.2 }} />
                      ))}
                    </div>
                    <div className="h-4 rounded bg-primary/10 mt-1" />
                  </div>
                  <div className="absolute top-2 right-2 text-[9px] font-semibold text-accent bg-card px-1.5 py-0.5 rounded">
                    #{String(i + 1).padStart(2, "0")}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-foreground mb-1.5">{r.t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{r.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTELLIGENCE */}
      <section className="py-20 md:py-28">
        <div className="container-page grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="text-xs font-medium text-accent uppercase tracking-wider mb-3">Actionable intelligence</div>
            <h2 className="text-3xl md:text-5xl font-display text-foreground leading-tight">
              It doesn't just show numbers. It tells you what to do next.
            </h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              The platform surfaces issues, prioritizes recommendations, and highlights opportunities that actually deserve your attention. Every insight comes with the context you need to act — no data-science degree required.
            </p>
            <div className="mt-6 space-y-3">
              {[
                "Detects missing services, categories, and photos on your GBP",
                "Flags citation mismatches before they hurt your rankings",
                "Prioritizes recommendations by expected impact on local visibility",
                "Surfaces competitor moves that require a response",
              ].map((t) => (
                <div key={t} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-accent" />
                  </div>
                  <span className="text-sm text-foreground/85">{t}</span>
                </div>
              ))}
            </div>
          </div>
          <BrowserFrame title="Priority Recommendations">
            <div className="space-y-2.5">
              {[
                { p: "High impact", t: "Add 8 service-area cities to your GBP", icon: MapPin },
                { p: "High impact", t: "Fix NAP mismatch on Yelp & Yellow Pages", icon: Link2 },
                { p: "Medium", t: "Publish 3 GBP posts this week", icon: FileBarChart },
                { p: "Medium", t: "Respond to 6 unanswered reviews", icon: Star },
                { p: "Low", t: "Upload 4 team photos to your profile", icon: Building2 },
              ].map((r, i) => (
                <div key={i} className="flex items-center gap-3 rounded-xl bg-surface-muted px-3.5 py-3">
                  <r.icon className="w-4 h-4 text-primary flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-foreground truncate">{r.t}</div>
                    <div className="text-[10px] text-muted-foreground">{r.p}</div>
                  </div>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${r.p === "High impact" ? "bg-accent/10 text-accent" : r.p === "Medium" ? "bg-amber-500/10 text-amber-700" : "bg-primary-soft text-primary"}`}>
                    {r.p}
                  </span>
                </div>
              ))}
            </div>
          </BrowserFrame>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="container-page">
          <div className="max-w-2xl mb-14">
            <div className="text-xs font-medium text-accent uppercase tracking-wider mb-3">Why software</div>
            <h2 className="text-3xl md:text-5xl font-display text-foreground leading-tight">
              More than a spreadsheet. More than an audit.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-card ring-soft p-8">
              <div className="text-sm font-semibold text-muted-foreground mb-5">Manual Local SEO analysis</div>
              <ul className="space-y-3">
                {[
                  "Days of manual data collection",
                  "Inconsistent methodology across audits",
                  "Static spreadsheets and screenshots",
                  "Point-in-time snapshots, no trends",
                  "Copy-paste recommendations",
                  "Hard to scale across locations",
                  "Client-unfriendly presentation",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2.5 text-sm text-foreground/70">
                    <X className="w-4 h-4 text-muted-foreground/70 mt-0.5 flex-shrink-0" /> {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-primary text-primary-foreground p-8 shadow-lift relative overflow-hidden">
              <div aria-hidden className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-accent/20 blur-3xl" />
              <div className="relative">
                <div className="text-sm font-semibold text-primary-foreground/70 mb-5">MyPageSEO Software</div>
                <ul className="space-y-3">
                  {[
                    "Reports generated in minutes",
                    "Consistent, weighted scoring model",
                    "Interactive dashboards and trends",
                    "Continuous monitoring, always current",
                    "Prioritized, contextual recommendations",
                    "Scales from one location to hundreds",
                    "Polished, white-label ready reports",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2.5 text-sm">
                      <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" /> {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AUDIENCES */}
      <section className="py-20 md:py-28">
        <div className="container-page">
          <div className="max-w-2xl mb-14">
            <div className="text-xs font-medium text-accent uppercase tracking-wider mb-3">Built for</div>
            <h2 className="text-3xl md:text-5xl font-display text-foreground leading-tight">
              Who runs on MyPageSEO Software.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {audiences.map((a) => (
              <div key={a.t} className="rounded-2xl bg-card ring-soft p-5 hover:shadow-lift hover:-translate-y-1 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-primary-soft flex items-center justify-center mb-3">
                  <a.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-1.5">{a.t}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{a.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 md:py-24 bg-surface">
        <div className="container-page">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
            {stats.map((s) => <StatItem key={s.l} {...s} />)}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28">
        <div className="container-page grid lg:grid-cols-3 gap-12">
          <div>
            <div className="text-xs font-medium text-accent uppercase tracking-wider mb-3">FAQ</div>
            <h2 className="text-3xl md:text-4xl font-display text-foreground leading-tight">
              Answers before you ask.
            </h2>
          </div>
          <div className="lg:col-span-2">
            {faqs.map((f) => <FAQItem key={f.q} {...f} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20">
        <div className="container-page">
          <div className="relative rounded-3xl overflow-hidden bg-primary text-primary-foreground p-10 md:p-16 shadow-lift">
            <div aria-hidden className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-accent/30 blur-3xl" />
            <div aria-hidden className="absolute -left-16 -bottom-16 w-72 h-72 rounded-full bg-accent/20 blur-3xl" />
            <div className="relative max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-display leading-tight">
                See what your Local SEO data is really saying.
              </h2>
              <p className="mt-5 text-primary-foreground/80 text-lg">
                Experience the platform firsthand — the reports, the recommendations, the clarity.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-accent-foreground font-medium hover:opacity-95 transition">
                  Request a Demo <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/get-started" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-card text-primary font-medium hover:opacity-95 transition">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
