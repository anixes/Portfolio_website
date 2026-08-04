import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Cpu, Layers, Sparkles, Zap, Layout } from 'lucide-react';

export const FreelanceLuminex: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-[#030407] text-[#D7E2EA] font-sans selection:bg-purple-500 selection:text-white pt-24 pb-16 px-6 md:px-12 flex flex-col justify-between">
      {/* Background Glows */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))] pointer-events-none" />

      {/* Top Header */}
      <header className="relative z-10 max-w-6xl mx-auto w-full flex justify-between items-center border-b border-purple-500/20 pb-6">
        <span className="font-mono text-xl font-bold text-purple-400 tracking-wider">LUMINEX STAGE #2</span>
        <span className="text-xs uppercase font-mono tracking-widest text-neutral-400">High-Tech Studio Architecture</span>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 max-w-5xl mx-auto w-full text-center my-auto py-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/40 bg-purple-950/30 text-purple-300 text-xs font-mono font-bold uppercase tracking-widest mb-6">
          <Zap className="w-4 h-4 text-purple-400" /> Digital Product &amp; Motion Design Studio
        </div>

        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tighter text-white leading-none">
          NEXT-GEN DIGITAL EXPERIENCES
        </h1>

        <p className="mt-6 text-base sm:text-xl text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed">
          Building high-performance React frontends, bespoke 3D micro-interactions, and conversion-optimized websites for high-growth tech ventures.
        </p>

        {/* Studio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 text-left">
          <div className="border border-purple-500/20 bg-neutral-950/80 p-6 rounded-2xl">
            <Layout className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-lg font-bold text-white uppercase mb-2">Bespoke Design</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">Tailored layouts built ground-up without generic template limits.</p>
          </div>
          <div className="border border-purple-500/20 bg-neutral-950/80 p-6 rounded-2xl">
            <Layers className="w-8 h-8 text-cyan-400 mb-4" />
            <h3 className="text-lg font-bold text-white uppercase mb-2">Framer Motion</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">Smooth 60fps entrance triggers and scroll-driven physics animations.</p>
          </div>
          <div className="border border-purple-500/20 bg-neutral-950/80 p-6 rounded-2xl">
            <Cpu className="w-8 h-8 text-emerald-400 mb-4" />
            <h3 className="text-lg font-bold text-white uppercase mb-2">Speed Optimized</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">Sub-second load times and 100% Core Web Vitals optimization.</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 max-w-6xl mx-auto w-full text-center border-t border-purple-500/20 pt-6 text-xs text-neutral-500 uppercase tracking-widest font-mono">
        LUMINEX HIGH-TECH EXPERIMENT &middot; &copy; {new Date().getFullYear()} ANIMESH DWIVEDI
      </footer>
    </div>
  );
};
