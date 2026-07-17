import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import { AppShell } from "@/components/app-shell";
import "./globals.css";
import { CountryProvider } from "@/context/CountryContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MyPageSEO — Local SEO That Wins Customers Near You",
  description:
    "MyPageSEO helps local businesses across the US and Canada dominate Google Maps, Google Business Profile, and local search with expert Local SEO and proprietary auditing software.",
  authors: [{ name: "MyPageSEO" }],
  openGraph: {
    title: "MyPageSEO — Local SEO Specialists",
    description:
      "The Local SEO partner for law firms, dentists, contractors, restaurants and service businesses across North America.",
    type: "website",
    siteName: "MyPageSEO",
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <body suppressHydrationWarning>
        <CountryProvider>
          <AppShell>{children}</AppShell>
        </CountryProvider>
      </body>
    </html>
  );
}