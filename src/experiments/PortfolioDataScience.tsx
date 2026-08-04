import React, { useState } from 'react';
import { HeroSection } from '../sections/HeroSection';
import { MarqueeSection } from '../sections/MarqueeSection';
import { AboutSection } from '../sections/AboutSection';
import { ServicesSection } from '../sections/ServicesSection';
import { ProjectsSection } from '../sections/ProjectsSection';
import { Mail, Phone, ArrowUpRight, Github, Linkedin, X } from 'lucide-react';
import { ContactButton } from '../components/ContactButton';
import { FadeIn } from '../components/FadeIn';

export const PortfolioDataScience: React.FC = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleContactClick = () => {
    setIsContactOpen(true);
  };

  return (
    <div className="w-full bg-[#0C0C0C] text-[#D7E2EA] font-sans overflow-x-clip min-h-screen relative pt-14 select-none">
      {/* SECTION 1: HERO */}
      <HeroSection onContactClick={handleContactClick} />

      {/* SECTION 2: MARQUEE */}
      <MarqueeSection />

      {/* SECTION 3: ABOUT */}
      <AboutSection onContactClick={handleContactClick} />

      {/* SECTION 4: SERVICES/SKILLS */}
      <ServicesSection />

      {/* SECTION 5: PROJECTS */}
      <ProjectsSection />

      {/* FOOTER / CONTACT SECTION */}
      <footer id="contact" className="w-full bg-[#0C0C0C] text-[#D7E2EA] px-6 md:px-12 py-20 border-t border-neutral-800/60 relative z-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <FadeIn delay={0} y={20}>
            <div>
              <h3 className="hero-heading font-black uppercase text-3xl sm:text-4xl md:text-5xl tracking-tight mb-2">
                Let’s Work Together
              </h3>
              <p className="text-[#D7E2EA] font-light text-base sm:text-lg opacity-80">
                Building end-to-end AI products, models, and dashboards.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} y={20} className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <div className="flex flex-col gap-2">
              <a
                href="mailto:animeshdwivedi577@gmail.com"
                className="inline-flex items-center gap-2 text-[#D7E2EA] font-medium uppercase tracking-wider text-base sm:text-lg hover:text-white transition-colors border-b border-[#D7E2EA]/40 pb-1"
              >
                <Mail className="w-5 h-5 text-purple-400" aria-hidden="true" />
                animeshdwivedi577@gmail.com
                <ArrowUpRight className="w-4 h-4 opacity-70" aria-hidden="true" />
              </a>
              <a
                href="tel:+916392876782"
                className="inline-flex items-center gap-2 text-[#D7E2EA] font-medium uppercase tracking-wider text-sm sm:text-base hover:text-white transition-colors opacity-80"
              >
                <Phone className="w-4 h-4 text-purple-400" aria-hidden="true" />
                +91 63928 76782
              </a>
            </div>

            <ContactButton onClick={handleContactClick} label="Get In Touch" />
          </FadeIn>
        </div>

        <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-neutral-500 font-light uppercase tracking-widest">
          <p>Copyright {new Date().getFullYear()} Animesh Dwivedi. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
              <Linkedin className="w-4 h-4" aria-hidden="true" /> LinkedIn
            </a>
            <a href="https://github.com/anixes" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
              <Github className="w-4 h-4" aria-hidden="true" /> GitHub
            </a>
          </div>
        </div>
      </footer>

      {/* CONTACT MODAL */}
      {isContactOpen && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#121212] border border-[#D7E2EA]/20 rounded-3xl p-6 sm:p-8 max-w-lg w-full relative shadow-2xl">
            <button
              onClick={() => setIsContactOpen(false)}
              className="absolute top-5 right-5 text-neutral-400 hover:text-white p-3 rounded-full hover:bg-neutral-800 transition-colors focus-visible:ring-2 focus-visible:ring-purple-500/50 focus-visible:outline-none"
              aria-label="Close Modal"
            >
              <X className="w-6 h-6" aria-hidden="true" />
            </button>

            <h3 className="hero-heading font-black uppercase text-2xl sm:text-3xl mb-2">
              Start a Project
            </h3>
            <p className="text-neutral-400 text-sm mb-6">
              Fill out the form below or email <span className="text-[#D7E2EA]">animeshdwivedi577@gmail.com</span> directly.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! Animesh will get back to you shortly.");
                setIsContactOpen(false);
              }}
              className="flex flex-col gap-4"
            >
              <div>
                <label htmlFor="contact-name" className="block text-xs uppercase font-medium text-neutral-400 mb-1">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  placeholder="e.g., Alex Mercer…"
                  autoComplete="name"
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3.5 text-sm text-[#D7E2EA] focus:border-purple-500 focus-visible:ring-2 focus-visible:ring-purple-500/50 focus-visible:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-xs uppercase font-medium text-neutral-400 mb-1">
                  Your Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  placeholder="e.g., alex@company.com…"
                  autoComplete="email"
                  spellCheck={false}
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3.5 text-sm text-[#D7E2EA] focus:border-purple-500 focus-visible:ring-2 focus-visible:ring-purple-500/50 focus-visible:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs uppercase font-medium text-neutral-400 mb-1">
                  Project Details
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Describe your ML model, data pipeline, or application goals…"
                  autoComplete="off"
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3.5 text-sm text-[#D7E2EA] focus:border-purple-500 focus-visible:ring-2 focus-visible:ring-purple-500/50 focus-visible:outline-none transition-colors resize-none"
                />
              </div>

              <div className="mt-2 flex justify-end">
                <ContactButton label="Send Message" />
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
