'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  { href: '/modern', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/buy-now', label: 'Books' },
];

export default function ModernNavbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => pathname === href;

  return (
    <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="/modern" className="flex items-center gap-3">
          <Image
            src="/assets/images/logo-1.png"
            alt="Dr Samson Olori"
            width={120}
            height={40}
            priority
          />
        </Link>
        <div className="hidden items-center gap-8 text-sm text-slate-700 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                'transition-colors hover:text-slate-950',
                isActive(link.href) && 'font-semibold text-slate-950'
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/about"
            className="rounded-full bg-slate-950 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-slate-800"
          >
            Let&apos;s Talk
          </Link>
        </div>
        <button
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-700 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          <span className="h-[2px] w-4 rounded bg-slate-800" />
        </button>
      </nav>
      {open && (
        <div className="border-t border-slate-200 bg-white py-3 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 text-sm text-slate-700">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  'py-1',
                  isActive(link.href) && 'font-semibold text-slate-950'
                )}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/about"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-slate-950 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white"
              onClick={() => setOpen(false)}
            >
              Let&apos;s Talk
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

