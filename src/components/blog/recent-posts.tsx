"use client";

import { Newspaper } from "lucide-react";
import { PostCard } from "./post-card";
import type { Post } from "./blog-data";

interface RecentPostsProps {
  posts: Post[];
  totalCount: number;
  cat: string;
  onClearFilters: () => void;
}

export function RecentPosts({ posts, totalCount, cat, onClearFilters }: RecentPostsProps) {
  return (
    <section className="py-16 md:py-20">
      <div className="container-page">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">
              <Newspaper className="w-3.5 h-3.5 inline mr-1" /> Latest articles
            </div>
            <h2 className="text-3xl md:text-4xl font-display text-foreground">
              {cat === "All" ? "Fresh from the team" : cat}
            </h2>
          </div>
          <div className="text-sm text-muted-foreground hidden md:block">
            Showing {posts.length} of {totalCount}
          </div>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-20 rounded-2xl bg-surface-muted">
            <p className="text-muted-foreground">No articles match your search.</p>
            <button onClick={onClearFilters} className="mt-3 text-sm text-primary font-medium">
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((p, i) => (
              <PostCard key={p.t} post={p} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
