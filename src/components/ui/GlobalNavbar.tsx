'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const GlobalNavbar = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass rounded-full px-8 py-3 shadow-lg border border-white/10 bg-black/40 backdrop-blur-md">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <span className="text-primary text-3xl font-black italic tracking-tighter">APEX</span>
          <span className="text-white font-bold tracking-widest text-sm hidden sm:block">PERFORMANCE</span>
        </Link>

        {/* Links Centrales */}
        <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-wider">
          <Link 
            href="/" 
            className={`transition-colors ${pathname === '/' ? 'text-white' : 'text-slate-300 hover:text-white'}`}
          >
            Inicio
          </Link>
          <Link 
            href="/programas" 
            className={`transition-colors ${pathname === '/programas' ? 'text-white' : 'text-slate-300 hover:text-white'}`}
          >
            Programas
          </Link>
          <Link 
            href="/coaches" 
            className={`transition-colors ${pathname === '/coaches' ? 'text-white' : 'text-slate-300 hover:text-white'}`}
          >
            Coaches
          </Link>
          <Link 
            href="/resultados" 
            className={`transition-colors ${pathname === '/resultados' ? 'text-white' : 'text-slate-300 hover:text-white'}`}
          >
            Resultados
          </Link>
          <Link 
            href="/membresias" 
            className={`transition-colors ${pathname === '/membresias' ? 'text-white' : 'text-slate-300 hover:text-white'}`}
          >
            Planes
          </Link>
        </div>

        {/* Botón CTA */}
        <Link href="/contacto">
          <button className="bg-primary text-white px-6 py-2.5 rounded-full font-bold text-sm uppercase tracking-widest hover:scale-105 transition-transform glow-button shadow-lg shadow-primary/30">
            Prueba Gratis
          </button>
        </Link>

      </div>
    </nav>
  );
};
