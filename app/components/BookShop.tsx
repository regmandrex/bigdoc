import Link from 'next/link';
import Image from 'next/image';

export default function BookShop() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 md:px-6 md:py-16">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">Book Shop</h1>

      <section className="mt-10 border-b border-gray-200 pb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">Featured</p>
        <div className="mt-4 flex flex-col gap-6 md:flex-row">
          <div className="w-full max-w-xs md:w-auto">
            <Image
              src="/assets/images/prosperity-olori.png"
              alt="Faith For Prosperity book cover"
              width={320}
              height={450}
              className="h-auto w-full object-contain"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
              Faith For Prosperity
            </h2>
            <p className="mt-2 text-sm font-semibold text-gray-600">The Missing Link</p>
            <p className="mt-4 text-sm text-gray-700">
              This book, Faith for Prosperity: The Missing link addresses the important aspect of
              faith which has for long been ignored or underemphasized to provide the believer with
              relevant information to make their faith to be productive. The missing links are
              discussed in a manner that is easy to understand. Since faith is the anchor upon which
              the believer walks with God rest would just proclaiming faith or confessing what God
              word says make the believer to become prosperous knowing that God has pleasure in the
              prosperity of His sevants?
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="https://selar.co/5umm"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full bg-gray-900 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-gray-700"
              >
                Buy This Book - #2,000
              </Link>
              <Link
                href="https://selar.co/moqe"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-gray-900 px-5 py-2 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
              >
                Buy This Hardcopy - #4,000
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">Featured</p>
        <div className="mt-4 flex flex-col gap-6 md:flex-row">
          <div className="w-full max-w-xs md:w-auto">
            <Image
              src="/assets/images/blessing-olori.png"
              alt="Inherit A Blessing book cover"
              width={320}
              height={450}
              className="h-auto w-full object-contain"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
              Inherit A Blessing
            </h2>
            <p className="mt-2 text-sm font-semibold text-gray-600">Non-Fiction</p>
            <p className="mt-4 text-sm text-gray-700">
              There is an inheritance for the believer but not many know this, and even among those
              who know, not many understand the implications of it. Through the ages, the enemy has
              striven to make the Word of God uninteresting, a distraction for self-indulgence and
              therefore of less appeal and importamce to the world. This book is an expose’ on the
              believer’s inheriance. The Word of God is the weapon for the transformation of the
              world. It is the light that lighten the heart of men, casting out darkness and
              restoring sight to the blind hearts thereby liberating the souls of men and humanity
              from the crookedness and the shakles of the wicked one. The book very carfully distils
              the provisions of God for mankind and articulates how these provisions can be taken
              advantage of, for through knowlege the just shall be delivered from the disease of
              ignorance and poverty.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="https://selar.co/7hyt"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full bg-gray-900 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-gray-700"
              >
                Buy This Book - #2,000
              </Link>
              <Link
                href="https://selar.co/rwxj"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-gray-900 px-5 py-2 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
              >
                Buy This Hardcopy - #4,000
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

