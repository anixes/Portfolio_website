'use client';

import React, { useState, useEffect } from 'react';

interface StatusBarProps {
  view: string;
}

const viewLabels: Record<string, string> = {
  hero: 'CORE_TERMINAL',
  grid: 'NAV_HUB',
  projects: 'PROJECTS',
  about: 'ABOUT',
  notes: 'NOTES',
};

export default function StatusBar({ view }: StatusBarProps) {
  const [time, setTime] = useState('');

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 hidden md:flex items-center justify-between px-6 py-1.5 border-t border-[#27272A] bg-[#000000]/90 backdrop-blur-sm font-mono text-[9px] tracking-[0.3em] uppercase text-[#52525B] select-none">
      <div className="flex items-center gap-6">
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse" />
          SYS_ONLINE
        </span>
        <span className="text-[#A1A1AA]">SEC: {viewLabels[view] || view.toUpperCase()}</span>
      </div>

      <div className="flex items-center gap-6">
        <span className="hidden lg:inline text-[#3F3F46]">ESC: HUB &nbsp;|&nbsp; P A N: NAV</span>
        <span className="text-[#A1A1AA]">{time}</span>
      </div>
    </div>
  );
}
