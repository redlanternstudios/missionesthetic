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
    images: [
      {
        url: "https://missionesthetics.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mission Esthetics - Private Waxing in Rancho Peñasquitos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mission Esthetics — Private Waxing in Rancho Peñasquitos",
    description: "Private, detail-focused waxing services by Alexandra in Rancho Peñasquitos.",
    image: "https://missionesthetics.com/og-image.png",
  },
  metadataBase: new URL("https://missionesthetics.com"),
  alternates: {
    canonical: "https://missionesthetics.com",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
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
