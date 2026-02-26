export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-5xl px-4 py-8 text-xs text-gray-500 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-4">
            <button type="button" className="rounded border border-gray-300 px-2 py-1">
              Select Page
            </button>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <button type="button" className="hover:text-gray-700">
              Facebook
            </button>
            <button type="button" className="hover:text-gray-700">
              Twitter
            </button>
            <button type="button" className="hover:text-gray-700">
              Instagram
            </button>
            <button type="button" className="hover:text-gray-700">
              RSS
            </button>
          </div>
        </div>
        <div className="mt-4 text-center text-[11px]">
          Copyright 2025. DR SAMSON OLORI
        </div>
      </div>
    </footer>
  );
}

