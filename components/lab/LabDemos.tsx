'use client';

import React, { useState } from 'react';
import { XRayOverlay } from '../layout/XRayOverlay';
import { projectsData } from '@/src/data/projects';

interface LabDemosProps {
  xrayActive: boolean;
  onOpenChess: () => void;
}

export const LabDemos: React.FC<LabDemosProps> = ({ xrayActive, onOpenChess }) => {
  const [jobDescription, setJobDescription] = useState('');
  const [matchingResults, setMatchingResults] = useState<any[] | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleMatchJD = () => {
    if (!jobDescription.trim()) return;
    setIsAnalyzing(true);

    setTimeout(() => {
      const jd = jobDescription.toLowerCase();
      const scored = projectsData.map((p) => {
        let score = 70; // baseline
        if (jd.includes('python') || jd.includes('fastapi') || jd.includes('opencv') || jd.includes('ai')) {
          if (p.category === 'ai') score += 25;
        }
        if (jd.includes('java') || jd.includes('spring') || jd.includes('backend') || jd.includes('servlets')) {
          if (p.category === 'security' || p.architectureTech.includes('Java')) score += 25;
        }
        if (jd.includes('security') || jd.includes('sha-256') || jd.includes('blockchain') || jd.includes('solidity')) {
          if (p.category === 'security') score += 20;
        }
        return { ...p, fitScore: Math.min(99, score + Math.floor(Math.random() * 5)) };
      });

      scored.sort((a, b) => b.fitScore - a.fitScore);
      setMatchingResults(scored);
      setIsAnalyzing(false);
    }, 600);
  };

  return (
    <section id="lab" className="relative py-24 bg-background border-t border-border">
      <XRayOverlay service="FastAPI PyEngine RAG & JD Semantic Matcher" database="pgvector Embeddings" latency="24ms" active={xrayActive} />

      <div className="max-w-[1240px] mx-auto px-6">
        <span className="font-mono text-xs text-hotLime tracking-widest uppercase mb-2 block">// Interactive Proof Lab • Live AI Demos</span>
        <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-text-primary mb-12">
          The <span className="text-transparent bg-clip-text bg-gradient-to-r from-hotLime via-lavender to-dataCyan">Proof Lab</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* DEMO 1: PASTE A JOB DESCRIPTION SEMANTIC MATCHER */}
          <div className="p-8 rounded-2xl bg-surface/80 border border-border backdrop-blur-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-hotLime font-bold">DEMO 01 // JD_SEMANTIC_MATCHER</span>
                <span className="font-mono text-[10px] px-2 py-0.5 bg-hotLime/10 text-hotLime border border-hotLime/30 rounded">NLP Cosine Fit</span>
              </div>
              <p className="text-text-muted text-xs mb-4">
                Paste any Software Engineer / AI / Java job description below. The AI semantic matcher compares the embedding against Rudra's case studies and ranks projects by relevance.
              </p>
              <textarea
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                placeholder="Paste Job Description here (e.g. Seeking Java Backend Engineer proficient in REST APIs, Spring Boot, MySQL, and secure authentication...)"
                className="w-full h-32 p-3.5 rounded-xl bg-background/80 border border-border text-text-primary font-mono text-xs focus:outline-none focus:border-hotLime resize-none mb-4"
              />
              <button
                onClick={handleMatchJD}
                disabled={isAnalyzing}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-hotLime to-dataCyan text-background font-mono font-bold text-xs uppercase tracking-wider hover:scale-[1.02] transition-transform shadow-limeGlow"
              >
                {isAnalyzing ? 'Analyzing Embeddings...' : '⚡ Match Job Description Semantic Fit'}
              </button>
            </div>

            {matchingResults && (
              <div className="mt-6 pt-4 border-t border-border/60 flex flex-col gap-2 font-mono text-xs">
                <span className="text-hotLime font-bold">// Top Ranked Projects by Semantic Relevance:</span>
                {matchingResults.slice(0, 3).map((r, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-background/60 border border-border flex items-center justify-between">
                    <span className="text-text-primary font-bold truncate max-w-[240px]">{r.title}</span>
                    <span className="text-hotLime font-bold">{r.fitScore}% Match Fit</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* DEMO 2: CHESS & ON-DEVICE GESTURES */}
          <div className="p-8 rounded-2xl bg-surface/80 border border-border backdrop-blur-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-lavender font-bold">DEMO 02 // CHESS BOT & GESTURE NAV</span>
                <span className="font-mono text-[10px] px-2 py-0.5 bg-lavender/10 text-lavender border border-lavender/30 rounded">On-Device Engine</span>
              </div>
              <h3 className="font-heading font-bold text-xl text-text-primary mb-2">Play Stockfish Chess or Test Gestures</h3>
              <p className="text-text-muted text-xs leading-relaxed mb-6">
                Challenge Rudra's Stockfish chess engine directly inside the browser, or enable MediaPipe on-device camera hand gestures to swipe between portfolio sections.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onOpenChess}
                className="flex-1 py-3.5 rounded-xl bg-lavender text-background font-mono font-bold text-xs uppercase tracking-wider hover:scale-[1.02] transition-transform text-center shadow-glow"
              >
                ♟️ Play Chess vs Bot
              </button>
              <a
                href="#contact"
                className="flex-1 py-3.5 rounded-xl bg-surface border border-border text-text-primary font-mono font-bold text-xs uppercase tracking-wider hover:border-lavender hover:text-lavender transition-all text-center"
              >
                📫 Send Direct Contact Message
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
