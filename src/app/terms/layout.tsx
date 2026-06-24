import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service & Protocols',
  description: "DEZAI's terms of service covering developer agreements, intellectual property ownership, and learner initiative protocols.",
  alternates: {
    canonical: 'https://dezai.com/terms',
  },
  openGraph: {
    title: 'Terms of Service & Protocols | DEZAI',
    description: "DEZAI's terms of service covering developer agreements, intellectual property ownership, and learner initiative protocols.",
    url: 'https://dezai.com/terms',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service & Protocols | DEZAI',
    description: "DEZAI's terms of service covering developer agreements, intellectual property ownership, and learner initiative protocols.",
  },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
