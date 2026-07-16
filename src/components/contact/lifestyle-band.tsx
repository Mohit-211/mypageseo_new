import { Photo } from "@/components/photos";

export function LifestyleBand() {
  return (
    <section className="py-16 md:py-20">
      <div className="container-page grid gap-8 lg:grid-cols-[1.1fr_1fr] items-center">
        <div>
          <div className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">Real conversations</div>
          <h2 className="text-3xl md:text-4xl font-display text-foreground leading-tight">
            We meet you where your business lives.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-lg">
            Every engagement starts with a real conversation — about your neighborhood, your customers, and the outcomes that actually move your business forward.
          </p>
          <div className="mt-6 grid grid-cols-3 gap-3">
            <Photo src="restaurant" alt="Restaurant owner welcoming guests" aspect="aspect-square" />
            <Photo src="salon" alt="Salon serving a client" aspect="aspect-square" />
            <Photo src="hotel" alt="Hotel receptionist welcoming a guest" aspect="aspect-square" />
          </div>
        </div>
        <Photo src="consult" alt="MyPageSEO advisors meeting with a small-business owner" aspect="aspect-[4/3]" />
      </div>
    </section>
  );
}
