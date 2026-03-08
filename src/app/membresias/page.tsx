export default function MembershipPage() {
  return (
    <main className="pt-32 pb-20">
      {/* Hero Header */}
      <section className="max-w-4xl mx-auto text-center px-6 mb-16">
        <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] text-primary bg-primary/10 rounded-full uppercase">
          Membresías Exclusivas
        </span>
        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-[1.1] uppercase">
          Invierte en ti.<br />
          <span className="text-primary">Sin letra pequeña.</span>
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto font-light">
          Transparencia total. Sin contratos de permanencia ni costes ocultos. Solo el mejor entrenamiento para alcanzar tu máximo potencial.
        </p>
      </section>

      {/* Billing Toggle */}
      <div className="flex flex-col items-center mb-16 px-6">
        <div className="bg-slate-200 dark:bg-white/5 p-1.5 rounded-full flex items-center relative">
          <button className="px-8 py-2.5 rounded-full text-sm font-bold bg-white dark:bg-white/10 shadow-sm transition-all text-white">
            Mensual
          </button>
          <button className="px-8 py-2.5 rounded-full text-sm font-bold text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-all">
            Trimestral
          </button>
          <div className="absolute -right-24 top-1/2 -translate-y-1/2 bg-primary text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter">
            12% Ahorro
          </div>
        </div>
      </div>

      {/* Pricing Grid */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        {/* Starter */}
        <div className="group relative glass-card rounded-xl p-8 flex flex-col hover:border-slate-300 dark:hover:border-white/20 transition-all">
          <div className="mb-8">
            <h3 className="text-sm font-black tracking-widest text-slate-500 dark:text-slate-400 uppercase mb-2">Starter</h3>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-black text-white">$49</span>
              <span className="text-slate-500 dark:text-slate-400 font-light">/mes</span>
            </div>
          </div>
          <ul className="space-y-4 mb-10 flex-grow">
            <li className="flex items-center gap-3 text-sm text-slate-300">
              <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
              2 sesiones / semana
            </li>
            <li className="flex items-center gap-3 text-sm text-slate-300">
              <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
              Guía nutricional básica
            </li>
            <li className="flex items-center gap-3 text-sm text-slate-300">
              <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
              Coaching grupal
            </li>
            <li className="flex items-center gap-3 text-sm text-slate-300">
              <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
              Acceso a la App Apex
            </li>
            <li className="flex items-center gap-3 text-sm opacity-40 italic text-slate-300">
              <span className="material-symbols-outlined text-lg">block</span>
              Sesiones de recuperación
            </li>
          </ul>
          <button className="w-full py-4 rounded-full border-2 border-primary text-primary font-black uppercase text-sm hover:bg-primary hover:text-white transition-all">
            Empezar Ahora
          </button>
        </div>

        {/* PRO (Popular) */}
        <div className="relative z-10">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-black px-6 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-lg shadow-primary/30 z-20">
            Popular
          </div>
          <div className="h-full bg-white dark:bg-[#151515] border-2 border-primary rounded-xl p-8 flex flex-col shadow-[0_0_40px_-10px_rgba(255,106,0,0.3)] transform md:scale-105">
            <div className="mb-8">
              <h3 className="text-sm font-black tracking-widest text-primary uppercase mb-2">Pro</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-black text-white">$89</span>
                <span className="text-slate-500 dark:text-slate-400 font-light">/mes</span>
              </div>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-center gap-3 text-sm font-medium text-white">
                <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                Sesiones ilimitadas
              </li>
              <li className="flex items-center gap-3 text-sm font-medium text-white">
                <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                Plan nutricional avanzado
              </li>
              <li className="flex items-center gap-3 text-sm font-medium text-white">
                <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                Semiprivado (Máx 4 pers)
              </li>
              <li className="flex items-center gap-3 text-sm font-medium text-white">
                <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                Acceso total App Apex
              </li>
              <li className="flex items-center gap-3 text-sm font-medium text-white">
                <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                1 Sesión Recuperación/mes
              </li>
            </ul>
            <button className="w-full py-4 rounded-full bg-primary text-white font-black uppercase text-sm hover:shadow-[0_0_20px_rgba(255,106,0,0.4)] transition-all">
              Seleccionar Plan
            </button>
          </div>
        </div>

        {/* ÉLITE */}
        <div className="group relative glass-card rounded-xl p-8 flex flex-col hover:border-slate-300 dark:hover:border-white/20 transition-all">
          <div className="mb-8">
            <h3 className="text-sm font-black tracking-widest text-slate-500 dark:text-slate-400 uppercase mb-2">Élite</h3>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-black text-white">$149</span>
              <span className="text-slate-500 dark:text-slate-400 font-light">/mes</span>
            </div>
          </div>
          <ul className="space-y-4 mb-10 flex-grow">
            <li className="flex items-center gap-3 text-sm text-slate-300">
              <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
              Todo lo del Plan PRO
            </li>
            <li className="flex items-center gap-3 text-sm text-slate-300">
              <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
              Coaching 1-on-1 semanal
            </li>
            <li className="flex items-center gap-3 text-sm text-slate-300">
              <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
              Analítica de rendimiento
            </li>
            <li className="flex items-center gap-3 text-sm text-slate-300">
              <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
              Suplementación incluida
            </li>
            <li className="flex items-center gap-3 text-sm text-slate-300">
              <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
              Recuperación ilimitada
            </li>
          </ul>
          <button className="w-full py-4 rounded-full border-2 border-primary/40 text-primary font-black uppercase text-sm hover:border-primary hover:bg-primary hover:text-white transition-all">
            Plan Élite
          </button>
        </div>
      </section>

      {/* Satisfaction Guarantee */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-10 flex flex-col md:flex-row items-center gap-8">
          <div className="bg-primary/20 w-20 h-20 rounded-full flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-primary text-4xl">verified_user</span>
          </div>
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold mb-2 uppercase text-white">Garantía de 30 Días</h4>
            <p className="text-slate-500 dark:text-slate-400 font-light leading-relaxed">
              Estamos tan convencidos de nuestro método que si no ves resultados o no estás satisfecho en tus primeros 30 días, te devolvemos el 100% de tu inversión. Sin preguntas, sin complicaciones.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-3xl mx-auto px-6 mb-32">
        <h2 className="text-3xl font-black mb-12 uppercase text-center text-white">Preguntas Frecuentes</h2>
        <div className="space-y-4">
          <div className="border-b border-slate-200 dark:border-white/10 pb-4">
            <button className="w-full flex justify-between items-center text-left group">
              <span className="font-bold text-lg text-white">¿Puedo cancelar en cualquier momento?</span>
              <span className="material-symbols-outlined text-primary group-hover:rotate-45 transition-transform">add</span>
            </button>
            {/* The hidden answer can be shown via state in a real app, keeping it static for visual fidelity for now */}
            <div className="mt-4 text-slate-500 dark:text-slate-400 text-sm hidden">
              Sí, en Apex creemos en la libertad. Puedes darte de baja cuando quieras sin penalizaciones.
            </div>
          </div>
          <div className="border-b border-slate-200 dark:border-white/10 pb-4">
            <button className="w-full flex justify-between items-center text-left group">
              <span className="font-bold text-lg text-white">¿Incluyen la nutrición en todos los planes?</span>
              <span className="material-symbols-outlined text-primary">add</span>
            </button>
          </div>
          <div className="border-b border-slate-200 dark:border-white/10 pb-4">
            <button className="w-full flex justify-between items-center text-left group">
              <span className="font-bold text-lg text-white">¿Cómo funciona la sesión de prueba gratuita?</span>
              <span className="material-symbols-outlined text-primary">add</span>
            </button>
          </div>
          <div className="border-b border-slate-200 dark:border-white/10 pb-4">
            <button className="w-full flex justify-between items-center text-left group">
              <span className="font-bold text-lg text-white">¿Es necesario tener experiencia previa?</span>
              <span className="material-symbols-outlined text-primary">add</span>
            </button>
          </div>
          <div className="border-b border-slate-200 dark:border-white/10 pb-4">
            <button className="w-full flex justify-between items-center text-left group">
              <span className="font-bold text-lg text-white">¿Qué es el entrenamiento semiprivado?</span>
              <span className="material-symbols-outlined text-primary">add</span>
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-5xl mx-auto px-6">
        <div className="relative rounded-xl overflow-hidden bg-slate-900 dark:bg-white/5 p-12 md:p-20 text-center border border-white/10 shadow-2xl">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/30 via-transparent to-transparent"></div>
          </div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase tracking-tight text-white">Tu primera sesión es gratis</h2>
            <p className="text-slate-400 mb-10 max-w-xl mx-auto text-lg">
              Ven a conocernos, evalúa tu nivel actual y siente la experiencia Apex sin compromiso.
            </p>
            <button className="bg-primary text-white px-12 py-5 rounded-full font-black uppercase text-lg hover:scale-105 active:scale-95 transition-all shadow-[0_0_50px_rgba(255,106,0,0.5)]">
              Reservar mi Clase Gratis
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
