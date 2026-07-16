import {
  MapPin,
  Search,
  Building2,
  ShieldCheck,
  Layers,
  Star,
  BarChart3,
  Wrench,
  Megaphone,
  Share2,
  MessageSquare,
  PenLine,
  Globe,
} from "lucide-react";

/* ---------- Menu data ---------- */

export const serviceLinks = [
  {
    slug: "local-seo",
    name: "Local SEO",
    icon: MapPin,
    blurb: "The full-stack Local SEO program that wins in Maps.",
  },
  {
    slug: "gbp-optimization",
    name: "Google Business Profile Optimization",
    icon: Building2,
    blurb: "Turn your GBP into a conversion machine.",
  },
  {
    slug: "citation-management",
    name: "Citation Management",
    icon: ShieldCheck,
    blurb: "Consistent NAP data across every directory that matters.",
  },
  {
    slug: "local-landing-pages",
    name: "Local Landing Pages",
    icon: Layers,
    blurb: "High-intent pages built to rank per city and service.",
  },
  {
    slug: "local-keyword-strategy",
    name: "Local Keyword Strategy",
    icon: Search,
    blurb: "Prioritize keywords by revenue, not vanity volume.",
  },
  {
    slug: "reputation-growth",
    name: "Review & Reputation Growth",
    icon: Star,
    blurb: "Generate, monitor, and respond to reviews at scale.",
  },
  {
    slug: "multi-location-seo",
    name: "Multi-location SEO",
    icon: Globe,
    blurb: "Standardized visibility across every location you operate.",
  },
  {
    slug: "local-seo-reporting",
    name: "Local SEO Reporting",
    icon: BarChart3,
    blurb: "Transparent dashboards showing what's actually working.",
  },
  {
    slug: "technical-local-seo",
    name: "Technical Local SEO",
    icon: Wrench,
    blurb: "Schema, site health, and crawlability for local intent.",
  },
] as const;

export const productLinks = [
  {
    slug: "mypageseo",
    name: "MyPageSEO",
    icon: MapPin,
    blurb:
      "Flagship Local SEO platform — audits, citations, rankings, visibility.",
  },
  {
    slug: "mypageads",
    name: "MyPageAds",
    icon: Megaphone,
    blurb:
      "Local advertising across locations with intelligent performance reporting.",
  },
  {
    slug: "mypagesmo",
    name: "MyPageSMO",
    icon: Share2,
    blurb: "Local social media publishing, scheduling, and engagement.",
  },
  {
    slug: "mypagereputation",
    name: "MyPageReputation",
    icon: MessageSquare,
    blurb: "Generate, monitor, and respond to reviews across platforms.",
  },
  {
    slug: "mypagecontent",
    name: "MyPageContent",
    icon: PenLine,
    blurb: "AI-assisted local content for pages, blogs, and GBP posts.",
  },
  {
    slug: "mypagesites",
    name: "MyPageSites",
    icon: Globe,
    blurb: "Fast, conversion-oriented websites built Local SEO-first.",
  },
] as const;

export const staticNav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/industries", label: "Industries" },
  { to: "/blog", label: "Blogs" },
  { to: "/contact", label: "Contact Us" },
] as const;
