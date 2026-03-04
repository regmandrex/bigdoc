export default function Testimonials() {
  const items = [
    {
      quote:
        'Our baby needed urgent surgery shortly after birth. Dr Samson and his team explained every step clearly and walked with us through a very frightening season. Today our child is thriving.',
      name: 'Mrs Adebayo',
      location: 'Gwarinpa, Abuja',
    },
    {
      quote:
        'From the first consultation to follow-up, the care was thorough, kind and professional. We felt our child was in very safe hands.',
      name: 'Mr & Mrs Okonkwo',
      location: 'FCT, Abuja',
    },
    {
      quote:
        'I had been looking for answers for a long time. The team listened carefully, reviewed my scans and guided me to the right surgery and hospital.',
      name: 'Ibrahim Suleiman',
      location: 'Asokoro, Abuja',
    },
    {
      quote:
        'We travelled from Delta to see Dr Samson. The referral was smooth, the surgery went well, and we are grateful for the follow-up care even from a distance.',
      name: 'Mrs Ejiro Ogor',
      location: 'Warri, Delta State',
    },
  ];

  return (
    <section className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-16 md:px-6 md:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
          Patient stories
        </p>
        <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
          Experiences from families and patients
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
          These anonymised comments reflect the kind of feedback we receive from patients and families who
          have walked through surgery and recovery with our team.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <figure
              key={item.quote}
              className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
            >
              <blockquote className="text-sm leading-relaxed text-slate-700">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-4 text-sm font-medium text-slate-900">
                {item.name}
                <span className="block text-xs font-normal text-slate-500">{item.location}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

