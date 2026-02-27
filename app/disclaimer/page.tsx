import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Disclaimer',
  description:
    'Important disclaimer for the website of Dr Samson Olori, consultant paediatric surgeon in Abuja, Nigeria.',
};

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-5 sm:py-16 md:px-6 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
            Legal
          </p>
          <h1 className="mt-3 font-heading text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl">
            Disclaimer
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-700 sm:text-base">
            This website is operated by Dr Samson Olori, consultant paediatric surgeon in Abuja, Nigeria.
            Please read this disclaimer carefully before using the site.
          </p>

          <div className="mt-8 space-y-5 text-sm leading-relaxed text-slate-700 sm:space-y-6 sm:text-base">
            <section>
              <h2 className="font-semibold text-slate-900">Informational purposes only</h2>
              <p className="mt-2">
                The information on this website is provided for general educational and informational purposes
                only. It is not specific medical advice for any particular person or condition and should not
                be relied on to make a diagnosis or choose a treatment.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-slate-900">No doctor–patient relationship</h2>
              <p className="mt-2">
                Viewing this website, sending a message through it, or booking a time in the online calendar
                does not in itself create a doctor–patient relationship. A doctor–patient relationship is only
                formed after an in‑person or formally arranged consultation and when you have been properly
                registered as a patient according to hospital policies.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-slate-900">Not for emergencies</h2>
              <p className="mt-2">
                This website is not designed for medical emergencies and should not be used to seek urgent
                help. If you or someone with you may be experiencing a medical emergency, call Nigeria&apos;s
                toll‑free emergency number <span className="font-semibold">112</span> or go immediately to the
                nearest emergency unit or hospital.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-slate-900">Always speak with a qualified clinician</h2>
              <p className="mt-2">
                Never ignore, delay or stop seeking medical advice from your doctor or other qualified health
                professional because of something you have read on this site or on a linked page. Any treatment
                decisions must always be made together with a licensed clinician who has examined you or your
                child and has access to full clinical information.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-slate-900">Links and external sites</h2>
              <p className="mt-2">
                This site may contain links to other websites, journals or resources. These are provided for
                convenience only. Dr Olori does not control and is not responsible for the content, accuracy or
                privacy practices of any third‑party website.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-slate-900">Limitation of responsibility</h2>
              <p className="mt-2">
                While reasonable efforts are made to keep information on this website accurate and up to date,
                no guarantee is given that it is complete, current or error‑free. Your use of the site and
                reliance on any information here is at your own risk. To the fullest extent permitted by law,
                Dr Olori is not responsible for any loss, harm or damage arising from your use of this website
                or from any action taken based on its content.
              </p>
            </section>
          </div>

          <p className="mt-8 text-sm text-slate-600">
            If you have questions about this disclaimer, you may raise them during a consultation or by
            contacting the hospital where Dr Olori practises.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/"
              className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2"
            >
              Back to home
            </Link>
            <Link
              href="/privacy"
              className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-900 transition hover:border-slate-400 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
            >
              Read privacy notice
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

