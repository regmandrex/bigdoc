import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 px-4 py-12 md:flex-row md:px-6 md:py-16">
        <div className="flex-1">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
            I’m DR SAMSON OLORI
          </p>
          <p className="mt-3 text-sm text-gray-600">
            Author, Paediatric Surgeon, Pastor And Consultant
          </p>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Helping You Achieve Success
          </h1>
          <div className="mt-8">
            <Link
              href="/about"
              className="inline-flex items-center rounded-full bg-gray-900 px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-gray-700"
            >
              Let&apos;s Talk
            </Link>
          </div>
        </div>
        <div className="flex-1">
          <div className="relative mx-auto max-w-xs overflow-hidden rounded">
            <Image
              src="/assets/images/ochuko-2.png"
              alt="Dr Samson Olori"
              width={400}
              height={400}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

