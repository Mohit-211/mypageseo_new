import { NorthAmericaMap } from "./north-america-map";

export function ServiceAreaMap() {
  return (
    <section className="py-20 md:py-24 bg-surface">
      <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">Where we work</div>
          <h2 className="text-3xl md:text-5xl font-display text-foreground leading-tight">
            Serving businesses across the U.S. &amp; Canada.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            MyPageSEO operates digitally, which means we can help businesses strengthen their visibility in their own local markets — from a single storefront in a mid-sized town to a franchise with locations across multiple provinces and states.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Wherever your customers search, that&apos;s where our work is focused.
          </p>
        </div>
        <NorthAmericaMap />
      </div>
    </section>
  );
}
