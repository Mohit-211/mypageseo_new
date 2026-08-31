import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Photo } from "@/components/photos";
import { Reveal } from "@/components/reveal";

export function AboutHero() {
  return (
    <section className="relative flex h-[calc(100svh-4rem)] items-center overflow-hidden bg-hero">
      <div aria-hidden className="absolute inset-0 bg-radial-soft opacity-70" />
      <div
        aria-hidden
        className="absolute -top-40 -left-20 -z-10 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -top-20 right-0 -z-10 h-96 w-96 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="container-page relative grid gap-14 lg:grid-cols-2 items-center">
        <Reveal>
          <div className="min-w-0">
            <span className="inline-flex items-center gap-2 rounded-full bg-card px-3 py-1 text-xs font-medium text-primary ring-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              About MyPageSEO
            </span>
            <h1 className="mt-6 text-4xl md:text-6xl font-display leading-[1.05] text-foreground">
              Built around one belief:{" "}
              <span className="text-gradient">
                local businesses deserve better visibility
              </span>{" "}
              — where customers actually search.
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl leading-relaxed">
              MyPageSEO exists to help businesses become the obvious choice in
              their local markets. We do that through specialized Local SEO
              strategies, experienced strategists and proprietary software that
              turns data into measurable growth.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-lift transition-all hover:-translate-y-0.5"
              >
                Explore Services <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/checkout"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary/40"
              >
                Get Started
              </Link>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="min-w-0">
            <div className="mx-auto w-full max-w-lg overflow-hidden rounded-3xl lg:max-w-none">
              <Photo
                src="team"
                alt="MyPageSEO team collaborating around a laptop"
                aspect="aspect-[5/4]"
                eager
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
