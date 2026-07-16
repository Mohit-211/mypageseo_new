import {
  Sparkles,
  Rocket,
  Crown,
  Building2,
  type LucideIcon,
} from "lucide-react";

export type PlanId = "base" | "standard" | "elite" | "enterprise";

export type Plan = {
  id: PlanId;
  icon: LucideIcon;
  name: string;
  price: number | null;
  setup: number;
  tagline: string;
  badge?: string;
};

export const plans: Plan[] = [
  {
    id: "base",
    icon: Sparkles,
    name: "Base",
    price: 499,
    setup: 299,
    tagline: "Single location businesses starting Local SEO.",
  },
  {
    id: "standard",
    icon: Rocket,
    name: "Standard",
    price: 999,
    setup: 499,
    tagline: "Growing businesses that need consistent optimization.",
    badge: "Most Popular",
  },
  {
    id: "elite",
    icon: Crown,
    name: "Elite",
    price: 2199,
    setup: 999,
    tagline: "Multi-location brands with deeper reporting needs.",
  },
  {
    id: "enterprise",
    icon: Building2,
    name: "Enterprise",
    price: null,
    setup: 0,
    tagline: "Custom programs for franchises and organizations.",
  },
];

export type Coupon = { pct: number; label: string };

export const coupons: Record<string, Coupon> = {
  LOCAL10: { pct: 10, label: "LOCAL10 — 10% off" },
  GROWTH20: { pct: 20, label: "GROWTH20 — 20% off first month" },
};

export type AppliedCoupon = { code: string; pct: number; label: string };

export type Pricing = {
  monthly: number;
  setup: number;
  discount: number;
  tax: number;
  total: number;
  recurring: number;
};

export function computePricing(plan: Plan, applied: AppliedCoupon | null): Pricing {
  const monthly = plan.price ?? 0;
  const setup = plan.setup;
  const discount = applied ? Math.round(monthly * (applied.pct / 100)) : 0;
  const subtotal = monthly - discount + setup;
  const tax = Math.round(subtotal * 0.0);
  const total = subtotal + tax;
  const recurring = monthly - discount;
  return { monthly, setup, discount, tax, total, recurring };
}
