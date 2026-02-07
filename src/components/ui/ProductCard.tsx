'use client';
import React from 'react';

interface ProductCardProps {
  title: string;
  price: string;
  image: string;
  tag?: string;
  onAddToCart?: () => void;
  className?: string;
  aspectRatio?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  image,
  tag,
  onAddToCart,
  className = '',
  aspectRatio = 'aspect-[4/5]',
}) => {
  return (
    <div className={`flex flex-col gap-3 pb-3 group cursor-pointer ${className}`}>
      <div className={`relative w-full ${aspectRatio} bg-card-dark rounded-xl overflow-hidden shadow-md`}>
        {tag && (
          <div className="absolute top-2 left-2 bg-primary text-[#181411] text-[10px] font-bold px-2 py-1 rounded uppercase z-10">
            {tag}
          </div>
        )}
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url("${image}")` }}
        />
        <button
          className="absolute bottom-2 right-2 bg-white text-black rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:bg-gray-100 active:scale-95"
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart && onAddToCart();
          }}
        >
          <span className="material-symbols-outlined text-[20px]">add_shopping_cart</span>
        </button>
      </div>
      <div>
        <p className="text-white font-bold text-sm truncate">{title}</p>
        <p className="text-[#baab9c] text-xs font-medium">{price}</p>
      </div>
    </div>
  );
};
