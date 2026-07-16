import { Photo } from "@/components/photos";

export function PhotosBandSection() {
  return (
    <section className="container-page pb-16">
      <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        <Photo src="restaurant" alt="Restaurant" aspect="aspect-square" />
        <Photo src="dental" alt="Healthcare clinic" aspect="aspect-square" />
        <Photo src="contractor" alt="Home services" aspect="aspect-square" />
        <Photo src="lawyer" alt="Legal services" aspect="aspect-square" />
        <Photo src="retail" alt="Retail" aspect="aspect-square" />
        <Photo src="hotel" alt="Hospitality" aspect="aspect-square" />
      </div>
      <p className="mt-6 text-center text-sm text-muted-foreground">
        Recognizable environments. Real customers. The kind of businesses we help grow every day.
      </p>
    </section>
  );
}
