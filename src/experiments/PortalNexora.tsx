import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Layers, Terminal } from 'lucide-react';
interface PortalNexoraProps {
  onSelectRoute: (id: string) => void;
}

export const PortalNexora: React.FC<PortalNexoraProps> = ({ onSelectRoute }) => {
  return (
    <div className="relative min-h-screen w-full bg-black text-[#D7E2EA] font-sans flex flex-col justify-between p-6 sm:p-10 md:p-14 overflow-hidden pt-20">
      {/* Deep Space Background Video / Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-900/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Header */}
      <header className="relative z-10 flex justify-between items-center w-full max-w-7xl mx-auto border-b border-white/10 pb-6">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xl font-bold tracking-widest text-white uppercase">
            &lt;anixes /&gt;
          </span>
        </div>
        <span className="text-xs uppercase tracking-widest font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-800/40 px-4 py-1.5 rounded-full">
          Portal Experiment #2 &middot; Nexora Void
        </span>
      </header>

      {/* Hero Intro */}
      <main className="relative z-10 w-full max-w-5xl mx-auto my-auto py-12 flex flex-col items-center text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-16 h-16 rounded-3xl bg-gradient-to-tr from-indigo-500 to-cyan-400 p-[1px] mb-8"
        >
          <div className="w-full h-full bg-black rounded-[23px] flex items-center justify-center text-cyan-300">
            <Sparkles className="w-8 h-8" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl md:text-7xl font-mono font-bold uppercase text-white tracking-tight leading-none"
        >
          EXPLORE THE SYSTEM
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-base sm:text-lg text-neutral-400 max-w-xl font-light leading-relaxed"
        >
          Select your intended pathway to initialize the experience environment.
        </motion.p>

        {/* Pathway Selectors */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-12">
          {/* Pathway 1: Web Design */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onClick={() => onSelectRoute('freelance-designpro')}
            className="group relative border border-white/10 bg-neutral-900/40 p-8 rounded-2xl text-left hover:border-cyan-400/80 hover:bg-black transition-all duration-300 cursor-pointer overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex justify-between items-start mb-8">
              <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                <Layers className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 font-bold">PATH 01</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-mono font-bold text-white uppercase mb-3 group-hover:text-cyan-300 transition-colors">
              Web Design &amp; Freelance
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed mb-8">
              Custom digital interfaces, React frontend architecture, high-converting landing pages, and creative web direction.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider group-hover:translate-x-2 transition-transform">
              <span>Launch Studio Environment</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </motion.div>

          {/* Pathway 2: ML Engineering */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            onClick={() => onSelectRoute('portfolio-ml')}
            className="group relative border border-white/10 bg-neutral-900/40 p-8 rounded-2xl text-left hover:border-purple-400/80 hover:bg-black transition-all duration-300 cursor-pointer overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex justify-between items-start mb-8">
              <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                <Terminal className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 font-bold">PATH 02</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-mono font-bold text-white uppercase mb-3 group-hover:text-purple-300 transition-colors">
              Data Science &amp; MLOps
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed mb-8">
              Predictive CatBoost modeling, SHAP explainability, automated pipeline architectures, FastAPI, Docker, and AWS EC2 deployments.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono font-bold text-purple-400 uppercase tracking-wider group-hover:translate-x-2 transition-transform">
              <span>Launch Engineering Console</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full max-w-7xl mx-auto flex justify-between items-center text-[11px] font-mono text-neutral-500 uppercase tracking-widest border-t border-white/10 pt-4">
        <span>STATUS: SYSTEM READY</span>
        <span>&copy; {new Date().getFullYear()} ANIMESH DWIVEDI</span>
      </footer>
    </div>
  );
};
