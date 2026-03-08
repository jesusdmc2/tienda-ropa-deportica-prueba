import Image from 'next/image';
import Link from 'next/link';

export default function ProgramsPage() {
  return (
    <main className="pt-32">
      {/* Header */}
      <header className="max-w-7xl mx-auto px-6 mb-20 text-center lg:text-left mt-10">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-none mb-4 text-white">
          PROGRAMAS DISEÑADOS <br /> 
          PARA TU <span className="text-primary">OBJETIVO</span>
        </h1>
        <div className="h-1 w-64 md:w-96 rounded-full bg-gradient-to-r from-primary to-transparent mx-auto lg:mx-0"></div>
        <p className="mt-8 text-lg text-slate-500 dark:text-slate-400 max-w-2xl font-light mx-auto lg:mx-0">
          Metodologías de alto rendimiento adaptadas a tu nivel. Selecciona tu camino y transforma tu potencial físico.
        </p>
      </header>

      {/* Program Grid */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Quema Total */}
          <div className="glass-card rounded-xl p-8 flex flex-col justify-between group">
            <div>
              <div className="flex justify-between items-start mb-6">
                <span className="bg-primary/20 text-primary border border-primary/30 text-xs font-bold px-3 py-1 rounded-full uppercase">Quema Total</span>
                <span className="text-slate-400 text-xs font-medium uppercase tracking-tighter">8 Semanas</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Máxima Definición</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">Optimización metabólica diseñada para reducir el porcentaje de grasa preservando la masa muscular.</p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="material-symbols-outlined text-primary text-lg">calendar_today</span>
                  <span>5 Sesiones / Semana</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="material-symbols-outlined text-primary text-lg">timer</span>
                  <span>45-60 Minutos</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="material-symbols-outlined text-primary text-lg">signal_cellular_alt</span>
                  <span>Nivel: Intermedio</span>
                </div>
              </div>
              <div className="border-l-2 border-primary/40 pl-4 mb-8 italic text-slate-500 text-sm">
                &quot;Bajé un 6% de grasa corporal sin sentir que estaba agotado. El plan nutricional es clave.&quot;
                <span className="block mt-1 font-bold not-italic text-slate-300 text-xs">— Carlos M.</span>
              </div>
            </div>
            <Link href="/contacto" className="flex items-center justify-between group-hover:text-primary transition-colors text-white">
              <span className="font-bold text-sm uppercase">Reserva tu evaluación</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>

          {/* Card 2: Fuerza Élite */}
          <div className="glass-card rounded-xl p-8 flex flex-col justify-between group border-primary/40">
            <div>
              <div className="flex justify-between items-start mb-6">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase">Fuerza Élite</span>
                <span className="text-slate-400 text-xs font-medium uppercase tracking-tighter">12 Semanas</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Hipertrofia & Poder</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">Enfoque en sobrecarga progresiva y técnica avanzada para maximizar el crecimiento muscular.</p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="material-symbols-outlined text-primary text-lg">calendar_today</span>
                  <span>4 Sesiones / Semana</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="material-symbols-outlined text-primary text-lg">timer</span>
                  <span>75-90 Minutos</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="material-symbols-outlined text-primary text-lg">signal_cellular_alt</span>
                  <span>Nivel: Avanzado</span>
                </div>
              </div>
              <div className="border-l-2 border-primary/40 pl-4 mb-8 italic text-slate-500 text-sm">
                &quot;Mis levantamientos principales subieron un 20% en solo 3 meses. El mejor programa de fuerza.&quot;
                <span className="block mt-1 font-bold not-italic text-slate-300 text-xs">— Javier L.</span>
              </div>
            </div>
            <Link href="/contacto" className="flex items-center justify-between group-hover:text-primary transition-colors text-white">
              <span className="font-bold text-sm uppercase">Reserva tu evaluación</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>

          {/* Card 3: Rendimiento Atlético */}
          <div className="glass-card rounded-xl p-8 flex flex-col justify-between group">
            <div>
              <div className="flex justify-between items-start mb-6">
                <span className="bg-primary/20 text-primary border border-primary/30 text-xs font-bold px-3 py-1 rounded-full uppercase">Rendimiento</span>
                <span className="text-slate-400 text-xs font-medium uppercase tracking-tighter">10 Semanas</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Velocidad & Explosividad</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">Entrenamiento pliométrico y funcional para atletas que buscan mejorar su desempeño en campo.</p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="material-symbols-outlined text-primary text-lg">calendar_today</span>
                  <span>5 Sesiones / Semana</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="material-symbols-outlined text-primary text-lg">timer</span>
                  <span>60 Minutos</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="material-symbols-outlined text-primary text-lg">signal_cellular_alt</span>
                  <span>Nivel: Pro</span>
                </div>
              </div>
              <div className="border-l-2 border-primary/40 pl-4 mb-8 italic text-slate-500 text-sm">
                &quot;Perfecto para mi pretemporada de fútbol. Mi velocidad de reacción es otra.&quot;
                <span className="block mt-1 font-bold not-italic text-slate-300 text-xs">— Miguel R.</span>
              </div>
            </div>
            <Link href="/contacto" className="flex items-center justify-between group-hover:text-primary transition-colors text-white">
              <span className="font-bold text-sm uppercase">Reserva tu evaluación</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>

          {/* Card 4: Flex & Core */}
          <div className="glass-card rounded-xl p-8 flex flex-col justify-between group">
            <div>
              <div className="flex justify-between items-start mb-6">
                <span className="bg-primary/20 text-primary border border-primary/30 text-xs font-bold px-3 py-1 rounded-full uppercase">Flex & Core</span>
                <span className="text-slate-400 text-xs font-medium uppercase tracking-tighter">6 Semanas</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Movilidad & Estabilidad</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">Fortalecimiento del núcleo y mejora del rango de movimiento para una vida sin dolor.</p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="material-symbols-outlined text-primary text-lg">calendar_today</span>
                  <span>3 Sesiones / Semana</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="material-symbols-outlined text-primary text-lg">timer</span>
                  <span>30-40 Minutos</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="material-symbols-outlined text-primary text-lg">signal_cellular_alt</span>
                  <span>Nivel: Todos</span>
                </div>
              </div>
              <div className="border-l-2 border-primary/40 pl-4 mb-8 italic text-slate-500 text-sm">
                &quot;Mi dolor de espalda desapareció tras 4 semanas de enfoque en movilidad.&quot;
                <span className="block mt-1 font-bold not-italic text-slate-300 text-xs">— Elena S.</span>
              </div>
            </div>
            <Link href="/contacto" className="flex items-center justify-between group-hover:text-primary transition-colors text-white">
              <span className="font-bold text-sm uppercase">Reserva tu evaluación</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>

          {/* Card 5: Primer Paso */}
          <div className="glass-card rounded-xl p-8 flex flex-col justify-between group">
            <div>
              <div className="flex justify-between items-start mb-6">
                <span className="bg-primary/20 text-primary border border-primary/30 text-xs font-bold px-3 py-1 rounded-full uppercase">Iniciación</span>
                <span className="text-slate-400 text-xs font-medium uppercase tracking-tighter">4 Semanas</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Primer Paso</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">Construye los cimientos. Técnica básica, resistencia general y creación del hábito.</p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="material-symbols-outlined text-primary text-lg">calendar_today</span>
                  <span>3 Sesiones / Semana</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="material-symbols-outlined text-primary text-lg">timer</span>
                  <span>45 Minutos</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="material-symbols-outlined text-primary text-lg">signal_cellular_alt</span>
                  <span>Nivel: Principiante</span>
                </div>
              </div>
              <div className="border-l-2 border-primary/40 pl-4 mb-8 italic text-slate-500 text-sm">
                &quot;Nunca había entrenado y la guía paso a paso me dio la confianza que necesitaba.&quot;
                <span className="block mt-1 font-bold not-italic text-slate-300 text-xs">— Mario V.</span>
              </div>
            </div>
            <Link href="/contacto" className="flex items-center justify-between group-hover:text-primary transition-colors text-white">
              <span className="font-bold text-sm uppercase">Reserva tu evaluación</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <h2 className="text-3xl font-extrabold mb-12 uppercase tracking-tight text-white">Comparativa de Programas</h2>
        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-primary text-white">
                <th className="p-5 font-bold uppercase text-xs tracking-widest">Programa</th>
                <th className="p-5 font-bold uppercase text-xs tracking-widest text-center">Duración</th>
                <th className="p-5 font-bold uppercase text-xs tracking-widest text-center">Nivel</th>
                <th className="p-5 font-bold uppercase text-xs tracking-widest">Enfoque Principal</th>
                <th className="p-5 font-bold uppercase text-xs tracking-widest text-center">Intensidad</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-slate-300">
              <tr className="bg-white/5 hover:bg-white/10 transition-colors">
                <td className="p-5 font-bold text-white">Quema Total</td>
                <td className="p-5 text-center">8 Semanas</td>
                <td className="p-5 text-center">Intermedio</td>
                <td className="p-5">Déficit calórico & HIIT</td>
                <td className="p-5 text-center">
                  <div className="flex justify-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <div className="w-2 h-2 rounded-full bg-white/20"></div>
                  </div>
                </td>
              </tr>
              <tr className="bg-transparent hover:bg-white/10 transition-colors">
                <td className="p-5 font-bold text-white">Fuerza Élite</td>
                <td className="p-5 text-center">12 Semanas</td>
                <td className="p-5 text-center">Avanzado</td>
                <td className="p-5">Powerlifting & Hipertrofia</td>
                <td className="p-5 text-center">
                  <div className="flex justify-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                </td>
              </tr>
              <tr className="bg-white/5 hover:bg-white/10 transition-colors">
                <td className="p-5 font-bold text-white">Rendimiento Atlético</td>
                <td className="p-5 text-center">10 Semanas</td>
                <td className="p-5 text-center">Pro</td>
                <td className="p-5">Pliometría & Agilidad</td>
                <td className="p-5 text-center">
                  <div className="flex justify-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                </td>
              </tr>
              <tr className="bg-transparent hover:bg-white/10 transition-colors">
                <td className="p-5 font-bold text-white">Flex & Core</td>
                <td className="p-5 text-center">6 Semanas</td>
                <td className="p-5 text-center">Todos</td>
                <td className="p-5">Postura & Longevidad</td>
                <td className="p-5 text-center">
                  <div className="flex justify-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <div className="w-2 h-2 rounded-full bg-white/20"></div>
                    <div className="w-2 h-2 rounded-full bg-white/20"></div>
                    <div className="w-2 h-2 rounded-full bg-white/20"></div>
                  </div>
                </td>
              </tr>
              <tr className="bg-white/5 hover:bg-white/10 transition-colors">
                <td className="p-5 font-bold text-white">Primer Paso</td>
                <td className="p-5 text-center">4 Semanas</td>
                <td className="p-5 text-center">Principiante</td>
                <td className="p-5">Técnica & Acondicionamiento</td>
                <td className="p-5 text-center">
                  <div className="flex justify-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <div className="w-2 h-2 rounded-full bg-white/20"></div>
                    <div className="w-2 h-2 rounded-full bg-white/20"></div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Custom Program Section */}
      <section className="relative w-full overflow-hidden mb-0 group">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuApFBW5TVfrVBtSbyQseN0iPU1LEzL0l6O4QMHRqyWnO4G3VSEj4oFtPYQ5U_72Qb_CtKUpfjkuMKXEWQ1_vEM4BHlWh8Dr1NcJQZd5Yu237B-4Igmk4Bo0ud38g_cHyiWBaHpNZerAPuJVmc3ifXZNw4ER1jncjLa81y5Funi4cyeEYRP0JwRD9pJ132eSaan1f3UgaUQLKDlezw1LGkL8s-X9QF5uGfXGpy1YXbsjpgw6FZ00-ys_q3pgkzsMZUd3lOcJ_y2jKFcH"
            alt="Gym athlete training with heavy weights"
            fill
            className="object-cover opacity-30 grayscale group-hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-background-dark/80 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center lg:text-left">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 uppercase tracking-tighter text-white">
            ¿BUSCAS ALGO <span className="text-primary">BESPOKE</span>?
          </h2>
          <p className="text-xl text-slate-300 max-w-xl mb-12 font-light leading-relaxed mx-auto lg:mx-0">
            Diseñamos planes 100% personalizados basados en tu genética, estilo de vida y objetivos específicos. El nivel máximo de personalización de Apex.
          </p>
          <button className="glow-button bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-lg font-bold text-lg uppercase tracking-widest transition-all inline-flex items-center justify-center gap-3 w-full sm:w-auto">
            Agenda una consulta
            <span className="material-symbols-outlined">event</span>
          </button>
        </div>
      </section>
    </main>
  );
}
