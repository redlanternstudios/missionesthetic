import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
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
  title: "Mission Esthetics — Private Waxing in Rancho Peñasquitos",
  description:
    "Private, detail-focused waxing services by Alexandra in Rancho Peñasquitos. Smooth results, client comfort, and a calm one-on-one experience.",
  keywords: [
    "waxing",
    "Rancho Peñasquitos",
    "Brazilian wax",
    "esthetics",
    "body waxing",
    "brow waxing",
    "Mission Esthetics",
    "Alexandra",
  ],
  openGraph: {
    title: "Mission Esthetics",
    description: "Private waxing and esthetics in Rancho Peñasquitos.",
    type: "website",
    url: "https://missionesthetics.com",
    siteName: "Mission Esthetics",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mission Esthetics — Private Waxing in Rancho Peñasquitos",
    description: "Private, detail-focused waxing services by Alexandra in Rancho Peñasquitos.",
  },
  metadataBase: new URL("https://missionesthetics.com"),
  alternates: {
    canonical: "https://missionesthetics.com",
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
      suppressHydrationWarning
      className={`${cormorant.variable} ${inter.variable} bg-background`}
    >
      <body className="min-h-full antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          themes={["dark", "light"]}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
