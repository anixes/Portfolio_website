import React, { useState } from 'react';
import { FadeIn } from '../components/FadeIn';
import { ContactButton } from '../components/ContactButton';
import { DataNebula } from '../components/DataNebula';
import { KineticHeroTitle } from '../components/KineticHeroTitle';

interface HeroSectionProps {
  onContactClick?: () => void;
}

// Custom SVGs for mobile menu triggers to ensure lightweight loading
const MenuIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="4" y1="6" x2="20" y2="6" />
    <line x1="4" y1="18" x2="20" y2="18" />
  </svg>
);

const XIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export const HeroSection: React.FC<HeroSectionProps> = ({ onContactClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-[100dvh] min-h-[100dvh] w-full flex flex-col justify-between overflow-x-clip bg-[#0C0C0C]">
      {/* 3D Interactive Data Nebula */}
      <DataNebula />
      {/* Navbar Header */}
      <FadeIn delay={0} y={-20} className="w-full z-20">
        <header className="flex justify-between items-center px-5 sm:px-8 md:px-10 pt-5 sm:pt-6 md:pt-8 w-full">
          {/* Brand/Initials */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
          >
            Animesh
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-12">
            <a
              href="#about"
              onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
            >
              About
            </a>
            <a
              href="#services"
              onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
            >
              Skills
            </a>
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); onContactClick ? onContactClick() : scrollToSection('contact'); }}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
            >
              Contact
            </a>
          </nav>

          {/* Hamburger Menu Trigger (Mobile only, min 48px touch target per HIG) */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden w-12 h-12 flex items-center justify-center rounded-full border border-[#D7E2EA]/20 bg-neutral-900/60 text-white hover:text-purple-400 hover:border-purple-400/40 active:scale-95 transition-all cursor-pointer"
            aria-label="Open Menu"
          >
            <MenuIcon className="w-5 h-5" />
          </button>
        </header>
      </FadeIn>

      {/* Hero Center Stage: Heading with integrated 3D sticker + Mobile-First Flow */}
      <div className="relative flex-1 flex flex-col justify-center items-center w-full z-10 px-3 sm:px-4 my-auto">
        {/* Availability Badge */}
        <FadeIn delay={0.1} y={-10} className="mb-2 sm:mb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-[10px] xs:text-[11px] font-mono tracking-wide">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Available for ML & AI Roles</span>
          </div>
        </FadeIn>

        <KineticHeroTitle />

        {/* Mobile-Native Tagline (Highly legible, normal case, perfectly proportioned) */}
        <FadeIn delay={0.25} y={15} className="md:hidden w-full flex flex-col items-center">
          <p className="text-neutral-300 font-light text-xs xs:text-sm text-center max-w-[290px] xs:max-w-xs mt-3 xs:mt-4 leading-relaxed opacity-95">
            Data Scientist & ML Product Engineer specializing in predictive systems, high-throughput APIs, and production AI.
          </p>

          {/* Mobile Thumb-Zone Primary Action Buttons */}
          <div className="flex items-center justify-center gap-3 w-full max-w-xs mt-5">
            <button
              onClick={() => scrollToSection('projects')}
              className="min-h-[46px] flex-1 rounded-full px-4 py-2.5 text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/25 active:scale-95 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              View Projects
            </button>
            <button
              onClick={() => (onContactClick ? onContactClick() : scrollToSection('contact'))}
              className="min-h-[46px] flex-1 rounded-full px-4 py-2.5 text-xs font-semibold uppercase tracking-wider bg-white/5 hover:bg-white/10 text-white border border-white/15 active:scale-95 transition-all flex items-center justify-center cursor-pointer"
            >
              Contact
            </button>
          </div>

          {/* Quick Production Proof Metrics */}
          <div className="flex items-center justify-center gap-2 mt-4 text-[10px] font-mono text-purple-300/90 bg-purple-500/10 px-3 py-1.5 rounded-full border border-purple-500/20 shadow-sm">
            <span>3 Prod Models</span>
            <span className="text-purple-500">•</span>
            <span>14ms Latency</span>
            <span className="text-purple-500">•</span>
            <span>&lt;9% MAPE</span>
          </div>
        </FadeIn>
      </div>

      {/* Seamless Bottom Edge Gradient Blend into #0C0C0C */}
      <div className="absolute bottom-0 inset-x-0 h-28 sm:h-36 bg-gradient-to-t from-[#0C0C0C] via-[#0C0C0C]/60 to-transparent pointer-events-none z-10" />

      {/* Desktop Bottom Bar (Shown only on md+ screens where horizontal space allows) */}
      <div className="hidden md:flex flex-row justify-between items-end pb-8 md:pb-10 px-8 md:px-10 w-full z-20 gap-3">
        {/* Left paragraph */}
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-relaxed max-w-[240px] md:max-w-[280px] text-sm md:text-base opacity-90"
          >
            a data scientist & ml engineer focused on building end-to-end ai and data products
          </p>
        </FadeIn>

        {/* Right Contact Button */}
        <FadeIn delay={0.5} y={20} className="shrink-0">
          <ContactButton onClick={onContactClick} />
        </FadeIn>
      </div>

      {/* Mobile Drawer Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col justify-between bg-black/95 backdrop-blur-xl p-8 md:hidden animate-in fade-in duration-200">
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold uppercase tracking-wider text-white select-none">
              Animesh
            </span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="w-12 h-12 flex items-center justify-center rounded-full border border-neutral-800 bg-neutral-900 text-white hover:text-purple-400 active:scale-95 transition-all cursor-pointer"
              aria-label="Close Menu"
            >
              <XIcon className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex flex-col gap-4 text-center my-auto">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setIsMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-2xl sm:text-3xl font-bold uppercase tracking-widest text-[#D7E2EA] hover:text-white transition-colors min-h-[48px] flex items-center justify-center py-2"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                setIsMenuOpen(false);
                scrollToSection('about');
              }}
              className="text-2xl sm:text-3xl font-bold uppercase tracking-widest text-[#D7E2EA] hover:text-white transition-colors min-h-[48px] flex items-center justify-center py-2"
            >
              About
            </a>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                setIsMenuOpen(false);
                scrollToSection('services');
              }}
              className="text-2xl sm:text-3xl font-bold uppercase tracking-widest text-[#D7E2EA] hover:text-white transition-colors min-h-[48px] flex items-center justify-center py-2"
            >
              Skills
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                setIsMenuOpen(false);
                scrollToSection('projects');
              }}
              className="text-2xl sm:text-3xl font-bold uppercase tracking-widest text-[#D7E2EA] hover:text-white transition-colors min-h-[48px] flex items-center justify-center py-2"
            >
              Projects
            </a>
          </nav>

          <div className="w-full">
            <button
              onClick={() => {
                setIsMenuOpen(false);
                onContactClick?.();
              }}
              className="w-full py-4 text-sm font-bold uppercase tracking-widest bg-gradient-to-r from-[#18011F] via-[#B600A8] to-[#7621B0] text-white rounded-full active:scale-95 transition-all cursor-pointer shadow-lg shadow-purple-500/20"
            >
              Contact Me
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
