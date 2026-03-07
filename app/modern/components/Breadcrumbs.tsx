'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { getBreadcrumbSegments } from '@/lib/breadcrumb-config';
import { useMemo, useState, useEffect } from 'react';

export default function Breadcrumbs() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const segments = useMemo(
    () => getBreadcrumbSegments(pathname ?? ''),
    [pathname]
  );

  // Only render after mount so pathname is always correct on client (fixes mobile)
  if (!mounted) {
    return (
      <nav
        aria-label="Breadcrumb"
        className="min-h-[44px] shrink-0 border-b border-slate-200 bg-slate-100"
      >
        <div className="mx-auto w-full max-w-6xl px-4 py-3 sm:px-5 md:px-6" />
      </nav>
    );
  }

  if (!pathname || pathname === '/' || segments.length === 0) {
    return null;
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: segments.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      item: `https://drsamsonolori.com${item.path}`,
    })),
  };

  return (
    <nav
      aria-label="Breadcrumb"
      className="flex min-h-[44px] shrink-0 items-center border-b border-slate-200 bg-slate-100"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-3 sm:px-5 md:px-6">
        <ol
          className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-sm font-medium text-slate-700"
          itemScope
          itemType="https://schema.org/BreadcrumbList"
        >
          {segments.map((item, i) => {
            const isLast = i === segments.length - 1;
            return (
              <li
                key={item.path}
                className="flex items-center gap-x-1.5"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                {i > 0 && (
                  <span className="select-none text-slate-500" aria-hidden>
                    /
                  </span>
                )}
                {isLast ? (
                  <span className="text-slate-900" itemProp="name">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.path}
                    className="text-violet-600 transition hover:text-violet-700 hover:underline"
                    itemProp="item"
                  >
                    <span itemProp="name">{item.label}</span>
                  </Link>
                )}
                <meta itemProp="position" content={String(i + 1)} />
              </li>
            );
          })}
        </ol>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </nav>
  );
}
