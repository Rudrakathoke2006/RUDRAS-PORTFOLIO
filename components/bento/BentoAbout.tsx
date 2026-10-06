'use client';

import React from 'react';
import { profileData } from '@/src/data/profile';
import { XRayOverlay } from '../layout/XRayOverlay';

interface BentoAboutProps {
  xrayActive: boolean;
  onOpenChess: () => void;
}

export const BentoAbout: React.FC<BentoAboutProps> = ({ xrayActive, onOpenChess }) => {
  return (
    <section id="about" className="relative py-24 bg-background">
      <XRayOverlay service="Next.js Client Bento Engine" database="Postgres DB Analytics" latency="12ms" active={xrayActive} />

      <div className="max-w-[1240px] mx-auto px-6">
        <span className="font-mono text-xs text-lavender tracking-widest uppercase mb-2 block">// Proof of Work • System Architecture</span>
        <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-text-primary mb-12">
          I build AI that explains itself. <span className="text-transparent bg-clip-text bg-gradient-to-r from-lavender via-dataCyan to-hotLime">Also I debug at 3 AM.</span>
        </h2>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* BENTO CARD 1: BIO & PHILOSOPHY */}
          <div className="md:col-span-7 p-8 rounded-2xl bg-surface/80 border border-border backdrop-blur-md hover:border-lavender/40 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4 font-mono text-xs text-lavender">
                <span>BIO_KERNEL // RBU CSE</span>
                <span>⚡</span>
              </div>
              <p className="text-text-primary text-base sm:text-lg leading-relaxed">
                {profileData.bentoBio}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-border/60 font-mono text-xs text-lavender italic">
              {profileData.philosophy}
            </div>
          </div>

          {/* BENTO CARD 2: ROTATED STICKER BADGES */}
          <div className="md:col-span-5 p-8 rounded-2xl bg-surface/80 border border-border backdrop-blur-md hover:border-lavender/40 transition-all flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4 font-mono text-xs text-lavender">
              <span>PROOFS & STICKERS</span>
              <span>✨</span>
            </div>
            <div className="flex flex-wrap gap-3 my-auto py-2">
              {profileData.stickers.map((s, idx) => {
                const rotation = idx % 2 === 0 ? `-rotate-${(idx + 1) * 2}` : `rotate-${(idx + 1) * 2}`;
                return (
                  <span
                    key={idx}
                    className={`font-mono text-xs font-bold px-3.5 py-2 rounded-full cursor-pointer transition-transform duration-300 hover:scale-110 hover:rotate-0 shadow-md ${
                      s.variant === 'lime'
                        ? 'bg-hotLime text-background'
                        : s.variant === 'lavender'
                        ? 'bg-lavender text-background'
                        : s.variant === 'cyan'
                        ? 'bg-dataCyan text-background'
                        : s.variant === 'pink'
                        ? 'bg-cyberPink text-white'
                        : s.variant === 'gold'
                        ? 'bg-amber-400 text-background'
                        : 'bg-text-primary text-background'
                    }`}
                  >
                    {s.label}
                  </span>
                );
              })}
            </div>
          </div>

          {/* BENTO CARD 3: TELEMETRY STATS */}
          <div className="md:col-span-7 p-8 rounded-2xl bg-surface/80 border border-border backdrop-blur-md hover:border-lavender/40 transition-all">
            <div className="flex items-center justify-between mb-4 font-mono text-xs text-lavender">
              <span>TELEMETRY_STATS</span>
              <span>📊</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {profileData.stats.map((st, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-background/50 border border-border text-center">
                  <span className="text-2xl font-extrabold font-heading text-text-primary block">{st.value}</span>
                  <span className="font-mono text-[10px] text-text-muted uppercase mt-1 block">{st.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* BENTO CARD 4: LIVE STATUS & PLAY */}
          <div className="md:col-span-5 p-8 rounded-2xl bg-surface/80 border border-border backdrop-blur-md hover:border-lavender/40 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2 font-mono text-xs text-hotLime">
                <span>STATUS // OPEN</span>
                <span className="w-2 h-2 rounded-full bg-hotLime shadow-[0_0_8px_#c8ff5a] animate-pulse" />
              </div>
              <h3 className="font-heading font-bold text-lg text-text-primary mb-1">Building & Shipping Daily</h3>
              <p className="text-text-muted text-xs">Open for Java Backend, AI Engineering, & Full-Stack internship roles.</p>
            </div>
            <button
              onClick={onOpenChess}
              className="mt-4 px-4 py-3 rounded-xl bg-gradient-to-r from-hotLime to-dataCyan text-background font-mono font-bold text-xs uppercase tracking-wider hover:scale-105 transition-transform text-center shadow-limeGlow"
            >
              ♟️ Challenge Stockfish Chess Bot
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
