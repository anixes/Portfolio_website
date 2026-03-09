'use client';

import React, { useState, useEffect } from 'react';
import { Github, ArrowUpRight, ArrowLeft } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { Environment, Float, Sphere } from '@react-three/drei';
import * as THREE from 'three';

function FloatingSpheres() {
  const material = new THREE.MeshPhysicalMaterial({
    color: '#ffffff',
    metalness: 0.1,
    roughness: 0.2,
    transmission: 0.9,
    ior: 1.5,
    thickness: 2,
    clearcoat: 1,
    clearcoatRoughness: 0.1,
  });

  return (
    <>
      <Environment preset="city" />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Sphere args={[1.4, 64, 64]} position={[-2, 1.5, -1]} material={material} />
      </Float>
      
      <Float speed={1.5} rotationIntensity={1} floatIntensity={1.5}>
        <Sphere args={[0.95, 64, 64]} position={[2.5, -0.5, 1]} material={material} />
      </Float>
      
      <Float speed={2.5} rotationIntensity={1} floatIntensity={2}>
        <Sphere args={[0.65, 64, 64]} position={[-1, -1.5, 0]} material={material} />
      </Float>
      
      <Float speed={1.8} rotationIntensity={1} floatIntensity={1.8}>
        <Sphere args={[1.1, 64, 64]} position={[3, 2, -2]} material={material} />
      </Float>
      
      <Float speed={3} rotationIntensity={1} floatIntensity={1.5}>
        <Sphere args={[0.5, 64, 64]} position={[0.5, 0.5, 2]} material={material} />
      </Float>
    </>
  );
}

export default function App() {
  const [view, setView] = useState('hero'); // 'hero', 'grid', 'projects', 'about', 'notes'
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [titlePhase, setTitlePhase] = useState(0); 

  useEffect(() => {
    if (view !== 'hero') return;
    if (loadingProgress < 100) {
      const timer = setTimeout(() => setLoadingProgress(p => Math.min(p + 2, 100)), 25);
      return () => clearTimeout(timer);
    }
  }, [view, loadingProgress]);

  useEffect(() => {
    if (view === 'hero' && loadingProgress === 100) {
      if (titlePhase === 0) {
        const timer = setTimeout(() => setTitlePhase(1), 100);
        return () => clearTimeout(timer);
      } else if (titlePhase === 1) {
        const timer = setTimeout(() => setTitlePhase(2), 1200);
        return () => clearTimeout(timer);
      } else if (titlePhase === 2) {
        const timer = setTimeout(() => setTitlePhase(3), 1300);
        return () => clearTimeout(timer);
      }
    }
  }, [view, loadingProgress, titlePhase]);

  const getBgColor = () => {
    if (view === 'hero') return 'bg-[#a8b4c4]';
    if (view === 'grid' || view === 'about' || view === 'notes') return 'bg-[#050505]';
    if (view === 'projects') return 'bg-[#fcfcfc]';
    return 'bg-[#a8b4c4]';
  };

  const customStyles = `
    .noise-overlay {
      position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
      pointer-events: none; z-index: 50; opacity: 0.04;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
    }
    .smooth-transition {
      transition: all 1.2s cubic-bezier(0.76, 0, 0.24, 1);
    }
    .hide-scrollbar::-webkit-scrollbar { display: none; }
    .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
  `;

  return (
    <div className={`relative w-full h-screen overflow-hidden smooth-transition ${getBgColor()} font-sans`}>
      <style>{customStyles}</style>
      <div className={`noise-overlay smooth-transition ${view === 'projects' ? 'opacity-[0.02]' : 'opacity-[0.06]'}`}></div>

      {/* --- VIEW 1: HERO (THE SPLINE VIBE) --- */}
      <div 
        className={`absolute inset-0 flex flex-col items-center justify-center cursor-pointer smooth-transition origin-center
          ${view === 'hero' ? 'opacity-100 z-20 scale-100' : 'opacity-0 pointer-events-none scale-105'}`}
        onClick={() => { if (loadingProgress === 100) setView('grid'); }}
      >
        {/* Soft 3D Background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-90">
          <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
            <FloatingSpheres />
          </Canvas>
        </div>

        {/* Foreground Content */}
        <div className={`relative z-10 flex flex-col items-center text-center smooth-transition ${titlePhase > 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {loadingProgress < 100 ? (
             <div className="flex flex-col items-center w-64">
               <div className="flex justify-between w-full text-xs font-mono text-gray-800 mb-2 tracking-widest uppercase">
                 <span>Loading Data</span>
                 <span>{loadingProgress}%</span>
               </div>
               <div className="w-full h-[1px] bg-gray-500/30 overflow-hidden">
                 <div className="h-full bg-white transition-all duration-75" style={{ width: `${loadingProgress}%` }} />
               </div>
             </div>
          ) : (
            <div>
               <h1 className="text-[5.5rem] md:text-[9rem] leading-none font-black text-white tracking-tighter drop-shadow-2xl select-none mix-blend-overlay">
                 ANIMESH
               </h1>
               <div className="h-12 mt-2 flex items-center justify-center relative">
                  <p className={`text-xl md:text-3xl font-bold text-gray-800 transition-opacity duration-700 absolute ${titlePhase >= 1 && titlePhase < 3 ? 'opacity-100' : 'opacity-0'}`}>
                    data scientist.
                  </p>
                  <p className={`text-xl md:text-3xl font-bold text-gray-800 transition-opacity duration-700 absolute ${titlePhase === 3 ? 'opacity-100' : 'opacity-0'}`}>
                    machine learning engineer.
                  </p>
               </div>
               <p className="mt-20 text-xs font-mono text-gray-700 animate-pulse tracking-widest uppercase bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm border border-white/30">
                 Click anywhere to enter
               </p>
            </div>
          )}
        </div>

        {/* Footer Credit */}
        <div className="absolute bottom-8 right-10 text-[10px] font-mono text-gray-700 uppercase tracking-widest flex items-center gap-3">
           <div className="w-12 h-[1px] bg-gray-700"></div>
           Made with React, Next.js, and Three.js
        </div>
      </div>

      {/* --- VIEW 2: NAVIGATION GRID (THE STITCH VIBE) --- */}
      <div 
        className={`absolute inset-0 text-[#fcfcfc] smooth-transition origin-center
          ${view === 'grid' ? 'opacity-100 z-20 scale-100 pointer-events-auto' : 'opacity-0 z-0 scale-95 pointer-events-none'}`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-4 md:grid-rows-2 h-full w-full gap-[1px] bg-[#222]">
          
          <div onClick={() => setView('projects')} className="bg-[#0a0a0a] hover:bg-[#111] transition-all duration-300 flex items-center justify-center p-10 cursor-pointer group">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-gray-400 group-hover:text-white transition-colors">
              <span className="group-hover:underline decoration-4 underline-offset-[12px]">Projects.</span>
            </h2>
          </div>

          <div onClick={() => setView('about')} className="bg-[#0a0a0a] hover:bg-[#111] transition-all duration-300 flex items-center justify-center p-10 cursor-pointer group">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-gray-400 group-hover:text-white transition-colors">
              <span className="group-hover:underline decoration-4 underline-offset-[12px]">About.</span>
            </h2>
          </div>

          <div onClick={() => setView('notes')} className="bg-[#0a0a0a] hover:bg-[#111] transition-all duration-300 flex items-center justify-center p-10 cursor-pointer group relative">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-gray-600 group-hover:text-white transition-colors">
              <span className="group-hover:underline decoration-4 underline-offset-[12px]">Notes.</span>
            </h2>
          </div>

          <div className="bg-[#0a0a0a] hover:bg-[#111] transition-all duration-300 flex flex-col items-start justify-end p-12 md:p-20 group">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-10 text-gray-400 group-hover:text-white transition-colors">Contact.</h2>
            <div className="space-y-4 text-sm md:text-base font-mono text-gray-500 w-full pointer-events-auto">
              <a href="mailto:animesh@anixes.in" className="flex items-center justify-between hover:text-white transition-colors border-b border-[#333] pb-3 w-full">
                animesh@anixes.in <ArrowUpRight size={18} />
              </a>
              <a href="https://github.com/animesh" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between hover:text-white transition-colors border-b border-[#333] pb-3 w-full">
                github.com/animesh <ArrowUpRight size={18} />
              </a>
              <a href="https://linkedin.com/in/animesh" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between hover:text-white transition-colors border-b border-[#333] pb-3 w-full">
                linkedin.com/in/animesh <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Center Logo - Returns to Hero */}
        <div onClick={() => setView('hero')} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
          <div className="h-20 w-20 md:h-24 md:w-24 bg-[#0a0a0a] rounded-full flex items-center justify-center border border-[#333] shadow-2xl cursor-pointer hover:scale-110 hover:border-gray-400 transition-all duration-500 ease-out">
            <span className="text-2xl md:text-3xl font-black text-white tracking-tighter">A.</span>
          </div>
        </div>
      </div>

      {/* --- VIEW 3: PROJECTS LIST (THE DATA/TECH VIBE) --- */}
      <div 
        className={`absolute inset-0 flex flex-col md:flex-row text-[#050505] smooth-transition
          ${view === 'projects' ? 'opacity-100 z-20 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'}`}
      >
        {/* Left Sidebar Index - Slides in from left */}
        <div 
          className={`md:w-[30%] h-auto md:h-screen sticky top-0 md:fixed left-0 border-b md:border-b-0 md:border-r border-gray-200 p-8 md:p-16 overflow-y-auto hide-scrollbar z-10 flex flex-col justify-between smooth-transition delay-100
            ${view === 'projects' ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'}`}
        >
          <div>
            <button onClick={() => setView('grid')} className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest mb-16 text-gray-500 hover:text-black transition-colors">
              <ArrowLeft size={16} /> Back to Grid
            </button>
            <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-6">Index.</h1>
            <p className="text-gray-500 text-sm leading-relaxed mb-16 max-w-[250px]">
              My adventure with datasets, machine learning models, and algorithms to discover new patterns.
            </p>
            <div className="mb-12">
              <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-5">By Technology:</h3>
              <ul className="space-y-3 font-mono text-xs text-gray-800">
                {['/00 Python', '/01 SQL', '/02 Next.js', '/03 TensorFlow', '/04 Scikit-Learn'].map((tech, i) => (
                  <li key={i} className="flex hover:underline cursor-pointer hover:text-black">
                    <span className="w-10 text-gray-400">{tech.split(' ')[0]}</span>
                    <span>{tech.split(' ')[1]}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="hidden md:block">
             <div className="h-[1px] w-full bg-gray-200 mb-6"></div>
             <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">© 2026 ANIMESH DWIVEDI</p>
          </div>
        </div>

        {/* Right Scrollable Content - Slides up from bottom */}
        <div 
          className={`w-full md:w-[70%] md:ml-[30%] h-screen overflow-y-auto p-8 md:p-24 smooth-transition delay-150
            ${view === 'projects' ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'}`}
        >
          <h2 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-16 border-b border-gray-200 pb-4">
            Selected Works
          </h2>

          <div className="mb-40 group">
            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-6">
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-sm text-gray-400">/2026</span>
                <h3 className="text-3xl md:text-4xl font-bold tracking-tighter group-hover:underline decoration-2 underline-offset-4">
                  Gurgaon Real Estate Engine
                </h3>
              </div>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-3xl">
              An end-to-end machine learning platform predicting real estate prices in the Gurgaon region. Built with a recommendation engine that suggests properties based on user preferences and historical market data.
            </p>
            <div className="flex flex-wrap gap-2 mb-10 font-mono text-[10px] uppercase tracking-wider">
               <span className="bg-black text-white px-3 py-1.5 rounded-sm">Python</span>
               <span className="bg-black text-white px-3 py-1.5 rounded-sm">Scikit-Learn</span>
               <span className="border border-gray-300 px-3 py-1.5 rounded-sm text-gray-600">Pandas</span>
               <span className="border border-gray-300 px-3 py-1.5 rounded-sm text-gray-600">React</span>
            </div>
            <div className="w-full aspect-[16/9] bg-gray-100 rounded-sm overflow-hidden relative border border-gray-200 flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
              <div className="z-10 text-center bg-white/80 backdrop-blur-sm p-8 border border-gray-200 shadow-sm">
                <p className="font-mono text-xs text-gray-500 mb-6 uppercase tracking-widest">[ Spline 3D Embed ]</p>
                <div className="flex gap-4 justify-center">
                   <button className="px-5 py-2.5 bg-black text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-gray-800 transition-colors">
                     Live Demo <ArrowUpRight size={14} />
                   </button>
                   <button className="px-5 py-2.5 bg-white text-black border border-gray-300 text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-gray-50 transition-colors">
                     GitHub <Github size={14} />
                   </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- VIEW 4: ABOUT PAGE --- */}
      <div 
        className={`absolute inset-0 flex flex-col w-full h-screen text-[#fcfcfc] overflow-y-auto items-center justify-center p-8 md:p-20 smooth-transition
          ${view === 'about' ? 'opacity-100 z-20 pointer-events-auto scale-100' : 'opacity-0 z-0 pointer-events-none scale-105'}`}
      >
        <button onClick={() => setView('grid')} className="absolute top-10 left-10 flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-gray-500 hover:text-white transition-colors z-20">
          <ArrowLeft size={16} /> Back
        </button>

        <div className={`max-w-4xl w-full flex flex-col md:flex-row gap-16 md:gap-24 items-center md:items-start z-10 mt-16 md:mt-0 smooth-transition delay-100 ${view === 'about' ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <div className="w-48 h-48 md:w-72 md:h-72 shrink-0 bg-[#111] border border-[#333] rounded-full flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:8px_8px] opacity-20 group-hover:scale-110 transition-transform duration-700"></div>
            <span className="font-mono text-xs text-gray-600 tracking-widest uppercase relative z-10">Profile Photo</span>
          </div>

          <div className="flex flex-col">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 text-white">About.</h1>
            <div className="space-y-6 text-lg md:text-xl text-gray-400 leading-relaxed font-light">
              <p>I am a Data Scientist and Machine Learning Engineer focused on building scalable, data-driven solutions.</p>
              <p>With a strong foundation in <span className="text-white font-medium">Python, SQL, and MLOps</span>, I specialize in translating complex datasets into actionable insights and deploying production-ready models.</p>
              <p>I am currently developing a portfolio of end-to-end machine learning applications, including a real estate price prediction and recommendation engine, while continuously refining my algorithmic problem-solving skills to build highly optimized systems.</p>
            </div>
          </div>
        </div>
      </div>

      {/* --- VIEW 5: NOTES PAGE --- */}
      <div 
        className={`absolute inset-0 flex flex-col w-full h-screen text-[#fcfcfc] items-center justify-center p-8 md:p-20 smooth-transition
          ${view === 'notes' ? 'opacity-100 z-20 pointer-events-auto scale-100' : 'opacity-0 z-0 pointer-events-none scale-105'}`}
      >
        <button onClick={() => setView('grid')} className="absolute top-10 left-10 flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-gray-500 hover:text-white transition-colors z-20">
          <ArrowLeft size={16} /> Back
        </button>

        <div className={`text-center z-10 smooth-transition delay-100 ${view === 'notes' ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 text-white">Notes.</h1>
          <p className="text-xl text-gray-500 font-light">Thoughts and experiments coming soon.</p>
        </div>
      </div>

    </div>
  );
}
