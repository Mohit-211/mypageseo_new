/**
 * Static navigation — matches the actual routes under /app.
 * (No /products or /services/[slug] routes exist, so no mega-menu data is needed.)
 */
export const staticNav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/software", label: "Software" },
  { to: "/industries", label: "Industries" },
  { to: "/pricing", label: "Pricing" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact Us" },
] as const;
