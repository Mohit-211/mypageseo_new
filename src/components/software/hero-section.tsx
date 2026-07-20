import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";
import { HeroMockup } from "@/components/software/hero-mockup";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-24 md:pt-32 pb-16 md:pb-24 bg-hero">
      <div className="container-page grid lg:grid-cols-2 gap-14 items-center">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card ring-soft text-xs font-medium text-primary">
            <Zap className="w-3.5 h-3.5 text-accent" /> MyPageSEO Software
          </span>
          <h1 className="mt-5 text-4xl md:text-6xl font-display leading-[1.05] text-foreground">
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
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-accent-foreground font-medium hover:opacity-95 transition shadow-lift"
            >
              Request a Demo <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/checkout"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-95 transition"
            >
              Get Started
            </Link>
            <a
              href="#reports"
              className="text-sm text-muted-foreground hover:text-primary transition ml-1"
            >
              Explore the reports below →
            </a>
          </div>
        </div>
        <div className="animate-fade-up" style={{ animationDelay: "150ms" }}>
          <HeroMockup />
        </div>
      </div>
    </section>
  );
}
