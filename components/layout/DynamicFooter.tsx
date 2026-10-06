'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export const DynamicFooter: React.FC = () => {
  const [nagpurTime, setNagpurTime] = useState<string>('');
  const [visitorCount] = useState<number>(1429);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setNagpurTime(new Intl.DateTimeFormat('en-GB', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative z-10 bg-background border-t border-border pt-16 pb-10 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* TOP METRICS STRIP */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 rounded-2xl bg-surface/60 border border-border backdrop-blur-md font-mono text-xs mb-12">
          {/* NAGPUR TIME */}
          <div className="flex flex-col gap-1">
            <span className="text-text-muted text-[10px] uppercase tracking-widest">Nagpur Local Time</span>
            <div className="flex items-center gap-2 text-hotLime font-bold text-sm">
              <span className="w-2 h-2 rounded-full bg-hotLime shadow-[0_0_8px_#c8ff5a] animate-pulse" />
              <span>{nagpurTime || '20:45:00'} IST</span>
            </div>
          </div>

          {/* LATEST COMMIT */}
          <div className="flex flex-col gap-1">
            <span className="text-text-muted text-[10px] uppercase tracking-widest">Latest Commit</span>
            <div className="text-lavender font-bold text-sm truncate">
              git: 4a9f2c8 (main) • prod
            </div>
          </div>

          {/* DB VISITOR COUNT */}
          <div className="flex flex-col gap-1">
            <span className="text-text-muted text-[10px] uppercase tracking-widest">PostgreSQL DB Visitors</span>
            <div className="text-dataCyan font-bold text-sm">
              {visitorCount.toLocaleString()} Verified Views
            </div>
          </div>

          {/* STATUS */}
          <div className="flex flex-col gap-1">
            <span className="text-text-muted text-[10px] uppercase tracking-widest">Hiring Status</span>
            <div className="text-hotLime font-bold text-xs truncate">
              Open to Internships & SDE Roles
            </div>
          </div>
        </div>

        {/* MASSIVE KINETIC TYPOGRAPHY */}
        <div className="my-8 text-center select-none overflow-hidden">
          <h2 className="text-[clamp(3.5rem,12vw,9.5rem)] font-extrabold font-heading tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-r from-text-primary via-lavender to-hotLime opacity-90 hover:opacity-100 transition-opacity">
            RUDRA KATHOKE
          </h2>
        </div>

        {/* BOTTOM LINKS */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-border/50 pt-8 text-xs font-mono text-text-muted">
          <div>© 2026 Rudra Kathoke • B.Tech CSE (RBU Nagpur) • Proof of Work</div>
          <div className="flex items-center gap-6">
            <a href="https://github.com/Rudrakathoke2006" target="_blank" rel="noopener" className="hover:text-lavender transition-colors">GitHub</a>
            <a href="mailto:rudrakathoke1405@gmail.com" className="hover:text-lavender transition-colors">Email</a>
            <Link href="/under-the-hood" className="text-dataCyan hover:underline">/under-the-hood</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
