import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Cpu, LayoutGrid, Sparkles, Code2, Database } from 'lucide-react';
interface PortalVexProps {
  onSelectRoute: (id: string) => void;
}

export const PortalVex: React.FC<PortalVexProps> = ({ onSelectRoute }) => {
  return (
    <div className="relative min-h-screen w-full bg-[#08080C] text-[#D7E2EA] font-sans flex flex-col justify-between p-6 sm:p-10 md:p-14 overflow-hidden pt-20">
      {/* Ambient Grid & Glow Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293715_1px,transparent_1px),linear-gradient(to_bottom,#1f293715_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <header className="relative z-10 flex justify-between items-center w-full max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 font-black tracking-tight text-lg">
            ad.
          </div>
          <span className="font-bold text-lg text-white uppercase tracking-wider">Animesh Dwivedi</span>
        </div>
        <span className="text-xs uppercase tracking-widest font-semibold text-neutral-400 bg-neutral-900/60 border border-neutral-800 px-4 py-2 rounded-full backdrop-blur-md">
          Portal Experiment #1 &middot; Vex Glass
        </span>
      </header>

      {/* Main Gateway Content */}
      <main className="relative z-10 w-full max-w-6xl mx-auto my-auto py-12 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-semibold uppercase tracking-widest mb-6"
        >
          <Sparkles className="w-3.5 h-3.5" /> Select An Experience To Explore
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-black uppercase text-white tracking-tighter leading-none max-w-4xl"
        >
          CREATIVE FRONTENDS &amp; INTELLIGENT SYSTEMS
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-base sm:text-lg text-neutral-400 max-w-2xl font-light leading-relaxed"
        >
          I operate at the intersection of high-impact web design for clients and deep machine learning engineering for intelligent products.
        </motion.p>

        {/* Dual Split Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-14 max-w-5xl">
          {/* Card 1: Freelance Web Design */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            onClick={() => onSelectRoute('freelance-designpro')}
            className="group relative border border-cyan-500/20 bg-neutral-950/60 backdrop-blur-xl p-8 sm:p-10 rounded-3xl text-left flex flex-col justify-between hover:border-cyan-500/60 hover:bg-neutral-900/80 transition-all duration-300 cursor-pointer shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-1"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-bl-full blur-2xl group-hover:bg-cyan-500/20 transition-all" />

            <div>
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <LayoutGrid className="w-7 h-7" />
              </div>
              <span className="text-xs font-mono text-cyan-400 uppercase font-bold tracking-widest">
                Freelance &amp; Agency Studio
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mt-2 mb-4 group-hover:text-cyan-300 transition-colors">
                Creative Web Design &amp; Development
              </h2>
              <p className="text-sm text-neutral-400 font-light leading-relaxed mb-6">
                Crafting striking digital experiences, pixel-faithful React/Tailwind interfaces, custom micro-animations, and high-converting landing pages for businesses.
              </p>
            </div>

            <div className="pt-6 border-t border-neutral-800 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-300 group-hover:text-white">
                Explore Freelance Services &amp; Projects
              </span>
              <div className="w-10 h-10 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>
          </motion.div>

          {/* Card 2: Data Science & ML */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            onClick={() => onSelectRoute('portfolio-ml')}
            className="group relative border border-purple-500/20 bg-neutral-950/60 backdrop-blur-xl p-8 sm:p-10 rounded-3xl text-left flex flex-col justify-between hover:border-purple-500/60 hover:bg-neutral-900/80 transition-all duration-300 cursor-pointer shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-1"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-bl-full blur-2xl group-hover:bg-purple-500/20 transition-all" />

            <div>
              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-purple-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Cpu className="w-7 h-7" />
              </div>
              <span className="text-xs font-mono text-purple-400 uppercase font-bold tracking-widest">
                Technical Resume &amp; Engineering
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mt-2 mb-4 group-hover:text-purple-300 transition-colors">
                Data Science &amp; Machine Learning
              </h2>
              <p className="text-sm text-neutral-400 font-light leading-relaxed mb-6">
                Building predictive algorithms, CatBoost classifiers, MLOps infrastructure, SHAP explainability pipelines, FastAPI containerized endpoints, and SQL analytics.
              </p>
            </div>

            <div className="pt-6 border-t border-neutral-800 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-300 group-hover:text-white">
                View Data Science Resume &amp; Models
              </span>
              <div className="w-10 h-10 rounded-full bg-purple-500/20 text-purple-300 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-neutral-500 font-light uppercase tracking-widest border-t border-neutral-900 pt-6">
        <p>&copy; {new Date().getFullYear()} Animesh Dwivedi &middot; anixes.in</p>
        <div className="flex items-center gap-6">
          <a href="https://github.com/anixes" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
};
