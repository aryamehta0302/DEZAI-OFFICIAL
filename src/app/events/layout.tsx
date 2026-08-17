import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'DEZAI Events | Tech Hackathons & Industry Mentorship',
  description: 'Explore the DEZAI ecosystem in action. Real moments from student hackathons, industry jury representation, and engineering mentorship.',
  alternates: { canonical: '/events' },
  openGraph: {
    title: 'DEZAI Events | Tech Hackathons & Industry Mentorship',
    description: 'Explore the DEZAI ecosystem in action. Real moments from student hackathons, industry jury representation, and engineering mentorship.',
    url: 'https://dezai.org/events',
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
