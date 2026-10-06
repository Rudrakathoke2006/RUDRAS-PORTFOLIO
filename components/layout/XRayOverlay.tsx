'use client';

import React from 'react';

interface XRayOverlayProps {
  service: string;
  database: string;
  latency: string;
  active: boolean;
}

export const XRayOverlay: React.FC<XRayOverlayProps> = ({ service, database, latency, active }) => {
  if (!active) return null;

  return (
    <div className="absolute top-2 right-2 z-50 pointer-events-none bg-surface/90 border border-hotLime/60 rounded-md px-3 py-1.5 backdrop-blur-md shadow-limeGlow font-mono text-[10px] text-hotLime flex items-center gap-2 animate-pulse">
      <span className="w-2 h-2 rounded-full bg-hotLime shadow-[0_0_8px_#c8ff5a]" />
      <span>PROOF_OF_WORK //</span>
      <span className="text-text-primary">SVC: {service}</span>
      <span className="text-lavender">DB: {database}</span>
      <span className="text-dataCyan">LATENCY: {latency}</span>
    </div>
  );
};
