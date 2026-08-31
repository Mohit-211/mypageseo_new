import { Zap, CheckCircle2 } from "lucide-react";
import { HeroArt } from "./hero-art";

export function ContactHero() {
  return (
    <section className="relative flex h-[calc(100svh-4rem)] items-center overflow-hidden bg-hero">
      <div aria-hidden className="absolute inset-0 bg-radial-soft opacity-70" />
      <div className="container-page relative grid gap-14 lg:grid-cols-2 items-center">
        <div className="min-w-0 animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-card px-3 py-1 text-xs font-medium text-primary ring-soft">
            <Zap className="h-3.5 w-3.5 text-accent" /> Contact MyPageSEO
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-display leading-[1.05] text-foreground">
            Let&apos;s talk about growing your{" "}
            <span className="text-gradient">local visibility.</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Whether you&apos;re looking to improve your Google Business Profile,
            dominate local search results, or simply understand where your Local
            SEO stands today — the team is ready to help.
          </p>
          <div className="mt-8 flex flex-wrap gap-6 text-sm">
            <div className="flex items-center gap-2 text-foreground/80">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" /> Reply within
              1 business day
            </div>
            <div className="flex items-center gap-2 text-foreground/80">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" /> Free initial
              consultation
            </div>
            <div className="flex items-center gap-2 text-foreground/80">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" /> No
              obligation
            </div>
          </div>
        </div>
        <div
          className="min-w-0 animate-fade-up"
          style={{ animationDelay: "150ms" }}
        >
          <div className="mx-auto w-full max-w-lg overflow-hidden lg:max-w-none">
            <HeroArt />
          </div>
        </div>
      </div>
    </section>
  );
}
