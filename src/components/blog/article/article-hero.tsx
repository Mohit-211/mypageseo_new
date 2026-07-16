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
      {/* breadcrumbs */}
      <section className="pt-24 md:pt-28 pb-6">
        <div className="container-page">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-muted-foreground flex-wrap">
            <Link href="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/blog" className="hover:text-primary">Insights</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-primary/80">{article.category}</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-foreground/70 truncate max-w-[180px] md:max-w-none">{article.title}</span>
          </nav>
        </div>
      </section>

      {/* hero */}
      <section className="pb-10">
        <div className="container-page max-w-4xl">
          <div className="flex items-center gap-3 flex-wrap mb-5">
            <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-accent/10 text-accent text-[11px] font-semibold uppercase tracking-wider">
              {article.category}
            </span>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Calendar className="w-3 h-3" /> {article.date}
            </span>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Clock className="w-3 h-3" /> {article.read}
            </span>
            <span className="text-xs text-muted-foreground">Updated {article.updated}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display leading-[1.05] text-foreground animate-fade-up">
            {article.title}
          </h1>
          <p className="mt-6 text-xl text-muted-foreground leading-relaxed max-w-3xl animate-fade-up" style={{ animationDelay: "80ms" }}>
            {article.excerpt}
          </p>
          <div className="mt-8 flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
              MP
            </div>
            <div>
              <div className="text-sm font-medium text-foreground">{article.author}</div>
              <div className="text-xs text-muted-foreground">Local Search Specialists · MyPageSEO</div>
            </div>
          </div>
        </div>

        <div className="container-page max-w-6xl mt-12">
          <div className="rounded-3xl overflow-hidden ring-soft shadow-lift aspect-[16/8]">
            <ArticleCover kind={article.cover} className="w-full h-full" />
          </div>
        </div>
      </section>
    </>
  );
}
