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
  const [isTransitioning, setIsTransitioning] = useState(false);

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

  // Trigger brief progress bar animation when view changes
  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), 600);
    return () => clearTimeout(timer);
  }, [view]);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 hidden md:flex items-center justify-between px-6 py-1.5 border-t border-[#27272A] bg-[#000000]/90 backdrop-blur-sm font-mono text-[9px] tracking-[0.3em] uppercase text-[#52525B] select-none">
      {/* View Transition Indicator */}
      <div 
        className="absolute top-0 left-0 h-[1px] bg-white transition-all duration-500 shadow-[0_0_10px_#FFFFFF]"
        style={{ 
          width: isTransitioning ? '100%' : '0%',
          opacity: isTransitioning ? 0.8 : 0 
        }} 
      />

      <div className="flex items-center gap-6">
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse shadow-[0_0_8px_#22c55e]" />
          SYS_ONLINE
        </span>
        <span className="text-[#A1A1AA] transition-colors duration-300">SEC: {viewLabels[view] || view.toUpperCase()}</span>
      </div>

      <div className="flex items-center gap-6">
        <span className="hidden lg:inline text-[#3F3F46]">ESC: HUB &nbsp;|&nbsp; P A N: NAV</span>
        <span className="text-[#A1A1AA]">{time}</span>
      </div>
    </div>
  );
}
