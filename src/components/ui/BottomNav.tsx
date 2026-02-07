'use client';
import React from 'react';
import Link from 'next/link';

interface NavItem {
  icon: string;
  label: string;
  active?: boolean;
  href: string;
  filled?: boolean;
}

interface BottomNavProps {
  items: NavItem[];
}

export const BottomNav: React.FC<BottomNavProps> = ({ items }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-xl border-t border-[#27211b]/10 dark:border-white/10 px-6 py-3 flex items-center justify-between z-30 pb-safe">
      {items.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className={`flex flex-col items-center gap-1 cursor-pointer transition-colors w-12 group ${item.active ? 'text-primary' : 'text-[#baab9c] hover:text-white'}`}
        >
          <span
            className={`material-symbols-outlined text-[24px] group-active:scale-95 transition-transform ${item.filled ? 'fill-current' : ''}`}
            style={item.filled ? { fontVariationSettings: "'FILL' 1" } : {}}
          >
            {item.icon}
          </span>
          <span className={`text-[10px] font-medium ${item.active ? 'font-bold' : ''}`}>
            {item.label}
          </span>
        </Link>
      ))}
    </div>
  );
};
