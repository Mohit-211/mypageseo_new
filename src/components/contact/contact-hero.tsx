import { Zap, CheckCircle2 } from "lucide-react";
import { HeroArt } from "./hero-art";

export function ContactHero() {
  return (
    <section className="relative overflow-hidden pt-24 md:pt-32 pb-16 md:pb-20 bg-hero">
      <div className="container-page grid lg:grid-cols-2 gap-14 items-center">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card ring-soft text-xs font-medium text-primary">
            <Zap className="w-3.5 h-3.5 text-accent" /> Contact MyPageSEO
          </span>
          <h1 className="mt-5 text-4xl md:text-6xl font-display leading-[1.05] text-foreground">
            Let&apos;s talk about growing your <span className="text-gradient">local visibility.</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Whether you&apos;re looking to improve your Google Business Profile, dominate local search results, explore MyPageSEO Software, or simply understand where your Local SEO stands today — the team is ready to help.
          </p>
          <div className="mt-8 flex flex-wrap gap-6 text-sm">
            <div className="flex items-center gap-2 text-foreground/80">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Reply within 1 business day
            </div>
            <div className="flex items-center gap-2 text-foreground/80">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Free initial consultation
            </div>
            <div className="flex items-center gap-2 text-foreground/80">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> No obligation
            </div>
          </div>
        </div>
        <div className="animate-fade-up" style={{ animationDelay: "150ms" }}>
          <HeroArt />
        </div>
      </div>
    </section>
  );
}
