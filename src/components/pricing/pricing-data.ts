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
    a: "No. All MyPageSEO plans are month-to-month with no long-term contracts. Stay because you see results, not because you're locked into an agreement.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. You can cancel your subscription whenever you like. There are no cancellation penalties or hidden exit fees.",
  },
  {
    q: "Why is there a one-time setup fee?",
    a: "The setup fee covers your Local SEO audit, Google Business Profile optimization, technical setup, citation work, reporting dashboard configuration, and campaign onboarding.",
  },
  {
    q: "How long does it take to get started?",
    a: "Most businesses are fully onboarded within 5–10 business days. More complex or multi-location projects may take a little longer.",
  },
  {
    q: "Do all plans include the MyPageSEO dashboard?",
    a: "Yes. Every plan includes access to your reporting dashboard so you can track rankings, visibility, and campaign progress in one place.",
  },
  {
    q: "Can I change my plan later?",
    a: "Absolutely. You can upgrade or downgrade your plan as your business grows. We'll make the transition smooth with no disruption to your campaign.",
  },
  {
    q: "Do you work with businesses that have multiple locations?",
    a: "Yes. We manage everything from single-location businesses to multi-location brands and franchises. Our higher-tier plans are designed specifically for businesses with multiple locations.",
  },
  {
    q: "What happens after I sign up?",
    a: "Once you subscribe, we'll schedule your onboarding, gather your business information, perform an SEO audit, and begin implementing your Local SEO strategy. You'll also receive access to your reporting dashboard.",
  },
  {
    q: "When will I start seeing results?",
    a: "Local SEO is a long-term growth strategy. Many businesses notice improvements within the first few months, while stronger and more sustainable results typically build over time.",
  },
  // {
  //   q: "Do you guarantee #1 rankings on Google?",
  //   a: "No. Any agency promising guaranteed #1 rankings isn't being honest. What we do guarantee is a transparent, data-driven Local SEO strategy built on proven best practices.",
  // },
];
