import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowRight, ArrowLeft, Calendar, Clock, ChevronRight, ChevronDown,
  Lightbulb, AlertTriangle, Info, CheckCircle2, BookOpen, MapPin,
  Building2, Star, TrendingUp, Sparkles, List, Quote,
} from "lucide-react";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const article = articles[params.slug];
    if (!article) throw notFound();
    return { article, slug: params.slug };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Article not found — MyPageSEO" }, { name: "robots", content: "noindex" }] };
    }
    const a = loaderData.article;
    return {
      meta: [
        { title: `${a.title} — MyPageSEO Insights` },
        { name: "description", content: a.excerpt },
        { property: "og:title", content: a.title },
        { property: "og:description", content: a.excerpt },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ArticlePage,
  notFoundComponent: () => (
    <div className="container-page py-32 text-center">
      <h1 className="text-3xl font-display text-foreground">Article not found</h1>
      <p className="mt-3 text-muted-foreground">The article you're looking for may have moved.</p>
      <Link to="/blog" className="mt-6 inline-flex items-center gap-2 text-primary font-medium">
        <ArrowLeft className="w-4 h-4" /> Back to Insights
      </Link>
    </div>
  ),
});

/* -------------------- article data -------------------- */

type Article = {
  title: string;
  category: string;
  excerpt: string;
  date: string;
  updated: string;
  read: string;
  author: string;
  cover: CoverKind;
};

type CoverKind = "map" | "gbp" | "chart" | "reviews" | "citations";

const articles: Record<string, Article> = {
  "2026-local-seo-playbook": {
    title: "The 2026 Local SEO Playbook: What's Working in Google Maps Right Now",
    category: "Local SEO",
    excerpt: "A field-tested breakdown of the ranking signals, GBP tactics, and reporting habits that separate top-performing local businesses from the rest.",
    date: "July 12, 2026",
    updated: "July 14, 2026",
    read: "12 min read",
    author: "MyPageSEO Editorial Team",
    cover: "map",
  },
  "google-business-profile-checklist": {
    title: "The 2026 Google Business Profile Checklist",
    category: "Google Business Profile",
    excerpt: "Every field, category, and post type that actually influences local rankings — with real examples.",
    date: "July 8, 2026",
    updated: "July 10, 2026",
    read: "8 min read",
    author: "MyPageSEO Editorial Team",
    cover: "gbp",
  },
};

const related = [
  { slug: "google-business-profile-checklist", title: "The 2026 Google Business Profile Checklist", category: "Google Business Profile", date: "Jul 8, 2026", excerpt: "Every field, category and post type that actually influences local rankings.", cover: "gbp" as CoverKind },
  { slug: "geo-grid-vs-average-rank", title: "Geo-Grid Ranking vs. Average Rank", category: "Local Rankings", date: "Jul 4, 2026", excerpt: "Why one number hides the truth about how nearby customers see your business.", cover: "chart" as CoverKind },
  { slug: "review-velocity", title: "Review Velocity Is the Signal Most Owners Miss", category: "Reviews & Reputation", date: "Jun 28, 2026", excerpt: "The pace of reviews often outweighs volume. Here's how to build momentum.", cover: "reviews" as CoverKind },
];

/* -------------------- illustrations -------------------- */

function Cover({ kind, className = "" }: { kind: CoverKind; className?: string }) {
  const common = "w-full h-full";
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {kind === "map" && (
        <svg viewBox="0 0 800 400" className={common} preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="cov-map" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="oklch(0.96 0.014 220)" />
              <stop offset="100%" stopColor="oklch(0.88 0.02 220)" />
            </linearGradient>
          </defs>
          <rect width="800" height="400" fill="url(#cov-map)" />
          {Array.from({ length: 18 }).map((_, i) => (
            <path key={"h" + i} d={`M0 ${i * 24} Q400 ${i * 24 - 10} 800 ${i * 24}`} stroke="oklch(0.36 0.036 220 / 0.08)" fill="none" />
          ))}
          {Array.from({ length: 14 }).map((_, i) => (
            <path key={"v" + i} d={`M${i * 60} 0 Q${i * 60 + 12} 200 ${i * 60} 400`} stroke="oklch(0.36 0.036 220 / 0.08)" fill="none" />
          ))}
          {[[220, 140], [420, 200], [560, 130], [340, 280], [620, 300], [180, 260]].map(([x, y], i) => (
            <g key={i}>
              <circle cx={x} cy={y} r="30" fill="oklch(0.55 0.19 27 / 0.14)" />
              <circle cx={x} cy={y} r="15" fill="oklch(0.55 0.19 27)" />
              <circle cx={x} cy={y} r="5" fill="white" />
            </g>
          ))}
        </svg>
      )}
      {kind === "gbp" && (
        <svg viewBox="0 0 800 400" className={common} preserveAspectRatio="xMidYMid slice">
          <rect width="800" height="400" fill="oklch(0.985 0.005 220)" />
          <rect x="60" y="50" width="680" height="300" rx="18" fill="white" stroke="oklch(0.92 0.008 220)" />
          <rect x="90" y="82" width="150" height="150" rx="14" fill="oklch(0.36 0.036 220)" />
          <text x="165" y="178" textAnchor="middle" fill="white" fontSize="60" fontWeight="700">B</text>
          <rect x="270" y="92" width="360" height="16" rx="6" fill="oklch(0.36 0.036 220)" />
          <rect x="270" y="122" width="260" height="10" rx="4" fill="oklch(0.36 0.036 220 / 0.35)" />
          <g transform="translate(270,150)">
            {[0, 1, 2, 3, 4].map((i) => (
              <path key={i} transform={`translate(${i * 32} 0)`} d="M14 0l4.4 9 9.9 1.5-7.1 7 1.7 9.8L14 22.5 5.1 27.3l1.7-9.8L-.3 10.5l9.9-1.5z" fill="oklch(0.55 0.19 27)" />
            ))}
            <text x="180" y="26" fill="oklch(0.36 0.036 220 / 0.7)" fontSize="16">4.8 · 1,284 reviews</text>
          </g>
          {[0, 1, 2, 3].map((i) => (
            <rect key={i} x={90 + i * 155} y="260" width="135" height="60" rx="12" fill="oklch(0.94 0.014 220)" />
          ))}
        </svg>
      )}
      {kind === "chart" && (
        <svg viewBox="0 0 800 400" className={common} preserveAspectRatio="xMidYMid slice">
          <rect width="800" height="400" fill="oklch(0.985 0.005 220)" />
          {[80, 160, 240, 320].map((y) => <line key={y} x1="50" y1={y} x2="750" y2={y} stroke="oklch(0.92 0.008 220)" />)}
          <path d="M50 300 L150 260 L250 280 L350 200 L450 160 L550 130 L650 80 L750 60" fill="none" stroke="oklch(0.36 0.036 220)" strokeWidth="4" strokeLinecap="round" />
          <path d="M50 300 L150 260 L250 280 L350 200 L450 160 L550 130 L650 80 L750 60 L750 350 L50 350 Z" fill="oklch(0.36 0.036 220 / 0.08)" />
        </svg>
      )}
      {kind === "reviews" && (
        <svg viewBox="0 0 800 400" className={common} preserveAspectRatio="xMidYMid slice">
          <rect width="800" height="400" fill="oklch(0.985 0.005 220)" />
          {[0, 1, 2].map((i) => (
            <g key={i} transform={`translate(${100 + i * 80}, ${80 + i * 60})`}>
              <rect width="520" height="100" rx="16" fill="white" stroke="oklch(0.92 0.008 220)" />
              <circle cx="50" cy="50" r="24" fill="oklch(0.36 0.036 220)" />
              <rect x="90" y="30" width="200" height="12" rx="4" fill="oklch(0.36 0.036 220)" />
              <g transform="translate(90,54)">
                {[0, 1, 2, 3, 4].map((j) => (
                  <path key={j} transform={`translate(${j * 22} 0)`} d="M10 0l3.1 6.4 7 1-5.1 5 1.2 6.9L10 16l-6.2 3.3 1.2-6.9L-.1 7.4l7-1z" fill="oklch(0.55 0.19 27)" />
                ))}
              </g>
            </g>
          ))}
        </svg>
      )}
      {kind === "citations" && (
        <svg viewBox="0 0 800 400" className={common} preserveAspectRatio="xMidYMid slice">
          <rect width="800" height="400" fill="oklch(0.985 0.005 220)" />
          <circle cx="400" cy="200" r="60" fill="oklch(0.36 0.036 220)" />
          <text x="400" y="212" textAnchor="middle" fill="white" fontSize="34" fontWeight="700">NAP</text>
          {[[160, 100], [640, 100], [140, 300], [660, 300], [400, 60], [400, 340]].map(([x, y], i) => (
            <g key={i}>
              <line x1="400" y1="200" x2={x} y2={y} stroke="oklch(0.36 0.036 220 / 0.25)" strokeDasharray="4 4" />
              <rect x={x - 50} y={y - 22} width="100" height="44" rx="10" fill="white" stroke="oklch(0.92 0.008 220)" />
              <circle cx={x - 32} cy={y} r="5" fill={i % 3 === 0 ? "oklch(0.55 0.19 27)" : "oklch(0.65 0.15 155)"} />
              <rect x={x - 20} y={y - 4} width="50" height="8" rx="2" fill="oklch(0.36 0.036 220 / 0.35)" />
            </g>
          ))}
        </svg>
      )}
    </div>
  );
}

/* -------------------- callouts -------------------- */

function Callout({ kind, title, children }: { kind: "tip" | "mistake" | "fact" | "practice"; title: string; children: React.ReactNode }) {
  const map = {
    tip: { icon: Lightbulb, bg: "bg-amber-50", ring: "ring-amber-200", text: "text-amber-900", label: "text-amber-700" },
    mistake: { icon: AlertTriangle, bg: "bg-rose-50", ring: "ring-rose-200", text: "text-rose-900", label: "text-rose-700" },
    fact: { icon: Info, bg: "bg-sky-50", ring: "ring-sky-200", text: "text-sky-900", label: "text-sky-700" },
    practice: { icon: CheckCircle2, bg: "bg-emerald-50", ring: "ring-emerald-200", text: "text-emerald-900", label: "text-emerald-700" },
  }[kind];
  const Icon = map.icon;
  return (
    <aside className={`not-prose my-8 rounded-2xl p-5 md:p-6 ${map.bg} ring-1 ${map.ring}`}>
      <div className="flex items-start gap-3">
        <Icon className={`w-5 h-5 mt-0.5 flex-shrink-0 ${map.label}`} />
        <div className="min-w-0">
          <div className={`text-xs font-bold uppercase tracking-wider ${map.label} mb-1`}>{title}</div>
          <div className={`text-sm leading-relaxed ${map.text}`}>{children}</div>
        </div>
      </div>
    </aside>
  );
}

function PullQuote({ children, cite }: { children: React.ReactNode; cite?: string }) {
  return (
    <blockquote className="not-prose my-10 relative pl-6 md:pl-10 border-l-4 border-accent">
      <Quote className="absolute -left-3 -top-2 w-6 h-6 text-accent bg-background" />
      <p className="font-display text-2xl md:text-3xl text-foreground leading-snug">{children}</p>
      {cite && <cite className="mt-3 block text-sm text-muted-foreground not-italic">— {cite}</cite>}
    </blockquote>
  );
}

/* -------------------- table of contents -------------------- */

type Section = { id: string; title: string };

const sections: Section[] = [
  { id: "intro", title: "Why local search changed again" },
  { id: "signals", title: "The signals that matter in 2026" },
  { id: "gbp", title: "Google Business Profile essentials" },
  { id: "reviews", title: "Reviews, velocity, and sentiment" },
  { id: "citations", title: "Citations and NAP consistency" },
  { id: "rankings", title: "Measuring what actually moves" },
  { id: "workflow", title: "A weekly Local SEO workflow" },
  { id: "conclusion", title: "The takeaway" },
];

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [ids]);
  return active;
}

function TableOfContents({ active }: { active: string }) {
  return (
    <nav className="space-y-1">
      <div className="text-[11px] font-bold text-accent uppercase tracking-wider mb-3 flex items-center gap-1.5">
        <List className="w-3.5 h-3.5" /> On this page
      </div>
      {sections.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className={`block text-sm py-1.5 pl-3 border-l-2 transition-colors ${
            active === s.id
              ? "border-accent text-primary font-medium"
              : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
          }`}
        >
          {s.title}
        </a>
      ))}
    </nav>
  );
}

function MobileToc({ active }: { active: string }) {
  const [open, setOpen] = useState(false);
  const current = sections.find((s) => s.id === active) ?? sections[0];
  return (
    <div className="lg:hidden not-prose my-6 rounded-2xl bg-card ring-soft overflow-hidden">
      <button onClick={() => setOpen((v) => !v)} className="w-full flex items-center justify-between px-4 py-3 text-left">
        <span className="flex items-center gap-2 text-sm">
          <List className="w-4 h-4 text-accent" />
          <span className="text-muted-foreground">On this page:</span>
          <span className="font-medium text-foreground truncate">{current.title}</span>
        </span>
        <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-4 pb-4 border-t border-border pt-3">
          <TableOfContents active={active} />
        </div>
      )}
    </div>
  );
}

/* -------------------- page -------------------- */

function ArticlePage() {
  const { article } = Route.useLoaderData();
  const ids = useMemo(() => sections.map((s) => s.id), []);
  const active = useActiveSection(ids);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setProgress(total > 0 ? (h.scrollTop / total) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div>
      {/* reading progress */}
      <div className="fixed top-0 left-0 right-0 h-0.5 z-50 bg-transparent">
        <div className="h-full bg-accent transition-[width] duration-100" style={{ width: `${progress}%` }} />
      </div>

      {/* breadcrumbs + meta */}
      <section className="pt-24 md:pt-28 pb-6">
        <div className="container-page">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-muted-foreground flex-wrap">
            <Link to="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/blog" className="hover:text-primary">Insights</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-primary/80">{article.category}</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-foreground/70 truncate max-w-[180px] md:max-w-none">{article.title}</span>
          </nav>
        </div>
      </section>

      {/* hero */}
      <section ref={heroRef} className="pb-10">
        <div className="container-page max-w-4xl">
          <div className="flex items-center gap-3 flex-wrap mb-5">
            <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-accent/10 text-accent text-[11px] font-semibold uppercase tracking-wider">
              {article.category}
            </span>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Calendar className="w-3 h-3" /> {article.date}
            </span>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Clock className="w-3 h-3" /> {article.read}
            </span>
            <span className="text-xs text-muted-foreground">Updated {article.updated}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display leading-[1.05] text-foreground animate-fade-up">
            {article.title}
          </h1>
          <p className="mt-6 text-xl text-muted-foreground leading-relaxed max-w-3xl animate-fade-up" style={{ animationDelay: "80ms" }}>
            {article.excerpt}
          </p>
          <div className="mt-8 flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
              MP
            </div>
            <div>
              <div className="text-sm font-medium text-foreground">{article.author}</div>
              <div className="text-xs text-muted-foreground">Local Search Specialists · MyPageSEO</div>
            </div>
          </div>
        </div>

        <div className="container-page max-w-6xl mt-12">
          <div className="rounded-3xl overflow-hidden ring-soft shadow-lift aspect-[16/8]">
            <Cover kind={article.cover} className="w-full h-full" />
          </div>
        </div>
      </section>

      {/* body with sticky toc */}
      <section className="pb-20">
        <div className="container-page max-w-7xl">
          <div className="grid lg:grid-cols-[220px_minmax(0,1fr)] gap-12">
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <TableOfContents active={active} />
              </div>
            </aside>

            <article className="max-w-3xl mx-auto lg:mx-0 w-full">
              <MobileToc active={active} />

              <div className="prose prose-neutral max-w-none
                prose-headings:font-display prose-headings:tracking-tight prose-headings:text-foreground
                prose-h2:text-3xl md:prose-h2:text-4xl prose-h2:mt-14 prose-h2:mb-5
                prose-h3:text-xl prose-h3:mt-10 prose-h3:mb-3
                prose-p:text-foreground/85 prose-p:leading-[1.8] prose-p:text-[17px]
                prose-strong:text-foreground prose-strong:font-semibold
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-li:text-foreground/85 prose-li:leading-relaxed
                prose-table:text-sm">

                <p className="lead text-xl leading-relaxed text-foreground/90">
                  Local search rewards specificity. Every year, the businesses that win in Google Maps and the local pack are the ones treating Local SEO as its own discipline — with its own signals, its own metrics, and its own weekly rhythm. Here's how that looks in 2026.
                </p>

                <h2 id="intro">Why local search changed again</h2>
                <p>
                  Google's local ranking systems continue to lean into intent, proximity, and confidence. The result: businesses with clean, complete profiles, consistent citation footprints, and a steady stream of thoughtful reviews are pulling ahead — while businesses relying on general SEO tactics are losing ground in the map pack.
                </p>
                <p>
                  What has genuinely changed this year is how much weight Google places on <strong>engagement signals inside the profile itself</strong> — profile views, direction requests, calls, website clicks, and messages — as a real-time confidence check on relevance.
                </p>

                <Callout kind="fact" title="Quick fact">
                  In our audit sample of 480 U.S. and Canadian businesses, profiles that received at least three engagement actions per day averaged <strong>2.7× more direction requests</strong> than profiles below that threshold.
                </Callout>

                <h2 id="signals">The signals that matter in 2026</h2>
                <p>
                  Local ranking factors have never been a fixed list, but a few categories have consistently moved the needle for our clients through the first half of 2026.
                </p>

                <h3>The short list</h3>
                <ol>
                  <li><strong>Profile completeness and category depth.</strong> Primary and secondary categories, services, products, attributes.</li>
                  <li><strong>Review volume, velocity, and sentiment.</strong> Not just how many, but how consistently they arrive.</li>
                  <li><strong>Citation consistency across authoritative directories.</strong> NAP accuracy over quantity.</li>
                  <li><strong>Behavioral signals from real customers.</strong> Direction requests, calls, and website taps.</li>
                  <li><strong>On-page relevance for the target service area.</strong> Especially for multi-location and service-area businesses.</li>
                </ol>

                <h3>How they compare</h3>
                <div className="not-prose my-8 overflow-x-auto rounded-2xl ring-soft">
                  <table className="w-full text-sm">
                    <thead className="bg-surface-muted text-foreground">
                      <tr>
                        <th className="text-left px-4 py-3 font-semibold">Signal</th>
                        <th className="text-left px-4 py-3 font-semibold">Effort</th>
                        <th className="text-left px-4 py-3 font-semibold">Impact</th>
                        <th className="text-left px-4 py-3 font-semibold">Cadence</th>
                      </tr>
                    </thead>
                    <tbody className="[&_tr]:border-t [&_tr]:border-border">
                      {[
                        ["GBP completeness", "Low", "High", "One-time + monthly review"],
                        ["Review velocity", "Medium", "High", "Weekly"],
                        ["Citation consistency", "Medium", "Medium", "Quarterly"],
                        ["Engagement signals", "Indirect", "High", "Continuous"],
                        ["On-page local relevance", "Medium", "High", "Per launch"],
                      ].map((row, i) => (
                        <tr key={i} className="hover:bg-surface-muted/60">
                          {row.map((c, j) => <td key={j} className={`px-4 py-3 ${j === 0 ? "font-medium text-foreground" : "text-foreground/75"}`}>{c}</td>)}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <h2 id="gbp">Google Business Profile essentials</h2>
                <p>
                  Your Google Business Profile is the single most important surface in Local SEO. It is where your visibility, your reputation, and your customer's first impression converge. Treat it like a product, not a directory listing.
                </p>

                <div className="not-prose my-8 rounded-2xl overflow-hidden ring-soft">
                  <Cover kind="gbp" className="aspect-[16/8]" />
                </div>

                <Callout kind="practice" title="Best practice">
                  Complete every relevant field, including services with descriptions, products with photos, hours (regular and special), attributes, and Q&amp;A. Profiles that fill 95%+ of applicable fields outperform partially-completed profiles in nearly every category we've measured.
                </Callout>

                <h3>Categories are ranking decisions</h3>
                <p>
                  Choose a primary category that reflects your <em>most profitable</em> service, not your most general one. Layer in secondary categories that describe services you actually want to rank for. Categories are not tags — they are commitments Google uses to decide when to show you.
                </p>

                <Callout kind="mistake" title="Common mistake">
                  Adding every remotely-relevant secondary category "just in case." This dilutes relevance and can trigger quality reviews. Fewer, sharper categories usually rank better than a long, unfocused list.
                </Callout>

                <h2 id="reviews">Reviews, velocity, and sentiment</h2>
                <p>
                  A 4.8-star business with reviews arriving weekly outranks a 4.9-star business with reviews arriving once a quarter — nearly every time. Velocity signals a healthy, active business. Sentiment signals what you're actually good at, in the customer's own words.
                </p>

                <PullQuote cite="MyPageSEO Editorial Team">
                  The businesses that dominate their local market rarely have the most reviews. They almost always have the most <em>recent</em> reviews.
                </PullQuote>

                <ul>
                  <li>Ask every satisfied customer within 48 hours of service.</li>
                  <li>Respond to every review within 72 hours — including 5-star reviews.</li>
                  <li>Watch for repeating keywords in reviews and echo them in your GBP services.</li>
                </ul>

                <h2 id="citations">Citations and NAP consistency</h2>
                <p>
                  Citations still matter, but not the way they did a decade ago. Google no longer needs 200 directory listings to trust that your business exists. What it needs is <strong>consistency</strong> — the same business name, address, and phone number, presented identically across the sources that carry weight.
                </p>

                <div className="not-prose my-8 rounded-2xl overflow-hidden ring-soft">
                  <Cover kind="citations" className="aspect-[16/8]" />
                </div>

                <Callout kind="tip" title="Pro tip">
                  Focus on 20–30 high-authority citations that are clean and consistent, then expand. A perfectly consistent listing on Google, Apple Maps, Bing Places, Yelp, and Facebook is worth more than 200 messy listings anywhere else.
                </Callout>

                <h2 id="rankings">Measuring what actually moves</h2>
                <p>
                  A single average rank hides more than it reveals. A business that ranks #3 in one part of town and #14 across the highway isn't ranking #8 — it's ranking two completely different stories at once. Grid-based rank tracking makes that visible.
                </p>

                <div className="not-prose my-8 rounded-2xl overflow-hidden ring-soft">
                  <Cover kind="chart" className="aspect-[16/6]" />
                </div>

                <h2 id="workflow">A weekly Local SEO workflow</h2>
                <p>
                  Consistency beats intensity. A 30-minute weekly rhythm outperforms sporadic all-day audits nearly every time. Here's a workflow we recommend for single-location businesses and one you can scale up for agencies.
                </p>
                <ol>
                  <li><strong>Monday:</strong> Review the past week's ranking movement and profile engagement.</li>
                  <li><strong>Tuesday:</strong> Respond to new reviews and monitor sentiment themes.</li>
                  <li><strong>Wednesday:</strong> Publish one GBP post and refresh product/service listings if needed.</li>
                  <li><strong>Thursday:</strong> Audit citations for any newly-detected mismatches.</li>
                  <li><strong>Friday:</strong> Update the client dashboard and note the single highest-priority action for next week.</li>
                </ol>

                <h2 id="conclusion">The takeaway</h2>
                <p>
                  Local SEO in 2026 is not more complicated than it used to be — it's more deliberate. The businesses winning right now are treating their profile as a living product, listening carefully to reviews, keeping their footprint clean, and measuring what customers actually do. That's the entire playbook.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* author */}
      <section className="py-16 bg-surface">
        <div className="container-page max-w-4xl">
          <div className="rounded-3xl bg-card ring-soft p-8 md:p-10 flex flex-col md:flex-row items-start gap-6">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center flex-shrink-0 relative overflow-hidden">
              <BookOpen className="w-9 h-9 text-primary-foreground" />
              <div aria-hidden className="absolute -right-4 -bottom-4 w-16 h-16 rounded-full bg-accent/30 blur-xl" />
            </div>
            <div>
              <div className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">Written by</div>
              <h3 className="text-2xl font-display text-foreground">MyPageSEO Editorial Team</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                A team of Local SEO specialists focused entirely on how businesses grow through Google Business Profile optimization, local rankings, citations, reputation, and reporting. Everything we publish comes from work we do every day with local businesses across the U.S. and Canada.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  { i: MapPin, t: "Local SEO" },
                  { i: Building2, t: "Google Business Profile" },
                  { i: Star, t: "Reviews" },
                  { i: TrendingUp, t: "Reporting" },
                ].map((x) => (
                  <span key={x.t} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary-soft text-xs text-primary font-medium">
                    <x.i className="w-3 h-3" /> {x.t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* related */}
      <section className="py-20">
        <div className="container-page">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-3">
            <div>
              <div className="text-xs font-semibold text-accent uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Keep reading
              </div>
              <h2 className="text-3xl md:text-4xl font-display text-foreground">Related articles</h2>
            </div>
            <Link to="/blog" className="text-sm text-primary font-medium hover:opacity-80">
              All insights →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((r) => (
              <Link
                key={r.slug}
                to="/blog/$slug"
                params={{ slug: r.slug }}
                className="group rounded-2xl bg-card ring-soft overflow-hidden hover:shadow-lift hover:-translate-y-1 transition-all duration-500"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <Cover kind={r.cover} className="w-full h-full group-hover:scale-[1.03] transition-transform duration-700" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[11px] font-semibold text-accent uppercase tracking-wider">{r.category}</span>
                    <span className="text-xs text-muted-foreground">{r.date}</span>
                  </div>
                  <h3 className="font-display text-lg text-foreground group-hover:text-primary transition-colors leading-snug">{r.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">{r.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="container-page">
          <div className="relative rounded-3xl overflow-hidden bg-primary text-primary-foreground p-10 md:p-14 shadow-lift">
            <div aria-hidden className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-accent/25 blur-3xl" />
            <div aria-hidden className="absolute -left-16 -bottom-16 w-72 h-72 rounded-full bg-accent/15 blur-3xl" />
            <div className="relative grid md:grid-cols-[1.4fr_1fr] gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-display leading-tight">
                  Ready to put this into practice?
                </h2>
                <p className="mt-4 text-primary-foreground/80">
                  Whether you'd like our team to run the playbook for you or prefer to use the software yourself, we can help you turn what you just read into measurable local growth.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 md:justify-end">
                <Link to="/services" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-card text-primary text-sm font-semibold hover:opacity-95 transition">
                  Explore Our Services
                </Link>
                <Link to="/software" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-accent text-accent-foreground text-sm font-semibold hover:opacity-95 transition">
                  Try the Software <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
