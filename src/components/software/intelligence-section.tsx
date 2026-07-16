import {
  Check,
  MapPin,
  Link2,
  FileBarChart,
  Star,
  Building2,
} from "lucide-react";
import { BrowserFrame } from "@/components/software/ui-primitives";

const CHECKLIST = [
  "Detects missing services, categories, and photos on your GBP",
  "Flags citation mismatches before they hurt your rankings",
  "Prioritizes recommendations by expected impact on local visibility",
  "Surfaces competitor moves that require a response",
];

const RECOMMENDATIONS = [
  {
    p: "High impact",
    t: "Add 8 service-area cities to your GBP",
    icon: MapPin,
  },
  {
    p: "High impact",
    t: "Fix NAP mismatch on Yelp & Yellow Pages",
    icon: Link2,
  },
  { p: "Medium", t: "Publish 3 GBP posts this week", icon: FileBarChart },
  { p: "Medium", t: "Respond to 6 unanswered reviews", icon: Star },
  { p: "Low", t: "Upload 4 team photos to your profile", icon: Building2 },
];

export function IntelligenceSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <div className="text-xs font-medium text-accent uppercase tracking-wider mb-3">
            Actionable intelligence
          </div>
          <h2 className="text-3xl md:text-5xl font-display text-foreground leading-tight">
            It doesn't just show numbers. It tells you what to do next.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
            The platform surfaces issues, prioritizes recommendations, and
            highlights opportunities that actually deserve your attention. Every
            insight comes with the context you need to act — no data-science
            degree required.
          </p>
          <div className="mt-6 space-y-3">
            {CHECKLIST.map((t) => (
              <div key={t} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-accent" />
                </div>
                <span className="text-sm text-foreground/85">{t}</span>
              </div>
            ))}
          </div>
        </div>
        <BrowserFrame title="Priority Recommendations">
          <div className="space-y-2.5">
            {RECOMMENDATIONS.map((r, i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-xl bg-surface-muted px-3.5 py-3"
              >
                <r.icon className="w-4 h-4 text-primary flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-foreground truncate">
                    {r.t}
                  </div>
                  <div className="text-[10px] text-muted-foreground">{r.p}</div>
                </div>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                    r.p === "High impact"
                      ? "bg-accent/10 text-accent"
                      : r.p === "Medium"
                      ? "bg-amber-500/10 text-amber-700"
                      : "bg-primary-soft text-primary"
                  }`}
                >
                  {r.p}
                </span>
              </div>
            ))}
          </div>
        </BrowserFrame>
      </div>
    </section>
  );
}
