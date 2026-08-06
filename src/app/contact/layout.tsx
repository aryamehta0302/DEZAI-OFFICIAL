import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact DEZAI | Hire Remote Tech Talent & AI Engineers',
  description: 'Get in touch with DEZAI to start your enterprise digital project, SaaS platform development, or apply for our Learner Hub mentorship.',
  alternates: { canonical: '/contact' },
};

import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

