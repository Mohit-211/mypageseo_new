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

export const articles: Record<string, Article> = {
  "2026-local-seo-playbook": {
    title: "The 2026 Local SEO Playbook: What's Working in Google Maps Right Now",
    category: "Local SEO",
    excerpt: "A field-tested breakdown of the ranking signals, GBP tactics, and reporting habits that separate top-performing local businesses from the rest.",
    date: "July 12, 2026",
    updated: "July 14, 2026",
    read: "12 min read",
    author: "MyPageSEO Editorial Team",
    cover: "map",
  },
  "google-business-profile-checklist": {
    title: "The 2026 Google Business Profile Checklist",
    category: "Google Business Profile",
    excerpt: "Every field, category, and post type that actually influences local rankings — with real examples.",
    date: "July 8, 2026",
    updated: "July 10, 2026",
    read: "8 min read",
    author: "MyPageSEO Editorial Team",
    cover: "gbp",
  },
};

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
