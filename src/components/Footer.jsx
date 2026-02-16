import { Link } from 'react-router-dom';

const footerLinks = [
    { label: 'Inicio', path: '/' },
    { label: 'Programas', path: '/programas' },
    { label: 'Entrenadores', path: '/entrenadores' },
    { label: 'Nutrición', path: '/nutricion' },
    { label: 'Resultados', path: '/resultados' },
    { label: 'Precios', path: '/precios' },
];

export default function Footer() {
    return (
        <footer className="bg-[#0A0A0A] border-t border-white/10 pt-16 pb-8 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Top Row: Logo + Nav */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 mb-12">
                    <div>
                        <Link to="/" className="flex items-center gap-2">
                            <span className="text-[#ff6a00] text-3xl font-black italic tracking-tighter">APEX</span>
                            <span className="text-white font-bold tracking-widest text-sm">PERFORMANCE</span>
                        </Link>
                        <p className="text-slate-500 text-sm mt-3 max-w-xs">Entrena con propósito. Transforma con resultados.</p>
                    </div>
                    <nav className="flex flex-wrap gap-6">
                        {footerLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className="text-slate-400 text-sm font-semibold uppercase tracking-widest hover:text-[#ff6a00] transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* Contact + Hours */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12 border-t border-white/5 pt-12">
                    <div>
                        <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-4">Contacto</h4>
                        <div className="space-y-3 text-sm text-slate-400">
                            <div className="flex items-center gap-3">
                                <span className="material-icons text-[#ff6a00] text-lg">email</span>
                                <span>info@apexperformance.com</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="material-icons text-[#ff6a00] text-lg">phone</span>
                                <span>+34 912 345 678</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="material-icons text-[#ff6a00] text-lg">location_on</span>
                                <span>Calle Gran Vía 42, Madrid</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-4">Horarios</h4>
                        <div className="space-y-2 text-sm text-slate-400">
                            <p>Lunes — Viernes: 6:00 – 22:00</p>
                            <p>Sábado: 8:00 – 20:00</p>
                            <p>Domingo: 9:00 – 14:00</p>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-4">Síguenos</h4>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#ff6a00] transition-colors">
                                <span className="material-icons text-white text-lg">photo_camera</span>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#ff6a00] transition-colors">
                                <span className="material-icons text-white text-lg">smart_display</span>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#ff6a00] transition-colors">
                                <span className="material-icons text-white text-lg">chat</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-white/5 pt-8 text-center text-slate-600 text-xs uppercase tracking-widest">
                    © {new Date().getFullYear()} Apex Performance. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
}
