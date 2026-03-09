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
            className={`absolute inset-0 flex flex-col w-full h-screen text-[#C5C6C7] overflow-y-auto items-center justify-center p-8 md:p-20 smooth-transition bg-[#0B0C10]
        ${view === 'about' ? 'opacity-100 z-20 pointer-events-auto scale-100' : 'opacity-0 z-0 pointer-events-none scale-105'}`}
        >
            <button onClick={() => setView('grid')} className="absolute top-10 left-10 flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.3em] text-[#45A29E] hover:text-white transition-colors z-20">
                <ArrowLeft size={16} /> BACK_TO_HUB
            </button>

            <div className={`max-w-4xl w-full flex flex-col md:flex-row gap-16 md:gap-24 items-center md:items-start z-10 mt-16 md:mt-0 smooth-transition delay-100 ${view === 'about' ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                <div className="w-48 h-48 md:w-72 md:h-72 shrink-0 bg-[#12141D] border border-[#1F2833] rounded-none flex items-center justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-[radial-gradient(#1F2833_1px,transparent_1px)] [background-size:12px:12px] opacity-20 group-hover:scale-110 transition-transform duration-700"></div>
                    <span className="font-mono text-[9px] text-[#1F2833] tracking-[0.4em] uppercase relative z-10 group-hover:text-[#45A29E] transition-colors">NEURAL_ID:ANIMESH</span>
                </div>

                <div className="flex flex-col border-l border-[#1F2833] pl-10">
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 text-white uppercase flex items-baseline gap-4">
                        About. <span className="text-[10px] font-mono text-[#1F2833] tracking-[0.5em] animate-pulse">[[ ID_VERIFIED ]]</span>
                    </h1>
                    <div className="space-y-6 text-base md:text-lg text-[#C5C6C7]/80 leading-relaxed font-light uppercase tracking-wide">
                        <p>{portfolioData.personalInfo.bio.split('.')[0]}.</p>
                        <p>With a strong foundation in <span className="text-white font-black border-b border-[#45A29E]">PYTHON, SQL, AND MLOPS</span>, I specialize in translating complex datasets into actionable insights and deploying production-ready models.</p>
                        <p className="border-t border-[#1F2833]/30 pt-6">I am currently developing a portfolio of end-to-end machine learning applications, including a real estate price prediction and recommendation engine, while continuously refining my algorithmic problem-solving skills to build highly optimized systems.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
