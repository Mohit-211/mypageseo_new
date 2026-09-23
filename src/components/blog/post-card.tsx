"use client";

import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { AuthorAvatar, CategoryBadge } from "./blog-ui";
import type { Post } from "./blog-data";

interface PostCardProps {
  post: Post;
  index: number;
}

export function PostCard({ post, index }: PostCardProps) {
  const { ref, shown } = useReveal<HTMLAnchorElement>();
  const base = process.env.NEXT_PUBLIC_IMAGE_URL ?? "";
  console.log(post,"=")
  return (
    <Link
      href={`/blog/${post.slug}`}
      ref={ref}
      className={`group flex flex-col h-full rounded-2xl bg-card ring-soft overflow-hidden transition-all duration-500 hover:shadow-lift hover:-translate-y-1 ${
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: `${(index % 3) * 70}ms` }}
    >
      <div className="aspect-[16/9] overflow-hidden bg-muted/40">
        {post.image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={`${base}${post.image}`}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
          />
        )}
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          {post.categories.map((c) => (
            <CategoryBadge key={c} label={c} />
          ))}
        
        </div>
        <h3 className="font-display text-xl leading-snug text-foreground group-hover:text-primary transition-colors line-clamp-1">
          {post.title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">{post.description}</p>
        <div className="mt-auto pt-5 flex items-center justify-between">
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
    </Link>
  );
}
