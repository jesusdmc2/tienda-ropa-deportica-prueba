'use client';
import Link from 'next/link';
import { Header } from '@/components/ui/Header';
import { BottomNav } from '@/components/ui/BottomNav';
import { CategoryCard } from '@/components/ui/CategoryCard';
import { ProductCard } from '@/components/ui/ProductCard';

export default function HomePage() {
  const navItems = [
    { icon: 'home', label: 'Inicio', href: '/home', active: true, filled: true },
    { icon: 'search', label: 'Buscar', href: '/categories' },
    { icon: 'favorite', label: 'Favoritos', href: '/favorites' },
    { icon: 'person', label: 'Perfil', href: '/profile' },
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#111418] dark:text-white overflow-x-hidden min-h-screen flex flex-col">
      {/* TopAppBar */}
      <Header
        title="Apex Performance"
        leftIcon="menu"
        rightIcon="shopping_cart"
        onRightIconClick={() => window.location.href = '/cart'}
      />

      {/* HeroSection */}
      <section className="@container">
        <div className="@[480px]:p-4">
          <div
            className="flex min-h-[520px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-lg items-center justify-end p-6 pb-12 relative"
            style={{ backgroundImage: `linear-gradient(to top, rgba(24, 20, 17, 1) 0%, rgba(24, 20, 17, 0.4) 40%, rgba(0, 0, 0, 0.1) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDjLFgzXF0hzyfNra7oADwXQJvTPTZKpiQGJUSA9kwKZ2B1gaRY7rJgwrHb4aulRkPUBmwoPjRQFhFIQCGwYYjj8S0MzXYnATxOEICd_4L5-cB4I229a7NI7JCxoCp5DEfG_8-lokTm4unXV6JY_f21ijZ5cIGuIp9IqenxplakcutuKgP5DzJrx2XT0okCj7kYcZ7Z0X2x8DqVJamX9z51DnGiq2-hG7I2G0EF7sd1BjUwkpHUk6noKUB8UXSif-75fFq_8UYQoYg5")` }}
          >
            <div className="flex flex-col gap-3 text-center z-10">
              <h1 className="text-white text-5xl font-black leading-[0.9] tracking-[-0.033em] uppercase italic drop-shadow-lg font-display">
                Supera tus<br/><span className="text-primary">Límites</span>
              </h1>
              <h2 className="text-[#baab9c] text-base font-normal leading-normal max-w-[300px] mx-auto font-body">
                Equipamiento de alto rendimiento diseñado para atletas que no conocen el "no puedo".
              </h2>
            </div>
            <Link href="/categories" className="w-full max-w-[320px] z-10">
              <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-primary hover:bg-primary/90 transition-colors text-[#181411] text-base font-bold leading-normal tracking-[0.015em] shadow-[0_0_20px_rgba(244,141,37,0.4)]">
                <span className="truncate uppercase">Ver Nueva Colección</span>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* HeadlineText */}
      <div className="pt-6 px-4 pb-2">
        <div className="flex items-center justify-between">
          <h2 className="text-[#111418] dark:text-white tracking-tight text-[22px] font-bold leading-tight">Categorías Destacadas</h2>
          <Link href="/categories" className="text-primary text-sm font-bold hover:underline">Ver todo</Link>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="flex flex-col gap-4 p-4">
        {/* Card: Running */}
        <CategoryCard
          title="Running"
          subtitle="Velocidad y resistencia extrema"
          image="https://lh3.googleusercontent.com/aida-public/AB6AXuCQVVcaSlPsdlM6maf9bGdK06NbgOpWWm9k6U--gqHKMGlbUeKAnmkYgHt6gqbsXIi4u9oxAs1wbbxHT9oeXFXjbpJInsbWHqZrVUB7B8PBjU1T-wnchruOUZDzUgjL6csy-VDI839Qs74O6wzH0svtPyQvfkih8ErKG8B0tmw_gGKLJkZlmXjyhsdnG9_3dp1RtuiMl9AlIDMuXxiJ1Chpm5n-2CRns6owWmLHJj4Uhow73RIPLvT4Np3P0JzDxXb_-kumw4eKfb-f"
        />

        {/* Card: Training */}
        <CategoryCard
          title="Training"
          subtitle="Potencia bruta y fuerza"
          image="https://lh3.googleusercontent.com/aida-public/AB6AXuBW85XWlD8fbA6Vhg8w-BMpDFB83IApo4fi-Xc1urrbRIgGj_gy3zY59njfJVVv8vlOdyfgcRQvOMb56dbZh0HZmmLxBB7RgBi7GqZzdZQXnQwqFOpHa6g55H_2FtF1mYOm4d7Z_XTsJRl5fkc_3nXQVcwjB1MOSYyjQHboPOFTATgpIfuLp42Cz1-sRTtUGDpK7dCy6aLMwHmJynkS_E6bSiVS3nvT5TrKZ6xl4G3VsSEtuR5_W3K_LLVYIVRgtv-Pv37ANBycF5Qo"
        />

        {/* Card: Yoga */}
        <CategoryCard
          title="Yoga"
          subtitle="Equilibrio y flexibilidad"
          image="https://lh3.googleusercontent.com/aida-public/AB6AXuCrK8t45AWbPut6xBmmPLX5vxP0MRVDrQnZvmt2E09fQYArl0rugpa2GTnTrXjDL7hZR9hWAidGhRI5EDvHmQ55_MYT9gazU3OOQzeHr1GCnXt_R0fZWuNUtw1S9ftkIRsN5FR_qCBexNDp1_VM4xxdUBp57zMAQ3XG_IWz7RE8m8-uIcU2NuON1q9LPDBkDg7XC5FiE6Fxk5EGgP3yYO-DTPVbiHfTCTCNnR01XQO0x7cwt2IN8fyGU2fc3xmmu0fPKLdrUQ8UMX64"
        />
      </div>

      {/* New Arrivals */}
      <div className="pt-6 px-4 pb-2">
        <h2 className="text-[#111418] dark:text-white tracking-tight text-[22px] font-bold leading-tight">Novedades</h2>
      </div>

      <div className="grid grid-cols-2 gap-3 p-4">
        <Link href="/product/1">
          <ProductCard
            title="Camiseta Tech Sprint"
            price="$45.00"
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuBxR4q_9g3K_P_BzmZdYnY57x1s4CEPDiZHsVs6fQ-0EJe-kJZ9diZdks8vBycdszvsN32IbVWLBzlGUkCllwQ6IZbweGELror5Pv8XpbSPY6kiyv1oSx_A6y9Izh9_HRZ0VEx854ivmj2dQfK9XFG-h7_cVSUAlY6P8hKbCVu6L2PI0qGirl2j_Q1bWmpY74qBWofsQ7TbYJWLvyRxvA3j8Wf96S6i4CtscItU8Hx291-RKHvErXdgro25LHXAV_CfdHg02aXJLsL9"
            tag="Nuevo"
          />
        </Link>
        <Link href="/product/2">
          <ProductCard
            title="Shorts Velocity Pro"
            price="$38.00"
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuBmhdl8icBVVgHrytf-obCGwuremsRK839jHu61cZecXIAvRbXDyVPxD3imGSyTF2n7BnYjadB9jnJbaE5LAWN-KomUhKiDS_jnZnhZAgnYzlu89ge0uc1RLA25cFSimC2a_KVlZqmj46yuxDsfNz2kbdPuntoDCQBHkSHKzdqIqM3gmXfJq9BKNmRd_j1sl62XycT1moOAdRz1Sg9NV5HyKsSk_EuQYT2mb1w5jHa-cQDh5sSBQ2A0t--JexTItCPC_UnFhhp50Fpo"
          />
        </Link>
      </div>

      <div className="h-16 bg-transparent"></div> {/* Spacer for scrolling */}

      <BottomNav items={navItems} />
    </div>
  );
}
