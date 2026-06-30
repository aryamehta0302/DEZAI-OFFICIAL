import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio & Concepts',
  description: "Explore DEZAI's architectural digital excellence. View our showcase of high-performance web development and AI.",
  alternates: { canonical: '/portfolio' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

