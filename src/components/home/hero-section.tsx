import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { HeroDashboard } from "./hero-dashboard";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-20 pt-16 md:pb-28 md:pt-24">
      {/* Ambient background */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-hero" />
      <div
        aria-hidden
        className="absolute -left-20 -top-40 -z-10 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute right-0 -top-20 -z-10 h-96 w-96 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="container-page grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
        {/* Content */}
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-xs font-medium text-muted-foreground shadow-card backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Local SEO specialists for businesses across the USA &amp; Canada
          </div>

          <h1 className="mt-6 font-display text-5xl leading-[1.03] tracking-tight text-foreground md:text-6xl lg:text-7xl">
            More nearby customers.
            <br />
            <span className="text-gradient">Fewer clicks wasted.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            MyPageSEO helps local businesses attract more nearby customers
            through Local SEO. Unlike traditional SEO, Local SEO focuses on
            customers searching with immediate buying intent in specific
            geographic areas, helping your business become the obvious choice.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/checkout"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-lift transition-all duration-300 hover:-translate-y-0.5"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Link>

            <a
              href="#how-we-work"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-card"
            >
              See How It Works
            </a>
          </div>

          <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
            <CheckCircle2 className="h-4 w-4 text-primary" />
            <span>
              Trusted by local businesses across the{" "}
              <span className="font-medium text-foreground">
                USA &amp; Canada
              </span>
              .
            </span>
          </div>
        </div>

        {/* Dashboard */}
        <div className="relative lg:pl-6">
          <HeroDashboard />
        </div>
      </div>
    </section>
  );
}
