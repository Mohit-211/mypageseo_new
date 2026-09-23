import Link from "next/link";
import { ArrowRight, Calendar, Clock, Sparkles } from "lucide-react";
import { AuthorAvatar, CategoryBadge } from "./blog-ui";
import type { Post } from "./blog-data";

interface FeaturedPostProps {
  post: Post;
}

export function FeaturedPost({ post }: FeaturedPostProps) {
  const base = process.env.NEXT_PUBLIC_IMAGE_URL ?? "";
  const href = `/blog/${post.slug}`;

  return (
    <section className="py-16 md:py-20">
      <div className="container-page">
        <article className="group relative grid lg:grid-cols-[1.15fr_1fr] rounded-3xl overflow-hidden bg-card ring-soft shadow-card hover:shadow-lift transition-all duration-500">
          <Link
            href={href}
            className="relative block aspect-video lg:aspect-auto lg:min-h-105 overflow-hidden bg-muted/40"
          >
            {post.image && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={`${base}${post.image}`}
                alt={post.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
              />
            )}
            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/0 to-black/0" />
            <span className="absolute top-5 left-5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/90 backdrop-blur text-accent text-[11px] font-semibold uppercase tracking-wider shadow-sm">
              <Sparkles className="w-3.5 h-3.5" /> Featured
            </span>
          </Link>

          <div className="flex flex-col p-8 md:p-10 lg:p-12">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-5">
              {post.categories.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {post.categories.map((c) => (
                    <CategoryBadge key={c} label={c} />
                  ))}
                </div>
              )}
              <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" /> {post.date}
              </span>
              {post.read && (
                <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" /> {post.read}
                </span>
              )}
            </div>

            <h2 className="text-3xl md:text-4xl font-display leading-tight text-foreground">
              <Link href={href} className="hover:text-primary transition-colors line-clamp-1">
                {post.title}
              </Link>
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed line-clamp-3">{post.description}</p>

            <div className="mt-auto pt-8">
              <div className="border-t border-border pt-6 flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <AuthorAvatar initials={post.initials} />
                  <div className="flex flex-wrap items-center gap-x-2 text-sm">
                    <span className="font-medium text-foreground">{post.author}</span>
                    <span className="text-muted-foreground" aria-hidden>·</span>
                    <span className="text-muted-foreground">Head of Local Strategy</span>
                  </div>
                </div>
                <Link
                  href={href}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:opacity-95 transition"
                >
                  Read Article
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
