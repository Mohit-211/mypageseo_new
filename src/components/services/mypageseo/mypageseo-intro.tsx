import { Sparkles } from "lucide-react";
import { getServiceBySlug } from "@/components/services/services-data";

export function MypageseoIntro() {
  const service = getServiceBySlug("mypageseo");
  if (!service) return null;

  const Icon = service.icon;

  return (
    <section className="relative overflow-hidden bg-hero">
      <div aria-hidden className="absolute inset-0 bg-radial-soft opacity-70" />
      <div className="container-page relative py-16 md:py-20 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-card px-3 py-1 text-xs font-semibold text-primary ring-soft">
          <Sparkles className="h-3.5 w-3.5 text-accent" />
          Our Flagship Local SEO Service
        </span>

        <div className="mt-6 flex items-center justify-center gap-3">
          <span className="grid h-14 w-14 place-items-center rounded-2xl bg-primary/10 text-primary">
            <Icon className="h-7 w-7" strokeWidth={1.75} />
          </span>
          <h1 className="font-display text-5xl md:text-7xl leading-none text-foreground">
            {service.name}
          </h1>
        </div>

        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          {service.tagline}
        </p>
      </div>
    </section>
  );
}
