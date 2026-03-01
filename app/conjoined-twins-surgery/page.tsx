import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Conjoined Twins Surgery',
  description:
    'Dr Samson Olori led the first successful conjoined twins separation at University of Abuja Teaching Hospital. Expert conjoined twins surgery in Abuja and Nigeria. BBC coverage.',
};

export default function ConjoinedTwinsSurgeryPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-16 md:px-6 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-700">
            Paediatric surgery
          </p>
          <h1 className="mt-3 font-heading text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
            Conjoined twins surgery – expert care in Abuja &amp; Nigeria
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Dr Samson Olori has led multidisciplinary teams in complex conjoined twins separation
            surgery at the University of Abuja Teaching Hospital (UATH), including the
            hospital&apos;s first successful separation—the Buzugbe conjoined twins—on 29 October 2018.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
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

      {/* BBC News video – prominent placement */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-16 md:px-6 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">BBC News</p>
          <h2 className="mt-2 font-heading text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
            Conjoined twins surgery
          </h2>
          <p className="mt-2 max-w-2xl text-slate-600">
            Dr Samson Olori speaks to BBC News about his role in conjoined twins surgery—expert care in the spotlight.
          </p>
          <div className="mt-6 max-w-4xl">
            <video
              className="h-auto w-full rounded-xl border border-slate-200 shadow-lg"
              controls
              playsInline
              preload="metadata"
              aria-label="BBC News: Dr Samson Olori on conjoined twins surgery"
            >
              <source src="/assets/videos/dr-samson-olori-conjoined-twins-surgery.mp4" type="video/mp4" />
              <p className="p-4 text-slate-600">
                Your browser does not support the video tag. Download the{' '}
                <a href="/assets/videos/dr-samson-olori-conjoined-twins-surgery.mp4" className="text-sky-700 underline">video file</a>.
              </p>
            </video>
          </div>
        </div>
      </section>

      {/* UATH 2018 case – enriched from bulletin & news */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-16 md:px-6 md:py-20">
          <h2 className="font-heading text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
            First conjoined twins separation at UATH
          </h2>
          <p className="mt-4 max-w-3xl text-slate-600 leading-relaxed sm:text-base">
            The University of Abuja Teaching Hospital successfully carried out the separation of
            conjoined twins on <strong>Monday, 29 October 2018</strong>—the first such medical feat
            in the history of the hospital. The twins were delivered at a private hospital in
            Gwagwalada and referred to UATH for specialist care on 11 June 2018. The separation
            surgery was led by <strong>Dr Samson Olori, Consultant Paediatric Surgeon</strong>, with
            a 30-person team in theatre. The hospital absorbed the cost of the surgery as part of
            its Corporate Social Responsibility.
          </p>
          <p className="mt-4 max-w-3xl text-slate-600 leading-relaxed sm:text-base">
            The Federal Government commended UATH on the separation. The then Minister of Health,
            Professor Isaac Adewole, visited the babies in the Special Care Baby Unit and praised
            the teamwork and good management that achieved success even in the face of challenging
            circumstances. The Chief Medical Director, Professor Bissallah Ekele, thanked the
            Minister and assured him of the hospital&apos;s expansion plans. The surgery was the
            second conjoined twins separation in the country that year, with the first at the
            Federal Medical Centre in Yola.
          </p>
          <p className="mt-4 max-w-3xl text-slate-600 leading-relaxed sm:text-base">
            Dr Olori has said that the success was largely due to teamwork and management support:
            &ldquo;I thank the Management for believing in my competence and the team for this
            success story.&rdquo; Conjoined twins separation remains one of the most complex
            operations in paediatric surgery; at UATH, Dr Olori and the team continue to offer
            expert evaluation and surgical care for families facing this rare condition in Abuja
            and across Nigeria.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
              {/* Add uath-bulletin-before-after.jpg to public/assets/images/conjoined-twins/ */}
              <img
                src="/assets/images/conjoined-twins/uath-bulletin-before-after.png"
                alt="The conjoined twins before and after separation at UATH"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
              {/* Add thirty-man-team.jpg to public/assets/images/conjoined-twins/ */}
              <img
                src="/assets/images/conjoined-twins/thirty-man-team.png"
                alt="Some members of the 30-person surgical team that separated the conjoined twins at UATH"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="mt-10 rounded-xl border border-slate-200 bg-white px-4 py-5 sm:px-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Related headlines
            </p>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
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
              <li>
                <Link href="/first-conjoined-twins-surgery-northern-nigeria" className="underline decoration-slate-300 hover:decoration-slate-500">
                  Dr Samson Olori led first ever successful conjoined twins surgery in northern Nigeria
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* How the surgery happened – from UATH bulletin & news */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-16 md:px-6 md:py-20">
          <h2 className="font-heading text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
            How the separation was achieved
          </h2>
          <p className="mt-4 max-w-3xl text-slate-600 leading-relaxed sm:text-base">
            Dr Samson Olori, as team leader, has described the steps that made the success possible.
            The first hurdle was counselling the parents to accept the conjoined babies. The team
            then ensured the twins were well-fed and optimised for surgery, with detailed clinical
            investigations to understand the extent of the joining. Anticipated problems were
            addressed with meticulous planning. A team of doctors and nurses was assembled and
            divided into <strong>Red and Blue Teams</strong>; mock sessions were conducted for
            precision and timing, and hospital management provided support by acquiring needed
            equipment.
          </p>
          <p className="mt-4 max-w-3xl text-slate-600 leading-relaxed sm:text-base">
            The surgery took place on <strong>Monday, 29 October 2018</strong>, lasted
            <strong> four hours</strong>, and the separated babies were discharged after
            <strong> five weeks</strong> of post-surgery management in the Special Care Baby Unit.
            The success was attributed to teamwork across all hospital departments.
          </p>
          <div className="mt-8 max-w-4xl">
            <img
              src="/assets/images/conjoined-twins/separation-in-pictures.png"
              alt="Conjoined babies' separation in pictures: surgical team, twins before surgery, preparation, and separation done"
              className="w-full rounded-xl border border-slate-200 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Media */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-16 md:px-6 md:py-20">
          <h2 className="font-heading text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
            Media coverage
          </h2>
          <p className="mt-3 max-w-2xl text-slate-600 leading-relaxed">
            Dr Olori has spoken to international media, including BBC News, about his role in
            conjoined twins surgery and paediatric surgical care in Nigeria. Watch the video above.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-16 md:px-6 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
            Get in touch
          </p>
          <h2 className="mt-3 font-heading text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl">
            Discuss conjoined twins or complex paediatric surgery
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
            If your child has been diagnosed with conjoined twins or another complex condition
            requiring paediatric surgical expertise, you can reach Dr Olori for a confidential
            discussion about care options in Abuja and Nigeria.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://wa.me/message/GT2PHDYFMQWZE1"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              Book a consultation
            </a>
            <Link
              href="/about"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-slate-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              About Dr Olori
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
