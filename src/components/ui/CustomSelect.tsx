'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CustomSelectProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder: string;
  required?: boolean;
  accentColor?: 'primary' | 'tertiary';
}

export default function CustomSelect({
  label,
  value,
  onChange,
  options,
  placeholder,
  required = false,
  accentColor = 'primary',
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const hoverBgColor = accentColor === 'primary'
    ? 'hover:bg-primary/10 hover:text-primary'
    : 'hover:bg-tertiary/10 hover:text-tertiary';

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <label className="label-caps text-on-surface-variant mb-2 block select-none">
        {label} {required && '*'}
      </label>
      
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full bg-white/5 border ${
          isOpen ? (accentColor === 'primary' ? 'border-primary' : 'border-tertiary') : 'border-white/10'
        } rounded-xl px-4 py-3 text-left text-on-surface flex justify-between items-center transition-all focus:outline-none cursor-pointer`}
      >
        <span className={value ? 'text-on-surface font-medium' : 'text-on-surface-variant/40'}>
          {value || placeholder}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="material-symbols-outlined text-on-surface-variant/70 text-sm select-none"
        >
          expand_more
        </motion.span>
      </button>

      {/* Dropdown Options List */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="absolute z-50 w-full mt-2 bg-surface-low/95 backdrop-blur-2xl rounded-xl overflow-hidden shadow-2xl border border-white/10 max-h-60 overflow-y-auto"
          >
            {options.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-3 text-sm transition-colors cursor-pointer ${hoverBgColor} ${
                  value === option 
                    ? (accentColor === 'primary' ? 'bg-primary/15 text-primary font-bold' : 'bg-tertiary/15 text-tertiary font-bold')
                    : 'text-on-surface/90'
                }`}
              >
                {option}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
