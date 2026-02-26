import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Buy on Amazon',
  description: 'Buy books by Dr. Samson Olori on Amazon.',
};

export default function BuyOnAmazonPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 md:px-6 md:py-16">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
        Buy on Amazon
      </h1>
      <p className="mt-4 text-sm text-gray-700">
        Buy books by Dr. Samson Olori on Amazon.
      </p>
    </main>
  );
}

