import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { label: 'Inicio', path: '/' },
    { label: 'Programas', path: '/programas' },
    { label: 'Entrenadores', path: '/entrenadores' },
    { label: 'Nutrición', path: '/nutricion' },
    { label: 'Resultados', path: '/resultados' },
    { label: 'Precios', path: '/precios' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setMobileOpen(false);
    }, [location]);

    return (
        <nav className="fixed top-0 w-full z-50 px-4 sm:px-6 py-3">
            <div
                className={`max-w-7xl mx-auto flex items-center justify-between rounded-full px-6 sm:px-8 py-3 transition-all duration-300 border border-white/10 ${scrolled
                    ? 'bg-black/80 backdrop-blur-xl shadow-lg shadow-black/30'
                    : 'bg-[#161616]/70 backdrop-blur-md'
                    }`}
            >
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 group">
                    <span className="text-[#ff6a00] text-2xl sm:text-3xl font-black italic tracking-tighter">
                        APEX
                    </span>
                    <span className="text-white font-bold tracking-widest text-xs sm:text-sm hidden sm:block">
                        PERFORMANCE
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-semibold uppercase tracking-wider">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`transition-colors duration-200 ${location.pathname === link.path
                                ? 'text-[#ff6a00]'
                                : 'text-white/80 hover:text-[#ff6a00]'
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* CTA + Mobile Toggle */}
                <div className="flex items-center gap-3">
                    <Link
                        to="/precios"
                        className="hidden sm:inline-block bg-[#ff6a00] text-white px-5 sm:px-6 py-2 rounded-full font-bold text-xs sm:text-sm uppercase tracking-widest hover:scale-105 transition-transform orange-glow"
                    >
                        Prueba Gratis
                    </Link>
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="lg:hidden text-white p-2 hover:text-[#ff6a00] transition-colors"
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden overflow-hidden transition-all duration-300 mt-2 ${mobileOpen ? 'max-h-[500px]' : 'max-h-0'
                    }`}
            >
                <div className="bg-[#161616]/90 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-4 space-y-1 max-w-7xl mx-auto">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`block py-3 px-4 rounded-xl text-sm font-semibold uppercase tracking-wider transition-all ${location.pathname === link.path
                                ? 'text-[#ff6a00] bg-white/5'
                                : 'text-white/70 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        to="/precios"
                        className="block w-full text-center bg-[#ff6a00] text-white py-3 rounded-full font-bold text-sm uppercase tracking-widest mt-4 hover:scale-[1.02] transition-transform"
                    >
                        Prueba Gratis
                    </Link>
                </div>
            </div>
        </nav>
    );
}
