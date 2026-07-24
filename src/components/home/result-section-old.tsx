import Link from "next/link";
import {
  Phone,
  Navigation,
  MapPin,
  Users2,
  MessageSquareQuote,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { Counter } from "./counter";

const primaryStats = [
  {
    icon: Phone,
    label: "More phone calls from Google",
    value: 214,
    suffix: "%",
  },
  {
    icon: Navigation,
    label: "Increase in direction requests",
    value: 178,
    suffix: "%",
  },
  {
    icon: MapPin,
    label: "Lift in Google Business Profile visibility",
    value: 3,
    suffix: "×",
  },
];

const secondaryStats = [
  {
    icon: Users2,
    label: "Qualified local leads per month",
    value: 460,
    suffix: "+",
  },
  {
    icon: MessageSquareQuote,
    label: "New reviews generated per client / yr",
    value: 128,
    suffix: "",
  },
  {
    icon: TrendingUp,
    label: "Clients ranking in the local 3-pack",
    value: 92,
    suffix: "%",
  },
];

export function ResultsSection() {
  return (
    <section className="container-page py-24 md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <div className="text-xs font-semibold uppercase tracking-wider text-accent">
          Real business outcomes
        </div>
        <h2 className="mt-3 font-display text-4xl md:text-6xl tracking-tight">
          Local SEO is about customers.
          <br />
          <span className="text-muted-foreground">Not traffic.</span>
        </h2>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          We measure success in the things that actually grow your business:
          phone calls, booked appointments, store visits and reviews from happy
          customers.
        </p>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {primaryStats.map((r) => (
          <div
            key={r.label}
            className="rounded-3xl border border-border bg-card p-8 shadow-card"
          >
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/10 text-accent">
              <r.icon className="h-5 w-5" />
            </span>
            <div className="mt-6">
              <Counter value={r.value} suffix={r.suffix} prefix="+" />
            </div>
            <div className="mt-2 text-sm text-muted-foreground leading-relaxed">
              {r.label}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {secondaryStats.map((r) => (
          <div
            key={r.label}
            className="rounded-3xl border border-border bg-surface p-8"
          >
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary">
              <r.icon className="h-5 w-5" />
            </span>
            <div className="mt-6">
              <Counter value={r.value} suffix={r.suffix} />
            </div>
            <div className="mt-2 text-sm text-muted-foreground leading-relaxed">
              {r.label}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-3xl border border-border bg-primary text-primary-foreground p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h3 className="font-display text-3xl md:text-4xl">
            Ready to own your local market?
          </h3>
          <p className="mt-2 text-primary-foreground/70 max-w-lg">
            Get a free Local SEO assessment and see exactly what's costing you
            customers today.
          </p>
        </div>
        <div className="flex gap-3">
          <Link
            href="/checkout"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:opacity-95 transition"
          >
            Get Started <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-white/10 transition"
          >
            Talk to a specialist
          </Link>
        </div>
      </div>
    </section>
  );
}
