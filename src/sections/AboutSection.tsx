import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { AnimatedText } from '../components/AnimatedText';
import { ContactButton } from '../components/ContactButton';

interface AboutSectionProps {
  onContactClick?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onContactClick }) => {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Corner Decorative 3D Images */}
      {/* Top-Left: Moon icon */}
      <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] pointer-events-none z-10">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
            alt=""
            aria-hidden="true"
            loading="lazy"
            width="210"
            height="210"
            className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain select-none opacity-90 drop-shadow-xl"
          />
        </FadeIn>
      </div>

      {/* Bottom-Left: 3D Object */}
      <div className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] pointer-events-none z-10">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
            alt=""
            aria-hidden="true"
            loading="lazy"
            width="180"
            height="180"
            className="w-[100px] sm:w-[140px] md:w-[180px] h-auto object-contain select-none opacity-90 drop-shadow-xl"
          />
        </FadeIn>
      </div>

      {/* Top-Right: Lego icon */}
      <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] pointer-events-none z-10">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
            alt=""
            aria-hidden="true"
            loading="lazy"
            width="210"
            height="210"
            className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain select-none opacity-90 drop-shadow-xl"
          />
        </FadeIn>
      </div>

      {/* Bottom-Right: 3D Group */}
      <div className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] pointer-events-none z-10">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
            alt=""
            aria-hidden="true"
            loading="lazy"
            width="220"
            height="220"
            className="w-[130px] sm:w-[170px] md:w-[220px] h-auto object-contain select-none opacity-90 drop-shadow-xl"
          />
        </FadeIn>
      </div>

      {/* Center Content Container */}
      <div className="relative z-20 flex flex-col items-center justify-center max-w-4xl text-center">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center select-none"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        {/* Gap between heading & text */}
        <div className="mt-10 sm:mt-14 md:mt-16 mb-16 sm:mb-20 md:mb-24 w-full flex justify-center">
          <AnimatedText
            text="I am a Data Scientist and Machine Learning Engineer focused on building end-to-end AI and data products: from analytics to feature engineering, modeling, and production deployment. I specialize in building deployed applications combining predictive modeling, recommendation systems, SQL analytics, containerized APIs, dashboards, CI/CD automation, and cloud deployment workflows."
            className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px]"
          />
        </div>

        {/* Contact Button */}
        <FadeIn delay={0.4} y={20}>
          <ContactButton onClick={onContactClick} />
        </FadeIn>
      </div>
    </section>
  );
};
