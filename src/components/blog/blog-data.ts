import {
  Building2,
  MapPin,
  Link2,
  TrendingUp,
  Star,
  Map,
  BarChart3,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import type { ApiBlog } from "@/api/blog.api";
import type { ApiCategory } from "@/api/category.api";

export type ArtKind =
  | "map"
  | "gbp"
  | "chart"
  | "reviews"
  | "citations"
  | "growth"
  | "news"
  | "guide"
  | "software";

export type Post = {
  t: string;
  c: string;
  d: string;
  date: string;
  read: string;
  author: string;
  initials: string;
  art: ArtKind;
};

const ART_CYCLE: ArtKind[] = [
  "map",
  "gbp",
  "chart",
  "reviews",
  "citations",
  "growth",
  "news",
  "guide",
  "software",
];

function initialsFromName(name?: string): string {
  if (!name) return "NA";
  const initials = name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
  return initials || "NA";
}

function formatDate(value?: string): string {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
}

export function mapApiBlogToPost(blog: ApiBlog, index = 0): Post {
  return {
    t: blog.title,
    c: blog.category ?? "General",
    d: blog.description ?? "",
    date: formatDate(blog.created_at),
    read: blog.read_time ?? "5 min read",
    author: blog.author ?? "MyPageSEO Team",
    initials: initialsFromName(blog.author),
    art: ART_CYCLE[index % ART_CYCLE.length],
  };
}

export function mapApiCategoriesToNames(apiCategories: ApiCategory[]): string[] {
  return ["All", ...apiCategories.map((c) => c.title).filter(Boolean)];
}

export type Guide = {
  t: string;
  d: string;
  read: string;
  art: ArtKind;
};

export const guides: Guide[] = [
  { t: "The Complete Guide to Google Business Profile Optimization", d: "Everything you need to configure, maintain, and grow your GBP from foundation to advanced tactics.", read: "24 min read", art: "gbp" },
  { t: "Local SEO Fundamentals for Business Owners", d: "A plain-English introduction to how local search works and where your effort actually moves the needle.", read: "18 min read", art: "map" },
  { t: "A Practical Guide to Local Ranking Reporting", d: "How to read grid-based rankings, competitor overlays, and trend data to make sharper decisions.", read: "16 min read", art: "chart" },
  { t: "Reviews & Reputation: A Framework That Actually Scales", d: "Requesting, responding, monitoring, and measuring reviews across every location and platform.", read: "20 min read", art: "reviews" },
];

export type Release = {
  v: string;
  date: string;
  t: string;
  d: string;
};

export const releases: Release[] = [
  { v: "v4.6", date: "Jul 09, 2026", t: "Enhanced Geo-Grid Overlays", d: "Compare up to 4 competitors simultaneously across any grid density." },
  { v: "v4.5", date: "Jun 24, 2026", t: "Review Sentiment Themes", d: "Automatic keyword-theme extraction across every connected review platform." },
  { v: "v4.4", date: "Jun 10, 2026", t: "White-label Domain Support", d: "Serve reports from your own subdomain with automatic SSL." },
  { v: "v4.3", date: "May 27, 2026", t: "Multi-location Rollups", d: "Portfolio-level dashboards for franchises and multi-brand organizations." },
  { v: "v4.2", date: "May 13, 2026", t: "Citation Duplicate Detection", d: "Smarter matching for near-duplicate listings across major directories." },
  { v: "v4.1", date: "Apr 29, 2026", t: "Scheduled Report Delivery", d: "Weekly and monthly report emails with fully branded PDF exports." },
];

export type Topic = {
  t: string;
  i: LucideIcon;
};

export const topics: Topic[] = [
  { t: "Google Business Profile", i: Building2 },
  { t: "Local SEO Strategy", i: MapPin },
  { t: "Citation Management", i: Link2 },
  { t: "Local Rankings", i: TrendingUp },
  { t: "Customer Reviews", i: Star },
  { t: "Maps Visibility", i: Map },
  { t: "Reporting", i: BarChart3 },
  { t: "Software Updates", i: Sparkles },
];
