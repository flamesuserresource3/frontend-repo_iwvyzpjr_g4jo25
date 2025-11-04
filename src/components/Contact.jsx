import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="rounded-2xl border p-8 md:p-12 bg-gradient-to-br from-indigo-50 to-purple-50">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Mari Bekerja Sama</h2>
          <p className="mt-2 text-slate-600 max-w-2xl">
            Ceritakan ide Anda dan saya akan bantu mewujudkannya menjadi produk yang berarti.
          </p>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <form className="space-y-4">
              <input type="text" placeholder="Nama" className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <input type="email" placeholder="Email" className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <textarea rows="4" placeholder="Pesan" className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <button type="button" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">
                Kirim Pesan <Mail size={18} />
              </button>
            </form>
            <div className="p-6 rounded-xl bg-white/60 border">
              <p className="text-sm text-slate-600">Kontak langsung</p>
              <div className="mt-3 space-y-2">
                <a className="block" href="mailto:you@example.com">you@example.com</a>
                <a className="inline-flex items-center gap-2 text-slate-700 hover:text-indigo-700" href="https://github.com" target="_blank" rel="noreferrer">
                  <Github size={18} /> GitHub
                </a>
                <a className="inline-flex items-center gap-2 text-slate-700 hover:text-indigo-700" href="https://linkedin.com" target="_blank" rel="noreferrer">
                  <Linkedin size={18} /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-slate-500">© {new Date().getFullYear()} Portofolio • Dibuat dengan cinta</p>
      </div>
    </section>
  );
}
