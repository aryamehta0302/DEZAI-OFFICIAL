'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
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
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

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

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (!isOpen) {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') {
        e.preventDefault();
        setIsOpen(true);
        setFocusedIndex(0);
      }
      return;
    }
    
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setFocusedIndex(prev => Math.min(prev + 1, options.length - 1));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setFocusedIndex(prev => Math.max(prev - 1, 0));
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        if (focusedIndex >= 0) {
          onChange(options[focusedIndex]);
          setIsOpen(false);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        break;
    }
  }, [isOpen, focusedIndex, options, onChange]);

  const borderFocus = accentColor === 'primary' ? 'border-primary' : 'border-tertiary';
  const hoverBgColor = accentColor === 'primary'
    ? 'hover:bg-primary/5 hover:text-primary'
    : 'hover:bg-tertiary/5 hover:text-tertiary';

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <label className="label-caps text-on-surface-variant mb-2 block select-none">
        {label} {required && '*'}
      </label>
      
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        className={`w-full bg-surface-dim border ${
          isOpen ? borderFocus : 'border-border'
        } rounded-xl px-4 py-3 text-left text-on-surface flex justify-between items-center transition-all focus-ring cursor-pointer`}
      >
        <span className={value ? 'text-on-surface font-medium' : 'text-outline'}>
          {value || placeholder}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="material-symbols-outlined text-on-surface-variant text-sm select-none"
        >
          expand_more
        </motion.span>
      </button>

      {/* Dropdown Options List */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={listRef}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            role="listbox"
            className="absolute z-50 w-full mt-2 bg-white rounded-xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.1)] border border-border max-h-60 overflow-y-auto"
          >
            {options.map((option, index) => (
              <button
                key={option}
                type="button"
                role="option"
                aria-selected={value === option}
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-3 text-sm transition-colors cursor-pointer ${hoverBgColor} ${
                  value === option 
                    ? (accentColor === 'primary' ? 'bg-primary/8 text-primary font-bold' : 'bg-tertiary/8 text-tertiary font-bold')
                    : 'text-on-surface'
                } ${focusedIndex === index ? 'bg-surface-dim' : ''}`}
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
