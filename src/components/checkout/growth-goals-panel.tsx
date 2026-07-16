import { Panel } from "./panel";

export function GrowthGoalsPanel() {
  return (
    <Panel step="3" title="Your local growth goals" subtitle="Optional — but it helps us hit the ground running.">
      <label className="block">
        <span className="text-xs font-medium text-muted-foreground">
          Briefly describe what you want to achieve
        </span>
        <textarea
          rows={5}
          placeholder="Example: We want to rank in the map pack for HVAC repair across 3 metro areas, grow phone calls from Google, and manage reviews consistently across locations."
          className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 shadow-card/50 transition-all focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 resize-none"
        />
      </label>
    </Panel>
  );
}
