import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const MATH_GLYPHS = ['∇', '∑', 'λ', '∂', 'ψ', 'Ω', '0', '1', 'β', 'π', '∆', '∫', 'θ', 'μ', 'σ'];
const TARGET_NAME = 'ANIMESH';

export const KineticHeroTitle: React.FC = () => {
  const [scrambleName, setScrambleName] = useState(TARGET_NAME);
  const [isScrambling, setIsScrambling] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse Parallax Motion Values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Subtle 3D tilt & translation for layered depth behind avatar
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-8, 8]);
  const translateX = useTransform(smoothX, [-0.5, 0.5], [-12, 12]);
  const translateY = useTransform(smoothY, [-0.5, 0.5], [-8, 8]);

  // Handle mouse move relative to window
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth) - 0.5;
      const y = (e.clientY / innerHeight) - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Cyber Scramble / Decoder animation trigger
  const triggerScramble = () => {
    if (isScrambling) return;
    setIsScrambling(true);

    let iteration = 0;
    const maxIterations = TARGET_NAME.length * 3;

    const interval = setInterval(() => {
      setScrambleName(() => {
        return TARGET_NAME.split('')
          .map((letter, idx) => {
            if (idx < iteration / 3) {
              return TARGET_NAME[idx];
            }
            return MATH_GLYPHS[Math.floor(Math.random() * MATH_GLYPHS.length)];
          })
          .join('');
      });

      iteration++;
      if (iteration > maxIterations) {
        clearInterval(interval);
        setScrambleName(TARGET_NAME);
        setIsScrambling(false);
      }
    }, 45);
  };

  // Run decoder once on mount after initial delay
  useEffect(() => {
    const timeout = setTimeout(() => {
      triggerScramble();
    }, 400);
    return () => clearTimeout(timeout);
  }, []);

  const topPhrase = "HI, I'M".split('');

  return (
    <motion.div
      ref={containerRef}
      style={{
        perspective: 1000,
        rotateX,
        rotateY,
        x: translateX,
        y: translateY,
      }}
      className="w-full flex flex-col items-center justify-center text-center select-none transition-transform duration-75"
    >
      {/* Top Line: HI, I'M */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center justify-center gap-1 sm:gap-2 leading-none mb-3 sm:mb-2 -translate-y-4 sm:translate-y-0"
      >
        {topPhrase.map((char, index) => (
          <motion.span
            key={`top-${index}`}
            whileHover={{
              y: -6,
              scale: 1.1,
              color: '#C084FC',
              transition: { type: 'spring', stiffness: 400, damping: 10 },
            }}
            className="hero-heading inline-block font-black uppercase tracking-tight text-white/90 drop-shadow-[0_4px_24px_rgba(255,255,255,0.15)] text-[9vw] xs:text-[10vw] sm:text-[13vw] md:text-[14vw] lg:text-[15vw] cursor-default"
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.div>

      {/* Bottom Line: ANIMESH with iridescent gradient, cyber decoder, & interactive bounce */}
      <motion.div
        initial={{ opacity: 0, y: 35, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        onMouseEnter={triggerScramble}
        onClick={triggerScramble}
        onTouchStart={triggerScramble}
        className="relative group inline-flex items-center justify-center leading-none mt-0.5 sm:mt-2 cursor-pointer touch-manipulation"
      >
        {/* Organic Radial Neon Aura that seamlessly fades to 100% transparent (Zero hard edges) */}
        <div
          className="absolute -inset-x-12 sm:-inset-x-24 -inset-y-10 sm:-inset-y-16 rounded-full pointer-events-none -z-10 opacity-60 group-hover:opacity-100 transition-opacity duration-700 blur-2xl sm:blur-3xl"
          style={{
            background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(168, 85, 247, 0.35) 0%, rgba(99, 102, 241, 0.2) 40%, rgba(56, 189, 248, 0.08) 60%, transparent 80%)',
          }}
        />

        {/* Letters container */}
        <div className="flex items-center justify-center">
          {scrambleName.split('').map((char, index) => (
            <motion.span
              key={`name-${index}-${char}`}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.4,
                delay: index * 0.04,
                type: 'spring',
                stiffness: 300,
                damping: 15,
              }}
              whileHover={{
                y: -12,
                scale: 1.15,
                rotate: (index % 2 === 0 ? 3 : -3),
                transition: { type: 'spring', stiffness: 450, damping: 12 },
              }}
              className="hero-heading inline-block font-black uppercase tracking-tighter text-[13.5vw] xs:text-[14.5vw] sm:text-[16vw] md:text-[17vw] lg:text-[18vw] text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E9D5FF] via-purple-300 to-[#38BDF8] bg-[length:200%_auto] animate-gradient-shift drop-shadow-[0_10px_35px_rgba(168,85,247,0.35)]"
            >
              {char}
            </motion.span>
          ))}
        </div>

        {/* Floating Mini Tech Badge on Hover */}
        <div className="hidden sm:block absolute -bottom-5 sm:-bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
          <span className="px-2.5 py-0.5 rounded-full bg-purple-950/80 border border-purple-500/40 text-[9px] sm:text-[10px] font-mono text-purple-300 uppercase tracking-widest backdrop-blur-md shadow-lg shadow-purple-500/20 whitespace-nowrap">
            [ AI/ML DECODER ACTIVE ]
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
};
