import Link from 'next/link';
import Image from 'next/image';

export default function BookShop() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-16 md:px-6 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
            Book Shop
          </p>
          <h1 className="mt-3 font-heading text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
            Faith-filled resources for your journey
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base md:text-base">
            Books by Dr. Samson Olori on faith, prosperity, and the believer&apos;s inheritance in Christ.
          </p>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-14 md:px-6 md:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
            Featured
          </p>
          <div className="mt-8 flex flex-col gap-8 sm:mt-10 sm:gap-12 md:flex-row md:items-start">
            <div className="w-full max-w-[200px] shrink-0 sm:max-w-[220px] md:w-72 md:max-w-[288px]">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm transition hover:border-slate-300 hover:shadow-md">
                <Image
                  src="/assets/images/prosperity-olori.png"
                  alt="Faith For Prosperity: The Missing Link"
                  width={320}
                  height={450}
                  className="h-auto w-full object-contain opacity-0 transition-opacity duration-300"
                  onLoadingComplete={(img) => {
                    img.classList.remove('opacity-0');
                  }}
                />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="font-heading text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl md:text-3xl">
                Faith For Prosperity
              </h2>
              <p className="mt-2 text-sm font-medium text-slate-600">The Missing Link</p>
              <p className="mt-5 text-sm leading-relaxed text-slate-700 sm:mt-6 sm:text-base md:text-base">
                This book, Faith for Prosperity: The Missing Link addresses the important aspect of
                faith which has for long been ignored or underemphasized—to provide the believer with
                relevant information to make their faith productive. The missing links are discussed
                in a manner that is easy to understand. Since faith is the anchor upon which the
                believer walks with God, would just proclaiming faith or confessing what God&apos;s word
                says make the believer prosperous, knowing that God has pleasure in the prosperity of
                His servants?
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
                <Link
                  href="https://selar.co/5umm"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2"
                >
                  Buy digital — ₦2,000
                </Link>
                <Link
                  href="https://selar.co/moqe"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-900 transition hover:border-slate-400 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
                >
                  Buy hardcopy — ₦4,000
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-14 md:px-6 md:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
            Featured
          </p>
          <div className="mt-8 flex flex-col gap-8 sm:mt-10 sm:gap-12 md:flex-row md:items-start">
            <div className="w-full max-w-[200px] shrink-0 sm:max-w-[220px] md:w-72 md:max-w-[288px]">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:border-slate-300 hover:shadow-md">
                <Image
                  src="/assets/images/blessing-olori.png"
                  alt="Inherit A Blessing"
                  width={320}
                  height={450}
                  className="h-auto w-full object-contain opacity-0 transition-opacity duration-300"
                  onLoadingComplete={(img) => {
                    img.classList.remove('opacity-0');
                  }}
                />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="font-heading text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl md:text-3xl">
                Inherit A Blessing
              </h2>
              <p className="mt-2 text-sm font-medium text-slate-600">Non-Fiction</p>
              <p className="mt-5 text-sm leading-relaxed text-slate-700 sm:mt-6 sm:text-base md:text-base">
                There is an inheritance for the believer, but not many know this—and even among those
                who know, not many understand the implications. Through the ages, the enemy has striven
                to make the Word of God uninteresting, a distraction for self-indulgence and therefore
                of less appeal and importance to the world. This book is an exposé on the believer&apos;s
                inheritance. The Word of God is the weapon for the transformation of the world: the
                light that lightens the heart of men, casting out darkness and restoring sight to the
                blind hearts, thereby liberating the souls of men and humanity from the crookedness
                and the shackles of the wicked one. The book carefully distils the provisions of God
                for mankind and articulates how these provisions can be taken advantage of—for through
                knowledge the just shall be delivered from the disease of ignorance and poverty.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
                <Link
                  href="https://selar.co/7hyt"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2"
                >
                  Buy digital — ₦2,000
                </Link>
                <Link
                  href="https://selar.co/rwxj"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-900 transition hover:border-slate-400 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
                >
                  Buy hardcopy — ₦4,000
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-16 md:px-6 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
            More books
          </p>
          <h2 className="mt-3 font-heading text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl md:text-3xl">
            Looking for something else?
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300 md:text-base">
            Reach out for recommendations or to connect about speaking and ministry.
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
