'use client';

import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { portfolioData } from '@/lib/data';

interface AboutViewProps {
    view: string;
    setView: (view: string) => void;
}

export default function AboutView({ view, setView }: AboutViewProps) {
    return (
        <div
            className={`absolute inset-0 flex flex-col w-full h-[100dvh] text-[#C5C6C7] overflow-y-auto p-6 py-24 md:px-20 md:py-32 items-center justify-start smooth-transition bg-[#000000]
        ${view === 'about' ? 'opacity-100 z-20 pointer-events-auto scale-100' : 'opacity-0 z-0 pointer-events-none scale-105'}`}
        >
            <button onClick={() => setView('grid')} className="absolute top-6 left-6 md:top-10 md:left-10 flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.3em] text-[#FFFFFF] hover:text-white transition-colors z-20 bg-[#000000]/80 p-2 md:p-0 rounded-md backdrop-blur-sm">
                <ArrowLeft size={16} /> BACK_TO_HUB
            </button>

            <div className={`my-auto max-w-4xl w-full flex flex-col md:flex-row gap-8 md:gap-24 items-center md:items-start z-10 smooth-transition delay-100 ${view === 'about' ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                <div className="w-48 h-48 md:w-72 md:h-72 shrink-0 bg-[#0A0A0A] border border-[#27272A] rounded-none flex items-center justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-[radial-gradient(#27272A_1px,transparent_1px)] [background-size:12px:12px] opacity-20 group-hover:scale-110 transition-transform duration-700"></div>
                    <span className="font-mono text-[9px] text-[#A1A1AA] tracking-[0.4em] uppercase relative z-10 group-hover:text-[#FFFFFF] transition-colors">NEURAL_ID:ANIMESH</span>
                </div>

                <div className="flex flex-col border-l-2 md:border-l border-[#27272A] pl-6 md:pl-10">
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 md:mb-8 text-white uppercase flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4">
                        About. <span className="text-[10px] font-mono text-[#A1A1AA] tracking-[0.4em] animate-pulse">[[ ID_VERIFIED ]]</span>
                    </h1>
                    <div className="space-y-4 md:space-y-6 text-base md:text-lg text-[#C5C6C7]/80 leading-relaxed font-light uppercase tracking-wide">
                        {Array.isArray(portfolioData.personalInfo.bio) ? 
                            portfolioData.personalInfo.bio.map((paragraph, index) => (
                                <p key={index} className={index > 0 ? "border-t border-[#27272A]/30 pt-6" : ""}>
                                    {paragraph}
                                </p>
                            )) : 
                            <p>{portfolioData.personalInfo.bio}</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
