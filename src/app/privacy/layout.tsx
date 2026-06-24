import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy & Data Governance Charter',
  description: "DEZAI's data governance charter outlining operational standards for telemetry, security, AI treatment, and privacy compliance.",
  alternates: {
    canonical: 'https://dezai.com/privacy',
  },
  openGraph: {
    title: 'Privacy Policy & Data Governance Charter | DEZAI',
    description: "DEZAI's data governance charter outlining operational standards for telemetry, security, AI treatment, and privacy compliance.",
    url: 'https://dezai.com/privacy',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy & Data Governance Charter | DEZAI',
    description: "DEZAI's data governance charter outlining operational standards for telemetry, security, AI treatment, and privacy compliance.",
  },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
