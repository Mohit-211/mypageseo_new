import { Check, Minus } from "lucide-react";
import { compareRows, plans } from "./pricing-data";

export function ComparisonTable() {
  return (
    <section className="bg-surface/60 border-y border-border/60">
      <div className="container-page py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">Compare plans</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">Every feature, side by side.</h2>
          <p className="mt-4 text-muted-foreground">
            A clear view of what each plan includes so you can choose with confidence.
          </p>
        </div>

        <div className="mt-10 overflow-x-auto rounded-2xl border border-border/70 bg-background shadow-card">
          <table className="w-full min-w-[720px] text-sm">
            <thead className="sticky top-0 bg-background">
              <tr className="border-b border-border/70">
                <th className="px-6 py-5 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Feature
                </th>
                {plans.map((p) => (
                  <th key={p.id} className="px-6 py-5 text-left">
                    <div className="flex items-center gap-2">
                      <p.icon className="h-4 w-4 text-accent" />
                      <span className="font-semibold text-foreground">{p.name}</span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {compareRows.map((row, i) => (
                <tr key={row.label} className={`border-b border-border/50 last:border-b-0 ${i % 2 === 1 ? "bg-surface/40" : ""}`}>
                  <td className="px-6 py-4 font-medium text-foreground">{row.label}</td>
                  {row.values.map((v, j) => (
                    <td key={j} className="px-6 py-4 text-muted-foreground">
                      {v === true ? (
                        <Check className="h-4 w-4 text-accent" />
                      ) : v === false ? (
                        <Minus className="h-4 w-4 text-muted-foreground/40" />
                      ) : (
                        <span>{v}</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
