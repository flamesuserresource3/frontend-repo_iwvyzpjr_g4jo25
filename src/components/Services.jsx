import { Code, Smartphone, Palette, Video } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    desc: 'Website modern, cepat, SEO-friendly dengan performa tinggi.'
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    desc: 'Aplikasi iOS/Android dengan pengalaman pengguna yang halus.'
  },
  {
    icon: Palette,
    title: 'Desain Grafis',
    desc: 'Branding, poster, social media kit, dan materi marketing.'
  },
  {
    icon: Video,
    title: 'Videografi',
    desc: 'Video promosi, company profile, dan konten kreatif.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Layanan</h2>
          <p className="mt-2 text-slate-600">Solusi lengkap untuk kebutuhan digital dan visual Anda.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group p-6 rounded-xl border bg-white hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-lg bg-indigo-600/10 text-indigo-700 flex items-center justify-center">
                <s.icon size={20} />
              </div>
              <h3 className="mt-4 font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
              <div className="mt-4 h-1 w-0 group-hover:w-12 bg-indigo-600 transition-all" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
