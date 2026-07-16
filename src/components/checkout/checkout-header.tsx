import Link from "next/link";
import { Lock, MapPin } from "lucide-react";

export function CheckoutHeader() {
  return (
    <header className="border-b border-border/60 bg-background/80 backdrop-blur-xl sticky top-0 z-30">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground shadow-card transition-transform group-hover:scale-105">
            <MapPin className="h-4 w-4" strokeWidth={2.5} />
          </span>
          <span className="text-[15px] font-semibold tracking-tight text-foreground">
            MyPage<span className="text-accent">SEO</span>
          </span>
        </Link>
        <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
          <Lock className="h-3.5 w-3.5 text-accent" />
          <span>Secure Checkout</span>
        </div>
      </div>
    </header>
  );
}
