import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { HeroIllustration } from "@/components/industries/hero-illustration";

export function HeroSection() {
  return (
    <section className="relative flex h-[calc(100svh-4rem)] items-center overflow-hidden bg-hero">
      <div aria-hidden className="absolute inset-0 bg-radial-soft opacity-70" />
      <div className="container-page relative grid gap-14 lg:grid-cols-2 items-center">
        <div className="min-w-0 animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-card px-3 py-1 text-xs font-medium text-primary ring-soft">
            <Sparkles className="h-3.5 w-3.5 text-accent" /> Industry-specific
            Local SEO
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-display leading-[1.05] text-foreground">
            Local SEO built around{" "}
            <span className="text-gradient">your industry.</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-xl leading-relaxed">
            No two industries compete the same way in local search. A law firm,
            dental clinic, restaurant, HVAC company, and real estate brokerage
            all require different Local SEO strategies — because customer
            intent, competition, and Google Business Profile signals vary
            dramatically. We build campaigns that respect those differences.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/checkout"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-lift transition-all hover:-translate-y-0.5"
            >
              Explore Plans <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary/40"
            >
              Talk to a Local SEO Expert
            </Link>
          </div>
        </div>
        <div
          className="min-w-0 animate-fade-up"
          style={{ animationDelay: "150ms" }}
        >
          <div className="mx-auto w-full max-w-lg overflow-hidden lg:max-w-none">
            <HeroIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}
