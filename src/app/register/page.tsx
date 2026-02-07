import Link from 'next/link';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

export default function RegisterPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white min-h-screen flex flex-col font-display">
      {/* Top Navigation Bar */}
      <header className="flex items-center bg-background-light dark:bg-background-dark p-4 sticky top-0 z-10">
        <Link href="/" className="text-primary flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 cursor-pointer hover:bg-primary/20 transition-colors">
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
        <div className="flex-1 flex justify-center pr-10">
          <h2 className="text-primary text-lg font-extrabold tracking-tighter uppercase italic">Apex Performance</h2>
        </div>
      </header>

      <main className="flex-1 px-6 pb-12 max-w-[480px] mx-auto w-full overflow-y-auto">
        {/* Hero Title */}
        <div className="pt-8 pb-6">
          <h1 className="text-4xl font-extrabold tracking-tight leading-tight">Crea tu <span className="text-primary">Cuenta</span></h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2 font-light font-body">Únete a la élite del rendimiento deportivo.</p>
        </div>

        {/* Registration Form */}
        <form className="space-y-5">
          {/* Full Name */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold uppercase tracking-wider text-slate-400">Nombre Completo</label>
            <div className="relative group">
              <input className="w-full h-14 bg-slate-100 dark:bg-zinc-800 border-2 border-transparent focus:border-primary focus:ring-0 rounded-xl px-4 text-base transition-all duration-300 outline-none placeholder:text-gray-500" placeholder="Tu nombre y apellido" type="text" />
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary transition-colors">person</span>
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold uppercase tracking-wider text-slate-400">Correo Electrónico</label>
            <div className="relative group">
              <input className="w-full h-14 bg-slate-100 dark:bg-zinc-800 border-2 border-transparent focus:border-primary focus:ring-0 rounded-xl px-4 text-base transition-all duration-300 outline-none placeholder:text-gray-500" placeholder="ejemplo@correo.com" type="email" />
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary transition-colors">mail</span>
            </div>
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold uppercase tracking-wider text-slate-400">Contraseña</label>
            <div className="relative group">
              <input className="w-full h-14 bg-slate-100 dark:bg-zinc-800 border-2 border-transparent focus:border-primary focus:ring-0 rounded-xl px-4 text-base transition-all duration-300 outline-none placeholder:text-gray-500" placeholder="Mínimo 8 caracteres" type="password" />
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary cursor-pointer hover:text-white">visibility</span>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold uppercase tracking-wider text-slate-400">Confirmar Contraseña</label>
            <div className="relative group">
              <input className="w-full h-14 bg-slate-100 dark:bg-zinc-800 border-2 border-transparent focus:border-primary focus:ring-0 rounded-xl px-4 text-base transition-all duration-300 outline-none placeholder:text-gray-500" placeholder="Repite tu contraseña" type="password" />
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary">lock</span>
            </div>
          </div>

          {/* Checkboxes */}
          <div className="space-y-4 pt-4">
            <label className="flex items-center gap-3 cursor-pointer group">
              <input className="w-6 h-6 rounded-md bg-slate-100 dark:bg-zinc-800 border-2 border-zinc-700 text-primary focus:ring-primary focus:ring-offset-0 transition-all cursor-pointer accent-primary" type="checkbox" />
              <span className="text-sm text-slate-600 dark:text-slate-300">Acepto los <span className="text-primary font-semibold">Términos y Condiciones</span></span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer group">
              <input className="w-6 h-6 rounded-md bg-slate-100 dark:bg-zinc-800 border-2 border-zinc-700 text-primary focus:ring-primary focus:ring-offset-0 transition-all cursor-pointer accent-primary" type="checkbox" />
              <span className="text-sm text-slate-600 dark:text-slate-300">Suscribirme al Newsletter de lanzamientos</span>
            </label>
          </div>

          {/* Main CTA */}
          <Link href="/home" className="w-full block mt-4">
            <button className="w-full h-16 bg-primary text-white font-extrabold text-lg uppercase tracking-widest rounded-full shadow-lg shadow-primary/30 active:scale-[0.98] transition-all flex items-center justify-center gap-2 hover:brightness-110" type="button">
                CREAR CUENTA
                <span className="material-symbols-outlined">bolt</span>
            </button>
          </Link>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-4 my-8">
          <div className="flex-1 h-[1px] bg-slate-200 dark:bg-zinc-800"></div>
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400">O regístrate con</span>
          <div className="flex-1 h-[1px] bg-slate-200 dark:bg-zinc-800"></div>
        </div>

        {/* Social Buttons */}
        <div className="flex gap-4">
          <button className="flex-1 h-14 bg-slate-100 dark:bg-zinc-800 rounded-full flex items-center justify-center gap-3 border border-transparent hover:border-slate-300 dark:hover:border-zinc-700 transition-all active:scale-95">
            <img alt="Google" className="w-6 h-6" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKxCwnApU0-xE0_SHpMV_iAr6Fjc8-OHZf9A2XPLNEEDD3nOtLjG8Al5nNyYNO9mREZHFVVyFxP6yFG8PNO2bfnHEnuZSBcKX-Hn7S1VDB7sO-Xh9-DEdM2fm2obYfKmlsr0qyhchM2B1YCNhi7TyvtXsmscpzGYjywR_QqwSGONry_6-Es1U2bBjNIlvSm5nwb0THjM61LmUknw8vnp9tpJcGJK1pGDlvjWELcDE6QzVu4wGhTlQi3KZxyJy6Mj501LlUnPe35q0j" />
            <span className="font-semibold text-sm">Google</span>
          </button>
          <button className="flex-1 h-14 bg-slate-100 dark:bg-zinc-800 rounded-full flex items-center justify-center gap-3 border border-transparent hover:border-slate-300 dark:hover:border-zinc-700 transition-all active:scale-95">
            <span className="material-symbols-outlined text-black dark:text-white">ios</span>
            <span className="font-semibold text-sm">Apple</span>
          </button>
        </div>

        {/* Footer */}
        <div className="text-center mt-10">
          <p className="text-slate-500 dark:text-slate-400 font-medium">
              ¿Ya tienes cuenta?
              <Link href="/login" className="text-primary font-bold hover:underline transition-all underline-offset-4 ml-1">Inicia Sesión</Link>
          </p>
        </div>
      </main>

      {/* Aesthetic Decorative Element (Bottom) */}
      <div className="fixed bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
    </div>
  );
}
