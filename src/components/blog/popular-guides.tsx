import { FileText } from "lucide-react";
import { GuideCard } from "./guide-card";
import { guides } from "./blog-data";

export function PopularGuides() {
  return (
    <section className="py-20 md:py-24 bg-surface">
      <div className="container-page">
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold text-accent uppercase tracking-wider mb-2 flex items-center gap-1">
            <FileText className="w-3.5 h-3.5" /> Popular guides
          </div>
          <h2 className="text-3xl md:text-4xl font-display text-foreground leading-tight">
            Deep, evergreen education for local businesses.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {guides.map((g, i) => (
            <GuideCard key={g.t} guide={g} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
