import { Sparkles } from "lucide-react";

export function CheckoutIntro() {
  return (
    <section className="container-page pt-12 pb-8 md:pt-16 md:pb-10">
      <div className="max-w-2xl">
        <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
          <Sparkles className="h-3.5 w-3.5 text-accent" />
          Onboarding in 4 minutes
        </span>
        <h1 className="mt-5 text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
          Let&apos;s get your business growing locally.
        </h1>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          A Local SEO specialist will review your submission after checkout and reach out within one business day to
          begin onboarding.
        </p>
      </div>
    </section>
  );
}
