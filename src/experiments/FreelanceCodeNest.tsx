import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code, ArrowUpRight, CheckCircle } from 'lucide-react';

export const FreelanceCodeNest: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-[#0D0E12] text-[#D7E2EA] font-sans selection:bg-emerald-500 selection:text-black pt-24 pb-16 px-6 md:px-12 flex flex-col justify-between">
      {/* Header */}
      <header className="max-w-6xl mx-auto w-full flex justify-between items-center border-b border-emerald-500/20 pb-6">
        <div className="flex items-center gap-2 font-mono text-emerald-400 font-bold text-lg">
          <Terminal className="w-5 h-5" />
          <span>CODENEST STAGE #3</span>
        </div>
        <span className="text-xs uppercase font-mono tracking-widest text-neutral-400">Developer &amp; Designer Studio</span>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto w-full text-center my-auto py-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/40 bg-emerald-950/30 text-emerald-300 text-xs font-mono font-bold uppercase tracking-widest mb-6">
          <Code className="w-4 h-4 text-emerald-400" /> Full-Stack Frontend Engineering &amp; Web Design
        </div>

        <h1 className="text-5xl sm:text-7xl md:text-8xl font-mono font-bold uppercase text-white tracking-tight leading-none">
          PIXEL-FAITHFUL &amp; PRODUCTION-READY
        </h1>

        <p className="mt-6 text-base sm:text-xl text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed">
          I design stunning UI interfaces and build clean, scalable React/Tailwind frontend codebases ready for immediate production deployment.
        </p>

        {/* Code Snippet Card */}
        <div className="mt-12 max-w-3xl mx-auto border border-emerald-500/30 bg-black/90 rounded-2xl p-6 text-left font-mono text-xs shadow-2xl overflow-hidden">
          <div className="flex items-center gap-2 mb-4 border-b border-neutral-800 pb-3">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="text-neutral-500 text-[11px] ml-2">anixes-freelance-spec.ts</span>
          </div>

          <div className="text-neutral-400 space-y-1">
            <div><span className="text-purple-400">export const</span> <span className="text-cyan-300">freelanceServices</span> = &#123;</div>
            <div className="pl-4"><span className="text-emerald-400">creativeDesign</span>: <span className="text-amber-300">&quot;Custom grid layouts &amp; visual branding&quot;</span>,</div>
            <div className="pl-4"><span className="text-emerald-400">frontendStack</span>: [<span className="text-amber-300">&quot;React 18&quot;</span>, <span className="text-amber-300">&quot;TypeScript&quot;</span>, <span className="text-amber-300">&quot;Tailwind CSS&quot;</span>],</div>
            <div className="pl-4"><span className="text-emerald-400">performanceGuarantee</span>: <span className="text-amber-300">&quot;Lighthouse 95+ Score&quot;</span>,</div>
            <div>&#125;;</div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto w-full text-center border-t border-emerald-500/20 pt-6 text-xs text-neutral-500 uppercase tracking-widest font-mono">
        CODENEST HYBRID EXPERIMENT &middot; &copy; {new Date().getFullYear()} ANIMESH DWIVEDI
      </footer>
    </div>
  );
};
