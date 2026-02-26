import type { Metadata } from 'next';
import '../globals.css';
import ModernNavbar from './components/ModernNavbar';
import ModernFooter from './components/ModernFooter';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Modernized homepage for Dr Samson Olori — pediatric surgeon, author, pastor and consultant.',
};

export default function ModernLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <ModernNavbar />
      <div className="flex-1">{children}</div>
      <ModernFooter />
    </div>
  );
}

