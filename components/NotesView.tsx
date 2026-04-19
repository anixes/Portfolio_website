'use client';

import React from 'react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '@/lib/data';
import GlassCard from '@/components/ui/GlassCard';
import ViewTransition from '@/components/ui/ViewTransition';

interface NotesViewProps {
    view: string;
    setView: (view: string) => void;
}

export default function NotesView({ view, setView }: NotesViewProps) {
    return (
        <ViewTransition isVisible={view === 'notes'} direction="left" className="z-20">
            <div className="w-full h-[100dvh] overflow-y-auto overflow-x-hidden relative bg-[#000000]">
                {/* Fixed Background Texture */}
                <div className="absolute inset-0 bg-[radial-gradient(#27272A_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none z-[-1] fixed"></div>

                {/* Back Button */}
                <button 
                    onClick={() => setView('grid')} 
                    className="fixed top-6 left-6 md:top-10 md:left-10 z-50 flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.3em] text-[#FFFFFF] hover:text-white transition-all bg-[#0A0A0A]/80 border border-[#27272A] hover:border-white px-5 min-h-[48px] rounded-full backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                >
                    <ArrowLeft size={14} /> <span className="hidden md:inline">BACK_TO_HUB</span>
                </button>

                <div className="max-w-4xl mx-auto px-6 py-32 flex flex-col items-center">
                    <div className="w-full mb-20 text-center md:text-left border-b border-[#27272A] pb-10">
                        <h1 className="text-4xl md:text-7xl font-black tracking-tighter mb-4 text-white uppercase drop-shadow-lg">
                            NOTES_LOG
                        </h1>
                        <p className="text-[#A1A1AA] text-xs font-mono tracking-widest uppercase">
                            Archived thoughts, protocols, and architectural decisions.
                        </p>
                    </div>

                    <div className="w-full flex flex-col gap-8 md:gap-12 pb-32">
                        {portfolioData.notes.length > 0 ? (
                            portfolioData.notes.map((note, idx) => (
                                <GlassCard 
                                    key={note.id}
                                    hover3D={true}
                                    delay={0.1 + (idx * 0.1)}
                                    className="p-8 md:p-10 rounded-2xl group flex flex-col relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 p-6 text-[10px] font-mono tracking-widest text-[#52525B] uppercase hidden md:block">
                                        [{idx + 1}/{portfolioData.notes.length}]
                                    </div>

                                    <div className="mb-6 flex items-center gap-4">
                                        <div className="px-3 py-1 bg-[#18181B] border border-[#27272A] rounded-md backdrop-blur-sm">
                                            <span className="text-[10px] font-mono text-[#A1A1AA] tracking-[0.2em] uppercase">
                                                {note.date}
                                            </span>
                                        </div>
                                        <span className="text-[9px] font-mono text-[#52525B] tracking-[0.3em] uppercase">
                                            ARCHIVE_PHASE
                                        </span>
                                    </div>

                                    <h3 className="text-2xl md:text-3xl font-black mb-6 text-white uppercase tracking-tight group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-all">
                                        {note.title}
                                    </h3>
                                    
                                    <p className="text-base md:text-lg text-[#C5C6C7] mb-10 font-light leading-relaxed max-w-2xl line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
                                        {note.summary}
                                    </p>
                                    
                                    <div className="mt-auto border-t border-[#27272A]/50 pt-6">
                                        <a href={note.link} className="inline-flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.3em] text-[#FFFFFF] hover:text-white bg-[#18181B] px-6 py-3 rounded-full border border-[#27272A] hover:border-white transition-all group/link hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                                            Read Protocol [0x1] <ArrowUpRight size={14} className="group-hover/link:rotate-45 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                                        </a>
                                    </div>
                                </GlassCard>
                            ))
                        ) : (
                            <GlassCard hover3D={false} delay={0.1} className="p-16 rounded-2xl flex flex-col items-center justify-center text-center">
                                <div className="w-16 h-16 bg-[#18181B] border border-[#27272A] rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                                    <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                                </div>
                                <p className="text-xl text-white font-black uppercase tracking-tight mb-2">Empty Stream</p>
                                <p className="text-[#A1A1AA] font-mono text-xs uppercase tracking-[0.2em]">[[ NO_DATA_AVAILABLE ]]</p>
                            </GlassCard>
                        )}
                    </div>
                </div>
            </div>
        </ViewTransition>
    );
}
