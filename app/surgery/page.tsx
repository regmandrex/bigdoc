import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { PROCEDURES_LIST } from '@/lib/surgery-procedures';

export const metadata: Metadata = {
  title: 'Surgery & procedures – what we offer',
  description:
    'Surgery and procedures in Abuja and Nigeria: paediatric surgery, conjoined twins separation, neonatal surgery, congenital anomalies, paediatric tumours, hernia and common conditions. Book a consultation.',
};

const HOW_IT_WORKS = [
  { title: 'Get in touch', body: 'Reach us by phone, WhatsApp or email with your child’s condition or referral.' },
  { title: 'Consultation', body: 'We arrange a consultation to evaluate your child and discuss the best path forward.' },
  { title: 'Surgery & follow-up', body: 'We plan and coordinate surgery where needed, with ongoing follow-up care.' },
];

export default function SurgeryPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-16 md:px-6 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-700">
            Surgery &amp; procedures
          </p>
          <h1 className="mt-3 font-heading text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
            What we treat – expert care in Abuja &amp; Nigeria
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            From complex paediatric surgery and conjoined twins separation to general, cardiac and fertility procedures—Dr Samson Olori and his colleagues provide transparent, expert surgical care for children, adults and families.
          </p>
          <div className="mt-8">
            <a
              href="https://wa.me/message/GT2PHDYFMQWZE1"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Book a consultation
            </a>
          </div>
        </div>
      </section>

      {/* How it works – 3 steps */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-14 md:px-6 md:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
            Your journey
          </p>
          <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            How it works
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {HOW_IT_WORKS.map((step, i) => (
              <div
                key={step.title}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-sm font-bold text-sky-700"
                  aria-hidden
                >
                  {i + 1}
                </span>
                <p className="mt-4 text-sm font-semibold text-slate-900">{step.title}</p>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Procedure cards – all link to detail page (or conjoined-twins page), not WhatsApp */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-14 md:px-6 md:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
            Conditions we treat
          </p>
          <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
            Surgery &amp; procedures
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">
            Select an area below to read more and book a consultation.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROCEDURES_LIST.map((item) => (
              <div
                key={item.slug}
                className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:border-sky-300 hover:shadow-md"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={item.image}
                    alt=""
                    width={400}
                    height={300}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-heading text-lg font-semibold tracking-tight text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                    {item.shortDescription}
                  </p>
                  <Link
                    href={item.href}
                    className="mt-4 inline-flex min-h-[40px] w-full items-center justify-center rounded-full bg-sky-500 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-sky-600"
                  >
                    View details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-14 md:px-6 md:py-16">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-10">
            <h2 className="font-heading text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl">
              Not sure which procedure applies?
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-slate-600">
              Send us your details or referral and we’ll guide you to the right care.
            </p>
            <a
              href="https://wa.me/message/GT2PHDYFMQWZE1"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="mt-6 inline-flex min-h-[48px] items-center justify-center rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
            >
              Book a consultation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
