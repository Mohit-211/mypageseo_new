import Link from "next/link";
import { MapPin, Sparkles } from "lucide-react";
import { serviceLinks, productLinks } from "./navlinks";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-surface">
      <div className="container-page py-16 grid gap-12 md:grid-cols-5">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground">
              <MapPin className="h-4 w-4" strokeWidth={2.5} />
            </span>
            <span className="text-[15px] font-semibold">
              MyPage<span className="text-accent">SEO</span>
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground leading-relaxed">
            The Local Growth ecosystem — expert Local SEO services and
            proprietary software for businesses across the United States and
            Canada.
          </p>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-foreground">
            Services
          </div>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {serviceLinks.slice(0, 5).map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="hover:text-foreground"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-foreground">
            Products
          </div>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {productLinks.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/products/${p.slug}`}
                  className="hover:text-foreground"
                >
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-foreground">
            Company
          </div>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link href="/about" className="hover:text-foreground">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/industries" className="hover:text-foreground">
                Industries
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-foreground">
                Blogs
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-foreground">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/get-started" className="hover:text-foreground">
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container-page py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} MyPageSEO. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <Sparkles className="h-3 w-3 text-accent" /> Local Growth technology
            for US &amp; Canada.
          </p>
        </div>
      </div>
    </footer>
  );
}
