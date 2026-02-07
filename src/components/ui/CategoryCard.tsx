'use client';
import React from 'react';

interface CategoryCardProps {
  title: string;
  subtitle: string;
  image: string;
  onExplore?: () => void;
  className?: string;
  large?: boolean;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  subtitle,
  image,
  onExplore,
  className = '',
  large = false,
}) => {
  return (
    <div
      className={`relative overflow-hidden rounded-xl bg-cover bg-center ${large ? 'h-[200px]' : 'h-[160px]'} flex flex-col justify-end group transition-all duration-300 hover:shadow-lg ${className}`}
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.2) 100%), url("${image}")`
      }}
    >
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

      <div className="relative z-10 flex w-full items-end justify-between gap-4 p-5">
        <div className="flex flex-col gap-1">
          <p className="text-white tracking-tight text-3xl font-black leading-tight font-display uppercase">{title}</p>
          <p className="text-white/80 text-sm font-medium leading-normal">{subtitle}</p>
        </div>
        <button
          className="flex min-w-[100px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-primary text-background-dark text-sm font-bold leading-normal tracking-[0.015em] hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-primary/20"
          onClick={(e) => {
            e.stopPropagation();
            onExplore && onExplore();
          }}
        >
          <span className="truncate">EXPLORAR</span>
        </button>
      </div>
    </div>
  );
};
