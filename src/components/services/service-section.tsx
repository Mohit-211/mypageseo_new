import { Check, Sparkles, Play, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Service } from "@/components/services/services-data";
import {
  ServiceHeroIllustration,
  ServiceSecondaryIllustration,
} from "@/components/services/service-illustrations";
import { WorkflowSteps } from "@/components/services/workflow-steps";
import { FaqItem } from "@/components/services/faq-item";

export function ServiceSection({ service }: { service: Service }) {
  const Icon = service.icon;
  const isAccent = service.accent === "accent";

  return (
    <div id={service.slug} className="scroll-mt-24">
      {/* HEADER */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-surface via-background to-background" />
        <div
          className="absolute inset-x-0 top-0 -z-10 h-[520px] opacity-70"
          style={{
            background: isAccent
              ? "radial-gradient(60% 60% at 50% 0%, color-mix(in oklab, var(--color-accent) 15%, transparent), transparent 70%)"
              : "radial-gradient(60% 60% at 50% 0%, color-mix(in oklab, var(--color-primary) 15%, transparent), transparent 70%)",
          }}
        />
        <div className="container-page pt-20 pb-16 md:pt-24 md:pb-24 grid gap-12 lg:grid-cols-[1.15fr_1fr] items-center">
          <div>
            <a
              href="#top"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground"
            >
              ← Product Ecosystem
            </a>
            <div className="mt-6 inline-flex items-center gap-3">
              <span
                className={`grid h-14 w-14 place-items-center rounded-2xl ${
                  isAccent ? "bg-accent/10 text-accent" : "bg-primary/10 text-primary"
                }`}
              >
                <Icon className="h-6 w-6" strokeWidth={1.75} />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-accent">MyPageSEO Product</p>
                <p className="text-sm text-muted-foreground">{service.personality}</p>
              </div>
            </div>
            <h2 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight text-foreground">{service.name}</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl">{service.tagline}</p>
            <p className="mt-6 text-base text-foreground/80 max-w-xl leading-relaxed">{service.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/get-started"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-card transition-all hover:-translate-y-0.5 hover:shadow-lift"
              >
                Start Using {service.name} <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary/40"
              >
                <Play className="h-3.5 w-3.5" /> Request a Demo
              </Link>
            </div>
          </div>

          <ServiceHeroIllustration slug={service.slug} />
        </div>
      </section>

      {/* IN THE WILD */}
      <section className="container-page pt-16 grid gap-10 lg:grid-cols-2 items-center">
        <ServiceSecondaryIllustration slug={service.slug} />
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">In the wild</p>
          <h3 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight">
            How {service.name} shows up for real businesses.
          </h3>
          <p className="mt-4 text-muted-foreground leading-relaxed">{service.intro}</p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-surface/60 border-y border-border/60">
        <div className="container-page py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">Features</p>
            <h3 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">What {service.name} does.</h3>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {service.features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-border/70 bg-background p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-lift"
              >
                <span
                  className={`grid h-11 w-11 place-items-center rounded-xl ${
                    isAccent ? "bg-accent/10 text-accent" : "bg-primary/5 text-primary"
                  }`}
                >
                  <f.icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <h4 className="mt-5 text-base font-semibold text-foreground">{f.title}</h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="container-page py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">Workflow</p>
            <h3 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">Built to fit how your team works.</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              {service.name} slots into your existing operations — one login, one dashboard, and connections to the
              rest of the MyPageSEO ecosystem so your data works together.
            </p>
            <ul className="mt-6 space-y-3">
              {["Connect your data sources", "Configure locations & teams", "Automate the repeatable work", "Report on outcomes, not activity"].map(
                (s) => (
                  <li key={s} className="flex items-center gap-3 text-sm text-foreground/80">
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-accent/10 text-accent">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {s}
                  </li>
                ),
              )}
            </ul>
          </div>
          <WorkflowSteps isAccent={isAccent} />
        </div>
      </section>

      {/* USE CASES */}
      <section className="bg-surface/60 border-y border-border/60">
        <div className="container-page py-20 grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">Built for</p>
            <h3 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">Who uses {service.name}.</h3>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {service.useCases.map((u) => (
              <div key={u} className="rounded-2xl border border-border/70 bg-background p-6 shadow-card">
                <Sparkles className="h-4 w-4 text-accent" />
                <p className="mt-3 text-sm font-semibold text-foreground">{u}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-page py-24 grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">FAQ</p>
          <h3 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">Common questions.</h3>
        </div>
        <div className="divide-y divide-border/60 rounded-2xl border border-border/70 bg-background shadow-card">
          {service.faqs.map((f) => (
            <FaqItem key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </section>
    </div>
  );
}
