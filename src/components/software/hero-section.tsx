import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";
import { HeroMockup } from "@/components/software/hero-mockup";

export function HeroSection() {
  return (
    <section className="relative flex h-[calc(100svh-4rem)] items-center overflow-hidden bg-hero">
      <div aria-hidden className="absolute inset-0 bg-radial-soft opacity-70" />
      <div className="container-page relative grid gap-14 lg:grid-cols-2 items-center">
        <div className="min-w-0 animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-card px-3 py-1 text-xs font-medium text-primary ring-soft">
            <Zap className="h-3.5 w-3.5 text-accent" /> MyPageSEO Software
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-display leading-[1.05] text-foreground">
            Better Local SEO decisions{" "}
            <span className="text-gradient">begin with better data.</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-xl leading-relaxed">
            MyPageSEO Software is an intelligent Local SEO reporting and
            auditing platform. It transforms complex signals — Google Business
            Profile performance, local visibility, citations, rankings, reviews,
            and optimization opportunities — into clear, actionable reports.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-lift transition-all hover:-translate-y-0.5"
            >
              Request a Demo <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/checkout"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary/40"
            >
              Get Started
            </Link>
            <a
              href="#reports"
              className="ml-1 text-sm text-muted-foreground transition hover:text-primary"
            >
              Explore the reports below →
            </a>
          </div>
        </div>
        <div
          className="min-w-0 animate-fade-up"
          style={{ animationDelay: "150ms" }}
        >
          <div className="mx-auto w-full max-w-lg overflow-hidden lg:max-w-none">
            <HeroMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
