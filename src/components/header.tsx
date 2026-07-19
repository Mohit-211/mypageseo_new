"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { staticNav } from "./navlinks";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function isActive(to: string) {
    if (to === "/") return pathname === "/";
    return pathname === to || pathname.startsWith(`${to}/`);
  }

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-border/60 bg-background/75 backdrop-blur-xl shadow-[0_1px_0_0_rgba(0,0,0,0.02)]"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="relative h-16 w-16 shrink-0 transition-transform group-hover:scale-105">
            <Image
              src="/logo.png"
              alt="MyPageSEO logo"
              fill
              sizes="32px"
              className="object-contain"
              priority
            />
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {staticNav.map((item) => {
            const active = isActive(item.to);
            return (
              <Link
                key={item.to}
                href={item.to}
                aria-current={active ? "page" : undefined}
                className={`relative rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-foreground ${
                  active ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {item.label}
                <span
                  className={`absolute inset-x-3 -bottom-[1px] h-0.5 rounded-full bg-accent transition-opacity ${
                    active ? "opacity-100" : "opacity-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/checkout"
            className="inline-flex items-center rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground shadow-card transition-all hover:shadow-lift hover:-translate-y-0.5"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
