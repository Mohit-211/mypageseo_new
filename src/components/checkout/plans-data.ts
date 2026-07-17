// All plan data comes from the API (see hooks/use-subscription-plans.ts).
// This file only holds shared types + pricing math — no hardcoded plans.

export type PlanId = string;

export interface Plan {
  id: PlanId;
  name: string;
  tagline: string;
  badge: string | null;
  price: number | null; // null = custom/enterprise plan, priced by sales
  setup: number;
  icon: string;
}

// Mirrors validateCouponAPI's `data` shape exactly — no recomputing the
// discount client-side, just carry through what the server already validated.
export interface AppliedCoupon {
  code: string;
  label: string;
  originalAmount: number;
  discountAmount: number;
  finalAmount: number;
  monthlyAmount:number
}

export interface Pricing {
  monthly: number;
  discount: number;
  setup: number;
  tax: number;
  total: number;
  recurring: number;
}

export function computePricing(plan: Plan, applied: AppliedCoupon | null): Pricing {
  const setup = plan.setup ?? 0;

  // No static tax rate — wire this up from the API/checkout response
  // once the backend returns tax, instead of hardcoding a number here.
  const tax = 0;

  if (applied) {
    // Server already computed original/discount/final — just display them.
    // Assumption: the coupon discount applies to the first billing cycle only,
    // so "recurring" (future months) falls back to the plan's normal price.
    // If your coupon is meant to recur, change `recurring` to applied.finalAmount.
    console.log(applied,"applied===>>")
    const total = applied.finalAmount

    return {
      monthly: applied.monthlyAmount,
      discount: applied.discountAmount,
      setup,
      tax,
      total,
      recurring:total,
    };
  }

  const monthly = plan.price ?? 0;
  const total = monthly + setup + tax;
  return { monthly, discount: 0, setup, tax, total, recurring: monthly };
}