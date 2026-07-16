"use client";

import { useState } from "react";
import { ArrowRight, BadgeCheck, CreditCard, Info, Tag } from "lucide-react";
import { Panel } from "./panel";
import { Field } from "./form-field";
import { coupons, type AppliedCoupon } from "./plans-data";

const cardBrands = ["Visa", "MC", "AmEx", "Disc"];

export function PaymentPanel({
  isCustom,
  submitting,
  applied,
  onApplyCoupon,
}: {
  isCustom: boolean;
  submitting: boolean;
  applied: AppliedCoupon | null;
  onApplyCoupon: (coupon: AppliedCoupon | null) => void;
}) {
  const [couponOpen, setCouponOpen] = useState(false);
  const [couponInput, setCouponInput] = useState("");
  const [couponError, setCouponError] = useState<string | null>(null);

  function applyCoupon() {
    const code = couponInput.trim().toUpperCase();
    if (!code) return;
    if (coupons[code]) {
      onApplyCoupon({ code, ...coupons[code] });
      setCouponError(null);
    } else {
      onApplyCoupon(null);
      setCouponError("That code isn't valid. Please try another.");
    }
  }

  return (
    <Panel step="4" title="Payment" subtitle="Encrypted end-to-end. Cancel anytime after your foundation period.">
      <div className="mb-6">
        {!couponOpen ? (
          <button
            type="button"
            onClick={() => setCouponOpen(true)}
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors"
          >
            <Tag className="h-4 w-4" />
            Have a coupon code?
          </button>
        ) : (
          <div className="animate-fade-in">
            <label className="text-xs font-medium text-muted-foreground">Coupon code</label>
            <div className="mt-2 flex gap-2">
              <input
                value={couponInput}
                onChange={(e) => {
                  setCouponInput(e.target.value);
                  setCouponError(null);
                }}
                placeholder="Enter code (try LOCAL10)"
                className="flex-1 rounded-xl border border-border bg-background px-4 py-3 text-sm uppercase tracking-wider text-foreground placeholder:normal-case placeholder:tracking-normal placeholder:text-muted-foreground/60 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
              />
              <button
                type="button"
                onClick={applyCoupon}
                className="rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-card transition-all hover:-translate-y-0.5 hover:shadow-lift"
              >
                Apply
              </button>
            </div>
            {applied && (
              <p className="mt-2 flex items-center gap-1.5 text-xs font-medium text-accent animate-fade-in">
                <BadgeCheck className="h-3.5 w-3.5" /> {applied.label} applied
              </p>
            )}
            {couponError && (
              <p className="mt-2 flex items-center gap-1.5 text-xs text-destructive">
                <Info className="h-3.5 w-3.5" /> {couponError}
              </p>
            )}
          </div>
        )}
      </div>

      <div className="rounded-2xl border border-border/70 bg-surface/40 p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm font-medium text-foreground">
            <CreditCard className="h-4 w-4 text-accent" />
            Card details
          </div>
          <div className="flex items-center gap-1.5">
            {cardBrands.map((b) => (
              <span
                key={b}
                className="rounded-md border border-border/60 bg-background px-2 py-1 text-[10px] font-semibold text-muted-foreground"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-4 grid gap-3">
          <Field label="Card number" name="card" placeholder="1234 5678 9012 3456" />
          <div className="grid grid-cols-2 gap-3">
            <Field label="Expiry" name="exp" placeholder="MM / YY" />
            <Field label="CVC" name="cvc" placeholder="123" />
          </div>
          <Field label="Cardholder name" name="holder" />
        </div>
      </div>

      <p className="mt-6 text-xs text-muted-foreground leading-relaxed">
        By proceeding, you agree to our{" "}
        <a href="#" className="text-primary underline-offset-4 hover:underline">
          Terms &amp; Conditions
        </a>{" "}
        and{" "}
        <a href="#" className="text-primary underline-offset-4 hover:underline">
          Privacy Policy
        </a>
        .
      </p>

      <button
        type="submit"
        disabled={submitting || isCustom}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 text-sm font-semibold text-accent-foreground shadow-lift transition-all hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0"
      >
        {submitting ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-accent-foreground/30 border-t-accent-foreground" />
            Processing…
          </>
        ) : isCustom ? (
          <>
            Contact sales for Enterprise pricing <ArrowRight className="h-4 w-4" />
          </>
        ) : (
          <>
            Start My Local SEO Journey <ArrowRight className="h-4 w-4" />
          </>
        )}
      </button>
      {isCustom && (
        <p className="mt-3 text-center text-xs text-muted-foreground">
          Enterprise plans are custom-scoped. Our team will reach out within one business day.
        </p>
      )}
    </Panel>
  );
}
