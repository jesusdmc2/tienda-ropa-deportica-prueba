import { useState } from 'react';
import { Link } from 'react-router-dom';

const plans = [
    {
        name: 'Starter',
        monthly: 49,
        yearly: 39,
        desc: 'Ideal para quienes buscan empezar su transformación con una base sólida.',
        features: [
            'Plan de entrenamiento semanal',
            'Acceso a la app de seguimiento',
            'Comunidad Apex online',
            '1 check-in mensual con coach',
        ],
        cta: 'Empieza hoy',
        popular: false,
    },
    {
        name: 'Pro',
        monthly: 89,
        yearly: 69,
        desc: 'El favorito de la comunidad. Entrenamiento y nutrición integrados para resultados reales.',
        features: [
            'Todo lo del plan Starter',
            'Plan nutricional personalizado',
            'Check-ins semanales con coach',
            'Acceso a todos los programas',
            'Recetario +200 opciones',
            'Soporte prioritario por chat',
        ],
        cta: 'Únete al plan Pro',
        popular: true,
    },
    {
        name: 'Élite',
        monthly: 149,
        yearly: 119,
        desc: 'Para los que no aceptan menos que lo mejor. Servicio premium sin límites.',
        features: [
            'Todo lo del plan Pro',
            'Sesiones 1-on-1 con tu coach',
            'Plan de suplementación',
            'Análisis de composición corporal',
            'Acceso a eventos exclusivos',
            'Garantía de resultados 90 días',
        ],
        cta: 'Sé Élite',
        popular: false,
    },
];

const faqs = [
    {
        q: '¿Puedo cambiar de plan en cualquier momento?',
        a: 'Sí, puedes actualizar o cambiar tu plan en cualquier momento desde tu perfil. Los cambios se aplican en el siguiente ciclo de facturación.',
    },
    {
        q: '¿Qué incluye la garantía de resultados del plan Élite?',
        a: 'Si después de 90 días siguiendo el plan no ves resultados medibles, te devolvemos el 100% de tu inversión. Sin preguntas.',
    },
    {
        q: '¿Necesito equipo especial para entrenar?',
        a: 'No. Nuestros coaches adaptan los planes a tu equipo disponible, ya sea un gym completo o entrenamiento en casa con mínimo equipamiento.',
    },
    {
        q: '¿Los planes nutricionales consideran restricciones alimentarias?',
        a: 'Absolutamente. Cada plan se diseña teniendo en cuenta alergias, intolerancias, preferencias y estilo de vida.',
    },
    {
        q: '¿Cuánto tiempo tarda en verse resultados?',
        a: 'La mayoría de nuestros miembros reportan cambios visibles entre la semana 3 y 4. Resultados significativos se consolidan entre la semana 8 y 12.',
    },
];

export default function Precios() {
    const [annual, setAnnual] = useState(false);
    const [openFaq, setOpenFaq] = useState(null);

    return (
        <main className="pt-40 pb-20">
            {/* Hero */}
            <section className="max-w-4xl mx-auto text-center px-6 mb-16">
                <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] text-primary bg-primary/10 rounded-full uppercase">
                    Membresías Exclusivas
                </span>
                <h1 className="text-5xl md:text-7xl font-black mb-6 leading-[1.1] uppercase">
                    Invierte en ti.<br />
                    <span className="text-primary">Sin letra pequeña.</span>
                </h1>
                <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light">
                    Transparencia total. Sin contratos de permanencia ni costes ocultos. Solo el mejor entrenamiento para alcanzar tu máximo potencial.
                </p>
            </section>

            {/* Billing Toggle — pill-style like Stitch */}
            <div className="flex items-center justify-center gap-4 mb-20 px-6">
                <div className="bg-white/5 p-1.5 rounded-full flex items-center">
                    <button
                        onClick={() => setAnnual(false)}
                        className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all ${!annual
                            ? 'bg-white/10 shadow-sm text-white'
                            : 'text-slate-500 hover:text-slate-300'
                            }`}
                    >
                        Mensual
                    </button>
                    <button
                        onClick={() => setAnnual(true)}
                        className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all ${annual
                            ? 'bg-white/10 shadow-sm text-white'
                            : 'text-slate-500 hover:text-slate-300'
                            }`}
                    >
                        Anual
                    </button>
                </div>
                <span className="bg-primary text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter whitespace-nowrap">
                    -20%
                </span>
            </div>

            {/* Pricing Cards */}
            <section className="max-w-7xl mx-auto px-6 mb-24 pt-2">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    {plans.map((p, i) => (
                        p.popular ? (
                            /* Pro card wrapper with absolute badge */
                            <div key={i} className="relative z-10">
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-black px-6 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-lg shadow-primary/30 z-20">
                                    Popular
                                </div>
                                <div className="h-full bg-white/[0.08] border-2 border-primary rounded-xl p-8 flex flex-col backdrop-blur-md shadow-[0_0_40px_-10px_rgba(255,106,0,0.3)] transform md:scale-105">
                                    <div className="mb-8">
                                        <h3 className="text-sm font-black tracking-widest text-primary uppercase mb-2">{p.name}</h3>
                                        <p className="text-slate-400 text-xs mb-4">{p.desc}</p>
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-5xl font-black">{annual ? p.yearly : p.monthly}€</span>
                                            <span className="text-slate-400 font-light">/mes</span>
                                        </div>
                                    </div>
                                    <ul className="space-y-4 mb-10 flex-grow">
                                        {p.features.map((f, j) => (
                                            <li key={j} className="flex items-center gap-3 text-sm font-medium">
                                                <span className="material-icons text-primary text-lg">check_circle</span>
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                    <button className="w-full py-4 rounded-full bg-primary text-white font-black uppercase text-sm hover:shadow-[0_0_20px_rgba(255,106,0,0.4)] transition-all">
                                        {p.cta}
                                    </button>
                                </div>
                            </div>
                        ) : (
                            /* Non-popular cards */
                            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-8 flex flex-col hover:border-white/20 transition-all">
                                <div className="mb-8">
                                    <h3 className="text-sm font-black tracking-widest text-slate-400 uppercase mb-2">{p.name}</h3>
                                    <p className="text-slate-400 text-xs mb-4">{p.desc}</p>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-4xl font-black">{annual ? p.yearly : p.monthly}€</span>
                                        <span className="text-slate-400 font-light">/mes</span>
                                    </div>
                                </div>
                                <ul className="space-y-4 mb-10 flex-grow">
                                    {p.features.map((f, j) => (
                                        <li key={j} className="flex items-center gap-3 text-sm">
                                            <span className="material-icons text-primary text-lg">check_circle</span>
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <button className="w-full py-4 rounded-full border-2 border-primary text-primary font-black uppercase text-sm hover:bg-primary hover:text-white transition-all">
                                    {p.cta}
                                </button>
                            </div>
                        )
                    ))}
                </div>
            </section>

            {/* Guarantee */}
            <section className="max-w-4xl mx-auto px-6 mb-24">
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-10 flex flex-col md:flex-row items-center gap-8">
                    <div className="bg-primary/20 w-20 h-20 rounded-full flex items-center justify-center shrink-0">
                        <span className="material-icons text-primary text-4xl">verified_user</span>
                    </div>
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-extrabold mb-3 uppercase tracking-tight">Garantía de Satisfacción</h2>
                        <p className="text-slate-400 leading-relaxed">
                            Si en los primeros 30 días no estás completamente satisfecho, te devolvemos el 100% de tu dinero. Sin preguntas, sin complicaciones. Tu inversión está protegida.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="max-w-3xl mx-auto px-6 mb-32">
                <h2 className="text-3xl font-extrabold mb-12 uppercase tracking-tight text-center">Preguntas Frecuentes</h2>
                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="glass-card rounded-xl overflow-hidden">
                            <button
                                className="w-full p-6 text-left font-bold flex justify-between items-center hover:bg-white/5 transition-colors"
                                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                            >
                                <span>{faq.q}</span>
                                <span className={`material-icons text-primary transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}>
                                    expand_more
                                </span>
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-60' : 'max-h-0'}`}>
                                <p className="px-6 pb-6 text-slate-400 text-sm leading-relaxed">{faq.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Final CTA */}
            <section className="relative w-full overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-orange-800 opacity-90"></div>
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center">
                    <h2 className="text-4xl md:text-6xl font-black italic mb-8 leading-tight">¿AÚN CON DUDAS?<br />PRUEBA GRATIS</h2>
                    <p className="text-xl mb-12 opacity-90 max-w-xl mx-auto">Empieza hoy con 7 días de acceso completo. Sin compromiso, sin tarjeta de crédito.</p>
                    <Link to="/programas" className="bg-white text-primary px-12 py-5 rounded-full font-black uppercase tracking-widest text-lg hover:bg-slate-100 transition-colors shadow-2xl inline-block">
                        Prueba 7 Días Gratis
                    </Link>
                </div>
            </section>
        </main>
    );
}
