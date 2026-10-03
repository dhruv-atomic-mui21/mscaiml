'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Sun, Moon, Github, Sparkles } from 'lucide-react';
import SearchModal from './SearchModal';

interface NavbarProps {
  breadcrumbs?: { label: string; href?: string }[];
}

export default function Navbar({ breadcrumbs = [] }: NavbarProps) {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('mscaiml_theme') as 'dark' | 'light' | null;
    if (saved) {
      setTheme(saved);
      document.documentElement.setAttribute('data-theme', saved);
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
    }

    setIsOnline(navigator.onLine);
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  function toggleTheme() {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('mscaiml_theme', nextTheme);
  }

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-[var(--border-color)] bg-[var(--bg-primary)]/85 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          {/* Brand & Breadcrumbs */}
          <div className="flex items-center gap-3 overflow-hidden">
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-base tracking-tight text-[var(--text-primary)] hover:opacity-85 transition shrink-0"
            >
              <div className="w-8 h-8 rounded-lg bg-[var(--accent)] text-white flex items-center justify-center font-mono font-black text-sm shadow-sm">
                AI
              </div>
              <span className="font-semibold">MSc AIML</span>
            </Link>

            {breadcrumbs.length > 0 && (
              <nav className="hidden sm:flex items-center gap-1.5 text-xs text-[var(--text-muted)] truncate">
                {breadcrumbs.map((crumb, idx) => (
                  <React.Fragment key={idx}>
                    <span>/</span>
                    {crumb.href ? (
                      <Link
                        href={crumb.href}
                        className="hover:text-[var(--text-primary)] transition truncate"
                      >
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className="text-[var(--text-primary)] font-medium truncate">
                        {crumb.label}
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </nav>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2.5">
            {/* Offline Badge */}
            <div className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono border border-[var(--border-color)] bg-[var(--bg-tertiary)]">
              <span className={`w-2 h-2 rounded-full ${isOnline ? 'bg-emerald-500 status-ping' : 'bg-amber-500'}`}></span>
              <span className="text-[var(--text-secondary)]">{isOnline ? 'Offline Ready' : 'Offline Mode'}</span>
            </div>

            {/* Quick Search */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] text-xs text-[var(--text-muted)] hover:border-[var(--accent)] transition"
              title="Search all 180 assignments and topics (Ctrl+K)"
            >
              <Search size={14} className="text-[var(--text-secondary)]" />
              <span className="hidden sm:inline">Search...</span>
              <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-[var(--bg-tertiary)] border border-[var(--border-color)] rounded text-[var(--text-muted)]">
                Ctrl K
              </kbd>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent)] transition"
              title="Toggle dark/light theme"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            {/* GitHub Repo */}
            <a
              href="https://github.com/dhruv-atomic-mui21/mscaiml.git"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent)] transition"
              title="GitHub Repository"
              aria-label="GitHub Repository"
            >
              <Github size={15} />
            </a>
          </div>
        </div>
      </header>

      {/* Global Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
