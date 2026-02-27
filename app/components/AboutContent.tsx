import Link from 'next/link';

export default function AboutContent() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-16 md:px-6 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
            About
          </p>
          <h1 className="mt-3 font-heading text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
            Dr Samson Olori
          </h1>
          <p className="mt-4 text-base font-medium text-slate-600 sm:text-lg">
            Chief Consultant Paediatric Surgeon · University of Abuja Teaching Hospital
          </p>
          <div className="mt-8 max-w-3xl space-y-5 text-slate-700 leading-relaxed sm:mt-10 sm:space-y-6 sm:text-base">
            <p>
              Dr Samson Olori, MBBS, FWACS, is widely regarded among the leading paediatric surgeons in
              Nigeria. He is a Fellow of the West African College of Surgeons in Paediatric Surgery and
              Chief Consultant Paediatric Surgeon at the University of Abuja Teaching Hospital (UATH),
              where he established the Division of Paediatric Surgery in 2007.
            </p>
            <p>
              He completed his residency training at the University of Jos Teaching Hospital, with
              paediatric surgery rotations at Ahmadu Bello University Teaching Hospital, Zaria, and
              Obafemi Awolowo University Teaching Hospitals Complex, Ile-Ife. In 2019 he received a
              scholarship to train in paediatric urology and laparoscopy at Chang Gung Memorial
              Hospital, Taiwan.
            </p>
            <p>
              Dr Olori currently serves as Vice President of the Association of Paediatric Surgeons of
              Nigeria (APSON) and coordinates APSON&apos;s update course for candidates preparing for the
              West African College of Surgeons and National Postgraduate Medical College of Nigeria
              final examinations in paediatric surgery. At UATH he has served as Head of the
              Department of Surgery (2012–2014), Head of the Division of Paediatric Surgery
              (2008–2016) and Coordinator of postgraduate training in surgery (2009–2012).
            </p>
            <p>
              He is a devoted Christian who believes in salvation through faith in Jesus Christ and is
              passionate about children with congenital anomalies. He enjoys reading, teaching and
              writing Christian literature.
            </p>
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:mt-12 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link
              href="/"
              className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2"
            >
              Let&apos;s Talk
            </Link>
            <Link
              href="/buy-now"
              className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-900 transition hover:border-slate-400 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
            >
              Explore Books
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-14 md:px-6 md:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
            What I offer
          </p>
          <h2 className="mt-2 font-heading text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl md:text-3xl">
            Clinical excellence and spiritual insight
          </h2>

          <div className="mt-10 grid gap-5 sm:mt-12 sm:gap-6 md:grid-cols-2">
            <div className="group flex gap-5 rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-slate-300 md:p-8">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600 transition group-hover:bg-slate-200" aria-hidden>
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              </span>
              <div>
                <p className="font-heading text-lg font-semibold tracking-tight text-slate-950">
                  Pediatric surgery
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Compassionate, expert care with a track record of successful pediatric procedures.
                </p>
              </div>
            </div>

            <div className="group flex gap-5 rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-slate-300 md:p-8">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600 transition group-hover:bg-slate-200" aria-hidden>
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
              </span>
              <div>
                <p className="font-heading text-lg font-semibold tracking-tight text-slate-950">
                  Medical consulting
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Thoughtful, personalized medical counsel for complex health situations.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 md:mt-6">
            <div className="relative overflow-hidden rounded-2xl bg-slate-900 px-6 py-8 text-white md:px-10 md:py-10">
              <span className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-white/5" aria-hidden />
              <div className="relative flex gap-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white" aria-hidden>
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                </span>
                <div>
                  <p className="font-heading text-lg font-semibold tracking-tight text-white md:text-xl">
                    Teaching &amp; ministry
                  </p>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-300">
                    Preaching, teaching, and sharing the gospel to strengthen the spiritual lives of many.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-16 md:px-6 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
            Get in touch
          </p>
          <h2 className="mt-3 font-heading text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl md:text-3xl">
            Ready to talk about your health or spiritual journey?
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300 md:text-base">
            Share your situation and let&apos;s explore a path forward together.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-3 sm:mt-10">
            <Link
              href="/"
              className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-950 transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              Let&apos;s Talk
            </Link>
            <a
              href="https://calendly.com/drsamsonolori"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-orange-500 px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              Book a consultation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
