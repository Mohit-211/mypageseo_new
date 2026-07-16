const STEPS = ["Connect", "Configure", "Automate", "Report"];

export function WorkflowSteps({ isAccent }: { isAccent: boolean }) {
  return (
    <div className="relative">
      <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 blur-2xl -z-10" />
      <div className="rounded-2xl border border-border/70 bg-background p-6 shadow-lift">
        <div className="relative">
          <div className="absolute left-4 top-4 bottom-4 w-px bg-gradient-to-b from-accent/40 to-transparent" />
          <ol className="space-y-4">
            {STEPS.map((s, i) => (
              <li key={s} className="relative flex items-start gap-4">
                <span
                  className={`relative z-10 grid h-8 w-8 shrink-0 place-items-center rounded-full text-xs font-semibold ${
                    isAccent ? "bg-accent text-accent-foreground" : "bg-primary text-primary-foreground"
                  }`}
                >
                  {i + 1}
                </span>
                <div className="flex-1 rounded-xl border border-border/60 bg-surface/40 p-4">
                  <p className="text-sm font-semibold text-foreground">{s}</p>
                  <div className="mt-2 h-1.5 rounded-full bg-muted-foreground/15 overflow-hidden">
                    <div
                      className={`h-full ${isAccent ? "bg-accent" : "bg-primary"}`}
                      style={{ width: `${(i + 1) * 25}%` }}
                    />
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
