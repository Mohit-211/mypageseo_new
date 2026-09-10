import { Check, Minus } from "lucide-react";
import { serviceCompareRows } from "./mypageseo-extras-data";

export function ServiceComparisonTable() {
  return (
    <section className="bg-surface/60 border-y border-border/60">
      <div className="container-page py-20">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            How we compare
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
            What you actually get with MyPageSEO.
          </h2>
        </div>

        <div className="mt-10 overflow-x-auto rounded-2xl border border-border/70 bg-background shadow-card">
          <table className="w-full min-w-[560px] text-sm">
            <thead>
              <tr className="border-b border-border/70">
                <th className="px-6 py-5 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Capability
                </th>
                <th className="px-6 py-5 text-left text-xs font-semibold uppercase tracking-wider text-accent">
                  MyPageSEO
                </th>
                <th className="px-6 py-5 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  DIY / Other Agencies
                </th>
              </tr>
            </thead>
            <tbody>
              {serviceCompareRows.map((row, i) => (
                <tr
                  key={row.label}
                  className={`border-b border-border/50 last:border-b-0 ${
                    i % 2 === 1 ? "bg-surface/40" : ""
                  }`}
                >
                  <td className="px-6 py-4 font-medium text-foreground">
                    {row.label}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 font-semibold text-foreground">
                      <Check
                        className="h-4 w-4 shrink-0 text-accent"
                        strokeWidth={3}
                      />
                      {row.ours}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Minus className="h-4 w-4 shrink-0 text-muted-foreground/40" />
                      {row.others}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-center text-xs text-muted-foreground">
          &quot;DIY / Other Agencies&quot; reflects common practice across the
          local SEO market, not any specific provider.
        </p>
      </div>
    </section>
  );
}
