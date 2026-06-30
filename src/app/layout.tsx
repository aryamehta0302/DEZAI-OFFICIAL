import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageBackground from "@/components/layout/PageBackground";

export const metadata: Metadata = {
  metadataBase: new URL("https://dezai.com"),
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
    "education technology",
    "career intelligence",
    "student success OS",
    "Dubai AI agency",
  ],
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "DEZAI | Build Products. Build People. Build The Future.",
    description:
      "UAE-registered technology company helping businesses launch digital products while empowering future professionals.",
    type: "website",
    locale: "en_US",
    siteName: "DEZAI",
    url: "https://dezai.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "DEZAI | Build Products. Build People. Build The Future.",
    description:
      "UAE-registered technology company helping businesses launch digital products while empowering future professionals.",
  },
  robots: {
    index: true,
    follow: true,
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
        <PageBackground />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
