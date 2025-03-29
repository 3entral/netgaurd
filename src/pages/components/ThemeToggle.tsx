import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  theme: 'v1' | 'v2';
  onToggle: () => void;
}

export default function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  return (
    <button
      onClick={onToggle}
      className="fixed bottom-4 right-4 p-3 bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
      aria-label="Toggle theme version"
    >
      {theme === 'v1' ? (
        <Sun className="w-6 h-6" />
      ) : (
        <Moon className="w-6 h-6" />
      )}
    </button>
  );
}