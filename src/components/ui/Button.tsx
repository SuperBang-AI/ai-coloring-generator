"use client";

import { trackEvent } from "@/lib/analytics";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
  disabled?: boolean;
  size?: "default" | "sm";
  eventName?: string;
}

export function Button({
  children,
  variant = "primary",
  href,
  onClick,
  type = "button",
  className = "",
  disabled = false,
  size = "default",
  eventName,
}: ButtonProps) {
  const handleClick = () => {
    if (eventName) trackEvent(eventName);
    onClick?.();
  };

  const baseClasses =
    "inline-flex items-center justify-center font-display font-semibold rounded-btn transition-all duration-200 cursor-pointer select-none";

  const sizeClasses = {
    default: "px-8 py-4 text-lg min-h-[56px]",
    sm: "px-5 py-2.5 text-sm min-h-[40px]",
  };

  const variantClasses = {
    primary:
      "bg-[#FFB630] text-[#3D2C24] shadow-[0_2px_8px_rgba(255,182,48,0.3)] hover:bg-[#E5A020] hover:-translate-y-px hover:shadow-[0_4px_14px_rgba(255,182,48,0.4)] active:translate-y-0",
    secondary:
      "bg-transparent text-[#FF6B4A] border-2 border-[#FF6B4A] hover:bg-[#FF6B4A] hover:text-white min-h-[48px]",
    ghost:
      "bg-transparent text-[#FF6B4A] underline underline-offset-[3px] hover:text-[#E55A3A]",
  };

  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : "";

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${disabledClasses} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} onClick={handleClick}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={handleClick} disabled={disabled}>
      {children}
    </button>
  );
}
