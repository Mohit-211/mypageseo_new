import Link from "next/link";
import { Calendar, ChevronRight, Clock } from "lucide-react";
import { ArticleCover } from "./article-cover";
import type { Article } from "./article-data";

interface ArticleHeroProps {
  article: Article;
}

export function ArticleHero({ article }: ArticleHeroProps) {
  return (
    <>
      {/* hero: breadcrumbs + title, locked to viewport */}
      <section className="relative flex h-[calc(100svh-4rem)] items-center overflow-hidden bg-hero">
        <div
          aria-hidden
          className="absolute inset-0 bg-radial-soft opacity-70"
        />
        <div className="container-page relative">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground"
          >
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/blog" className="hover:text-primary">
              Insights
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-primary/80">{article.category}</span>
            <ChevronRight className="h-3 w-3" />
            <span className="max-w-[180px] truncate text-foreground/70 md:max-w-none">
              {article.title}
            </span>
          </nav>

          <div className="mt-6 max-w-4xl">
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-full bg-accent/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent">
                {article.category}
              </span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Calendar className="h-3 w-3" /> {article.date}
              </span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" /> {article.read}
              </span>
              <span className="text-xs text-muted-foreground">
                Updated {article.updated}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display leading-[1.05] text-foreground animate-fade-up">
              {article.title}
            </h1>
            <p
              className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-3xl animate-fade-up"
              style={{ animationDelay: "80ms" }}
            >
              {article.excerpt}
            </p>
            <div className="mt-8 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary font-semibold text-primary-foreground">
                MP
              </div>
              <div>
                <div className="text-sm font-medium text-foreground">
                  {article.author}
                </div>
                <div className="text-xs text-muted-foreground">
                  Local Search Specialists · MyPageSEO
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* cover image: normal content flow, not part of the hero */}
      <section className="pt-12 pb-10">
        <div className="container-page max-w-6xl">
          <div className="aspect-[16/8] overflow-hidden rounded-3xl shadow-lift ring-soft">
            <ArticleCover kind={article.cover} className="h-full w-full" />
          </div>
        </div>
      </section>
    </>
  );
}
