import { ExternalLink } from 'lucide-react';

const works = [
  {
    title: 'Landing Page Startup',
    tags: ['React', 'Tailwind'],
    link: '#',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    title: 'E-commerce Mobile App',
    tags: ['Flutter', 'Firebase'],
    link: '#',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    title: 'Branding & Poster',
    tags: ['Figma', 'Illustrator'],
    link: '#',
    color: 'from-pink-500 to-rose-500'
  },
  {
    title: 'Company Profile Video',
    tags: ['Premiere Pro', 'After Effects'],
    link: '#',
    color: 'from-amber-500 to-orange-500'
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Karya Terpilih</h2>
          <p className="mt-2 text-slate-600">Beberapa proyek yang mewakili kualitas dan gaya kerja saya.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {works.map((w) => (
            <a key={w.title} href={w.link} className="group block">
              <div className={`aspect-[4/3] rounded-xl bg-gradient-to-br ${w.color} p-1`}> 
                <div className="w-full h-full rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center text-center p-4">
                  <div>
                    <h3 className="font-semibold">{w.title}</h3>
                    <p className="mt-1 text-xs text-slate-600">{w.tags.join(' • ')}</p>
                    <div className="mt-3 inline-flex items-center gap-1 text-indigo-700 group-hover:gap-2 transition-all">
                      Lihat detail <ExternalLink size={16} />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
