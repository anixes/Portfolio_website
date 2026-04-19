'use client';

import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowUpRight, Github } from 'lucide-react';
import { portfolioData } from '@/lib/data';
import GlassCard from '@/components/ui/GlassCard';
import ViewTransition from '@/components/ui/ViewTransition';

interface ProjectsViewProps {
    view: string;
    setView: (view: string) => void;
}

const DecipherTitle = ({ text }: { text: string }) => {
    const [display, setDisplay] = useState(text);
    const [isHovered, setIsHovered] = useState(false);
    const chars = '01ABCDEF#$&*@%><';

    useEffect(() => {
        if (!isHovered) {
            setDisplay(text);
            return;
        }

        let iterations = 0;
        const interval = setInterval(() => {
            setDisplay(prev =>
                text.split('').map((char, index) => {
                    if (index < iterations) return text[index];
                    if (char === ' ') return ' '; // Preserve spaces to prevent layout blowup
                    return chars[Math.floor(Math.random() * chars.length)];
                }).join('')
            );

            if (iterations >= text.length) clearInterval(interval);
            iterations += 1 / 3;
        }, 30);

        return () => clearInterval(interval);
    }, [isHovered, text]);

    return (
        <h3
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="text-2xl md:text-4xl font-black tracking-tighter text-white group-hover:text-[#FFFFFF] transition-colors cursor-default font-mono drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
        >
            {display}
        </h3>
    );
};

export default function ProjectsView({ view, setView }: ProjectsViewProps) {
    return (
        <ViewTransition isVisible={view === 'projects'} direction="up" className="z-20 flex justify-center">
            <div className="w-full h-[100dvh] overflow-y-auto overflow-x-hidden relative bg-[#000000]">
                {/* Fixed Background Texture */}
                <div className="absolute inset-0 bg-[#000000] pointer-events-none z-[-1]"></div>
                
                {/* Back Button Pill */}
                <button 
                    onClick={() => setView('grid')}
                    className="fixed top-6 left-6 md:top-10 md:left-10 z-50 flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.3em] text-[#FFFFFF] hover:text-white transition-all bg-[#0A0A0A]/80 border border-[#27272A] hover:border-white px-5 min-h-[48px] rounded-full backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                >
                    <ArrowLeft size={14} /> <span className="hidden sm:inline">Back to Terminal</span>
                </button>

                <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6">
                        <div>
                            <h1 className="text-4xl md:text-7xl font-black tracking-tighter mb-4 text-white drop-shadow-2xl">SELECTED_WORKS.</h1>
                            <p className="text-[#A1A1AA] text-xs font-mono tracking-widest uppercase max-w-xl">
                                Exploration of neural architectures, algorithmic datasets, and predictive modeling protocols.
                            </p>
                        </div>
                        <div className="animate-pulse text-left md:text-right">
                            <span className="inline-block text-[10px] font-mono text-[#FFFFFF] tracking-[0.4em] px-4 py-2 border border-[#27272A] rounded-full bg-black/40">
                                RUNNING_STABLE
                            </span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 pb-32">
                        {portfolioData.projects.map((project, idx) => (
                            <GlassCard 
                                key={project.id}
                                hover3D={true}
                                delay={idx * 0.1}
                                className={`group overflow-hidden rounded-2xl flex flex-col justify-between ${idx === 0 ? 'lg:col-span-2 aspect-auto min-h-[380px] lg:min-h-[600px]' : 'aspect-auto min-h-[400px] md:min-h-[500px]'}`}
                            >
                                {/* Static background map texture to add grain */}
                                <div className="absolute inset-0 bg-[radial-gradient(#27272A_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none mix-blend-overlay"></div>
                                
                                {/* Image layer */}
                                {project.image && (
                                    <div className="absolute inset-0 z-0 overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover opacity-50 group-hover:opacity-60 transition-transform duration-1000 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent"></div>
                                        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0A0A0A]/60 to-transparent"></div>
                                    </div>
                                )}

                                {/* Card Content */}
                                <div className="relative z-10 flex flex-col h-full justify-between p-6 md:p-10">
                                    <div className="flex justify-between items-start pt-2">
                                        <span className="font-mono text-[9px] text-[#A1A1AA] tracking-widest uppercase bg-black/60 px-3 py-1.5 rounded-full border border-[#27272A] backdrop-blur-md shadow-lg">PROT_VER: {project.year}</span>
                                        <span className="font-mono text-[9px] text-[#FFFFFF] tracking-[0.3em] uppercase bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-md">0{idx + 1}</span>
                                    </div>

                                    <div className="mt-20 md:mt-40">
                                        <div className="mb-4">
                                            <DecipherTitle text={project.title.toUpperCase()} />
                                        </div>
                                        
                                        <p className="text-sm md:text-base text-[#C5C6C7] font-light leading-relaxed mb-6 md:mb-8 max-w-2xl line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-1.5 md:gap-3 mb-8 md:mb-10 font-mono text-[9px] md:text-[10px] uppercase tracking-[0.2em]">
                                            {project.techStack.map(tech => (
                                                <span key={tech} className="bg-black/60 text-[#A1A1AA] px-2.5 py-1.5 md:px-4 md:py-2 rounded-full border border-[#27272A] backdrop-blur-md group-hover:border-[#FFFFFF]/40 group-hover:text-white transition-colors">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex flex-col sm:flex-row gap-4 w-full border-t border-[#27272A]/50 pt-8">
                                            <a
                                                href={project.links.live}
                                                target="_blank" rel="noopener noreferrer"
                                                className="px-8 py-3.5 bg-white text-black text-[10px] font-black uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-[#E2E8F0] hover:shadow-[var(--glow-white)] transition-all rounded-full min-h-[48px] flex-1 sm:flex-none"
                                            >
                                                LIVE_SIM <ArrowUpRight size={14} />
                                            </a>
                                            <a
                                                href={project.links.github}
                                                target="_blank" rel="noopener noreferrer"
                                                className="px-8 py-3.5 bg-black/60 backdrop-blur-md text-white border border-[#27272A] text-[10px] font-black uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:border-white hover:text-white hover:shadow-[var(--glow-white)] transition-all rounded-full min-h-[48px] flex-1 sm:flex-none"
                                            >
                                                ACCESS_SRC <Github size={14} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </GlassCard>
                        ))}
                    </div>

                    <div className="h-24 flex flex-col items-center justify-center border-t border-[#27272A] mt-8 gap-4 opacity-70">
                        <p className="font-mono text-[9px] text-[#FFFFFF] tracking-[1em] uppercase">ANIXES.IN</p>
                        <p className="font-mono text-[8px] text-[#A1A1AA] uppercase tracking-[0.4em]">© 2026 — PROTOCOL_STABLE</p>
                    </div>
                </div>
            </div>
        </ViewTransition>
    );
}
