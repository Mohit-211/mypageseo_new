import { ArrowRight, Calendar, Clock, User, Sparkles } from "lucide-react";
import { Art } from "./blog-illustrations";
import { AuthorAvatar, CategoryBadge } from "./blog-ui";
import type { Post } from "./blog-data";

interface FeaturedPostProps {
  post: Post;
}

export function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <section className="py-16 md:py-20">
      <div className="container-page">
        <div className="flex items-center gap-2 mb-6">
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-xs font-semibold text-accent uppercase tracking-wider">Featured</span>
        </div>
        <article className="group grid lg:grid-cols-2 gap-8 lg:gap-12 items-center rounded-3xl overflow-hidden bg-card ring-soft shadow-card hover:shadow-lift transition-all duration-500">
          <div className="aspect-[16/11] lg:aspect-auto lg:h-full overflow-hidden">
            <Art kind={post.art} className="w-full h-full group-hover:scale-[1.02] transition-transform duration-700" />
          </div>
          <div className="p-8 md:p-10 lg:pr-12">
            <div className="flex items-center gap-3 mb-4">
              <CategoryBadge label={post.c} />
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <Calendar className="w-3 h-3" /> {post.date}
              </span>
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <Clock className="w-3 h-3" /> {post.read}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display leading-tight text-foreground">
              {post.t}
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">{post.d}</p>
            <div className="mt-8 flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <AuthorAvatar initials={post.initials} />
                <div>
                  <div className="text-sm font-medium text-foreground flex items-center gap-1.5">
                    <User className="w-3 h-3 text-muted-foreground" /> {post.author}
                  </div>
                  <div className="text-xs text-muted-foreground">Head of Local Strategy</div>
                </div>
              </div>
              <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:opacity-95 transition">
                Read Article <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
