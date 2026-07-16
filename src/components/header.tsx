"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MapPin, ArrowRight, Sparkles, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { serviceLinks, productLinks, staticNav } from "./navlinks";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<null | "services" | "products">(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function enter(menu: "services" | "products") {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(menu);
  }
  function leave() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(null), 120);
  }

  // Active-link logic (replicates TanStack Router's activeProps/activeOptions)
  const isHomeActive = pathname === "/";
  const isAboutActive = pathname === "/about" || pathname.startsWith("/about/");
  const isServicesActive =
    pathname === "/services" || pathname.startsWith("/services/");
  const isProductsActive =
    pathname === "/products" || pathname.startsWith("/products/");

  function isStaticActive(to: string) {
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
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground shadow-card transition-transform group-hover:scale-105">
            <MapPin className="h-4 w-4" strokeWidth={2.5} />
          </span>
          <span className="text-[15px] font-semibold tracking-tight text-foreground">
            MyPage<span className="text-accent">SEO</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1 relative">
          <Link
            href="/"
            className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-foreground ${
              isHomeActive ? "text-foreground" : "text-muted-foreground"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-foreground ${
              isAboutActive ? "text-foreground" : "text-muted-foreground"
            }`}
          >
            About Us
          </Link>

          {/* Services dropdown trigger */}
          <div
            onMouseEnter={() => enter("services")}
            onMouseLeave={leave}
            className="relative"
          >
            <Link
              href="/services"
              className={`inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-foreground ${
                isServicesActive ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              Services
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform ${
                  open === "services" ? "rotate-180" : ""
                }`}
              />
            </Link>
          </div>

          {/* Products dropdown trigger */}
          <div
            onMouseEnter={() => enter("products")}
            onMouseLeave={leave}
            className="relative"
          >
            <Link
              href="/products"
              className={`inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-foreground ${
                isProductsActive ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              Products
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform ${
                  open === "products" ? "rotate-180" : ""
                }`}
              />
            </Link>
          </div>

          {staticNav.slice(2).map((item) => (
            <Link
              key={item.to}
              href={item.to}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-foreground ${
                isStaticActive(item.to)
                  ? "text-foreground"
                  : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/get-started"
            className="inline-flex items-center rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground shadow-card transition-all hover:shadow-lift hover:-translate-y-0.5"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* Mega menu panel */}
      <div
        onMouseEnter={() => open && enter(open)}
        onMouseLeave={leave}
        className={`absolute left-0 right-0 top-full transition-all duration-200 ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="container-page pt-3">
          <div className="rounded-3xl border border-border/70 bg-background/85 backdrop-blur-xl shadow-lift p-6 md:p-8">
            {open === "services" && <ServicesMenu />}
            {open === "products" && <ProductsMenu />}
          </div>
        </div>
      </div>
    </header>
  );
}

/* ---------- Mega menus ---------- */

function ServicesMenu() {
  return (
    <div>
      <div className="flex items-start justify-between gap-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            Local SEO Services
          </p>
          <h3 className="mt-2 text-lg font-semibold text-foreground">
            Specialized services for businesses that live on local search.
          </h3>
        </div>
        <Link
          href="/services"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-card transition-all hover:-translate-y-0.5 hover:shadow-lift"
        >
          Explore All Services <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
      <div className="mt-6 grid gap-2 md:grid-cols-3">
        {serviceLinks.map((s) => (
          <Link
            key={s.slug}
            href={`/services/${s.slug}`}
            className="group flex items-start gap-3 rounded-xl p-3 transition-all hover:bg-surface"
          >
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/5 text-primary transition-colors group-hover:bg-accent/10 group-hover:text-accent">
              <s.icon className="h-4 w-4" strokeWidth={1.75} />
            </span>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-foreground">{s.name}</p>
              <p className="mt-0.5 text-xs text-muted-foreground leading-relaxed">
                {s.blurb}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

function ProductsMenu() {
  return (
    <div>
      <div className="flex items-start justify-between gap-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            Product Ecosystem
          </p>
          <h3 className="mt-2 text-lg font-semibold text-foreground">
            Proprietary software built for Local SEO.
          </h3>
        </div>
        <Link
          href="/products"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-card transition-all hover:-translate-y-0.5 hover:shadow-lift"
        >
          View Product Ecosystem <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
      <div className="mt-6 grid gap-2 md:grid-cols-2">
        {productLinks.map((p) => (
          <Link
            key={p.slug}
            href={`/products/${p.slug}`}
            className="group flex items-start gap-3 rounded-xl p-3 transition-all hover:bg-surface"
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent">
              <p.icon className="h-5 w-5" strokeWidth={1.75} />
            </span>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-foreground">{p.name}</p>
              <p className="mt-0.5 text-xs text-muted-foreground leading-relaxed">
                {p.blurb}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
