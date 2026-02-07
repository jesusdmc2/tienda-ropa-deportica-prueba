import Link from 'next/link';
import { Header } from '@/components/ui/Header';
import { BottomNav } from '@/components/ui/BottomNav';
import { CategoryCard } from '@/components/ui/CategoryCard';

export default function CategoriesPage() {
  const navItems = [
    { icon: 'home', label: 'Inicio', href: '/home' },
    { icon: 'grid_view', label: 'Categorías', href: '/categories', active: true, filled: true },
    { icon: 'shopping_bag', label: 'Carrito', href: '/cart' },
    { icon: 'person', label: 'Perfil', href: '/profile' },
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-white min-h-screen flex flex-col">
      {/* TopAppBar */}
      <Header
        title="APEX PERFORMANCE"
        leftIcon="menu"
        rightIcon="search"
      />

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto pb-24">
        <div className="px-4 py-2">
          <h1 className="text-black dark:text-white text-2xl font-bold mb-4">Categorías</h1>
        </div>

        {/* Category List */}
        <div className="flex flex-col gap-4 px-4">
          <CategoryCard
            large
            title="RUNNING"
            subtitle="Supera tus límites"
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuBiZQpW-Rma4cQP8gKLa5QY2d_RPMk2u0kUfvZXUv2dPTk7tYtGxpn3LYR_-N1Pt3HicfATA9s1Fz79hk8DIaPgAndtXrk-VcdOaNEfayI9C_ulpyjDFlBaNW-cg0T5t_JKoIg8OECFHVll3oVd-bwQxHXso1Il3G8fFWVwsYG77kYyi1v1Y_1ucSVZrOVP1xgz8eanncnAvcNuYzL4fGkwUPTb1C_v3NPXHRX9MxfppRodjv6p1qM44as9K9HMvjdyZ0iWKKZNxgyz"
          />
          <CategoryCard
            large
            title="ENTRENAMIENTO"
            subtitle="Potencia tu fuerza"
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuABrqgkIOpSC5Bpp9ywoucN-9fVq1KZfGTepR29lTNcEI8vMH0vvqsq0mMX4r5NORg2qytssikD15CpCLBuqNM2O6lcbiyVZbrWFe8b5SCYpiDpzic9smyFlpdTLygicjhoNTYStH1Eqo2mi_7MYkI-Ll9fpxUQI-ptMu8y26tWo2-jCwwgL8WDtOQyHGqYJK-kjDn1WqJB_5XFQ7VN1rhrUAzcXBgpJTObA7czdLCI5R67f8vH1aHzqsF3xnJqY2lVvESbSyGi8cJo"
          />
          <CategoryCard
            large
            title="YOGA"
            subtitle="Encuentra tu centro"
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuCZrPj6rsazTU71gPntsqqhQ3jdXRNSno_sjRooiiK4LqXMtQ55tqyYcFs2fOG95he3lyH0BMe2D72SRhx5_r8amlfby5OucCGjCGnDK7Lx06q_aLHT2RuRBbzzbNn6qvkeee_OrWGvXq8Ec_cxiN6q5kmtkKwRwLtn4f6nKhOpB_JLwtl84GhsBOB_-SXWPf4ZYOtanQ5BjeZuDozdjVOmcVvPMSvnPxxhZ8aKmwuodqxkVcE9DrKC3FKoig63slUg7Tpe8R1fx4SC"
          />
          <CategoryCard
            large
            title="NATACIÓN"
            subtitle="Domina el agua"
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuA9JmnZfCoS5rF8qeLbB9acQw6LbQBFw7Wg92qu7SvF4yjsC6quu7eCxVZVmOhW7QdTpbKzzbn3i9sZd5ceYZ00mRS6kPHMdRv0Smm1UStl4tXyICbokqcCv2xmtAg48ZK2AxH5eYk6pHgfVm0eOMcjGSSrlbPBBSU8pADNLj9QySZePyvWuSmrtnVHO94wtOM6rWEJAJGUnsMtfSrT7MRdVi_ldixxaKlvHzkfyY-M9pbSUfLZaLtgua13CS2drLFKadxdmkeM6MiC"
          />
          <CategoryCard
            large
            title="ACCESORIOS"
            subtitle="Equípate con lo mejor"
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuAQmvQWclm5HSrpiUAUrf1Ibmc7u-MgGaFUWL9Mlxu1SE8Og2OWQOiq_51bSvlj3JyqlY4U-x9t8ckOX1TYigs33hI_MyNbY8-wI3An2yllrXkQRh777yy2v0zWVAY5ouGIL0n8fdylqfab8fZQFcesNKhs4fSj179OwXjGr9XXAbYNJuH5QlYrzECd2nc5Fddk9ZzvroUZgaKuAPhXXToq8f6ua97RKSHxTAUMinCShr1TTqF2r0-DSlVZQO2H4jk6nRCnqRm_H7RB"
          />
        </div>

        <div className="h-10"></div>
      </div>

      <BottomNav items={navItems} />
    </div>
  );
}
