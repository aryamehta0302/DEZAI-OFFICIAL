import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solutions — Engineered for Impact',
  description: 'Explore DEZAI\'s portfolio of AI-powered solutions designed around measurable problems, scalable approaches, and tangible real-world outcomes for institutions and organizations.',
  alternates: {
    canonical: 'https://dezai.com/portfolio',
  },
  openGraph: {
    title: 'Solutions — Engineered for Impact | DEZAI',
    description: 'Explore DEZAI\'s portfolio of AI-powered solutions designed around measurable problems, scalable approaches, and tangible real-world outcomes for institutions and organizations.',
    url: 'https://dezai.com/portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solutions — Engineered for Impact | DEZAI',
    description: 'Explore DEZAI\'s portfolio of AI-powered solutions designed around measurable problems, scalable approaches, and tangible real-world outcomes for institutions and organizations.',
  },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
