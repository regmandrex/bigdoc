import Link from 'next/link';

export default function AuthorSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-5xl px-4 py-10 md:px-6 md:py-12">
        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
          Author of Great Books
        </h2>
        <p className="mt-4 text-sm text-gray-700">
          Dr. Samson Olori is a Pediatric Surgeon who also cares for not just the body but also the
          spirit man. He is a voice in the health sector and is on the track to making positive
          impacts on the spiritual lives of many by preaching, teaching, and sharing the gospel
          around.
        </p>
        <div className="mt-6">
          <Link
            href="/buy-now"
            className="inline-flex items-center rounded-full border border-gray-900 px-6 py-2 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
          >
            Get a Copy Now
          </Link>
        </div>
      </div>
    </section>
  );
}

