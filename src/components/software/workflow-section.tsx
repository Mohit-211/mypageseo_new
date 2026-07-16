import { workflow } from "@/components/software/software-data";

export function WorkflowSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-medium text-accent uppercase tracking-wider mb-3">
            Reporting ecosystem
          </div>
          <h2 className="text-3xl md:text-5xl font-display text-foreground leading-tight">
            From raw Local SEO data to practical business decisions.
          </h2>
        </div>
        <div className="relative">
          <div
            aria-hidden
            className="hidden lg:block absolute top-8 left-8 right-8 h-px bg-gradient-to-r from-primary/10 via-primary/40 to-primary/10"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 relative">
            {workflow.map((w, i) => (
              <div key={w.t} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-card ring-soft shadow-card flex items-center justify-center mb-3 relative z-10">
                  <w.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-xs font-semibold text-accent mb-1">
                  Step {i + 1}
                </div>
                <div className="text-sm font-medium text-foreground">{w.t}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
