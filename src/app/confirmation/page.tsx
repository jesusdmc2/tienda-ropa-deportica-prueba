import Link from 'next/link';

export default function ConfirmationPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display min-h-screen flex flex-col overflow-x-hidden text-black dark:text-white">
      {/* Header */}
      <div className="flex items-center p-4 pb-2 justify-between">
        <Link href="/home" className="text-black dark:text-white flex size-12 shrink-0 items-center justify-start cursor-pointer hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-colors">
          <span className="material-symbols-outlined text-3xl">close</span>
        </Link>
        <h2 className="text-black dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">Confirmación</h2>
      </div>

      {/* Success Animation/Icon Area */}
      <div className="flex flex-col items-center justify-center pt-8 pb-4">
        <div className="relative flex items-center justify-center w-24 h-24 rounded-full bg-primary/20 ring-8 ring-primary/10">
          <div className="absolute inset-0 rounded-full blur-xl bg-primary/30"></div>
          <span className="material-symbols-outlined text-primary text-6xl relative z-10 font-bold">check_circle</span>
        </div>
      </div>

      {/* Order Text */}
      <div className="px-4 text-center">
        <h1 className="text-[#111418] dark:text-white tracking-light text-[32px] font-bold leading-tight pb-3 pt-6">¡Gracias por tu compra!</h1>
        <p className="text-gray-500 dark:text-white/80 text-base font-medium leading-normal">ID de Pedido: #APX-98234</p>
        <p className="text-primary text-sm font-semibold leading-normal pt-2">Fecha estimada de entrega: 15 de Octubre</p>
      </div>

      {/* Scrollable Summary */}
      <div className="mt-8 px-4 flex-1">
        <div className="bg-white dark:bg-white/5 rounded-xl p-4 border border-gray-200 dark:border-white/10">
          <h3 className="text-[#111418] dark:text-white font-semibold mb-4 text-sm uppercase tracking-wider">Resumen de compra</h3>
          <div className="flex flex-col gap-4 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
            {/* Item 1 */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-lg bg-cover bg-center shrink-0" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAsNgGGH8Bt6NrQOLJ9fHh7X9tREkV-nK0W92Z_gFOsku7ODLEy1R27DtJ7LwpcdpJWFhKXxt2aO7D3nkn7CxaRvQFnBonJ7NEIyHs4eHFZhA5nJyXkAyvs_qLDNZMpkCKr0ARy0ATv2Mi8gByf81YbQVL_i-6hygon1ekDvNyxfdtAeATMFHC_5KerA-wtxUVe4ehEtU81S42ky1TL1ryMmH0DT36XIrbKEnjBQ57fIAWVo_6SxC7-5z-QHKW5-f2fc_3bjzq9o4u0")' }}></div>
              <div className="flex-1">
                <p className="text-[#111418] dark:text-white font-medium text-sm">Apex Speed Runner</p>
                <p className="text-gray-500 dark:text-white/50 text-xs">Talla: 42 | Color: Naranja</p>
              </div>
              <p className="text-[#111418] dark:text-white font-bold">$129.00</p>
            </div>
            {/* Item 2 */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-lg bg-cover bg-center shrink-0" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAYWqIOimLTtWITqn_P65eBM0mSRxJgyUBlcvBpqA-SzVngZjV57OcS9eSOKQAsNwziBcG5JC8G-BJ8GvtpaV2ZrPgdmDqnW_V6Ap33D5s2RIwZPRtStaRUgroB-LIHU5ZhzMdoqGzgdvG_VqkHRJ34bmEk-5z5chbXG9VA_4EYmFTFg1Gc4xZ56zGR9-7MpYfNg0N-n-s_RdNC-n_ayuH8NKRUzrXP_3xGxoF_hv04D0XClNuFx6SHZXym0BFfdW6BBAC9wcv70KnJ")' }}></div>
              <div className="flex-1">
                <p className="text-[#111418] dark:text-white font-medium text-sm">Pro Compression Tee</p>
                <p className="text-gray-500 dark:text-white/50 text-xs">Talla: L | Color: Negro</p>
              </div>
              <p className="text-[#111418] dark:text-white font-bold">$45.00</p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-white/10 flex justify-between items-center">
            <span className="text-gray-500 dark:text-white/70">Total pagado</span>
            <span className="text-primary text-xl font-bold">$212.00</span>
          </div>
        </div>
      </div>

      {/* Delivery Info Card */}
      <div className="px-4 mt-4">
        <div className="bg-primary/10 rounded-xl p-4 flex items-center gap-4">
          <span className="material-symbols-outlined text-primary">local_shipping</span>
          <div>
            <p className="text-[#111418] dark:text-white text-sm font-semibold">Envío a domicilio</p>
            <p className="text-gray-500 dark:text-white/60 text-xs">Av. Corrientes 1234, CABA, Argentina</p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-4 mt-auto flex flex-col gap-3 pb-safe">
        <Link href="/profile" className="w-full">
            <button className="w-full bg-primary text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 active:scale-95 transition-transform hover:brightness-110">
                RASTREAR PEDIDO
                <span className="material-symbols-outlined">map</span>
            </button>
        </Link>
        <Link href="/home" className="w-full">
            <button className="w-full bg-transparent border-2 border-primary/50 text-primary font-bold py-4 rounded-xl active:scale-95 transition-transform hover:bg-primary/10">
                VOLVER AL INICIO
            </button>
        </Link>
      </div>
      <div className="h-6"></div>
    </div>
  );
}
