export default function ModernFooter() {
  const calendlyUrl = 'https://calendly.com/drsamsonolori'; // Replace with your Calendly link

  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-5 md:px-6 pb-[max(2rem,env(safe-area-inset-bottom))]">
        <div className="flex flex-col gap-6 sm:gap-8 md:flex-row md:items-center md:justify-between">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              DR SAMSON OLORI
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              Consultant pediatric surgeon, author and pastor helping you thrive in health and spirit.
            </p>
            <p className="mt-3 text-sm">
              <a
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="font-medium text-orange-400 underline decoration-orange-400/50 underline-offset-2 hover:text-orange-300 hover:decoration-orange-300"
              >
                Book a consultation →
              </a>
            </p>
            <p className="mt-2 text-xs text-slate-400">
              Research &amp; professional profiles:{' '}
              <a
                href="https://ng.linkedin.com/in/samson-olori-80725b326"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="underline hover:text-slate-200"
              >
                LinkedIn
              </a>{' '}
              ·{' '}
              <a
                href="https://www.researchgate.net/scientific-contributions/Dr-Samson-Olori-2320791671"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="underline hover:text-slate-200"
              >
                ResearchGate
              </a>{' '}
              ·{' '}
              <a
                href="https://independent.academia.edu/SamsonOlori"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="underline hover:text-slate-200"
              >
                Academia
              </a>{' '}
              ·{' '}
              <a
                href="https://www.nihrgsulagoshub.org/team-samson.html"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="underline hover:text-slate-200"
              >
                NIHR Global Surgery
              </a>
            </p>
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-4">
            <a
              href="https://www.facebook.com/drsamsonolori/"
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center gap-2 rounded-full bg-slate-900/40 px-4 text-xs font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-950"
              aria-label="Facebook"
              rel="noopener noreferrer nofollow"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                aria-hidden="true"
                fill="currentColor"
              >
                <path d="M13.5 9H15V6h-1.5C10.91 6 9 7.91 9 10.5V12H7v3h2v4h3v-4h2.25L15 12h-3v-1.5C12 9.67 12.67 9 13.5 9Z" />
              </svg>
              <span>Facebook</span>
            </a>
            <a
              href="https://x.com/oloriDr"
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center gap-2 rounded-full bg-slate-900/40 px-4 text-xs font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-950"
              aria-label="Twitter"
              rel="noopener noreferrer nofollow"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                aria-hidden="true"
                fill="currentColor"
              >
                <path d="M3 5.5 9.5 13 3.5 18.5H5.7L10.7 13.9L14.5 18.5H21.5L14.7 10.7L20.3 5.5H18.1L13.5 9.9L10 5.5H3Z" />
              </svg>
              <span>Twitter</span>
            </a>
            <a
              href="https://www.instagram.com/dr.samsonolori/"
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center gap-2 rounded-full bg-slate-900/40 px-4 text-xs font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-950"
              aria-label="Instagram"
              rel="noopener noreferrer nofollow"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <rect x="4" y="4" width="16" height="16" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
              </svg>
              <span>Instagram</span>
            </a>
            <a
              href="https://ng.linkedin.com/in/samson-olori-80725b326"
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center gap-2 rounded-full bg-slate-900/40 px-4 text-xs font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-950"
              aria-label="LinkedIn"
              rel="noopener noreferrer nofollow"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                aria-hidden="true"
                fill="currentColor"
              >
                <path d="M5 4C4.17 4 3.5 4.67 3.5 5.5S4.17 7 5 7s1.5-.67 1.5-1.5S5.83 4 5 4Zm-1.25 4H6.3v12H3.75V8Zm5.5 0H12v1.4h.04c.32-.6 1.14-1.4 2.46-1.4 2.63 0 3.5 1.68 3.5 3.86V20H15.5v-6.1c0-1.45-.03-3.3-2-3.3-2 .03-2.3 1.56-2.3 3.2V20H9.25V8Z" />
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
        <div className="mt-6 border-t border-slate-800 pt-4 text-xs text-slate-500">
          Copyright {new Date().getFullYear()}. DR SAMSON OLORI
        </div>
      </div>
    </footer>
  );
}

