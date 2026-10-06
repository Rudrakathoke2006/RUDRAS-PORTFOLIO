'use client';

import React from 'react';
import { projectsData } from '@/src/data/projects';
import { XRayOverlay } from '../layout/XRayOverlay';

interface ProjectsHorizontalProps {
  xrayActive: boolean;
}

export const ProjectsHorizontal: React.FC<ProjectsHorizontalProps> = ({ xrayActive }) => {
  return (
    <section id="projects" className="relative py-24 bg-background border-t border-border overflow-hidden">
      <XRayOverlay service="Case Study Vector Index" database="pgvector / Postgres" latency="16ms" active={xrayActive} />

      <div className="max-w-[1240px] mx-auto px-6 mb-12">
        <span className="font-mono text-xs text-lavender tracking-widest uppercase mb-2 block">// Pinned Case Studies • Proof of Work</span>
        <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-text-primary">
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-lavender via-dataCyan to-hotLime">Systems Built</span>
        </h2>
      </div>

      {/* HORIZONTAL CASE STUDY CARDS GRID */}
      <div className="max-w-[1240px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((proj) => (
          <div
            key={proj.id}
            className="group relative p-8 rounded-2xl bg-surface/90 border border-border hover:border-lavender/60 transition-all duration-300 flex flex-col justify-between backdrop-blur-md shadow-card hover:shadow-glow hover:-translate-y-2"
          >
            {/* X-RAY BADGE ON CARD */}
            {xrayActive && (
              <div className="mb-4 p-2 rounded bg-background/80 border border-hotLime/40 font-mono text-[10px] text-hotLime flex flex-col gap-0.5">
                <span>SERVICE: {proj.xray.service}</span>
                <span>DB: {proj.xray.database}</span>
                <span>LATENCY: {proj.xray.avgLatency}</span>
              </div>
            )}

            <div>
              {/* CARD TOP */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">{proj.icon}</span>
                {proj.badge && (
                  <span className="font-mono text-[10px] font-bold px-2.5 py-1 bg-hotLime/15 border border-hotLime/40 text-hotLime rounded-full">
                    {proj.badge}
                  </span>
                )}
              </div>

              {/* TITLE & SUBTITLE */}
              <h3 className="font-heading font-extrabold text-xl text-text-primary group-hover:text-lavender transition-colors mb-2">
                {proj.title}
              </h3>
              <p className="font-mono text-xs text-dataCyan mb-4">{proj.subtitle}</p>

              {/* PROBLEM & ROLE */}
              <p className="text-text-muted text-xs leading-relaxed mb-4">
                {proj.problem}
              </p>

              {/* METRIC RESULT */}
              <div className="p-3 rounded-xl bg-background/60 border border-border font-mono text-xs text-hotLime mb-6">
                ⚡ {proj.metricsResult}
              </div>
            </div>

            {/* TECH TAGS & LINKS */}
            <div>
              <div className="flex flex-wrap gap-1.5 mb-6">
                {proj.architectureTech.map((t, idx) => (
                  <span key={idx} className="font-mono text-[10px] px-2.5 py-0.5 bg-background border border-border/80 text-text-secondary rounded">
                    {t}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-border/60 flex items-center justify-between">
                <a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs font-bold text-text-primary hover:text-lavender transition-colors flex items-center gap-1.5"
                >
                  <span>View Repository</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
