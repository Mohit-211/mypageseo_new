import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="container-page py-32 text-center">
      <h1 className="text-3xl font-display text-foreground">Article not found</h1>
      <p className="mt-3 text-muted-foreground">The article you&apos;re looking for may have moved.</p>
      <Link href="/blog" className="mt-6 inline-flex items-center gap-2 text-primary font-medium">
        <ArrowLeft className="w-4 h-4" /> Back to Insights
      </Link>
    </div>
  );
}
