import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Photo } from "@/components/photos";
import { Reveal } from "@/components/reveal";

export function AboutHero() {
  return (
    <section className="relative overflow-hidden pt-16 md:pt-24 pb-20 md:pb-28">
      <div className="absolute inset-0 -z-10 bg-hero" aria-hidden />
      <div className="absolute -top-40 -left-20 -z-10 h-96 w-96 rounded-full bg-primary/10 blur-3xl" aria-hidden />
      <div className="absolute -top-20 right-0 -z-10 h-96 w-96 rounded-full bg-accent/10 blur-3xl" aria-hidden />

      <div className="container-page grid lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 backdrop-blur px-3 py-1 text-xs font-medium text-muted-foreground shadow-card">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            About MyPageSEO
          </div>
          <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl leading-[1.03] tracking-tight text-foreground">
            Built around one belief:{" "}
            <span className="text-gradient">local businesses deserve better visibility</span> — where customers
            actually search.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
            MyPageSEO exists to help businesses become the obvious choice in their local markets. We do that through
            specialized Local SEO strategies, experienced strategists and proprietary software that turns data into
            measurable growth.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lift hover:-translate-y-0.5 transition"
            >
              Explore Services <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/get-started"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-card hover:-translate-y-0.5 transition"
            >
              Get Started
            </Link>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <Photo src="team" alt="MyPageSEO team collaborating around a laptop" aspect="aspect-[5/4]" eager />
        </Reveal>
      </div>
    </section>
  );
}
