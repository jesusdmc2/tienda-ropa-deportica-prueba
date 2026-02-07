'use client';
import React from 'react';

interface HeaderProps {
  title?: string;
  leftIcon?: string;
  onLeftIconClick?: () => void;
  rightIcon?: string;
  onRightIconClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  leftIcon,
  onLeftIconClick,
  rightIcon,
  onRightIconClick,
  className = '',
  children,
}) => {
  return (
    <header className={`sticky top-0 z-50 flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between border-b border-[#27211b]/10 dark:border-white/10 backdrop-blur-md bg-opacity-95 ${className}`}>
      {children ? (
        children
      ) : (
        <>
          <div
            className="flex size-12 shrink-0 items-center justify-start text-[#111418] dark:text-white cursor-pointer hover:opacity-80 transition-opacity"
            onClick={onLeftIconClick}
          >
            {leftIcon && <span className="material-symbols-outlined text-[24px]">{leftIcon}</span>}
          </div>

          <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center uppercase text-[#111418] dark:text-white font-display">
            {title}
          </h2>

          <div
            className="flex size-12 items-center justify-end text-[#111418] dark:text-white cursor-pointer hover:opacity-80 transition-opacity"
            onClick={onRightIconClick}
          >
            {rightIcon && <span className="material-symbols-outlined text-[24px]">{rightIcon}</span>}
          </div>
        </>
      )}
    </header>
  );
};
