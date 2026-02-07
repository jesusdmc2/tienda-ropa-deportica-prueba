'use client';
import Link from 'next/link';
import { Header } from '@/components/ui/Header';
import { Input } from '@/components/ui/Input';

export default function CheckoutPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-white font-display min-h-screen flex flex-col">
      {/* Top Navigation Bar */}
      <Header
        title="Pago y Envío"
        leftIcon="arrow_back"
        onLeftIconClick={() => window.history.back()}
      />

      <main className="flex-1 w-full max-w-md mx-auto pb-40">
        {/* Shipping Section */}
        <section className="mt-4">
          <h3 className="text-[#111418] dark:text-white text-xl font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Información de Envío</h3>
          <div className="px-4 py-2 space-y-4">
            <Input label="Nombre completo" placeholder="Nombre y apellido" className="bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 text-black dark:text-white" />
            <Input label="Dirección" placeholder="Calle, número, depto" className="bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 text-black dark:text-white" />
            <Input label="Ciudad" placeholder="Tu ciudad" className="bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 text-black dark:text-white" />
          </div>
        </section>

        {/* Payment Method Section */}
        <section className="mt-8">
          <h3 className="text-[#111418] dark:text-white text-xl font-bold leading-tight tracking-[-0.015em] px-4 pb-4">Método de Pago</h3>

          {/* Quick Pay Options */}
          <div className="flex gap-3 px-4 mb-6">
            <button className="flex-1 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl py-3 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-white/10 transition-colors text-black dark:text-white">
              <span className="text-sm font-bold tracking-tight">PayPal</span>
            </button>
            <button className="flex-1 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl py-3 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-white/10 transition-colors text-black dark:text-white">
              <span className="text-sm font-bold tracking-tight">Apple Pay</span>
            </button>
          </div>

          {/* Card Form */}
          <div className="px-4 space-y-4">
            <div className="bg-gradient-to-br from-primary/20 to-transparent p-4 rounded-2xl border border-primary/20 mb-6">
              <div className="flex flex-col w-full mb-4">
                <p className="text-gray-500 dark:text-gray-400 text-xs font-medium pb-1.5 ml-1 uppercase tracking-wider">Número de tarjeta</p>
                <div className="relative">
                  <input className="form-input w-full rounded-xl text-black dark:text-white focus:outline-0 focus:ring-1 focus:ring-primary border border-gray-200 dark:border-white/10 bg-white dark:bg-white/10 focus:border-primary h-14 placeholder:text-gray-400 dark:placeholder:text-gray-500 p-4 text-base font-normal" placeholder="0000 0000 0000 0000" />
                  <span className="material-symbols-outlined absolute right-4 top-4 text-gray-400">credit_card</span>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col flex-1">
                  <p className="text-gray-500 dark:text-gray-400 text-xs font-medium pb-1.5 ml-1 uppercase tracking-wider">Vencimiento</p>
                  <input className="form-input w-full rounded-xl text-black dark:text-white focus:outline-0 focus:ring-1 focus:ring-primary border border-gray-200 dark:border-white/10 bg-white dark:bg-white/10 focus:border-primary h-14 placeholder:text-gray-400 dark:placeholder:text-gray-500 p-4 text-base font-normal" placeholder="MM/YY" />
                </div>
                <div className="flex flex-col flex-1">
                  <p className="text-gray-500 dark:text-gray-400 text-xs font-medium pb-1.5 ml-1 uppercase tracking-wider">CVV</p>
                  <input className="form-input w-full rounded-xl text-black dark:text-white focus:outline-0 focus:ring-1 focus:ring-primary border border-gray-200 dark:border-white/10 bg-white dark:bg-white/10 focus:border-primary h-14 placeholder:text-gray-400 dark:placeholder:text-gray-500 p-4 text-base font-normal" placeholder="123" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Order Summary */}
        <section className="mt-8 px-4">
          <div className="bg-white dark:bg-white/5 rounded-2xl p-6 border border-gray-200 dark:border-white/5">
            <h4 className="text-[#111418] dark:text-white text-lg font-bold mb-4">Resumen del Pedido</h4>
            <div className="space-y-3">
              <div className="flex justify-between text-gray-500 dark:text-gray-400">
                <span>Subtotal</span>
                <span>$210.00</span>
              </div>
              <div className="flex justify-between text-gray-500 dark:text-gray-400">
                <span>Impuestos</span>
                <span>$12.90</span>
              </div>
              <div className="flex justify-between text-gray-500 dark:text-gray-400">
                <span>Envío</span>
                <span className="text-primary font-medium">Gratis</span>
              </div>
              <div className="pt-4 border-t border-gray-200 dark:border-white/10 flex justify-between items-end">
                <span className="text-[#111418] dark:text-white text-lg font-medium">Total</span>
                <span className="text-[#111418] dark:text-white text-2xl font-bold tracking-tight">$222.90</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Bottom Action Button */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background-light/95 dark:bg-background-dark/80 backdrop-blur-lg border-t border-gray-200 dark:border-white/5 pb-safe">
        <div className="max-w-md mx-auto">
          <Link href="/confirmation" className="w-full block">
            <button className="w-full bg-primary hover:bg-primary/90 text-background-dark font-black text-lg py-5 rounded-xl transition-all active:scale-[0.98] uppercase tracking-widest shadow-lg shadow-primary/20">
                Finalizar Compra
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
