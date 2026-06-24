import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Learners — Transform Potential Into Capability',
  description: 'DEZAI Learners offers mentorship-driven programs in Frontend, Backend, Full Stack, AI/ML, Cloud, DevOps, UI/UX, Mobile, Marketing, and Entrepreneurship.',
  alternates: {
    canonical: 'https://dezai.com/learners',
  },
  openGraph: {
    title: 'Learners — Transform Potential Into Capability | DEZAI',
    description: 'DEZAI Learners offers mentorship-driven programs in Frontend, Backend, Full Stack, AI/ML, Cloud, DevOps, UI/UX, Mobile, Marketing, and Entrepreneurship.',
    url: 'https://dezai.com/learners',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Learners — Transform Potential Into Capability | DEZAI',
    description: 'DEZAI Learners offers mentorship-driven programs in Frontend, Backend, Full Stack, AI/ML, Cloud, DevOps, UI/UX, Mobile, Marketing, and Entrepreneurship.',
  },
};

export default function LearnersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
