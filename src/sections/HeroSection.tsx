import React, { useState } from 'react';
import { FadeIn } from '../components/FadeIn';
import { Magnet } from '../components/Magnet';
import { ContactButton } from '../components/ContactButton';
import { DataNebula } from '../components/DataNebula';

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
    <section className="relative h-screen w-full flex flex-col justify-between overflow-x-clip bg-[#0C0C0C]">
      {/* 3D Interactive Data Nebula */}
      <DataNebula />
      {/* Navbar Header */}
      <FadeIn delay={0} y={-20} className="w-full z-20">
        <header className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 w-full">
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

          {/* Hamburger Menu Trigger (Mobile only) */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden w-12 h-12 flex items-center justify-center rounded-full border border-[#D7E2EA]/20 bg-neutral-900/40 text-white hover:text-purple-400 hover:border-purple-400/40 active:scale-95 transition-all cursor-pointer"
            aria-label="Open Menu"
          >
            <MenuIcon className="w-5 h-5" />
          </button>
        </header>
      </FadeIn>

      {/* Hero Heading */}
      <div className="w-full overflow-hidden flex justify-center z-0 mt-6 sm:mt-4 md:-mt-5">
        <FadeIn delay={0.15} y={40} className="w-full text-center">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17vw] select-none">
            Hi, i&apos;m Animesh
          </h1>
        </FadeIn>
      </div>

      {/* Hero Portrait */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-auto">
        <FadeIn delay={0.6} y={30} className="w-full">
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="w-full flex justify-center"
          >
            <img
              src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
              alt="Animesh Dwivedi Portrait"
              className="w-full h-auto object-contain select-none pointer-events-none drop-shadow-2xl"
            />
          </Magnet>
        </FadeIn>
      </div>

      {/* Bottom Bar */}
      <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 w-full z-20">
        {/* Left paragraph */}
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            a data scientist & ml engineer focused on building end-to-end ai and data products
          </p>
        </FadeIn>

        {/* Right Contact Button */}
        <FadeIn delay={0.5} y={20}>
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

          <nav className="flex flex-col gap-8 text-center my-auto">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setIsMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-3xl font-bold uppercase tracking-widest text-[#D7E2EA] hover:text-white transition-colors"
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
              className="text-3xl font-bold uppercase tracking-widest text-[#D7E2EA] hover:text-white transition-colors"
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
              className="text-3xl font-bold uppercase tracking-widest text-[#D7E2EA] hover:text-white transition-colors"
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
              className="text-3xl font-bold uppercase tracking-widest text-[#D7E2EA] hover:text-white transition-colors"
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
