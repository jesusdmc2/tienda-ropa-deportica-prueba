import { Link } from 'react-router-dom';

const transformations = [
    {
        name: 'Ricardo',
        weeks: '12 Semanas',
        stat: '-14 kg',
        statLabel: 'Grasa',
        program: 'Quema Total',
        quote: '"Apex cambió mi mentalidad. No solo perdí peso, recuperé mi energía y confianza."',
        before: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxPzhzsVla7Pk-0ro_pYUQpUYY7TVR7BarZiXHokobksGWKL_fOp9DNNdNyButbg2RRax0-Y-j7I_L2jRJsW2yJmE-_G2hlwtqYm0J-O5NJNwpCKt_sxEJzISqMNqYyxFqnVE3Rd3mAMFEOMSUDLjelgvwgl-MZ9w2kw5i_b7YKeMujvzy1suXf9OGupjd7blAgFXuICYfqhQUyCTtMHYw0_Fxz1Lj1mB2zgF9SLR378F-kOzuHZ3NKstA4lTtrqdX9FQudNG2_rJ2',
        after: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDolW9YQZVyc95_K4tg2HNQX59T_eAkKyQJiU2RANFGwt9Z6vmBBv06aDPNCkY1uuZxjileNtHh4WnF3m1NEx2DxYGXMsal52pL-foc0AP546CEO3FQkvIbTJl2WmeU3RXDnXaD6Ex9UE7B6ABDhoHiHuwHQM8FfkWJV3lY-UgJFzceOWR_KVdvzP45u4l0YPgB9ycqNnYkFKJq47mwcX1LClN8aVm5sGRrhHX96-Uilfop777EROpNaKzadFQDePVJ_h7aM9-OLgtF',
    },
    {
        name: 'María G.',
        weeks: '16 Semanas',
        stat: '+5 kg',
        statLabel: 'Músculo',
        program: 'Hipertrofia Apex',
        quote: '"Buscaba fuerza y definición. Los coaches de Apex diseñaron el plan perfecto para mi objetivo."',
        before: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBju16Funy470MZ9Q1617PiLWXTC4M2rNIcIf6ygqhJqL9GGqHmbLFfC1QQptJzjAPC2T4uRlmXzgBoFHWJxgiHUxLyRuRSdkYB4e2W2bYDQbCICJw-ZV-87akcLLH0H7KEcF9ol4ZQEAB5BJRzJxETCuOy3cjOgeeLgWxBg-DRh0KwmWzzCdUseqhH4IrHPvRwqQjNq5mo5og_viUuWYPf13QaUo6uxFwI1Kj3xKualuV3AAgT-PhVb8l1u0sPeckeGDYhhUn2PGBa',
        after: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgLfijmhVYSUGJPPuSbELYExoiblqGlNsrWW2ns1-y0k_juDlb3o7TrhE05IwVKlN_rAc4EMm8av4ZEZCTRiOxX0asHO9WADuwOmk8PZ-FqdsiOuPzF08ayl33HF-5yNwapYDI5u3eZipDn8fugqSxS9P1-K_LZO-4gFjN9eT3JmacIMUE9pV0j5lfs4m9vpOGNqjBZSS76MykVZX3IGgvR0yJPfIChaBc_-uVkmhhlRnjfeqVhLeGEZ512WGcYrA31eFs917GGOrU',
    },
    {
        name: 'Andrea',
        weeks: '10 Semanas',
        stat: '-9%',
        statLabel: 'Grasa Corp.',
        program: 'Recomposición',
        quote: '"Increíble ver cómo cambia tu cuerpo cuando entrenas con ciencia y no por intuición."',
        before: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6CoLNYiIrvQFCS-B1p-5Fgsr9f9W3uTH3hwDy9-Kf-EQLWr3A47cIYO4B-LXxW6wG9iWQ0Og5rd8FJLIuCqfkvChhtfbX14sVgGwwLsvdWMYCOnTeGuznsSyq0jaq9q6_88wvZlSaRz640-CGBXUydd9-QYvt05zz7llqj3CYCQdn9yqhE7dfcKqQPYY5uC6fryf0oYw4poZYT3LMQmrlU5WyDPc7DpNngZcKfisoye4NuRU1M5nr7YQlBVHbLP-iNGrLpdYhkFZy',
        after: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBdwHCRER6XvThPfy1cY5rFEzSPD0A4K0pCUbIVhES_4aKjAsom4bTL0MyaSCikC5P2Z9sVHAIWUmzhn8JHI4R47fu0SaSzpFOk31xlTHhz0MYE3Dx0cephUsSyg8RLXIkjMhbjQmYP8YB2n68Bkni0kl_JznkEDpJpQ2A8NhYiS-4z6AgA_oIoqBQIP0epA-ABkTm_4VqJgZqqTIQCPeREL-pL_wOyiBYzJc2Hu8jhY5NKOYi6s1MAATFYmryTg6kFMa63ItjEOS0h',
    },
    {
        name: 'Jorge',
        weeks: '20 Semanas',
        stat: '-18 kg',
        statLabel: 'Peso Total',
        program: 'Poder Real',
        quote: '"A los 45 años pensé que mi físico estaba estancado. Apex me demostró lo contrario."',
        before: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAcCsIEx1Rz93fR023T97jS4HShZfrdR6I4PH6LfQmHptuDkhKIdU0ruPR8NTII77E01jbwq-iTJvuWhzkCnkjx0-k6ktrGakLUBfDtBiKxaKHXxvvhZ1X7zQKPzZxWU8eHhWa8hQS8-LOuYYCCcGY9Q0OGmiKp5n0jKDB5-9HecPn5bEiYtXSFLWZ_Yn2zxSKKkKrJ6RETvQ1uT53uGWUt7lsi73PK_9fAyB90I9o5YGDZG05Od-mzkwSq_Szv7u7l1qrg2SSG4zXy',
        after: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBG9cUE8qb5DjOjO_QmrMF2vlSv4-LH04o9Wbkaa2xmPbL9RyLjT-q7ynmpdBZ4u_-BnIuSjw6dxS5CvTr4aqrB7fRg08KJvnp9RFcqcLoujBqRMdtashzxobcQaCrSCWDUNPa07Gw8bHrDlEehH0hhdGMgoNpkS2aSlkKc7SK76RYlLCfYmVY8aw4zprkVE2xBHmcVURSgQf0U4xJM3DWWIYpzA2fMaSIEk6y8gVQGNHEsRD-KxBS-ZDXsZR0reKmpZfejkbJDPc3j',
    },
    {
        name: 'Camila',
        weeks: '12 Semanas',
        stat: '-12 cm',
        statLabel: 'Cintura',
        program: 'Esculpir',
        quote: '"La flexibilidad del plan nutricional fue la clave para no rendirme esta vez."',
        before: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXxwqF-FebrKIK2MLV0foU82wzHF8W2fmQBowBuyk4v0cMz2Cq0U927dID9y80ijQymeD4zjIaQwV7Yqp3uhHXtdngUqBSBEGHrXLtsw2PY6zBM0yMHKwYaK5Gt-ULNKpq3Khx9iRivKnv4X9eMkpLQhDugEVFgbpcOSbQs3Z_NLcU1TKh8LxIm1whgFqJAJEDas418_JIIyixJf2uHi6dpAIKXKL9FnpQNEk7cGNyGa_aZHWcySfPr7pGdfBJDMW2eBvnpIUzfZea',
        after: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD78Y6acmSnB3JrrPG1rvlypXrdi3nVnAf9G-JmF3XosW1xgXQqI083HbEwkfOdjnkWCnyWEUJwpwR9Hd8PxEOlXDysUAL60w9nDMr80HbLzkrNJhcqtHzZDvUjVOsRRkht1NO4A9VoxgvPLj6-ozJ9M3btmVe5dtMN5RzI_Wuz-cmort4fj1ztgdXpB4SzCNUT6c3FMtO2zKl5k7adtRlLH-nO1JGJKYMqNHLo5KhV-y3_HLjIpAo_a0mZqlIJbUVrkTdDEmwQHSs2',
    },
    {
        name: 'Luis',
        weeks: '24 Semanas',
        stat: '+12 kg',
        statLabel: 'Masa Pura',
        program: 'Atleta Élite',
        quote: '"De ser alguien sedentario a competir en mi primer Spartan Race gracias a Apex."',
        before: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0n_7hr-bq294Ixjv8NWg_6GfWAQyl_tmCFhdzqf0Uxcg4N8qKXycfEhWAF2o1IfKfwUbn5b9lj1M3rLiLbq1Ysst3y7cujOqT-RP13M3z2244RIBq2p3A5ldW16G2OYJytJZO2eqTk_OnDSCw5f95tyITV7WAyBFinQ6eU3QCc6wMOdUMdoRGOIBD8gnSOoIDk_F7NhTtKlq-KmxxHDfI7fKO3WvH9ZL6I0ee-pVsW6qQEJGFjZcxpqD1WybxR3s-SRICUXp3xHqb',
        after: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYzhpXL3qW-bsevDZhCss3BVkjHhQxIUwzg4RcgOmYtKxfF7GVYJ1xPvJfEzpUm6C23TsCiX4n9Q_Dd5MbzRG05hBDF5zyXNZAAaZmOzDGBmtQWBmPtXMAAIQP81dk2JOIuYJj6tMZVbM8sVYnW_OQbtBHAd5KZs1v0VoqsPz12hha5oTqcU-O4eOYoXxsFelTa9o-RqsDyJt6_RfTjWh21ihxIxCWZyVOGkFFAOiPlmKGzfN89EIVmMsgN7KHkdq0BekHZLRvwfk0',
    },
];

const timeline = [
    { week: 'Semana 1', icon: 'analytics', desc: 'Adaptación metabólica y técnica. Evaluamos tus puntos de partida reales.' },
    { week: 'Semana 4', icon: 'fitness_center', desc: 'Recomposición corporal. Los primeros cambios visuales se vuelven evidentes.' },
    { week: 'Semana 8', icon: 'bolt', desc: 'Optimización de fuerza. Tu cuerpo opera a un nivel de eficiencia superior.' },
    { week: 'Semana 13+', icon: 'celebration', desc: 'Estilo de vida sostenible. Mantén tus resultados para siempre con autonomía.' },
];

export default function Resultados() {
    return (
        <main>
            {/* Header */}
            <header className="pt-40 pb-16 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter uppercase mb-6 leading-none italic">
                        Los Resultados <span className="text-primary">Hablan Por Nosotros</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-400 font-light max-w-2xl mx-auto">
                        No vendemos promesas, entregamos evidencia. Descubre cómo nuestra comunidad ha redefinido sus límites y transformado su vida para siempre.
                    </p>
                </div>
            </header>

            {/* Transformation Cards — Before/After Split */}
            <section className="max-w-7xl mx-auto px-6 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {transformations.map((t, i) => (
                        <div key={i} className="glass-card rounded-xl overflow-hidden group hover:border-primary/40 transition-all duration-300">
                            {/* Before/After Image Split */}
                            <div className="relative flex h-64 border-b border-white/5">
                                <div className="w-1/2 overflow-hidden bg-slate-800">
                                    <img
                                        className="w-full h-full object-cover grayscale opacity-60"
                                        alt={`${t.name} antes`}
                                        src={t.before}
                                    />
                                    <span className="absolute bottom-2 left-2 bg-black/60 px-2 py-0.5 text-[10px] font-bold uppercase rounded">Antes</span>
                                </div>
                                <div className="w-1/2 overflow-hidden bg-slate-900">
                                    <img
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        alt={`${t.name} después`}
                                        src={t.after}
                                    />
                                    <span className="absolute bottom-2 right-2 bg-primary px-2 py-0.5 text-[10px] font-bold uppercase rounded">Después</span>
                                </div>
                                <div className="absolute top-4 left-4">
                                    <span className="bg-primary text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-widest">{t.program}</span>
                                </div>
                            </div>
                            {/* Info */}
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold italic uppercase tracking-tight">{t.name}</h3>
                                        <p className="text-sm text-slate-400">{t.weeks}</p>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-primary text-3xl font-extrabold leading-none glow-text">{t.stat}</span>
                                        <p className="text-[10px] uppercase font-bold text-slate-500">{t.statLabel}</p>
                                    </div>
                                </div>
                                <p className="text-sm text-slate-300 italic font-light">{t.quote}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Global Stats */}
            <section className="bg-primary/10 py-20 px-6 border-y border-primary/20">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    <div className="flex flex-col items-center">
                        <span className="text-5xl md:text-7xl font-extrabold text-primary glow-text mb-2 italic tracking-tighter">+15,000 KG</span>
                        <p className="text-lg uppercase font-bold tracking-widest text-slate-300">Grasa Perdidos</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-5xl md:text-7xl font-extrabold text-primary glow-text mb-2 italic tracking-tighter">1,200+</span>
                        <p className="text-lg uppercase font-bold tracking-widest text-slate-300">Vidas Transformadas</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-5xl md:text-7xl font-extrabold text-primary glow-text mb-2 italic tracking-tighter">98%</span>
                        <p className="text-lg uppercase font-bold tracking-widest text-slate-300">Tasa de Éxito</p>
                    </div>
                </div>
            </section>

            {/* Progress Timeline */}
            <section className="py-24 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-extrabold uppercase italic tracking-tighter mb-4">¿Qué Puedes Esperar?</h2>
                        <p className="text-slate-400">Tu transformación es un proceso meticulosamente planeado por etapas.</p>
                    </div>
                    <div className="relative">
                        {/* Vertical line */}
                        <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 timeline-gradient opacity-30"></div>
                        <div className="space-y-20">
                            {timeline.map((step, i) => (
                                <div key={i} className="relative flex items-center justify-between">
                                    {i % 2 === 0 ? (
                                        <>
                                            <div className="w-5/12 text-right pr-8 md:pr-12">
                                                <h4 className="text-2xl font-bold uppercase text-primary">{step.week}</h4>
                                                <p className="text-slate-400 text-sm mt-2">{step.desc}</p>
                                            </div>
                                            <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-primary rounded-full glow-button ring-4 ring-[#0A0A0A]"></div>
                                            <div className="w-5/12 pl-8 md:pl-12 flex items-center">
                                                <span className="material-icons text-primary text-4xl">{step.icon}</span>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="w-5/12 pr-8 md:pr-12 flex items-center justify-end">
                                                <span className="material-icons text-primary text-4xl">{step.icon}</span>
                                            </div>
                                            <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-primary rounded-full glow-button ring-4 ring-[#0A0A0A]"></div>
                                            <div className="w-5/12 text-left pl-8 md:pl-12">
                                                <h4 className="text-2xl font-bold uppercase text-primary">{step.week}</h4>
                                                <p className="text-slate-400 text-sm mt-2">{step.desc}</p>
                                            </div>
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 -z-10"></div>
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-6xl font-extrabold uppercase italic tracking-tighter mb-8 leading-tight">
                        La próxima historia de éxito <br /> <span className="text-primary">puede ser la tuya</span>
                    </h2>
                    <p className="text-lg text-slate-400 mb-12 max-w-xl mx-auto">
                        No esperes a que el "momento perfecto" llegue. Créalo hoy mismo con el sistema de entrenamiento más avanzado del mercado.
                    </p>
                    <Link
                        to="/precios"
                        className="bg-primary text-white text-xl font-bold py-5 px-10 rounded-xl glow-button hover:scale-105 transition-transform inline-flex items-center gap-3 uppercase tracking-wider"
                    >
                        Comienza tu transformación
                        <span className="material-icons">arrow_forward</span>
                    </Link>
                </div>
            </section>
        </main>
    );
}
