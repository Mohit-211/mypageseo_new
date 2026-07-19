import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import { AppShell } from "@/components/app-shell";
import { CountryProvider } from "@/context/CountryContext";
import "./globals.css";

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
  metadataBase: new URL("https://mypageseo.com"),

  title: {
    default:
      "MyPageSEO | Local SEO Experts for Businesses Across North America",
    template: "%s | MyPageSEO",
  },

  description:
    "MyPageSEO helps businesses across the United States and Canada generate more local customers through Google Business Profile optimization, Local SEO, citation management, reputation management, and intelligent reporting software.",

  applicationName: "MyPageSEO",

  keywords: [
    "Local SEO",
    "Google Business Profile",
    "Google Maps SEO",
    "Local Search",
    "Local SEO Company",
    "Local SEO Agency",
    "Citation Management",
    "Reputation Management",
    "Google Business Profile Optimization",
    "GBP Optimization",
    "Local Marketing",
    "Local Rankings",
    "Small Business Marketing",
    "Multi Location SEO",
    "Restaurant SEO",
    "Dentist SEO",
    "Law Firm SEO",
    "Contractor SEO",
    "North America SEO",
    "MyPageSEO",
  ],

  authors: [
    {
      name: "MyPageSEO",
      url: "https://mypageseo.com",
    },
  ],

  creator: "MyPageSEO",

  publisher: "MyPageSEO",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mypageseo.com",
    siteName: "MyPageSEO",
    title: "MyPageSEO | Local SEO Experts for Businesses Across North America",
    description:
      "Grow your business with Local SEO, Google Business Profile optimization, citation management, reputation management, and intelligent reporting software.",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MyPageSEO",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "MyPageSEO | Local SEO Experts",
    description:
      "Local SEO services and software helping businesses dominate Google Maps and local search.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: [
      {
        url: "/favicon.png",
        type: "image/png",
      },
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },

  category: "Business",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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
