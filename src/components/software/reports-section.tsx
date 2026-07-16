import { reports } from "@/components/software/software-data";

export function ReportsSection() {
  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="container-page">
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-medium text-accent uppercase tracking-wider mb-3">
            Report library
          </div>
          <h2 className="text-3xl md:text-5xl font-display text-foreground leading-tight">
            Reports designed for clarity and confidence.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reports.map((r, i) => (
            <div
              key={r.t}
              className="group rounded-2xl bg-card ring-soft overflow-hidden hover:shadow-lift hover:-translate-y-1 transition-all duration-300"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-primary-soft to-surface-muted p-4 relative overflow-hidden">
                <div className="absolute inset-3 rounded-xl bg-card ring-soft p-3 flex flex-col gap-1.5">
                  <div className="h-1.5 w-2/3 rounded bg-primary/60" />
                  <div className="h-1 w-1/2 rounded bg-primary/20" />
                  <div className="flex-1 grid grid-cols-3 gap-1 mt-2">
                    {Array.from({ length: 6 }).map((_, k) => (
                      <div
                        key={k}
                        className="rounded bg-primary-soft"
                        style={{ opacity: 0.4 + (k % 3) * 0.2 }}
                      />
                    ))}
                  </div>
                  <div className="h-4 rounded bg-primary/10 mt-1" />
                </div>
                <div className="absolute top-2 right-2 text-[9px] font-semibold text-accent bg-card px-1.5 py-0.5 rounded">
                  #{String(i + 1).padStart(2, "0")}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-foreground mb-1.5">{r.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {r.d}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
