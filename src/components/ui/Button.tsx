'use client';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glass';
  size?: 'sm' | 'md' | 'lg' | 'icon';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const baseStyles = "rounded-xl font-bold tracking-wide uppercase transition-all flex items-center justify-center active:scale-[0.98]";

    const variants = {
      primary: "bg-primary hover:brightness-110 text-white shadow-lg shadow-primary/20",
      secondary: "bg-white/5 border border-white/10 hover:bg-white/10 text-white",
      outline: "border border-primary text-primary bg-transparent hover:bg-primary/10",
      ghost: "text-primary hover:bg-primary/10 bg-transparent shadow-none",
      glass: "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20",
    };

    const sizes = {
      sm: "h-10 px-4 text-sm",
      md: "h-12 px-6 text-base",
      lg: "h-14 px-8 text-lg",
      icon: "h-12 w-12 p-0 rounded-full",
    };

    const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className || ''}`;

    return (
      <button
        ref={ref}
        className={combinedClassName}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
