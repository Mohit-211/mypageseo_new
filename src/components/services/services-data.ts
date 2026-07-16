import {
  MapPin,
  Building2,
  ShieldCheck,
  Layers,
  Search,
  Star,
  Globe,
  BarChart3,
  Wrench,
  Megaphone,
  Share2,
  MessageSquare,
  PenLine,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  name: string;
  icon: LucideIcon;
  tagline: string;
  intro: string;
  personality: string;
  features: { icon: LucideIcon; title: string; copy: string }[];
  useCases: string[];
  faqs: { q: string; a: string }[];
  accent: string; // color hint
};

export const services: Service[] = [
  {
    slug: "mypageseo",
    name: "MyPageSEO",
    icon: MapPin,
    tagline: "The flagship Local SEO platform.",
    intro:
      "GBP audits, citation reports, local rankings, and business visibility analytics — the reporting layer beneath every MyPageSEO service engagement, and available standalone.",
    personality: "Command center for local visibility.",
    features: [
      { icon: Building2, title: "GBP audits", copy: "Score, monitor, and improve every Google Business Profile." },
      { icon: BarChart3, title: "Geo-grid rankings", copy: "Track rank across dozens of points in your service area." },
      { icon: ShieldCheck, title: "Citation reports", copy: "See NAP consistency across every important directory." },
      { icon: Star, title: "Visibility analytics", copy: "Impressions, actions, and calls in one live dashboard." },
    ],
    useCases: ["Local SEO teams", "Multi-location operators", "Agencies (white-label)"],
    faqs: [
      { q: "Is MyPageSEO included with services?", a: "Yes — every service plan includes access to the MyPageSEO dashboard." },
      { q: "Can I use it standalone?", a: "Yes. Standalone software plans are available for teams that self-manage Local SEO." },
    ],
    accent: "primary",
  },
  {
    slug: "mypageads",
    name: "MyPageAds",
    icon: Megaphone,
    tagline: "Local advertising across every location.",
    intro:
      "A platform for managing local ad campaigns across Google, Meta, and Microsoft — with location-aware performance reporting built for multi-market brands.",
    personality: "Advertising for businesses that live and die by geography.",
    features: [
      { icon: Layers, title: "Multi-location campaigns", copy: "Launch and manage ads across dozens of locations from one console." },
      { icon: BarChart3, title: "Location-level ROI", copy: "See spend, leads, and cost-per-call by market." },
      { icon: Search, title: "Local audience targeting", copy: "Radius, demo, and intent targeting tuned per location." },
      { icon: Star, title: "Creative library", copy: "Reusable local creative with dynamic geo tokens." },
    ],
    useCases: ["Franchise networks", "Multi-location home services", "Multi-market medical practices"],
    faqs: [
      { q: "Which ad platforms are supported?", a: "Google Ads, Meta, and Microsoft Advertising, with more on the roadmap." },
      { q: "Is ad spend managed?", a: "Ad spend is billed directly by the platforms. MyPageAds is the management and reporting layer." },
    ],
    accent: "accent",
  },
  {
    slug: "mypagesmo",
    name: "MyPageSMO",
    icon: Share2,
    tagline: "Local social media, managed at scale.",
    intro:
      "Publish, schedule, and engage across every location's social presence — with local-content templates and per-location performance tracking.",
    personality: "Social media that finally understands geography.",
    features: [
      { icon: PenLine, title: "Bulk scheduling", copy: "Schedule per-location content in seconds." },
      { icon: MessageSquare, title: "Unified inbox", copy: "Respond to messages, comments, and mentions across every location." },
      { icon: BarChart3, title: "Local engagement analytics", copy: "See what's working per location, per platform." },
      { icon: Layers, title: "Content templates", copy: "Reusable templates with per-location tokens." },
    ],
    useCases: ["Franchise systems", "Regional retailers", "Restaurant groups"],
    faqs: [
      { q: "Which networks are supported?", a: "Google Business Profile, Facebook, Instagram, and LinkedIn." },
      { q: "Does it integrate with MyPageSEO?", a: "Yes — engagement data feeds back into your MyPageSEO visibility dashboard." },
    ],
    accent: "primary",
  },
  {
    slug: "mypagereputation",
    name: "MyPageReputation",
    icon: MessageSquare,
    tagline: "Reviews and reputation, on autopilot.",
    intro:
      "Generate, monitor, and respond to customer reviews across Google, Facebook, and category-specific platforms — with sentiment analytics per location.",
    personality: "Reputation as a system, not a fire drill.",
    features: [
      { icon: Star, title: "Review invitations", copy: "SMS and email requests sent at the moment of highest goodwill." },
      { icon: MessageSquare, title: "Response manager", copy: "Craft, approve, and track responses across every platform." },
      { icon: BarChart3, title: "Sentiment analytics", copy: "See sentiment shift over time, per location and category." },
      { icon: ShieldCheck, title: "Negative alerts", copy: "Real-time alerts on 1–3 star reviews so you never miss one." },
    ],
    useCases: ["Multi-location brands", "Medical practices", "Restaurant groups"],
    faqs: [
      { q: "Do you handle review responses?", a: "You can, or our team can — response operations are available as a managed service." },
      { q: "What platforms are supported?", a: "Google, Facebook, Yelp, and 20+ category-specific platforms." },
    ],
    accent: "accent",
  },
  {
    slug: "mypagecontent",
    name: "MyPageContent",
    icon: PenLine,
    tagline: "AI-assisted local content.",
    intro:
      "Produce locally optimized landing pages, blogs, service pages, and GBP posts at scale — with human oversight and Local SEO structure baked in.",
    personality: "Local content that ranks, without the content-mill feel.",
    features: [
      { icon: Layers, title: "City + service pages", copy: "Generate and refine local pages in minutes, not weeks." },
      { icon: PenLine, title: "GBP post automation", copy: "AI-drafted GBP posts you can approve and schedule." },
      { icon: Search, title: "Local keyword integration", copy: "Content built around your MyPageSEO keyword map." },
      { icon: ShieldCheck, title: "Human review", copy: "Editorial review keeps every output brand-safe." },
    ],
    useCases: ["Multi-location content teams", "Agencies", "Content-lean marketing teams"],
    faqs: [
      { q: "Is it pure AI?", a: "AI-assisted, human-reviewed. We don't publish unedited AI output." },
      { q: "Does Google penalize this content?", a: "No — Google penalizes low-quality content, not AI-assisted content. Ours is edited, structured, and locally specific." },
    ],
    accent: "primary",
  },
  {
    slug: "mypagesites",
    name: "MyPageSites",
    icon: Globe,
    tagline: "Fast websites built Local SEO-first.",
    intro:
      "A modern website platform focused on conversion and Local SEO — from single-location businesses to multi-location brands with per-location pages.",
    personality: "Websites engineered for calls, not aesthetics-only.",
    features: [
      { icon: Wrench, title: "LocalBusiness schema built-in", copy: "Every page ships with correct structured data." },
      { icon: BarChart3, title: "Core Web Vitals guaranteed", copy: "Green scores out of the box on mobile and desktop." },
      { icon: Layers, title: "Per-location pages", copy: "Scale from one site to dozens of location pages without duplication." },
      { icon: Star, title: "Conversion-first design", copy: "Every template built to drive a call, form, or booking." },
    ],
    useCases: ["New site builds", "Rebuilds for underperforming sites", "Multi-location brand rollouts"],
    faqs: [
      { q: "Do I own my site?", a: "Yes. Full data and content export if you ever want to leave." },
      { q: "Can I migrate an existing site?", a: "Yes — we handle content, redirects, and SEO migration." },
    ],
    accent: "accent",
  },
];

export const getServiceBySlug = (slug: string) => services.find((s) => s.slug === slug);
