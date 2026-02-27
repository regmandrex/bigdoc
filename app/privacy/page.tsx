import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Simple privacy policy explaining how basic enquiry information is handled on the website of Dr Samson Olori.',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-5 sm:py-16 md:px-6 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
            Legal
          </p>
          <h1 className="mt-3 font-heading text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-700 sm:text-base">
            This page explains, in straightforward language, what personal information may be collected when you
            use this website and how it is handled.
          </p>

          <div className="mt-8 space-y-5 text-sm leading-relaxed text-slate-700 sm:space-y-6 sm:text-base">
            <section>
              <h2 className="font-semibold text-slate-900">Who operates this site</h2>
              <p className="mt-2">
                This website is operated for the professional practice of <span className="font-semibold">Dr
                Samson Olori</span>, consultant paediatric surgeon based in Abuja, Nigeria.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-slate-900">What information may be collected</h2>
              <p className="mt-2">
                The website itself does not currently use a contact form. If you click a link to send an email,
                schedule a consultation on Calendly or visit a third‑party site such as a hospital, those
                services may collect information such as your name, email address, phone number and any details
                you choose to include in your message or booking.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-slate-900">How that information is used</h2>
              <p className="mt-2">
                Information you provide through external services (for example Calendly or hospital systems) is
                used only so that appointments can be arranged, enquiries answered and clinical care considered.
                It is not used for unrelated marketing and is not sold to third parties.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-slate-900">Third‑party services and hospital records</h2>
              <p className="mt-2">
                Booking and clinical records are normally managed through hospital or clinic systems that have
                their own privacy and data protection policies. Please review the privacy information provided by
                those hospitals or services if you would like to understand in detail how they store and protect
                your data.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-slate-900">Analytics and cookies</h2>
              <p className="mt-2">
                If basic analytics tools are used, they may collect anonymous or aggregated information such as
                pages visited and approximate location. This is used to understand how the site is used and to
                improve its content. It is not used to identify individual visitors.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-slate-900">Your choices</h2>
              <p className="mt-2">
                You are free to decide how much information you share when making an enquiry or booking an
                appointment. If you have concerns about how your information is being handled, you can raise
                them directly with the hospital where you are being seen or during your consultation with Dr
                Olori.
              </p>
            </section>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/"
              className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2"
            >
              Back to home
            </Link>
            <Link
              href="/disclaimer"
              className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-900 transition hover:border-slate-400 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
            >
              Read medical disclaimer
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

