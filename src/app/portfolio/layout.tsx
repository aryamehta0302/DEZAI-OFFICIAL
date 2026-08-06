import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio & Success Stories | DEZAI Studio',
  description: "Explore DEZAI's architectural digital excellence. View our showcase of high-performance enterprise applications, mobile platforms, and AI engineering.",
  alternates: { canonical: '/portfolio' },
};

import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

