import Link from 'next/link';
import Image from 'next/image';
import FeaturedOn from './components/FeaturedOn';

// Tiny gray blur for smooth image load (no white flash)
const BLUR_DATA =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBEQACEQADAPEA/9k=';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="border-b border-slate-200 bg-white md:bg-gradient-to-b md:from-slate-50 md:to-white">
        {/* Mobile: cropped image (just below lapels); desktop: full portrait */}
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-0 px-4 pt-0 pb-6 sm:gap-6 sm:px-5 sm:pb-16 md:flex-row md:items-stretch md:gap-10 md:px-6 md:py-20">
          <div className="order-1 w-full md:order-2 md:flex-1 md:max-w-md">
            <div className="relative w-full md:mx-auto md:max-w-sm">
              {/* Mobile: pre-cropped image (head + lapels only) */}
              <div className="relative w-full md:hidden bg-slate-200">
                <Image
                  src="/assets/images/ochuko-2-mobile.png?v=6"
                  alt="Dr Samson Olori"
                  width={520}
                  height={416}
                  quality={92}
                  placeholder="blur"
                  blurDataURL={BLUR_DATA}
                  className="h-auto w-full object-cover object-top"
                  priority
                  sizes="100vw"
                />
              </div>
              {/* Desktop: full portrait */}
              <div className="relative hidden aspect-[13/16] w-full bg-slate-200 md:block">
                <Image
                  src="/assets/images/ochuko-2.png"
                  alt="Dr Samson Olori"
                  width={520}
                  height={640}
                  quality={92}
                  placeholder="blur"
                  blurDataURL={BLUR_DATA}
                  className="h-full w-full object-cover object-top"
                  priority
                  sizes="384px"
                />
              </div>
            </div>
          </div>
          <div className="order-2 flex-1 w-full px-0 pb-10 pt-2 text-center sm:px-5 sm:pt-6 sm:pb-0 md:order-1 md:px-0 md:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 sm:text-base sm:tracking-[0.25em]">
              I&apos;m Dr Samson Olori
            </p>
            <p className="mt-2 text-sm font-medium text-slate-600 sm:text-base">
              Author, Paediatric Surgeon, Pastor And Consultant
            </p>
            <h1 className="mt-3 font-heading text-2xl font-bold leading-tight tracking-tight text-slate-950 sm:mt-4 sm:text-3xl md:text-4xl lg:text-5xl">
              Consultant Paediatric Surgeon - Expert Surgical Care
            </h1>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600 md:mt-4 md:text-base">
              Specialised in complex neonatal and paediatric surgical care, with decades of experience serving families
              across Nigeria.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-3 md:justify-start">
              <Link
                href="/about"
                className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 sm:w-auto"
              >
                Let&apos;s Talk
              </Link>
              <Link
                href="/buy-now"
                className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-900 transition hover:border-slate-400 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 sm:w-auto"
              >
                Explore Books
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FeaturedOn />

      {/* Services card grid (Surjen-style) – Book consultation first, broader surgery, catchier colors */}
      <section className="border-b border-sky-100 bg-gradient-to-b from-sky-50/80 to-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-14 md:px-6 md:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-600">
            Our services
          </p>
          <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight text-slate-800 sm:text-3xl">
            How we can help you
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
            Surgical care, medical consulting, faith-based books, and spiritual guidance—in Abuja, Lagos and across Nigeria.
          </p>
          <div className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {/* 1. Book a consultation – first and primary */}
            <div className="group flex flex-col rounded-2xl border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-amber-50/80 p-6 shadow-sm transition hover:border-orange-300 hover:shadow-md sm:p-6">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-600" aria-hidden>
                <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              </span>
              <h3 className="mt-4 font-heading text-lg font-semibold tracking-tight text-slate-800">
                Book a consultation
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                Schedule a one-on-one—medical guidance, spiritual counsel, or both.
              </p>
              <a
                href="https://calendly.com/drsamsonolori"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="mt-4 inline-flex min-h-[44px] w-full items-center justify-center rounded-full bg-orange-500 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-orange-600"
              >
                Book now →
              </a>
            </div>
            {/* 2. Surgery – broad (not only paediatric) */}
            <div className="group flex flex-col rounded-2xl border border-sky-200 bg-white p-6 shadow-sm transition hover:border-sky-300 hover:shadow-md sm:p-6">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sky-600 transition group-hover:bg-sky-200" aria-hidden>
                <Image
                  src="/assets/icons/medical-logo.png"
                  alt=""
                  width={28}
                  height={28}
                  className="h-7 w-7 object-contain"
                />
              </span>
              <h3 className="mt-4 font-heading text-lg font-semibold tracking-tight text-slate-800">
                Surgery & surgical care
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                Expert surgical care—paediatric and general surgery, including neonatal and complex procedures.
              </p>
              <Link
                href="/about"
                className="mt-4 inline-flex min-h-[44px] w-full items-center justify-center rounded-full bg-sky-500 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-sky-600"
              >
                Enquire now →
              </Link>
            </div>
            {/* 3. Medical consulting */}
            <div className="group flex flex-col rounded-2xl border border-sky-200 bg-white p-6 shadow-sm transition hover:border-sky-300 hover:shadow-md sm:p-6">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sky-600 transition group-hover:bg-sky-200" aria-hidden>
                <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
              </span>
              <h3 className="mt-4 font-heading text-lg font-semibold tracking-tight text-slate-800">
                Medical consulting
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                Personalised medical counsel for complex surgical and general health questions.
              </p>
              <Link
                href="/about"
                className="mt-4 inline-flex min-h-[44px] w-full items-center justify-center rounded-full bg-sky-500 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-sky-600"
              >
                Enquire now →
              </Link>
            </div>
            {/* 4. Books – black & white styling */}
            <div className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-slate-300 hover:shadow-md sm:p-6">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition group-hover:bg-slate-200" aria-hidden>
                <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              </span>
              <h3 className="mt-4 font-heading text-lg font-semibold tracking-tight text-slate-800">
                Books
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                Faith For Prosperity, Inherit A Blessing—faith-filled resources for your journey.
              </p>
              <Link
                href="/buy-now"
                className="mt-4 inline-flex min-h-[44px] w-full items-center justify-center rounded-full bg-slate-900 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-slate-800"
              >
                Get a copy →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How it works + typical cases (Surjen-style, no pricing) */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-14 md:px-6 md:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-600 text-center">
            Hassle-free care
          </p>
          <h2 className="mt-3 text-center font-heading text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Looking for hassle-free surgery or specialist care in Nigeria?
          </h2>

          {/* Steps – how it works (Surjen-style: centered cards, light blue icon boxes) */}
          <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            <div className="flex flex-col items-center rounded-2xl bg-slate-50 px-5 py-6 shadow-sm text-center">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-sky-200 bg-sky-50 overflow-hidden" aria-hidden>
                <Image src="/assets/icons/step-1.png" alt="" width={48} height={48} className="h-6 w-6 object-contain" />
              </span>
              <p className="mt-4 text-sm font-semibold text-slate-900">Send us your medical query</p>
              <p className="mt-1 text-xs leading-relaxed text-slate-600">
                Share your child&apos;s or loved one&apos;s situation and any reports you have.
              </p>
            </div>
            <div className="flex flex-col items-center rounded-2xl bg-slate-50 px-5 py-6 shadow-sm text-center">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-sky-200 bg-sky-50 overflow-hidden" aria-hidden>
                <Image src="/assets/icons/step-2.png" alt="" width={48} height={48} className="h-6 w-6 object-contain" />
              </span>
              <p className="mt-4 text-sm font-semibold text-slate-900">We evaluate your query</p>
              <p className="mt-1 text-xs leading-relaxed text-slate-600">
                Dr. Olori and team review your case and advise tests or next steps.
              </p>
            </div>
            <div className="flex flex-col items-center rounded-2xl bg-slate-50 px-5 py-6 shadow-sm text-center">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-sky-200 bg-sky-50 overflow-hidden" aria-hidden>
                <Image src="/assets/icons/step-3.png" alt="" width={48} height={48} className="h-6 w-6 object-contain" />
              </span>
              <p className="mt-4 text-sm font-semibold text-slate-900">We book you for a physical consultation</p>
              <p className="mt-1 text-xs leading-relaxed text-slate-600">
                Agree a suitable hospital, date and team for your visit.
              </p>
            </div>
            <div className="flex flex-col items-center rounded-2xl bg-slate-50 px-5 py-6 shadow-sm text-center">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-sky-200 bg-sky-50 overflow-hidden" aria-hidden>
                <Image src="/assets/icons/step-4.png" alt="" width={48} height={48} className="h-6 w-6 object-contain" />
              </span>
              <p className="mt-4 text-sm font-semibold text-slate-900">We plan and book your surgery/treatment</p>
              <p className="mt-1 text-xs leading-relaxed text-slate-600">
                You receive compassionate, expert care at the selected centre.
              </p>
            </div>
            <div className="flex flex-col items-center rounded-2xl bg-slate-50 px-5 py-6 shadow-sm text-center sm:col-span-2 md:col-span-1">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-sky-200 bg-sky-50 overflow-hidden" aria-hidden>
                <Image src="/assets/icons/step-5.png" alt="" width={48} height={48} className="h-6 w-6 object-contain" />
              </span>
              <p className="mt-4 text-sm font-semibold text-slate-900">Post surgery/treatment follow-up</p>
              <p className="mt-1 text-xs leading-relaxed text-slate-600">
                Reviews, wound care and long-term follow-up as needed.
              </p>
            </div>
          </div>

          {/* Typical cases – grid cards, no pricing */}
          <div className="mt-10">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
              Typical cases we see
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {[
                {
                  title: 'Congenital anomalies',
                  body: 'Conditions present from birth such as abdominal wall defects, intestinal obstruction and more.',
                  icon: 'anomaly',
                  image: '/assets/images/case-congenital.png',
                },
                {
                  title: 'Neonatal & infant surgery',
                  body: 'Specialised surgery for newborns and infants requiring early intervention.',
                  icon: 'infant',
                  image: '/assets/images/case-neonatal.png',
                },
                {
                  title: 'Paediatric tumours',
                  body: 'Evaluation and surgical care for childhood tumours in collaboration with oncology teams.',
                  icon: 'tumour',
                  image: '/assets/images/case-tumour.png',
                },
                {
                  title: 'Other common conditions',
                  body: 'Hernias, appendicitis, thyroid surgery and other routine paediatric and general surgical cases, including second opinions.',
                  icon: 'second',
                  image: '/assets/images/case-common.png',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-sky-300 hover:shadow-md"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-sky-600" aria-hidden>
                    {item.icon === 'anomaly' && (
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <path d="M12 3 4 8v8l8 5 8-5V8Z" />
                        <path d="M9 12h6M12 9v6" />
                      </svg>
                    )}
                    {item.icon === 'infant' && (
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <circle cx="12" cy="8" r="3" />
                        <path d="M6 19a6 6 0 0 1 12 0" />
                      </svg>
                    )}
                    {item.icon === 'tumour' && (
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <circle cx="12" cy="12" r="5" />
                        <path d="M12 3v2M5 7l1.5 1.5M19 7 17.5 8.5M5 17l1.5-1.5M19 17 17.5 15.5" />
                      </svg>
                    )}
                    {item.icon === 'second' && (
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <path d="M8 5h9M8 9h5" />
                        <path d="M7 5a3 3 0 0 0-3 3v8.5a1.5 1.5 0 0 0 2.56 1.06L8.5 18H17a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3" />
                      </svg>
                    )}
                  </span>
                  <p className="mt-3 text-sm font-semibold text-slate-900">{item.title}</p>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">{item.body}</p>
                  <div className="mt-4 aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-100">
                    <Image
                      src={item.image}
                      alt=""
                      width={400}
                      height={300}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <a
                    href="https://calendly.com/drsamsonolori"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="mt-4 inline-flex min-h-[40px] w-full items-center justify-center rounded-full bg-sky-500 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-sky-600"
                  >
                    Schedule a consultation →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-14 md:px-6 md:py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
            In the media
          </p>
          <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
            BBC News: Conjoined twins surgery
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
            Dr. Samson Olori speaks to BBC News about his role in a conjoined twins surgery—expert care in the spotlight.
          </p>
          <div className="mt-8">
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-900 shadow-lg">
              <video
                className="h-auto w-full"
                controls
                playsInline
                preload="metadata"
              >
                <source src="/assets/videos/dr-samson-olori-conjoined-twins-surgery.mp4" type="video/mp4" />
                <p className="p-4 text-white">
                  Your browser does not support the video tag. Download the{' '}
                  <a href="/assets/videos/dr-samson-olori-conjoined-twins-surgery.mp4" className="underline">video file</a>.
                </p>
              </video>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-14 md:px-6 md:py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
            His Work
          </p>
          <div className="mt-3 flex items-center gap-3">
            <Image
              src="/assets/icons/medical-logo.png"
              alt=""
              width={40}
              height={40}
              className="h-10 w-10 shrink-0 object-contain"
            />
            <h2 className="font-heading text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl md:text-3xl">
              Clinical excellence and compassionate care.
            </h2>
          </div>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
            Dr Samson Olori, MBBS, FWACS, is Chief Consultant Paediatric Surgeon at the University of Abuja
            Teaching Hospital and Vice President of the Association of Paediatric Surgeons of Nigeria (APSON).
            A lead surgeon in multiple successful procedures, including complex neonatal and conjoined twins
            surgery, he cares for both body and spirit—bringing medical expertise together with spiritual
            guidance. He is widely regarded as one of the best doctors and leading paediatric surgeons in Nigeria. Expert care
            in Lagos, Abuja and across Nigeria.
          </p>

          <div className="mt-10 grid gap-5 sm:mt-12 sm:gap-6 md:grid-cols-2">
            <div className="group flex gap-5 rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:border-slate-300 md:p-8">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-slate-600 shadow-sm transition group-hover:bg-white group-hover:shadow" aria-hidden>
                <Image
                  src="/assets/icons/medical-logo.png"
                  alt=""
                  width={28}
                  height={28}
                  className="h-7 w-7 object-contain"
                />
              </span>
              <div>
                <p className="font-heading text-lg font-semibold tracking-tight text-slate-950">
                  Pediatric surgery
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Compassionate, expert care with a track record of successful pediatric surgeries.
                </p>
              </div>
            </div>

            <div className="group flex gap-5 rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:border-slate-300 md:p-8">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-slate-600 shadow-sm transition group-hover:bg-white group-hover:shadow" aria-hidden>
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
              </span>
              <div>
                <p className="font-heading text-lg font-semibold tracking-tight text-slate-950">
                  Medical consulting
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Thoughtful, personalized medical counsel for complex health conditions.
                </p>
              </div>
            </div>
          </div>

          {/* Media & recognition – hospital bulletin + research */}
          <div className="mt-12">
            <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white px-5 py-7 shadow-sm sm:px-7 sm:py-9 md:px-10 md:py-10">
              <div className="grid gap-6 sm:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] sm:gap-8">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
                    Media &amp; recognition
                  </p>
                  <h3 className="mt-3 font-heading text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl">
                    Conjoined twins separation at University of Abuja Teaching Hospital
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
                    In 2018, Dr. Samson Olori led the multidisciplinary team at University of Abuja
                    Teaching Hospital in the successful separation of conjoined twins—the first such feat
                    in the hospital&apos;s history. The surgery involved months of planning, specialist
                    input and a 30-person team in theatre.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <a
                      href="/assets/documents/uath-conjoined-twins-bulletin.pdf"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-slate-950 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
                    >
                      Read UATH hospital bulletin (PDF)
                    </a>
                    <span className="inline-flex items-center rounded-full bg-slate-100 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-600">
                      UATH · Conjoined twins · 2018
                    </span>
                  </div>
                </div>
                <div className="space-y-3 text-sm text-slate-600">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
                    Research &amp; global surgery
                  </p>
                  <p>
                    Dr. Olori contributes to global surgery research through collaborations such as the
                    NIHR Global Surgery Unit and multicentre studies on congenital anomalies, cancer
                    outcomes and surgical site infections.
                  </p>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>
                      <a
                        href="https://www.nihrgsulagoshub.org/team-samson.html"
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="text-slate-900 underline decoration-slate-400/70 underline-offset-2 hover:text-slate-700"
                      >
                        NIHR Global Surgery – Lagos Hub profile
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.researchgate.net/scientific-contributions/Dr-Samson-Olori-2320791671"
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="text-slate-900 underline decoration-slate-400/70 underline-offset-2 hover:text-slate-700"
                      >
                        Selected research on congenital anomalies &amp; pediatric surgery
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
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

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-14 md:px-6 md:py-16">
          <div className="flex flex-col gap-8 sm:gap-10 md:flex-row md:items-center">
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                Author of great books
              </p>
              <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl md:text-3xl">
                Faith-filled resources to strengthen your journey.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-600 md:text-base">
                As a consultant pediatric surgeon who also cares deeply for the spirit, Dr. Olori writes to
                illuminate God&apos;s provisions for believers—equipping you with practical, faith-based
                insight for prosperity and inheritance in Christ.
              </p>
              <div className="mt-6">
                <Link
                  href="/buy-now"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-slate-950 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2"
                >
                  Get a Copy Now
                </Link>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-5 sm:gap-6 md:flex-row">
              <div className="w-full max-w-[200px] rounded-2xl border border-slate-200 bg-slate-100 p-4 shadow-sm sm:max-w-[220px] md:max-w-[260px]">
                <Image
                  src="/assets/images/prosperity-olori.png"
                  alt="Faith For Prosperity: The Missing Link"
                  width={260}
                  height={360}
                  placeholder="blur"
                  blurDataURL={BLUR_DATA}
                  className="h-auto w-full rounded-md object-contain"
                />
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Faith For Prosperity
                </p>
                <p className="mt-1 text-sm font-medium text-slate-900">The Missing Link</p>
              </div>
              <div className="w-full max-w-[200px] rounded-2xl border border-slate-200 bg-slate-100 p-4 shadow-sm sm:max-w-[220px] md:max-w-[260px]">
                <Image
                  src="/assets/images/blessing-olori.png"
                  alt="Inherit A Blessing"
                  width={260}
                  height={360}
                  placeholder="blur"
                  blurDataURL={BLUR_DATA}
                  className="h-auto w-full rounded-md object-contain"
                />
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Inherit A Blessing
                </p>
                <p className="mt-1 text-sm font-medium text-slate-900">Non-fiction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-14 md:px-6 md:py-16">
          <div className="flex flex-col gap-6 sm:gap-8 md:flex-row md:items-center md:justify-between">
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                Take the next step
              </p>
              <h2 className="mt-3 font-heading text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl md:text-3xl">
                Ready to talk about your health or spiritual journey?
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-300 md:text-base">
                Share your situation and let&apos;s explore a path forward—whether you need medical
                guidance, spiritual counsel, or both.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-3">
              <Link
                href="/about"
                className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-white px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-950 transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-950 sm:w-auto"
              >
                Let&apos;s Talk
              </Link>
              <a
                href="https://calendly.com/drsamsonolori"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-orange-500 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-slate-950 sm:w-auto"
              >
                Book a consultation
              </a>
              <Link
                href="/buy-now"
                className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full border border-slate-600 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-100 transition hover:border-slate-400 hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-950 sm:w-auto"
              >
                View Books
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
