import React from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

/**
 * Prisma MotionSites Template Component
 * 
 * Required Tailwind & CSS Setup:
 * 1. Ensure `framer-motion` and `lucide-react` are installed.
 * 2. Add the custom `.noise-overlay` class to your global CSS:
 *    .noise-overlay {
 *      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
 *    }
 */
export const PrismaTemplate: React.FC = () => {
  const headingRef = React.useRef(null);
  const isHeadingInView = useInView(headingRef, { once: true });

  const titleWords = ['P', 'r', 'i', 's', 'm', 'a'];

  return (
    <div className="w-full bg-black text-[#DEDBC8] min-h-screen selection:bg-[#DEDBC8] selection:text-black">
      {/* SECTION 1: HERO */}
      <section className="h-screen w-full p-3 sm:p-6">
        <div className="relative w-full h-full rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-black flex flex-col justify-between">
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
          />

          {/* Noise & Gradient Overlays */}
          <div className="absolute inset-0 noise-overlay opacity-60 mix-blend-overlay pointer-events-none z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80 z-10" />

          {/* Hanging Pill Navbar */}
          <header className="relative z-20 mx-auto mt-0">
            <div className="bg-black/90 backdrop-blur-md rounded-b-2xl md:rounded-b-3xl px-6 py-3 border border-t-0 border-[#DEDBC8]/20 flex items-center gap-6 sm:gap-10 text-xs sm:text-sm font-medium tracking-wide">
              <a href="#story" className="text-[#E1E0CC]/80 hover:text-[#E1E0CC] transition-colors">Our story</a>
              <a href="#collective" className="text-[#E1E0CC]/80 hover:text-[#E1E0CC] transition-colors">Collective</a>
              <a href="#workshops" className="text-[#E1E0CC]/80 hover:text-[#E1E0CC] transition-colors">Workshops</a>
              <a href="#programs" className="text-[#E1E0CC]/80 hover:text-[#E1E0CC] transition-colors">Programs</a>
              <a href="#inquiries" className="text-[#E1E0CC]/80 hover:text-[#E1E0CC] transition-colors">Inquiries</a>
            </div>
          </header>

          {/* Hero Bottom Content Grid */}
          <div className="relative z-20 p-6 sm:p-10 md:p-14 mt-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 flex items-baseline relative" ref={headingRef}>
              <h1 className="text-[22vw] sm:text-[20vw] lg:text-[18vw] font-medium leading-[0.8] tracking-[-0.07em] text-[#E1E0CC] select-none flex">
                {titleWords.map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isHeadingInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-block relative"
                  >
                    {char}
                    {index === titleWords.length - 1 && (
                      <sup className="absolute -top-[0.2em] -right-[0.35em] text-[0.3em] font-light text-[#DEDBC8]">
                        *
                      </sup>
                    )}
                  </motion.span>
                ))}
              </h1>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end gap-6 text-left lg:text-right">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-[#DEDBC8]/80 text-xs sm:text-sm md:text-base leading-relaxed max-w-md font-light"
              >
                Prisma is a worldwide collective of visual designers, frontend architects, and digital storytellers unlocking extraordinary potential through unique perspectives.
              </motion.p>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="group inline-flex items-center gap-3 bg-[#DEDBC8] text-black font-semibold text-sm sm:text-base rounded-full pl-6 pr-2 py-2 hover:gap-4 transition-all shadow-xl"
              >
                <span>Join the lab</span>
                <div className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-[#DEDBC8] group-hover:scale-110 transition-transform">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: ABOUT */}
      <section className="bg-black py-28 px-6 flex justify-center items-center">
        <div className="bg-[#101010] border border-neutral-800 rounded-3xl p-8 sm:p-16 max-w-5xl w-full text-center">
          <span className="text-[#DEDBC8] text-xs uppercase tracking-widest font-semibold block mb-8">
            Visual Arts &amp; Direction
          </span>

          <h2 className="text-3xl sm:text-5xl md:text-6xl text-[#E1E0CC] font-normal leading-[1.1] max-w-3xl mx-auto mb-10">
            Creative direction for <em className="italic font-normal text-white">modern digital brands.</em>
          </h2>

          <p className="text-[#DEDBC8]/70 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Crafting digital products that earn international recognition across major platforms through refined motion, clear layout hierarchy, and high-performance frontend engineering.
          </p>
        </div>
      </section>

      {/* SECTION 3: FEATURES GRID */}
      <section className="min-h-screen bg-black py-24 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-4xl text-[#E1E0CC] font-normal">
              Studio-grade workflows for visionary creators.
            </h2>
            <p className="text-neutral-500 text-lg mt-2">Built for pure vision. Powered by art.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Card 1: Video Card */}
            <div className="relative rounded-3xl overflow-hidden min-h-[420px] bg-neutral-900 border border-neutral-800 flex flex-col justify-end p-6 group">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <p className="relative z-10 text-xl font-medium text-[#E1E0CC]">Your creative canvas.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#212121] border border-neutral-800 rounded-3xl p-6 flex flex-col justify-between min-h-[420px]">
              <div>
                <span className="text-xs text-neutral-500 font-mono">01</span>
                <h3 className="text-xl font-medium text-white mt-2 mb-6">Project Storyboard</h3>
                <ul className="space-y-3 text-xs text-neutral-400">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#DEDBC8]" /> Custom visual direction</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#DEDBC8]" /> Interactive prototypes</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#DEDBC8]" /> Frame-by-frame motion</li>
                </ul>
              </div>
              <button className="inline-flex items-center gap-2 text-xs font-semibold text-[#DEDBC8] uppercase tracking-wider hover:gap-3 transition-all">
                Learn more <ArrowRight className="w-4 h-4 -rotate-45" />
              </button>
            </div>

            {/* Card 3 */}
            <div className="bg-[#212121] border border-neutral-800 rounded-3xl p-6 flex flex-col justify-between min-h-[420px]">
              <div>
                <span className="text-xs text-neutral-500 font-mono">02</span>
                <h3 className="text-xl font-medium text-white mt-2 mb-6">Smart Critiques</h3>
                <ul className="space-y-3 text-xs text-neutral-400">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#DEDBC8]" /> Automated UX audits</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#DEDBC8]" /> Accessibility checks</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#DEDBC8]" /> Micro-interaction reviews</li>
                </ul>
              </div>
              <button className="inline-flex items-center gap-2 text-xs font-semibold text-[#DEDBC8] uppercase tracking-wider hover:gap-3 transition-all">
                Learn more <ArrowRight className="w-4 h-4 -rotate-45" />
              </button>
            </div>

            {/* Card 4 */}
            <div className="bg-[#212121] border border-neutral-800 rounded-3xl p-6 flex flex-col justify-between min-h-[420px]">
              <div>
                <span className="text-xs text-neutral-500 font-mono">03</span>
                <h3 className="text-xl font-medium text-white mt-2 mb-6">Immersion Capsule</h3>
                <ul className="space-y-3 text-xs text-neutral-400">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#DEDBC8]" /> 60fps Framer Motion</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#DEDBC8]" /> WebGL Shaders</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#DEDBC8]" /> Zero-lag responsiveness</li>
                </ul>
              </div>
              <button className="inline-flex items-center gap-2 text-xs font-semibold text-[#DEDBC8] uppercase tracking-wider hover:gap-3 transition-all">
                Learn more <ArrowRight className="w-4 h-4 -rotate-45" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
