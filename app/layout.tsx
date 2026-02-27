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
    default: 'Dr Samson Olori | Consultant Paediatric Surgeon | Abuja, Nigeria',
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
    title: 'Dr Samson Olori | Consultant Paediatric Surgeon | Abuja, Nigeria',
    description:
      'Abuja-based consultant pediatric surgeon, author and pastor. Among the best doctors and surgeons in Nigeria. Expert care in Lagos, Abuja and across Nigeria.',
    url: 'https://drsamsonolori.com',
    siteName: 'Dr Samson Olori',
    type: 'website',
    images: [
      {
        url: '/assets/images/ochuko-2.png',
        width: 1200,
        height: 630,
        alt: 'Dr Samson Olori – Consultant paediatric surgeon, author and pastor',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr Samson Olori | Consultant Paediatric Surgeon | Abuja, Nigeria',
    description:
      'Abuja-based consultant pediatric surgeon, author and pastor. Among the best doctors and surgeons in Nigeria. Expert care in Lagos, Abuja and across Nigeria.',
    images: ['/assets/images/ochuko-2.png'],
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
    jobTitle: 'Chief Consultant Paediatric Surgeon, Medical Doctor, Author',
    description:
      'One of the best doctors and surgeons in Nigeria. Abuja-based consultant pediatric surgeon, author and pastor. Expert care in Lagos, Abuja and across Nigeria.',
    url: 'https://drsamsonolori.com',
    image: 'https://drsamsonolori.com/assets/images/ochuko-2.png',
    sameAs: [
      'https://independent.academia.edu/SamsonOlori',
      'https://x.com/oloriDr',
      'https://ng.linkedin.com/in/samson-olori-80725b326',
      'https://www.facebook.com/drsamsonolori/',
      'https://www.instagram.com/dr.samsonolori/',
      'https://www.researchgate.net/scientific-contributions/Dr-Samson-Olori-2320791671',
      'https://www.nihrgsulagoshub.org/team-samson.html',
    ],
    knowsAbout: [
      'Pediatric Surgery',
      'Neonatal Surgery',
      'Congenital Anomalies',
      'Pediatric Tumor Surgery',
      'Medical Consulting',
      'Ministry',
    ],
    areaServed: [
      { '@type': 'Country', name: 'Nigeria' },
      { '@type': 'City', name: 'Abuja' },
      { '@type': 'City', name: 'Lagos' },
    ],
    address: { '@type': 'PostalAddress', addressLocality: 'Abuja', addressCountry: 'NG' },
    alumniOf: [
      {
        '@type': 'CollegeOrUniversity',
        name: 'University of Benin',
        address: { '@type': 'PostalAddress', addressCountry: 'NG' },
      },
      {
        '@type': 'EducationalOrganization',
        name: 'University of Jos Teaching Hospital',
        address: { '@type': 'PostalAddress', addressLocality: 'Jos', addressCountry: 'NG' },
      },
    ],
    worksFor: {
      '@type': 'Hospital',
      name: 'University of Abuja Teaching Hospital',
      address: { '@type': 'PostalAddress', addressLocality: 'Abuja', addressCountry: 'NG' },
    },
    affiliation: {
      '@type': 'Hospital',
      name: 'University of Abuja Teaching Hospital',
      address: { '@type': 'PostalAddress', addressLocality: 'Abuja', addressCountry: 'NG' },
    },
    memberOf: [
      {
        '@type': 'Organization',
        name: 'West African College of Surgeons (WACS)',
      },
      {
        '@type': 'Organization',
        name: 'Association of Paediatric Surgeons of Nigeria (APSON)',
      },
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="preload" href="/assets/images/logo-1.png" as="image" />
        <link
          rel="preload"
          href="/assets/images/ochuko-2-mobile.png?v=6"
          as="image"
          media="(max-width: 767px)"
        />
        <link
          rel="preload"
          href="/assets/images/ochuko-2.png"
          as="image"
          media="(min-width: 768px)"
        />
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

