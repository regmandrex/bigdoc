import Image from 'next/image';

const featured: Array<{
  name: string;
  longName: string;
  logo: string | null;
  width?: number;
  height?: number;
}> = [
  {
    name: 'NTA',
    longName: 'Nigerian Television Authority',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/Logo_of_the_Nigerian_Television_Authority.png/200px-Logo_of_the_Nigerian_Television_Authority.png',
    width: 120,
    height: 40,
  },
  {
    name: 'BBC News',
    longName: 'BBC World News',
    logo: '/assets/featured/bbc-news.png',
    width: 120,
    height: 48,
  },
  {
    name: 'AIT',
    longName: 'Africa Independent Television',
    logo: '/assets/featured/ait.png',
    width: 80,
    height: 48,
  },
  {
    name: 'UATH',
    longName: 'University of Abuja Teaching Hospital',
    logo: '/assets/featured/uath.png',
    width: 200,
    height: 48,
  },
  {
    name: 'MDCN',
    longName: 'Medical and Dental Council of Nigeria',
    logo: '/assets/featured/mdcn.png',
    width: 56,
    height: 56,
  },
  {
    name: 'Premium Times',
    longName: 'Premium Times',
    logo: '/assets/featured/premium-times.png',
    width: 180,
    height: 48,
  },
  {
    name: 'GNN Liberia',
    longName: 'Global News Network Liberia',
    logo: '/assets/featured/gnn-liberia.png',
    width: 220,
    height: 48,
  },
  {
    name: 'Punch',
    longName: 'Punch Newspapers',
    logo: '/assets/featured/punch.png',
    width: 220,
    height: 48,
  },
  {
    name: 'Vanguard',
    longName: 'Vanguard',
    logo: '/assets/featured/vanguard.png',
    width: 140,
    height: 48,
  },
];

export default function FeaturedOn() {
  return (
    <section className="border-b border-slate-200 bg-white py-10 sm:py-12 md:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-5 md:px-6">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 sm:tracking-[0.25em]">
          As featured on
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-8 sm:mt-8 sm:gap-x-14 md:gap-x-20 md:gap-y-10">
          {featured.map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-center transition-transform duration-200 hover:scale-110"
              title={item.longName}
            >
              {item.logo ? (
                <Image
                  src={item.logo}
                  alt={`${item.longName} logo`}
                  width={item.width ?? 120}
                  height={item.height ?? 40}
                  loading="lazy"
                  className="h-9 w-auto max-w-[140px] object-contain sm:h-10 md:h-12 md:max-w-none"
                />
              ) : (
                <span className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-semibold text-slate-600">
                  {item.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
