import { Link } from 'react-router-dom';

const pillars = [
    {
        icon: 'restaurant',
        title: 'Nutrición de Precisión',
        desc: 'Macros calculados según tu metabolismo, nivel de actividad y objetivo específico. Sin dietas genéricas.',
    },
    {
        icon: 'local_fire_department',
        title: 'Timing Nutricional',
        desc: 'Optimización de la ingesta alrededor de tus entrenamientos para maximizar rendimiento y recuperación.',
    },
    {
        icon: 'science',
        title: 'Suplementación Inteligente',
        desc: 'Protocolo basado en evidencia científica. Solo lo que funciona, sin gasto innecesario.',
    },
    {
        icon: 'psychology',
        title: 'Relación con la Comida',
        desc: 'Coaching conductual para crear hábitos sostenibles que duren más allá del programa.',
    },
];

const included = [
    { icon: 'checklist', text: 'Plan nutricional personalizado' },
    { icon: 'sync', text: 'Ajustes semanales según progreso' },
    { icon: 'menu_book', text: 'Recetario con +200 opciones' },
    { icon: 'shopping_cart', text: 'Lista de compras semanal' },
    { icon: 'restaurant_menu', text: 'Planes para comer fuera' },
    { icon: 'support_agent', text: 'Soporte directo con tu coach' },
];

const mealPlan = [
    {
        meal: 'Desayuno',
        icon: 'wb_sunny',
        items: 'Avena proteica con frutos rojos, mantequilla de almendra y semillas de chía',
        macros: '450 kcal · 35g P · 50g C · 15g G',
    },
    {
        meal: 'Snack AM',
        icon: 'coffee',
        items: 'Batido verde: espinaca, plátano, proteína whey, leche de almendra',
        macros: '280 kcal · 30g P · 25g C · 8g G',
    },
    {
        meal: 'Almuerzo',
        icon: 'restaurant',
        items: 'Pollo a la plancha, arroz integral, brócoli al vapor, aguacate',
        macros: '620 kcal · 45g P · 60g C · 20g G',
    },
    {
        meal: 'Pre-entreno',
        icon: 'bolt',
        items: 'Tostada integral con plátano y miel + café negro',
        macros: '250 kcal · 8g P · 45g C · 5g G',
    },
    {
        meal: 'Post-entreno',
        icon: 'fitness_center',
        items: 'Batido de proteína con avena, plátano y creatina',
        macros: '380 kcal · 40g P · 40g C · 5g G',
    },
    {
        meal: 'Cena',
        icon: 'nightlight',
        items: 'Salmón al horno, boniato, ensalada mixta con aceite de oliva',
        macros: '550 kcal · 40g P · 45g C · 22g G',
    },
];

export default function Nutricion() {
    return (
        <main className="pt-40">
            {/* Hero */}
            <section className="relative overflow-hidden mb-24">
                <div className="absolute inset-0 z-0">
                    <img
                        alt="Healthy food preparation"
                        className="w-full h-full object-cover opacity-30"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMN_n2FmyBCHKYSuEMRfFjfjQ5rWDHvMq_ynRHEV-qMFfJ7LqQ3fR4HYCIR1zEb0z3aHJTH1YIo19CRyLFKYZsDaR8Vb2hSTw8zAkqKqqy7EXQH439lgbLbfY-VIcQFZmZaHnIYy2kkVQK96SHzb_3yCFBhsgsPpC2PK93IbMqPTjrIkrHg88tFBk-l4zDSHcQGXWbJSjhIxFaEiTDcj2-0t8hWlPEdm8Bz5B4oAfklfmqXUEEfHp5jDMwlHrSAM9sdNTBzLvs1BJ"
                    />
                    <div className="absolute inset-0 hero-gradient"></div>
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center lg:text-left">
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-none mb-4 uppercase">
                        NUTRICIÓN QUE<br />
                        <span className="text-primary">POTENCIA</span> TU RENDIMIENTO
                    </h1>
                    <div className="header-underline w-64 md:w-96 rounded-full"></div>
                    <p className="mt-8 text-lg text-slate-400 max-w-2xl font-light leading-relaxed">
                        No es solo una dieta. Es un sistema nutricional diseñado por expertos para alimentar cada aspecto de tu vida atlética y bienestar general.
                    </p>
                </div>
            </section>

            {/* Philosophy: 4 Pillars */}
            <section className="max-w-7xl mx-auto px-6 mb-32">
                <h2 className="text-3xl font-extrabold mb-12 uppercase tracking-tight">Nuestra Filosofía</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {pillars.map((p, i) => (
                        <div key={i} className="glass-card rounded-xl p-8 flex gap-6 items-start hover:bg-white/5 transition-all group">
                            <div className="bg-primary/20 w-14 h-14 rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                <span className="material-icons text-primary text-2xl">{p.icon}</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* What's Included */}
            <section className="max-w-7xl mx-auto px-6 mb-32">
                <h2 className="text-3xl font-extrabold mb-12 uppercase tracking-tight">Qué Incluye Tu Plan</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {included.map((item, i) => (
                        <div key={i} className="glass-card rounded-xl p-6 flex items-center gap-4 hover:border-primary/30 transition-all">
                            <span className="material-icons text-primary text-3xl">{item.icon}</span>
                            <span className="font-semibold">{item.text}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Sample Meal Plan */}
            <section className="max-w-7xl mx-auto px-6 mb-32">
                <h2 className="text-3xl font-extrabold mb-4 uppercase tracking-tight">Plan de Ejemplo</h2>
                <p className="text-slate-400 mb-12 text-lg">Un día completo en la vida de un atleta Apex — ~2,530 kcal</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {mealPlan.map((m, i) => (
                        <div key={i} className="glass-card rounded-xl p-6 hover:bg-white/5 transition-all">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="bg-primary/20 w-10 h-10 rounded-full flex items-center justify-center">
                                    <span className="material-icons text-primary">{m.icon}</span>
                                </div>
                                <h4 className="font-bold text-lg">{m.meal}</h4>
                            </div>
                            <p className="text-slate-300 text-sm mb-4 leading-relaxed">{m.items}</p>
                            <p className="text-primary text-xs font-bold uppercase tracking-widest">{m.macros}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Testimonial */}
            <section className="max-w-7xl mx-auto px-6 mb-32">
                <div className="glass-card rounded-xl p-12 text-center border-primary/20">
                    <div className="flex gap-1 justify-center text-primary mb-6">
                        {[...Array(5)].map((_, i) => <span key={i} className="material-icons">star</span>)}
                    </div>
                    <p className="italic text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed mb-8">
                        "Antes contaba calorías obsesivamente y me sentía agotada. El plan de Apex me enseñó a comer con estrategia, no con miedo. Rendí más, dormí mejor y perdí 4 kg de grasa sin pasar hambre."
                    </p>
                    <div className="flex items-center justify-center gap-4">
                        <img alt="Laura Jiménez" className="w-14 h-14 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8TQL_RWwiGYERhM9LByIYYEi0D4Gy9VCvuFHpKPGlaZ7wg1pB30DaDpaT7LNEvbRUd-_EaGPMYxN7tDKH8KYq_itu7ex9Wevt30-x_pBq89yNBFDZh4BBoSldhsHyVsexipJtt8Rg6gAoiZ2ayRtt5iUa9sy1P50jY37Jq-FiCijB3QvW2uNkYIlpc1vMnnc7kr1kJAhVRyySqevdv1oOP3RkG_aY2StqU3TGAGPwuapsAdL72UUQsTsV827D3hwgb8JRYJBKWEU0" />
                        <div className="text-left">
                            <p className="font-bold">Laura Jiménez</p>
                            <p className="text-primary text-xs font-black uppercase">Programa Quema Total</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative w-full overflow-hidden mb-0">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-orange-800 opacity-90"></div>
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center">
                    <h2 className="text-4xl md:text-6xl font-black italic mb-8 leading-tight">TU NUTRICIÓN,<br />TU VENTAJA COMPETITIVA</h2>
                    <p className="text-xl mb-12 opacity-90 max-w-xl mx-auto">Empieza con una evaluación nutricional gratuita y descubre el plan ideal para tus metas.</p>
                    <Link to="/precios" className="bg-white text-primary px-12 py-5 rounded-full font-black uppercase tracking-widest text-lg hover:bg-slate-100 transition-colors shadow-2xl inline-block">
                        Solicita Tu Evaluación
                    </Link>
                </div>
            </section>
        </main>
    );
}
