import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { z } from "zod";
import {
  ArrowRight, Mail, Phone, Clock, CheckCircle2, MapPin, Building2, Star,
  Link2, Layers, BarChart3, Handshake, HelpCircle, Sparkles, Zap,
  Compass, MessageSquare, Rocket, ShieldCheck, LineChart, ChevronDown,
} from "lucide-react";
import { Photo } from "@/components/photos";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact MyPageSEO — Let's Talk About Local SEO" },
      { name: "description", content: "Talk to the MyPageSEO team about Local SEO services, Google Business Profile optimization, or a software demo. Most inquiries answered within one business day." },
      { property: "og:title", content: "Contact MyPageSEO" },
      { property: "og:description", content: "Start a conversation about growing your local visibility." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
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

/* -------------------- form schema -------------------- */

const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  business: z.string().trim().min(1, "Business name is required").max(120),
  email: z.string().trim().email("Enter a valid email address").max(255),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  website: z.string().trim().max(255).optional().or(z.literal("")),
  location: z.string().trim().max(120).optional().or(z.literal("")),
  size: z.string().min(1, "Please choose a company size"),
  interest: z.string().min(1, "Please choose a primary interest"),
  message: z.string().trim().min(10, "Tell us a little about your goals (min 10 characters)").max(1500),
});
type ContactForm = z.infer<typeof contactSchema>;

const initial: ContactForm = {
  name: "", business: "", email: "", phone: "", website: "", location: "",
  size: "", interest: "", message: "",
};

/* -------------------- floating input -------------------- */

function Field({
  id, label, value, onChange, type = "text", error, required, autoComplete,
}: {
  id: keyof ContactForm; label: string; value: string;
  onChange: (v: string) => void; type?: string; error?: string;
  required?: boolean; autoComplete?: string;
}) {
  const filled = value.length > 0;
  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        value={value}
        required={required}
        autoComplete={autoComplete}
        onChange={(e) => onChange(e.target.value)}
        className={`peer w-full rounded-xl bg-card px-4 pt-5 pb-2 text-sm text-foreground ring-1 transition-all outline-none placeholder-transparent focus:ring-2 ${
          error ? "ring-accent focus:ring-accent" : "ring-border focus:ring-primary/40"
        }`}
        placeholder={label}
      />
      <label
        htmlFor={id}
        className={`pointer-events-none absolute left-4 transition-all ${
          filled ? "top-1.5 text-[10px] font-semibold uppercase tracking-wider text-primary" : "top-4 text-sm text-muted-foreground peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:font-semibold peer-focus:uppercase peer-focus:tracking-wider peer-focus:text-primary"
        }`}
      >
        {label}{required && <span className="text-accent">*</span>}
      </label>
      {error && <p className="mt-1.5 text-xs text-accent">{error}</p>}
    </div>
  );
}

function Select({
  id, label, value, onChange, options, error, required,
}: {
  id: keyof ContactForm; label: string; value: string;
  onChange: (v: string) => void; options: string[]; error?: string; required?: boolean;
}) {
  const filled = value.length > 0;
  return (
    <div className="relative">
      <select
        id={id}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        className={`peer w-full appearance-none rounded-xl bg-card px-4 pt-5 pb-2 text-sm text-foreground ring-1 transition-all outline-none focus:ring-2 ${
          error ? "ring-accent focus:ring-accent" : "ring-border focus:ring-primary/40"
        } ${filled ? "" : "text-transparent"}`}
      >
        <option value="" hidden />
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
      <label
        htmlFor={id}
        className={`pointer-events-none absolute left-4 transition-all ${
          filled ? "top-1.5 text-[10px] font-semibold uppercase tracking-wider text-primary" : "top-4 text-sm text-muted-foreground"
        }`}
      >
        {label}{required && <span className="text-accent">*</span>}
      </label>
      <ChevronDown className="pointer-events-none absolute right-4 top-4 w-4 h-4 text-muted-foreground" />
      {error && <p className="mt-1.5 text-xs text-accent">{error}</p>}
    </div>
  );
}

/* -------------------- data -------------------- */

const helpCards = [
  { i: MapPin, t: "Local SEO Services", d: "Full-service Local SEO strategy, execution, and reporting." },
  { i: Building2, t: "Google Business Profile Optimization", d: "Audit, fix, and grow your most important local surface." },
  { i: Sparkles, t: "Local SEO Software Demo", d: "See MyPageSEO Software in action with a guided walkthrough." },
  { i: Layers, t: "Multi-location SEO", d: "Consistent visibility across every location you operate." },
  { i: BarChart3, t: "Reporting & Audits", d: "Independent Local SEO audits and reporting reviews." },
  { i: Link2, t: "Citation Management", d: "Directory clean-up, monitoring, and NAP consistency." },
  { i: Handshake, t: "Partnership Opportunities", d: "For agencies and consultants wanting to white-label." },
  { i: HelpCircle, t: "General Questions", d: "Not sure what fits? Start here and we'll point the way." },
];

const process = [
  { i: MessageSquare, t: "Tell Us About Your Business", d: "Share your goals, locations, and current Local SEO picture." },
  { i: Compass, t: "Initial Review", d: "We evaluate your GBP, rankings, citations, and reviews." },
  { i: LineChart, t: "Strategy Discussion", d: "A 30-minute call to walk through findings and next steps." },
  { i: Rocket, t: "Start Growing Locally", d: "You approve the plan. We get to work. You watch the results." },
];

const trust = [
  { i: MapPin, t: "Local SEO specialization", d: "Local search is the only thing we do — every hire, every tool, every process." },
  { i: BarChart3, t: "Transparent reporting", d: "Real numbers, real trends, real recommendations — not marketing dashboards." },
  { i: Sparkles, t: "Proprietary software", d: "MyPageSEO Software powers every engagement with tools built specifically for local." },
  { i: LineChart, t: "Measurable results", d: "We report on outcomes — calls, direction requests, and qualified leads." },
  { i: Handshake, t: "Long-term partnerships", d: "Most clients stay with us for years. That's the metric we care about most." },
];

const faqs = [
  { q: "How quickly does the team respond?", a: "Most inquiries receive a response within one business day, Monday through Friday. Urgent requests submitted during business hours are typically answered the same day." },
  { q: "Are consultations free?", a: "Yes. The initial conversation, discovery call, and preliminary Local SEO review are complimentary. There's no obligation to move forward." },
  { q: "Do you work with businesses of all sizes?", a: "We work with single-location businesses, growing multi-location brands, franchises, and agencies. If Local SEO is part of your growth plan, we can help." },
  { q: "Are services available for multiple locations?", a: "Absolutely. Multi-location and franchise Local SEO is one of our specialties, with rollup reporting and per-location strategies designed for scale." },
  { q: "Can I schedule a software demonstration?", a: "Yes. Choose 'Local SEO Software Demo' as your interest and we'll book a guided walkthrough tailored to your business or client base." },
  { q: "Can you review our existing Local SEO reports?", a: "Bring what you have. We're happy to review current reports, audits, or rankings and share an independent perspective during your consultation." },
];

/* -------------------- illustrations -------------------- */

function HeroArt() {
  return (
    <div className="relative">
      <div aria-hidden className="absolute -inset-6 rounded-[3rem] bg-radial-soft blur-2xl opacity-70" />
      <div className="relative rounded-2xl bg-card ring-soft shadow-lift overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface-muted">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          <div className="mx-auto text-xs text-muted-foreground font-medium">Customer Success · Live Session</div>
        </div>
        <div className="p-6 grid grid-cols-3 gap-4">
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">CS</div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-semibold text-foreground">Casey — Success Specialist</div>
                <div className="text-[10px] text-muted-foreground">Reviewing your Local SEO snapshot</div>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 font-medium">Live</span>
            </div>
            <div className="rounded-xl bg-surface-muted p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-foreground">Local Visibility (30d)</span>
                <span className="text-[10px] text-emerald-700">▲ 22.6%</span>
              </div>
              <svg viewBox="0 0 240 60" className="w-full h-12">
                <path d="M0 50 L20 44 L40 46 L60 38 L80 34 L100 30 L120 22 L140 26 L160 18 L180 14 L200 10 L220 8 L240 4" fill="none" stroke="oklch(0.36 0.036 220)" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M0 50 L20 44 L40 46 L60 38 L80 34 L100 30 L120 22 L140 26 L160 18 L180 14 L200 10 L220 8 L240 4 L240 60 L0 60 Z" fill="oklch(0.36 0.036 220 / 0.08)" />
              </svg>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                { l: "GBP Health", v: "94" },
                { l: "Rankings", v: "+18" },
                { l: "Reviews", v: "4.8★" },
              ].map((x) => (
                <div key={x.l} className="rounded-xl bg-surface-muted p-3">
                  <div className="text-[10px] text-muted-foreground">{x.l}</div>
                  <div className="text-lg font-semibold text-primary">{x.v}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <div className="text-xs font-medium text-foreground flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-accent" /> Maps visibility
            </div>
            <div className="grid grid-cols-5 gap-1">
              {Array.from({ length: 25 }).map((_, i) => {
                const x = i % 5, y = Math.floor(i / 5);
                const d = Math.hypot(x - 2, y - 2);
                const v = Math.max(1, 10 - Math.round(d * 2));
                const color = v >= 8 ? "bg-emerald-500" : v >= 5 ? "bg-amber-400" : v >= 3 ? "bg-orange-400" : "bg-rose-500/80";
                return <div key={i} className={`aspect-square rounded ${color} text-[9px] text-white flex items-center justify-center font-semibold`}>{v}</div>;
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block absolute -left-6 bottom-10 w-56 rounded-2xl bg-card ring-soft shadow-lift p-4 animate-float">
        <div className="flex items-start gap-2">
          <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
            <MessageSquare className="w-4 h-4 text-accent" />
          </div>
          <div className="min-w-0">
            <div className="text-xs font-semibold text-foreground">Hi Sarah 👋</div>
            <div className="text-[11px] text-muted-foreground leading-snug">I pulled up your GBP audit — three quick wins to walk through.</div>
          </div>
        </div>
      </div>
      <div className="hidden md:block absolute -right-6 top-16 w-52 rounded-2xl bg-card ring-soft shadow-lift p-4 animate-float" style={{ animationDelay: "1.2s" }}>
        <div className="flex items-center gap-2 mb-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span className="text-xs font-semibold">Response time</span>
        </div>
        <div className="text-[11px] text-muted-foreground">Avg reply · <span className="text-foreground font-medium">under 6 hours</span></div>
      </div>
    </div>
  );
}

function NorthAmericaMap() {
  const dots: [number, number][] = [
    [140, 130], [180, 145], [210, 160], [175, 180], [220, 190],
    [260, 200], [230, 225], [280, 235], [320, 245], [190, 240],
    [250, 275], [300, 285], [340, 275], [220, 105], [265, 120],
    [305, 145], [340, 180], [370, 210], [280, 90], [340, 100],
    [385, 130], [400, 165], [155, 210], [200, 285], [345, 300],
  ];
  return (
    <div className="relative rounded-3xl bg-card ring-soft p-8 md:p-10 overflow-hidden">
      <div aria-hidden className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-accent/10 blur-3xl" />
      <div aria-hidden className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-primary/10 blur-3xl" />
      <svg viewBox="0 0 500 360" className="w-full h-auto relative">
        {/* Stylized North America outline */}
        <path
          d="M60 130 Q90 90 140 85 L200 70 Q260 60 320 70 L380 75 Q430 85 445 120 L455 165 Q460 205 445 235 L420 275 Q395 305 355 315 L295 320 Q245 322 205 310 L170 300 Q135 285 115 260 L90 225 Q70 195 62 165 Z"
          fill="oklch(0.94 0.014 220)"
          stroke="oklch(0.36 0.036 220 / 0.35)"
          strokeWidth="1.5"
        />
        {/* Great Lakes hint */}
        <path d="M280 190 Q300 185 320 195 Q315 210 290 210 Z" fill="oklch(0.985 0.005 220)" />
        {/* US/Canada border hint */}
        <path d="M110 155 Q220 170 340 155 L410 155" stroke="oklch(0.36 0.036 220 / 0.2)" strokeWidth="1" strokeDasharray="3 3" fill="none" />

        {dots.map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="10" fill="oklch(0.55 0.19 27 / 0.15)">
              <animate attributeName="r" values="6;12;6" dur="3s" begin={`${(i % 5) * 0.4}s`} repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.8;0.2;0.8" dur="3s" begin={`${(i % 5) * 0.4}s`} repeatCount="indefinite" />
            </circle>
            <circle cx={x} cy={y} r="3.5" fill="oklch(0.55 0.19 27)" />
          </g>
        ))}

        <text x="180" y="115" fill="oklch(0.36 0.036 220 / 0.5)" fontSize="11" fontWeight="600" letterSpacing="2">CANADA</text>
        <text x="230" y="255" fill="oklch(0.36 0.036 220 / 0.5)" fontSize="11" fontWeight="600" letterSpacing="2">UNITED STATES</text>
      </svg>
    </div>
  );
}

/* -------------------- feature-card wrappers with reveal -------------------- */

function RevealCard({ i, delayGroup, children }: { i: number; delayGroup: number; children: React.ReactNode }) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ${shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      style={{ transitionDelay: `${(i % delayGroup) * 70}ms` }}
    >
      {children}
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button onClick={() => setOpen((v) => !v)} className="w-full flex items-center justify-between py-5 text-left">
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

function Contact() {
  const [form, setForm] = useState<ContactForm>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const set = (k: keyof ContactForm) => (v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = contactSchema.safeParse(form);
    if (!parsed.success) {
      const next: Partial<Record<keyof ContactForm, string>> = {};
      for (const issue of parsed.error.issues) {
        const k = issue.path[0] as keyof ContactForm;
        if (!next[k]) next[k] = issue.message;
      }
      setErrors(next);
      return;
    }
    setSubmitting(true);
    // Simulated submission (no backend wired). Replace with server function when available.
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    setSubmitted(true);
    setForm(initial);
  };

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden pt-24 md:pt-32 pb-16 md:pb-20 bg-hero">
        <div className="container-page grid lg:grid-cols-2 gap-14 items-center">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card ring-soft text-xs font-medium text-primary">
              <Zap className="w-3.5 h-3.5 text-accent" /> Contact MyPageSEO
            </span>
            <h1 className="mt-5 text-4xl md:text-6xl font-display leading-[1.05] text-foreground">
              Let's talk about growing your <span className="text-gradient">local visibility.</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Whether you're looking to improve your Google Business Profile, dominate local search results, explore MyPageSEO Software, or simply understand where your Local SEO stands today — the team is ready to help.
            </p>
            <div className="mt-8 flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2 text-foreground/80">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Reply within 1 business day
              </div>
              <div className="flex items-center gap-2 text-foreground/80">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Free initial consultation
              </div>
              <div className="flex items-center gap-2 text-foreground/80">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> No obligation
              </div>
            </div>
          </div>
          <div className="animate-fade-up" style={{ animationDelay: "150ms" }}>
            <HeroArt />
          </div>
        </div>
      </section>

      {/* FORM + CONTACT INFO */}
      <section className="py-20 md:py-24">
        <div className="container-page grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16">
          {/* Form */}
          <div className="rounded-3xl bg-card ring-soft shadow-card p-6 md:p-10">
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="mt-5 text-2xl font-display text-foreground">Thanks — message received.</h3>
                <p className="mt-2 text-muted-foreground max-w-md mx-auto">
                  A member of the MyPageSEO team will be in touch within one business day. Watch your inbox.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary"
                >
                  Send another message <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate>
                <div className="mb-6">
                  <h2 className="text-2xl md:text-3xl font-display text-foreground">Start the conversation</h2>
                  <p className="mt-1.5 text-sm text-muted-foreground">Tell us about your business — we'll take it from there.</p>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field id="name" label="Full name" value={form.name} onChange={set("name")} error={errors.name} required autoComplete="name" />
                  <Field id="business" label="Business name" value={form.business} onChange={set("business")} error={errors.business} required autoComplete="organization" />
                  <Field id="email" label="Email address" type="email" value={form.email} onChange={set("email")} error={errors.email} required autoComplete="email" />
                  <Field id="phone" label="Phone number" type="tel" value={form.phone ?? ""} onChange={set("phone")} error={errors.phone} autoComplete="tel" />
                  <Field id="website" label="Business website" type="url" value={form.website ?? ""} onChange={set("website")} error={errors.website} autoComplete="url" />
                  <Field id="location" label="Business location (city, state)" value={form.location ?? ""} onChange={set("location")} error={errors.location} />
                  <Select
                    id="size" label="Company size" value={form.size} onChange={set("size")} required error={errors.size}
                    options={["Just me", "2–10", "11–50", "51–200", "201–1000", "1000+"]}
                  />
                  <Select
                    id="interest" label="Primary interest" value={form.interest} onChange={set("interest")} required error={errors.interest}
                    options={[
                      "Local SEO Services", "Google Business Profile Optimization", "Software Demo",
                      "Multi-location SEO", "Reporting & Audits", "Citation Management",
                      "Partnership Opportunities", "General Question",
                    ]}
                  />
                </div>
                <div className="mt-4">
                  <div className="relative">
                    <textarea
                      id="message" rows={5} value={form.message} required
                      onChange={(e) => set("message")(e.target.value)}
                      className={`peer w-full rounded-xl bg-card px-4 pt-6 pb-3 text-sm text-foreground ring-1 transition-all outline-none placeholder-transparent focus:ring-2 resize-none ${
                        errors.message ? "ring-accent focus:ring-accent" : "ring-border focus:ring-primary/40"
                      }`}
                      placeholder="Tell us about your Local SEO goals or challenges"
                    />
                    <label
                      htmlFor="message"
                      className={`pointer-events-none absolute left-4 transition-all ${
                        form.message.length > 0
                          ? "top-2 text-[10px] font-semibold uppercase tracking-wider text-primary"
                          : "top-4 text-sm text-muted-foreground peer-focus:top-2 peer-focus:text-[10px] peer-focus:font-semibold peer-focus:uppercase peer-focus:tracking-wider peer-focus:text-primary"
                      }`}
                    >
                      Your goals or current Local SEO challenges<span className="text-accent">*</span>
                    </label>
                  </div>
                  {errors.message && <p className="mt-1.5 text-xs text-accent">{errors.message}</p>}
                </div>
                <div className="mt-6 flex items-center justify-between flex-wrap gap-3">
                  <p className="text-xs text-muted-foreground">
                    By submitting, you agree to be contacted by MyPageSEO. We never share your information.
                  </p>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-accent-foreground font-medium hover:opacity-95 transition shadow-lift disabled:opacity-70"
                  >
                    {submitting ? "Sending…" : "Start the Conversation"} <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Contact cards */}
          <div className="space-y-4">
            <div className="mb-2">
              <div className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">More ways to connect</div>
              <h2 className="text-2xl md:text-3xl font-display text-foreground leading-tight">Reach us however feels easiest.</h2>
            </div>
            {[
              { i: Mail, t: "Email us", v: "hello@mypageseo.com", d: "The fastest way to reach our team for detailed questions." },
              { i: Phone, t: "Call the team", v: "+1 (888) 555-0142", d: "Speak directly with a Local SEO specialist during business hours." },
              { i: Clock, t: "Office hours", v: "Mon–Fri · 9:00 AM – 6:00 PM ET", d: "We're here every business day across U.S. and Canadian time zones." },
              { i: CheckCircle2, t: "Response time", v: "Within 1 business day", d: "Most inquiries receive a thoughtful reply within a few hours." },
            ].map((c) => (
              <div key={c.t} className="rounded-2xl bg-card ring-soft p-5 hover:shadow-lift transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-primary-soft flex items-center justify-center flex-shrink-0">
                    <c.i className="w-5 h-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-muted-foreground">{c.t}</div>
                    <div className="text-base font-semibold text-foreground truncate">{c.v}</div>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{c.d}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW CAN WE HELP */}
      <section className="py-20 md:py-24 bg-surface">
        <div className="container-page">
          <div className="max-w-2xl mb-12">
            <div className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">How can we help?</div>
            <h2 className="text-3xl md:text-5xl font-display text-foreground leading-tight">
              The most common reasons businesses reach out.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {helpCards.map((h, i) => (
              <RevealCard key={h.t} i={i} delayGroup={4}>
                <div className="group rounded-2xl bg-card ring-soft p-6 h-full hover:shadow-lift hover:-translate-y-1 transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl bg-primary-soft flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <h.i className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1.5">{h.t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{h.d}</p>
                </div>
              </RevealCard>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 md:py-24">
        <div className="container-page">
          <div className="max-w-2xl mb-14">
            <div className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">What happens next</div>
            <h2 className="text-3xl md:text-5xl font-display text-foreground leading-tight">
              A simple, transparent onboarding process.
            </h2>
          </div>
          <div className="relative">
            <div aria-hidden className="hidden lg:block absolute top-8 left-8 right-8 h-px bg-gradient-to-r from-primary/10 via-primary/40 to-primary/10" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {process.map((p, i) => (
                <RevealCard key={p.t} i={i} delayGroup={4}>
                  <div className="rounded-2xl bg-card ring-soft p-6 h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-card ring-soft shadow-card flex items-center justify-center relative z-10">
                        <p.i className="w-5 h-5 text-primary" />
                      </div>
                      <div className="text-xs font-bold text-accent">STEP {i + 1}</div>
                    </div>
                    <h3 className="font-semibold text-foreground">{p.t}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
                  </div>
                </RevealCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="py-20 md:py-24 bg-surface">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">Where we work</div>
            <h2 className="text-3xl md:text-5xl font-display text-foreground leading-tight">
              Serving businesses across the U.S. &amp; Canada.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              MyPageSEO operates digitally, which means we can help businesses strengthen their visibility in their own local markets — from a single storefront in a mid-sized town to a franchise with locations across multiple provinces and states.
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Wherever your customers search, that's where our work is focused.
            </p>
          </div>
          <NorthAmericaMap />
        </div>
      </section>

      {/* TRUST */}
      <section className="py-20 md:py-24">
        <div className="container-page">
          <div className="max-w-2xl mb-12">
            <div className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">Why teams choose MyPageSEO</div>
            <h2 className="text-3xl md:text-5xl font-display text-foreground leading-tight">
              Focused specialists. Real reporting. Software that helps.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {trust.map((t, i) => (
              <RevealCard key={t.t} i={i} delayGroup={3}>
                <div className="rounded-2xl bg-card ring-soft p-6 h-full hover:shadow-lift transition-all">
                  <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <t.i className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground">{t.t}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{t.d}</p>
                </div>
              </RevealCard>
            ))}
            <div className="rounded-2xl bg-primary text-primary-foreground p-6 relative overflow-hidden">
              <div aria-hidden className="absolute -right-12 -bottom-12 w-40 h-40 rounded-full bg-accent/25 blur-2xl" />
              <ShieldCheck className="w-6 h-6 mb-3" />
              <h3 className="font-semibold">Local SEO, done right.</h3>
              <p className="mt-1.5 text-sm text-primary-foreground/80 leading-relaxed">
                Every conversation with our team is grounded in real Local SEO data — never guesswork.
              </p>
            </div>
            <RevealCard i={0} delayGroup={1}>
              <div className="rounded-2xl bg-card ring-soft p-6 h-full">
                <Star className="w-5 h-5 text-accent mb-3" />
                <h3 className="font-semibold text-foreground">Client retention that speaks for us.</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                  The majority of our clients stay with us year after year — because Local SEO is a long game and we play it well.
                </p>
              </div>
            </RevealCard>
          </div>
        </div>
      </section>

      {/* LIFESTYLE BAND */}
      <section className="py-16 md:py-20">
        <div className="container-page grid gap-8 lg:grid-cols-[1.1fr_1fr] items-center">
          <div>
            <div className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">Real conversations</div>
            <h2 className="text-3xl md:text-4xl font-display text-foreground leading-tight">
              We meet you where your business lives.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-lg">
              Every engagement starts with a real conversation — about your neighborhood, your customers, and the outcomes that actually move your business forward.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3">
              <Photo src="restaurant" alt="Restaurant owner welcoming guests" aspect="aspect-square" />
              <Photo src="salon" alt="Salon serving a client" aspect="aspect-square" />
              <Photo src="hotel" alt="Hotel receptionist welcoming a guest" aspect="aspect-square" />
            </div>
          </div>
          <Photo src="consult" alt="MyPageSEO advisors meeting with a small-business owner" aspect="aspect-[4/3]" />
        </div>
      </section>

      <section className="py-20 md:py-24 bg-surface">
        <div className="container-page grid lg:grid-cols-3 gap-12">
          <div>
            <div className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">FAQ</div>
            <h2 className="text-3xl md:text-4xl font-display text-foreground leading-tight">Answers before you ask.</h2>
            <p className="mt-4 text-muted-foreground text-sm">Still curious? Our team is happy to jump on a quick call.</p>
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
                Don't wait for competitors to dominate local search.
              </h2>
              <p className="mt-5 text-primary-foreground/80 text-lg">
                The businesses winning locally today started this conversation months ago. Let's make sure you're not on the wrong side of that timeline.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/get-started" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-accent-foreground font-medium hover:opacity-95 transition">
                  Get Started <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/services" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-card text-primary font-medium hover:opacity-95 transition">
                  Explore Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
