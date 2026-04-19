'use client';

import React, { useState, useEffect } from 'react';
import { ArrowLeft, Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '@/lib/data';
import GlassCard from '@/components/ui/GlassCard';
import ViewTransition from '@/components/ui/ViewTransition';

interface AboutViewProps {
    view: string;
    setView: (view: string) => void;
}

const skillCategories: { label: string; key: keyof typeof portfolioData.skills }[] = [
    { label: 'LANGUAGES_&_DB', key: 'languages' },
    { label: 'ML_/_AI_ENGINE', key: 'ml_ai' },
    { label: 'DATA_PIPELINE', key: 'data_engineering' },
    { label: 'MLOPS_SYS', key: 'mlops' },
    { label: 'CORE_FRWK', key: 'core' },
];

export default function AboutView({ view, setView }: AboutViewProps) {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        if (view !== 'about') return;

        // Disable parallax on touch devices
        if (typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) return;

        const handleMouseMove = (e: MouseEvent) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 20;
            const y = (e.clientY / window.innerHeight - 0.5) * 20;
            setMousePos({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [view]);

    return (
        <ViewTransition isVisible={view === 'about'} direction="right" className="z-20">
            <div className="w-full h-[100dvh] overflow-y-auto overflow-x-hidden relative bg-[#000000]">
                {/* Fixed Background Parallax */}
                <div 
                    className="absolute inset-0 z-[-1] transition-transform duration-700 ease-out pointer-events-none"
                    style={{ transform: `translate(${mousePos.x * -1}px, ${mousePos.y * -1}px)` }}
                >
                    <div className="absolute inset-0 bg-[radial-gradient(#27272A_1px,transparent_1px)] [background-size:24px_24px] opacity-20"></div>
                </div>

                {/* Back Button */}
                <button 
                    onClick={() => setView('grid')} 
                    className="fixed top-6 left-6 md:top-10 md:left-10 z-50 flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.3em] text-[#FFFFFF] hover:text-white transition-all bg-[#0A0A0A]/80 border border-[#27272A] hover:border-white px-5 min-h-[48px] rounded-full backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                >
                    <ArrowLeft size={14} /> <span className="hidden md:inline">BACK_TO_HUB</span>
                </button>

                <div className="max-w-5xl mx-auto px-6 py-32 flex flex-col gap-24">
                    {/* Identity Section */}
                    <div className="flex flex-col items-center">
                        <GlassCard 
                            hover3D={true} 
                            delay={0.1}
                            className="w-full max-w-2xl p-8 md:p-12 rounded-3xl flex flex-col md:flex-row items-center gap-10 md:gap-16 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 p-6 text-[8px] font-mono tracking-widest text-[#52525B] uppercase hidden md:block group-hover:text-[#A1A1AA] transition-colors">
                                STATUS: VERIFIED
                            </div>
                            
                            <div className="w-40 h-40 md:w-56 md:h-56 shrink-0 bg-[#000000] border border-[#27272A] rounded-2xl flex items-center justify-center relative overflow-hidden group-hover:border-[#FFFFFF]/40 transition-colors shadow-2xl">
                                <div className="absolute inset-0 bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:12px_12px] opacity-[0.03] group-hover:opacity-10 group-hover:scale-110 transition-all duration-1000"></div>
                                <span className="font-mono text-[9px] text-[#A1A1AA] tracking-[0.4em] uppercase relative z-10 animate-pulse">NEURAL_ID</span>
                            </div>

                            <div className="flex flex-col items-center md:items-start text-center md:text-left z-10 w-full">
                                <div className="mb-2 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#FFFFFF] rounded-full animate-pulse shadow-[0_0_10px_#FFFFFF]" />
                                    <span className="font-mono text-[9px] text-[#FFFFFF] tracking-[0.3em]">ONLINE</span>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-2 text-white uppercase drop-shadow-md">
                                    {portfolioData.personalInfo.name.split(' ')[0]}
                                </h1>
                                <p className="text-sm md:text-base font-mono text-[#A1A1AA] tracking-widest uppercase mb-8 border-b border-[#27272A] pb-4 w-full">
                                    DATA SCIENCE <span className="text-[#3F3F46] mx-2">|</span> AI ENG
                                </p>
                                
                                <div className="flex gap-4">
                                    <a href={portfolioData.personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-[#0A0A0A] border border-[#27272A] rounded-xl hover:border-white hover:text-white text-[#A1A1AA] transition-all hover:shadow-[var(--glow-white)] group/btn">
                                        <Github size={18} className="group-hover/btn:scale-110 transition-transform" />
                                    </a>
                                    <a href={portfolioData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-[#0A0A0A] border border-[#27272A] rounded-xl hover:border-white hover:text-white text-[#A1A1AA] transition-all hover:shadow-[var(--glow-white)] group/btn">
                                        <Linkedin size={18} className="group-hover/btn:scale-110 transition-transform" />
                                    </a>
                                    <a href={`mailto:${portfolioData.personalInfo.email}`} className="p-3 bg-[#0A0A0A] border border-[#27272A] rounded-xl hover:border-white hover:text-white text-[#A1A1AA] transition-all hover:shadow-[var(--glow-white)] group/btn">
                                        <Mail size={18} className="group-hover/btn:scale-110 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        </GlassCard>
                    </div>

                    {/* Bio Section */}
                    <div className="flex flex-col gap-6 max-w-4xl mx-auto">
                        <div className="mb-4">
                            <h2 className="text-[10px] font-mono text-[#FFFFFF] tracking-[0.5em] uppercase flex items-center gap-4">
                                <span className="h-[1px] flex-1 bg-[#27272A]"></span>
                                BACKGROUND_PROCESS
                                <span className="h-[1px] flex-1 bg-[#27272A]"></span>
                            </h2>
                        </div>
                        
                        {(Array.isArray(portfolioData.personalInfo.bio) ? portfolioData.personalInfo.bio : [portfolioData.personalInfo.bio]).map((paragraph, index) => (
                            <GlassCard 
                                key={index}
                                delay={0.3 + (index * 0.1)}
                                className={`p-6 md:p-8 rounded-2xl border-l-[3px] md:border-l-[4px] ${index % 2 === 0 ? 'border-l-white ml-0 md:mr-12' : 'border-l-[#A1A1AA] mr-0 md:ml-12'}`}
                            >
                                <p className="text-base md:text-lg text-[#C5C6C7] leading-relaxed font-light">
                                    {paragraph}
                                </p>
                            </GlassCard>
                        ))}
                    </div>

                    {/* Skills Section */}
                    <div className="max-w-4xl mx-auto w-full pt-12 border-t border-[#27272A]/50">
                        <div className="mb-12">
                            <h2 className="text-[10px] font-mono text-[#FFFFFF] tracking-[0.5em] uppercase flex items-center justify-center gap-4">
                                PROTOCOL_STACK
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {skillCategories.map(({ label, key }, idx) => (
                                <GlassCard 
                                    key={key}
                                    hover3D={true}
                                    delay={0.6 + (idx * 0.1)}
                                    className={`p-6 md:p-8 rounded-2xl flex flex-col gap-6 ${idx === skillCategories.length - 1 && skillCategories.length % 2 !== 0 ? 'md:col-span-2' : ''}`}
                                >
                                    <div className="flex items-center gap-3 border-b border-[#27272A] pb-4">
                                        <div className="w-2 h-2 bg-[#A1A1AA]"></div>
                                        <span className="text-[10px] font-mono text-[#FFFFFF] tracking-[0.3em] uppercase">
                                            {label}
                                        </span>
                                    </div>
                                    <div className="flex flex-wrap gap-3">
                                        {portfolioData.skills[key].map((skill, sIdx) => (
                                            <span
                                                key={skill}
                                                className="bg-[#000000]/60 text-[#A1A1AA] px-4 py-2 text-[10px] font-mono uppercase tracking-[0.15em] border border-[#27272A] rounded-md hover:border-[#FFFFFF] hover:text-white hover:bg-[#FFFFFF]/5 hover:shadow-[0_0_10px_rgba(255,255,255,0.1)] transition-all cursor-default"
                                                style={{ animationDelay: `${(idx * 100) + (sIdx * 50)}ms` }}
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </GlassCard>
                            ))}
                        </div>
                    </div>

                    <div className="h-24 flex flex-col items-center justify-center border-t border-[#27272A] mt-12 gap-4 opacity-70">
                        <p className="font-mono text-[9px] text-[#FFFFFF] tracking-[1em] uppercase">ANIXES.IN</p>
                    </div>
                </div>
            </div>
        </ViewTransition>
    );
}
