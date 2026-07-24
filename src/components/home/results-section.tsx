import Link from "next/link";
import {
  Phone,
  Navigation,
  MapPin,
  Star,
  Globe,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const metrics = [
  {
    icon: Phone,
    title: "Phone Calls",
    description:
      "Track every call generated through your Google Business Profile.",
  },
  {
    icon: Navigation,
    title: "Direction Requests",
    description:
      "See how many customers are navigating directly to your business.",
  },
  {
    icon: MapPin,
    title: "Local Visibility",
    description:
      "Monitor how often your business appears in local search and Google Maps.",
  },
  {
    icon: Star,
    title: "Reviews",
    description:
      "Keep an eye on review growth, ratings, and customer sentiment.",
  },
  {
    icon: Globe,
    title: "Website Visits",
    description:
      "Measure traffic coming from your Google Business Profile and local search.",
  },
  {
    icon: TrendingUp,
    title: "Keyword Rankings",
    description:
      "Follow your progress for the local keywords that matter most.",
  },
];

const deliverables = [
  "Google Business Profile performance",
  "Local keyword rankings",
  "Calls & direction requests",
  "Review growth & reputation",
  "Website traffic insights",
  "Monthly performance reporting",
];

export function ResultsSection() {
  return (
    <section className="container-page py-24 md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <div className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
          Transparent Reporting
        </div>

        <h2 className="mt-4 font-display text-4xl md:text-6xl tracking-tight">
          What we measure.
        </h2>

        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Great Local SEO isn't about vanity metrics. We focus on the
          performance indicators that help you understand your visibility,
          customer engagement, and business growth.
        </p>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {metrics.map((metric) => (
          <div
            key={metric.title}
            className="group rounded-3xl border border-border bg-card p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-soft text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
              <metric.icon className="h-6 w-6" />
            </div>

            <h3 className="mt-6 text-xl font-semibold">{metric.title}</h3>

            <p className="mt-3 leading-7 text-muted-foreground">
              {metric.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-3xl border border-border bg-surface p-10 md:p-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              Included with every plan
            </p>

            <h3 className="mt-4 font-display text-3xl md:text-4xl tracking-tight">
              Clear reporting. No guesswork.
            </h3>

            <p className="mt-5 max-w-xl leading-8 text-muted-foreground">
              Every MyPageSEO subscription includes a reporting dashboard so you
              always know what's improving, what's being worked on, and where
              your campaign is headed.
            </p>
          </div>

          <div className="space-y-4">
            {deliverables.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-border bg-background px-5 py-4"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />

                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 rounded-3xl bg-primary p-10 text-primary-foreground md:flex md:items-center md:justify-between md:p-14">
        <div>
          <h3 className="font-display text-3xl md:text-4xl">
            Ready to grow locally?
          </h3>

          <p className="mt-3 max-w-lg text-primary-foreground/75">
            We'll audit your current local presence, identify opportunities, and
            build a strategy tailored to your business.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-4 md:mt-0">
          <Link
            href="/checkout"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-accent-foreground transition hover:opacity-95"
          >
            Get Started
            <ArrowRight className="h-4 w-4" />
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-semibold hover:bg-white/10"
          >
            Talk to a Specialist
          </Link>
        </div>
      </div>
    </section>
  );
}
