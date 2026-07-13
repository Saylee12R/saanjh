import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}) => {
  const baseStyle =
    "inline-flex items-center justify-center font-sans font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 cursor-pointer active:scale-98 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary: "bg-brand-primary text-white hover:bg-brand-primary/90 shadow-sm hover:shadow-md hover:-translate-y-0.5",
    secondary: "bg-transparent text-brand-text border border-brand-border hover:border-brand-primary hover:bg-brand-primary/5",
    accent: "bg-brand-accent text-white hover:bg-brand-accent/90 shadow-sm hover:shadow-md hover:-translate-y-0.5",
    ghost: "bg-transparent text-brand-text hover:bg-brand-primary/10",
  };

  const sizes = {
    sm: "px-4 py-1.5 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-8 py-3 text-lg",
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
