import Link from "next/link";

export function CheckoutFooter() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="container-page flex flex-col md:flex-row items-center justify-between gap-3 py-6 text-xs text-muted-foreground">
        <span>© {new Date().getFullYear()} MyPageSEO. All rights reserved.</span>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-foreground">
            Terms
          </a>
          <a href="#" className="hover:text-foreground">
            Privacy
          </a>
          <Link href="/contact" className="hover:text-foreground">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
