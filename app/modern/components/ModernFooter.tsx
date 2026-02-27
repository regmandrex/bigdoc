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
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full text-xs font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-950"
              aria-label="Facebook"
              rel="noopener noreferrer nofollow"
            >
              Facebook
            </a>
            <a
              href="https://x.com/oloriDr"
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full text-xs font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-950"
              aria-label="Twitter"
              rel="noopener noreferrer nofollow"
            >
              Twitter
            </a>
            <a
              href="https://www.instagram.com/dr.samsonolori/"
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full text-xs font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-950"
              aria-label="Instagram"
              rel="noopener noreferrer nofollow"
            >
              Instagram
            </a>
            <a
              href="https://ng.linkedin.com/in/samson-olori-80725b326"
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full text-xs font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-950"
              aria-label="LinkedIn"
              rel="noopener noreferrer nofollow"
            >
              LinkedIn
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

