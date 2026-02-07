'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function ProductPage() {
  const params = useParams();
  const id = params?.id;

  // Mock data based on ID
  const isGreen = id === '2';

  const product = {
    title: "Apex Speed Pro",
    price: isGreen ? "$189.99" : "$129.99",
    rating: "4.8 (124 reseñas)",
    description: isGreen
      ? "Diseñadas para corredores de élite que buscan velocidad explosiva y comodidad sin concesiones."
      : "Diseñadas para corredores de élite que buscan velocidad explosiva y comodidad sin concesiones.",
    image: isGreen
      ? "https://lh3.googleusercontent.com/aida-public/AB6AXuCc7GMeC64yLErz-U_G3oqmq0QVxSSWQDf5e1NHAvZNO_M-wMnGDXKKMsegKHuLJ0435P00fgoLAq3Yqw0e3sEeQNJf5cLhgqWd0pCuB2nRB-PoPzgH8sKkDksLvwL8zNNYLtrdrFKieYNWUgCTSqYpgu3mdI1YrNLP55z5UQ8P3rJfkQyyb3d48tjgVlaaFRNb2giMft7yWfLazeEPNtEFqLSywEHwPKBxlsd5nIb1aT5nC50nZ-wpMbYUOhlBCt5HTLjPQxxyDBMV"
      : "https://lh3.googleusercontent.com/aida-public/AB6AXuAzAJGMqrJ1zJDp5OdzwwadvunBguZwwhPnWLLMmLnJ02b3ohSlN7PQ4_u6E9aYxTtgiQjp-sy31YmeeYbtwcLkMD219QXflruBB0SmIev_VQRWUlffqKH0B3rWO5aVcUP63XjZr3uAXie_8jDcvcpNW-rsUwLVSEEFlXL3WcCjHjn9jaEn9U7O34ZXsfS26q9MwlJIlIlO6R7iYe_r5jYmbtblzwGKGLMBcltNJqaWulYhjzlam6YWL4AC6M8vJTo-9TpNb4xtlf27",
    colors: [
      { name: "Negro/Naranja", hex: "#f48c25", active: !isGreen },
      { name: "Verde Neón", hex: "#0df246", active: isGreen },
      { name: "Stealth Black", hex: "#333333", active: false },
    ],
    sizes: ["8", "9", "10", "11", "12"],
    specs: [
      { icon: "air", title: "Malla Transpirable", desc: "Tejido de ingeniería ultra ligero que maximiza el flujo de aire." },
      { icon: "bubble_chart", title: "Espuma Reactiva", desc: "Tecnología de amortiguación para un retorno de energía explosivo." },
      { icon: "fitbit_treadmill", title: "Suela de Agarre", desc: "Patrón de tracción optimizado para superficies de alta velocidad." },
    ]
  };

  const primaryColor = isGreen ? 'text-[#0df246]' : 'text-[#f48c25]';
  const primaryBg = isGreen ? 'bg-[#0df246]' : 'bg-[#f48c25]';
  const shadowColor = isGreen ? 'shadow-[0_8px_30px_rgba(13,242,70,0.4)]' : 'shadow-[0_8px_30px_rgba(244,140,37,0.4)]';

  return (
    <div className="bg-background-dark font-display antialiased text-white pb-32 min-h-screen">
      {/* Top Navigation (Floating) */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-6 bg-gradient-to-b from-black/80 to-transparent pointer-events-none">
        <Link href="/home" className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-md text-white active:scale-95 transition-transform pointer-events-auto">
          <span className="material-symbols-outlined text-[24px]">arrow_back</span>
        </Link>
        <div className="flex gap-3 pointer-events-auto">
          <button className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-md text-white active:scale-95 transition-transform">
            <span className="material-symbols-outlined text-[24px]">favorite</span>
          </button>
          <Link href="/cart" className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-md text-white active:scale-95 transition-transform relative">
            <span className="material-symbols-outlined text-[24px]">shopping_bag</span>
            <span className={`absolute top-2 right-2 w-2 h-2 rounded-full ${primaryBg}`}></span>
          </Link>
        </div>
      </div>

      {/* Hero Media Section */}
      <div className="relative w-full h-[50vh] overflow-hidden bg-surface-dark">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${product.image}')` }}></div>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background-dark to-transparent"></div>
        {isGreen && (
           <div className="absolute inset-0 bg-black/20 flex items-center justify-center pointer-events-none">
             <button className="flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white pointer-events-auto hover:scale-110 transition-transform">
               <span className="material-symbols-outlined text-[40px] fill-1">play_arrow</span>
             </button>
           </div>
        )}
      </div>

      {/* Main Content Container */}
      <div className="px-6 -mt-12 relative z-10">
        <div className="flex flex-col gap-3 mb-8">
          <div className="flex items-center gap-2">
            <div className={`flex ${primaryColor}`}>
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star_half</span>
            </div>
            <span className="text-xs font-bold text-gray-400">{product.rating}</span>
          </div>
          <div className="flex items-start justify-between">
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-white flex-1 pr-4 font-display">
              Zapatillas Apex <span className={`block ${primaryColor}`}>Speed Pro</span>
            </h1>
            <div className="flex flex-col items-end">
              <span className="text-3xl font-bold text-white tracking-tight">{product.price}</span>
              <span className={`text-[10px] font-bold ${primaryColor} bg-white/5 px-2 py-0.5 rounded mt-1 uppercase tracking-widest`}>Elite</span>
            </div>
          </div>
          <p className="text-gray-400 text-sm font-body leading-relaxed mt-2 line-clamp-2">
            {product.description}
          </p>
        </div>

        {/* Color Selection */}
        <div className="mb-8">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Color Options</h2>
          <div className="flex items-center gap-4">
            {product.colors.map((color, idx) => (
              <div key={idx} className={`flex flex-col items-center gap-2 ${color.active ? '' : 'opacity-60'}`}>
                <button className={`w-14 h-14 rounded-full border-2 p-1 transition-all ${color.active ? `border-[${color.hex}]` : 'border-transparent'}`} style={{ borderColor: color.active ? color.hex : 'transparent' }}>
                  <div className="w-full h-full rounded-full flex items-center justify-center" style={{ backgroundColor: color.hex }}>
                    {color.active && <span className="material-symbols-outlined text-black text-[20px] font-bold">check</span>}
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Size Selection */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Talla (US)</h2>
            <button className={`text-xs font-bold ${primaryColor}`}>Guía de tallas</button>
          </div>
          <div className="flex overflow-x-auto gap-3 pb-2 no-scrollbar">
            {product.sizes.map((size, idx) => (
              <button
                key={idx}
                className={`flex-shrink-0 w-14 h-14 rounded-xl font-bold flex items-center justify-center transition-all ${idx === 2 ? `${primaryBg} text-black scale-105 shadow-[0_0_15px_rgba(255,255,255,0.1)]` : 'border border-white/10 bg-white/5 text-white hover:bg-white/10'}`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Technical Specs */}
        <div className="bg-surface-dark rounded-3xl p-6 mb-8 border border-white/5">
          <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
            <span className={`material-symbols-outlined ${primaryColor}`}>analytics</span>
            Especificaciones Técnicas
          </h3>
          <div className="grid grid-cols-1 gap-6">
            {product.specs.map((spec, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 ${primaryColor}`}>
                  <span className="material-symbols-outlined">{spec.icon}</span>
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">{spec.title}</h4>
                  <p className="text-gray-400 text-xs font-body mt-1 leading-relaxed">{spec.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sticky Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background-dark via-background-dark/95 to-transparent z-40 pb-10">
        <Link href="/cart" className="w-full">
            <button className={`w-full h-16 ${primaryBg} rounded-2xl flex items-center justify-center gap-3 text-black font-extrabold text-lg uppercase tracking-wider hover:brightness-110 active:scale-[0.98] transition-all ${shadowColor}`}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>shopping_cart</span>
                AÑADIR AL CARRITO
            </button>
        </Link>
      </div>
    </div>
  );
}
