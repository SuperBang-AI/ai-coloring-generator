import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  interactive?: boolean;
  id?: string;
}

export function Card({ children, className = "", interactive = false, id }: CardProps) {
  const baseClasses =
    "bg-[#FFFDFA] border border-[#EBE0D5] rounded-card p-7";
  const interactiveClasses = interactive
    ? "transition-all duration-200 hover:border-[#FF6B4A] hover:bg-[#FFF9F2]"
    : "";

  return (
    <div id={id} className={`${baseClasses} ${interactiveClasses} ${className}`}>
      {children}
    </div>
  );
}
