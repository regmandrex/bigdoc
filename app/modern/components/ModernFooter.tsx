export default function ModernFooter() {
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
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-4">
            <a
              href="#"
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full text-xs font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-950"
              aria-label="Facebook"
            >
              Facebook
            </a>
            <a
              href="#"
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full text-xs font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-950"
              aria-label="Twitter"
            >
              Twitter
            </a>
            <a
              href="#"
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full text-xs font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-950"
              aria-label="Instagram"
            >
              Instagram
            </a>
            <a
              href="#"
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full text-xs font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-950"
              aria-label="RSS"
            >
              RSS
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

