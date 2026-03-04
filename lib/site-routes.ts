/**
 * Single source of truth for all public site routes.
 * Used by sitemap.ts and rss.xml so every page is in both by default.
 * When you add a new page, add it here so it appears in sitemap and RSS.
 */

export type SiteRoute = {
  path: string;
  title: string;
  description: string;
  changeFrequency: 'weekly' | 'monthly' | 'yearly';
  priority: number;
};

/** All static routes (no dynamic segments). Dynamic /surgery/[slug] are added via surgery-procedures. */
export const STATIC_ROUTES: SiteRoute[] = [
  {
    path: '/',
    title: 'Dr Samson Olori | Consultant Paediatric Surgeon | Abuja, Nigeria',
    description:
      'Abuja-based consultant paediatric surgeon, author and pastor. Expert care in paediatric surgery across Nigeria.',
    changeFrequency: 'weekly',
    priority: 1,
  },
  {
    path: '/about',
    title: 'About',
    description:
      'Dr Samson Olori – Chief Consultant Paediatric Surgeon at UATH. Among the best doctors and surgeons in Nigeria.',
    changeFrequency: 'monthly',
    priority: 0.9,
  },
  {
    path: '/surgery',
    title: 'Surgery & procedures',
    description:
      'Surgery and procedures in Abuja and Nigeria: paediatric surgery, conjoined twins separation, neonatal surgery, congenital anomalies, hernia, cardiac and general procedures. Book a consultation.',
    changeFrequency: 'monthly',
    priority: 0.9,
  },
  {
    path: '/conjoined-twins-surgery',
    title: 'Conjoined Twins Surgery',
    description:
      'Dr Samson Olori led the first successful conjoined twins separation at UATH. Expert conjoined twins surgery in Abuja and Nigeria.',
    changeFrequency: 'monthly',
    priority: 0.9,
  },
  {
    path: '/first-conjoined-twins-separation-abuja',
    title: 'How Dr Samson Olori Led the First Conjoined Twins Separation in Abuja',
    description: 'The 2018 surgery was the first successful separation at University of Abuja Teaching Hospital.',
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    path: '/first-paediatric-surgeon-abuja-conjoined-twins',
    title: 'First Paediatric Surgeon in Abuja to Perform Successful Conjoined Twins Operation',
    description: 'Huge milestone: Dr Samson Olori led the historic surgery at UATH in 2018.',
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    path: '/first-conjoined-twins-surgery-northern-nigeria',
    title: 'Dr Samson Olori Led First Ever Successful Conjoined Twins Surgery in Northern Nigeria',
    description: 'Historic milestone for paediatric surgery in northern Nigeria at UATH Abuja in 2018.',
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    path: '/buy-now',
    title: 'Buy Now',
    description: 'Explore books by Dr Samson Olori.',
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    path: '/buy-on-amazon',
    title: 'Buy on Amazon',
    description: 'Dr Samson Olori books on Amazon.',
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    path: '/disclaimer',
    title: 'Disclaimer',
    description: 'Medical and general disclaimer for drsamsonolori.com.',
    changeFrequency: 'yearly',
    priority: 0.3,
  },
  {
    path: '/privacy',
    title: 'Privacy',
    description: 'Privacy policy for drsamsonolori.com.',
    changeFrequency: 'yearly',
    priority: 0.3,
  },
];
