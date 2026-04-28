'use client';
import { useState } from 'react';

export default function ContactoPage() {
  const [form, setForm] = useState({ nombre: '', email: '', telefono: '', mensaje: '' });
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Contáctanos</p>
          <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-6 uppercase italic">
            EMPIEZA TU <br />
            <span className="text-primary">PRUEBA GRATIS</span>
          </h1>
          <p className="max-w-2xl mx-auto text-slate-400 text-lg font-light leading-relaxed">
            Un asesor personalizado te contactará en menos de 24 horas para diseñar tu plan ideal.
          </p>
        </div>
      </header>

      {/* Content */}
      <section className="py-12 px-6 flex-1">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Formulario */}
          <div className="glass-card rounded-2xl p-8">
            {enviado ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🎯</div>
                <h2 className="text-2xl font-black text-white mb-3">¡Mensaje recibido!</h2>
                <p className="text-slate-400">Nos pondremos en contacto contigo en menos de 24 horas.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <label className="block text-sm font-bold uppercase tracking-widest text-slate-400 mb-2">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    required
                    value={form.nombre}
                    onChange={e => setForm({ ...form, nombre: e.target.value })}
                    placeholder="Tu nombre"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold uppercase tracking-widest text-slate-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    placeholder="tu@email.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold uppercase tracking-widest text-slate-400 mb-2">
                    Teléfono (opcional)
                  </label>
                  <input
                    type="tel"
                    value={form.telefono}
                    onChange={e => setForm({ ...form, telefono: e.target.value })}
                    placeholder="+34 600 000 000"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold uppercase tracking-widest text-slate-400 mb-2">
                    ¿Cuál es tu objetivo?
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.mensaje}
                    onChange={e => setForm({ ...form, mensaje: e.target.value })}
                    placeholder="Cuéntanos sobre tu objetivo deportivo..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-4 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-all glow-button shadow-xl shadow-primary/20"
                >
                  Quiero empezar ahora
                </button>
              </form>
            )}
          </div>

          {/* Info lateral */}
          <div className="flex flex-col gap-8">
            {[
              {
                icon: '⚡',
                titulo: 'Respuesta rápida',
                desc: 'Te contactamos en menos de 24 horas con un plan personalizado.',
              },
              {
                icon: '🏋️',
                titulo: 'Primera sesión gratis',
                desc: 'Prueba sin compromiso con uno de nuestros coaches certificados.',
              },
              {
                icon: '📍',
                titulo: 'Online y presencial',
                desc: 'Adaptamos el entrenamiento a tu estilo de vida y ubicación.',
              },
              {
                icon: '📧',
                titulo: 'Email',
                desc: 'hola@apexperformance.com',
              },
            ].map((item, i) => (
              <div key={i} className="glass-card rounded-xl p-6 flex gap-4 items-start">
                <span className="text-3xl">{item.icon}</span>
                <div>
                  <h3 className="font-black text-white text-lg mb-1">{item.titulo}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
