import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageBackground from "@/components/layout/PageBackground";
import { AmbientLights } from "@/components/ui/AmbientLights";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://dezai.org"),
  applicationName: "DEZAI",
  authors: [{ name: "DEZAI Studio", url: "https://dezai.org/studio" }],
  creator: "DEZAI",
  publisher: "DEZAI",
  category: "technology",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "DEZAI",
  },
  title: {
    default: "DEZAI | Premium Software Engineering & AI Solutions",
    template: "%s | DEZAI",
  },
  description:
    "DEZAI builds enterprise-grade AI applications, SaaS platforms, and scalable digital products for forward-thinking businesses worldwide.",
  keywords: [
    "DEZAI",
    "software engineering",
    "AI solutions",
    "B2B SaaS development",
    "custom enterprise software",
    "digital product studio",
    "UAE tech company",
    "remote engineering team",
    "AI integration",
  ],
  alternates: {
    canonical: "https://dezai.org",
    languages: {
      "en": "https://dezai.org",
      "en-US": "https://dezai.org",
    }
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-48x48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: "/apple-icon.png",
    shortcut: "/favicon.ico",
    other: [
      {
        rel: "mask-icon",
        url: "/icons/mask-icon.svg",
      },
    ],
  },
  openGraph: {
    title: "DEZAI | Premium Software Engineering & AI Solutions",
    description:
      "DEZAI builds enterprise-grade AI applications, SaaS platforms, and scalable digital products for forward-thinking businesses worldwide.",
    url: "https://dezai.org",
    type: "website",
    locale: "en_US",
    siteName: "DEZAI",
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
    title: "DEZAI | Premium Software Engineering & AI Solutions",
    description:
      "DEZAI builds enterprise-grade AI applications, SaaS platforms, and scalable digital products for forward-thinking businesses worldwide.",
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
    google: "j5g08xXZXjqarQj6P7tZuhMR3wcCThQ7wguYPcxjkvw",
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
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`antialiased ${inter.variable} ${jetBrainsMono.variable}`} suppressHydrationWarning>
        <AmbientLights />
        <PageBackground />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </body>
    </html>
  );
}

