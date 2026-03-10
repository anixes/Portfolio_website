'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { portfolioData } from '@/lib/data';

interface NavigationGridProps {
    view: string;
    setView: (view: string) => void;
}

export default function NavigationGrid({ view, setView }: NavigationGridProps) {
    const blueprintPattern = `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 40H0V0h40v40zM1 1h38v38H1V1z' fill='none' stroke='%2345A29E' stroke-opacity='0.1' stroke-dasharray='2,2'/%3E%3C/svg%3E")`;

    return (
        <div
            className={`absolute inset-0 text-[#C5C6C7] smooth-transition origin-center
        ${view === 'grid' ? 'opacity-100 z-20 scale-100 pointer-events-auto' : 'opacity-0 z-0 scale-95 pointer-events-none'}`}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-4 md:grid-rows-2 h-full w-full gap-[1px] bg-[#1F2833]">
                <style>{`
                  @keyframes cyber-glitch {
                    0% { opacity: 0; clip-path: inset(100% 0 0 0); transform: translateY(20px); filter: brightness(2) hue-rotate(90deg); }
                    20% { opacity: 1; clip-path: inset(0 0 80% 0); transform: translateY(-10px) skewX(10deg); filter: hue-rotate(90deg); }
                    40% { opacity: 0.5; clip-path: inset(40% 0 20% 0); transform: translateY(5px) skewX(-10deg); filter: hue-rotate(-90deg); }
                    60% { opacity: 1; clip-path: inset(10% 0 60% 0); transform: translateY(0) skewX(5deg); }
                    80% { opacity: 0.8; clip-path: inset(0 0 0 0); transform: translate(2px, -2px) scale(1.02); }
                    100% { opacity: 1; clip-path: inset(0 0 0 0); transform: translate(0, 0) scale(1); filter: brightness(1) hue-rotate(0deg); }
                  }
                  @keyframes center-glitch {
                    0% { opacity: 0; transform: translate(-50%, -50%) scale(0.5); filter: blur(10px) invert(1); }
                    40% { opacity: 1; transform: translate(-48%, -52%) scale(1.1); filter: blur(0px) invert(1); }
                    60% { opacity: 0.8; transform: translate(-52%, -48%) scale(0.95); filter: invert(0); }
                    80% { opacity: 1; transform: translate(-50%, -50%) scale(1.02); }
                    100% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
                  }
                `}</style>

                <div
                    onClick={() => setView('projects')}
                    className="bg-[#0B0C10] hover:bg-[#12141D] transition-colors duration-500 flex items-center justify-center p-10 cursor-pointer group relative overflow-hidden"
                    style={{
                        animation: view === 'grid' ? 'cyber-glitch 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.1s both' : 'none',
                        opacity: view === 'grid' ? 1 : 0
                    }}
                >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ backgroundImage: blueprintPattern }}></div>
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-[#5C6B73] group-hover:text-[#45A29E] transition-colors relative z-10">
                        <span className="group-hover:underline decoration-1 underline-offset-[12px]">PROJECTS.</span>
                    </h2>
                </div>

                <div
                    onClick={() => setView('about')}
                    className="bg-[#0B0C10] hover:bg-[#12141D] transition-colors duration-500 flex items-center justify-center p-10 cursor-pointer group relative overflow-hidden"
                    style={{
                        animation: view === 'grid' ? 'cyber-glitch 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s both' : 'none',
                        opacity: view === 'grid' ? 1 : 0
                    }}
                >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ backgroundImage: blueprintPattern }}></div>
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-[#5C6B73] group-hover:text-[#45A29E] transition-colors relative z-10">
                        <span className="group-hover:underline decoration-1 underline-offset-[12px]">ABOUT.</span>
                    </h2>
                </div>

                <div
                    onClick={() => setView('notes')}
                    className="bg-[#0B0C10] hover:bg-[#12141D] transition-colors duration-500 flex items-center justify-center p-10 cursor-pointer group relative overflow-hidden"
                    style={{
                        animation: view === 'grid' ? 'cyber-glitch 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s both' : 'none',
                        opacity: view === 'grid' ? 1 : 0
                    }}
                >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ backgroundImage: blueprintPattern }}></div>
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-[#5C6B73] group-hover:text-[#45A29E] transition-colors relative z-10">
                        <span className="group-hover:underline decoration-1 underline-offset-[12px]">NOTES.</span>
                    </h2>
                </div>

                <div
                    className="bg-[#0B0C10] hover:bg-[#12141D] transition-colors duration-500 flex flex-col items-start justify-end p-12 md:p-20 group relative overflow-hidden"
                    style={{
                        animation: view === 'grid' ? 'cyber-glitch 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s both' : 'none',
                        opacity: view === 'grid' ? 1 : 0
                    }}
                >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ backgroundImage: blueprintPattern }}></div>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-10 text-[#5C6B73] group-hover:text-white transition-colors relative z-10 uppercase">Contact.</h2>
                    <div className="space-y-4 text-xs font-mono tracking-[0.2em] text-[#5C6B73] w-full pointer-events-auto relative z-10 uppercase">
                        <a href={`mailto:${portfolioData.personalInfo.email}`} className="flex items-center justify-between hover:text-[#45A29E] transition-colors border-b border-[#1F2833] pb-3 w-full">
                            {portfolioData.personalInfo.email} <ArrowUpRight size={16} className="text-[#45A29E]" />
                        </a>
                        <a href={portfolioData.personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between hover:text-[#45A29E] transition-colors border-b border-[#1F2833] pb-3 w-full">
                            GITHUB.COM/{portfolioData.personalInfo.github.split('/').pop()?.toUpperCase()} <ArrowUpRight size={16} className="text-[#45A29E]" />
                        </a>
                        <a href={portfolioData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between hover:text-[#45A29E] transition-colors border-b border-[#1F2833] pb-3 w-full">
                            LINKEDIN.COM/IN/{portfolioData.personalInfo.linkedin.split('/').pop()?.toUpperCase()} <ArrowUpRight size={16} className="text-[#45A29E]" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Center Logo - Returns to Hero */}
            <div
                onClick={() => setView('hero')}
                className="absolute top-1/2 left-1/2 z-30 cursor-pointer"
                style={{
                    animation: view === 'grid' ? 'center-glitch 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.5s both' : 'none',
                    opacity: view === 'grid' ? 1 : 0,
                    transform: view !== 'grid' ? 'translate(-50%, -50%) scale(0.8)' : 'translate(-50%, -50%)'
                }}
            >
                <div className="relative z-10 w-24 h-24 md:w-32 md:h-32 bg-[#0B0C10] border border-[#1F2833] flex items-center justify-center group overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(#1F2833_1px,transparent_1px)] [background-size:12px_12px] opacity-20 group-hover:scale-150 transition-transform duration-1000"></div>
                    <span className="text-white font-black text-xl md:text-2xl tracking-tighter group-hover:text-[#45A29E] transition-colors relative z-10">ANIXES<span className="text-[#45A29E]">.IN</span></span>
                    <div className="absolute bottom-2 font-mono text-[8px] text-[#5C6B73] tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">SYS_ACTIVE</div>
                </div>
            </div>
        </div>
    );
}
