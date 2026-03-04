import { NextResponse } from 'next/server';
import { PROCEDURES_LIST } from '@/lib/surgery-procedures';
import { STATIC_ROUTES } from '@/lib/site-routes';

const baseUrl = 'https://drsamsonolori.com';

/** Only procedures that live under /surgery/[slug] (excludes conjoined-twins which is static) */
const surgeryProcedureEntries = PROCEDURES_LIST.filter((p) => p.href.startsWith('/surgery/')).map((p) => ({
  title: p.metaTitle ?? p.title,
  description: p.metaDescription,
  path: p.href,
}));

/** Every page on the site: static routes + all surgery procedure pages. One source of truth with site-routes. */
const feedEntries = [
  ...STATIC_ROUTES.map((r) => ({ title: r.title, description: r.description, path: r.path })),
  ...surgeryProcedureEntries,
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
