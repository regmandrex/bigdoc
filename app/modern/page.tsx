import Link from 'next/link';
import Image from 'next/image';

export default function ModernHomePage() {
  return (
    <main className="bg-slate-50">
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 py-16 md:flex-row md:px-6 md:py-20">
          <div className="flex-1">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
              I&apos;m Dr Samson Olori
            </p>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
              Helping you achieve success in health and spirit.
            </h1>
            <p className="mt-4 max-w-xl text-sm text-slate-600 md:text-base">
              Pediatric surgeon, author, pastor and consultant guiding you toward wholeness in every
              area of life.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/about"
                className="inline-flex items-center rounded-full bg-slate-950 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-slate-800"
              >
                Let&apos;s Talk
              </Link>
              <Link
                href="/buy-now"
                className="inline-flex items-center rounded-full border border-slate-300 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-900 transition hover:border-slate-400 hover:bg-slate-100"
              >
                Explore Books
              </Link>
            </div>
          </div>
          <div className="flex-1">
            <div className="relative mx-auto max-w-sm overflow-hidden rounded-3xl bg-slate-900/5 p-3 shadow-[0_24px_60px_rgba(15,23,42,0.18)]">
              <Image
                src="/assets/images/ochuko-2.png"
                alt="Dr Samson Olori"
                width={520}
                height={640}
                className="h-auto w-full rounded-2xl object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
            His Work
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
            Clinical excellence and prophetic insight.
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-slate-600 md:text-base">
            Dr. Samson Olori is an expert in the health sector, surgeon and consultant as well as a
            prophet. A lead surgeon in multiple successful procedures, he cares for both body and
            spirit—bringing medical expertise together with spiritual guidance.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Pediatric Surgery
              </p>
              <p className="mt-3 text-sm text-slate-700">
                Compassionate, expert care with a track record of successful pediatric surgeries.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Medical Consulting
              </p>
              <p className="mt-3 text-sm text-slate-700">
                Thoughtful, personalized medical counsel for complex health conditions.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Teaching &amp; Ministry
              </p>
              <p className="mt-3 text-sm text-slate-700">
                Preaching, teaching and sharing the gospel to strengthen the spiritual lives of many.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-16">
          <div className="flex flex-col gap-10 md:flex-row md:items-center">
            <div className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                Author of great books
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                Faith-filled resources to strengthen your journey.
              </h2>
              <p className="mt-4 max-w-xl text-sm text-slate-600 md:text-base">
                As a pediatric surgeon who also cares deeply for the spirit, Dr. Olori writes to
                illuminate God&apos;s provisions for believers—equipping you with practical, faith-based
                insight for prosperity and inheritance in Christ.
              </p>
              <div className="mt-6">
                <Link
                  href="/buy-now"
                  className="inline-flex items-center rounded-full bg-slate-950 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-slate-800"
                >
                  Get a Copy Now
                </Link>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-6 md:flex-row">
              <div className="w-full rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <Image
                  src="/assets/images/prosperity-olori.png"
                  alt="Faith For Prosperity: The Missing Link"
                  width={260}
                  height={360}
                  className="h-auto w-full rounded-md object-contain"
                />
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Faith For Prosperity
                </p>
                <p className="mt-1 text-sm font-medium text-slate-900">The Missing Link</p>
              </div>
              <div className="w-full rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <Image
                  src="/assets/images/blessing-olori.png"
                  alt="Inherit A Blessing"
                  width={260}
                  height={360}
                  className="h-auto w-full rounded-md object-contain"
                />
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Inherit A Blessing
                </p>
                <p className="mt-1 text-sm font-medium text-slate-900">Non-fiction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-16">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                Take the next step
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">
                Ready to talk about your health or spiritual journey?
              </h2>
              <p className="mt-3 max-w-xl text-sm text-slate-300 md:text-base">
                Share your situation and let&apos;s explore a path forward—whether you need medical
                guidance, spiritual counsel, or both.
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/about"
                className="inline-flex items-center rounded-full bg-white px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-950 transition hover:bg-slate-100"
              >
                Let&apos;s Talk
              </Link>
              <Link
                href="/buy-now"
                className="inline-flex items-center rounded-full border border-slate-600 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-100 transition hover:border-slate-400 hover:bg-slate-900"
              >
                View Books
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

