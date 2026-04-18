import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/motion/LenisProvider";
import { Navbar } from "@/components/Navbar";
import { ExitPopup } from "@/components/ExitPopup";
import { StickyBar } from "@/components/StickyBar";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wake where the ocean speaks first · Beachfront residences on Malaysia's East Coast",
  description:
    "A beachfront residence in Kuantan, Pahang. 180° unobstructed ocean views, resort amenities, direct ECRL access to Kuala Lumpur. Pre-launch pricing from RM X.XX M.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Wake where the ocean speaks first",
    description: "Beachfront residences · Kuantan, Pahang · ECRL-connected",
    type: "website",
    locale: "en_MY",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-sand-50 text-ink-900">
        <LenisProvider>
          <Navbar />
          {children}
          <StickyBar />
          <ExitPopup />
        </LenisProvider>
      </body>
    </html>
  );
}
