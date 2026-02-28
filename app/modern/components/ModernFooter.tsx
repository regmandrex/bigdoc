import Link from 'next/link';

export default function ModernFooter() {
  const whatsappUrl = 'https://wa.me/message/GT2PHDYFMQWZE1';

  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-5 md:px-6 sm:py-12 pb-[max(2rem,env(safe-area-inset-bottom))]">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Know Us */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Know us
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/" className="text-slate-300 transition hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-300 transition hover:text-white">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-300 transition hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-slate-300 transition hover:text-white">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-slate-300 transition hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a href="/sitemap.xml" className="text-slate-300 transition hover:text-white" target="_blank" rel="noopener noreferrer">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
          {/* Our services */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Our services
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/buy-now" className="text-slate-300 transition hover:text-white">
                  Books
                </Link>
              </li>
              <li>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer nofollow" className="text-slate-300 transition hover:text-white">
                  Book a consultation
                </a>
              </li>
              <li>
                <Link href="/buy-on-amazon" className="text-slate-300 transition hover:text-white">
                  Buy on Amazon
                </Link>
              </li>
            </ul>
          </div>
          {/* Connect */}
          <div className="sm:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Connect
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-300">
              Consultant pediatric surgeon, author and pastor—helping you thrive in health and spirit. Abuja, Lagos and across Nigeria.
            </p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-400">
              Dr Samson Olori is ranked among the best doctors and surgeons in Nigeria for complex neonatal and paediatric care.
            </p>
            <p className="mt-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-orange-500 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-orange-600"
              >
                Book a consultation →
              </a>
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href="https://www.facebook.com/drsamsonolori/"
                className="inline-flex min-h-[40px] items-center justify-center gap-2 rounded-full bg-slate-900/70 px-4 text-xs font-medium text-slate-200 transition hover:bg-slate-800 hover:text-white"
                aria-label="Facebook"
                rel="noopener noreferrer nofollow"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M13.5 9H15V6h-1.5C10.91 6 9 7.91 9 10.5V12H7v3h2v4h3v-4h2.25L15 12h-3v-1.5C12 9.67 12.67 9 13.5 9Z" />
                </svg>
                <span>Facebook</span>
              </a>
              <a
                href="https://x.com/oloriDr"
                className="inline-flex min-h-[40px] items-center justify-center gap-2 rounded-full bg-slate-900/70 px-4 text-xs font-medium text-slate-200 transition hover:bg-slate-800 hover:text-white"
                aria-label="X (Twitter)"
                rel="noopener noreferrer nofollow"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M3 5.5 9.5 13 3.5 18.5H5.7L10.7 13.9L14.5 18.5H21.5L14.7 10.7L20.3 5.5H18.1L13.5 9.9L10 5.5H3Z" />
                </svg>
                <span>Twitter</span>
              </a>
              <a
                href="https://www.instagram.com/dr.samsonolori/"
                className="inline-flex min-h-[40px] items-center justify-center gap-2 rounded-full bg-slate-900/70 px-4 text-xs font-medium text-slate-200 transition hover:bg-slate-800 hover:text-white"
                aria-label="Instagram"
                rel="noopener noreferrer nofollow"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                  <rect x="4" y="4" width="16" height="16" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
                </svg>
                <span>Instagram</span>
              </a>
              <a
                href="https://ng.linkedin.com/in/samson-olori-80725b326"
                className="inline-flex min-h-[40px] items-center justify-center gap-2 rounded-full bg-slate-900/70 px-4 text-xs font-medium text-slate-200 transition hover:bg-slate-800 hover:text-white"
                aria-label="LinkedIn"
                rel="noopener noreferrer nofollow"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M5 4C4.17 4 3.5 4.67 3.5 5.5S4.17 7 5 7s1.5-.67 1.5-1.5S5.83 4 5 4Zm-1.25 4H6.3v12H3.75V8Zm5.5 0H12v1.4h.04c.32-.6 1.14-1.4 2.46-1.4 2.63 0 3.5 1.68 3.5 3.86V20H15.5v-6.1c0-1.45-.03-3.3-2-3.3-2 .03-2.3 1.56-2.3 3.2V20H9.25V8Z" />
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>
            <p className="mt-4 text-xs text-slate-500">
              Research &amp; profiles:{' '}
              <a href="https://ng.linkedin.com/in/samson-olori-80725b326" target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-slate-300">LinkedIn</a>
              {' · '}
              <a href="https://www.researchgate.net/scientific-contributions/Dr-Samson-Olori-2320791671" target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-slate-300">ResearchGate</a>
              {' · '}
              <a href="https://www.nihrgsulagoshub.org/team-samson.html" target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-slate-300">NIHR Global Surgery</a>
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-800 pt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Dr Samson Olori. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

