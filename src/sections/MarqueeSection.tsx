import React, { useState, useEffect, useRef } from 'react';

const row1Images = [
  '/images/marquee/hero-space-voyage-preview-eECLH3Yc.gif',
  '/images/marquee/hero-codenest-preview-Cgppc2qV.gif',
  '/images/marquee/hero-vex-ventures-preview-BczMFIiw.gif',
  '/images/marquee/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  '/images/marquee/hero-asme-preview-B_nGDnTP.gif',
  '/images/marquee/hero-transform-data-preview-Cx5OU29N.gif',
  '/images/marquee/hero-vitara-preview-Cjz2QYyU.gif',
  '/images/marquee/hero-terra-preview-BFjrCr7T.gif',
  '/images/marquee/hero-skyelite-preview-DHaZIgUv.gif',
  '/images/marquee/hero-aethera-preview-DknSlcTa.gif',
  '/images/marquee/hero-designpro-preview-D8c5_een.gif',
];

const row2Images = [
  '/images/marquee/hero-stellar-ai-preview-D3HL6bw1.gif',
  '/images/marquee/hero-xportfolio-preview-D4A8maiC.gif',
  '/images/marquee/hero-orbit-web3-preview-BXt4OttD.gif',
  '/images/marquee/hero-nexora-preview-cx5HmUgo.gif',
  '/images/marquee/hero-evr-ventures-preview-DZxeVFEX.gif',
  '/images/marquee/hero-planet-orbit-preview-DWAP8Z1P.gif',
  '/images/marquee/hero-new-era-preview-CocuDUm9.gif',
  '/images/marquee/hero-wealth-preview-B70idl_u.gif',
  '/images/marquee/hero-luminex-preview-CxOP7ce6.gif',
  '/images/marquee/hero-celestia-preview-0yO3jXO8.gif',
];

// Tripled lists for infinite continuous look
const tripledRow1 = [...row1Images, ...row1Images, ...row1Images];
const tripledRow2 = [...row2Images, ...row2Images, ...row2Images];

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollOffset, setScrollOffset] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!sectionRef.current) return;
          const rect = sectionRef.current.getBoundingClientRect();
          const sectionTop = window.scrollY + rect.top;
          const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
          setScrollOffset(offset);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const displayRow1 = isMobile ? [...row1Images.slice(0, 6), ...row1Images.slice(0, 6)] : tripledRow1;
  const displayRow2 = isMobile ? [...row2Images.slice(0, 6), ...row2Images.slice(0, 6)] : tripledRow2;

  const row1Transform = scrollOffset - 200;
  const row2Transform = -(scrollOffset - 200);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#0C0C0C] pt-16 sm:pt-28 md:pt-36 pb-8 sm:pb-10 overflow-hidden flex flex-col gap-2.5 sm:gap-3"
    >
      {/* Row 1: Moves RIGHT on scroll */}
      <div
        className="flex gap-2.5 sm:gap-3 w-max"
        style={{
          transform: `translateX(${row1Transform}px)`,
          willChange: 'transform',
        }}
      >
        {displayRow1.map((src, idx) => (
          <div
            key={`r1-${idx}`}
            className="w-[200px] xs:w-[240px] sm:w-[360px] md:w-[420px] h-[130px] xs:h-[155px] sm:h-[230px] md:h-[270px] rounded-xl sm:rounded-2xl overflow-hidden flex-shrink-0 bg-neutral-900 border border-neutral-800/40"
          >
            <img
              src={src}
              alt={`3D Motion Preview ${idx + 1}`}
              loading="lazy"
              className="w-full h-full object-cover select-none"
            />
          </div>
        ))}
      </div>

      {/* Row 2: Moves LEFT on scroll */}
      <div
        className="flex gap-2.5 sm:gap-3 w-max"
        style={{
          transform: `translateX(${row2Transform}px)`,
          willChange: 'transform',
        }}
      >
        {displayRow2.map((src, idx) => (
          <div
            key={`r2-${idx}`}
            className="w-[200px] xs:w-[240px] sm:w-[360px] md:w-[420px] h-[130px] xs:h-[155px] sm:h-[230px] md:h-[270px] rounded-xl sm:rounded-2xl overflow-hidden flex-shrink-0 bg-neutral-900 border border-neutral-800/40"
          >
            <img
              src={src}
              alt={`3D Motion Preview Row 2 ${idx + 1}`}
              loading="lazy"
              className="w-full h-full object-cover select-none"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
