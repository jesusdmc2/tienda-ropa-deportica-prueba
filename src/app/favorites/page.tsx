'use client';
import Link from 'next/link';
import { Header } from '@/components/ui/Header';
import { BottomNav } from '@/components/ui/BottomNav';
import { ProductCard } from '@/components/ui/ProductCard';

export default function FavoritesPage() {
  const navItems = [
    { icon: 'home', label: 'Inicio', href: '/home' },
    { icon: 'search', label: 'Tienda', href: '/categories' },
    { icon: 'favorite', label: 'Favoritos', href: '/favorites', active: true, filled: true },
    { icon: 'person', label: 'Perfil', href: '/profile' },
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-white min-h-screen flex flex-col">
      {/* TopAppBar */}
      <Header
        title="Mis Favoritos"
        leftIcon="arrow_back_ios"
        onLeftIconClick={() => window.history.back()}
        rightIcon="shopping_cart"
        onRightIconClick={() => window.location.href = '/cart'}
      />

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto pb-24">
        <div className="px-4 pt-4 pb-2">
          <p className="text-white/60 text-sm">Tienes 4 artículos guardados</p>
        </div>

        {/* ImageGrid */}
        <div className="grid grid-cols-2 gap-4 p-4">
          <div className="relative">
             <ProductCard
              title="Pro Shaker"
              price="15,99 €"
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuCVBFRmOhKCDqVvI8dM-I6zPfc4JjB4Bv-3AMf1RpP524ucodDpyZoxlHWTjJFVd8oEkVGxArhDb30Zw3fMMzfZGdANCfwRjLzklQ-EKYGqSvVSBhgv8Qr1fthBNJMvJZd4tDIJsrhkq__gzwe2Db8YUx1gRdDwp41GUgFdaY9Z136hwKsEKmdep26dvudS2YHYxA46JBL6PjV-9N3E72-eRRDKkvLKWgejgsifUUERgZv_PgKESU83SmSU1tV_4Zjf1Zfu-ipsiXwl"
              aspectRatio="aspect-square"
              onAddToCart={() => {}}
             />
             <div className="absolute top-2 right-2 z-10 pointer-events-none">
                <div className="bg-background-dark/60 backdrop-blur-md p-1.5 rounded-full">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>heart_check</span>
                </div>
             </div>
          </div>

          <div className="relative">
             <ProductCard
              title="Power Band"
              price="12,50 €"
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuC3YbNjlVdE13TBmMXJlqk2nE5C-lrmWlAgvoY8dpl0_J4Kw6xKatRXcQTjUW7f_tg0i1U2dJJbkzqHXqm146v5abNAXR5MZPff3f22H9NA-l-PtC6r4puuT3E9BpxfYcyjh8AU6Org5EQ69pdq9o6rlfRmhenVBLO0CLnRVZIiuqqIh2tO2y2h_7wOf2PMUn7cy0T1_bLgV4cf-eaRWVDim9KoTptK5g2C475EWIzzBlj11V0tZt8xxd-KBxLRlCJ19JI7-Jad8xol"
              aspectRatio="aspect-square"
              onAddToCart={() => {}}
             />
             <div className="absolute top-2 right-2 z-10 pointer-events-none">
                <div className="bg-background-dark/60 backdrop-blur-md p-1.5 rounded-full">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>heart_check</span>
                </div>
             </div>
          </div>

          <div className="relative">
             <ProductCard
              title="Zapatillas Apex"
              price="89,90 €"
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuAzAJGMqrJ1zJDp5OdzwwadvunBguZwwhPnWLLMmLnJ02b3ohSlN7PQ4_u6E9aYxTtgiQjp-sy31YmeeYbtwcLkMD219QXflruBB0SmIev_VQRWUlffqKH0B3rWO5aVcUP63XjZr3uAXie_8jDcvcpNW-rsUwLVSEEFlXL3WcCjHjn9jaEn9U7O34ZXsfS26q9MwlJIlIlO6R7iYe_r5jYmbtblzwGKGLMBcltNJqaWulYhjzlam6YWL4AC6M8vJTo-9TpNb4xtlf27"
              aspectRatio="aspect-square"
              onAddToCart={() => {}}
             />
             <div className="absolute top-2 right-2 z-10 pointer-events-none">
                <div className="bg-background-dark/60 backdrop-blur-md p-1.5 rounded-full">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>heart_check</span>
                </div>
             </div>
          </div>

          <div className="relative">
             <ProductCard
              title="Camiseta Tech"
              price="29,00 €"
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuDAUM-68cDxPVSl6I1G8fRQs3fosWt9iu0b4NMW7zsOsTfzrf4ApiAbnw7bqdFrxvlAL8YYnTOF8n-sB2CRa3M-uqvHBFClOpcflRG6MaZOG6VuVztwR_Rq5EVPkjoK-yy3nTRFe4Ta3UZE1JFDvTryHa0PccZD3sJuyHQ-ks-we-bfC0HNyOBDykjNEzJE5bGwFdya5_FENj3T68rmI0hcTwp6kDJzYMzSumlE_HXJNrEvPjRk5zVvrjRDKWd2n0RCrOUaYJMlrcBU"
              aspectRatio="aspect-square"
              onAddToCart={() => {}}
             />
             <div className="absolute top-2 right-2 z-10 pointer-events-none">
                <div className="bg-background-dark/60 backdrop-blur-md p-1.5 rounded-full">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>heart_check</span>
                </div>
             </div>
          </div>
        </div>
      </div>

      <BottomNav items={navItems} />
    </div>
  );
}
