import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Github, Linkedin, Twitter, X, Globe, Sparkles } from 'lucide-react';

interface MotionsiteMichaelSmithProps {
  onSelectRoute?: (id: any) => void;
}

export const MotionsiteMichaelSmith: React.FC<MotionsiteMichaelSmithProps> = ({ onSelectRoute }) => {
  const [loadingCount, setLoadingCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [roleIndex, setRoleIndex] = useState(0);
  const [selectedExploration, setSelectedExploration] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(false);

  const roles = ['Creative Designer', 'Frontend Developer', 'Interactive Engineer', 'Data Specialist'];
  const loadingWords = ['Design', 'Code', 'Deliver'];

  // Desktop check
  useEffect(() => {
    const checkViewport = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkViewport();
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  // Mouse Spotlight Movement Logic (Desktop-only)
  useEffect(() => {
    if (!isDesktop) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isDesktop]);

  // Loading Counter Animation (000 -> 100 over 2700ms)
  useEffect(() => {
    const duration = 2700;
    const startTime = performance.now();

    const updateCounter = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.floor(progress * 100);
      setLoadingCount(current);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setTimeout(() => setIsLoading(false), 400);
      }
    };

    requestAnimationFrame(updateCounter);
  }, []);

  // Cycling Role Text
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[#050507] text-[#F5F5F5] font-sans selection:bg-[#89AACC] selection:text-black min-h-screen relative overflow-x-hidden pt-12">
      
      {/* Dynamic Cursor Spotlight (Desktop-only) */}
      {isDesktop && (
        <div
          className="fixed pointer-events-none z-0 w-[550px] h-[550px] bg-purple-500/5 rounded-full blur-[130px] transition-transform duration-300 ease-out"
          style={{
            transform: `translate(${mousePos.x - 275}px, ${mousePos.y - 275}px)`,
          }}
        />
      )}

      {/* 1. LOADING SCREEN OVERLAY */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[9999] bg-[#050507] flex flex-col justify-between p-8 sm:p-14 text-left pointer-events-none select-none"
          >
            <div>
              <span className="text-xs text-[#878787] uppercase tracking-[0.3em] font-mono">
                ANIMESH DWIVEDI &middot; LABS
              </span>
            </div>

            <div className="my-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={loadingWords[Math.floor((loadingCount / 100) * loadingWords.length) % loadingWords.length]}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="text-5xl sm:text-7xl lg:text-8xl font-serif-italic text-white/90"
                >
                  {loadingWords[Math.floor((loadingCount / 100) * loadingWords.length) % loadingWords.length]}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex flex-col gap-4">
              <div className="text-7xl sm:text-9xl font-serif-italic text-white tabular-nums">
                {String(loadingCount).padStart(3, '0')}
              </div>

              {/* Progress Bar */}
              <div className="w-full h-[3px] bg-[#1F1F1F]/50 rounded-full overflow-hidden">
                <div
                  className="h-full accent-gradient transition-all duration-75 shadow-[0_0_8px_rgba(137,170,204,0.35)]"
                  style={{ width: `${loadingCount}%` }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. HERO SECTION */}
      <section className="relative min-h-screen w-full flex flex-col justify-between p-6 md:p-12 overflow-hidden">
        {/* Background HLS Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-0 opacity-[0.9]"
          src="/14777479_3840_2160_30fps.mp4"
        />

        <div className="absolute inset-0 bg-black/10 z-10 pointer-events-none" />
        {/* Static Noise Overlay */}
        <div className="absolute inset-0 noise-overlay opacity-[0.06] mix-blend-overlay pointer-events-none z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#050507] to-transparent z-10 pointer-events-none" />

        {/* Floating Navbar Pill */}
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4">
          <div className="inline-flex items-center rounded-full liquid-glass px-4 py-2 border border-white/10 shadow-2xl">
            {/* Logo */}
            <div className="group relative w-9 h-9 rounded-full accent-gradient p-[1.5px] mr-3 cursor-pointer transition-transform hover:scale-110">
              <div className="w-full h-full bg-[#050507] rounded-full flex items-center justify-center font-serif-italic text-sm font-bold text-white">
                AD
              </div>
            </div>

            {/* Nav Links */}
            <nav className="flex items-center gap-1 sm:gap-2">
              <a href="#hero" className="text-[11px] sm:text-xs rounded-full px-3 py-1.5 text-[#F5F5F5] hover:bg-white/5 transition-colors font-medium">Home</a>
              <a href="#work" className="text-[11px] sm:text-xs rounded-full px-3 py-1.5 text-[#878787] hover:text-[#F5F5F5] hover:bg-white/5 transition-colors font-medium">Work</a>
              <a href="#journal" className="text-[11px] sm:text-xs rounded-full px-3 py-1.5 text-[#878787] hover:text-[#F5F5F5] hover:bg-white/5 transition-colors font-medium">Thoughts</a>
              <button
                onClick={() => onSelectRoute?.('portfolio-ml')}
                className="text-[11px] sm:text-xs rounded-full px-3 py-1.5 bg-purple-600/30 text-purple-300 hover:bg-purple-600 hover:text-white transition-all font-bold"
              >
                ML Resume
              </button>
            </nav>

            <div className="w-px h-5 bg-white/10 mx-2" />

            {/* Say Hi Button */}
            <a
              href="mailto:animeshdwivedi577@gmail.com"
              className="group inline-flex items-center rounded-full text-[11px] sm:text-xs px-4 py-1.5 text-[#050507] bg-white hover:bg-neutral-200 transition-colors font-bold"
            >
              <span>Say hi ↗</span>
            </a>
          </div>
        </header>

        {/* Hero Content */}
        <div id="hero" className="relative z-20 my-auto text-center max-w-4xl mx-auto flex flex-col items-center pt-24">
          <span className="text-xs text-[#878787] uppercase tracking-[0.3em] mb-6 block font-medium">
            CREATIVE PORTFOLIO &apos;26
          </span>

          {/* Fluid Typography Clamp */}
          <h1
            className="font-serif-italic leading-[0.85] tracking-tight text-white mb-6 select-none font-light"
            style={{ fontSize: 'clamp(2.8rem, 8vw, 7.5rem)' }}
          >
            Animesh Dwivedi
          </h1>

          <div className="text-base sm:text-xl font-light text-[#878787] mb-8 flex flex-wrap items-center justify-center gap-2">
            <span>A</span>
            <div className="h-8 overflow-hidden inline-flex items-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="font-serif-italic italic text-white font-medium underline underline-offset-4 decoration-[#89AACC]"
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
            <span>building creative products in India.</span>
          </div>

          <p className="text-[#878787] text-sm md:text-base max-w-md mb-10 font-light leading-relaxed">
            Crafting striking web experiences, premium brand layouts, and high-performance interactive interfaces for digital teams.
          </p>

          <div className="inline-flex gap-4">
            <a
              href="#work"
              className="px-8 py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-white text-[#050507] hover:scale-105 active:scale-95 transition-transform shadow-xl"
            >
              See Works
            </a>
            <a
              href="mailto:animeshdwivedi577@gmail.com"
              className="px-8 py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider border border-white/20 bg-transparent text-white hover:border-white transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="relative z-20 flex flex-col items-center gap-2 pb-4">
          <span className="text-[9px] text-[#878787]/60 uppercase tracking-[0.25em] font-mono">SCROLL</span>
          <div className="w-6 h-10 rounded-full border border-white/10 flex items-start justify-center p-1.5">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-[#89AACC]"
            />
          </div>
        </div>
      </section>

      {/* 3. SELECTED WORKS (BENTO GRID) */}
      <section id="work" className="bg-[#050507] py-24 max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/5">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-px bg-[#1F1F1F]" />
              <span className="text-xs text-[#878787] uppercase tracking-[0.3em] font-medium">Selected Work</span>
            </div>
            <h2 className="text-4xl sm:text-6xl text-white font-light tracking-tight">
              Featured <em className="font-serif-italic italic font-normal text-[#89AACC]">projects</em>
            </h2>
          </div>
          <p className="text-xs text-[#878787] max-w-xs font-light leading-relaxed">
            A selection of landing pages, styling showcases, and creative agency frontends.
          </p>
        </div>

        {/* Bento Grid (Spans 7/5/5/7) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1 (Span 7) */}
          <div className="md:col-span-7 group bg-[#0E0E11] border border-white/5 rounded-3xl p-8 min-h-[400px] flex flex-col justify-between relative overflow-hidden shadow-2xl transition-all hover:border-[#89AACC]/20">
            <div className="absolute inset-0 overflow-hidden">
              <img
                src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85"
                alt="Nextlevel Studio"
                className="w-full h-full object-cover opacity-50 group-hover:scale-[1.03] transition-transform duration-700 ease-out"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />

            <div className="relative z-20 flex justify-between items-start">
              <span className="text-[10px] font-mono text-[#89AACC] uppercase tracking-wider bg-black/60 border border-white/10 px-3 py-1 rounded-full backdrop-blur-md">
                01 / CLIENT SHOWCASE
              </span>
            </div>

            <div className="relative z-20 mt-auto group-hover:translate-y-[-4px] transition-transform duration-300">
              <h3 className="text-3xl font-serif-italic italic text-white mb-2">Nextlevel Studio</h3>
              <p className="text-xs text-[#878787] max-w-sm leading-relaxed font-light">
                Interactive design system, high-fidelity layouts, and premium dark portfolio theme builds.
              </p>
            </div>
          </div>

          {/* Card 2 (Span 5) */}
          <div className="md:col-span-5 group bg-[#0E0E11] border border-white/5 rounded-3xl p-8 min-h-[400px] flex flex-col justify-between relative overflow-hidden shadow-2xl transition-all hover:border-[#89AACC]/20">
            <div className="absolute inset-0 overflow-hidden">
              <img
                src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85"
                alt="Aura Identity"
                className="w-full h-full object-cover opacity-50 group-hover:scale-[1.03] transition-transform duration-700 ease-out"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />

            <div className="relative z-20 flex justify-between items-start">
              <span className="text-[10px] font-mono text-[#89AACC] uppercase tracking-wider bg-black/60 border border-white/10 px-3 py-1 rounded-full backdrop-blur-md">
                02 / CREATIVE LAB
              </span>
            </div>

            <div className="relative z-20 mt-auto group-hover:translate-y-[-4px] transition-transform duration-300">
              <h3 className="text-3xl font-serif-italic italic text-white mb-2">Aura Identity</h3>
              <p className="text-xs text-[#878787] max-w-xs leading-relaxed font-light">
                Branding grids, typography rules, custom styling guides, and animation templates.
              </p>
            </div>
          </div>

          {/* Card 3 (Span 5) */}
          <div className="md:col-span-5 group bg-[#0E0E11] border border-white/5 rounded-3xl p-8 min-h-[400px] flex flex-col justify-between relative overflow-hidden shadow-2xl transition-all hover:border-[#89AACC]/20">
            <div className="absolute inset-0 overflow-hidden">
              <img
                src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85"
                alt="Solaris Digital"
                className="w-full h-full object-cover opacity-50 group-hover:scale-[1.03] transition-transform duration-700 ease-out"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />

            <div className="relative z-20 flex justify-between items-start">
              <span className="text-[10px] font-mono text-[#89AACC] uppercase tracking-wider bg-black/60 border border-white/10 px-3 py-1 rounded-full backdrop-blur-md">
                03 / WEB APP
              </span>
            </div>

            <div className="relative z-20 mt-auto group-hover:translate-y-[-4px] transition-transform duration-300">
              <h3 className="text-3xl font-serif-italic italic text-white mb-2">Solaris SaaS</h3>
              <p className="text-xs text-[#878787] max-w-xs leading-relaxed font-light">
                High-performance dashboard designs, React charts, and clean responsive interfaces.
              </p>
            </div>
          </div>

          {/* Card 4 (Span 7) */}
          <div className="md:col-span-7 group bg-[#0E0E11] border border-white/5 rounded-3xl p-8 min-h-[400px] flex flex-col justify-between relative overflow-hidden shadow-2xl transition-all hover:border-[#89AACC]/20">
            <div className="absolute inset-0 overflow-hidden">
              <img
                src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85"
                alt="Brand Identity"
                className="w-full h-full object-cover opacity-50 group-hover:scale-[1.03] transition-transform duration-700 ease-out"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />

            <div className="relative z-20 flex justify-between items-start">
              <span className="text-[10px] font-mono text-[#89AACC] uppercase tracking-wider bg-black/60 border border-white/10 px-3 py-1 rounded-full backdrop-blur-md">
                04 / DESIGN SYSTEM
              </span>
            </div>

            <div className="relative z-20 mt-auto group-hover:translate-y-[-4px] transition-transform duration-300">
              <h3 className="text-3xl font-serif-italic italic text-white mb-2">Design Tokens</h3>
              <p className="text-xs text-[#878787] max-w-sm leading-relaxed font-light">
                Component library guidelines, typography tokens, layout grids, and visual assets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. JOURNAL SECTION */}
      <section id="journal" className="bg-[#050507] py-20 max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex justify-between items-end mb-12 border-b border-white/5 pb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-px bg-white/10" />
              <span className="text-xs text-[#878787] uppercase tracking-[0.3em] font-medium">Thoughts</span>
            </div>
            <h2 className="text-4xl sm:text-6xl text-white font-light tracking-tight">
              Recent <em className="font-serif-italic italic font-normal text-[#89AACC]">thoughts</em>
            </h2>
          </div>
        </div>

        {/* 4 Horizontal Cards (Senior Design Review: Rounded-2xl instead of pills to support wrapping) */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between p-6 bg-[#0E0E11] hover:bg-[#121217] border border-white/5 rounded-2xl transition-all cursor-pointer group">
            <div className="flex items-start gap-4">
              <span className="text-[10px] font-mono text-[#89AACC] px-2.5 py-1 bg-black rounded-md">01</span>
              <h4 className="text-base sm:text-lg font-medium text-white group-hover:text-[#89AACC] transition-colors leading-snug">
                Designing for Spatial Computing &amp; VisionOS
              </h4>
            </div>
            <div className="flex items-center gap-6 text-xs text-[#878787] font-mono mt-4 sm:mt-0 self-end sm:self-center">
              <span>5 min read</span>
              <span>Oct 2025</span>
              <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between p-6 bg-[#0E0E11] hover:bg-[#121217] border border-white/5 rounded-2xl transition-all cursor-pointer group">
            <div className="flex items-start gap-4">
              <span className="text-[10px] font-mono text-[#89AACC] px-2.5 py-1 bg-black rounded-md">02</span>
              <h4 className="text-base sm:text-lg font-medium text-white group-hover:text-[#89AACC] transition-colors leading-snug">
                The Art of Micro-Animations in React 18
              </h4>
            </div>
            <div className="flex items-center gap-6 text-xs text-[#878787] font-mono mt-4 sm:mt-0 self-end sm:self-center">
              <span>3 min read</span>
              <span>Nov 2025</span>
              <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between p-6 bg-[#0E0E11] hover:bg-[#121217] border border-white/5 rounded-2xl transition-all cursor-pointer group">
            <div className="flex items-start gap-4">
              <span className="text-[10px] font-mono text-[#89AACC] px-2.5 py-1 bg-black rounded-md">03</span>
              <h4 className="text-base sm:text-lg font-medium text-white group-hover:text-[#89AACC] transition-colors leading-snug">
                Why Performance is the Ultimate UX Feature
              </h4>
            </div>
            <div className="flex items-center gap-6 text-xs text-[#878787] font-mono mt-4 sm:mt-0 self-end sm:self-center">
              <span>7 min read</span>
              <span>Dec 2025</span>
              <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between p-6 bg-[#0E0E11] hover:bg-[#121217] border border-white/5 rounded-2xl transition-all cursor-pointer group">
            <div className="flex items-start gap-4">
              <span className="text-[10px] font-mono text-[#89AACC] px-2.5 py-1 bg-black rounded-md">04</span>
              <h4 className="text-base sm:text-lg font-medium text-white group-hover:text-[#89AACC] transition-colors leading-snug">
                Building Resilient Design Systems at Scale
              </h4>
            </div>
            <div className="flex items-center gap-6 text-xs text-[#878787] font-mono mt-4 sm:mt-0 self-end sm:self-center">
              <span>4 min read</span>
              <span>Jan 2026</span>
              <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. EXPLORATIONS (PARALLAX GALLERY) */}
      <section className="bg-[#050507] py-20 px-6 max-w-[1200px] mx-auto text-center border-t border-white/5">
        <div className="mb-12">
          <span className="text-xs text-[#878787] uppercase tracking-[0.3em] font-mono block mb-2">
            EXPLORATIONS
          </span>
          <h2 className="text-4xl sm:text-6xl text-white font-light">
            Visual <em className="font-serif-italic italic font-normal text-[#89AACC]">playground</em>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { id: '1', title: '3D Geometry', img: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85' },
            { id: '2', title: 'Fluid Shaders', img: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85' },
            { id: '3', title: 'Generative Typography', img: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85' },
          ].map((exp) => (
            <div
              key={exp.id}
              onClick={() => setSelectedExploration(exp.img)}
              className="group aspect-square rounded-2xl overflow-hidden bg-[#0E0E11] border border-white/5 relative cursor-pointer hover:border-[#89AACC]/40 transition-all shadow-xl"
            >
              <img src={exp.img} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider bg-black/85 px-4 py-2 rounded-full border border-white/10">
                  Expand &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. STATS SECTION (Contrast & Clean Borders) */}
      <section className="bg-[#050507] py-20 px-6 max-w-[1200px] mx-auto border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 bg-[#0E0E11] border border-white/5 rounded-2xl text-center">
            <div className="text-5xl font-serif-italic italic text-white mb-2">05+</div>
            <div className="text-xs text-[#878787] uppercase tracking-widest font-mono">Years Experience</div>
          </div>
          <div className="p-8 bg-[#0E0E11] border border-white/5 rounded-2xl text-center">
            <div className="text-5xl font-serif-italic italic text-[#89AACC] mb-2">45+</div>
            <div className="text-xs text-[#878787] uppercase tracking-widest font-mono">Projects Delivered</div>
          </div>
          <div className="p-8 bg-[#0E0E11] border border-white/5 rounded-2xl text-center">
            <div className="text-5xl font-serif-italic italic text-white mb-2">100%</div>
            <div className="text-xs text-[#878787] uppercase tracking-widest font-mono">Client Satisfaction</div>
          </div>
        </div>
      </section>

      {/* 7. CONTACT / FOOTER SECTION */}
      <footer id="contact" className="relative bg-black pt-24 pb-12 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-black/80 z-10 pointer-events-none" />

        {/* Marquee Banner */}
        <div className="relative z-20 w-full overflow-hidden border-y border-white/10 py-5 bg-black/60 backdrop-blur-md mb-20">
          <div className="flex whitespace-nowrap animate-marquee">
            <span className="text-2xl sm:text-4xl font-serif-italic text-[#878787] uppercase tracking-wider px-4">
              BUILDING THE FUTURE &bull; CREATIVE FRONTENDS &bull; DESIGN SYSTEMS &bull; INTERACTIVE WEB &bull; BUILDING THE FUTURE &bull;
            </span>
            <span className="text-2xl sm:text-4xl font-serif-italic text-[#878787] uppercase tracking-wider px-4">
              BUILDING THE FUTURE &bull; CREATIVE FRONTENDS &bull; DESIGN SYSTEMS &bull; INTERACTIVE WEB &bull; BUILDING THE FUTURE &bull;
            </span>
          </div>
        </div>

        {/* CTA Content */}
        <div className="relative z-20 max-w-4xl mx-auto text-center px-6 mb-20">
          <h3 className="text-4xl sm:text-6xl font-serif-italic text-white mb-8">
            Let&apos;s build something <em className="italic font-normal text-[#89AACC]">extraordinary</em>.
          </h3>

          <a
            href="mailto:animeshdwivedi577@gmail.com"
            className="group inline-flex items-center gap-3 bg-white text-black font-semibold text-sm sm:text-base rounded-full pl-8 pr-3 py-3.5 hover:bg-neutral-200 transition-colors shadow-2xl"
          >
            <span>animeshdwivedi577@gmail.com</span>
            <div className="bg-black text-white rounded-full p-2.5 group-hover:scale-105 transition-transform">
              <ArrowRight className="w-4 h-4" />
            </div>
          </a>
        </div>

        {/* Footer Bar */}
        <div className="relative z-20 max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#878787] font-mono border-t border-white/10 pt-8">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for freelance projects</span>
          </div>

          <div>&copy; {new Date().getFullYear()} ANIMESH DWIVEDI &middot; ALL RIGHTS RESERVED</div>

          <div className="flex items-center gap-6">
            <a href="https://github.com/anixes" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>

      {/* Lightbox Modal for Explorations */}
      {selectedExploration && (
        <div className="fixed inset-0 z-[10000] bg-black/95 backdrop-blur-xl flex items-center justify-center p-6" onClick={() => setSelectedExploration(null)}>
          <div className="relative max-w-4xl w-full max-h-[85vh] rounded-3xl overflow-hidden border border-white/10">
            <button onClick={() => setSelectedExploration(null)} className="absolute top-4 right-4 text-white bg-black/60 p-3 rounded-full hover:bg-neutral-800">
              <X className="w-6 h-6" />
            </button>
            <img src={selectedExploration} alt="" className="w-full h-full object-contain" />
          </div>
        </div>
      )}
    </div>
  );
};
