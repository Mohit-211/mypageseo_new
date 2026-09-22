import type { ApiBlog } from "@/api/blog.api";

export type CoverKind = "map" | "gbp" | "chart" | "reviews" | "citations";

export type Article = {
  title: string;
  category: string;
  excerpt: string;
  date: string;
  updated: string;
  read: string;
  author: string;
  cover: CoverKind;
};

const COVER_CYCLE: CoverKind[] = ["map", "gbp", "chart", "reviews", "citations"];

function coverFromSlug(slug: string): CoverKind {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) hash = (hash * 31 + slug.charCodeAt(i)) >>> 0;
  return COVER_CYCLE[hash % COVER_CYCLE.length];
}

function formatDate(value?: string): string {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

export function mapApiBlogToArticle(blog: ApiBlog): Article {
  return {
    title: blog.title,
    category: blog.category ?? "General",
    excerpt: blog.description ?? "",
    date: formatDate(blog.created_at),
    updated: formatDate(blog.updated_at ?? blog.created_at),
    read: blog.read_time ?? "5 min read",
    author: blog.author ?? "MyPageSEO Editorial Team",
    cover: coverFromSlug(blog.slug || blog.title),
  };
}

export type RelatedArticle = {
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  cover: CoverKind;
};

export const related: RelatedArticle[] = [
  { slug: "google-business-profile-checklist", title: "The 2026 Google Business Profile Checklist", category: "Google Business Profile", date: "Jul 8, 2026", excerpt: "Every field, category and post type that actually influences local rankings.", cover: "gbp" },
  { slug: "geo-grid-vs-average-rank", title: "Geo-Grid Ranking vs. Average Rank", category: "Local Rankings", date: "Jul 4, 2026", excerpt: "Why one number hides the truth about how nearby customers see your business.", cover: "chart" },
  { slug: "review-velocity", title: "Review Velocity Is the Signal Most Owners Miss", category: "Reviews & Reputation", date: "Jun 28, 2026", excerpt: "The pace of reviews often outweighs volume. Here's how to build momentum.", cover: "reviews" },
];
