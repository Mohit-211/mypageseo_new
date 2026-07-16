import { Photo } from "@/components/photos";
import { SceneCard } from "./scene-card";

export function LifestyleSection() {
  return (
    <section className="container-page py-24">
      <div className="max-w-2xl mb-12">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">
          Where Local SEO shows up
        </p>
        <h2 className="mt-3 font-display text-3xl md:text-5xl tracking-tight">
          Not in a dashboard. In your business.
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-xl">
          Real outcomes for the businesses we work with — phones ringing,
          calendars filling, storefronts busier.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <SceneCard title="Restaurants" copy="Diners find you first on Maps.">
          <Photo
            src="restaurant"
            alt="Restaurant owner welcoming customers"
            aspect="aspect-[4/3]"
          />
        </SceneCard>
        <SceneCard
          title="Dental clinics"
          copy="More appointment requests from Google."
        >
          <Photo
            src="dental"
            alt="Dentist greeting a patient at a modern clinic"
            aspect="aspect-[4/3]"
          />
        </SceneCard>
        <SceneCard
          title="Home services"
          copy="Emergency calls when it matters."
        >
          <Photo
            src="contractor"
            alt="Contractor arriving on-site at a customer's home"
            aspect="aspect-[4/3]"
          />
        </SceneCard>
        <SceneCard
          title="Salons & wellness"
          copy="Booked out from local discovery."
        >
          <Photo
            src="salon"
            alt="Stylist attending to a client in a modern salon"
            aspect="aspect-[4/3]"
          />
        </SceneCard>
        <SceneCard
          title="Law firms"
          copy="Qualified consultations from your area."
        >
          <Photo
            src="lawyer"
            alt="Lawyer consulting a client in a modern office"
            aspect="aspect-[4/3]"
          />
        </SceneCard>
        <SceneCard
          title="Retail & boutique"
          copy="Foot traffic from Maps searches."
        >
          <Photo
            src="retail"
            alt="Boutique owner handing a shopping bag to a customer"
            aspect="aspect-[4/3]"
          />
        </SceneCard>
      </div>
    </section>
  );
}
