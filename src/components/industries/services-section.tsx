import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { industryServices } from "@/components/industries/industries-data";

export function ServicesSection() {
  return (
    <section className="bg-surface/60 border-y border-border/60">
      <div className="container-page py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">Services adapted per industry</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">Same services. Different execution.</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our service catalog stays consistent. How each service is scoped, prioritized, and delivered depends on
              your category, competitive landscape, and business model.
            </p>
            <Link
              href="/services"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors"
            >
              See all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {industryServices.map((s) => (
              <div
                key={s.t}
                className="flex items-center gap-3 rounded-xl border border-border/70 bg-background p-4 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-lift"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent">
                  <s.icon className="h-4 w-4" strokeWidth={1.75} />
                </span>
                <span className="text-sm font-medium text-foreground">{s.t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
