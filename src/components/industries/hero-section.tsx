import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { HeroIllustration } from "@/components/industries/hero-illustration";

export function HeroSection() {
  return (
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
            No two industries compete the same way in local search. A law firm, dental clinic, restaurant, HVAC
            company, and real estate brokerage all require different Local SEO strategies — because customer intent,
            competition, and Google Business Profile signals vary dramatically. We build campaigns that respect those
            differences.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/get-started"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-card transition-all hover:-translate-y-0.5 hover:shadow-lift"
            >
              Explore Plans <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary/40"
            >
              Talk to a Local SEO Expert
            </Link>
          </div>
        </div>
        <HeroIllustration />
      </div>
    </section>
  );
}
