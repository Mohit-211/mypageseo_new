"use client";

import { Search, BookOpen } from "lucide-react";

interface BlogHeroProps {
  q: string;
  setQ: (value: string) => void;
}

export function BlogHero({ q, setQ }: BlogHeroProps) {
  return (
    <section className="relative pt-24 md:pt-32 pb-12 bg-hero overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-radial-soft opacity-70" />
      <div className="container-page relative">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card ring-soft text-xs font-medium text-primary">
            <BookOpen className="w-3.5 h-3.5 text-accent" /> MyPageSEO Insights
          </span>
          <h1 className="mt-5 text-4xl md:text-6xl font-display leading-[1.05] text-foreground animate-fade-up">
            Insights for businesses that want to <span className="text-gradient">win local search.</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl leading-relaxed animate-fade-up" style={{ animationDelay: "80ms" }}>
            Practical Local SEO knowledge, Google Business Profile strategies, software updates, case studies, industry news, and actionable guides — written for business owners, marketers, and agencies across the U.S. and Canada.
          </p>

          <div className="mt-8 relative max-w-xl animate-fade-up" style={{ animationDelay: "160ms" }}>
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search articles by title or keyword…"
              className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-card ring-soft focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm placeholder:text-muted-foreground shadow-card"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
