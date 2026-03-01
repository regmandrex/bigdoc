import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'First Paediatric Surgeon in Abuja to Perform Successful Conjoined Twins Operation',
  description:
    'Huge milestone: the first ever paediatric surgeon in Abuja to perform a successful conjoined twins operation. Dr Samson Olori led the historic surgery at UATH in 2018. Read the bulletin.',
};

export default function FirstPaediatricSurgeonAbujaPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <article className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-16 md:px-6 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-700">
            Conjoined twins surgery · Abuja
          </p>
          <h1 className="mt-3 font-heading text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
            First paediatric surgeon in Abuja to perform successful conjoined twins operation
          </h1>
          <p className="mt-6 max-w-3xl text-slate-600 leading-relaxed sm:text-base">
            Dr Samson Olori became the first paediatric surgeon in Abuja to perform a successful
            conjoined twins separation when he led the multidisciplinary team at University of Abuja
            Teaching Hospital (UATH) in 2018. The operation was a huge milestone for paediatric
            surgery in the capital and for Nigeria.
          </p>
          <p className="mt-4 max-w-3xl text-slate-600 leading-relaxed sm:text-base">
            Conjoined twins surgery is among the most complex procedures in paediatric surgery,
            requiring months of planning, advanced imaging and a large specialist team. As Chief
            Consultant Paediatric Surgeon at UATH, Dr Olori led a 30-person team in theatre and
            coordinated anaesthesia, nursing and allied input for the hospital&apos;s first
            successful separation.
          </p>
          <p className="mt-4 max-w-3xl text-slate-600 leading-relaxed sm:text-base">
            The achievement has been documented in the official UATH bulletin and featured in BBC
            News. Families in Abuja and across Nigeria seeking expert evaluation for conjoined
            twins can reach Dr Olori for a confidential consultation.
          </p>
          <p className="mt-4 max-w-3xl text-slate-600 leading-relaxed sm:text-base">
            The Federal Government commended UATH on the separation; the then Minister of Health,
            Professor Isaac Adewole, visited the babies in the Special Care Baby Unit and praised
            the teamwork and good management. The surgery was the second conjoined twins separation
            in the country that year—a huge milestone for paediatric surgery in the capital.
          </p>
          <div className="mt-8 max-w-2xl rounded-xl border border-slate-200 overflow-hidden bg-slate-100">
            <img
              src="/assets/images/conjoined-twins/federal-govt-news.png"
              alt="Federal Government commends UATH on separation of Siamese twins – news clipping"
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
                <Link href="/first-conjoined-twins-separation-abuja" className="underline decoration-slate-300 hover:decoration-slate-500">
                  How Dr Samson Olori led the first conjoined twins separation in Abuja
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
