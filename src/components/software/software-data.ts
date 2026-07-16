import {
  Gauge, MapPin, Star, Link2, Radar, Building2, Users, TrendingUp,
  FileBarChart, Layers, Palette, Sparkles, Stethoscope,
  Scale, Utensils, ShoppingBag, Wrench, Briefcase,
  Search, Eye, ClipboardList,
} from "lucide-react";

export const features = [
  { icon: FileBarChart, t: "Local SEO Report", d: "A complete overview of your local search performance in one clean, shareable report." },
  { icon: Building2, t: "Google Business Profile Audit", d: "Field-by-field evaluation of your GBP with prioritized fixes for every gap we find." },
  { icon: Link2, t: "Citation Report", d: "Track directory listings for accuracy, consistency, and coverage across the sites Google actually reads." },
  { icon: Star, t: "Review & Reputation Analysis", d: "Monitor volume, sentiment, response rate, and keyword themes across every review platform." },
  { icon: MapPin, t: "Local Ranking Tracker", d: "Grid-based rank tracking that shows exactly where you appear across your service area." },
  { icon: Radar, t: "Competitor Benchmarking", d: "Compare your Local SEO signals against real competitors ranking in your market." },
  { icon: Gauge, t: "Business Profile Health Score", d: "A single, weighted score that tells you exactly how well your GBP is optimized." },
  { icon: TrendingUp, t: "Performance Trends", d: "Historical charts for rankings, visibility, calls, direction requests, and profile actions." },
  { icon: Sparkles, t: "Optimization Recommendations", d: "Clear next steps prioritized by impact — not a wall of unfiltered data." },
  { icon: Layers, t: "Multi-location Monitoring", d: "Manage two locations or two hundred with rollup reports and per-location detail." },
  { icon: Eye, t: "Local Visibility Overview", d: "Understand exactly how often, where, and to whom your business is appearing locally." },
  { icon: Palette, t: "White-label Reporting", d: "Brand every report with your own logo, colors, and domain — ideal for agencies." },
];

export const showcases = [
  {
    title: "Local SEO Dashboard",
    body: "A single control room for every Local SEO signal that matters. See profile health, visibility trends, ranking movement, review activity, and priority actions the moment you log in — no digging, no spreadsheets.",
    mockup: "dashboard" as const,
  },
  {
    title: "Google Business Profile Analysis",
    body: "We audit every element of your Google Business Profile — categories, services, hours, media, posts, Q&A, and attributes — and score each area against local ranking best practices with clear, prioritized fixes.",
    mockup: "gbp" as const,
  },
  {
    title: "Citation Management Report",
    body: "Discover every directory listing pointing to your business, catch inconsistent NAP data, and monitor coverage across the sites Google trusts most for local relevance.",
    mockup: "citations" as const,
  },
  {
    title: "Local Ranking Trends",
    body: "Move beyond a single rank position. Grid-based tracking shows exactly where you appear across every block of your service area, with weekly movement and competitor overlay.",
    mockup: "rankings" as const,
  },
  {
    title: "Review & Reputation Analytics",
    body: "Volume, velocity, sentiment, response rate, and keyword themes — all pulled together so you can see what customers are saying and how it's shaping local search performance.",
    mockup: "reviews" as const,
  },
  {
    title: "Executive Summary Report",
    body: "A boardroom-ready summary that translates Local SEO metrics into business outcomes: calls, direction requests, qualified leads, and where the biggest opportunities remain.",
    mockup: "exec" as const,
  },
];

export type ShowcaseMockupKind = (typeof showcases)[number]["mockup"];

export const workflow = [
  { icon: ClipboardList, t: "Collect business information" },
  { icon: Building2, t: "Analyze Google Business Profile" },
  { icon: Search, t: "Evaluate local search signals" },
  { icon: Link2, t: "Review citations" },
  { icon: Radar, t: "Compare competitors" },
  { icon: Sparkles, t: "Generate actionable insights" },
  { icon: FileBarChart, t: "Produce professional reports" },
];

export const reports = [
  { t: "Local SEO Report", d: "The full performance picture — visibility, rankings, GBP, citations, and reviews in one document." },
  { t: "Google Business Profile Report", d: "A field-level audit of every GBP element with prioritized optimization actions." },
  { t: "Citation Report", d: "Directory coverage, NAP consistency, duplicates, and missing high-authority listings." },
  { t: "Local Ranking Report", d: "Grid-based rankings across your service area, tracked week over week." },
  { t: "Reputation Report", d: "Review volume, sentiment, response rate, and platform-by-platform breakdown." },
  { t: "Competitor Snapshot", d: "How you compare against the businesses actually ranking in your local market." },
  { t: "Business Visibility Report", d: "Where, when, and how often your business is showing up in local search results." },
  { t: "Executive Summary", d: "A concise, outcome-focused report translating data into business impact." },
];

export const audiences = [
  { icon: Briefcase, t: "Local SEO Agencies", d: "Deliver white-label reports at scale with per-client dashboards and rollups." },
  { icon: Users, t: "Marketing Consultants", d: "Show measurable local impact without building your own reporting stack." },
  { icon: Layers, t: "Franchise Businesses", d: "Consistent local visibility across every franchise location, monitored centrally." },
  { icon: Building2, t: "Multi-location Brands", d: "One rollup view plus deep per-location detail for regional managers." },
  { icon: Stethoscope, t: "Healthcare Practices", d: "Ensure patients find the right location, hours, and services when searching locally." },
  { icon: Scale, t: "Law Firms", d: "Compete for high-intent local searches with clear GBP and review reporting." },
  { icon: Wrench, t: "Contractors & Home Services", d: "Track service-area rankings block by block, not by an average city rank." },
  { icon: Utensils, t: "Restaurants", d: "Monitor reviews, photos, hours accuracy, and map pack visibility in real time." },
  { icon: ShoppingBag, t: "Retail Businesses", d: "Bring local shoppers to the storefront with accurate profiles and strong local signals." },
  { icon: MapPin, t: "Location-Dependent Companies", d: "Anywhere revenue depends on nearby customers, the platform pays for itself." },
];

export const stats = [
  { n: 48200, s: "+", l: "Reports generated" },
  { n: 260, s: "+", l: "Local SEO signals analyzed" },
  { n: 12500, s: "+", l: "Business profiles evaluated" },
  { n: 190000, s: "+", l: "Citations monitored" },
  { n: 84000, s: "+", l: "Local keywords tracked" },
  { n: 320000, s: "+", l: "Recommendations delivered" },
];

export const faqs = [
  { q: "Does the software support multiple locations?", a: "Yes. You can manage anywhere from two to several hundred locations with per-location detail and organization-wide rollup reporting." },
  { q: "Are reports white-labeled?", a: "Every report can be branded with your own logo, colors, and domain — ideal for agencies and consultants delivering to clients." },
  { q: "Can agencies use it for their clients?", a: "The platform is built with agencies in mind: client workspaces, permissions, white-label reports, and scheduled delivery are all included." },
  { q: "How often is data updated?", a: "GBP signals and reviews refresh daily. Rank tracking runs on a weekly cadence by default, with on-demand refresh available." },
  { q: "Is Google Business Profile integration supported?", a: "Yes. Connect your GBP once and the platform pulls insights, posts, reviews, and profile actions directly from Google." },
  { q: "Can I use the software without hiring MyPageSEO services?", a: "Absolutely. The software is a standalone product — use it independently, alongside our services, or with your existing team." },
];
