"use client";

import { Search, BookOpen } from "lucide-react";

interface BlogHeroProps {
  q: string;
  setQ: (value: string) => void;
}

export function BlogHero({ q, setQ }: BlogHeroProps) {
  return (
    <section className="relative flex h-[calc(100svh-4rem)] items-center overflow-hidden bg-hero">
      <div aria-hidden className="absolute inset-0 bg-radial-soft opacity-70" />
      <div className="container-page relative">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-card px-3 py-1 text-xs font-medium text-primary ring-soft">
            <BookOpen className="h-3.5 w-3.5 text-accent" /> MyPageSEO Insights
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-display leading-[1.05] text-foreground animate-fade-up">
            Insights for businesses that want to{" "}
            <span className="text-gradient">win local search.</span>
          </h1>
          <p
            className="mt-5 text-lg text-muted-foreground max-w-2xl leading-relaxed animate-fade-up"
            style={{ animationDelay: "80ms" }}
          >
            Practical Local SEO knowledge, Google Business Profile strategies,
            case studies, industry news, and actionable guides — written for
            business owners, marketers, and agencies across the U.S. and Canada.
          </p>

          <div
            className="mt-8 relative max-w-xl animate-fade-up"
            style={{ animationDelay: "160ms" }}
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search articles by title or keyword…"
              className="w-full rounded-2xl bg-card py-3.5 pl-11 pr-4 text-sm placeholder:text-muted-foreground shadow-card ring-soft focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
