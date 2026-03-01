import { NextResponse } from 'next/server';

const baseUrl = 'https://drsamsonolori.com';

const feedEntries = [
  {
    title: 'Dr Samson Olori | Consultant Paediatric Surgeon | Abuja, Nigeria',
    description:
      'Abuja-based consultant paediatric surgeon, author and pastor. Expert care in paediatric surgery across Nigeria.',
    path: '/',
  },
  {
    title: 'About',
    description: 'Dr Samson Olori – Chief Consultant Paediatric Surgeon at UATH. Among the best doctors and surgeons in Nigeria.',
    path: '/about',
  },
  {
    title: 'Conjoined Twins Surgery',
    description:
      'Dr Samson Olori led the first successful conjoined twins separation at UATH. Expert conjoined twins surgery in Abuja and Nigeria.',
    path: '/conjoined-twins-surgery',
  },
  {
    title: 'How Dr Samson Olori Led the First Conjoined Twins Separation in Abuja',
    description: 'The 2018 surgery was the first successful separation at University of Abuja Teaching Hospital.',
    path: '/first-conjoined-twins-separation-abuja',
  },
  {
    title: 'First Paediatric Surgeon in Abuja to Perform Successful Conjoined Twins Operation',
    description: 'Huge milestone: Dr Samson Olori led the historic surgery at UATH in 2018.',
    path: '/first-paediatric-surgeon-abuja-conjoined-twins',
  },
  {
    title: 'Dr Samson Olori Led First Ever Successful Conjoined Twins Surgery in Northern Nigeria',
    description: 'Historic milestone for paediatric surgery in northern Nigeria at UATH Abuja in 2018.',
    path: '/first-conjoined-twins-surgery-northern-nigeria',
  },
  {
    title: 'Buy Now',
    description: 'Explore books by Dr Samson Olori.',
    path: '/buy-now',
  },
  {
    title: 'Buy on Amazon',
    description: 'Dr Samson Olori books on Amazon.',
    path: '/buy-on-amazon',
  },
];

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function GET() {
  const lastBuildDate = new Date().toUTCString();
  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Dr Samson Olori – Paediatric Surgeon Abuja, Nigeria</title>
    <link>${baseUrl}</link>
    <description>Consultant Paediatric Surgeon, author and pastor. Expert care in paediatric surgery, conjoined twins surgery, and neonatal surgery in Abuja and Nigeria.</description>
    <language>en-ng</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    ${feedEntries
      .map(
        (entry) => `
    <item>
      <title>${escapeXml(entry.title)}</title>
      <link>${baseUrl}${entry.path}</link>
      <description>${escapeXml(entry.description)}</description>
      <guid isPermaLink="true">${baseUrl}${entry.path}</guid>
      <pubDate>${lastBuildDate}</pubDate>
    </item>`
      )
      .join('')}
  </channel>
</rss>`;

  return new NextResponse(rss, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
