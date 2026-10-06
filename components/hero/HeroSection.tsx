'use client';

import React, { useState, useEffect } from 'react';
import { profileData } from '@/src/data/profile';
import { XRayOverlay } from '../layout/XRayOverlay';

interface HeroSectionProps {
  xrayActive: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ xrayActive }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [termLogs, setTermLogs] = useState<string[]>([
    '<span class="text-lavender">rudra@system:~$</span> fetch --profile',
    '<span class="text-text-muted">NAME     : Rudra Kathoke</span>',
    '<span class="text-text-muted">COLLEGE  : Ramdeobaba University (RBU Nagpur)</span>',
    '<span class="text-hotLime font-bold">CGPA     : 9.2 / 10.0 (High Distinction)</span>',
    '<span class="text-dataCyan">STACK    : Java 17, Python, FastAPI, JSP/Servlets, Web3</span>'
  ]);

  // Text scramble effect for roles
  useEffect(() => {
    let currentRole = profileData.headlineRoles[roleIndex];
    let step = 0;
    const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    const interval = setInterval(() => {
      setDisplayText(
        currentRole
          .split('')
          .map((char, index) => {
            if (index < step) return currentRole[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );

      step += 1 / 2;
      if (step >= currentRole.length) {
        clearInterval(interval);
        setTimeout(() => {
          setRoleIndex((prev) => (prev + 1) % profileData.headlineRoles.length);
        }, 2200);
      }
    }, 45);

    return () => clearInterval(interval);
  }, [roleIndex]);

  const handleRunTerminalCmd = (cmd: string) => {
    if (cmd === 'projects') {
      setTermLogs([
        '<span class="text-lavender">rudra@system:~$</span> ./projects.sh',
        '<span class="text-hotLime">1. PUGMARK (FastAPI + OpenCV + YOLOv8 + SIFT)</span>',
        '2. Hospital Patient Record System (JSP + Servlets + SHA-256)',
        '3. SarvaVote (Voice-Guided Voting - Byte Quest Top 25)',
        '4. ATM Engine Simulation (6-state State Machine)',
        '<span class="text-text-muted">Scroll down to view horizontal case studies ↓</span>'
      ]);
    } else if (cmd === 'skills') {
      setTermLogs([
        '<span class="text-lavender">rudra@system:~$</span> ./skills.sh',
        'LANGUAGES : Core Java, Python, C, JavaScript, Solidity',
        'BACKEND   : JSP, Servlets, JDBC, FastAPI, Spring Boot',
        'SECURITY  : SHA-256 Password Salting, SQLi Prevention'
      ]);
    } else if (cmd === 'awards') {
      setTermLogs([
        '<span class="text-lavender">rudra@system:~$</span> ./awards.sh',
        '<span class="text-hotLime">🥈 2nd Place : Cygnus HackTara Hackathon</span>',
        '🏆 Top 25    : Byte Quest GFG RBU (SarvaVote)',
        '🏆 Top 17    : CodeCon 2025 (Legalizer AI)'
      ]);
    } else if (cmd === 'hire') {
      setTermLogs([
        '<span class="text-hotLime font-bold">rudra@system:~$ sudo hire rudra</span>',
        '<span class="text-hotLime font-bold">SUCCESS: Administrative offer override activated!</span>',
        '<span class="text-lavender">Email: rudrakathoke1405@gmail.com</span>'
      ]);
    }
  };

  return (
    <section id="hero" className="relative min-h-screen pt-36 pb-20 flex items-center bg-background overflow-hidden">
      <XRayOverlay service="Next.js 14 App Router" database="Static Config / Memory" latency="8ms" active={xrayActive} />

      <div className="max-w-[1240px] mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* LEFT COLUMN: HERO TEXT */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {/* STATUS PILL */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-hotLime/10 border border-hotLime/30 text-hotLime font-mono text-xs w-fit shadow-limeGlow">
            <span className="w-2 h-2 rounded-full bg-hotLime shadow-[0_0_8px_#c8ff5a] animate-pulse" />
            <span>{profileData.statusPill}</span>
          </div>

          {/* NAME & SCRAMBLE HEADLINE */}
          <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-text-primary tracking-tight leading-tight">
            RUDRA <span className="text-transparent bg-clip-text bg-gradient-to-r from-lavender via-dataCyan to-hotLime">KATHOKE</span>
          </h1>

          <div className="font-mono text-lg sm:text-2xl text-lavender h-9 flex items-center">
            <span>{displayText}</span>
            <span className="animate-pulse text-hotLime ml-1">█</span>
          </div>

          {/* PROOF STATEMENT */}
          <p className="text-text-muted text-base sm:text-lg max-w-xl leading-relaxed">
            {profileData.proofStatement}
          </p>

          {/* CTAS */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-lavender to-hotLime text-background font-mono font-bold text-sm uppercase tracking-wider hover:scale-105 transition-transform shadow-glow"
            >
              View Work →
            </a>
            <a
              href="#contact"
              className="px-6 py-3.5 rounded-xl bg-surface border border-border text-text-primary font-mono text-sm uppercase tracking-wider hover:border-lavender hover:text-lavender transition-all"
            >
              Hire Me
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: CYBER TERMINAL */}
        <div className="lg:col-span-5">
          <div className="rounded-2xl bg-[#090d16] border border-lavender/30 shadow-glow overflow-hidden font-mono text-xs">
            {/* TERMINAL HEADER */}
            <div className="bg-[#0d121f] px-4 py-2.5 border-b border-border flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-text-muted text-[11px]">rudra@rbu-system:~</span>
              <span className="text-[10px] bg-lavender/20 text-lavender px-2 py-0.5 rounded">LIVE_CLI</span>
            </div>

            {/* TERMINAL LOGS */}
            <div className="p-4 min-h-[200px] flex flex-col gap-1.5">
              {termLogs.map((log, idx) => (
                <div key={idx} dangerouslySetInnerHTML={{ __html: log }} />
              ))}
            </div>

            {/* QUICK CLI BUTTONS */}
            <div className="p-3 bg-[#0b0f1a] border-t border-border flex gap-2 overflow-x-auto">
              <button onClick={() => handleRunTerminalCmd('projects')} className="px-2.5 py-1 bg-surface border border-border hover:border-lavender hover:text-lavender text-text-muted text-[11px] rounded transition-all">./projects.sh</button>
              <button onClick={() => handleRunTerminalCmd('skills')} className="px-2.5 py-1 bg-surface border border-border hover:border-lavender hover:text-lavender text-text-muted text-[11px] rounded transition-all">./skills.sh</button>
              <button onClick={() => handleRunTerminalCmd('awards')} className="px-2.5 py-1 bg-surface border border-border hover:border-lavender hover:text-lavender text-text-muted text-[11px] rounded transition-all">./awards.sh</button>
              <button onClick={() => handleRunTerminalCmd('hire')} className="px-2.5 py-1 bg-hotLime/10 border border-hotLime/40 text-hotLime text-[11px] rounded transition-all font-bold">sudo hire</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
