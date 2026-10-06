"use client";

import React from 'react';
import Link from 'next/link';

export default function UnderTheHoodPage() {
  return (
    <div className="min-h-screen bg-[#0b080c] text-[#eae5ec] p-8 max-w-6xl mx-auto pt-24">
      <div className="mb-8 flex items-center justify-between">
        <Link href="/" className="text-[#c2a4ff] hover:underline font-mono text-sm">
          ← Back to Portfolio
        </Link>
        <span className="font-mono text-xs text-[#c8ff5a] bg-[#c8ff5a]/10 px-3 py-1 rounded-full border border-[#c8ff5a]/30">
          SYSTEM_TOPOLOGY_v2.0
        </span>
      </div>

      <h1 className="text-4xl font-extrabold mb-4">Under The Hood // System Architecture</h1>
      <p className="text-[#adacac] mb-12 max-w-2xl">
        Every claim on Rudra's CV maps to a containerized microservice or client-side vision pipeline running live.
      </p>

      <div className="bg-[#14141c] border border-[#c2a4ff]/30 rounded-2xl p-8 mb-12 shadow-2xl overflow-x-auto">
        <div className="flex items-center justify-between min-w-[750px] gap-4 text-center font-mono">
          <div className="bg-[#0b080c] border border-[#c2a4ff]/30 p-4 rounded-xl flex-1">
            <span className="text-xs text-[#c8ff5a] block mb-2">FRONTEND</span>
            <div className="font-bold text-lg">Next.js 14 / HTML5</div>
            <div className="text-xs text-[#adacac] mt-1">GSAP + Lenis + Canvas</div>
          </div>
          <span className="text-2xl text-[#c8ff5a]">➔</span>
          <div className="bg-[#0b080c] border border-[#c2a4ff]/30 p-4 rounded-xl flex-1">
            <span className="text-xs text-[#c8ff5a] block mb-2">AI SERVICE</span>
            <div className="font-bold text-lg">FastAPI (Python)</div>
            <div className="text-xs text-[#adacac] mt-1">RAG Chat & JD Matcher (8000)</div>
          </div>
          <span className="text-2xl text-[#c8ff5a]">➔</span>
          <div className="bg-[#0b080c] border border-[#c2a4ff]/30 p-4 rounded-xl flex-1">
            <span className="text-xs text-[#c8ff5a] block mb-2">MICROSERVICE</span>
            <div className="font-bold text-lg">Spring Boot 3</div>
            <div className="text-xs text-[#adacac] mt-1">Bean Validation & Rate Limiter (8080)</div>
          </div>
          <span className="text-2xl text-[#c8ff5a]">➔</span>
          <div className="bg-[#0b080c] border border-[#c2a4ff]/30 p-4 rounded-xl flex-1">
            <span className="text-xs text-[#c8ff5a] block mb-2">DATABASE</span>
            <div className="font-bold text-lg">PostgreSQL (pgvector)</div>
            <div className="text-xs text-[#adacac] mt-1">Embeddings & Messages (5432)</div>
          </div>
        </div>
      </div>
    </div>
  );
}
