import { Photo } from "@/components/photos";

export function LifestyleStrip() {
  return (
    <section className="container-page pb-8">
      <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
        <Photo src="ownerPhone" alt="Business owner reading a new customer inquiry on her phone" aspect="aspect-[4/5]" />
        <Photo src="contractor" alt="Contractor arriving at a customer's home" aspect="aspect-[4/5]" />
        <Photo src="team" alt="Marketing team reviewing local performance" aspect="aspect-[4/5]" />
        <Photo src="retail" alt="Boutique owner handing a purchase to a customer" aspect="aspect-[4/5]" />
      </div>
    </section>
  );
}
