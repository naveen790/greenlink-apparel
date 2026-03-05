import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import { GoogleAnalytics } from '@next/third-parties/google';

export const metadata: Metadata = {
  title: 'Greenlink Apparel | Direct B2B Apparel Sourcing & Production',
  description: 'Connect with world-class, retail-ready garment manufacturing in South Asia and beyond. Greenlink Apparel is a NY-based agency providing ethical B2B supply chain solutions for International brands.',
  
  keywords: [
    "Direct factory clothing sourcing India to USA",
    "Private label knitwear manufacturer India",
    "Ethical retail-ready apparel production",
    "US brand garment export manufacturing",
    "Sustainable B2B clothing supplier India",
    "direct apparel manufacturer India",
    "apparel sourcing agency New York",
    "Tirupur garment export manufacturing",
    "India to US apparel supply chain",
  ],

  openGraph: {
    title: "Greenlink Apparel | Direct B2B Apparel Sourcing & Production",
    description: "The trusted New York agency bridging American brands to ethical, high-volume apparel manufacturing in India. Streamline your production from design to delivery.",
    url: "https://greenlinkapparel.com",
    siteName: "Greenlink Apparel",
    images: [
      {
        url: "https://greenlinkapparel.com/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "Greenlink Apparel - Global Sourcing Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },

  twitter: {
    card: "summary_large_image",
    title: "Greenlink Apparel | Global Apparel Sourcing",
    description: "US-based strategic sourcing for global retail brands. Premium manufacturing with international logistics.",
    images: ["https://greenlinkapparel.com/og-image.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false, // Keeps the UI stable for high-end feel
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* 1. Changed bg-[#F9F9F7] to bg-[#D9E2DC] to match the Hero section.
          2. Refined selection colors: Gold background with Obsidian text for high-end readability.
      */}
      <body className="bg-[#D9E2DC] antialiased overflow-x-hidden selection:bg-[#C5A059] selection:text-[#1B2721]">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <BackToTop />
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID as string} />
    </html>
  );
}
