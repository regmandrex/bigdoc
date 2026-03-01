'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const mainLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
];

const booksDropdown = [
  { href: '/buy-now', label: 'Buy now' },
  { href: '/buy-on-amazon', label: 'Buy on Amazon' },
];

export default function ModernNavbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [booksOpen, setBooksOpen] = useState(false);

  const isActive = (href: string) => pathname === href;
  const isBooksActive = booksDropdown.some((d) => d.href === pathname);

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-md pt-[env(safe-area-inset-top)]">
      {/* Top bar: contact + primary CTA (Surjen-style) */}
      <div className="border-b border-slate-100 bg-slate-50">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2 sm:px-5 md:px-6">
          <a
            href="tel:+2347088406610"
            className="shrink-0 text-xs font-medium text-slate-600 transition hover:text-slate-950 sm:text-sm whitespace-nowrap"
          >
            Call us: +234 708 840 6610
          </a>
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/message/GT2PHDYFMQWZE1"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="rounded-full bg-orange-500 px-4 py-1.5 text-xs font-semibold text-white transition hover:bg-orange-600"
            >
              Book a consultation
            </a>
          </div>
        </div>
      </div>
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
          {mainLinks.map((link) => (
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
          <div className="relative group">
            <button
              type="button"
              className={clsx(
                'flex items-center gap-1 py-2 transition-colors hover:text-slate-950',
                isBooksActive && 'font-semibold text-slate-950'
              )}
              aria-haspopup="true"
              aria-expanded="false"
            >
              Books
              <svg className="h-4 w-4 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="invisible absolute left-0 top-full pt-1 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="min-w-[180px] rounded-lg border border-slate-200 bg-white py-1 shadow-lg">
                {booksDropdown.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={clsx(
                      'block px-4 py-2.5 text-sm transition hover:bg-slate-50 hover:text-slate-950',
                      isActive(item.href) && 'font-semibold text-slate-950 bg-slate-50'
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <a
            href="https://wa.me/message/GT2PHDYFMQWZE1"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="rounded-full bg-slate-950 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-slate-800"
          >
            Let&apos;s Talk
          </a>
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
            {mainLinks.map((link) => (
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
            <div>
              <button
                type="button"
                className="flex w-full items-center justify-between rounded-lg py-3.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-slate-950"
                onClick={() => setBooksOpen((v) => !v)}
                aria-expanded={booksOpen}
              >
                Books
                <svg
                  className={clsx('h-4 w-4 transition-transform', booksOpen && 'rotate-180')}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {booksOpen && (
                <div className="pl-3 pb-2 flex flex-col gap-0.5">
                  {booksDropdown.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="rounded-lg py-2.5 pl-3 text-sm text-slate-600 transition hover:bg-slate-50 hover:text-slate-950"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <a
              href="https://wa.me/message/GT2PHDYFMQWZE1"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="mt-2 inline-flex min-h-[44px] w-full items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-slate-800"
              onClick={() => setOpen(false)}
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

