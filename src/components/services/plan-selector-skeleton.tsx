// plan-selector-skeleton.tsx
export function PlanSelectorSkeleton() {
  return (
    <div className="grid gap-4 sm:grid-cols-3" aria-hidden>
      {[0].map((i) => (
        <div
          key={i}
          className="h-40 animate-pulse rounded-2xl border border-border bg-muted/40"
        />
      ))}
    </div>
  );
}