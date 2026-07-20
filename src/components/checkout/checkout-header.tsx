"use client";

import Image from "next/image";
import Link from "next/link";
import { Lock } from "lucide-react";

export function CheckoutHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="container-page flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex h-16 items-center shrink-0 transition-transform hover:scale-105"
        >
          <Image
            src="/logo.png"
            alt="MyPageSEO"
            width={64}
            height={64}
            priority
            className="block h-16 w-16 object-contain"
          />
        </Link>

        <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
          <Lock className="h-3.5 w-3.5 text-accent" />
          <span>Secure Checkout</span>
        </div>
      </div>
    </header>
  );
}
