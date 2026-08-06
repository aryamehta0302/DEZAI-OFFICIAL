import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: "Read DEZAI's Terms and Conditions for our digital services and platforms.",
  alternates: { canonical: '/terms' },
};

import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

