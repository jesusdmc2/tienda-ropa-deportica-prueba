'use client';
import Link from 'next/link';
import { Header } from '@/components/ui/Header';
import { BottomNav } from '@/components/ui/BottomNav';

export default function ProfilePage() {
  const navItems = [
    { icon: 'home', label: 'Inicio', href: '/home' },
    { icon: 'search', label: 'Buscar', href: '/categories' },
    { icon: 'shopping_cart', label: 'Carrito', href: '/cart' },
    { icon: 'person', label: 'Perfil', href: '/profile', active: true, filled: true },
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white min-h-screen pb-safe">
      <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-x-hidden">
        {/* Top Navigation */}
        <Header
          title="Perfil"
          leftIcon="arrow_back"
          onLeftIconClick={() => window.history.back()}
          rightIcon="settings"
        />

        {/* User Header Profile Section */}
        <div className="flex p-6 @container">
          <div className="flex w-full flex-col gap-4 items-center sm:flex-row sm:items-center sm:gap-6">
            <div className="relative">
              <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-28 w-28 border-4 border-primary/20" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA6jqePkNK4OYuM5XnWNqIYFRVA0jvNg2dm4sFv_ntDd9Am2v2Vdw_Wx1GO94jt9VIf3Ew1QqMTSgAHagsKeZtJV21k9oFDFdNEYsaNckF3EGhIY_B-0U0xNG455JXvwrsnSRO1B5F-BO4JnKPb1y7jvuP0Fu-lkOIVMS_76CZmT1ueflwllHkDmwNw5jzTo6iHMY4Xqb_1ExQsgqla_CncFRVPfJoNwLBnVLg2L_dFBEgOr6CGbvzHEFP4HZEcJ2RVUNMRzDla6z8S")' }}>
              </div>
              <div className="absolute bottom-1 right-1 bg-primary p-1.5 rounded-full border-2 border-background-dark cursor-pointer hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-white text-[16px] block">edit</span>
              </div>
            </div>
            <div className="flex flex-col items-center sm:items-start">
              <p className="text-slate-900 dark:text-white text-2xl font-bold leading-tight">Jesús García</p>
              <p className="text-slate-500 dark:text-[#baab9c] text-base font-normal">jesus@example.com</p>
              <div className="mt-2 inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/30">
                <span className="text-primary text-xs font-bold uppercase tracking-wider">Miembro Elite</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Orders Section */}
        <div className="px-4 py-2">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-slate-900 dark:text-white text-xl font-bold leading-tight">Pedidos Recientes</h3>
            <button className="text-primary text-sm font-semibold hover:underline">Ver todos</button>
          </div>
          <div className="flex items-stretch justify-between gap-4 rounded-xl bg-white dark:bg-[#2d241b] p-4 shadow-sm border border-slate-100 dark:border-white/5 group hover:border-primary/20 transition-colors cursor-pointer">
            <div className="flex flex-[2_2_0px] flex-col justify-between py-1">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 rounded-md bg-primary text-white text-[10px] font-bold uppercase">Enviado</span>
                  <p className="text-slate-400 dark:text-[#baab9c] text-xs font-normal">Hoy, 10:30 AM</p>
                </div>
                <p className="text-slate-900 dark:text-white text-lg font-bold leading-tight group-hover:text-primary transition-colors">Pedido #AP-98421</p>
                <p className="text-slate-600 dark:text-[#baab9c] text-sm font-normal">Sudadera Apex Pro + 2 Accesorios</p>
              </div>
              <button className="flex cursor-pointer items-center justify-center rounded-full h-9 px-4 mt-4 bg-primary/10 text-primary gap-1 text-sm font-bold border border-primary/20 transition-colors hover:bg-primary/20 w-fit">
                <span className="truncate">Rastrear envío</span>
                <span className="material-symbols-outlined text-lg">chevron_right</span>
              </button>
            </div>
            <div className="w-32 h-32 bg-center bg-no-repeat bg-cover rounded-xl shrink-0" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBhreLCQpfYKwrJs531OKqT92qQldCr7NNXefZ-wksQpOkBWicl3BKb0HhbaG2CB3LOnTFQuqszSaROZhP7uf5aVSeSzOgUQvqzmU00gLiIBKmNwdM46PiW1dq4YjwXe_eUX39PjXaDIfxDgFwG8G9pHC6yUMOhgrA_rcDNuHD_kOFtmSqbTk431s2JbHKIs2RzpTWHuDKr0RyV-lTgDEdnATRSpC5D2Wa2wtOEIXSAe8g51URJR0d8CityOxczh-4tQjKDxcCmMg7T")' }}>
            </div>
          </div>
        </div>

        {/* Account Settings Section */}
        <div className="px-4 pt-6 pb-2">
          <h3 className="text-slate-900 dark:text-white text-xl font-bold leading-tight mb-4">Ajustes de Cuenta</h3>
          <div className="flex flex-col gap-1">
            {/* Option 1 */}
            <div className="flex items-center justify-between p-4 bg-white dark:bg-[#2d241b]/40 rounded-xl mb-2 hover:bg-slate-50 dark:hover:bg-[#2d241b] transition-colors cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="size-10 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center text-slate-700 dark:text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <span className="material-symbols-outlined">person</span>
                </div>
                <span className="font-medium text-slate-800 dark:text-slate-200">Editar Perfil</span>
              </div>
              <span className="material-symbols-outlined text-slate-400">chevron_right</span>
            </div>
            {/* Option 2 */}
            <div className="flex items-center justify-between p-4 bg-white dark:bg-[#2d241b]/40 rounded-xl mb-2 hover:bg-slate-50 dark:hover:bg-[#2d241b] transition-colors cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="size-10 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center text-slate-700 dark:text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <span className="material-symbols-outlined">import_contacts</span>
                </div>
                <span className="font-medium text-slate-800 dark:text-slate-200">Libreta de Direcciones</span>
              </div>
              <span className="material-symbols-outlined text-slate-400">chevron_right</span>
            </div>
            {/* Option 3 */}
            <div className="flex items-center justify-between p-4 bg-white dark:bg-[#2d241b]/40 rounded-xl mb-2 hover:bg-slate-50 dark:hover:bg-[#2d241b] transition-colors cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="size-10 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center text-slate-700 dark:text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <span className="material-symbols-outlined">notifications</span>
                </div>
                <span className="font-medium text-slate-800 dark:text-slate-200">Preferencias de Notificaciones</span>
              </div>
              <span className="material-symbols-outlined text-slate-400">chevron_right</span>
            </div>
            {/* Option 4 */}
            <div className="flex items-center justify-between p-4 bg-white dark:bg-[#2d241b]/40 rounded-xl mb-2 hover:bg-slate-50 dark:hover:bg-[#2d241b] transition-colors cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="size-10 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center text-slate-700 dark:text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <span className="material-symbols-outlined">credit_card</span>
                </div>
                <span className="font-medium text-slate-800 dark:text-slate-200">Métodos de Pago</span>
              </div>
              <span className="material-symbols-outlined text-slate-400">chevron_right</span>
            </div>
          </div>
        </div>

        {/* Logout Section */}
        <div className="p-6 mt-4 mb-20">
          <Link href="/" className="w-full block">
            <button className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-slate-200/50 dark:bg-white/5 text-primary font-bold transition-all active:scale-[0.98] hover:bg-red-500/10 hover:text-red-500">
              <span className="material-symbols-outlined">logout</span>
              <span>Cerrar Sesión</span>
            </button>
          </Link>
          <p className="text-center text-slate-400 dark:text-white/20 text-xs mt-6">Apex Performance v2.4.0 • 2024</p>
        </div>
      </div>

      <BottomNav items={navItems} />
    </div>
  );
}
