import { Link } from 'react-router-dom';

const coaches = [
    {
        name: 'Carlos Mendoza',
        specialty: 'Fuerza & Hipertrofia',
        exp: '8 Años Exp.',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6dzfRrlRV385-1GBfHQMa8OoUy4Vt_RKT1El8fVMKtau6CzhhHsSxKKoSPrMpJSj-FMP_QgMo1hEBVPORko7WMGYy4FnKDntUT1UEhI6-3EITBf8apd_pAduYuOC4HQ83TvuVo_4o4OOVZG1cds9hUjl-IjjhPYOF1VqTol26yebWO3zLJqJ1YtLH8wbEmmB8x03YdAP5MKTyxTWXx592M0_mhoQZT6ybdrLK3KTlk76-p9d0pYhck2wByJtlfpzg1vJAzRN0Si5H',
        desc: 'Especialista en biomecánica aplicada al culturismo y optimización metabólica.',
        quote: '"El límite no es el fallo muscular, es tu mente."',
    },
    {
        name: 'Ana Lucía Rivera',
        specialty: 'Cross-Training Elite',
        exp: '6 Años Exp.',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFj7FQWPovFxwtsOKMKRO63x6hbk4rumO432gVZMk0_Ujw9DdPOEXnO8PKD5tCvCsAAEuRryAWms19k0Fv-5K0E_2tm15STiBlheVT2PTOumI3z_STLP1GBS0ezBew4DAiSMdIOQ_WubdQFci4eex8Dnj4rTEfIiH2nIuN4G_ZNTEOvhcOpm1HjmXeEd8PnVJByz1ELDIxkjOsPAJ778qXFpnSypeX4uxnKQzjtYaiEA4t3Mmc4IjF8O1olW-sNn1QEZZLET_7u4YB',
        desc: 'Atleta de alto rendimiento con certificación L-2 y experta en movilidad articular.',
        quote: '"La consistencia vence al talento cada día."',
    },
    {
        name: 'Diego Sánchez',
        specialty: 'Powerlifting & Explosividad',
        exp: '10 Años Exp.',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDh4VmiR5T8riTtbddDx0lyUAnDmaCx0YYQkNLBL_CsGisIZqbBEaRYigDXJNtp05kVBHhUI_IlrwqBGgk9yrUJeNLw4kirTLSaErwkPyFM0RxAsSZXO9kil47YaMug1IEXvOeaWEXKy_ihhDUbeoFeRqHdK3Hz_T2vHvJZt6pgRTFhBdT_h4LzSocFhCPCrxPs6ON1-ZdqzKODAzgA2TiA_UeTkzsVSfqpZ-lcXIuoIRH8i9acKYXer27USzlw0bZby2-geevnkAWw',
        desc: 'Especialista en levantamientos olímpicos y preparación física para deportes de contacto.',
        quote: '"Domina los básicos para conquistar lo imposible."',
    },
    {
        name: 'Valentina Torres',
        specialty: 'Condicionamiento Atlético',
        exp: '5 Años Exp.',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2jtxdIc1qxhSP-D2EjPrIxI9cSoiib5CG5tLDctTsXs5fsbx6esEXaW9TxR4nZxqvnRvzfLSNa_n1_eGOjEjunO1i4-UlqPnZ-jj3fnCcku6SSaWTxjFdqEtS8dwR4qBqkQeALsfh7kyOw2os8fD9SvBVQSTMoTxht3EqMM-LEK8osmOfWVnh-WSlYxNjj0tmQ8XLaST-2gG7mXPJORkjzyiPLJii845veb8yU6JB7cOxkrRCLRba0l5-ElX5uLgv_G7aOGxYfWO5',
        desc: 'Fisioterapeuta y experta en reacondicionamiento físico post-lesión.',
        quote: '"Cuerpo sano, rendimiento extraordinario."',
    },
    {
        name: 'Marcos Delgado',
        specialty: 'Nutrición & Performance',
        exp: '12 Años Exp.',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWerIu4DTU2GHcqKkULsBHdeth5JCWijZ-Sj0WRtS5Dz6dOO-ORUyH5GaZCbZvI0ZgSGjvagLTm_dI72wNIq29dbKrMczBiujZOcYis2BSKIlnPpuXgcMoQKDoJb8vHnQYsXEL5Z0LW_8-n5oO8UArvZ93S8gt8M-K8kFjbDp7vn5J00AFc0l6pZCDNjYaVP6NKhDfBn8teKWMHZrNOlgR9J7uGeHTDOvRp4jAmMXXHmywBGnheuEOmz22cnyLWvWgO8H-AUguDC6x',
        desc: 'Asesor nutricional de atletas pro y coach de alto rendimiento metabólico.',
        quote: '"Tu disciplina en la cocina se nota en la pista."',
    },
    {
        name: 'Sofía Estrada',
        specialty: 'Yoga & Calistenia',
        exp: '7 Años Exp.',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgSynHO3a0k8lyKM1tR87hJ8zZyHY9VgBtBPhwDfbDv_L52iRdMV2FVYq5jBSWJWgOdGr7UqujenEbI6V1R0GJNrPSf-ralspq3CtG-woBfzlqHorXsK_Ds0Kzcks3C57tHlPCqmHnyg6fQCC7R9Y1gky5xwMTUnK7-f4JxAGQ3gqubZe6HruQvnZyWSTr81fjCnbgnFwg4mJfSxYBs-JpNXg8tQw41rf5o5TP_mqyMTJX9mGETH_OuPBIGDbqAZTY7BLvjHVcA1NL',
        desc: 'Especialista en control corporal, equilibrio y fuerza estática avanzada.',
        quote: '"Fuerza es control, calma es poder."',
    },
];

const standards = [
    { icon: 'verified_user', title: 'Certificación Internacional', desc: 'Avalados por los estándares más exigentes del fitness global.' },
    { icon: 'military_tech', title: 'Experiencia Comprobada', desc: 'Más de 5,000 transformaciones exitosas en nuestra trayectoria.' },
    { icon: 'school', title: 'Capacitación Continua', desc: 'Entrenamientos mensuales sobre nuevas técnicas y ciencia deportiva.' },
    { icon: 'sentiment_very_satisfied', title: '99% Satisfacción', desc: 'Basado en evaluaciones trimestrales de nuestros miembros.' },
];

export default function Entrenadores() {
    return (
        <main>
            {/* Header */}
            <header className="pt-40 pb-20 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-6 uppercase italic leading-none">
                        CONOCE A QUIENES <br />
                        <span className="text-primary">TE VAN A GUIAR</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-slate-400 text-lg md:text-xl font-light leading-relaxed">
                        Nuestros entrenadores no son solo instructores; son atletas de élite certificados dedicados a transformar tu potencial en resultados reales.
                    </p>
                </div>
            </header>

            {/* Coaches Grid */}
            <section className="py-12 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {coaches.map((c, i) => (
                        <div key={i} className="glass-card rounded-xl overflow-hidden group hover:border-primary/50 transition-all duration-500">
                            <div className="relative aspect-[4/5] overflow-hidden">
                                <img
                                    alt={c.name}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                    src={c.img}
                                />
                                <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                                    {c.exp}
                                </div>
                            </div>
                            <div className="p-8">
                                <span className="text-primary font-bold text-xs uppercase tracking-widest mb-2 block">{c.specialty}</span>
                                <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">{c.name}</h3>
                                <p className="text-slate-400 text-sm mb-6 font-light">{c.desc}</p>
                                <div className="italic text-slate-300 border-l-2 border-primary pl-4 text-sm mb-4">
                                    {c.quote}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Our Standard */}
            <section className="py-24 px-6 bg-white/5 border-y border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black uppercase italic mb-4">Nuestro Estándar</h2>
                        <div className="h-1 w-24 bg-primary mx-auto"></div>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                        {standards.map((s, i) => (
                            <div key={i} className="space-y-4">
                                <span className="material-icons text-primary text-5xl">{s.icon}</span>
                                <h4 className="font-bold uppercase tracking-wide">{s.title}</h4>
                                <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 px-6 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/20 blur-[150px] rounded-full pointer-events-none"></div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h2 className="text-4xl md:text-6xl font-black uppercase italic mb-10 leading-tight">
                        ¿QUIERES ENTRENAR <br />CON ALGUNO DE ELLOS?
                    </h2>
                    <Link
                        to="/precios"
                        className="bg-primary hover:bg-orange-600 text-white px-10 py-6 rounded-xl font-black text-xl md:text-2xl uppercase tracking-tighter transition-all orange-glow inline-flex items-center gap-4"
                    >
                        <span>Elige tu coach y agenda tu primera sesión</span>
                        <span className="material-icons">arrow_forward</span>
                    </Link>
                </div>
            </section>
        </main>
    );
}
