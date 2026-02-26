import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Buy on Amazon',
  description: 'Buy books by Dr. Samson Olori on Amazon.',
};

export default function BuyOnAmazonPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-16 md:px-6 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
            Books
          </p>
          <h1 className="mt-3 font-heading text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
            Buy on Amazon
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base md:text-base">
            Dr. Samson Olori&apos;s books will be available on Amazon. For now, you can order directly
            from the book shop for fast delivery.
          </p>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-14 md:px-6 md:py-16">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8 md:p-10">
            <h2 className="font-heading text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl md:text-2xl">
              Get your copies today
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-700 sm:text-base md:text-base">
              Purchase &quot;Faith For Prosperity&quot; and &quot;Inherit A Blessing&quot; in digital or hardcopy
              from the book shop. Links open in a new tab and support secure payment.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link
                href="/buy-now"
                className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2"
              >
                Go to Book Shop
              </Link>
              <Link
                href="/about"
                className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-900 transition hover:border-slate-400 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
              >
                About Dr Olori
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-16 md:px-6 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
            Questions?
          </p>
          <h2 className="mt-3 font-heading text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl md:text-3xl">
            Need a recommendation or bulk order?
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base md:text-base">
            Reach out for speaking, ministry, or book inquiries.
          </p>
          <Link
            href="/about"
            className="mt-8 inline-flex min-h-[44px] items-center justify-center rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-950 transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-950 sm:mt-10"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </section>
    </main>
  );
}
