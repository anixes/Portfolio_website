import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Layout, Sparkles, CheckCircle2, Star, Mail, Phone, X, ShieldCheck, Zap, Layers, Globe } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';

interface FreelanceDesignProProps {
  onBackToPortal?: () => void;
}

const designServices = [
  {
    number: '01',
    name: 'Web Design & Creative Direction',
    description: 'Custom high-fidelity visual layouts, grid architectures, tailored color palettes, and typography built to elevate brand perception and double conversion rates.',
  },
  {
    number: '02',
    name: 'React & Tailwind Development',
    description: 'Pixel-faithful, responsive frontend engineering using React 18, TypeScript, and Tailwind CSS. Clean, componentized code built for speed and maintainability.',
  },
  {
    number: '03',
    name: 'Interactive Motion & Micro-Interactions',
    description: 'Dynamic entrance triggers, scroll-driven animations with Framer Motion, magnetic cursor behaviors, and WebGL effects that make your site feel alive.',
  },
  {
    number: '04',
    name: 'UI/UX Audit & Conversion Optimization',
    description: 'Auditing user journeys, eliminating navigation friction, improving form conversion flows, and ensuring full WCAG 2.2 accessibility compliance.',
  },
  {
    number: '05',
    name: 'Page Speed & SEO Engineering',
    description: 'Achieving 95+ Lighthouse scores, optimizing Core Web Vitals (INP, CLS), embedding JSON-LD schema markup, and allowing AI search engines to cite your brand.',
  },
];

const designProjects = [
  {
    number: '01',
    name: 'Nextlevel Studio',
    category: 'Client Work & Design System',
    col1Img1: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
    col1Img2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
    col2Img: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
    metrics: [
      { label: 'Lighthouse Score', value: '98/100', color: 'text-emerald-400' },
      { label: 'Conversion Lift', value: '+42%', color: 'text-cyan-400' },
      { label: 'Load Time', value: '0.6s', color: 'text-purple-400' },
    ],
  },
  {
    number: '02',
    name: 'Aura Brand Identity',
    category: 'Branding & Layout System',
    col1Img1: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
    col1Img2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
    col2Img: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
    metrics: [
      { label: 'Design Tokens', value: '120+ Components', color: 'text-purple-400' },
      { label: 'Mobile Score', value: '100% Touch-First', color: 'text-emerald-400' },
      { label: 'Asset Savings', value: '65% Shrunk', color: 'text-blue-400' },
    ],
  },
  {
    number: '03',
    name: 'Solaris Digital',
    category: 'Client Work & Web App Frontend',
    col1Img1: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
    col1Img2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
    col2Img: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
    metrics: [
      { label: 'INP Latency', value: '< 12ms', color: 'text-cyan-400' },
      { label: 'SEO Authority', value: 'Top 1% Structured', color: 'text-emerald-400' },
      { label: 'User Retention', value: '3.4x Higher', color: 'text-amber-400' },
    ],
  },
];

export const FreelanceDesignPro: React.FC<FreelanceDesignProProps> = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="w-full bg-[#07090E] text-[#D7E2EA] font-sans selection:bg-cyan-500 selection:text-white pt-20">
      {/* Header / Navbar */}
      <header className="fixed top-4 left-0 right-0 z-50 px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center font-black text-cyan-300 text-sm">
            ad.
          </div>
          <span className="font-bold text-white uppercase text-sm tracking-wider hidden sm:inline">
            Animesh Dwivedi &middot; Studio
          </span>
        </div>

        <nav className="flex items-center gap-2 bg-black/60 border border-cyan-500/20 backdrop-blur-xl px-4 py-2 rounded-full">
          <a href="#services" className="px-3 py-1 text-xs uppercase tracking-wider text-neutral-300 hover:text-cyan-300">
            Services
          </a>
          <a href="#projects" className="px-3 py-1 text-xs uppercase tracking-wider text-neutral-300 hover:text-cyan-300">
            Showcase
          </a>
          <button
            onClick={() => setIsContactOpen(true)}
            className="px-4 py-1.5 text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full hover:scale-105 transition-all shadow-md shadow-cyan-500/20"
          >
            Hire Me
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] w-full flex flex-col justify-center items-center text-center px-6 pt-24 pb-16 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

        <FadeIn delay={0} y={20}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-bold uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5" /> Freelance Web Design &amp; Development
          </div>
        </FadeIn>

        <FadeIn delay={0.1} y={30}>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase text-white tracking-tighter leading-none max-w-5xl">
            CRAFTING STRIKING WEBSITES THAT CONVERT
          </h1>
        </FadeIn>

        <FadeIn delay={0.2} y={30}>
          <p className="mt-6 text-base sm:text-xl text-neutral-400 font-light max-w-2xl leading-relaxed">
            I partner with founders, agencies, and businesses to build high-end web experiences, bespoke design systems, and responsive React applications.
          </p>
        </FadeIn>

        <FadeIn delay={0.3} y={30} className="flex flex-wrap gap-4 justify-center mt-10">
          <button
            onClick={() => setIsContactOpen(true)}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold uppercase tracking-wider text-sm rounded-full hover:scale-105 active:scale-95 transition-all shadow-lg shadow-cyan-500/30 flex items-center gap-2"
          >
            Start Your Project <ArrowUpRight className="w-4 h-4" />
          </button>
          <a
            href="#projects"
            className="px-8 py-4 border border-cyan-500/30 text-cyan-300 font-bold uppercase tracking-wider text-sm rounded-full hover:border-cyan-400 hover:bg-cyan-500/5 transition-all"
          >
            View Work Showcase
          </a>
        </FadeIn>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl w-full">
          <div className="border border-neutral-800 bg-black/40 backdrop-blur-md p-4 rounded-2xl text-center">
            <Zap className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
            <div className="text-sm font-bold text-white uppercase">98+ Speed Score</div>
            <div className="text-[10px] text-neutral-400 uppercase">Lighthouse Verified</div>
          </div>
          <div className="border border-neutral-800 bg-black/40 backdrop-blur-md p-4 rounded-2xl text-center">
            <Layers className="w-6 h-6 text-purple-400 mx-auto mb-2" />
            <div className="text-sm font-bold text-white uppercase">Custom Design</div>
            <div className="text-[10px] text-neutral-400 uppercase">No Generic Templates</div>
          </div>
          <div className="border border-neutral-800 bg-black/40 backdrop-blur-md p-4 rounded-2xl text-center">
            <Globe className="w-6 h-6 text-blue-400 mx-auto mb-2" />
            <div className="text-sm font-bold text-white uppercase">100% Responsive</div>
            <div className="text-[10px] text-neutral-400 uppercase">Touch-First Native</div>
          </div>
          <div className="border border-neutral-800 bg-black/40 backdrop-blur-md p-4 rounded-2xl text-center">
            <ShieldCheck className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
            <div className="text-sm font-bold text-white uppercase">SEO &amp; AI Citable</div>
            <div className="text-[10px] text-neutral-400 uppercase">JSON-LD Schema Included</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full bg-white text-[#0C0C0C] py-24 px-6 md:px-12 rounded-t-[40px] md:rounded-t-[60px]">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <h2 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tight text-center mb-16 select-none">
            Services
          </h2>

          <div className="w-full flex flex-col border-t border-neutral-300">
            {designServices.map((srv, idx) => (
              <div key={srv.number} className="border-b border-neutral-300 py-10 flex flex-col md:flex-row justify-between gap-6">
                <div className="text-4xl sm:text-6xl font-black text-neutral-900 font-mono shrink-0">{srv.number}</div>
                <div className="flex flex-col gap-2 max-w-2xl">
                  <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-neutral-900">{srv.name}</h3>
                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-light">{srv.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Projects */}
      <section id="projects" className="w-full bg-[#07090E] py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl sm:text-7xl font-black uppercase text-center text-white tracking-tight mb-16">
            Client Showcase
          </h2>

          <div className="flex flex-col gap-16">
            {designProjects.map((prj) => (
              <div key={prj.number} className="border border-cyan-500/20 bg-neutral-950 p-6 sm:p-10 rounded-3xl flex flex-col gap-8 shadow-2xl">
                <div className="flex flex-wrap justify-between items-center gap-4 border-b border-neutral-800 pb-6">
                  <div>
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">{prj.category}</span>
                    <h3 className="text-2xl sm:text-4xl font-black text-white uppercase">{prj.name}</h3>
                  </div>
                  <div className="flex gap-3">
                    {prj.metrics.map((m, i) => (
                      <div key={i} className="text-center bg-neutral-900 border border-neutral-800 px-4 py-2 rounded-xl">
                        <div className={`text-lg font-black ${m.color}`}>{m.value}</div>
                        <div className="text-[10px] text-neutral-400 uppercase font-mono">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  <div className="lg:col-span-5 flex flex-col gap-6">
                    <img src={prj.col1Img1} alt="" className="w-full h-48 object-cover rounded-2xl border border-neutral-800" />
                    <img src={prj.col1Img2} alt="" className="w-full h-64 object-cover rounded-2xl border border-neutral-800" />
                  </div>
                  <div className="lg:col-span-7">
                    <img src={prj.col2Img} alt="" className="w-full h-full min-h-[320px] object-cover rounded-2xl border border-neutral-800" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / CTA */}
      <footer className="w-full bg-[#05060A] text-white py-20 px-6 md:px-12 border-t border-neutral-800">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div>
            <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">Have a Design Project?</h3>
            <p className="text-neutral-400 text-sm mt-2">Let’s build something extraordinary together.</p>
          </div>
          <button
            onClick={() => setIsContactOpen(true)}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold uppercase tracking-wider text-sm rounded-full hover:scale-105 transition-all shadow-lg shadow-cyan-500/20"
          >
            Book Free Consultation
          </button>
        </div>
      </footer>

      {/* Contact Modal */}
      {isContactOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-neutral-900 border border-cyan-500/30 p-8 rounded-3xl max-w-lg w-full relative shadow-2xl">
            <button onClick={() => setIsContactOpen(false)} className="absolute top-5 right-5 text-neutral-400 hover:text-white p-2">
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-2xl font-black text-white uppercase mb-2">Book Your Project</h3>
            <p className="text-xs text-neutral-400 mb-6">Tell me about your web design, React frontend, or landing page needs.</p>
            <form onSubmit={(e) => { e.preventDefault(); alert("Enquiry sent! Animesh will contact you shortly."); setIsContactOpen(false); }} className="flex flex-col gap-4">
              <input type="text" required placeholder="Your Name" className="bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400" />
              <input type="email" required placeholder="Your Email" className="bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400" />
              <textarea rows={4} required placeholder="Project description & timeline..." className="bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 resize-none" />
              <button type="submit" className="py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold uppercase tracking-wider text-xs rounded-full">
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
