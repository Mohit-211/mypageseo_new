import { Sparkles, Rocket, Crown, type LucideIcon } from "lucide-react";

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
    tagline: "Your foundation for getting found locally.",
    cta: "Start with Base",
    features: [
      "Local SEO Audit",
      "Google Business Profile Optimization",
      "Citation Building & Management",
      "Monthly GBP Posts & Updates",
      "8 Keywords",
      "Keyword Rank Tracking",
      "Monthly Performance Reporting",
      "Priority Support",
      "No Contract — Cancel Anytime",
    ],
  },

  {
    id: "standard",
    icon: Rocket,
    name: "Standard",
    tagline: "Built to put your business ahead locally.",
    cta: "Choose Standard",
    popular: true,
    inherits: "Base",
    features: [
      "Local SEO Audit",
      "Google Business Profile Optimization",
      "Citation Building & Management",
      "Monthly GBP Posts & Updates",
      "12 Keywords",
      "Keyword Rank Tracking",
      "Monthly Performance Reporting",
      "Priority Support",
      "No Contract — Cancel Anytime",
    ],
  },

  {
    id: "elite",
    icon: Crown,
    name: "Elite",
    tagline: "Maximum visibility for businesses ready to dominate.",
    cta: "Choose Elite",
    inherits: "Standard",
    features: [
      "Local SEO Audit",
      "Google Business Profile Optimization",
      "Citation Building & Management",
      "Monthly GBP Posts & Updates",
      "16 Keywords",
      "Keyword Rank Tracking",
      "Monthly Performance Reporting",
      "Priority Support",
      "No Contract - Cancel Anytime",
    ],
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
];
