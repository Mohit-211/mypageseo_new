import { CustomerJourneyIllustration } from "@/components/illustrations";

export function CustomerJourneySection() {
  return (
    <section className="bg-surface/60 border-y border-border/60">
      <div className="container-page py-24">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            The Customer Journey
          </p>

          <h2 className="mt-4 font-display text-4xl md:text-5xl tracking-tight">
            Search. Discover. Choose you.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            Every local customer follows a journey. We optimize every
            touchpoint, from the first search to the final phone call, helping
            more local searches become real customers.
          </p>
        </div>

        <CustomerJourneyIllustration className="mt-14" />
      </div>
    </section>
  );
}
