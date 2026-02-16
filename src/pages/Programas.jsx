import { Link } from 'react-router-dom';

const programs = [
    { tag: 'Quema Total', tagStyle: 'bg-primary/20 text-primary border border-primary/30', weeks: '8 Semanas', title: 'Máxima Definición', desc: 'Optimización metabólica diseñada para reducir el porcentaje de grasa preservando la masa muscular.', sessions: '5 Sesiones / Semana', duration: '45-60 Minutos', level: 'Nivel: Intermedio', quote: '"Bajé un 6% de grasa corporal sin sentir que estaba agotado. El plan nutricional es clave."', author: '— Carlos M.', highlight: false },
    { tag: 'Fuerza Élite', tagStyle: 'bg-primary text-white', weeks: '12 Semanas', title: 'Hipertrofia & Poder', desc: 'Enfoque en sobrecarga progresiva y técnica avanzada para maximizar el crecimiento muscular.', sessions: '4 Sesiones / Semana', duration: '75-90 Minutos', level: 'Nivel: Avanzado', quote: '"Mis levantamientos principales subieron un 20% en solo 3 meses. El mejor programa de fuerza."', author: '— Javier L.', highlight: true },
    { tag: 'Rendimiento', tagStyle: 'bg-primary/20 text-primary border border-primary/30', weeks: '10 Semanas', title: 'Velocidad & Explosividad', desc: 'Entrenamiento pliométrico y funcional para atletas que buscan mejorar su desempeño en campo.', sessions: '5 Sesiones / Semana', duration: '60 Minutos', level: 'Nivel: Pro', quote: '"Perfecto para mi pretemporada de fútbol. Mi velocidad de reacción es otra."', author: '— Miguel R.', highlight: false },
    { tag: 'Flex & Core', tagStyle: 'bg-primary/20 text-primary border border-primary/30', weeks: '6 Semanas', title: 'Movilidad & Estabilidad', desc: 'Fortalecimiento del núcleo y mejora del rango de movimiento para una vida sin dolor.', sessions: '3 Sesiones / Semana', duration: '30-40 Minutos', level: 'Nivel: Todos', quote: '"Mi dolor de espalda desapareció tras 4 semanas de enfoque en movilidad."', author: '— Elena S.', highlight: false },
    { tag: 'Iniciación', tagStyle: 'bg-primary/20 text-primary border border-primary/30', weeks: '4 Semanas', title: 'Primer Paso', desc: 'Construye los cimientos. Técnica básica, resistencia general y creación del hábito.', sessions: '3 Sesiones / Semana', duration: '45 Minutos', level: 'Nivel: Principiante', quote: '"Nunca había entrenado y la guía paso a paso me dio la confianza que necesitaba."', author: '— Mario V.', highlight: false },
];

const tableData = [
    { name: 'Quema Total', duration: '8 Semanas', level: 'Intermedio', focus: 'Déficit calórico & HIIT', dots: 3 },
    { name: 'Fuerza Élite', duration: '12 Semanas', level: 'Avanzado', focus: 'Powerlifting & Hipertrofia', dots: 4 },
    { name: 'Rendimiento Atlético', duration: '10 Semanas', level: 'Pro', focus: 'Pliometría & Agilidad', dots: 4 },
    { name: 'Flex & Core', duration: '6 Semanas', level: 'Todos', focus: 'Postura & Longevidad', dots: 1 },
    { name: 'Primer Paso', duration: '4 Semanas', level: 'Principiante', focus: 'Técnica & Acondicionamiento', dots: 2 },
];

export default function Programas() {
    return (
        <main className="pt-40">
            {/* Header */}
            <header className="max-w-7xl mx-auto px-6 mb-20 text-center lg:text-left">
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-none mb-4 uppercase">
                    PROGRAMAS DISEÑADOS <br />
                    PARA TU <span className="text-primary">OBJETIVO</span>
                </h1>
                <div className="header-underline w-64 md:w-96 rounded-full"></div>
                <p className="mt-8 text-lg text-slate-400 max-w-2xl font-light">
                    Metodologías de alto rendimiento adaptadas a tu nivel. Selecciona tu camino y transforma tu potencial físico.
                </p>
            </header>

            {/* Program Grid */}
            <section className="max-w-7xl mx-auto px-6 mb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {programs.map((p, i) => (
                        <div key={i} className={`glass-card rounded-xl p-8 flex flex-col justify-between group ${p.highlight ? 'border-primary/40' : ''}`}>
                            <div>
                                <div className="flex justify-between items-start mb-6">
                                    <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase ${p.tagStyle}`}>{p.tag}</span>
                                    <span className="text-slate-400 text-xs font-medium uppercase tracking-tighter">{p.weeks}</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-3">{p.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">{p.desc}</p>
                                <div className="space-y-3 mb-8">
                                    <div className="flex items-center gap-3 text-sm">
                                        <span className="material-icons text-primary text-lg">calendar_today</span>
                                        <span>{p.sessions}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm">
                                        <span className="material-icons text-primary text-lg">timer</span>
                                        <span>{p.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm">
                                        <span className="material-icons text-primary text-lg">signal_cellular_alt</span>
                                        <span>{p.level}</span>
                                    </div>
                                </div>
                                <div className="border-l-2 border-primary/40 pl-4 mb-8 italic text-slate-500 text-sm">
                                    {p.quote}
                                    <span className="block mt-1 font-bold not-italic text-slate-300 text-xs">{p.author}</span>
                                </div>
                            </div>
                            <a href="#" className="flex items-center justify-between group-hover:text-primary transition-colors">
                                <span className="font-bold text-sm uppercase">Reserva tu evaluación</span>
                                <span className="material-icons">arrow_forward</span>
                            </a>
                        </div>
                    ))}
                </div>
            </section>

            {/* Comparison Table */}
            <section className="max-w-7xl mx-auto px-6 mb-32">
                <h2 className="text-3xl font-extrabold mb-12 uppercase tracking-tight">Comparativa de Programas</h2>
                <div className="overflow-x-auto rounded-xl border border-white/10">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-primary text-white">
                                <th className="p-5 font-bold uppercase text-xs tracking-widest">Programa</th>
                                <th className="p-5 font-bold uppercase text-xs tracking-widest text-center">Duración</th>
                                <th className="p-5 font-bold uppercase text-xs tracking-widest text-center">Nivel</th>
                                <th className="p-5 font-bold uppercase text-xs tracking-widest">Enfoque Principal</th>
                                <th className="p-5 font-bold uppercase text-xs tracking-widest text-center">Intensidad</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {tableData.map((row, i) => (
                                <tr key={i} className={`${i % 2 === 0 ? 'bg-white/5' : 'bg-transparent'} hover:bg-white/10 transition-colors`}>
                                    <td className="p-5 font-bold">{row.name}</td>
                                    <td className="p-5 text-center">{row.duration}</td>
                                    <td className="p-5 text-center">{row.level}</td>
                                    <td className="p-5">{row.focus}</td>
                                    <td className="p-5 text-center">
                                        <div className="flex justify-center gap-1">
                                            {[...Array(4)].map((_, j) => (
                                                <div key={j} className={`w-2 h-2 rounded-full ${j < row.dots ? 'bg-primary' : 'bg-white/20'}`}></div>
                                            ))}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Custom Program Section */}
            <section className="relative w-full overflow-hidden mb-32 group">
                <div className="absolute inset-0 z-0">
                    <img
                        alt="Gym athlete training"
                        className="w-full h-full object-cover opacity-30 grayscale group-hover:scale-105 transition-transform duration-1000"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuApFBW5TVfrVBtSbyQseN0iPU1LEzL0l6O4QMHRqyWnO4G3VSEj4oFtPYQ5U_72Qb_CtKUpfjkuMKXEWQ1_vEM4BHlWh8Dr1NcJQZd5Yu237B-4Igmk4Bo0ud38g_cHyiWBaHpNZerAPuJVmc3ifXZNw4ER1jncjLa81y5Funi4cyeEYRP0JwRD9pJ132eSaan1f3UgaUQLKDlezw1LGkL8s-X9QF5uGfXGpy1YXbsjpgw6FZ00-ys_q3pgkzsMZUd3lOcJ_y2jKFcH"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent"></div>
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center lg:text-left">
                    <h2 className="text-4xl md:text-6xl font-extrabold mb-6 uppercase tracking-tighter">
                        ¿BUSCAS ALGO <span className="text-primary">BESPOKE</span>?
                    </h2>
                    <p className="text-xl text-slate-300 max-w-xl mb-12 font-light leading-relaxed">
                        Diseñamos planes 100% personalizados basados en tu genética, estilo de vida y objetivos específicos. El nivel máximo de personalización de Apex.
                    </p>
                    <button className="glow-button bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-lg font-bold text-lg uppercase tracking-widest transition-all inline-flex items-center gap-3">
                        Agenda una consulta gratuita
                        <span className="material-icons">event</span>
                    </button>
                </div>
            </section>
        </main>
    );
}
