'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/buy-now', label: 'Books' },
];

export default function ModernNavbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => pathname === href;

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md pt-[env(safe-area-inset-top)]">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-5 md:px-6">
        <Link href="/" className="flex shrink-0 items-center gap-2 sm:gap-3" aria-label="Dr Samson Olori home">
          <Image
            src="/assets/icons/medical-logo.png"
            alt=""
            width={36}
            height={36}
            priority
            className="h-8 w-8 object-contain sm:h-9 sm:w-9"
          />
          <Image
            src="/assets/images/logo-1.png"
            alt=""
            width={120}
            height={40}
            priority
            className="h-8 w-auto sm:h-9 md:h-10"
          />
        </Link>
        <div className="hidden items-center gap-6 text-sm text-slate-700 md:flex lg:gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                'py-2 transition-colors hover:text-slate-950',
                isActive(link.href) && 'font-semibold text-slate-950'
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/about"
            className="rounded-full bg-slate-950 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-slate-800"
          >
            Let&apos;s Talk
          </Link>
        </div>
        <button
          type="button"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition hover:bg-slate-50 active:bg-slate-100 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          <span className="relative h-5 w-5">
            <span
              className={clsx(
                'absolute left-0 h-0.5 w-5 rounded-full bg-slate-800 transition-all duration-200',
                open ? 'top-2 w-5 rotate-45' : 'top-1'
              )}
            />
            <span
              className={clsx(
                'absolute left-0 top-2 h-0.5 w-5 rounded-full bg-slate-800 transition-all duration-200',
                open && 'opacity-0'
              )}
            />
            <span
              className={clsx(
                'absolute left-0 h-0.5 w-5 rounded-full bg-slate-800 transition-all duration-200',
                open ? 'top-2 w-5 -rotate-45' : 'bottom-1'
              )}
            />
          </span>
        </button>
      </nav>
      {open && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-4 py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  'rounded-lg py-3.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-slate-950',
                  isActive(link.href) && 'font-semibold text-slate-950'
                )}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/buy-on-amazon"
              className="rounded-lg py-3.5 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-950"
              onClick={() => setOpen(false)}
            >
              Buy on Amazon
            </Link>
            <Link
              href="/about"
              className="mt-2 inline-flex min-h-[44px] w-full items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-slate-800"
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

