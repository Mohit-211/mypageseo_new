"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { staticNav } from "./navlinks";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

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

        {/* Desktop Navigation */}
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

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-2">
          <Link
            href="/checkout"
            className="inline-flex items-center rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground shadow-card transition-all hover:-translate-y-0.5 hover:shadow-lift"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((prev) => !prev)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background/80 text-foreground transition-colors hover:bg-muted"
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <nav className="container-page flex flex-col py-4">
            {staticNav.map((item) => {
              const active = isActive(item.to);

              return (
                <Link
                  key={item.to}
                  href={item.to}
                  className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                    active
                      ? "bg-muted text-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <Link
              href="/checkout"
              className="mt-4 inline-flex items-center justify-center rounded-full bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground shadow-card transition-all hover:shadow-lift"
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
