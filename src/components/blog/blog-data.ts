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

export const categories = [
  "All",
  "Local SEO",
  "Google Business Profile",
  "Citations",
  "Reviews & Reputation",
  "Local Rankings",
  "Marketing Strategy",
  "Case Studies",
  "Software Updates",
  "Industry News",
  "Guides",
];

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

export const featured: Post = {
  t: "The 2026 Local SEO Playbook: What's Working in Google Maps Right Now",
  c: "Local SEO",
  d: "A field-tested breakdown of the ranking signals, GBP tactics, and reporting habits that separate top-performing local businesses from the rest heading into 2026.",
  date: "Jul 12, 2026",
  read: "12 min read",
  author: "Priya Ramesh",
  initials: "PR",
  art: "map",
};

export const posts: Post[] = [
  { t: "The 2026 Google Business Profile Checklist", c: "Google Business Profile", d: "Every field, category, and post type that actually influences local rankings — with real examples.", date: "Jul 08, 2026", read: "8 min", author: "Marcus Chen", initials: "MC", art: "gbp" },
  { t: "Geo-Grid Ranking vs. Average Rank: Why It Matters", c: "Local Rankings", d: "Why one number hides the truth about how nearby customers actually see your business on Google Maps.", date: "Jul 04, 2026", read: "6 min", author: "Priya Ramesh", initials: "PR", art: "chart" },
  { t: "Review Velocity Is the Signal Most Owners Miss", c: "Reviews & Reputation", d: "The pace of reviews often outweighs volume. Here's how to build a program that keeps momentum.", date: "Jun 28, 2026", read: "7 min", author: "Elena Vasquez", initials: "EV", art: "reviews" },
  { t: "Citation Cleanup: The Underrated Local Ranking Boost", c: "Citations", d: "A pragmatic approach to auditing directory listings without paying for every 'top 100 sites' service.", date: "Jun 22, 2026", read: "9 min", author: "David Park", initials: "DP", art: "citations" },
  { t: "How a Multi-Location Dental Group Grew Calls 62%", c: "Case Studies", d: "The exact GBP, citation, and review workflow that lifted qualified calls across 14 locations in six months.", date: "Jun 18, 2026", read: "10 min", author: "Marcus Chen", initials: "MC", art: "growth" },
  { t: "Local SEO for Home Services: A Practical Framework", c: "Marketing Strategy", d: "Service-area businesses have unique constraints. Here's a framework built for them, not for brick-and-mortar.", date: "Jun 12, 2026", read: "11 min", author: "Priya Ramesh", initials: "PR", art: "guide" },
  { t: "What Google's Latest Local Update Actually Changed", c: "Industry News", d: "Cutting through the noise on the most recent local search algorithm update — with data from real accounts.", date: "Jun 05, 2026", read: "5 min", author: "Elena Vasquez", initials: "EV", art: "news" },
  { t: "The Anatomy of a Perfect GBP Post", c: "Google Business Profile", d: "Length, media, offers, and CTAs — what makes GBP posts drive profile actions instead of ignored impressions.", date: "May 30, 2026", read: "6 min", author: "David Park", initials: "DP", art: "gbp" },
  { t: "Reputation Recovery: Turning a 3.6 into a 4.7", c: "Reviews & Reputation", d: "A step-by-step reputation recovery plan for businesses climbing out of a rough patch of reviews.", date: "May 24, 2026", read: "9 min", author: "Elena Vasquez", initials: "EV", art: "reviews" },
];

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
