import type { MetadataRoute } from 'next';
import { getSurgeryDetailSlugs } from '@/lib/surgery-procedures';
import { STATIC_ROUTES } from '@/lib/site-routes';

const baseUrl = 'https://drsamsonolori.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((r) => ({
    url: `${baseUrl}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
  const surgeryDetailEntries: MetadataRoute.Sitemap = getSurgeryDetailSlugs().map((slug) => ({
    url: `${baseUrl}/surgery/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));
  return [...staticEntries, ...surgeryDetailEntries];
}
