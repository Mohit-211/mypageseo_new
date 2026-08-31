import { Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative flex h-[calc(100svh-4rem)] items-center overflow-hidden bg-hero">
      <div aria-hidden className="absolute inset-0 bg-radial-soft opacity-70" />
      <div className="container-page relative">
        <div className="mx-auto max-w-4xl text-center animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-card px-3 py-1 text-xs font-medium text-primary ring-soft">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            Full-service Local Growth
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-display leading-[1.05] text-foreground">
            Expert Local SEO.{" "}
            <span className="text-gradient">Hands-on execution.</span> One team.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            MyPageSEO pairs Local SEO strategy with hands-on execution across
            search, advertising, social, reputation, content, and web —
            delivered by a dedicated team for businesses competing in local
            search across the United States and Canada.
          </p>
        </div>
      </div>
    </section>
  );
}
