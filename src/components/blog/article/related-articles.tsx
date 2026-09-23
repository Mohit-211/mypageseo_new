"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { CategoryBadge } from "../blog-ui";
import { ArticleCover } from "./article-cover";
import type { RelatedArticle } from "./article-data";

interface RelatedArticlesProps {
  articles: RelatedArticle[];
}

export function RelatedArticles({ articles }: RelatedArticlesProps) {
  if (articles.length === 0) return null;

  return (
    <section className="py-20 bg-surface border-t border-border/60">
      <div className="container-page">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" /> Keep reading
            </div>
            <h2 className="text-3xl md:text-4xl font-display text-foreground">Related articles</h2>
          </div>
          <Link
            href="/blog"
            className="group inline-flex items-center gap-1.5 text-sm text-primary font-medium hover:opacity-80"
          >
            All insights
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <RelatedArticleCard key={article.slug} article={article} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function RelatedArticleCard({ article, index }: { article: RelatedArticle; index: number }) {
  const { ref, shown } = useReveal<HTMLAnchorElement>();
  const base = process.env.NEXT_PUBLIC_IMAGE_URL ?? "";

  return (
    <Link
      ref={ref}
      href={`/blog/${article.slug}`}
      className={`group flex flex-col rounded-2xl bg-card ring-soft overflow-hidden transition-all duration-500 hover:shadow-lift hover:-translate-y-1 ${
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: `${(index % 3) * 80}ms` }}
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-muted/40">
        {article.coverImage && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={`${base}${article.coverImage}`}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-700"
          />
        ) }
        <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-card/90 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ArrowUpRight className="w-4 h-4 text-primary" />
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-3">
          <CategoryBadge label={article.category} />
          <span className="text-xs text-muted-foreground">{article.date}</span>
        </div>
        <h3 className="font-display text-lg text-foreground group-hover:text-primary transition-colors leading-snug">
          {article.title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2 flex-1">
          {article.excerpt}
        </p>
        <div className="mt-4 flex items-center gap-1.5 text-sm font-medium text-primary">
          Read article
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
