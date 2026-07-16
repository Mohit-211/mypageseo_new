import Link from "next/link";
import { Sparkles } from "lucide-react";
import { ArticleCover } from "./article-cover";
import { related } from "./article-data";

export function RelatedArticles() {
  return (
    <section className="py-20">
      <div className="container-page">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-3">
          <div>
            <div className="text-xs font-semibold text-accent uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Keep reading
            </div>
            <h2 className="text-3xl md:text-4xl font-display text-foreground">Related articles</h2>
          </div>
          <Link href="/blog" className="text-sm text-primary font-medium hover:opacity-80">
            All insights →
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {related.map((r) => (
            <Link
              key={r.slug}
              href={`/blog/${r.slug}`}
              className="group rounded-2xl bg-card ring-soft overflow-hidden hover:shadow-lift hover:-translate-y-1 transition-all duration-500"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <ArticleCover kind={r.cover} className="w-full h-full group-hover:scale-[1.03] transition-transform duration-700" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[11px] font-semibold text-accent uppercase tracking-wider">{r.category}</span>
                  <span className="text-xs text-muted-foreground">{r.date}</span>
                </div>
                <h3 className="font-display text-lg text-foreground group-hover:text-primary transition-colors leading-snug">{r.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">{r.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
