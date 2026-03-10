'use client';

import React, { useState, useEffect } from 'react';
import Hero from '@/components/Hero';
import NavigationGrid from '@/components/NavigationGrid';
import ProjectsView from '@/components/ProjectsView';
import AboutView from '@/components/AboutView';
import NotesView from '@/components/NotesView';

export default function App() {
  const [view, setView] = useState('hero'); // 'hero', 'grid', 'projects', 'about', 'notes'
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [titlePhase, setTitlePhase] = useState(0);

  useEffect(() => {
    if (view !== 'hero') return;
    if (loadingProgress < 100) {
      const timer = setTimeout(() => setLoadingProgress(p => Math.min(p + 5, 100)), 15);
      return () => clearTimeout(timer);
    }
  }, [view, loadingProgress]);

  useEffect(() => {
    if (view === 'hero' && loadingProgress === 100) {
      if (titlePhase === 0) {
        const timer = setTimeout(() => setTitlePhase(1), 100);
        return () => clearTimeout(timer);
      } else if (titlePhase === 1) {
        const timer = setTimeout(() => setTitlePhase(2), 1200);
        return () => clearTimeout(timer);
      } else if (titlePhase === 2) {
        const timer = setTimeout(() => setTitlePhase(3), 1300);
        return () => clearTimeout(timer);
      }
    }
  }, [view, loadingProgress, titlePhase]);

  const getBgColor = () => {
    if (view === 'hero') return 'bg-[#000000]';
    if (view === 'grid' || view === 'about' || view === 'notes') return 'bg-[#000000]';
    if (view === 'projects') return 'bg-[#0A0A0A]';
    return 'bg-[#000000]';
  };

  const customStyles = `
    .noise-overlay {
      position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
      pointer-events: none; z-index: 50; opacity: 0.08;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
    }
    .smooth-transition {
      transition: all 1.2s cubic-bezier(0.76, 0, 0.24, 1);
    }
    .hide-scrollbar::-webkit-scrollbar { display: none; }
    .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
  `;

  return (
    <div className={`relative w-full h-screen overflow-hidden smooth-transition ${getBgColor()} font-sans`}>
      <style>{customStyles}</style>
      <div className={`noise-overlay smooth-transition ${view === 'projects' ? 'opacity-[0.02]' : 'opacity-[0.06]'}`}></div>

      <Hero
        view={view}
        loadingProgress={loadingProgress}
        titlePhase={titlePhase}
        onEnter={() => { if (loadingProgress === 100) setView('grid'); }}
      />

      <NavigationGrid view={view} setView={setView} />

      <ProjectsView view={view} setView={setView} />

      <AboutView view={view} setView={setView} />

      <NotesView view={view} setView={setView} />
    </div>
  );
}
