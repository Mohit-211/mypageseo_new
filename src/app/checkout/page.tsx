import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  Lock,
  MapPin,
  Sparkles,
  Rocket,
  Crown,
  Building2,
  Check,
  ChevronDown,
  ChevronRight,
  ShieldCheck,
  BadgeCheck,
  Users,
  Cpu,
  Handshake,
  CreditCard,
  ArrowRight,
  Tag,
  Info,
} from "lucide-react";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Secure Checkout — MyPageSEO" },
      { name: "description", content: "Complete your MyPageSEO onboarding and start winning in local search." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: CheckoutPage,
});

/* ---------- Plans ---------- */

type PlanId = "base" | "standard" | "elite" | "enterprise";

const plans: {
  id: PlanId;
  icon: typeof Sparkles;
  name: string;
  price: number | null;
  setup: number;
  tagline: string;
  badge?: string;
}[] = [
  { id: "base", icon: Sparkles, name: "Base", price: 499, setup: 299, tagline: "Single location businesses starting Local SEO." },
  { id: "standard", icon: Rocket, name: "Standard", price: 999, setup: 499, tagline: "Growing businesses that need consistent optimization.", badge: "Most Popular" },
  { id: "elite", icon: Crown, name: "Elite", price: 2199, setup: 999, tagline: "Multi-location brands with deeper reporting needs." },
  { id: "enterprise", icon: Building2, name: "Enterprise", price: null, setup: 0, tagline: "Custom programs for franchises and organizations." },
];

const coupons: Record<string, { pct: number; label: string }> = {
  LOCAL10: { pct: 10, label: "LOCAL10 — 10% off" },
  GROWTH20: { pct: 20, label: "GROWTH20 — 20% off first month" },
};

/* ---------- Page ---------- */

function CheckoutPage() {
  const [planId, setPlanId] = useState<PlanId>("standard");
  const [summaryOpen, setSummaryOpen] = useState(false);
  const [couponOpen, setCouponOpen] = useState(false);
  const [couponInput, setCouponInput] = useState("");
  const [applied, setApplied] = useState<{ code: string; pct: number; label: string } | null>(null);
  const [couponError, setCouponError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const plan = plans.find((p) => p.id === planId)!;
  const isCustom = plan.price === null;

  const pricing = useMemo(() => {
    const monthly = plan.price ?? 0;
    const setup = plan.setup;
    const discount = applied ? Math.round(monthly * (applied.pct / 100)) : 0;
    const subtotal = monthly - discount + setup;
    const tax = Math.round(subtotal * 0.0);
    const total = subtotal + tax;
    const recurring = monthly - discount;
    return { monthly, setup, discount, tax, total, recurring };
  }, [plan, applied]);

  function applyCoupon() {
    const code = couponInput.trim().toUpperCase();
    if (!code) return;
    if (coupons[code]) {
      setApplied({ code, ...coupons[code] });
      setCouponError(null);
    } else {
      setApplied(null);
      setCouponError("That code isn't valid. Please try another.");
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => setSubmitting(false), 1400);
  }

  return (
    <div className="min-h-dvh bg-surface/40">
      {/* Header */}
      <header className="border-b border-border/60 bg-background/80 backdrop-blur-xl sticky top-0 z-30">
        <div className="container-page flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground shadow-card transition-transform group-hover:scale-105">
              <MapPin className="h-4 w-4" strokeWidth={2.5} />
            </span>
            <span className="text-[15px] font-semibold tracking-tight text-foreground">
              MyPage<span className="text-accent">SEO</span>
            </span>
          </Link>
          <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
            <Lock className="h-3.5 w-3.5 text-accent" />
            <span>Secure Checkout</span>
          </div>
        </div>
      </header>

      {/* Intro */}
      <section className="container-page pt-12 pb-8 md:pt-16 md:pb-10">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            Onboarding in 4 minutes
          </span>
          <h1 className="mt-5 text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
            Let's get your business growing locally.
          </h1>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            A Local SEO specialist will review your submission after checkout and reach out within one business day to begin
            onboarding.
          </p>
        </div>
      </section>

      {/* Mobile summary toggle */}
      <div className="container-page lg:hidden">
        <button
          onClick={() => setSummaryOpen((o) => !o)}
          className="flex w-full items-center justify-between rounded-2xl border border-border/70 bg-background px-5 py-4 shadow-card"
        >
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary/5 text-primary">
              <plan.icon className="h-4 w-4" />
            </span>
            <div className="text-left">
              <p className="text-xs text-muted-foreground">Order summary</p>
              <p className="text-sm font-semibold text-foreground">
                {plan.name} — {isCustom ? "Custom" : `$${pricing.total.toLocaleString()} today`}
              </p>
            </div>
          </div>
          <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform ${summaryOpen ? "rotate-180" : ""}`} />
        </button>
        {summaryOpen && (
          <div className="mt-3 animate-fade-in">
            <OrderSummary plan={plan} pricing={pricing} applied={applied} />
          </div>
        )}
      </div>

      {/* Two column */}
      <section className="container-page py-8 md:py-12 grid gap-10 lg:grid-cols-[1fr_400px] items-start">
        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-10">
          {/* Plan selection */}
          <Panel step="1" title="Select your plan" subtitle="You can upgrade or change plans anytime.">
            <div className="space-y-3">
              {plans.map((p) => {
                const selected = p.id === planId;
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setPlanId(p.id)}
                    className={`group w-full text-left rounded-2xl border p-5 transition-all duration-200 ${
                      selected
                        ? "border-accent/60 bg-background shadow-lift ring-1 ring-accent/20 -translate-y-0.5"
                        : "border-border/70 bg-background hover:border-border hover:shadow-card"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl transition-colors ${
                          selected ? "bg-accent/10 text-accent" : "bg-primary/5 text-primary"
                        }`}
                      >
                        <p.icon className="h-5 w-5" strokeWidth={1.75} />
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-sm font-semibold text-foreground">{p.name}</span>
                          {p.badge && (
                            <span className="rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent">
                              {p.badge}
                            </span>
                          )}
                        </div>
                        <p className="mt-1 text-xs text-muted-foreground">{p.tagline}</p>
                      </div>
                      <div className="text-right shrink-0">
                        {p.price !== null ? (
                          <>
                            <p className="text-base font-semibold text-foreground">${p.price}<span className="text-xs font-normal text-muted-foreground">/mo</span></p>
                            <p className="text-[11px] text-muted-foreground">+ ${p.setup} setup</p>
                          </>
                        ) : (
                          <p className="text-base font-semibold text-foreground">Custom</p>
                        )}
                      </div>
                      <span
                        className={`ml-2 grid h-5 w-5 shrink-0 place-items-center rounded-full border transition-all ${
                          selected ? "border-accent bg-accent text-accent-foreground" : "border-border"
                        }`}
                      >
                        {selected && <Check className="h-3 w-3" strokeWidth={3} />}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </Panel>

          {/* Business info */}
          <Panel step="2" title="About your business" subtitle="This helps us tailor your Local SEO strategy.">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Business name" name="business" required />
              <Field label="Website URL" name="website" type="url" placeholder="https://" required />
              <Field label="Primary business location" name="location" placeholder="City, State" required />
              <Field label="Additional locations (optional)" name="locations" placeholder="e.g. 3 more locations" />
              <Field label="Industry category" name="industry" placeholder="Dental, HVAC, Legal…" required />
              <Field label="Company size" name="size" placeholder="1–10, 11–50, 51–200…" />
              <Field label="Full name" name="name" required />
              <Field label="Business email" name="email" type="email" required />
              <Field label="Phone number" name="phone" type="tel" required />
            </div>
          </Panel>

          {/* Goals */}
          <Panel step="3" title="Your local growth goals" subtitle="Optional — but it helps us hit the ground running.">
            <label className="block">
              <span className="text-xs font-medium text-muted-foreground">
                Briefly describe what you want to achieve
              </span>
              <textarea
                rows={5}
                placeholder="Example: We want to rank in the map pack for HVAC repair across 3 metro areas, grow phone calls from Google, and manage reviews consistently across locations."
                className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 shadow-card/50 transition-all focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 resize-none"
              />
            </label>
          </Panel>

          {/* Coupon */}
          <Panel step="4" title="Payment" subtitle="Encrypted end-to-end. Cancel anytime after your foundation period.">
            <div className="mb-6">
              {!couponOpen ? (
                <button
                  type="button"
                  onClick={() => setCouponOpen(true)}
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors"
                >
                  <Tag className="h-4 w-4" />
                  Have a coupon code?
                </button>
              ) : (
                <div className="animate-fade-in">
                  <label className="text-xs font-medium text-muted-foreground">Coupon code</label>
                  <div className="mt-2 flex gap-2">
                    <input
                      value={couponInput}
                      onChange={(e) => {
                        setCouponInput(e.target.value);
                        setCouponError(null);
                      }}
                      placeholder="Enter code (try LOCAL10)"
                      className="flex-1 rounded-xl border border-border bg-background px-4 py-3 text-sm uppercase tracking-wider text-foreground placeholder:normal-case placeholder:tracking-normal placeholder:text-muted-foreground/60 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                    />
                    <button
                      type="button"
                      onClick={applyCoupon}
                      className="rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-card transition-all hover:-translate-y-0.5 hover:shadow-lift"
                    >
                      Apply
                    </button>
                  </div>
                  {applied && (
                    <p className="mt-2 flex items-center gap-1.5 text-xs font-medium text-accent animate-fade-in">
                      <BadgeCheck className="h-3.5 w-3.5" /> {applied.label} applied
                    </p>
                  )}
                  {couponError && (
                    <p className="mt-2 flex items-center gap-1.5 text-xs text-destructive">
                      <Info className="h-3.5 w-3.5" /> {couponError}
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Payment card */}
            <div className="rounded-2xl border border-border/70 bg-surface/40 p-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <CreditCard className="h-4 w-4 text-accent" />
                  Card details
                </div>
                <div className="flex items-center gap-1.5">
                  {["Visa", "MC", "AmEx", "Disc"].map((b) => (
                    <span
                      key={b}
                      className="rounded-md border border-border/60 bg-background px-2 py-1 text-[10px] font-semibold text-muted-foreground"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-4 grid gap-3">
                <Field label="Card number" name="card" placeholder="1234 5678 9012 3456" />
                <div className="grid grid-cols-2 gap-3">
                  <Field label="Expiry" name="exp" placeholder="MM / YY" />
                  <Field label="CVC" name="cvc" placeholder="123" />
                </div>
                <Field label="Cardholder name" name="holder" />
              </div>
            </div>

            <p className="mt-6 text-xs text-muted-foreground leading-relaxed">
              By proceeding, you agree to our{" "}
              <a href="#" className="text-primary underline-offset-4 hover:underline">Terms &amp; Conditions</a>{" "}
              and{" "}
              <a href="#" className="text-primary underline-offset-4 hover:underline">Privacy Policy</a>.
            </p>

            <button
              type="submit"
              disabled={submitting || isCustom}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 text-sm font-semibold text-accent-foreground shadow-lift transition-all hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0"
            >
              {submitting ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-accent-foreground/30 border-t-accent-foreground" />
                  Processing…
                </>
              ) : isCustom ? (
                <>Contact sales for Enterprise pricing <ArrowRight className="h-4 w-4" /></>
              ) : (
                <>Start My Local SEO Journey <ArrowRight className="h-4 w-4" /></>
              )}
            </button>
            {isCustom && (
              <p className="mt-3 text-center text-xs text-muted-foreground">
                Enterprise plans are custom-scoped. Our team will reach out within one business day.
              </p>
            )}
          </Panel>
        </form>

        {/* SUMMARY */}
        <aside className="hidden lg:block sticky top-24">
          <OrderSummary plan={plan} pricing={pricing} applied={applied} />
        </aside>
      </section>

      {/* Trust panel */}
      <section className="container-page py-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {[
            { icon: ShieldCheck, label: "Secure payments" },
            { icon: BadgeCheck, label: "Transparent pricing" },
            { icon: Users, label: "Dedicated specialists" },
            { icon: Cpu, label: "Proprietary software" },
            { icon: Handshake, label: "Personalized onboarding" },
          ].map((t) => (
            <div
              key={t.label}
              className="flex items-center gap-3 rounded-2xl border border-border/70 bg-background p-4 shadow-card"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/5 text-primary">
                <t.icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <span className="text-sm font-medium text-foreground">{t.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="container-page pb-20">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Checkout questions</h2>
          <p className="mt-3 text-muted-foreground">Quick answers to what happens after you complete your order.</p>
        </div>
        <div className="mt-8 grid gap-3 md:grid-cols-2">
          {[
            { q: "When does onboarding begin?", a: "Your specialist reaches out within one business day to kick off the 14-day onboarding sprint." },
            { q: "Can I upgrade my plan later?", a: "Yes. Upgrades are prorated and take effect at the start of your next billing cycle." },
            { q: "How do setup fees work?", a: "The one-time fee covers your audit, technical foundation, citation cleanup, and dashboard setup." },
            { q: "Can I add locations later?", a: "Absolutely. You can add locations mid-cycle and we'll adjust your plan tier if needed." },
            { q: "What happens right after payment?", a: "You'll get an email confirmation, dashboard access, and a scheduling link for your kickoff call." },
            { q: "How quickly will your team reach out?", a: "Within one business day — usually the same day if you check out before 3pm ET." },
          ].map((f, i) => (
            <FaqRow key={i} q={f.q} a={f.a} />
          ))}
        </div>
      </section>

      {/* Minimal footer */}
      <footer className="border-t border-border/60 bg-background">
        <div className="container-page flex flex-col md:flex-row items-center justify-between gap-3 py-6 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} MyPageSEO. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Privacy</a>
            <Link to="/contact" className="hover:text-foreground">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ---------- Sub-components ---------- */

function Panel({
  step,
  title,
  subtitle,
  children,
}: {
  step: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-3xl border border-border/70 bg-background p-6 md:p-8 shadow-card">
      <div className="flex items-start gap-4">
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">
          {step}
        </span>
        <div className="min-w-0 flex-1">
          <h2 className="text-lg font-semibold text-foreground">{title}</h2>
          <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
        </div>
      </div>
      <div className="mt-6">{children}</div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);
  const active = focused || value.length > 0;
  return (
    <label className="relative block">
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="peer w-full rounded-xl border border-border bg-background px-4 pt-5 pb-2 text-sm text-foreground placeholder:text-transparent transition-all focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
      />
      <span
        className={`pointer-events-none absolute left-4 transition-all ${
          active
            ? "top-1.5 text-[10px] font-semibold uppercase tracking-wider text-accent"
            : "top-3.5 text-sm text-muted-foreground"
        }`}
      >
        {label}
        {required && !active && <span className="text-accent"> *</span>}
      </span>
    </label>
  );
}

function OrderSummary({
  plan,
  pricing,
  applied,
}: {
  plan: (typeof plans)[number];
  pricing: { monthly: number; setup: number; discount: number; tax: number; total: number; recurring: number };
  applied: { code: string; pct: number; label: string } | null;
}) {
  const isCustom = plan.price === null;
  return (
    <div className="rounded-3xl border border-border/70 bg-background p-6 shadow-lift">
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Order summary</p>
        <span className="rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-semibold text-accent">
          Subscription
        </span>
      </div>

      <div className="mt-5 flex items-center gap-3 rounded-2xl border border-border/60 bg-surface/40 p-4">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/5 text-primary">
          <plan.icon className="h-5 w-5" strokeWidth={1.75} />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-foreground">{plan.name} Plan</p>
          <p className="text-xs text-muted-foreground">Monthly Local SEO subscription</p>
        </div>
      </div>

      {isCustom ? (
        <div className="mt-6 rounded-2xl border border-dashed border-border p-5 text-center">
          <p className="text-sm font-semibold text-foreground">Enterprise pricing</p>
          <p className="mt-1 text-xs text-muted-foreground">
            We'll build a custom quote based on your locations and scope.
          </p>
        </div>
      ) : (
        <>
          <dl className="mt-6 space-y-3 text-sm">
            <Row label="Monthly subscription" value={`$${pricing.monthly.toLocaleString()}`} />
            {pricing.discount > 0 && (
              <Row
                label={`Coupon (${applied?.code})`}
                value={`-$${pricing.discount.toLocaleString()}`}
                accent
              />
            )}
            <Row label="One-time setup fee" value={`$${pricing.setup.toLocaleString()}`} />
            <Row label="Taxes" value={pricing.tax > 0 ? `$${pricing.tax.toLocaleString()}` : "Calculated after"} muted />
          </dl>

          <div className="my-5 border-t border-border/60" />

          <div className="flex items-baseline justify-between">
            <span className="text-sm font-medium text-foreground">Due today</span>
            <span className="text-2xl font-semibold tracking-tight text-foreground transition-all">
              ${pricing.total.toLocaleString()}
            </span>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            Then <span className="font-semibold text-foreground">${pricing.recurring.toLocaleString()}/month</span>, billed monthly. Cancel anytime after your 90-day foundation.
          </p>
        </>
      )}

      <div className="mt-6 space-y-2.5 border-t border-border/60 pt-5">
        {[
          { icon: Lock, t: "Secure, encrypted payment" },
          { icon: BadgeCheck, t: "No hidden fees, transparent billing" },
          { icon: ChevronRight, t: "Upgrade or change plans anytime" },
        ].map((r) => (
          <div key={r.t} className="flex items-center gap-2.5 text-xs text-muted-foreground">
            <r.icon className="h-3.5 w-3.5 text-accent shrink-0" />
            {r.t}
          </div>
        ))}
      </div>
    </div>
  );
}

function Row({ label, value, muted, accent }: { label: string; value: string; muted?: boolean; accent?: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <dt className={`text-sm ${muted ? "text-muted-foreground" : "text-foreground/80"}`}>{label}</dt>
      <dd className={`text-sm font-medium ${accent ? "text-accent" : "text-foreground"}`}>{value}</dd>
    </div>
  );
}

function FaqRow({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-border/70 bg-background shadow-card">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="text-sm font-semibold text-foreground">{q}</span>
        <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <div className={`grid overflow-hidden px-5 transition-all duration-300 ${open ? "grid-rows-[1fr] pb-4" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <p className="text-sm text-muted-foreground leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  );
}
