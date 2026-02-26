import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Inter, Playfair_Display } from 'next/font/google';
import ModernNavbar from './modern/components/ModernNavbar';
import ModernFooter from './modern/components/ModernFooter';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://drsamsonolori.com'),
  title: {
    default: 'Dr Samson Olori | Best Doctor & Surgeon in Nigeria',
    template: '%s | Dr Samson Olori',
  },
  description:
    'Dr. Samson Olori is one of the best doctors and surgeons in Nigeria—Abuja-based consultant pediatric surgeon, author and pastor. Expert care in Lagos, Abuja and across Nigeria.',
  keywords: [
    'best doctor in Nigeria',
    'best surgeon in Nigeria',
    'surgeon Abuja',
    'medical doctor in Abuja',
    'consultant pediatric surgeon Nigeria',
    'Dr Samson Olori',
    'medical consultant Nigeria',
    'surgeon Lagos',
    'Abuja surgeon',
  ],
  openGraph: {
    title: 'Dr Samson Olori | Best Doctor & Surgeon in Nigeria',
    description:
      'Abuja-based consultant pediatric surgeon, author and pastor. Among the best doctors and surgeons in Nigeria. Expert care in Lagos, Abuja and across Nigeria.',
    url: 'https://drsamsonolori.com',
    siteName: 'Dr Samson Olori',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Dr Samson Olori | Best Doctor & Surgeon in Nigeria',
    description:
      'Abuja-based consultant pediatric surgeon, author and pastor. Among the best doctors and surgeons in Nigeria. Expert care in Lagos, Abuja and across Nigeria.',
  },
  icons: {
    icon: [
      { url: '/assets/icons/medical-logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/assets/icons/medical-logo.png', sizes: '180x180', type: 'image/png' },
      { url: '/assets/icons/medical-logo.png', sizes: '192x192', type: 'image/png' },
    ],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name: 'Dr. Samson Olori',
    jobTitle: 'Consultant Pediatric Surgeon, Medical Consultant, Author',
    description: 'One of the best doctors and surgeons in Nigeria. Abuja-based consultant pediatric surgeon, author and pastor. Expert care in Lagos, Abuja and across Nigeria.',
    url: 'https://drsamsonolori.com',
    image: 'https://drsamsonolori.com/assets/images/ochuko-2.png',
    sameAs: [],
    knowsAbout: ['Pediatric Surgery', 'Medical Consulting', 'Ministry'],
    areaServed: [
      { '@type': 'Country', name: 'Nigeria' },
      { '@type': 'City', name: 'Abuja' },
      { '@type': 'City', name: 'Lagos' },
    ],
    address: { '@type': 'PostalAddress', addressLocality: 'Abuja', addressCountry: 'NG' },
  };

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="preload" href="/assets/images/logo-1.png" as="image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-screen flex-col overflow-x-hidden font-sans">
        <ModernNavbar />
        <div className="flex-1 pt-14 sm:pt-16">{children}</div>
        <ModernFooter />
      </body>
    </html>
  );
}

