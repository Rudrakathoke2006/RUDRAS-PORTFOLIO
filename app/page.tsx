"use client";

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { Navbar } from '../components/layout/Navbar';
import { HeroSection } from '../components/hero/HeroSection';
import { BentoAbout } from '../components/bento/BentoAbout';
import { WhatIDoAccordion } from '../components/accordion/WhatIDoAccordion';
import { ProjectsHorizontal } from '../components/projects/ProjectsHorizontal';
import { LabDemos } from '../components/lab/LabDemos';
import { DynamicFooter } from '../components/layout/DynamicFooter';
import { XRayOverlay } from '../components/layout/XRayOverlay';

// Lazy load 3D Canvas
const Hero3DCanvas = dynamic(() => import('../src/components/3d/Hero3DCanvas'), { ssr: false });

export default function Home() {
  const [xrayActive, setXrayActive] = useState(false);

  useEffect(() => {
    // Client-side initialization
    const saved = localStorage.getItem('xray_active');
    if (saved === 'true') setXrayActive(true);
  }, []);

  const toggleXray = () => {
    setXrayActive((prev) => {
      const next = !prev;
      localStorage.setItem('xray_active', next ? 'true' : 'false');
      return next;
    });
  };

  return (
    <main className={`min-h-screen bg-[#0b080c] text-[#eae5ec] relative ${xrayActive ? 'xray-active' : ''}`}>
      <Hero3DCanvas />
      <Navbar xrayActive={xrayActive} onToggleXRay={toggleXray} onOpenChess={() => {}} />

      <div className="relative z-10">
        <HeroSection xrayActive={xrayActive} />
        
        <section id="about" className="relative">
          <BentoAbout xrayActive={xrayActive} onOpenChess={() => {}} />
          <XRayOverlay service="FASTAPI + PGVECTOR" database="NEON POSTGRES" latency="8ms" active={xrayActive} />
        </section>

        <section id="skills" className="relative">
          <WhatIDoAccordion xrayActive={xrayActive} />
          <XRayOverlay service="JAVA 17 / SPRING BOOT" database="SKILLS_MATRIX" latency="24ms" active={xrayActive} />
        </section>

        <section id="projects" className="relative">
          <ProjectsHorizontal xrayActive={xrayActive} />
          <XRayOverlay service="FASTAPI VECTOR SEARCH" database="PGVECTOR EMBEDDINGS" latency="42ms" active={xrayActive} />
        </section>

        <section id="lab" className="relative">
          <LabDemos xrayActive={xrayActive} onOpenChess={() => {}} />
          <XRayOverlay service="MEDIAPIPE / TF.JS" database="CLIENT_SIDE_VISION" latency="12ms" active={xrayActive} />
        </section>

        <DynamicFooter />
      </div>
    </main>
  );
}
