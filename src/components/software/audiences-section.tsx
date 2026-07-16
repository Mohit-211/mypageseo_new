import { audiences } from "@/components/software/software-data";

export function AudiencesSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-medium text-accent uppercase tracking-wider mb-3">
            Built for
          </div>
          <h2 className="text-3xl md:text-5xl font-display text-foreground leading-tight">
            Who runs on MyPageSEO Software.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {audiences.map((a) => (
            <div
              key={a.t}
              className="rounded-2xl bg-card ring-soft p-5 hover:shadow-lift hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-primary-soft flex items-center justify-center mb-3">
                <a.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-sm mb-1.5">
                {a.t}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {a.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
