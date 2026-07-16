import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowRight, Search, Clock, Calendar, User, Sparkles, MapPin, Star,
  Link2, Building2, TrendingUp, BarChart3, FileText, Newspaper, BookOpen,
  Mail, CheckCircle2, Map,
} from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Insights — Local SEO, Google Business Profile & More | MyPageSEO" },
      { name: "description", content: "Practical Local SEO knowledge, GBP strategies, case studies, software updates and actionable guides for businesses across the U.S. and Canada." },
      { property: "og:title", content: "MyPageSEO Insights" },
      { property: "og:description", content: "Insights for businesses that want to win local search." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Insights,
});

/* -------------------- reveal helper -------------------- */

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && (setShown(true), io.disconnect()),
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, shown };
}

/* -------------------- data -------------------- */

const categories = [
  "All", "Local SEO", "Google Business Profile", "Citations",
  "Reviews & Reputation", "Local Rankings", "Marketing Strategy",
  "Case Studies", "Software Updates", "Industry News", "Guides",
];

type Post = {
  t: string; c: string; d: string; date: string; read: string;
  author: string; initials: string; art: ArtKind;
};

type ArtKind = "map" | "gbp" | "chart" | "reviews" | "citations" | "growth" | "news" | "guide" | "software";

const featured: Post = {
  t: "The 2026 Local SEO Playbook: What's Working in Google Maps Right Now",
  c: "Local SEO",
  d: "A field-tested breakdown of the ranking signals, GBP tactics, and reporting habits that separate top-performing local businesses from the rest heading into 2026.",
  date: "Jul 12, 2026",
  read: "12 min read",
  author: "Priya Ramesh",
  initials: "PR",
  art: "map",
};

const posts: Post[] = [
  { t: "The 2026 Google Business Profile Checklist", c: "Google Business Profile", d: "Every field, category, and post type that actually influences local rankings — with real examples.", date: "Jul 08, 2026", read: "8 min", author: "Marcus Chen", initials: "MC", art: "gbp" },
  { t: "Geo-Grid Ranking vs. Average Rank: Why It Matters", c: "Local Rankings", d: "Why one number hides the truth about how nearby customers actually see your business on Google Maps.", date: "Jul 04, 2026", read: "6 min", author: "Priya Ramesh", initials: "PR", art: "chart" },
  { t: "Review Velocity Is the Signal Most Owners Miss", c: "Reviews & Reputation", d: "The pace of reviews often outweighs volume. Here's how to build a program that keeps momentum.", date: "Jun 28, 2026", read: "7 min", author: "Elena Vasquez", initials: "EV", art: "reviews" },
  { t: "Citation Cleanup: The Underrated Local Ranking Boost", c: "Citations", d: "A pragmatic approach to auditing directory listings without paying for every 'top 100 sites' service.", date: "Jun 22, 2026", read: "9 min", author: "David Park", initials: "DP", art: "citations" },
  { t: "How a Multi-Location Dental Group Grew Calls 62%", c: "Case Studies", d: "The exact GBP, citation, and review workflow that lifted qualified calls across 14 locations in six months.", date: "Jun 18, 2026", read: "10 min", author: "Marcus Chen", initials: "MC", art: "growth" },
  { t: "Local SEO for Home Services: A Practical Framework", c: "Marketing Strategy", d: "Service-area businesses have unique constraints. Here's a framework built for them, not for brick-and-mortar.", date: "Jun 12, 2026", read: "11 min", author: "Priya Ramesh", initials: "PR", art: "guide" },
  { t: "What Google's Latest Local Update Actually Changed", c: "Industry News", d: "Cutting through the noise on the most recent local search algorithm update — with data from real accounts.", date: "Jun 05, 2026", read: "5 min", author: "Elena Vasquez", initials: "EV", art: "news" },
  { t: "The Anatomy of a Perfect GBP Post", c: "Google Business Profile", d: "Length, media, offers, and CTAs — what makes GBP posts drive profile actions instead of ignored impressions.", date: "May 30, 2026", read: "6 min", author: "David Park", initials: "DP", art: "gbp" },
  { t: "Reputation Recovery: Turning a 3.6 into a 4.7", c: "Reviews & Reputation", d: "A step-by-step reputation recovery plan for businesses climbing out of a rough patch of reviews.", date: "May 24, 2026", read: "9 min", author: "Elena Vasquez", initials: "EV", art: "reviews" },
];

const guides = [
  { t: "The Complete Guide to Google Business Profile Optimization", d: "Everything you need to configure, maintain, and grow your GBP from foundation to advanced tactics.", read: "24 min read", art: "gbp" as ArtKind },
  { t: "Local SEO Fundamentals for Business Owners", d: "A plain-English introduction to how local search works and where your effort actually moves the needle.", read: "18 min read", art: "map" as ArtKind },
  { t: "A Practical Guide to Local Ranking Reporting", d: "How to read grid-based rankings, competitor overlays, and trend data to make sharper decisions.", read: "16 min read", art: "chart" as ArtKind },
  { t: "Reviews & Reputation: A Framework That Actually Scales", d: "Requesting, responding, monitoring, and measuring reviews across every location and platform.", read: "20 min read", art: "reviews" as ArtKind },
];

const releases = [
  { v: "v4.6", date: "Jul 09, 2026", t: "Enhanced Geo-Grid Overlays", d: "Compare up to 4 competitors simultaneously across any grid density." },
  { v: "v4.5", date: "Jun 24, 2026", t: "Review Sentiment Themes", d: "Automatic keyword-theme extraction across every connected review platform." },
  { v: "v4.4", date: "Jun 10, 2026", t: "White-label Domain Support", d: "Serve reports from your own subdomain with automatic SSL." },
  { v: "v4.3", date: "May 27, 2026", t: "Multi-location Rollups", d: "Portfolio-level dashboards for franchises and multi-brand organizations." },
  { v: "v4.2", date: "May 13, 2026", t: "Citation Duplicate Detection", d: "Smarter matching for near-duplicate listings across major directories." },
  { v: "v4.1", date: "Apr 29, 2026", t: "Scheduled Report Delivery", d: "Weekly and monthly report emails with fully branded PDF exports." },
];

const topics = [
  { t: "Google Business Profile", i: Building2 },
  { t: "Local SEO Strategy", i: MapPin },
  { t: "Citation Management", i: Link2 },
  { t: "Local Rankings", i: TrendingUp },
  { t: "Customer Reviews", i: Star },
  { t: "Maps Visibility", i: Map },
  { t: "Reporting", i: BarChart3 },
  { t: "Software Updates", i: Sparkles },
];

/* -------------------- illustrations -------------------- */

function Art({ kind, className = "" }: { kind: ArtKind; className?: string }) {
  const common = "w-full h-full";
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {kind === "map" && (
        <svg viewBox="0 0 400 240" className={common} preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="g-map" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="oklch(0.94 0.014 220)" />
              <stop offset="100%" stopColor="oklch(0.88 0.02 220)" />
            </linearGradient>
          </defs>
          <rect width="400" height="240" fill="url(#g-map)" />
          {Array.from({ length: 12 }).map((_, i) => (
            <path key={"h" + i} d={`M0 ${i * 22} Q200 ${i * 22 - 8} 400 ${i * 22}`} stroke="oklch(0.36 0.036 220 / 0.08)" fill="none" />
          ))}
          {Array.from({ length: 8 }).map((_, i) => (
            <path key={"v" + i} d={`M${i * 55} 0 Q${i * 55 + 10} 120 ${i * 55} 240`} stroke="oklch(0.36 0.036 220 / 0.08)" fill="none" />
          ))}
          {[[120, 90], [220, 130], [280, 80], [180, 170], [310, 180]].map(([x, y], i) => (
            <g key={i}>
              <circle cx={x} cy={y} r="18" fill="oklch(0.55 0.19 27 / 0.15)" />
              <circle cx={x} cy={y} r="9" fill="oklch(0.55 0.19 27)" />
              <circle cx={x} cy={y} r="3" fill="white" />
            </g>
          ))}
        </svg>
      )}
      {kind === "gbp" && (
        <svg viewBox="0 0 400 240" className={common} preserveAspectRatio="xMidYMid slice">
          <rect width="400" height="240" fill="oklch(0.985 0.005 220)" />
          <rect x="30" y="30" width="340" height="180" rx="14" fill="white" stroke="oklch(0.92 0.008 220)" />
          <rect x="50" y="52" width="90" height="90" rx="10" fill="oklch(0.36 0.036 220)" />
          <text x="95" y="105" textAnchor="middle" fill="white" fontSize="34" fontWeight="700">B</text>
          <rect x="160" y="58" width="180" height="10" rx="5" fill="oklch(0.36 0.036 220)" />
          <rect x="160" y="78" width="140" height="6" rx="3" fill="oklch(0.36 0.036 220 / 0.3)" />
          <g transform="translate(160,100)">
            {[0, 1, 2, 3, 4].map((i) => (
              <path key={i} transform={`translate(${i * 18} 0)`} d="M8 0l2.5 5.2 5.7.8-4.1 4 1 5.6L8 12.9 2.9 15.6l1-5.6L-.2 6l5.7-.8z" fill="oklch(0.55 0.19 27)" />
            ))}
          </g>
          {[0, 1, 2].map((i) => (
            <rect key={i} x={50 + i * 100} y="160" width="80" height="34" rx="8" fill="oklch(0.94 0.014 220)" />
          ))}
        </svg>
      )}
      {kind === "chart" && (
        <svg viewBox="0 0 400 240" className={common} preserveAspectRatio="xMidYMid slice">
          <rect width="400" height="240" fill="oklch(0.985 0.005 220)" />
          {[40, 80, 120, 160, 200].map((y) => (
            <line key={y} x1="30" y1={y} x2="370" y2={y} stroke="oklch(0.92 0.008 220)" />
          ))}
          <path d="M30 180 L80 160 L130 170 L180 130 L230 110 L280 90 L330 60 L370 40" fill="none" stroke="oklch(0.36 0.036 220)" strokeWidth="3" strokeLinecap="round" />
          <path d="M30 180 L80 160 L130 170 L180 130 L230 110 L280 90 L330 60 L370 40 L370 210 L30 210 Z" fill="oklch(0.36 0.036 220 / 0.08)" />
          <path d="M30 200 L80 195 L130 185 L180 180 L230 165 L280 155 L330 140 L370 130" fill="none" stroke="oklch(0.55 0.19 27)" strokeWidth="3" strokeLinecap="round" strokeDasharray="4 4" />
          {[80, 180, 280, 370].map((x, i) => (
            <circle key={i} cx={x} cy={[160, 130, 90, 40][i]} r="5" fill="oklch(0.36 0.036 220)" />
          ))}
        </svg>
      )}
      {kind === "reviews" && (
        <svg viewBox="0 0 400 240" className={common} preserveAspectRatio="xMidYMid slice">
          <rect width="400" height="240" fill="oklch(0.985 0.005 220)" />
          {[0, 1, 2].map((i) => (
            <g key={i} transform={`translate(${40 + i * 40}, ${50 + i * 30})`}>
              <rect width="260" height="60" rx="12" fill="white" stroke="oklch(0.92 0.008 220)" />
              <circle cx="26" cy="30" r="14" fill="oklch(0.36 0.036 220)" />
              <rect x="50" y="18" width="120" height="7" rx="3" fill="oklch(0.36 0.036 220)" />
              <g transform="translate(50,32)">
                {[0, 1, 2, 3, 4].map((j) => (
                  <path key={j} transform={`translate(${j * 14} 0)`} d="M6 0l1.9 3.9 4.3.6-3.1 3 .7 4.2L6 9.7 2.2 11.7l.7-4.2L-.2 4.5l4.3-.6z" fill="oklch(0.55 0.19 27)" />
                ))}
              </g>
            </g>
          ))}
        </svg>
      )}
      {kind === "citations" && (
        <svg viewBox="0 0 400 240" className={common} preserveAspectRatio="xMidYMid slice">
          <rect width="400" height="240" fill="oklch(0.985 0.005 220)" />
          <circle cx="200" cy="120" r="34" fill="oklch(0.36 0.036 220)" />
          <text x="200" y="128" textAnchor="middle" fill="white" fontSize="24" fontWeight="700">NAP</text>
          {[[80, 60], [320, 60], [60, 180], [340, 180], [200, 40], [200, 210]].map(([x, y], i) => (
            <g key={i}>
              <line x1="200" y1="120" x2={x} y2={y} stroke="oklch(0.36 0.036 220 / 0.25)" strokeDasharray="3 3" />
              <rect x={x - 26} y={y - 12} width="52" height="24" rx="6" fill="white" stroke="oklch(0.92 0.008 220)" />
              <circle cx={x - 16} cy={y} r="3" fill={i % 3 === 0 ? "oklch(0.55 0.19 27)" : "oklch(0.65 0.15 155)"} />
            </g>
          ))}
        </svg>
      )}
      {kind === "growth" && (
        <svg viewBox="0 0 400 240" className={common} preserveAspectRatio="xMidYMid slice">
          <rect width="400" height="240" fill="oklch(0.985 0.005 220)" />
          {[40, 80, 120, 160, 200, 240, 280, 320].map((x, i) => {
            const h = 30 + i * 18;
            return <rect key={x} x={x} y={210 - h} width="32" height={h} rx="6" fill={i === 7 ? "oklch(0.55 0.19 27)" : "oklch(0.36 0.036 220)"} opacity={0.3 + i * 0.09} />;
          })}
          <path d="M56 180 L96 165 L136 150 L176 135 L216 115 L256 95 L296 70 L336 40" fill="none" stroke="oklch(0.55 0.19 27)" strokeWidth="3" />
        </svg>
      )}
      {kind === "news" && (
        <svg viewBox="0 0 400 240" className={common} preserveAspectRatio="xMidYMid slice">
          <rect width="400" height="240" fill="oklch(0.985 0.005 220)" />
          <rect x="40" y="40" width="320" height="160" rx="12" fill="white" stroke="oklch(0.92 0.008 220)" />
          <rect x="60" y="60" width="200" height="12" rx="4" fill="oklch(0.36 0.036 220)" />
          <rect x="60" y="82" width="140" height="8" rx="4" fill="oklch(0.36 0.036 220 / 0.4)" />
          {[110, 128, 146, 164].map((y) => <rect key={y} x="60" y={y} width="280" height="5" rx="2" fill="oklch(0.36 0.036 220 / 0.15)" />)}
          <rect x="280" y="60" width="60" height="34" rx="6" fill="oklch(0.55 0.19 27)" />
          <text x="310" y="82" textAnchor="middle" fill="white" fontSize="11" fontWeight="700">NEW</text>
        </svg>
      )}
      {kind === "guide" && (
        <svg viewBox="0 0 400 240" className={common} preserveAspectRatio="xMidYMid slice">
          <rect width="400" height="240" fill="oklch(0.985 0.005 220)" />
          <rect x="120" y="40" width="160" height="160" rx="10" fill="white" stroke="oklch(0.92 0.008 220)" />
          <rect x="120" y="40" width="10" height="160" fill="oklch(0.55 0.19 27)" />
          <rect x="150" y="65" width="100" height="8" rx="3" fill="oklch(0.36 0.036 220)" />
          {[90, 108, 126, 144, 162, 180].map((y) => <rect key={y} x="150" y={y} width={y % 3 === 0 ? 110 : 80} height="4" rx="2" fill="oklch(0.36 0.036 220 / 0.2)" />)}
          <circle cx="80" cy="120" r="30" fill="oklch(0.36 0.036 220 / 0.1)" />
          <circle cx="320" cy="120" r="30" fill="oklch(0.55 0.19 27 / 0.1)" />
        </svg>
      )}
      {kind === "software" && (
        <svg viewBox="0 0 400 240" className={common} preserveAspectRatio="xMidYMid slice">
          <rect width="400" height="240" fill="oklch(0.985 0.005 220)" />
          <rect x="50" y="40" width="300" height="160" rx="12" fill="white" stroke="oklch(0.92 0.008 220)" />
          <rect x="50" y="40" width="300" height="30" rx="12" fill="oklch(0.94 0.014 220)" />
          <circle cx="68" cy="55" r="4" fill="oklch(0.55 0.19 27)" />
          <circle cx="82" cy="55" r="4" fill="oklch(0.75 0.14 85)" />
          <circle cx="96" cy="55" r="4" fill="oklch(0.65 0.15 155)" />
          <rect x="70" y="90" width="120" height="90" rx="8" fill="oklch(0.94 0.014 220)" />
          <rect x="210" y="90" width="120" height="40" rx="8" fill="oklch(0.36 0.036 220)" />
          <rect x="210" y="140" width="120" height="40" rx="8" fill="oklch(0.55 0.19 27 / 0.15)" />
        </svg>
      )}
    </div>
  );
}

/* -------------------- cards -------------------- */

function CategoryChip({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
        active
          ? "bg-primary text-primary-foreground shadow-card"
          : "bg-card ring-soft text-foreground/70 hover:text-primary hover:-translate-y-0.5"
      }`}
    >
      {label}
    </button>
  );
}

function AuthorAvatar({ initials }: { initials: string }) {
  return (
    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-semibold">
      {initials}
    </div>
  );
}

function CategoryBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-accent/10 text-accent text-[11px] font-semibold uppercase tracking-wider">
      {label}
    </span>
  );
}

function PostCard({ p, i }: { p: Post; i: number }) {
  const { ref, shown } = useReveal<HTMLElement>();
  return (
    <article
      ref={ref}
      className={`group rounded-2xl bg-card ring-soft overflow-hidden transition-all duration-500 hover:shadow-lift hover:-translate-y-1 ${
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: `${(i % 3) * 70}ms` }}
    >
      <div className="aspect-[16/10] overflow-hidden">
        <Art kind={p.art} className="w-full h-full group-hover:scale-[1.03] transition-transform duration-700" />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <CategoryBadge label={p.c} />
          <span className="text-xs text-muted-foreground flex items-center gap-1">
            <Clock className="w-3 h-3" /> {p.read}
          </span>
        </div>
        <h3 className="font-display text-xl leading-snug text-foreground group-hover:text-primary transition-colors">
          {p.t}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">{p.d}</p>
        <div className="mt-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AuthorAvatar initials={p.initials} />
            <div>
              <div className="text-xs font-medium text-foreground">{p.author}</div>
              <div className="text-[10px] text-muted-foreground">{p.date}</div>
            </div>
          </div>
          <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
        </div>
      </div>
    </article>
  );
}

function GuideCard({ g, i }: { g: typeof guides[number]; i: number }) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`group grid grid-cols-[140px_1fr] sm:grid-cols-[200px_1fr] rounded-2xl overflow-hidden bg-card ring-soft hover:shadow-lift hover:-translate-y-1 transition-all duration-500 ${shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      style={{ transitionDelay: `${(i % 2) * 80}ms` }}
    >
      <Art kind={g.art} className="h-full" />
      <div className="p-5 sm:p-7 flex flex-col justify-center">
        <div className="text-[11px] font-semibold text-accent uppercase tracking-wider mb-2">Guide · {g.read}</div>
        <h3 className="font-display text-xl md:text-2xl text-foreground leading-snug group-hover:text-primary transition-colors">{g.t}</h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{g.d}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
          Read the guide <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </div>
  );
}

/* -------------------- page -------------------- */

function Insights() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const [email, setEmail] = useState("");
  const [subbed, setSubbed] = useState(false);

  const filtered = useMemo(() => {
    return posts.filter((p) => {
      const catOk = cat === "All" || p.c === cat;
      const qOk = !q || (p.t + " " + p.d + " " + p.c).toLowerCase().includes(q.toLowerCase());
      return catOk && qOk;
    });
  }, [q, cat]);

  return (
    <div>
      {/* HERO */}
      <section className="relative pt-24 md:pt-32 pb-12 bg-hero overflow-hidden">
        <div aria-hidden className="absolute inset-0 bg-radial-soft opacity-70" />
        <div className="container-page relative">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card ring-soft text-xs font-medium text-primary">
              <BookOpen className="w-3.5 h-3.5 text-accent" /> MyPageSEO Insights
            </span>
            <h1 className="mt-5 text-4xl md:text-6xl font-display leading-[1.05] text-foreground animate-fade-up">
              Insights for businesses that want to <span className="text-gradient">win local search.</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-2xl leading-relaxed animate-fade-up" style={{ animationDelay: "80ms" }}>
              Practical Local SEO knowledge, Google Business Profile strategies, software updates, case studies, industry news, and actionable guides — written for business owners, marketers, and agencies across the U.S. and Canada.
            </p>

            <div className="mt-8 relative max-w-xl animate-fade-up" style={{ animationDelay: "160ms" }}>
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search articles by title or keyword…"
                className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-card ring-soft focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm placeholder:text-muted-foreground shadow-card"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-6 border-b border-border sticky top-16 z-30 bg-background/85 backdrop-blur">
        <div className="container-page">
          <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1 scrollbar-none">
            {categories.map((c) => (
              <CategoryChip key={c} label={c} active={cat === c} onClick={() => setCat(c)} />
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED */}
      {(cat === "All" || cat === featured.c) && !q && (
        <section className="py-16 md:py-20">
          <div className="container-page">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-xs font-semibold text-accent uppercase tracking-wider">Featured</span>
            </div>
            <article className="group grid lg:grid-cols-2 gap-8 lg:gap-12 items-center rounded-3xl overflow-hidden bg-card ring-soft shadow-card hover:shadow-lift transition-all duration-500">
              <div className="aspect-[16/11] lg:aspect-auto lg:h-full overflow-hidden">
                <Art kind={featured.art} className="w-full h-full group-hover:scale-[1.02] transition-transform duration-700" />
              </div>
              <div className="p-8 md:p-10 lg:pr-12">
                <div className="flex items-center gap-3 mb-4">
                  <CategoryBadge label={featured.c} />
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {featured.date}
                  </span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {featured.read}
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-display leading-tight text-foreground">
                  {featured.t}
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">{featured.d}</p>
                <div className="mt-8 flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <AuthorAvatar initials={featured.initials} />
                    <div>
                      <div className="text-sm font-medium text-foreground flex items-center gap-1.5">
                        <User className="w-3 h-3 text-muted-foreground" /> {featured.author}
                      </div>
                      <div className="text-xs text-muted-foreground">Head of Local Strategy</div>
                    </div>
                  </div>
                  <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:opacity-95 transition">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </article>
          </div>
        </section>
      )}

      {/* RECENT GRID */}
      <section className="py-16 md:py-20">
        <div className="container-page">
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">
                <Newspaper className="w-3.5 h-3.5 inline mr-1" /> Latest articles
              </div>
              <h2 className="text-3xl md:text-4xl font-display text-foreground">
                {cat === "All" ? "Fresh from the team" : cat}
              </h2>
            </div>
            <div className="text-sm text-muted-foreground hidden md:block">
              Showing {filtered.length} of {posts.length}
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20 rounded-2xl bg-surface-muted">
              <p className="text-muted-foreground">No articles match your search.</p>
              <button onClick={() => { setQ(""); setCat("All"); }} className="mt-3 text-sm text-primary font-medium">Clear filters</button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((p, i) => <PostCard key={p.t} p={p} i={i} />)}
            </div>
          )}
        </div>
      </section>

      {/* POPULAR GUIDES */}
      <section className="py-20 md:py-24 bg-surface">
        <div className="container-page">
          <div className="max-w-2xl mb-12">
            <div className="text-xs font-semibold text-accent uppercase tracking-wider mb-2 flex items-center gap-1">
              <FileText className="w-3.5 h-3.5" /> Popular guides
            </div>
            <h2 className="text-3xl md:text-4xl font-display text-foreground leading-tight">
              Deep, evergreen education for local businesses.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {guides.map((g, i) => <GuideCard key={g.t} g={g} i={i} />)}
          </div>
        </div>
      </section>

      {/* SOFTWARE UPDATES */}
      <section className="py-20 md:py-24">
        <div className="container-page">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <div className="text-xs font-semibold text-accent uppercase tracking-wider mb-2 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> Latest software updates
              </div>
              <h2 className="text-3xl md:text-4xl font-display text-foreground leading-tight">
                A platform that keeps improving.
              </h2>
            </div>
            <Link to="/software" className="text-sm text-primary font-medium hover:opacity-80">
              Explore the platform →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {releases.map((r, i) => (
              <div key={r.v} className="rounded-2xl bg-card ring-soft p-5 hover:shadow-lift hover:-translate-y-1 transition-all duration-300" style={{ transitionDelay: `${(i % 3) * 40}ms` }}>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2 py-0.5 rounded-md bg-primary text-primary-foreground text-[11px] font-semibold">{r.v}</span>
                  <span className="text-xs text-muted-foreground">{r.date}</span>
                </div>
                <h3 className="font-semibold text-foreground">{r.t}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{r.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED TOPICS */}
      <section className="py-20 md:py-24 bg-surface">
        <div className="container-page">
          <div className="max-w-2xl mb-12">
            <div className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">Featured topics</div>
            <h2 className="text-3xl md:text-4xl font-display text-foreground leading-tight">
              Browse insights by the topics that matter most.
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {topics.map((topic) => (
              <button
                key={topic.t}
                onClick={() => { setCat(categories.includes(topic.t) ? topic.t : "All"); setQ(topic.t); window.scrollTo({ top: 300, behavior: "smooth" }); }}
                className="group text-left rounded-2xl bg-card ring-soft p-6 hover:shadow-lift hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-primary-soft flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <topic.i className="w-5 h-5" />
                </div>
                <div className="font-semibold text-foreground text-sm">{topic.t}</div>
                <div className="mt-1 text-xs text-muted-foreground flex items-center gap-1">
                  Explore articles <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-20 md:py-24">
        <div className="container-page">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-soft text-xs font-medium text-primary mb-5">
              <Mail className="w-3.5 h-3.5" /> Newsletter
            </div>
            <h2 className="text-3xl md:text-5xl font-display text-foreground leading-tight">
              Local SEO insights, delivered.
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              One thoughtful email each month with practical local search tactics, platform updates, and case studies. No spam, no fluff — unsubscribe anytime.
            </p>
            <form
              onSubmit={(e) => { e.preventDefault(); if (email) { setSubbed(true); setEmail(""); } }}
              className="mt-8 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
            >
              <input
                type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="flex-1 px-5 py-3.5 rounded-xl bg-card ring-soft focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm placeholder:text-muted-foreground"
              />
              <button className="px-6 py-3.5 rounded-xl bg-accent text-accent-foreground text-sm font-semibold hover:opacity-95 transition shadow-lift whitespace-nowrap">
                Subscribe
              </button>
            </form>
            {subbed && (
              <div className="mt-4 inline-flex items-center gap-2 text-sm text-emerald-700 animate-fade-up">
                <CheckCircle2 className="w-4 h-4" /> You're on the list. Watch your inbox.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 md:pb-28">
        <div className="container-page">
          <div className="relative rounded-3xl overflow-hidden bg-primary text-primary-foreground p-10 md:p-14 shadow-lift">
            <div aria-hidden className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-accent/25 blur-3xl" />
            <div aria-hidden className="absolute -left-16 -bottom-16 w-72 h-72 rounded-full bg-accent/15 blur-3xl" />
            <div className="relative grid md:grid-cols-[1.5fr_1fr] gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-display leading-tight">
                  Turn knowledge into measurable Local SEO growth.
                </h2>
                <p className="mt-4 text-primary-foreground/80">
                  Reading is one thing. Ranking is another. Explore our services or request a free Local SEO analysis and see exactly where your local presence stands.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 md:justify-end">
                <Link to="/services" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-card text-primary text-sm font-semibold hover:opacity-95 transition">
                  Explore Services
                </Link>
                <Link to="/contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-accent text-accent-foreground text-sm font-semibold hover:opacity-95 transition">
                  Request Analysis <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
