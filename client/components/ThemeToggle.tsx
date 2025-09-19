import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle({ className = '' }: { className?: string }) {
  const getInitial = () => {
    if (typeof window === 'undefined') return 'dark';
    const stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  const [theme, setTheme] = useState<'light' | 'dark'>(getInitial());

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
    localStorage.setItem('theme', theme);
    window.dispatchEvent(new Event('theme-change'));
  }, [theme]);

  return (
    <button
      aria-label="Toggle theme"
      className={`p-2 rounded-full border border-border/50 hover:bg-accent/20 transition-colors ${className}`}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? (
        <Sun className="text-accent" size={18} />
      ) : (
        <Moon className="text-primary" size={18} />
      )}
    </button>
  );
}
