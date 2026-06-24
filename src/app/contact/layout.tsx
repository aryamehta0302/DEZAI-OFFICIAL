import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact — Start a Project or Apply as a Learner',
  description: 'Get in touch with DEZAI. Submit a business inquiry to start your project or apply to join DEZAI Learners mentorship program.',
  alternates: {
    canonical: 'https://dezai.com/contact',
  },
  openGraph: {
    title: 'Contact — Start a Project or Apply as a Learner | DEZAI',
    description: 'Get in touch with DEZAI. Submit a business inquiry to start your project or apply to join DEZAI Learners mentorship program.',
    url: 'https://dezai.com/contact',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact — Start a Project or Apply as a Learner | DEZAI',
    description: 'Get in touch with DEZAI. Submit a business inquiry to start your project or apply to join DEZAI Learners mentorship program.',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
