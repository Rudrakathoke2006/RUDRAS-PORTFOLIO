'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface NavbarProps {
  xrayActive: boolean;
  onToggleXRay: () => void;
  onOpenChess: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ xrayActive, onToggleXRay, onOpenChess }) => {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [soundOn, setSoundOn] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    if (newTheme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  };

  return (
    <nav className={`fixed top-7 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'top-0 bg-background/90 backdrop-blur-md border-b border-border py-3' : 'py-4'}`}>
      <div className="max-w-[1240px] mx-auto px-6 flex items-center justify-between">
        {/* LOGO */}
        <Link href="#" className="font-mono font-bold text-lg text-text-primary flex items-center gap-1.5 hover:text-lavender transition-colors">
          <span className="text-lavender">[</span>RK<span className="text-lavender">]</span>
          <span className="text-[10px] px-2 py-0.5 bg-lavender/10 border border-lavender/30 rounded text-lavender tracking-widest">JAVA.AI</span>
        </Link>

        {/* NAV LINKS */}
        <ul className="hidden md:flex items-center gap-1 font-mono text-xs text-text-muted">
          <li><a href="#hero" className="px-3 py-1.5 rounded-lg hover:text-text-primary hover:bg-surface transition-all">Home</a></li>
          <li><a href="#about" className="px-3 py-1.5 rounded-lg hover:text-text-primary hover:bg-surface transition-all">About</a></li>
          <li><a href="#skills" className="px-3 py-1.5 rounded-lg hover:text-text-primary hover:bg-surface transition-all">Skills</a></li>
          <li><a href="#accordion" className="px-3 py-1.5 rounded-lg hover:text-text-primary hover:bg-surface transition-all">What I Do</a></li>
          <li><a href="#projects" className="px-3 py-1.5 rounded-lg hover:text-text-primary hover:bg-surface transition-all">Projects</a></li>
          <li><a href="#contact" className="px-3 py-1.5 rounded-lg hover:text-text-primary hover:bg-surface transition-all">Contact</a></li>
          <li><Link href="/under-the-hood" className="px-3 py-1.5 rounded-lg text-dataCyan hover:bg-dataCyan/10 transition-all">/under-the-hood</Link></li>
        </ul>

        {/* ACTIONS & X-RAY MODE TOGGLE */}
        <div className="flex items-center gap-3">
          {/* X-RAY TOGGLE BUTTON */}
          <button
            onClick={onToggleXRay}
            className={`font-mono text-[11px] font-bold px-3 py-1.5 rounded-lg border transition-all flex items-center gap-1.5 ${
              xrayActive
                ? 'bg-hotLime text-background border-hotLime shadow-limeGlow animate-pulse'
                : 'bg-surface text-text-muted border-border hover:border-hotLime hover:text-hotLime'
            }`}

          >
            <span>⚡ X-RAY</span>
            <span className="text-[9px] px-1 bg-black/20 rounded">{xrayActive ? 'ON' : 'OFF'}</span>
          </button>

          {/* PLAY CHESS BUTTON */}
          <button
            onClick={onOpenChess}
            className="font-mono text-[11px] font-bold px-3 py-1.5 rounded-lg bg-hotLime/10 border border-hotLime/40 text-hotLime hover:bg-hotLime hover:text-background transition-all shadow-limeGlow hidden sm:flex items-center gap-1"
          >
            ♟️ Play
          </button>

          {/* SOUND TOGGLE */}
          <button
            onClick={() => setSoundOn(!soundOn)}
            className="w-9 h-9 rounded-full bg-surface border border-border flex items-center justify-center text-sm text-text-primary hover:border-lavender transition-all"
            aria-label="Toggle Sound"
          >
            {soundOn ? '🔊' : '🔇'}
          </button>

          {/* THEME TOGGLE */}
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full bg-surface border border-border flex items-center justify-center text-sm text-text-primary hover:border-lavender transition-all"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </nav>
  );
};
