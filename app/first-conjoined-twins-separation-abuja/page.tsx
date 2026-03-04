import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'How Dr Samson Olori Led the First Conjoined Twins Separation in Abuja',
  description:
    'How Dr Samson Olori led the first conjoined twins separation in Abuja at UATH. The 2018 surgery was the first successful separation at University of Abuja Teaching Hospital. Read the bulletin and watch BBC coverage.',
};

export default function FirstSeparationAbujaPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <article className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-16 md:px-6 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-700">
            Conjoined twins surgery · Abuja
          </p>
          <h1 className="mt-3 font-heading text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
            How Dr Samson Olori led the first conjoined twins separation in Abuja
          </h1>
          <p className="mt-6 max-w-3xl text-slate-600 leading-relaxed sm:text-base">
            In 2018, Dr Samson Olori led the multidisciplinary team at University of Abuja Teaching
            Hospital (UATH) in the first ever successful separation of conjoined twins in Abuja.
            The procedure was a historic first for the hospital and marked a major milestone for
            paediatric surgery in the capital.
          </p>
          <p className="mt-4 max-w-3xl text-slate-600 leading-relaxed sm:text-base">
            The surgery involved months of careful planning, specialist input from paediatric
            surgery, anaesthesia, nursing and allied teams, and a 30-person team in theatre. Dr
            Olori, as lead surgeon, coordinated the complex operation that has since positioned
            UATH and Abuja as a centre for expert conjoined twins care in Nigeria.
          </p>
          <p className="mt-4 max-w-3xl text-slate-600 leading-relaxed sm:text-base">
            The story was covered by BBC News and documented in the official UATH hospital
            bulletin. Families seeking evaluation or care for conjoined twins in Abuja can contact
            Dr Olori for a confidential discussion.
          </p>
          <p className="mt-4 max-w-3xl text-slate-600 leading-relaxed sm:text-base">
            In the news article &ldquo;How We Successfully Separated Conjoined Twins,&rdquo; Dr Olori
            shared that the twins were referred from Saint Mary&apos;s Catholic Hospital, Gwagwalada.
            The team divided into Red and Blue Teams for the theatre, held mock sessions for
            precision and timing, and the surgery lasted four hours. The babies were discharged
            after five weeks in the Special Care Baby Unit. Professor Bissallah Ekele, then Chief
            Medical Director of UATH, announced the news and the hospital absorbed the surgery
            bill as part of its Corporate Social Responsibility.
          </p>
          <div className="mt-8 max-w-2xl rounded-xl border border-slate-200 overflow-hidden bg-slate-100">
            <Image
              src="/assets/images/conjoined-twins/how-we-separated-article.png"
              alt="How We Successfully Separated Conjoined Twins – news article featuring Dr Samson Olori"
              width={900}
              height={600}
              className="w-full object-cover"
            />
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://wa.me/message/GT2PHDYFMQWZE1"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-2.5 text-xs font-semibold text-slate-900 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
            >
              Book a consultation
            </a>
          </div>
          <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 sm:px-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              More on conjoined twins surgery
            </p>
            <ul className="mt-3 space-y-1 text-sm text-slate-700">
              <li>
                <Link href="/conjoined-twins-surgery" className="underline decoration-slate-300 hover:decoration-slate-500">
                  Conjoined twins surgery – expert care in Abuja &amp; Nigeria
                </Link>
              </li>
              <li>
                <Link href="/first-paediatric-surgeon-abuja-conjoined-twins" className="underline decoration-slate-300 hover:decoration-slate-500">
                  First paediatric surgeon in Abuja to perform successful conjoined twins operation
                </Link>
              </li>
              <li>
                <Link href="/first-conjoined-twins-surgery-northern-nigeria" className="underline decoration-slate-300 hover:decoration-slate-500">
                  First ever successful conjoined twins surgery in northern Nigeria
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </article>
    </main>
  );
}
