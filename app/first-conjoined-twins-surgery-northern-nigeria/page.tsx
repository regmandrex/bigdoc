import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Dr Samson Olori Led First Ever Successful Conjoined Twins Surgery in Northern Nigeria',
  description:
    'Dr Samson Olori led the first ever successful conjoined twins surgery in northern Nigeria at UATH Abuja in 2018. Historic milestone for paediatric surgery. BBC coverage.',
};

export default function FirstNorthernNigeriaPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <article className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-16 md:px-6 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-700">
            Conjoined twins surgery · Northern Nigeria
          </p>
          <h1 className="mt-3 font-heading text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
            Dr Samson Olori led first ever successful conjoined twins surgery in northern Nigeria
          </h1>
          <p className="mt-6 max-w-3xl text-slate-600 leading-relaxed sm:text-base">
            In 2018, Dr Samson Olori led the multidisciplinary team at University of Abuja
            Teaching Hospital (UATH) in the first ever successful conjoined twins separation in
            northern Nigeria. The surgery was a historic milestone for the region and for
            paediatric surgery in Nigeria.
          </p>
          <p className="mt-4 max-w-3xl text-slate-600 leading-relaxed sm:text-base">
            Abuja, as the federal capital, sits in the north-central zone. The procedure at UATH
            brought world-class conjoined twins care to northern Nigeria, with months of planning, a
            30-person team in theatre and specialist input from paediatric surgery, anaesthesia and
            nursing. Dr Olori, as lead surgeon, has since continued to offer expert evaluation and
            surgical care for families facing this rare condition across the north and the country.
          </p>
          <p className="mt-4 max-w-3xl text-slate-600 leading-relaxed sm:text-base">
            The achievement is documented in the official UATH hospital bulletin and was covered
            by BBC News. Families in northern Nigeria and beyond can contact Dr Olori for a
            confidential discussion about conjoined twins care.
          </p>
          <p className="mt-4 max-w-3xl text-slate-600 leading-relaxed sm:text-base">
            After the separation, the Red Team managed Baby A and the Blue Team managed Baby B in
            theatre. The babies recovered in the Special Care Baby Unit and were later discharged.
            The separated twins and their parents were photographed with the Chief Medical Director,
            Professor B. A. Ekele, and other senior staff shortly after discharge—a testament to
            the success of the first ever conjoined twins surgery in northern Nigeria.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 overflow-hidden bg-slate-100">
              <img
                src="/assets/images/conjoined-twins/red-blue-teams-and-discharge.png"
                alt="Red and Blue teams in theatre, Special Care Baby Unit, and the separated twins with their parents and UATH senior staff after discharge"
                className="w-full object-cover"
              />
            </div>
            <div className="rounded-xl border border-slate-200 overflow-hidden bg-slate-100">
              <img
                src="/assets/images/conjoined-twins/staff-profile-dr-olori.png"
                alt="Dr Samson Olori, Consultant Paediatric Surgeon – UATH staff profile"
                className="w-full object-cover"
              />
            </div>
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
                <Link href="/first-paediatric-surgeon-abuja-conjoined-twins" className="underline decoration-slate-300 hover:decoration-slate-500">
                  First paediatric surgeon in Abuja to perform successful conjoined twins operation
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </article>
    </main>
  );
}
