import Image from "next/image";

export const photos = {
  restaurant: "/assets/photo-restaurant.jpg",
  dental: "/assets/photo-dental.jpg",
  contractor: "/assets/photo-contractor.jpg",
  team: "/assets/photo-team.jpg",
  ownerPhone: "/assets/photo-owner-phone.jpg",
  salon: "/assets/photo-salon.jpg",
  lawyer: "/assets/photo-lawyer.jpg",
  retail: "/assets/photo-retail.jpg",
  consult: "/assets/photo-consult.jpg",
  hotel: "/assets/photo-hotel.jpg",
} as const;

export type PhotoKey = keyof typeof photos;

interface PhotoProps {
  src: PhotoKey | string;
  alt: string;
  className?: string;
  aspect?: string;
  eager?: boolean;
}

/**
 * Premium, consistently framed business photograph.
 * Rounded corners, soft shadow, and subtle gradient overlay
 * that blends naturally with the site's light design.
 */
export function Photo({
  src,
  alt,
  className = "",
  aspect = "aspect-[4/3]",
  eager = false,
}: PhotoProps) {
  const url =
    typeof src === "string" && !(src in photos) ? src : photos[src as PhotoKey];

  return (
    <div
      className={`group relative overflow-hidden rounded-3xl border border-border/70 bg-surface shadow-card ${aspect} ${className}`}
    >
      <Image
        src={url}
        alt={alt}
        fill
        priority={eager}
        loading={eager ? "eager" : "lazy"}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
      />

      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-primary/15 via-transparent to-transparent"
      />
    </div>
  );
}
