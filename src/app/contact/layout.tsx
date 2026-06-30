import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with DEZAI to start your digital project or apply for our Learner Hub mentorship.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
