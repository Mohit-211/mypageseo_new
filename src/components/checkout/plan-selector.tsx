"use client";

import { Check } from "lucide-react";
import { Panel } from "./panel";
import { plans, type PlanId } from "./plans-data";

export function PlanSelector({
  planId,
  onSelect,
}: {
  planId: PlanId;
  onSelect: (id: PlanId) => void;
}) {
  return (
    <Panel step="1" title="Select your plan" subtitle="You can upgrade or change plans anytime.">
      <div className="space-y-3">
        {plans.map((p) => {
          const selected = p.id === planId;
          return (
            <button
              key={p.id}
              type="button"
              onClick={() => onSelect(p.id)}
              className={`group w-full text-left rounded-2xl border p-5 transition-all duration-200 ${
                selected
                  ? "border-accent/60 bg-background shadow-lift ring-1 ring-accent/20 -translate-y-0.5"
                  : "border-border/70 bg-background hover:border-border hover:shadow-card"
              }`}
            >
              <div className="flex items-center gap-4">
                <span
                  className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl transition-colors ${
                    selected ? "bg-accent/10 text-accent" : "bg-primary/5 text-primary"
                  }`}
                >
                  <p.icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm font-semibold text-foreground">{p.name}</span>
                    {p.badge && (
                      <span className="rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent">
                        {p.badge}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">{p.tagline}</p>
                </div>
                <div className="text-right shrink-0">
                  {p.price !== null ? (
                    <>
                      <p className="text-base font-semibold text-foreground">
                        ${p.price}
                        <span className="text-xs font-normal text-muted-foreground">/mo</span>
                      </p>
                      <p className="text-[11px] text-muted-foreground">+ ${p.setup} setup</p>
                    </>
                  ) : (
                    <p className="text-base font-semibold text-foreground">Custom</p>
                  )}
                </div>
                <span
                  className={`ml-2 grid h-5 w-5 shrink-0 place-items-center rounded-full border transition-all ${
                    selected ? "border-accent bg-accent text-accent-foreground" : "border-border"
                  }`}
                >
                  {selected && <Check className="h-3 w-3" strokeWidth={3} />}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </Panel>
  );
}
