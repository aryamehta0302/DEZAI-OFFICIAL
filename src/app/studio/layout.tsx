import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Studio & Team',
  description: 'Meet the core team behind DEZAI. A remote-first global digital agency specializing in scalable web solutions.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
