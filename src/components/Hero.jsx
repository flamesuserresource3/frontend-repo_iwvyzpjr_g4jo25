import { Github, Linkedin, Mail, Download } from 'lucide-react';

export default function Hero() {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-pink-500/20 pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24">
        <nav className="flex items-center justify-between">
          <div className="text-xl font-bold tracking-tight">Portofolio</div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-indigo-600 transition-colors">Layanan</a>
            <a href="#portfolio" className="hover:text-indigo-600 transition-colors">Karya</a>
            <a href="#contact" className="hover:text-indigo-600 transition-colors">Kontak</a>
          </div>
        </nav>

        <div className="mt-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-indigo-50 text-indigo-700 ring-1 ring-indigo-100">Tersedia untuk proyek baru</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Web & Mobile Developer, Desainer Grafis, dan Videografer
            </h1>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Saya membantu brand dan bisnis tampil menonjol dengan website cepat, aplikasi mobile nyaman,
              desain visual yang kuat, serta video yang bercerita.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">
                Hubungi Saya <Mail size={18} />
              </a>
              <a href="#portfolio" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-slate-900 text-white hover:bg-slate-800 transition-colors">
                Lihat Karya
              </a>
              <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-slate-200 hover:bg-slate-50 transition-colors">
                Unduh CV <Download size={18} />
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-full border hover:bg-slate-50 transition-colors"><Github size={20} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-full border hover:bg-slate-50 transition-colors"><Linkedin size={20} /></a>
              <a href="mailto:you@example.com" className="p-2 rounded-full border hover:bg-slate-50 transition-colors"><Mail size={20} /></a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-1">
              <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center">
                <div className="p-8 text-center">
                  <p className="text-sm uppercase tracking-widest text-slate-500">Keahlian Utama</p>
                  <ul className="mt-4 grid grid-cols-2 gap-3 text-sm">
                    <li className="px-3 py-2 rounded-md bg-slate-50">Frontend Web</li>
                    <li className="px-3 py-2 rounded-md bg-slate-50">Backend API</li>
                    <li className="px-3 py-2 rounded-md bg-slate-50">Mobile App</li>
                    <li className="px-3 py-2 rounded-md bg-slate-50">UI/UX Design</li>
                    <li className="px-3 py-2 rounded-md bg-slate-50">Branding</li>
                    <li className="px-3 py-2 rounded-md bg-slate-50">Video Editing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
