import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  getProcedureBySlug,
  getSurgeryDetailSlugs,
} from '@/lib/surgery-procedures';
import SurgeryDetailSidebar from '../components/SurgeryDetailSidebar';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getSurgeryDetailSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const procedure = getProcedureBySlug(slug);
  if (!procedure) return { title: 'Procedure not found' };
  return {
    title: procedure.metaTitle ?? procedure.title,
    description: procedure.metaDescription,
  };
}

export default async function SurgeryDetailPage({ params }: Props) {
  const { slug } = await params;
  const procedure = getProcedureBySlug(slug);
  if (!procedure) notFound();

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-5 sm:py-10 md:px-6 md:py-12">
          <Link
            href="/surgery"
            className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600 hover:text-sky-700"
          >
            ← Surgery & procedures
          </Link>
          <h1 className="mt-3 font-heading text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl md:text-4xl">
            {procedure.title}
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-600">
            {procedure.shortDescription}
          </p>
        </div>
      </section>

      {/* Two-column: main content + sidebar */}
      <section className="border-b border-slate-200 bg-slate-50 overflow-visible">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-5 sm:py-12 md:px-6 md:py-14 overflow-visible">
          <div className="grid gap-10 lg:grid-cols-[1fr_320px] lg:items-start">
            <div className="min-w-0">
              <div className="prose prose-slate max-w-none prose-headings:font-heading prose-headings:tracking-tight prose-p:text-slate-600 prose-p:leading-relaxed prose-ul:text-slate-600">
                {procedure.sections.map((section) => (
                  <div key={section.heading} className="mb-8">
                    <h2 className="font-heading text-xl font-semibold text-slate-900 sm:text-2xl">
                      {section.heading}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                      {section.body}
                    </p>
                    {section.list && section.list.length > 0 && (
                      <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-600 sm:text-base">
                        {section.list.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}

                {procedure.faq.length > 0 && (
                  <div className="mt-10">
                    <h2 className="font-heading text-xl font-semibold text-slate-900 sm:text-2xl">
                      Frequently asked questions
                    </h2>
                    <ul className="mt-6 space-y-6">
                      {procedure.faq.map((item) => (
                        <li key={item.q}>
                          <p className="font-semibold text-slate-900">{item.q}</p>
                          <p className="mt-1 text-sm leading-relaxed text-slate-600 sm:text-base">
                            {item.a}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 sm:px-5 sm:py-5">
                <p className="text-sm font-semibold text-slate-800">Disclaimer</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  The information on this page is for general awareness only and is not a substitute
                  for medical advice. For diagnosis and treatment, please consult a doctor. See our{' '}
                  <Link href="/disclaimer" className="font-medium text-sky-700 underline hover:text-sky-800">
                    disclaimer
                  </Link>
                  .
                </p>
              </div>
            </div>

            <SurgeryDetailSidebar
              title={procedure.title}
              image={procedure.image}
              imageAlt={`${procedure.title}`}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
