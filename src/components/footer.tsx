import Link from "next/link";
import Image from "next/image";
import { Sparkles } from "lucide-react";

const exploreLinks = [
  { href: "/services", label: "Services" },
  { href: "/software", label: "Software" },
  { href: "/industries", label: "Industries" },
  { href: "/pricing", label: "Pricing" },
] as const;

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/checkout", label: "Get Started" },
] as const;

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-conditions", label: "Terms & Conditions" },
] as const;

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-surface">
      <div className="container-page py-16 grid gap-12 md:grid-cols-5">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="MyPageSEO logo"
              width={240}
              height={60}
              className="h-22 w-auto"
            />
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground leading-relaxed">
            The Local Growth ecosystem — expert Local SEO services and
            proprietary software for businesses across the United States and
            Canada.
          </p>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-foreground">
            Explore
          </div>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {exploreLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-foreground">
                  {l.label}
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
            {companyLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-foreground">
            Legal
          </div>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {legalLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
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
