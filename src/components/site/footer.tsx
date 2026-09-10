import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Globe2, MapPin, Sparkles } from "lucide-react";

import { services } from "@/components/services/services-data";
import { LinkedinIcon, FacebookIcon, InstagramIcon } from "./social-icons";

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/industries", label: "Industries" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

const getStartedLinks = [
  { href: "/services/mypageseo", label: "Plans & Pricing" },
  { href: "/checkout", label: "Get Started" },
  { href: "/contact", label: "Talk to a Pro" },
] as const;

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-conditions", label: "Terms & Conditions" },
] as const;

const socialLinks = [
  { href: "#", label: "LinkedIn", icon: LinkedinIcon },
  { href: "#", label: "Facebook", icon: FacebookIcon },
  { href: "#", label: "Instagram", icon: InstagramIcon },
] as const;

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-border/60 bg-surface">
      {/* Subtle ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-80 opacity-70"
        style={{
          background:
            "radial-gradient(circle at 15% 0%, oklch(0.36 0.036 220 / 0.06), transparent 42%), radial-gradient(circle at 85% 0%, oklch(0.55 0.19 27 / 0.035), transparent 38%)",
        }}
      />

      <div className="container-page relative py-14 md:py-16">
        <div className="grid gap-12 md:grid-cols-6 lg:grid-cols-12 lg:gap-10">
          {/* Brand */}
          <div className="md:col-span-6 lg:col-span-5">
            <Link
              href="/"
              className="inline-flex transition-opacity duration-200 hover:opacity-80"
            >
              <Image
                src="/logo.png"
                alt="MyPageSEO logo"
                width={200}
                height={50}
                className="h-18 w-auto"
              />
            </Link>

            <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground">
              Expert Local SEO services and proprietary software built to help
              local businesses become more visible, more competitive, and easier
              to find.
            </p>

            {/* Location / positioning */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-3 py-1.5 text-xs font-medium text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 text-accent" />
                United States
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-3 py-1.5 text-xs font-medium text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 text-accent" />
                Canada
              </div>
            </div>

            {/* Socials */}
            <div className="mt-7 flex items-center gap-2.5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="group grid h-10 w-10 place-items-center rounded-full border border-border/70 bg-background text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/20 hover:bg-primary hover:text-primary-foreground hover:shadow-card"
                >
                  <social.icon className="h-4 w-4 transition-transform duration-200 group-hover:scale-105" />
                </a>
              ))}
            </div>

            <a
              href="mailto:hello@mypageseo.com"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
            >
              info@mypageseo.com
              <ArrowUpRight className="h-3.5 w-3.5 opacity-40" />
            </a>
          </div>

          {/* Services */}
          <div className="md:col-span-2 lg:col-span-2 lg:col-start-7">
            <div className="mb-5 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Services
            </div>

            <ul className="space-y-3 text-sm">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group inline-flex items-center text-muted-foreground transition-colors duration-200 hover:text-foreground"
                  >
                    <span>{service.name}</span>

                    <ArrowUpRight className="ml-1.5 h-3 w-3 -translate-x-1 translate-y-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-50" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2 lg:col-span-2">
            <div className="mb-5 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Company
            </div>

            <ul className="space-y-3 text-sm">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center text-muted-foreground transition-colors duration-200 hover:text-foreground"
                  >
                    <span>{link.label}</span>

                    <ArrowUpRight className="ml-1.5 h-3 w-3 -translate-x-1 translate-y-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-50" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Started */}
          <div className="md:col-span-2 lg:col-span-2">
            <div className="mb-5 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Get Started
            </div>

            <ul className="space-y-3 text-sm">
              {getStartedLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center text-muted-foreground transition-colors duration-200 hover:text-foreground"
                  >
                    <span>{link.label}</span>

                    <ArrowUpRight className="ml-1.5 h-3 w-3 -translate-x-1 translate-y-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-50" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border/60 bg-background/40">
        <div className="container-page flex flex-col-reverse gap-3 py-5 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 md:justify-start">
            <span>
              © {new Date().getFullYear()} MyPageSEO. All rights reserved.
            </span>

            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <span className="text-center md:text-right">
            Local Growth technology for modern businesses.
          </span>
        </div>
      </div>
    </footer>
  );
}
