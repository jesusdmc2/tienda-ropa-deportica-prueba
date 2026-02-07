'use client';
import Link from 'next/link';
import { Header } from '@/components/ui/Header';

export default function CartPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-gray-900 dark:text-white antialiased min-h-screen flex flex-col transition-colors duration-300">
      <Header
        title="Carrito"
        leftIcon="arrow_back"
        onLeftIconClick={() => window.history.back()}
      />

      <main className="flex-1 px-4 py-6 space-y-6 pb-32">
        <div className="space-y-4">
          {/* Cart Item 1 */}
          <div className="group flex gap-4 bg-white dark:bg-card-dark p-3 rounded-lg shadow-sm border border-gray-100 dark:border-white/5">
            <div className="relative shrink-0 w-24 aspect-square rounded overflow-hidden bg-gray-100 dark:bg-gray-800">
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCgrTr-ZMPbZDPAof8ib3gfoYwW94hDheJkwPohvmn3nNrjf6ZqnOln6SUoQfIx5pW9PBZ-ABPmgsBa-QkVEcOWmQ8-hGac2ZonkcUTeMMjlOV_GsKC93I2EQLgo5f7iDEQq8nJRZVQkjrivkyREuIy45j73ZQc-2aP2A0cI2SPLMhu86VH-NXl3ypp2Bd3Sk5tun_QFBzfYkd_Ffs1jOawi7IIJcpMi8m7n9Q4dyURGh3ctLd09RvRTwNvEIVCCEBhjNBD2TSKbuv-')" }}></div>
            </div>
            <div className="flex flex-col flex-1 justify-between py-1">
              <div>
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-base leading-tight pr-2">Zapatillas Apex Speed Pro</h3>
                  <button className="text-gray-400 hover:text-red-500 transition-colors">
                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>close</span>
                  </button>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Talla: 42 | Color: Negro/Naranja</p>
              </div>
              <div className="flex items-center justify-between mt-3">
                <span className="font-bold text-lg text-primary">$120.00</span>
                <div className="flex items-center bg-gray-100 dark:bg-black/60 rounded-full p-1 border border-white/5">
                  <button className="w-8 h-8 flex items-center justify-center rounded-full bg-white dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-primary/20 transition-colors text-gray-600 dark:text-white">
                    <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>remove</span>
                  </button>
                  <span className="w-8 text-center text-sm font-bold">1</span>
                  <button className="w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white hover:bg-primary/90 transition-colors shadow-[0_0_12px_rgba(244,140,37,0.3)]">
                    <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>add</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Cart Item 2 */}
          <div className="group flex gap-4 bg-white dark:bg-card-dark p-3 rounded-lg shadow-sm border border-gray-100 dark:border-white/5">
            <div className="relative shrink-0 w-24 aspect-square rounded overflow-hidden bg-gray-100 dark:bg-gray-800">
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBDJtceLPKimijQDHxrF61fPBJP6ubUlIe5qyqZZUufP87mLc5_b8XXFzENKvCFLWPEM84Z1B-nrVxhppF_IYrlOd8u-I9cDTsNUuVdAsu8etweqPvx16Er95GS_Uh9fCpLuaW37s-MBmSxa5dlq6Y2FyX1zbReL0V6RwUgdUF7SvsNO7WisACPnElWW595Iie7r23njOTsGGIGecpTrFbZaSVXAZsAk6mseSIwjnFZWSul0J1rBoeFPnhAAkcY62O0-WBRDJUdx44i')" }}></div>
            </div>
            <div className="flex flex-col flex-1 justify-between py-1">
              <div>
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-base leading-tight pr-2">Camiseta de Compresión</h3>
                  <button className="text-gray-400 hover:text-red-500 transition-colors">
                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>close</span>
                  </button>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Talla: M | Color: Carbono</p>
              </div>
              <div className="flex items-center justify-between mt-3">
                <span className="font-bold text-lg text-primary">$45.00</span>
                <div className="flex items-center bg-gray-100 dark:bg-black/60 rounded-full p-1 border border-white/5">
                  <button className="w-8 h-8 flex items-center justify-center rounded-full bg-white dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-primary/20 transition-colors text-gray-600 dark:text-white">
                    <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>remove</span>
                  </button>
                  <span className="w-8 text-center text-sm font-bold">2</span>
                  <button className="w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white hover:bg-primary/90 transition-colors shadow-[0_0_12px_rgba(244,140,37,0.3)]">
                    <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>add</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <div className="relative flex items-center">
              <span className="absolute left-4 material-symbols-outlined text-gray-400">sell</span>
              <input className="w-full bg-white dark:bg-card-dark border-none rounded-lg py-3 pl-12 pr-4 text-sm focus:ring-1 focus:ring-primary placeholder-gray-500 dark:placeholder-gray-500 text-gray-900 dark:text-white" placeholder="Código de descuento" type="text" />
              <button className="absolute right-2 text-primary px-3 py-1.5 rounded text-xs font-bold hover:bg-primary/10 transition-colors">APLICAR</button>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-card-dark rounded-lg p-5 mt-6 border border-gray-100 dark:border-white/5">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            Resumen de Pedido
            <div className="h-px flex-1 bg-gray-200 dark:bg-white/10 ml-2"></div>
          </h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center text-gray-600 dark:text-gray-400">
              <span>Subtotal</span>
              <span className="font-medium text-gray-900 dark:text-white">$210.00</span>
            </div>
            <div className="flex justify-between items-center text-gray-600 dark:text-gray-400">
              <span>Envío</span>
              <span className="font-medium text-gray-900 dark:text-white">$15.00</span>
            </div>
          </div>
          <div className="my-4 border-t border-gray-200 dark:border-white/10 border-dashed"></div>
          <div className="flex justify-between items-end">
            <span className="text-base font-medium text-gray-600 dark:text-gray-300">Total</span>
            <span className="text-2xl font-bold text-primary">$225.00</span>
          </div>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-t border-gray-200 dark:border-white/5 z-40 pb-safe">
        <div className="max-w-md mx-auto w-full">
          <Link href="/checkout" className="block w-full">
            <button className="w-full bg-primary hover:bg-[#e67e1a] active:scale-[0.98] transition-all duration-200 text-white font-bold text-lg py-4 rounded-xl shadow-[0_8px_20px_rgba(244,140,37,0.4)] flex items-center justify-center gap-2 group">
              PROCEDER AL PAGO
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
