export default function ModernFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-8 md:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              DR SAMSON OLORI
            </p>
            <p className="mt-2 text-sm text-slate-300">
              Pediatric surgeon, author and pastor helping you thrive in health and spirit.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 text-xs text-slate-300">
            <button type="button" className="hover:text-white">
              Facebook
            </button>
            <button type="button" className="hover:text-white">
              Twitter
            </button>
            <button type="button" className="hover:text-white">
              Instagram
            </button>
            <button type="button" className="hover:text-white">
              RSS
            </button>
          </div>
        </div>
        <div className="mt-6 border-t border-slate-800 pt-4 text-xs text-slate-500">
          Copyright {new Date().getFullYear()}. DR SAMSON OLORI
        </div>
      </div>
    </footer>
  );
}

