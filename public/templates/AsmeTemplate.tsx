import React from 'react';
import { Globe, ArrowRight, ArrowUpRight, Instagram, Twitter } from 'lucide-react';

/**
 * Asme MotionSites Template Component
 * 
 * Required Tailwind & CSS Setup:
 * 1. Ensure `lucide-react` is installed.
 * 2. Add the custom `.liquid-glass` class to your global CSS:
 *    .liquid-glass {
 *      background: rgba(255, 255, 255, 0.05);
 *      backdrop-filter: blur(16px);
 *      -webkit-backdrop-filter: blur(16px);
 *      border: 1px solid rgba(255, 255, 255, 0.12);
 *    }
 */
export const AsmeTemplate: React.FC = () => {
  return (
    <div className="w-full bg-black text-white font-sans selection:bg-white selection:text-black">
      {/* SECTION 1: HERO */}
      <section className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-bottom z-0"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_074625_a81f018a-956b-43fb-9aee-4d1508e30e6a.mp4"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black z-10" />

        {/* Liquid Glass Pill Navbar */}
        <header className="relative z-20 px-6 py-6 max-w-5xl mx-auto w-full">
          <div className="liquid-glass rounded-full px-6 py-3 flex items-center justify-between shadow-2xl">
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-white" />
              <span className="font-semibold text-lg tracking-tight">Asme</span>
              <nav className="hidden md:flex items-center gap-8 ml-8">
                <a href="#features" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Features</a>
                <a href="#pricing" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Pricing</a>
                <a href="#about" className="text-white/80 hover:text-white text-sm font-medium transition-colors">About</a>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <button className="text-white text-sm font-medium hover:text-white/80 transition-colors">Sign Up</button>
              <button className="liquid-glass rounded-full px-6 py-2 text-white text-sm font-medium hover:bg-white/10 transition-colors">
                Login
              </button>
            </div>
          </div>
        </header>

        {/* Hero Content */}
        <div className="relative z-20 flex-1 flex flex-col items-center justify-center px-6 py-12 text-center -translate-y-6">
          <h1 className="text-6xl sm:text-8xl lg:text-9xl text-white tracking-tight whitespace-nowrap font-serif-italic font-normal mb-8">
            Know it then <em className="italic font-serif-italic">all</em>.
          </h1>

          {/* Liquid Glass Email Input */}
          <div className="max-w-xl w-full mb-6">
            <div className="liquid-glass rounded-full pl-6 pr-2 py-2 flex items-center gap-3 border border-white/20">
              <input
                type="email"
                placeholder="Enter your email for private access…"
                className="w-full bg-transparent text-white text-sm placeholder:text-white/40 focus:outline-none"
              />
              <button className="bg-white rounded-full p-3 text-black hover:scale-105 transition-transform shrink-0">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <p className="text-white/80 text-sm max-w-md leading-relaxed font-light mb-8">
            Stay updated with the latest news, design releases, and creative insights. Subscribe to our newsletter today.
          </p>

          <button className="liquid-glass rounded-full px-8 py-3 text-white text-sm font-medium hover:bg-white/10 transition-colors">
            Read Manifesto
          </button>
        </div>

        {/* Social Icons Footer */}
        <div className="relative z-20 flex justify-center gap-4 pb-12">
          <div className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/10 transition-all cursor-pointer">
            <Instagram className="w-5 h-5" />
          </div>
          <div className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/10 transition-all cursor-pointer">
            <Twitter className="w-5 h-5" />
          </div>
          <div className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/10 transition-all cursor-pointer">
            <Globe className="w-5 h-5" />
          </div>
        </div>
      </section>

      {/* SECTION 2: ABOUT */}
      <section className="bg-black pt-32 pb-16 px-6 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-white/40 text-xs tracking-widest uppercase block mb-6">About Us</span>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl text-white leading-[1.15] tracking-tight font-light max-w-4xl mx-auto">
            Pioneering ideas for minds that <em className="font-serif-italic font-normal text-white/70">create, build, and inspire.</em>
          </h2>
        </div>
      </section>

      {/* SECTION 3: FEATURED VIDEO */}
      <section className="bg-black py-16 px-6">
        <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden aspect-video relative group border border-white/10 shadow-2xl">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260402_054547_9875cfc5-155a-4229-8ec8-b7ba7125cbf8.mp4"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

          {/* Liquid Glass Overlay Card */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 flex flex-col md:flex-row justify-between items-end gap-6">
            <div className="liquid-glass rounded-2xl p-6 md:p-8 max-w-md text-left backdrop-blur-xl">
              <span className="text-white/50 text-xs tracking-widest uppercase block mb-2">Our Approach</span>
              <p className="text-white text-sm sm:text-base leading-relaxed font-light">
                We believe in curiosity-driven exploration. Every project starts with a question, and every answer opens a new door to digital innovation.
              </p>
            </div>

            <button className="liquid-glass rounded-full px-8 py-3.5 text-white text-sm font-medium hover:bg-white/15 transition-all">
              Explore More
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 4: PHILOSOPHY */}
      <section className="bg-black py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl sm:text-7xl lg:text-8xl text-white tracking-tight mb-16">
            Innovation <em className="font-serif-italic font-normal text-white/40">x</em> Vision
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="rounded-3xl overflow-hidden aspect-[4/3] border border-white/10">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4"
              />
            </div>

            <div className="flex flex-col gap-8 text-left">
              <div>
                <span className="text-white/40 text-xs tracking-widest uppercase block mb-3">Choose Your Space</span>
                <p className="text-white/70 text-base sm:text-lg leading-relaxed font-light">
                  Every meaningful breakthrough begins at the intersection of disciplined strategy and remarkable creative vision. We operate at that crossroads.
                </p>
              </div>

              <div className="w-full h-px bg-white/10" />

              <div>
                <span className="text-white/40 text-xs tracking-widest uppercase block mb-3">Shape The Future</span>
                <p className="text-white/70 text-base sm:text-lg leading-relaxed font-light">
                  We believe that the best work emerges when curiosity meets conviction. Our process uncovers hidden opportunities and translates them into tangible outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: SERVICES */}
      <section className="bg-black py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-baseline mb-12">
            <h2 className="text-4xl sm:text-6xl text-white tracking-tight">What We Do</h2>
            <span className="text-white/40 text-sm tracking-widest uppercase hidden sm:inline">Our Services</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="liquid-glass rounded-3xl overflow-hidden group">
              <div className="aspect-video relative overflow-hidden">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
                />
              </div>
              <div className="p-8 text-left">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs uppercase tracking-widest text-white/40">Strategy</span>
                  <div className="liquid-glass rounded-full p-2 text-white">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="text-2xl text-white font-medium mb-2">Research &amp; Insight</h3>
                <p className="text-white/50 text-sm leading-relaxed font-light">
                  We dig deep into data, culture, and human behavior to surface insights that drive meaningful, lasting digital change.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="liquid-glass rounded-3xl overflow-hidden group">
              <div className="aspect-video relative overflow-hidden">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_151826_c7218672-6e92-402c-9e45-f1e0f454bdc4.mp4"
                />
              </div>
              <div className="p-8 text-left">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs uppercase tracking-widest text-white/40">Craft</span>
                  <div className="liquid-glass rounded-full p-2 text-white">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="text-2xl text-white font-medium mb-2">Design &amp; Execution</h3>
                <p className="text-white/50 text-sm leading-relaxed font-light">
                  From concept to launch, we obsess over every detail to deliver web experiences that feel effortless and look extraordinary.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
