"use client";

import { useState, useEffect } from "react";

interface DifficultySelectorProps {
  onChange?: (level: string) => void;
  className?: string;
}

const levels = [
  { value: "simple", label: "Simple", age: "Ages 3-5" },
  { value: "medium", label: "Medium", age: "Ages 6-8" },
  { value: "complex", label: "Complex", age: "Older kids & adults" },
];

export function DifficultySelector({ onChange, className = "" }: DifficultySelectorProps) {
  const [selected, setSelected] = useState("medium");

  const handleSelect = (value: string) => {
    setSelected(value);
    onChange?.(value);
  };

  return (
    <div className={`flex flex-wrap gap-2 ${className}`} role="radiogroup" aria-label="Difficulty level">
      {levels.map((level) => {
        const isSelected = selected === level.value;
        return (
          <button
            key={level.value}
            role="radio"
            aria-checked={isSelected}
            onClick={() => handleSelect(level.value)}
            className={`
              px-5 py-2.5 rounded-tag font-body text-sm font-semibold transition-all duration-200
              ${isSelected
                ? "bg-[#FF6B4A] text-white shadow-sm"
                : "bg-[#FFFDFA] text-[#8C7A6E] border border-[#EBE0D5] hover:border-[#FF6B4A]"
              }
            `}
          >
            {level.label}
            <span className="ml-1.5 font-normal opacity-75">{level.age}</span>
          </button>
        );
      })}
    </div>
  );
}
