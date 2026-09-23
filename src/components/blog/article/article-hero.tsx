import { BookOpen, Calendar } from "lucide-react";
import type { Article } from "./article-data";

interface ArticleHeroProps {
  article: Article;
}

export function ArticleHero({ article }: ArticleHeroProps) {
  const base = process.env.NEXT_PUBLIC_IMAGE_URL ?? "";

  return (
    <>
      {/* dark title band */}
      <section className="relative overflow-hidden bg-hero pt-16 md:pt-24 pb-20">
        <div aria-hidden className="absolute inset-0 bg-radial-soft opacity-70" />
        <div className="container-page relative max-w-4xl">
          {article.category && (
            <span className="inline-flex items-center gap-2 mb-5 rounded-full bg-card px-3 py-1 text-xs font-medium text-primary ring-soft">
              <BookOpen className="h-3.5 w-3.5 text-accent" /> {article.category}
            </span>
          )}
          <h1 className="text-4xl md:text-5xl font-display leading-tight text-foreground animate-fade-up">
            {article.title}
          </h1>
          <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
            {article.date && (
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" /> {article.date}
              </span>
            )}
            {article.author && (
              <>
                <span aria-hidden>·</span>
                <span>
                  {article.author}
                  {article.author_position && ` · ${article.author_position}`}
                </span>
              </>
            )}
          </p>
        </div>
      </section>

      {/* cover image overlapping the band */}
      {!article.coverImage && <div className="h-12" aria-hidden />}
      {article.coverImage && (
        <div className="container-page max-w-4xl -mt-12 mb-12 relative">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lift bg-muted">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${base}${article.coverImage}`}
              alt={article.title}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      )}
    </>
  );
}
