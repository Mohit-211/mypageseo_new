import { stats } from "@/components/software/software-data";
import { StatItem } from "@/components/software/stat-item";

export function StatsSection() {
  return (
    <section className="py-20 md:py-24 bg-surface">
      <div className="container-page">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
          {stats.map((s) => (
            <StatItem key={s.l} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
