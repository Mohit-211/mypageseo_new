"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { staticNav } from "./navlinks";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDesktopMenu, setOpenDesktopMenu] = useState<string | null>(null);
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDesktopMenu(null);
    setOpenMobileMenu(null);
  }, [pathname]);

  function isActive(to: string) {
    if (to === "/") return pathname === "/";
    return pathname === to || pathname.startsWith(`${to}/`);
  }

  function handleMenuEnter(label: string) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDesktopMenu(label);
  }

  function handleMenuLeave() {
    closeTimer.current = setTimeout(() => setOpenDesktopMenu(null), 150);
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
            const hasChildren = !!item.children?.length;
            const active =
              isActive(item.to) ||
              (item.children?.some((c) => isActive(c.to)) ?? false);

            if (!hasChildren) {
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
            }

            const menuOpen = openDesktopMenu === item.label;

            return (
              <div
                key={item.to}
                className="relative"
                onMouseEnter={() => handleMenuEnter(item.label)}
                onMouseLeave={handleMenuLeave}
              >
                <Link
                  href={item.to}
                  aria-current={active ? "page" : undefined}
                  aria-expanded={menuOpen}
                  onFocus={() => handleMenuEnter(item.label)}
                  className={`relative inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-foreground ${
                    active ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform ${
                      menuOpen ? "rotate-180" : ""
                    }`}
                  />

                  <span
                    className={`absolute inset-x-3 -bottom-[1px] h-0.5 rounded-full bg-accent transition-opacity ${
                      active ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </Link>

                {menuOpen && (
                  <div className="absolute left-0 top-full pt-2">
                    <div className="w-64 rounded-2xl border border-border/70 bg-background p-2 shadow-lift">
                      {item.children!.map((child) => (
                        <Link
                          key={child.to}
                          href={child.to}
                          className={`block rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors ${
                            isActive(child.to)
                              ? "bg-surface text-foreground"
                              : "text-muted-foreground hover:bg-surface/60 hover:text-foreground"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
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
              const hasChildren = !!item.children?.length;
              const active =
                isActive(item.to) ||
                (item.children?.some((c) => isActive(c.to)) ?? false);

              if (!hasChildren) {
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
              }

              const submenuOpen = openMobileMenu === item.label;

              return (
                <div key={item.to}>
                  <div className="flex items-center">
                    <Link
                      href={item.to}
                      className={`flex-1 rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                        active
                          ? "bg-muted text-foreground"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      aria-label={`Toggle ${item.label} submenu`}
                      aria-expanded={submenuOpen}
                      onClick={() =>
                        setOpenMobileMenu(submenuOpen ? null : item.label)
                      }
                      className="mr-1 grid h-10 w-10 place-items-center rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground"
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          submenuOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>

                  {submenuOpen && (
                    <div className="ml-4 flex flex-col border-l border-border/60 pl-4">
                      {item.children!.map((child) => (
                        <Link
                          key={child.to}
                          href={child.to}
                          className={`rounded-lg px-4 py-2.5 text-sm transition-colors ${
                            isActive(child.to)
                              ? "text-foreground font-medium"
                              : "text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
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
