'use client';
import Link from 'next/link';

export const GlobalFooter = () => {
  return (
    <footer className="bg-[#050505] py-16 px-6 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-xl">bolt</span>
              </div>
              <span className="text-xl font-extrabold tracking-tighter text-white">APEX <span className="text-primary">PERFORMANCE</span></span>
            </div>
            <p className="text-slate-500 max-w-sm mb-6 leading-relaxed">
              Liderando la industria del fitness de alto rendimiento mediante ciencia, disciplina y resultados reales.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-primary text-white transition-colors">
                <span className="material-symbols-outlined text-sm">facebook</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-primary text-white transition-colors">
                <span className="material-symbols-outlined text-sm">photo_camera</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-primary text-white transition-colors">
                <span className="material-symbols-outlined text-sm">play_arrow</span>
              </a>
            </div>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Explora</h5>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><Link href="/resultados" className="hover:text-primary transition-colors">Resultados</Link></li>
              <li><Link href="/programas" className="hover:text-primary transition-colors">Programas</Link></li>
              <li><Link href="/nutricion" className="hover:text-primary transition-colors">Nutrición</Link></li>
              <li><Link href="/coaches" className="hover:text-primary transition-colors">Nuestros Coaches</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Contacto</h5>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-base">mail</span> info@apexperformance.com</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-base">call</span> +34 900 123 456</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-base">location_on</span> Madrid, España</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Apex Performance. Todos los derechos reservados.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Privacidad</Link>
            <Link href="#" className="hover:text-white transition-colors">Términos</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
