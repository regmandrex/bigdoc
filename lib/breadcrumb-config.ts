/**
 * Breadcrumb segment resolution for the site.
 * Uses STATIC_ROUTES and surgery procedure titles for /surgery/[slug].
 */

import { getProcedureBySlug } from '@/lib/surgery-procedures';
import { STATIC_ROUTES } from '@/lib/site-routes';

export type BreadcrumbItem = { path: string; label: string };

const pathToLabel = new Map(STATIC_ROUTES.map((r) => [r.path, r.title]));

/** Short labels for breadcrumbs (nav uses full titles from STATIC_ROUTES; we can shorten for display). */
const breadcrumbLabelOverrides: Record<string, string> = {
  '/': 'Home',
  '/about': 'About',
  '/surgery': 'Surgery & procedures',
  '/conjoined-twins-surgery': 'Conjoined twins surgery',
  '/first-conjoined-twins-separation-abuja': 'First conjoined twins separation in Abuja',
  '/first-paediatric-surgeon-abuja-conjoined-twins': 'First paediatric surgeon – conjoined twins',
  '/first-conjoined-twins-surgery-northern-nigeria': 'First conjoined twins surgery in Northern Nigeria',
  '/buy-now': 'Buy now',
  '/buy-on-amazon': 'Buy on Amazon',
  '/disclaimer': 'Disclaimer',
  '/privacy': 'Privacy',
};

function getLabel(path: string): string {
  return breadcrumbLabelOverrides[path] ?? pathToLabel.get(path) ?? path;
}

/**
 * Returns breadcrumb items for a given pathname.
 * Handles static routes and /surgery/[slug] (procedure title from getProcedureBySlug).
 */
export function getBreadcrumbSegments(pathname: string): BreadcrumbItem[] {
  if (!pathname || pathname === '/') return [];

  const segments = pathname.split('/').filter(Boolean);
  const items: BreadcrumbItem[] = [{ path: '/', label: getLabel('/') }];

  let acc = '';
  for (let i = 0; i < segments.length; i++) {
    acc += `/${segments[i]}`;

    if (acc === '/surgery') {
      items.push({ path: '/surgery', label: getLabel('/surgery') });
    } else if (acc.startsWith('/surgery/') && segments[0] === 'surgery') {
      const slug = segments[1];
      const procedure = getProcedureBySlug(slug);
      const label = procedure?.title ?? slug;
      items.push({ path: acc, label });
    } else {
      items.push({ path: acc, label: getLabel(acc) });
    }
  }

  return items;
}
