import { CustomerJourneyIllustration } from "@/components/illustrations";

export function CustomerJourneySection() {
  return (
    <section className="bg-surface/60 border-y border-border/60">
      <div className="container-page py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            The customer journey
          </p>
          <h2 className="mt-3 font-display text-3xl md:text-5xl tracking-tight">
            Search. Discover. Choose you.
          </h2>
        </div>
        <div className="mt-10">
          <CustomerJourneyIllustration />
        </div>
      </div>
    </section>
  );
}
