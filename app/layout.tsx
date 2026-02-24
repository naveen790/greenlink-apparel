import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

export const metadata: Metadata = {
  // Primary SEO - Repositioned as a US-based Global Agency
  title: 'Greenlink Apparel| Global Apparel Sourcing & Supply Chain Management',
  description: 'Greenlink is a premier sourcing agency connecting global brands with world-class manufacturing clusters. Delivering ethical, retail-ready apparel to the USA, Europe, and Australia.',
  keywords: [
    'Greenlink Apparel', 
    'New York Apparel Agency', 
    'Global Garment Manufacturing', 
    'Sustainable Supply Chain USA', 
    'Premium Clothing Sourcing Europe', 
    'Ethical Fashion Production Australia',
    'Wholesale Apparel Logistics'
  ],

  // Open Graph
  openGraph: {
    title: "Greenlink Apparel | Art of Apparel",
    description: "Architecting the future of global fashion through New York-led strategy and transparent international supply chains.",
    url: "https://greenlinkapparel.com",
    siteName: "Greenlink",
    images: [
      {
        url: "/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "Greenlink Apparel- Global Sourcing Portfolio",
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

  // Twitter (X)
  twitter: {
    card: "summary_large_image",
    title: "Greenlink Apparel| Global Apparel Sourcing",
    description: "US-based strategic sourcing for global retail brands. Premium manufacturing with international logistics.",
    images: ["/og-image.jpg"],
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
    </html>
  );
}