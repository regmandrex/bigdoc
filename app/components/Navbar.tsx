'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import clsx from 'clsx';

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => pathname === href;

  return (
    <header className="border-b border-gray-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/images/logo-1.png"
            alt="DR SAMSON OLORI logo"
            width={120}
            height={40}
            priority
          />
        </Link>
        <div className="flex items-center gap-6 text-sm text-gray-600">
          <Link
            href="/"
            className={clsx(
              'hover:text-gray-900',
              isActive('/') && 'font-semibold text-gray-900'
            )}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={clsx(
              'hover:text-gray-900',
              isActive('/about') && 'font-semibold text-gray-900'
            )}
          >
            About Us
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-1 hover:text-gray-900"
              aria-haspopup="true"
              aria-expanded={open}
            >
              <span>Shop</span>
              <span aria-hidden="true">▾</span>
            </button>
            {open && (
              <div className="absolute right-0 z-10 mt-2 w-40 rounded border border-gray-200 bg-white py-2 text-xs shadow-sm">
                <div className="px-3 pb-1 text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Books
                </div>
                <Link
                  href="/buy-now"
                  className={clsx(
                    'block px-3 py-1.5 hover:bg-gray-50',
                    isActive('/buy-now') && 'font-semibold text-gray-900'
                  )}
                >
                  Buy Now
                </Link>
                <Link
                  href="/buy-on-amazon"
                  className={clsx(
                    'block px-3 py-1.5 hover:bg-gray-50',
                    isActive('/buy-on-amazon') && 'font-semibold text-gray-900'
                  )}
                >
                  Buy on Amazon
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

