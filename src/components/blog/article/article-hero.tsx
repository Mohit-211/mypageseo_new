import Link from "next/link";
import { Calendar, ChevronRight, Clock } from "lucide-react";
import { ArticleCover } from "./article-cover";
import type { Article } from "./article-data";

interface ArticleHeroProps {
  article: Article;
}

export function ArticleHero({ article }: ArticleHeroProps) {
  console.log(article,"article")
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .filter(Boolean)
      .map((word) => word[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
  };

  const base = process.env.NEXT_PUBLIC_IMAGE_URL ?? "";

  const wordCount = article.excerpt?.split(/\s+/).filter(Boolean).length ?? 0;
  const readMinutes = Math.max(1, Math.round(wordCount / 200) * 4);

  return (
    <section className="relative overflow-hidden bg-hero">
      <div aria-hidden className="absolute inset-0 bg-radial-soft opacity-70" />

      <div className="container-page relative pt-10 md:pt-14">
       

       

        {/* asymmetric row: excerpt/meta left, nothing right (breathing room) */}
        

        {/* image with overlapping author card */}
        <div
          className="relative mt-12 animate-fade-up"
          style={{ width: "70%", margin: "auto" }}
        >
          <div className="group relative  overflow-hidden rounded-[2rem] shadow-lift ring-soft">
            {article.coverImage &&
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={`${base}${article.coverImage}`}
                alt={article.title}
                className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
            // ) : (
            //   <ArticleCover kind={article.cover} className="h-full w-full" />
            // )
            }
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-background/0 to-transparent"
            />
          </div>

          {/* author card, floating over bottom-left of the image */}
          <div className="absolute bottom-0 left-0 flex items-center gap-3 rounded-2xl bg-background/90 px-4 py-3 shadow-lift ring-soft backdrop-blur-md md:left-6 md:-bottom-6">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary font-semibold text-primary-foreground">
              {getInitials(article.author)}
            </div>
            <div>
              <div className="text-sm font-medium text-foreground">
                {article.author}
              </div>
              <div className="text-xs text-muted-foreground">
                {article.author_position}
              </div>
            </div>
          </div>
        </div>
        <div
          className="mt-10 grid gap-6 md:grid-cols-[1fr_auto] md:items-end animate-fade-up"
          style={{ animationDelay: "80ms" }}
        >
          <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed">
            {/* {article.excerpt} */}
          </p>

          <div className="flex shrink-0 items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" /> {article.date}
            </span>
           
          </div>
        </div>

        {/* spacer to clear the floating card on desktop */}
        <div className="h-6 md:h-10" aria-hidden />
      </div>
    </section>
  );
}