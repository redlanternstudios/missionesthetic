import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Mission Esthetics — Private Waxing in Mission Valley",
  description:
    "Private, detail-focused waxing services by Alexandra Brown in Mission Valley. Smooth results, client comfort, and a calm one-on-one experience.",
  keywords: [
    "waxing",
    "Mission Valley",
    "Brazilian wax",
    "esthetics",
    "body waxing",
    "brow waxing",
    "Mission Esthetics",
    "Alexandra Brown",
  ],
  openGraph: {
    title: "Mission Esthetics",
    description: "Private waxing and esthetics in Mission Valley.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#1a1210",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} bg-background`}
    >
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
