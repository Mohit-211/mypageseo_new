import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="text-center max-w-xl">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
          404 Error
        </p>

        <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
          This Page Doesn’t Exist.
        </h1>

        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
          The page you're looking for may have been moved, renamed, or never
          existed. Let’s get you back to structured clarity.
        </p>

        <div className="flex justify-center">
          <Button variant="cta" size="lg" asChild>
            <Link href="/">
              Return to Home
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
