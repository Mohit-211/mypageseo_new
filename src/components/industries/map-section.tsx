import { NorthAmericaMap } from "@/components/industries/north-america-map";

export function MapSection() {
  return (
    <section className="container-page py-24">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">Coverage</p>
        <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
          Local SEO for businesses across North America.
        </h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          We work with independent businesses, multi-location brands, and franchise systems across the United States
          and Canada.
        </p>
      </div>
      <NorthAmericaMap />
    </section>
  );
}
