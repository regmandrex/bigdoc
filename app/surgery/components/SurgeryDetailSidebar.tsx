import Image from 'next/image';

const WHATSAPP_URL = 'https://wa.me/message/GT2PHDYFMQWZE1';
const PHONE = '+234 708 840 6610';

type Props = {
  title: string;
  image: string;
  imageAlt?: string;
};

export default function SurgeryDetailSidebar({ title, image, imageAlt = '' }: Props) {
  return (
    <aside className="surgery-detail-sidebar">
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-100">
          <Image
            src={image}
            alt={imageAlt || `Illustration for ${title}`}
            width={400}
            height={300}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="mt-5">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-orange-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
          >
            Book a consultation →
          </a>
        </div>
        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          Contact us
        </p>
        <p className="mt-2 flex flex-wrap items-center gap-1 text-sm text-slate-700">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="text-sky-600 underline decoration-sky-300 hover:decoration-sky-500"
          >
            WhatsApp
          </a>
          <span aria-hidden>·</span>
          <a href={`tel:${PHONE.replace(/\s/g, '')}`} className="text-sky-600 underline decoration-sky-300 hover:decoration-sky-500">
            Phone
          </a>
        </p>
      </div>
    </aside>
  );
}
