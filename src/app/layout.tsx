import type { Metadata } from "next";
import { Suspense } from "react";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "sonner";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { GoogleAnalytics } from "@/components/google-analytics";
import { StructuredData } from "@/components/structured-data";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://overboard-corp.netlify.app'),
  title: {
    default: "Overboard Asia | Premier Water Sports Retailer & Investment Opportunity",
    template: "%s | Overboard Asia"
  },
  description:
    "A proven retail model with six profitable locations, poised for strategic expansion. Discover the opportunity to invest in a market leader.",
  keywords: ["water sports retail", "beachwear", "Thailand investment", "retail expansion", "Southeast Asia", "investment opportunity", "beach lifestyle"],
  authors: [{ name: "Overboard Asia" }],
  creator: "Overboard Asia",
  publisher: "Overboard Co., Ltd.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://overboard-corp.netlify.app",
    siteName: "Overboard Asia",
    title: "Overboard Asia | Premier Water Sports Retailer & Investment Opportunity",
    description: "A proven retail model with six profitable locations, poised for strategic expansion. Discover the opportunity to invest in a market leader.",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Overboard Asia - Premier Water Sports Retailer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Overboard Asia | Premier Water Sports Retailer & Investment Opportunity",
    description: "A proven retail model with six profitable locations, poised for strategic expansion.",
    images: ["/images/hero.jpg"],
  },
  verification: {
    google: "google-site-verification-code",
  },
  alternates: {
    canonical: "https://overboard-corp.netlify.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`} suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body className="font-body antialiased">
        <Suspense>
          {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
            <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
          )}
        </Suspense>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
          <SonnerToaster richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
