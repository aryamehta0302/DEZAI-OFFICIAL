import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Learner Hub',
  description: 'Join the DEZAI Learner Hub. Empowering future tech professionals through real-world mentorship.',
  alternates: { canonical: '/learners' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

