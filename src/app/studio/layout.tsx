import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Studio — Digital Solutions',
  description: 'DEZAI Studio offers UI/UX Design, Web Development, Mobile Apps, SaaS Development, Cloud Solutions, AI Integrations, and Digital Marketing.',
  alternates: {
    canonical: 'https://dezai.com/studio',
  },
  openGraph: {
    title: 'Studio — Digital Solutions | DEZAI',
    description: 'DEZAI Studio offers UI/UX Design, Web Development, Mobile Apps, SaaS Development, Cloud Solutions, AI Integrations, and Digital Marketing.',
    url: 'https://dezai.com/studio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Studio — Digital Solutions | DEZAI',
    description: 'DEZAI Studio offers UI/UX Design, Web Development, Mobile Apps, SaaS Development, Cloud Solutions, AI Integrations, and Digital Marketing.',
  },
};

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
