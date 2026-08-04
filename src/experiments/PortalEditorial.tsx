import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
interface PortalEditorialProps {
  onSelectRoute: (id: string) => void;
}

export const PortalEditorial: React.FC<PortalEditorialProps> = ({ onSelectRoute }) => {
  return (
    <div className="min-h-screen w-full bg-[#efeee9] text-[#121212] font-sans flex flex-col justify-between p-6 sm:p-12 md:p-16 pt-24 selection:bg-[#121212] selection:text-[#efeee9]">
      {/* Header */}
      <header className="flex justify-between items-center w-full border-b border-[#121212]/20 pb-6">
        <span className="font-serif italic text-2xl font-bold tracking-tight">Animesh Dwivedi</span>
        <span className="text-xs uppercase tracking-widest font-semibold text-[#121212]/60 border border-[#121212]/20 px-4 py-1.5 rounded-full">
          Portal Experiment #3 &middot; Editorial
        </span>
      </header>

      {/* Main Editorial Content */}
      <main className="w-full max-w-6xl mx-auto my-auto py-12 flex flex-col items-start text-left">
        <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#121212]/60 mb-6">
          Selected Practice &amp; Discipline
        </span>

        <h1 className="text-5xl sm:text-7xl md:text-8xl font-serif italic tracking-tight leading-none text-[#121212] max-w-5xl mb-8">
          Architecting Interfaces &amp; Predictive Systems
        </h1>

        <p className="text-lg sm:text-xl font-light text-[#121212]/80 max-w-2xl leading-relaxed mb-16">
          A dual-focused practice crafting bespoke web designs for client brands and engineering production machine learning systems for modern organizations.
        </p>

        {/* Split Editorial Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <motion.div
            whileHover={{ scale: 1.01 }}
            onClick={() => onSelectRoute('freelance-designpro')}
            className="group border-2 border-[#121212] bg-[#121212] text-[#efeee9] p-8 sm:p-10 rounded-3xl flex flex-col justify-between cursor-pointer shadow-xl min-h-[280px]"
          >
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#efeee9]/60">01 / FREELANCE PRACTICE</span>
              <h2 className="text-3xl sm:text-4xl font-serif italic mt-3 mb-4 text-[#efeee9]">
                Web Design &amp; Development
              </h2>
              <p className="text-sm font-light leading-relaxed text-[#efeee9]/80">
                High-fidelity digital branding, React interfaces, custom motion systems, and strategic landing pages for businesses.
              </p>
            </div>

            <div className="pt-6 border-t border-[#efeee9]/20 flex justify-between items-center mt-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#efeee9]">View Design Showcase</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.01 }}
            onClick={() => onSelectRoute('portfolio-ml')}
            className="group border-2 border-[#121212] bg-transparent text-[#121212] p-8 sm:p-10 rounded-3xl flex flex-col justify-between cursor-pointer shadow-sm hover:bg-[#121212]/5 transition-colors min-h-[280px]"
          >
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#121212]/60">02 / ENGINEERING PRACTICE</span>
              <h2 className="text-3xl sm:text-4xl font-serif italic mt-3 mb-4 text-[#121212]">
                Data Science &amp; Machine Learning
              </h2>
              <p className="text-sm font-light leading-relaxed text-[#121212]/70">
                Predictive CatBoost algorithms, MLOps cloud infrastructure, SHAP feature explainability, and automated SQL pipelines.
              </p>
            </div>

            <div className="pt-6 border-t border-[#121212]/20 flex justify-between items-center mt-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#121212]">View ML Resume</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-[#121212]/20 pt-6 flex justify-between items-center text-xs font-light tracking-widest uppercase text-[#121212]/60">
        <span>&copy; {new Date().getFullYear()} ANIMESH DWIVEDI</span>
        <span>EDITORIAL PORTAL</span>
      </footer>
    </div>
  );
};
