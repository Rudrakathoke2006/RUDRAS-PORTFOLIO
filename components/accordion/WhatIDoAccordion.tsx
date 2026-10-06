'use client';

import React, { useState } from 'react';
import { XRayOverlay } from '../layout/XRayOverlay';

interface AccordionPanel {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  skills: string[];
  proofFeature: string;
  proofLink: string;
  xrayService: string;
  xrayDB: string;
  xrayLatency: string;
}

const panels: AccordionPanel[] = [
  {
    id: "backend",
    title: "01. Java Backend Developer",
    subtitle: "High-throughput microservices & secure architectures",
    icon: "☕",
    skills: ["Java 17 / 21", "Spring Boot 3", "JSP / Servlets", "JDBC & JPA", "MySQL", "DAO Pattern", "Apache Tomcat", "Multithreading", "Pessimistic Locking", "REST APIs"],
    proofFeature: "Live Hospital Record Management & ATM State Machine Microservice",
    proofLink: "#projects",
    xrayService: "Java Servlet / Spring Boot Core",
    xrayDB: "MySQL / Postgres JPA",
    xrayLatency: "18ms"
  },
  {
    id: "ai-engineer",
    title: "02. AI Engineer",
    subtitle: "Intelligent systems, from model to production API",
    icon: "🧠",
    skills: ["Python", "FastAPI", "Scikit-learn", "PyTorch", "LLM APIs", "RAG Pipelines", "Vector Databases", "Prompt Engineering", "Pandas / NumPy", "Model Deployment"],
    proofFeature: "Live PUGMARK Tiger Reserve Re-ID & RAG Stream Chat Engine",
    proofLink: "#projects",
    xrayService: "FastAPI PyEngine (OpenCV/YOLO)",
    xrayDB: "pgvector (Embeddings)",
    xrayLatency: "85ms"
  },
  {
    id: "fullstack",
    title: "03. Full Stack Developer",
    subtitle: "End-to-end products, from database to pixel",
    icon: "💻",
    skills: ["Next.js", "React", "TypeScript", "Flutter", "FastAPI", "Spring Boot", "PostgreSQL", "JWT Auth", "REST APIs", "Docker", "Git / CI"],
    proofFeature: "Live SarvaVote & Cross-Platform Production Applications",
    proofLink: "#projects",
    xrayService: "Next.js / FastAPI Full Stack Core",
    xrayDB: "PostgreSQL JPA & Vector Index",
    xrayLatency: "24ms"
  }
];

interface WhatIDoAccordionProps {
  xrayActive: boolean;
}

export const WhatIDoAccordion: React.FC<WhatIDoAccordionProps> = ({ xrayActive }) => {
  const [activeId, setActiveId] = useState<string>("ai-ml");

  return (
    <section id="accordion" className="relative py-24 bg-background border-t border-border">
      <XRayOverlay service="Accordion Proof Engine" database="Skills Knowledge Vector" latency="14ms" active={xrayActive} />

      <div className="max-w-[1240px] mx-auto px-6">
        <span className="font-mono text-xs text-lavender tracking-widest uppercase mb-2 block">// Proof of Claim • Interactive Spectrum</span>
        <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-text-primary mb-12">
          What I Do <span className="text-transparent bg-clip-text bg-gradient-to-r from-lavender to-hotLime">(and the feature that proves it)</span>
        </h2>

        <div className="flex flex-col gap-4">
          {panels.map((p) => {
            const isOpen = activeId === p.id;
            return (
              <div
                key={p.id}
                onMouseEnter={() => setActiveId(p.id)}
                className={`p-6 sm:p-8 rounded-2xl border transition-all duration-400 cursor-pointer overflow-hidden ${
                  isOpen
                    ? 'bg-surface border-lavender shadow-glow'
                    : 'bg-surface/40 border-border opacity-70 hover:opacity-100'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-3xl">{p.icon}</span>
                    <div>
                      <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-text-primary">{p.title}</h3>
                      <p className="font-mono text-xs text-text-muted mt-1">{p.subtitle}</p>
                    </div>
                  </div>
                  <span className={`font-mono text-lg text-lavender transition-transform duration-300 ${isOpen ? 'rotate-90 text-hotLime' : ''}`}>
                    ➔
                  </span>
                </div>

                {isOpen && (
                  <div className="mt-6 pt-6 border-t border-border/80 flex flex-col md:flex-row md:items-center justify-between gap-6 animate-fadeIn">
                    <div className="flex flex-wrap gap-2">
                      {p.skills.map((sk, idx) => (
                        <span key={idx} className="font-mono text-xs px-3 py-1 bg-background/60 border border-border text-text-primary rounded-lg">
                          {sk}
                        </span>
                      ))}
                    </div>
                    <a
                      href={p.proofLink}
                      className="inline-flex items-center gap-2 font-mono text-xs font-bold text-hotLime hover:underline uppercase tracking-wider"
                    >
                      <span>Proof Feature: {p.proofFeature}</span>
                      <span>→</span>
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
