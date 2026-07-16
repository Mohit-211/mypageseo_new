import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { services } from "@/lib/home-data";

export function ServicesSection() {
  return (
    <section className="container-page py-20 md:py-28">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 max-w-4xl">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-accent">
            Services
          </div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl tracking-tight">
            Everything Local SEO. Nothing else.
          </h2>
        </div>
        <p className="md:max-w-sm text-muted-foreground leading-relaxed">
          One team, one focus. Every service designed to make your business the
          obvious choice when someone nearby is ready to buy.
        </p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => (
          <div
            key={s.t}
            className="group relative rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-lift"
          >
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <s.icon className="h-5 w-5" strokeWidth={1.75} />
            </span>
            <h3 className="mt-5 text-[15px] font-semibold text-foreground leading-snug">
              {s.t}
            </h3>
            <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
              {s.d}
            </p>
            <ArrowUpRight className="absolute right-5 top-5 h-4 w-4 text-muted-foreground opacity-0 -translate-y-1 transition-all group-hover:opacity-100 group-hover:translate-y-0" />
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground hover:bg-surface-muted"
        >
          View All Services <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
