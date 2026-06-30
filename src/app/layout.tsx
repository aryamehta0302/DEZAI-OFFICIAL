import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageBackground from "@/components/layout/PageBackground";
import { AmbientLights } from "@/components/ui/AmbientLights";

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://dezai.com"),
  applicationName: "DEZAI",
  authors: [{ name: "DEZAI Team", url: "https://dezai.com/studio" }],
  creator: "DEZAI",
  publisher: "DEZAI",
  title: {
    default: "DEZAI | Build Products. Build People. Build The Future.",
    template: "%s | DEZAI",
  },
  description:
    "UAE-registered technology company helping businesses launch digital products while empowering future professionals through mentorship and real-world experience.",
  keywords: [
    "DEZAI",
    "digital agency",
    "web development",
    "mobile apps",
    "UI/UX design",
    "AI integration",
    "mentorship",
    "UAE tech company",
    "SaaS development",
    "cloud solutions",
  ],
  alternates: {
    canonical: "/",
  },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/icon.png",
      },
    ],
  },
  openGraph: {
    title: "DEZAI | Build Products. Build People. Build The Future.",
    description:
      "UAE-registered technology company helping businesses launch digital products while empowering future professionals.",
    type: "website",
    locale: "en_US",
    siteName: "DEZAI",
    url: "https://dezai.com",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "DEZAI Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DEZAI | Build Products. Build People. Build The Future.",
    description:
      "UAE-registered technology company helping businesses launch digital products while empowering future professionals.",
    images: ["/icon.png"],
    creator: "@dezai",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    yahoo: "yahoo-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <AmbientLights />
        <PageBackground />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
