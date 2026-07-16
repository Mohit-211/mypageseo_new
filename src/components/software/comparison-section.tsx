import { X, Check } from "lucide-react";

const MANUAL = [
  "Days of manual data collection",
  "Inconsistent methodology across audits",
  "Static spreadsheets and screenshots",
  "Point-in-time snapshots, no trends",
  "Copy-paste recommendations",
  "Hard to scale across locations",
  "Client-unfriendly presentation",
];

const SOFTWARE = [
  "Reports generated in minutes",
  "Consistent, weighted scoring model",
  "Interactive dashboards and trends",
  "Continuous monitoring, always current",
  "Prioritized, contextual recommendations",
  "Scales from one location to hundreds",
  "Polished, white-label ready reports",
];

export function ComparisonSection() {
  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="container-page">
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-medium text-accent uppercase tracking-wider mb-3">Why software</div>
          <h2 className="text-3xl md:text-5xl font-display text-foreground leading-tight">
            More than a spreadsheet. More than an audit.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-card ring-soft p-8">
            <div className="text-sm font-semibold text-muted-foreground mb-5">Manual Local SEO analysis</div>
            <ul className="space-y-3">
              {MANUAL.map((t) => (
                <li key={t} className="flex items-start gap-2.5 text-sm text-foreground/70">
                  <X className="w-4 h-4 text-muted-foreground/70 mt-0.5 flex-shrink-0" /> {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-primary text-primary-foreground p-8 shadow-lift relative overflow-hidden">
            <div aria-hidden className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-accent/20 blur-3xl" />
            <div className="relative">
              <div className="text-sm font-semibold text-primary-foreground/70 mb-5">MyPageSEO Software</div>
              <ul className="space-y-3">
                {SOFTWARE.map((t) => (
                  <li key={t} className="flex items-start gap-2.5 text-sm">
                    <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" /> {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
