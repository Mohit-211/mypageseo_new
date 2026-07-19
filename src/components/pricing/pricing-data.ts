import {
  Sparkles,
  Rocket,
  Crown,
  Building2,
  LineChart,
  MapPin,
  ShieldCheck,
  Gauge,
  Users,
  Zap,
  BarChart3,
  type LucideIcon,
} from "lucide-react";

export type Plan = {
  id: "base" | "standard" | "elite";
  icon: LucideIcon;
  name: string;
  tagline: string;
  cta: string;
  popular?: boolean;
  features: string[];
  inherits?: string;
};

export const plans: Plan[] = [
  {
    id: "base",
    icon: Sparkles,
    name: "Base",
    tagline:
      "For businesses starting their Local SEO journey at a single location.",
    cta: "Start with Base",
    features: [
      "Local SEO audit of your website & Google Business Profile",
      "Google Business Profile setup & full optimization",
      "Keyword rank tracking report",
      "Optimization for 7 keywords",
      "Local SEO setup for one business location",
      "Business listing correction across 2+ local directories",
      "3 Google Business Profile posts every month",
      "Monthly performance report",
      "Email support",
    ],
  },
  {
    id: "standard",
    icon: Rocket,
    name: "Standard",
    tagline: "Consistent growth and visibility for your core location",
    cta: "Choose Standard",
    popular: true,
    inherits: "Base",
    features: [
      "Everything in Base +",
      "Optimization for 15 keywords",
      "Local SEO setup for up to 3 business locations",
      "Business listing correction across 5+ local directories",
      "7 Google Business Profile posts every month",
      "Monthly strategy call",
      "Priority support",
    ],
  },
  {
    id: "elite",
    icon: Crown,
    name: "Elite",
    tagline: "Scale your visibility across multiple locations effortlessly",
    cta: "Choose Elite",
    inherits: "Standard",
    features: [
      "Everything in Standard +",
      "Optimization for 25 keywords",
      "Local SEO setup for up to 5 business locations",
      "Business listing correction across multiple directories",
      "12 Google Business Profile posts every month",
      "Bi-weekly strategy call",
      "Dedicated account manager",
    ],
  },
];

export const compareRows: { label: string; values: (string | boolean)[] }[] = [
  {
    label: "Business locations",
    values: ["1", "Up to 3", "Up to 10", "Unlimited"],
  },
  { label: "Local keywords tracked", values: ["10", "30", "100", "Custom"] },
  { label: "GBP optimization", values: [true, true, true, true] },
  {
    label: "Citation management",
    values: ["Top 20", "60+", "Full network", "Custom"],
  },
  { label: "Review monitoring", values: [false, true, true, true] },
  { label: "GBP posting", values: [false, "4 / mo", "Weekly", "Custom"] },
  {
    label: "Local landing pages",
    values: [false, "Quarterly", "Monthly", "Custom"],
  },
  {
    label: "Reporting cadence",
    values: ["Monthly", "Bi-weekly", "Weekly", "Real-time"],
  },
  { label: "Software dashboard access", values: [true, true, true, true] },
  {
    label: "Strategy sessions",
    values: [false, "Quarterly", "Monthly", "Executive QBRs"],
  },
  { label: "Dedicated account manager", values: [false, false, true, true] },
  { label: "API integrations", values: [false, false, false, true] },
  {
    label: "Support",
    values: ["Email", "Priority email", "Priority + phone", "SLA-backed"],
  },
];

export const included = [
  {
    icon: BarChart3,
    title: "Transparent reporting",
    copy: "Clear dashboards showing exactly what changed and what it means for your business.",
  },
  {
    icon: Gauge,
    title: "Continuous monitoring",
    copy: "We watch rankings, listings, and reviews around the clock so issues never linger.",
  },
  {
    icon: MapPin,
    title: "GBP optimization",
    copy: "Ongoing profile tuning — categories, services, photos, and posts — to stay competitive.",
  },
  {
    icon: LineChart,
    title: "MyPageSEO Software",
    copy: "Every plan includes access to our proprietary Local SEO reporting platform.",
  },
  {
    icon: ShieldCheck,
    title: "Measurable performance",
    copy: "Track calls, direction requests, and qualified leads — not vanity metrics.",
  },
  {
    icon: Users,
    title: "Dedicated onboarding",
    copy: "A guided 30-day launch with a Local SEO specialist ensures a strong start.",
  },
  {
    icon: Sparkles,
    title: "Expert guidance",
    copy: "Real Local SEO strategists — not chatbots — answering questions and shaping strategy.",
  },
  {
    icon: Zap,
    title: "Software-first workflow",
    copy: "Automation handles the heavy lifting so your team focuses on growth decisions.",
  },
];

export const testimonials = [
  {
    quote:
      "Calls from Google Maps doubled in the first three months. The reporting made it obvious where the growth came from.",
    name: "Marissa Chen",
    role: "Owner, Northside Dental",
  },
  {
    quote:
      "We manage 14 locations. MyPageSEO is the first partner that actually made multi-location reporting understandable.",
    name: "David Alvarez",
    role: "Marketing Director, Regional HVAC Group",
  },
  {
    quote:
      "Our direction requests are up 3x and we finally rank in the map pack for our core service areas.",
    name: "Priya Shah",
    role: "Founder, Bloom Wellness Studio",
  },
];

export const faqs = [
  {
    q: "Are there any long-term contracts?",
    a: "No. Plans are month-to-month after your initial 90-day foundation period, which ensures results have time to compound.",
  },
  {
    q: "What is your cancellation policy?",
    a: "Cancel anytime after the initial 90 days with 30 days' written notice. No penalties, no drama.",
  },
  {
    q: "How long does onboarding take?",
    a: "Most businesses are fully onboarded within 14 days. Multi-location Elite programs typically launch inside 30 days.",
  },
  {
    q: "Why is there a setup fee?",
    a: "The one-time fee covers your Local SEO audit, technical foundation, citation cleanup, and dashboard configuration.",
  },
  {
    q: "Do I get access to your software?",
    a: "Yes. Every plan — including Base — includes access to the MyPageSEO reporting dashboard.",
  },
  {
    q: "Can I upgrade my plan later?",
    a: "Absolutely. Upgrades are prorated and take effect at the start of your next billing cycle.",
  },
  {
    q: "I have multiple locations — do I need Elite or Enterprise?",
    a: "Standard covers up to 3 locations. Elite fits 4–10. Enterprise is right for 10+ or franchise / multi-brand programs.",
  },
  {
    q: "Is a consultation included before I sign up?",
    a: "Yes — every prospect receives a free 30-minute Local SEO consultation with a strategist.",
  },
];
