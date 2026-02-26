import Link from 'next/link';
import Image from 'next/image';
import FeaturedOn from './components/FeaturedOn';

// Tiny gray blur for smooth image load (no white flash)
const BLUR_DATA =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBEQACEQADAPEA/9k=';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="border-b border-slate-200 bg-white md:bg-gradient-to-b md:from-slate-50 md:to-white">
        {/* Mobile: cropped image (just below lapels); desktop: full portrait */}
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-0 px-4 pt-0 pb-6 sm:gap-6 sm:px-5 sm:pb-16 md:flex-row md:items-stretch md:gap-10 md:px-6 md:py-20">
          <div className="order-1 w-full md:order-2 md:flex-1 md:max-w-md">
            <div className="relative w-full md:mx-auto md:max-w-sm">
              {/* Mobile: pre-cropped image (head + lapels only) */}
              <div className="relative w-full md:hidden bg-slate-200">
                <Image
                  src="/assets/images/ochuko-2-mobile.png?v=6"
                  alt="Dr Samson Olori"
                  width={520}
                  height={416}
                  quality={92}
                  placeholder="blur"
                  blurDataURL={BLUR_DATA}
                  className="h-auto w-full object-cover object-top"
                  priority
                  sizes="100vw"
                />
              </div>
              {/* Desktop: full portrait */}
              <div className="relative hidden aspect-[13/16] w-full bg-slate-200 md:block">
                <Image
                  src="/assets/images/ochuko-2.png"
                  alt="Dr Samson Olori"
                  width={520}
                  height={640}
                  quality={92}
                  placeholder="blur"
                  blurDataURL={BLUR_DATA}
                  className="h-full w-full object-cover object-top"
                  priority
                  sizes="384px"
                />
              </div>
            </div>
          </div>
          <div className="order-2 flex-1 w-full px-0 pb-10 pt-6 text-center sm:px-5 sm:pb-0 md:order-1 md:px-0 md:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 sm:text-base sm:tracking-[0.25em]">
              I&apos;m Dr Samson Olori
            </p>
            <p className="mt-2 text-sm font-medium text-slate-600 sm:text-base">
              Author, Paediatric Surgeon, Pastor And Consultant
            </p>
            <h1 className="mt-3 font-heading text-2xl font-bold leading-tight tracking-tight text-slate-950 sm:mt-4 sm:text-3xl md:text-4xl lg:text-5xl">
              Helping You Achieve Success
            </h1>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600 md:mt-4 md:text-base">
              Abuja-based consultant pediatric surgeon, author and pastor guiding you toward wholeness in every
              area of life.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-3 md:justify-start">
              <Link
                href="/about"
                className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 sm:w-auto"
              >
                Let&apos;s Talk
              </Link>
              <Link
                href="/buy-now"
                className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-900 transition hover:border-slate-400 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 sm:w-auto"
              >
                Explore Books
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FeaturedOn />

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-14 md:px-6 md:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
            In the media
          </p>
          <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
            BBC News: Conjoined twins surgery
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
            Dr. Samson Olori speaks to BBC News about his role in a conjoined twins surgery—expert care in the spotlight.
          </p>
          <div className="mt-8">
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-900 shadow-lg">
              <video
                className="h-auto w-full"
                controls
                playsInline
                preload="metadata"
              >
                <source src="/assets/videos/dr-samson-olori-conjoined-twins-surgery.mp4" type="video/mp4" />
                <p className="p-4 text-white">
                  Your browser does not support the video tag. Download the{' '}
                  <a href="/assets/videos/dr-samson-olori-conjoined-twins-surgery.mp4" className="underline">video file</a>.
                </p>
              </video>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-14 md:px-6 md:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
            His Work
          </p>
          <div className="mt-3 flex items-center gap-3">
            <Image
              src="/assets/icons/medical-logo.png"
              alt=""
              width={40}
              height={40}
              className="h-10 w-10 shrink-0 object-contain"
            />
            <h2 className="font-heading text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl md:text-3xl">
              Clinical excellence and prophetic insight.
            </h2>
          </div>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
            Dr. Samson Olori is among the best doctors and surgeons in Nigeria—Abuja-based expert in the health sector, surgeon and consultant as well as a prophet. A lead surgeon in multiple successful procedures, he cares for both body and spirit—bringing medical expertise together with spiritual guidance. Expert care in Lagos, Abuja and across Nigeria.
          </p>

          <div className="mt-10 grid gap-5 sm:mt-12 sm:gap-6 md:grid-cols-2">
            <div className="group flex gap-5 rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:border-slate-300 md:p-8">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-slate-600 shadow-sm transition group-hover:bg-white group-hover:shadow" aria-hidden>
                <Image
                  src="/assets/icons/medical-logo.png"
                  alt=""
                  width={28}
                  height={28}
                  className="h-7 w-7 object-contain"
                />
              </span>
              <div>
                <p className="font-heading text-lg font-semibold tracking-tight text-slate-950">
                  Pediatric surgery
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Compassionate, expert care with a track record of successful pediatric surgeries.
                </p>
              </div>
            </div>

            <div className="group flex gap-5 rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:border-slate-300 md:p-8">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-slate-600 shadow-sm transition group-hover:bg-white group-hover:shadow" aria-hidden>
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
              </span>
              <div>
                <p className="font-heading text-lg font-semibold tracking-tight text-slate-950">
                  Medical consulting
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Thoughtful, personalized medical counsel for complex health conditions.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="relative overflow-hidden rounded-2xl bg-slate-900 px-6 py-8 text-white md:px-10 md:py-10">
              <span className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-white/5" aria-hidden />
              <div className="relative flex gap-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white" aria-hidden>
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                </span>
                <div>
                  <p className="font-heading text-lg font-semibold tracking-tight text-white md:text-xl">
                    Teaching &amp; ministry
                  </p>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-300">
                    Preaching, teaching, and sharing the gospel to strengthen the spiritual lives of many.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-14 md:px-6 md:py-16">
          <div className="flex flex-col gap-8 sm:gap-10 md:flex-row md:items-center">
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                Author of great books
              </p>
              <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl md:text-3xl">
                Faith-filled resources to strengthen your journey.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-600 md:text-base">
                As a consultant pediatric surgeon who also cares deeply for the spirit, Dr. Olori writes to
                illuminate God&apos;s provisions for believers—equipping you with practical, faith-based
                insight for prosperity and inheritance in Christ.
              </p>
              <div className="mt-6">
                <Link
                  href="/buy-now"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-slate-950 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2"
                >
                  Get a Copy Now
                </Link>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-5 sm:gap-6 md:flex-row">
              <div className="w-full max-w-[200px] rounded-2xl border border-slate-200 bg-slate-100 p-4 shadow-sm sm:max-w-[220px] md:max-w-[260px]">
                <Image
                  src="/assets/images/prosperity-olori.png"
                  alt="Faith For Prosperity: The Missing Link"
                  width={260}
                  height={360}
                  placeholder="blur"
                  blurDataURL={BLUR_DATA}
                  className="h-auto w-full rounded-md object-contain"
                />
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Faith For Prosperity
                </p>
                <p className="mt-1 text-sm font-medium text-slate-900">The Missing Link</p>
              </div>
              <div className="w-full max-w-[200px] rounded-2xl border border-slate-200 bg-slate-100 p-4 shadow-sm sm:max-w-[220px] md:max-w-[260px]">
                <Image
                  src="/assets/images/blessing-olori.png"
                  alt="Inherit A Blessing"
                  width={260}
                  height={360}
                  placeholder="blur"
                  blurDataURL={BLUR_DATA}
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
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-14 md:px-6 md:py-16">
          <div className="flex flex-col gap-6 sm:gap-8 md:flex-row md:items-center md:justify-between">
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                Take the next step
              </p>
              <h2 className="mt-3 font-heading text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl md:text-3xl">
                Ready to talk about your health or spiritual journey?
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-300 md:text-base">
                Share your situation and let&apos;s explore a path forward—whether you need medical
                guidance, spiritual counsel, or both.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-3">
              <Link
                href="/about"
                className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-white px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-950 transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-950 sm:w-auto"
              >
                Let&apos;s Talk
              </Link>
              <a
                href="https://calendly.com/drsamsonolori"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-orange-500 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-slate-950 sm:w-auto"
              >
                Book a consultation
              </a>
              <Link
                href="/buy-now"
                className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full border border-slate-600 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-100 transition hover:border-slate-400 hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-950 sm:w-auto"
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
