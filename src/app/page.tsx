import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDw5W6Qwdqcerbr28WosUZGor8B5CNMdffQyKYnpsRn4IejJfZlkBwoULAEHMt-zeO9N142mKQHidPY9awwswrowoW6qLo_VB3WHcHqqpuhyCLUhR2Twgs34c9kMdTKPQ-bUfrh_sezwzmNZvV7jHg7VJsgc-nVDa9X9DuawvOEh3PvFpGLq_uuEy1esxUW2nj62br1wRYcfL0EnxJ5br03T-WrknDgA6htQcJlfuIvv6x4RrMKvlU7zOPxwQ5Fv70MxKjQuFNwUAJg"
            alt="Elite Athlete Training"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
          <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter leading-snug mb-6 flex flex-col items-center justify-center">
            <span className="mb-2 block">TU MEJOR VERSIÓN</span>
            <span className="text-primary block">EMPIEZA AQUÍ</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Domina tu potencial con programas personalizados diseñados por expertos en alto rendimiento. Nutrición, entrenamiento y mentalidad en un solo lugar.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contacto">
              <button className="w-full sm:w-auto bg-primary text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-lg hover:scale-105 transition-all shadow-xl shadow-primary/20">
                Empieza tu prueba gratis
              </button>
            </Link>
            <Link href="/programas">
              <button className="w-full sm:w-auto border-2 border-white/20 hover:border-white text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-lg transition-all backdrop-blur-sm">
                Ver programas
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative z-20 -mt-16 px-4">
        <div className="max-w-6xl mx-auto glass rounded-lg p-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-t border-white/10 shadow-2xl">
          <div>
            <h3 className="text-4xl font-black text-primary italic">+2,500</h3>
            <p className="text-slate-400 font-semibold uppercase tracking-widest text-xs mt-2">Miembros Activos</p>
          </div>
          <div className="border-y md:border-y-0 md:border-x border-white/10 py-4 md:py-0">
            <h3 className="text-4xl font-black text-primary italic">+15,000</h3>
            <p className="text-slate-400 font-semibold uppercase tracking-widest text-xs mt-2">Transformaciones</p>
          </div>
          <div>
            <h3 className="text-4xl font-black text-primary italic">50+</h3>
            <p className="text-slate-400 font-semibold uppercase tracking-widest text-xs mt-2">Coaches Certificados</p>
          </div>
        </div>
      </section>

      {/* Why Apex */}
      <section className="py-24 px-4 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-primary font-black uppercase tracking-widest text-sm mb-4">¿Por qué elegirnos?</h2>
            <p className="text-4xl md:text-5xl font-extrabold italic">EL ESTÁNDAR DE LA ÉLITE</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="glass p-10 rounded-xl hover:bg-white/5 transition-all group">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary text-3xl">fitness_center</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Planes a Medida</h3>
              <p className="text-slate-400 leading-relaxed">Entrenamientos adaptados a tu nivel, equipo disponible y objetivos específicos. No más rutinas genéricas.</p>
            </div>
            {/* Card 2 */}
            <div className="glass p-10 rounded-xl hover:bg-white/5 transition-all group border-primary/30">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary text-3xl">psychology</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Coaches Élite</h3>
              <p className="text-slate-400 leading-relaxed">Acceso directo a profesionales con experiencia en competición y ciencias del deporte.</p>
            </div>
            {/* Card 3 */}
            <div className="glass p-10 rounded-xl hover:bg-white/5 transition-all group">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary text-3xl">monitoring</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Resultados Reales</h3>
              <p className="text-slate-400 leading-relaxed">Seguimiento de métricas avanzado para asegurar que cada gota de sudor cuente hacia tu meta.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-24 px-4 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
            <div className="text-left">
              <h2 className="text-primary font-black uppercase tracking-widest text-sm mb-4">Nuestros Programas</h2>
              <p className="text-4xl md:text-5xl font-extrabold italic">ENCUENTRA TU DESAFÍO</p>
            </div>
            <Link href="/programas" className="text-primary font-bold uppercase tracking-widest text-sm flex items-center gap-2 hover:gap-4 transition-all">
              Ver todos los programas <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Program 1 */}
            <div className="group relative overflow-hidden rounded-xl bg-background-dark">
              <div className="h-80 overflow-hidden relative">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcp_UnC4drAm5Nnn6_T6Gb-L10GQgy-cYgY1bGHmPs0FRpz7JxjqV3Dbp27zk4uwIbK7fHaJ_ck-DRBmLTYcTKYXxHytRfeWOJJGm4VVNmc-3B0WjPMTJFpNzPSQgwNa3yJypGJ074fqnLYTUFgA7oGECxDOW2Ink6O2FLBZYBArw4burNh4SlovBGAQDtC_MGBfKhVC0jDqQmtvOdczzBOgo0qhP7Z67LpWTHnIJNwBWUmndtCigM1y7EYASNmkkhFjzLWGduuNkq"
                  alt="Quema Total HIIT"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500 opacity-70"
                />
              </div>
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="bg-primary text-white text-[10px] font-black uppercase px-3 py-1 rounded-full">8 Semanas</span>
                <span className="bg-white/10 backdrop-blur-md text-white text-[10px] font-black uppercase px-3 py-1 rounded-full">Avanzado</span>
              </div>
              <div className="p-6 relative z-10">
                <h4 className="text-2xl font-bold mb-2">Quema Total</h4>
                <p className="text-slate-400 text-sm mb-6">HIIT de alta intensidad diseñado para maximizar la pérdida de grasa y resistencia.</p>
                <Link href="/programas" className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs">
                  Ver más <span className="material-symbols-outlined text-sm">add</span>
                </Link>
              </div>
            </div>
            {/* Program 2 */}
            <div className="group relative overflow-hidden rounded-xl bg-background-dark">
              <div className="h-80 overflow-hidden relative">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrkyD-aSqPlDWnnoI8vO7h8XGi7e2M-SSG6j6X5tlXtQIFlFmlqlw_Iefmfhq3AU-KtbJmFwDkEzp3BuNqyxACHjgdBqh3s884tEUG99x1zNmvA7ADeJ5tdME7V2h20FnH6Lut9d054LtNhsXgnbRm2qHcnnUmMm1qZIaL0FYJWDsKVY6J7noPQfLtawLClbLYOXqWEX-0_6WEzJ0suDVlXHzzOmOybwR-paqgZMSy7yDG3APbXHAeAji8TcjgnbJriSvLfoatZ8b0"
                  alt="Fuerza Élite"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500 opacity-70"
                />
              </div>
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="bg-primary text-white text-[10px] font-black uppercase px-3 py-1 rounded-full">12 Semanas</span>
                <span className="bg-white/10 backdrop-blur-md text-white text-[10px] font-black uppercase px-3 py-1 rounded-full">Intermedio</span>
              </div>
              <div className="p-6 relative z-10">
                <h4 className="text-2xl font-bold mb-2">Fuerza Élite</h4>
                <p className="text-slate-400 text-sm mb-6">Enfoque en powerlifting y fuerza funcional para construir una base sólida.</p>
                <Link href="/programas" className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs">
                  Ver más <span className="material-symbols-outlined text-sm">add</span>
                </Link>
              </div>
            </div>
            {/* Program 3 */}
            <div className="group relative overflow-hidden rounded-xl bg-background-dark">
              <div className="h-80 overflow-hidden relative">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-a4mCI6ndbP_Iawv407oqHuTas7ktYU70wY3xCFXubyvGbzMFEq0GrjKMBGDpGZe3Zpr3grYckcwk7OW-LJquzvwp4OQcxLhPxYQqX-neHQ6rn1jORzLbxK7PGw2b6HND0C27OX5TAsJABUK5yusQGK4XcxIP_fKq5T73uBkehx2c6jbTycXXxz64bu24TJ5wF4BqHDwYV2Hpdyblo1LYrftgqhZ9-VVs5Yq1Yo7yopUh-lB__Dk8Fxh40rheoOdMobhkwCGxOTpE"
                  alt="Rendimiento Atlético"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500 opacity-70"
                />
              </div>
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="bg-primary text-white text-[10px] font-black uppercase px-3 py-1 rounded-full">Continuo</span>
                <span className="bg-white/10 backdrop-blur-md text-white text-[10px] font-black uppercase px-3 py-1 rounded-full">Pro</span>
              </div>
              <div className="p-6 relative z-10">
                <h4 className="text-2xl font-bold mb-2">Rendimiento Atlético</h4>
                <p className="text-slate-400 text-sm mb-6">Entrenamiento específico para deportistas que buscan mejorar explosividad.</p>
                <Link href="/programas" className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs">
                  Ver más <span className="material-symbols-outlined text-sm">add</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-primary font-black uppercase tracking-widest text-sm mb-4">Testimonios</h2>
            <p className="text-4xl md:text-5xl font-extrabold italic">COMUNIDAD APEX</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Testimonial 1 */}
            <div className="glass p-8 rounded-xl max-w-sm">
              <div className="flex gap-1 text-primary mb-4">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
              <p className="italic text-slate-300 mb-8 leading-relaxed">"Llevo 6 meses en Apex y mi físico ha cambiado por completo. La atención personalizada de los coaches es lo que marca la diferencia."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden relative">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8TQL_RWwiGYERhM9LByIYYEi0D4Gy9VCvuFHpKPGlaZ7wg1pB30DaDpaT7LNEvbRUd-_EaGPMYxN7tDKH8KYq_itu7ex9Wevt30-x_pBq89yNBFDZh4BBoSldhsHyVsexipJtt8Rg6gAoiZ2ayRtt5iUa9sy1P50jY37Jq-FiCijB3QvW2uNkYIlpc1vMnnc7kr1kJAhVRyySqevdv1oOP3RkG_aY2StqU3TGAGPwuapsAdL72UUQsTsV827D3hwgb8JRYJBKWEU0"
                    alt="User portrait"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold">Carla Méndez</p>
                  <p className="text-primary text-[10px] font-black uppercase">Miembro Pro</p>
                </div>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="glass p-8 rounded-xl max-w-sm border-primary/30">
              <div className="flex gap-1 text-primary mb-4">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
              <p className="italic text-slate-300 mb-8 leading-relaxed">"El programa Fuerza Élite me ayudó a superar mis estancamientos en sentadilla. No podría estar más feliz con mi progreso."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden relative">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpcJDPBLOTfMRA9kD-g8Y5PFaJ30ZLhOIM9yLRo4Hwr9yDHN4SVClyPY8dAS62JR-bbu53v0r8x6gAkMFLNt9pd_CzAE8AaMSPHC72wrfXSa0LsXxK9dB9XK1haXj_aXQa8ICXrDHDjQdQ_-8si7ezSezjS032hiXgH8TpW4fH7JEVy7WGcUv6t_U0b38KqJxy8IUH-2gZVO3uDnFgutnQVceCqsIcI-Ogx-hoKcuROIPqOQItjr5BqO_cXiEAIXq0i4N5KLGLMqKV"
                    alt="User portrait"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold">Marcos Rivera</p>
                  <p className="text-primary text-[10px] font-black uppercase">Atleta de Fuerza</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto relative rounded-lg overflow-hidden p-12 md:p-24 text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-orange-800 opacity-90 z-0"></div>
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAV6NTojCi-TGhgptAXURCZYno8W25sAl9nnsfG8zpT07g7R2iwLxOsXheHG3u0xKQg6uZu2kTinXQpcs0dKxPOKqA9hKAK3L_ZqvPZ5hfGd8tvjfWxf8wEtq6FmW46Mcu0JqJ1Q-xjYarzkNCU3Ex3b6GHtRsJwJuCTFfwRLmCKxbtTHLDcFq2of0pK-dc96L0GUEQ_xm0izrM8cGbfz8WbvctHRZpNdCaGwb_61rXkxxi6Wr1sy8a7loZrgVYg2v2JmikZiGlHPGr"
            alt="Gym Background"
            fill
            className="object-cover mix-blend-overlay z-0"
          />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black italic mb-8 leading-tight">¿LISTO PARA LLEGAR <br /> AL SIGUIENTE NIVEL?</h2>
            <p className="text-xl mb-12 max-w-xl mx-auto opacity-90">Únete hoy y obtén acceso ilimitado a todos nuestros planes de entrenamiento.</p>
            <Link href="/membresias">
              <button className="bg-white text-primary px-12 py-5 rounded-full font-black uppercase tracking-widest text-xl hover:bg-slate-100 transition-colors shadow-2xl">
                Comienza Ahora
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
