"use client";

import { useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export function AppShell({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());
  const pathname = usePathname();
  const isCheckout = pathname?.startsWith("/checkout");

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-dvh flex-col">
        {!isCheckout && <Header />}
        <main className="flex-1">{children}</main>
        {!isCheckout && <Footer />}
      </div>
    </QueryClientProvider>
  );
}
