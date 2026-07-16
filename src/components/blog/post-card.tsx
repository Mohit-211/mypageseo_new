"use client";

import { ArrowRight, Clock } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { Art } from "./blog-illustrations";
import { AuthorAvatar, CategoryBadge } from "./blog-ui";
import type { Post } from "./blog-data";

interface PostCardProps {
  post: Post;
  index: number;
}

export function PostCard({ post, index }: PostCardProps) {
  const { ref, shown } = useReveal<HTMLElement>();
  return (
    <article
      ref={ref}
      className={`group rounded-2xl bg-card ring-soft overflow-hidden transition-all duration-500 hover:shadow-lift hover:-translate-y-1 ${
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: `${(index % 3) * 70}ms` }}
    >
      <div className="aspect-[16/10] overflow-hidden">
        <Art kind={post.art} className="w-full h-full group-hover:scale-[1.03] transition-transform duration-700" />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <CategoryBadge label={post.c} />
          <span className="text-xs text-muted-foreground flex items-center gap-1">
            <Clock className="w-3 h-3" /> {post.read}
          </span>
        </div>
        <h3 className="font-display text-xl leading-snug text-foreground group-hover:text-primary transition-colors">
          {post.t}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">{post.d}</p>
        <div className="mt-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AuthorAvatar initials={post.initials} />
            <div>
              <div className="text-xs font-medium text-foreground">{post.author}</div>
              <div className="text-[10px] text-muted-foreground">{post.date}</div>
            </div>
          </div>
          <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
        </div>
      </div>
    </article>
  );
}
