'use client';
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: string;
  onIconClick?: () => void;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, icon, onIconClick, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2">
        {label && (
          <label className="text-gray-400 text-sm font-medium leading-normal pb-2 ml-1">
            {label}
          </label>
        )}
        <div className="relative flex w-full items-center">
          <input
            ref={ref}
            className={`form-input w-full rounded-xl text-white border border-white/10 bg-white/5 focus:border-primary focus:ring-1 focus:ring-primary h-14 placeholder:text-gray-600 px-4 text-base font-normal transition-all outline-none ${className || ''}`}
            {...props}
          />
          {icon && (
            <span
              className="material-symbols-outlined absolute right-4 text-gray-500 cursor-pointer hover:text-white transition-colors"
              onClick={onIconClick}
            >
              {icon}
            </span>
          )}
        </div>
      </div>
    );
  }
);
Input.displayName = "Input";
