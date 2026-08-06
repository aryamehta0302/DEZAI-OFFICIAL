import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DEZAI Learners | Software Engineering Mentorship & Projects',
  description: 'Transform your potential into capability. Master frontend, backend, and AI development by building real-world commercial projects under senior mentorship.',
  alternates: { canonical: '/learners' },
};

import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

