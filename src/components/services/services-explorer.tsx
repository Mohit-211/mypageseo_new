"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { services } from "@/components/services/services-data";
import { ServiceHeroIllustration } from "@/components/services/service-illustrations";
import { FaqItem } from "@/components/services/faq-item";

const ENGAGEMENT_STEPS = ["Discovery", "Strategy", "Execution", "Reporting"];

export function ServicesExplorer() {
  const [activeSlug, setActiveSlug] = useState(services[0].slug);
  const activeIndex = services.findIndex((s) => s.slug === activeSlug);
  const active = services[activeIndex] ?? services[0];
  const isAccent = active.accent === "accent";

  return (
    <section id="services" className="container-page py-24">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">
          Our Services
        </p>
        <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
          Six services. One team.
        </h2>
        <p className="mt-3 text-muted-foreground">
          Pick a service to see what&apos;s included, who it&apos;s built for,
          and how we get to work.
        </p>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[280px_1fr]">
        {/* Service menu */}
        <nav className="flex gap-2 overflow-x-auto pb-2 lg:sticky lg:top-24 lg:flex-col lg:gap-1.5 lg:overflow-visible lg:self-start [scrollbar-width:none]">
          {services.map((s, i) => {
            const isActiveTab = s.slug === activeSlug;
            return (
              <button
                key={s.slug}
                onClick={() => setActiveSlug(s.slug)}
                className={`flex shrink-0 items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm font-semibold transition-all lg:shrink ${
                  isActiveTab
                    ? "border-border bg-surface shadow-card text-foreground"
                    : "border-transparent text-muted-foreground hover:bg-surface/60 hover:text-foreground"
                }`}
              >
                <span
                  className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg text-xs ${
                    isActiveTab
                      ? s.accent === "accent"
                        ? "bg-accent text-accent-foreground"
                        : "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  <s.icon className="h-4 w-4" strokeWidth={1.75} />
                </span>
                <span className="whitespace-nowrap lg:whitespace-normal">
                  {s.name}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Active service panel */}
        <div className="rounded-3xl border border-border/70 bg-background shadow-card overflow-hidden">
          {/* Header */}
          <div className="grid gap-12 p-8 md:p-16 lg:grid-cols-[1.1fr_1fr] items-center border-b border-border/60">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                {String(activeIndex + 1).padStart(2, "0")} — {active.name}
              </p>
              <h3 className="mt-5 text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
                {active.name}
              </h3>
              <p className="mt-3 text-sm italic text-muted-foreground">
                {active.personality}
              </p>
              <p className="mt-5 text-lg text-muted-foreground">
                {active.tagline}
              </p>
              <p className="mt-5 text-base text-foreground/80 leading-relaxed max-w-xl">
                {active.intro}
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="/checkout"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-card transition-all hover:-translate-y-0.5 hover:shadow-lift"
                >
                  Get Started with {active.name}{" "}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary/40"
                >
                  <Phone className="h-3.5 w-3.5" /> Talk to Our Team
                </Link>
              </div>
            </div>
            <div>
              <ServiceHeroIllustration slug={active.slug} />
              <p className="mt-4 text-center text-xs text-muted-foreground">
                Example outcome — illustrative only
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="p-8 py-14 md:p-16 md:py-20 border-b border-border/60 bg-surface/40">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">
              What&apos;s included
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {active.features.map((f) => (
                <div
                  key={f.title}
                  className="flex items-start gap-4 rounded-2xl border border-border/70 bg-background p-6"
                >
                  <span
                    className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${
                      isAccent
                        ? "bg-accent/10 text-accent"
                        : "bg-primary/5 text-primary"
                    }`}
                  >
                    <f.icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground leading-snug">
                      {f.title}
                    </h4>
                    <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                      {f.copy}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Engagement process + Ideal for */}
          <div className="grid gap-12 p-8 py-14 md:p-16 md:py-20 md:grid-cols-2 border-b border-border/60">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                How we work
              </p>
              <ol className="mt-6 space-y-4">
                {ENGAGEMENT_STEPS.map((step, i) => (
                  <li
                    key={step}
                    className="flex items-center gap-4 text-sm text-foreground/80"
                  >
                    <span
                      className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-xs font-semibold ${
                        isAccent
                          ? "bg-accent text-accent-foreground"
                          : "bg-primary text-primary-foreground"
                      }`}
                    >
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Ideal for
              </p>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {active.useCases.map((u) => (
                  <span
                    key={u}
                    className="inline-flex items-center rounded-full border border-border/70 bg-surface/40 px-3.5 py-2 text-sm text-foreground/80"
                  >
                    {u}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="p-8 py-14 md:p-16 md:py-20">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">
              FAQ
            </p>
            <div className="mt-6 divide-y divide-border/60 rounded-2xl border border-border/70">
              {active.faqs.map((f) => (
                <FaqItem key={f.q} q={f.q} a={f.a} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
