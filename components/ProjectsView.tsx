'use client';

import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowUpRight, Github } from 'lucide-react';
import { portfolioData } from '@/lib/data';

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
            className="text-2xl md:text-4xl font-black tracking-tighter text-white group-hover:text-[#FFFFFF] transition-colors cursor-default font-mono"
        >
            {display}
        </h3>
    );
};

export default function ProjectsView({ view, setView }: ProjectsViewProps) {
    return (
        <div
            className={`absolute inset-0 flex flex-col md:flex-row text-[#C5C6C7] smooth-transition overflow-y-auto md:overflow-hidden
        ${view === 'projects' ? 'opacity-100 z-20 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'}`}
        >
            {/* Left Sidebar Index */}
            <div
                className={`w-full shrink-0 md:w-[30%] h-auto md:h-screen md:fixed left-0 border-b md:border-b-0 md:border-r border-[#27272A] bg-[#000000] p-6 pt-12 md:p-16 overflow-visible md:overflow-y-auto hide-scrollbar z-10 flex flex-col justify-between smooth-transition delay-100
          ${view === 'projects' ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'}`}
            >
                <div>
                    <button onClick={() => setView('grid')} className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.3em] mb-16 text-[#FFFFFF] hover:text-white transition-colors">
                        <ArrowLeft size={14} /> Back to Terminal
                    </button>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 text-white">INDEX_</h1>
                    <p className="text-[#FFFFFF]/40 text-xs font-mono leading-relaxed mb-16 max-w-[250px] uppercase tracking-wider">
                        Exploration of neural architectures, algorithmic datasets, and predictive modeling protocols.
                    </p>
                    <div className="mb-12">
                        <h3 className="text-[10px] font-black text-[#A1A1AA] uppercase tracking-[0.3em] mb-5">By Protocol:</h3>
                        <ul className="space-y-4 font-mono text-[10px] text-[#FFFFFF]">
                            {['00 Python', '01 SQL', '02 Next.js', '03 TensorFlow', '04 Scikit-Learn'].map((tech, i) => (
                                <li key={i} className="flex hover:text-white cursor-pointer transition-colors group">
                                    <span className="w-10 text-[#A1A1AA] group-hover:text-[#FFFFFF]">/{tech.split(' ')[0]}</span>
                                    <span className="tracking-widest uppercase">{tech.split(' ')[1]}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="hidden md:block">
                    <div className="h-[1px] w-full bg-[#27272A] mb-6"></div>
                    <p className="text-[9px] font-mono text-[#A1A1AA] uppercase tracking-[0.4em]">© 10-03-2026 {portfolioData.personalInfo.name.toUpperCase()}</p>
                </div>
            </div>

            {/* Right Scrollable Content */}
            <div
                className={`w-full shrink-0 md:w-[70%] md:ml-[30%] h-auto md:h-screen overflow-visible md:overflow-y-auto p-6 py-12 md:p-24 smooth-transition delay-150 bg-[#0A0A0A]
          ${view === 'projects' ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'}`}
            >
                <h2 className="text-[10px] font-black text-[#FFFFFF] uppercase tracking-[0.4em] mb-12 md:mb-16 border-b border-[#27272A] pb-4 flex flex-col md:flex-row md:justify-between items-start md:items-center gap-2">
                    <span>SELECTED_WORKS</span>
                    <span className="animate-pulse">RUNNING_STABLE</span>
                </h2>

                {portfolioData.projects.map((project, idx) => (
                    <div key={project.id} className="mb-48 group">
                        <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-8 border-l-2 border-[#27272A] pl-6 group-hover:border-[#FFFFFF] transition-colors">
                            <div className="flex flex-col gap-2">
                                <span className="font-mono text-[10px] text-[#A1A1AA] tracking-widest uppercase mb-1">PROT_VER: {project.year}</span>
                                <DecipherTitle text={project.title.toUpperCase()} />
                            </div>
                        </div>

                        <p className="text-base text-[#C5C6C7]/80 font-light leading-relaxed mb-10 max-w-3xl border-b border-[#27272A]/30 pb-10">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-4 mb-12 font-mono text-[10px] uppercase tracking-[0.2em]">
                            {project.techStack.map(tech => (
                                <span key={tech} className="bg-[#000000] text-[#FFFFFF] px-4 py-2 rounded-none border border-[#27272A] hover:border-[#FFFFFF] hover:text-white transition-all cursor-default hover:after:content-['|'] hover:after:animate-pulse">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="w-full aspect-[16/9] bg-[#000000] rounded-none overflow-hidden relative border border-[#27272A] flex items-center justify-center group-hover:border-[#FFFFFF]/50 transition-colors group/image">
                            {project.image && (
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="absolute inset-0 w-full h-full object-cover opacity-100 md:opacity-40 group-hover/image:opacity-80 transition-opacity duration-700"
                                />
                            )}
                            <div className="absolute inset-0 bg-[radial-gradient(#27272A_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none"></div>

                            <div className="z-10 text-center bg-[#0A0A0A]/90 backdrop-blur-md p-6 md:p-12 border border-[#27272A] shadow-2xl relative w-[90%] md:w-auto">
                                <p className="font-mono text-[9px] md:text-[10px] text-[#A1A1AA] mb-6 md:mb-8 uppercase tracking-[0.3em] md:tracking-[0.5em] animate-pulse">[[ NEURAL_RENDER_ACTIVE ]]</p>
                                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center w-full">
                                    <a
                                        href={project.links.live}
                                        target="_blank" rel="noopener noreferrer"
                                        className="px-6 sm:px-8 py-3 bg-[#FFFFFF] text-[#0B0C10] text-[10px] font-black uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-white transition-all w-full sm:w-auto"
                                    >
                                        LIVE_SIM <ArrowUpRight size={14} />
                                    </a>
                                    <a
                                        href={project.links.github}
                                        target="_blank" rel="noopener noreferrer"
                                        className="px-6 sm:px-8 py-3 bg-transparent text-white border border-[#27272A] text-[10px] font-black uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:border-[#FFFFFF] hover:text-[#FFFFFF] transition-all w-full sm:w-auto"
                                    >
                                        ACCESS_SRC <Github size={14} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                <div className="h-24 flex flex-col items-center justify-center border-t border-[#27272A] mt-20 gap-4">
                    <p className="font-mono text-[9px] text-[#FFFFFF] tracking-[1em] uppercase">ANIXES.IN</p>
                    <p className="font-mono text-[8px] text-[#A1A1AA] uppercase tracking-[0.4em]">© 2026 — PROTOCOL_STABLE</p>
                </div>
            </div>
        </div>
    );
}
