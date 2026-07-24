import { BadgeCheck, ChevronRight, Lock } from "lucide-react";
import { resolvePlanIcon } from "@/lib/plan-icons";
import type { AppliedCoupon, Plan, Pricing } from "./plans-data";

export function OrderSummary({
  plan,
  pricing,
  applied,
}: {
  plan: Plan;
  pricing: Pricing;
  applied: AppliedCoupon | null;
}) {
  const isCustom = plan.price === null;
  const PlanIcon = resolvePlanIcon(plan.icon);
  console.log(pricing, "pricing");
  return (
    <div className="rounded-3xl border border-border/70 bg-background p-6 shadow-lift">
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Order summary
        </p>
        <span className="rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-semibold text-accent">
          Subscription
        </span>
      </div>

      <div className="mt-5 flex items-center gap-3 rounded-2xl border border-border/60 bg-surface/40 p-4">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/5 text-primary">
          <PlanIcon className="h-5 w-5" strokeWidth={1.75} />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-foreground">
            {plan.name} Plan
          </p>
          <p className="text-xs text-muted-foreground">{plan.tagline}</p>
        </div>
      </div>

      {isCustom ? (
        <div className="mt-6 rounded-2xl border border-dashed border-border p-5 text-center">
          <p className="text-sm font-semibold text-foreground">
            Enterprise pricing
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            We&apos;ll build a custom quote based on your locations and scope.
          </p>
        </div>
      ) : (
        <>
          <dl className="mt-6 space-y-3 text-sm">
            <Row
              label="Monthly subscription"
              value={`$${pricing.monthly.toLocaleString()}`}
            />

            <Row
              label="One-time setup fee"
              value={`$${pricing.setup.toLocaleString()}`}
            />
            {/* <Row
              label="Taxes"
              value={pricing.tax > 0 ? `$${pricing.tax.toLocaleString()}` : "Calculated after"}
              muted
            /> */}
            {pricing.discount > 0 && (
              <Row
                label={`Coupon (${applied?.code})`}
                value={`-$${pricing.discount.toLocaleString()}`}
                accent
              />
            )}
          </dl>

          <div className="my-5 border-t border-border/60" />

          <div className="flex items-baseline justify-between">
            <span className="text-sm font-medium text-foreground">
              Due today
            </span>
            <span className="text-2xl font-semibold tracking-tight text-foreground transition-all">
              ${pricing.total.toLocaleString()}
            </span>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            Then{" "}
            <span className="font-semibold text-foreground">
              ${pricing.monthly.toLocaleString()}/month
            </span>
            , billed monthly.
          </p>
        </>
      )}

      <div className="mt-6 space-y-2.5 border-t border-border/60 pt-5">
        {[
          { icon: Lock, t: "Secure, encrypted payment" },
          { icon: BadgeCheck, t: "No hidden fees, transparent billing" },
          { icon: ChevronRight, t: "Upgrade or change plans anytime" },
        ].map((r) => (
          <div
            key={r.t}
            className="flex items-center gap-2.5 text-xs text-muted-foreground"
          >
            <r.icon className="h-3.5 w-3.5 text-accent shrink-0" />
            {r.t}
          </div>
        ))}
      </div>
    </div>
  );
}

function Row({
  label,
  value,
  muted,
  accent,
}: {
  label: string;
  value: string;
  muted?: boolean;
  accent?: boolean;
}) {
  return (
    <div className="flex items-center justify-between">
      <dt
        className={`text-sm ${
          muted ? "text-muted-foreground" : "text-foreground/80"
        }`}
      >
        {label}
      </dt>
      <dd
        className={`text-sm font-medium ${
          accent ? "text-accent" : "text-foreground"
        }`}
      >
        {value}
      </dd>
    </div>
  );
}
