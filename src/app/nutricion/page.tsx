import Image from 'next/image';
import Link from 'next/link';

export default function NutritionPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background-dark z-10"></div>
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6SmZ5eCl0fkrkmcPi6JZydSo-JfHY6SaHQWs2_U9Tk2OC0Sijc7g5KfsCDe3dRTRGutZ6bj6C2nnslILQZlfTBc6UxkbKuvhR5ACXbh8MaVaNjJ981thlp89uWvymuExcKpBbv66pfpZngnmcnx_24XfnbhCd0yXDq-GQcVOpDcAp4666PbLLsJlvPLQKqhhL6rSZ3DhWkk5Xi8fc8el9QrsWAbqdT0eslDa7bFrrgZzSPGRWTaBa-6W_V73gPo1W-ZgWcawi79uR"
            alt="Healthy Food"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-10">
          <span className="inline-block py-1 px-4 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-6">Optimización Nutricional</span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 dark:text-white">
            ENTRENA DURO.<br /><span className="text-gradient-primary">COME INTELIGENTE.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-400 mb-10">
            Lleva tu rendimiento al siguiente nivel con planes nutricionales diseñados para la vida real. Resultados sin restricciones extremas, basados en ciencia y flexibilidad total.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all glow-button">
              EMPEZAR MI PLAN
            </button>
            <Link href="/resultados">
              <button className="glass-card text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all w-full sm:w-auto">
                VER RESULTADOS
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* Nutrition Philosophy */}
      <section className="py-20 bg-background-light dark:bg-background-dark relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-2xl border-t-4 border-t-primary relative group hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">restaurant_menu</span>
              </div>
              <h3 className="text-xl font-bold mb-4 dark:text-white">Sin dietas extremas</h3>
              <p className="text-slate-400 leading-relaxed">Olvídate de la restricción calórica severa. Nos enfocamos en el equilibrio y el disfrute de la comida para resultados sostenibles.</p>
            </div>
            <div className="glass-card p-8 rounded-2xl border-t-4 border-t-primary relative group hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">psychology</span>
              </div>
              <h3 className="text-xl font-bold mb-4 dark:text-white">Enfoque en hábitos</h3>
              <p className="text-slate-400 leading-relaxed">No solo te decimos qué comer, te enseñamos a tomar decisiones inteligentes que se adaptan a tu estilo de vida acelerado.</p>
            </div>
            <div className="glass-card p-8 rounded-2xl border-t-4 border-t-primary relative group hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">science</span>
              </div>
              <h3 className="text-xl font-bold mb-4 dark:text-white">Basado en ciencia</h3>
              <p className="text-slate-400 leading-relaxed">Nuestras estrategias están validadas por la fisiología del ejercicio y la nutrición deportiva de élite para maximizar el rendimiento.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-extrabold mb-8 dark:text-white uppercase">TODO LO QUE NECESITAS PARA <span className="text-primary">TRIUNFAR</span></h2>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                  <span className="material-symbols-outlined text-white text-sm">check</span>
                </div>
                <div>
                  <h4 className="font-bold dark:text-white text-lg">Evaluación Metabólica Inicial</h4>
                  <p className="text-slate-400">Analizamos tu composición corporal y requerimientos energéticos específicos.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                  <span className="material-symbols-outlined text-white text-sm">check</span>
                </div>
                <div>
                  <h4 className="font-bold dark:text-white text-lg">Planes de Alimentación Semanales</h4>
                  <p className="text-slate-400">Personalizados al 100% según tus objetivos de ganancia muscular o pérdida de grasa.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                  <span className="material-symbols-outlined text-white text-sm">check</span>
                </div>
                <div>
                  <h4 className="font-bold dark:text-white text-lg">Listas de Compras Inteligentes</h4>
                  <p className="text-slate-400">Optimiza tu tiempo en el supermercado con guías precisas de lo que tu cuerpo necesita.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                  <span className="material-symbols-outlined text-white text-sm">check</span>
                </div>
                <div>
                  <h4 className="font-bold dark:text-white text-lg">Recetario de Alto Rendimiento</h4>
                  <p className="text-slate-400">Más de 100 recetas rápidas, nutritivas y diseñadas para el paladar gourmet.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[500px] w-full">
            <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full"></div>
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQlsDSa68UbRujnX19DzBFnDIwNAHCce_xfmYCKt9kfPJlaKEbTqqOhSEvAA5T1M0SuSiibHgbz97cSTZtinu-yGyvyGX6Edrnm2WJGhnfLawn0bL7ze1vn5WnTXBC1bBU5eW-l71OADOfMjEjJNMBdfmZPeedWvHYEQNKkdpRaUdlmGEhWGIeGoDQbdJEuhNfilNa8ebLIuf9xkFbq5wk2U7MQ-juNmKwlV3Ez2zkvWhkHsPr4mmex8GED5Mo7UDXyrMI9s_fJ63g"
              alt="Nutrition Planning"
              fill
              className="relative z-10 rounded-2xl shadow-2xl border border-white/10 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Sample Day Meal Plan */}
      <section className="py-20 bg-black/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-4xl font-extrabold dark:text-white mb-2 uppercase">Un día en Apex</h2>
              <p className="text-slate-400">Ejemplo de planificación para un atleta de alto rendimiento.</p>
            </div>
            <div className="bg-primary px-8 py-4 rounded-2xl text-center glow-button">
              <span className="block text-xs uppercase font-bold text-white/80">Total Diario</span>
              <span className="text-3xl font-extrabold text-white">1,910 kcal</span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
            {/* Desayuno */}
            <div className="glass-card rounded-2xl overflow-hidden flex flex-col">
              <div className="relative h-40 w-full">
                <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuCs2uPDE_ALIyP2nq1P2-ueSKSHWpTB-52pguOWkMBE0BxFn328obQaEBHQeWqzohhkQcS262KHNG8jE14c4f294o_vuVGFEp6n-fnIUG_AksO1lWfGBbBJGE-WK-zltHNofTVMVjc8t1TOGX_Nm4cYCVTg7AkLD84iyhseMntv6VbkX_YObH5zyvArHHoHBxeFyVD7llvK1Q_6UaR0NGS-n230TFIt6X2uTPiDJPwoBbE_xp6Y33MLS_hnL-PHqp4URnyFwypmpgwc" alt="Breakfast" fill className="object-cover" />
              </div>
              <div className="p-6">
                <span className="text-primary text-xs font-bold uppercase mb-2 block">08:00 AM</span>
                <h4 className="text-lg font-bold dark:text-white mb-2">Desayuno Vital</h4>
                <p className="text-sm text-slate-400 mb-4 italic">Tostadas de masa madre con aguacate y huevo poché.</p>
                <span className="text-xs font-medium text-slate-300">450 kcal | 25g Prot</span>
              </div>
            </div>
            {/* Media Mañana */}
            <div className="glass-card rounded-2xl overflow-hidden flex flex-col">
              <div className="relative h-40 w-full">
                <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuCn8P0pVfX6WLqAKcBT8aY3NlwPrRnYecXzompHi7Bkz4MA8NC5NmFRtoComVE880r6lknzHydCPfpcpSAa3N-ZQf1JfUFOza1i7vLe0HEAUddKuPnq_ki9Nji04p0jD503nzth_WReAfgA6SsghWu8cC6CxCZbyam-NzVkoHgPa7o-niQlu8-5IWFmQ1BILTrmXzQegZCnyBqr29vpNIYPOWWlmgyEKK3v6CPGgFWQj446bsJy4mjrF9S93wY3XXKed2qFovn5VwiZ" alt="Snack" fill className="object-cover" />
              </div>
              <div className="p-6">
                <span className="text-primary text-xs font-bold uppercase mb-2 block">11:00 AM</span>
                <h4 className="text-lg font-bold dark:text-white mb-2">Snack Proteico</h4>
                <p className="text-sm text-slate-400 mb-4 italic">Yogur griego con frutos rojos y un puñado de nueces.</p>
                <span className="text-xs font-medium text-slate-300">220 kcal | 15g Prot</span>
              </div>
            </div>
            {/* Almuerzo */}
            <div className="glass-card rounded-2xl overflow-hidden flex flex-col">
              <div className="relative h-40 w-full">
                <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRXLakKCVfgLCdf1DBANNld0GVxbN2eqRhkjYd-6i0fIZifRuAipGVrXcvjfKoQQWYB3cWbek8_WIAwB7kAQ_Qwru3JfP6E5mWx2sE3iRoSmZmRPdyqmvqYi5F2-qpQQyOTLrND9JvppwPpr4m8c0dptNNqLLLAemtp3dk69x_lw8nr3rJmd82zQS7I7cAufDeEt4AUsrD7bsy_xm8DynCGZMm6Kc7D1SwV5-lp7SM5xfQ_qjJkFyTTpDJ0VgII_OQ4hqqOgH4dsVT" alt="Lunch" fill className="object-cover" />
              </div>
              <div className="p-6">
                <span className="text-primary text-xs font-bold uppercase mb-2 block">02:30 PM</span>
                <h4 className="text-lg font-bold dark:text-white mb-2">Almuerzo Power</h4>
                <p className="text-sm text-slate-400 mb-4 italic">Pechuga de pollo a la plancha, quinoa y vegetales asados.</p>
                <span className="text-xs font-medium text-slate-300">640 kcal | 45g Prot</span>
              </div>
            </div>
            {/* Merienda */}
            <div className="glass-card rounded-2xl overflow-hidden flex flex-col">
              <div className="relative h-40 w-full">
                <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwFZsLGau4PKcUJQVoxWMYv4joWUfwZwBLKqbG0nT1JdKmcFMWib-GN0oqjwxlIxT441Q1UNJY_jZC7oYM6KgEF23ypMoa51RjgCXoQVjyWF3wxSNLdpA6rYzAftqnSiQg2JESdrWrnCD49ODfzSEFZXXV1Oh4W8jZHstdEq-9sg4oYetAGL-1ATLsrnKnQS8jqqkinFYJh3HKkXqdRC_LKQ1LSgkJBdUFCsVagA-62S2PrtxDFd4tEu8v7D9kMOuW42otB_5cei2Q" alt="Post-workout" fill className="object-cover" />
              </div>
              <div className="p-6">
                <span className="text-primary text-xs font-bold uppercase mb-2 block">05:30 PM</span>
                <h4 className="text-lg font-bold dark:text-white mb-2">Batido Recover</h4>
                <p className="text-sm text-slate-400 mb-4 italic">Batido de proteína whey con plátano y leche de almendras.</p>
                <span className="text-xs font-medium text-slate-300">280 kcal | 28g Prot</span>
              </div>
            </div>
            {/* Cena */}
            <div className="glass-card rounded-2xl overflow-hidden flex flex-col">
              <div className="relative h-40 w-full">
                <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuDN0-MbNlm_pB_JjDvYAn-XWa0-g3SOMAeqe7RO629piF52mLThBuSeUIVyR8qVG4kQFm84jSC_4u2XVk2Bl7ieZeFs1jE6xo1q7vwHBNjA3N3RXWlqOuS5UOak4AX9ouhaTW0qxtBaTdLgV5BI6CYwGNuw98f4Iwz4VGrlF9YNhq6s4w3UNPOmWq-SMWG0SPaEop3WYRePtVhFpYjptTRismvwvBZJt0FKbMfCj4S0r2ZhZJbFWSkvzAF-6pezQ1WZ4SEd2um9tl7z" alt="Dinner" fill className="object-cover" />
              </div>
              <div className="p-6">
                <span className="text-primary text-xs font-bold uppercase mb-2 block">09:00 PM</span>
                <h4 className="text-lg font-bold dark:text-white mb-2">Cena Ligera</h4>
                <p className="text-sm text-slate-400 mb-4 italic">Salmón al horno con espárragos trigueros y boniato.</p>
                <span className="text-xs font-medium text-slate-300">320 kcal | 30g Prot</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 dark:text-white uppercase leading-tight">
            Tu transformación comienza <br /><span className="text-primary">en la cocina</span>
          </h2>
          <p className="text-xl text-slate-400 mb-12">
            Deja de adivinar y empieza a ver resultados reales. Estamos listos para diseñar tu estrategia ganadora.
          </p>
          <button className="bg-primary hover:bg-orange-600 text-white px-10 py-5 rounded-xl font-extrabold text-xl transition-all glow-button flex items-center justify-center gap-3 mx-auto">
            SOLICITA TU PLAN NUTRICIONAL <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </section>
    </div>
  );
}
