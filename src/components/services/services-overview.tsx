import { ArrowRight, Sparkles, Layers, Zap, Cpu } from "lucide-react";
import { services } from "@/components/services/services-data";
import { ServiceShowcaseIllustration } from "@/components/services/service-illustrations";

export function ServicesOverview() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-surface via-background to-background" />
        <div
          className="absolute inset-x-0 top-0 -z-10 h-[520px] opacity-70"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 0%, color-mix(in oklab, var(--color-primary) 12%, transparent), transparent 70%)",
          }}
        />
        <div className="container-page pt-24 pb-16 md:pt-28 md:pb-20 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/80 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            One ecosystem for Local Growth
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight text-foreground max-w-4xl mx-auto">
            Expert Local SEO. Proprietary software. One ecosystem.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            MyPageSEO combines specialist services with an integrated suite of software products — built specifically for
            businesses competing in local search across the United States and Canada.
          </p>

          {/* Ecosystem preview */}
          <div className="mt-14 relative mx-auto max-w-4xl">
            <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-primary/10 via-transparent to-accent/10 blur-2xl" />
            <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-6">
              {services.map((s) => (
                <a
                  key={s.slug}
                  href={`#${s.slug}`}
                  className="rounded-2xl border border-border/70 bg-background p-4 shadow-card transition-all hover:-translate-y-1 hover:shadow-lift"
                >
                  <span
                    className={`grid h-10 w-10 mx-auto place-items-center rounded-xl ${
                      s.accent === "accent" ? "bg-accent/10 text-accent" : "bg-primary/5 text-primary"
                    }`}
                  >
                    <s.icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <p className="mt-3 text-[11px] font-semibold text-foreground">{s.name}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY ECOSYSTEM */}
      <section className="bg-surface/60 border-y border-border/60">
        <div className="container-page py-20 grid gap-6 md:grid-cols-3">
          {[
            { icon: Layers, t: "Built to work together", c: "Data flows between products so your team sees the whole picture, not six disconnected reports." },
            { icon: Zap, t: "One login, one experience", c: "A unified interface, roles, and billing across every product in the ecosystem." },
            { icon: Cpu, t: "Local search-first", c: "Every product is designed around the realities of Local SEO — not generic marketing." },
          ].map((x) => (
            <div key={x.t} className="rounded-3xl border border-border/70 bg-background p-7 shadow-card">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/10 text-accent">
                <x.icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <h3 className="mt-4 text-base font-semibold text-foreground">{x.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{x.c}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICE SHOWCASE (alternating summary, links jump down to full detail section) */}
      <section className="container-page py-24 space-y-24">
        {services.map((s, i) => {
          const reverse = i % 2 === 1;
          return (
            <div
              key={s.slug}
              className={`grid gap-12 lg:grid-cols-2 items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              <div>
                <div className="flex items-center gap-3">
                  <span
                    className={`grid h-12 w-12 place-items-center rounded-2xl ${
                      s.accent === "accent" ? "bg-accent/10 text-accent" : "bg-primary/5 text-primary"
                    }`}
                  >
                    <s.icon className="h-6 w-6" strokeWidth={1.75} />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-widest text-accent">Product</span>
                </div>
                <h2 className="mt-5 text-3xl md:text-4xl font-semibold tracking-tight text-foreground">{s.name}</h2>
                <p className="mt-3 text-lg text-muted-foreground">{s.tagline}</p>
                <p className="mt-5 text-base text-foreground/80 leading-relaxed max-w-lg">{s.intro}</p>
                <ul className="mt-6 space-y-2">
                  {s.features.slice(0, 3).map((f) => (
                    <li key={f.title} className="flex items-start gap-2 text-sm text-foreground/80">
                      <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                      <span>
                        <span className="font-semibold text-foreground">{f.title}.</span> {f.copy}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href={`#${s.slug}`}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors"
                >
                  Explore {s.name} <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <ServiceShowcaseIllustration slug={s.slug} />
            </div>
          );
        })}
      </section>
    </>
  );
}
