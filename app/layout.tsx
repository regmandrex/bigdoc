import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://drsamsonolori.com'),
  title: {
    default: 'DR SAMSON OLORI | DR SAMSON OLORI',
    template: '%s | DR SAMSON OLORI',
  },
  description:
    'Dr. Samson Olori is a pediatric surgeon, author, pastor, and consultant helping you achieve success in health and spiritual life.',
  openGraph: {
    title: 'DR SAMSON OLORI',
    description:
      'Dr. Samson Olori is a pediatric surgeon, author, pastor, and consultant helping you achieve success in health and spiritual life.',
    url: 'https://drsamsonolori.com',
    siteName: 'DR SAMSON OLORI',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'DR SAMSON OLORI',
    description:
      'Pediatric surgeon, author, pastor, and consultant helping you achieve success in health and spiritual life.',
  },
  icons: {
    icon: [
      { url: '/assets/icons/cropped-favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/assets/icons/cropped-favicon-180x180.png', sizes: '180x180', type: 'image/png' },
      { url: '/assets/icons/cropped-favicon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

