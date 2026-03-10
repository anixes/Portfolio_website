'use client';

import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { portfolioData } from '@/lib/data';

interface NotesViewProps {
    view: string;
    setView: (view: string) => void;
}

export default function NotesView({ view, setView }: NotesViewProps) {
    return (
        <div
            className={`absolute inset-0 flex flex-col w-full h-[100dvh] text-[#C5C6C7] overflow-y-auto p-6 pt-24 md:p-20 items-center justify-start md:justify-center smooth-transition bg-[#000000]
        ${view === 'notes' ? 'opacity-100 z-20 pointer-events-auto scale-100' : 'opacity-0 z-0 pointer-events-none scale-105'}`}
        >
            <button onClick={() => setView('grid')} className="absolute top-6 left-6 md:top-10 md:left-10 flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.3em] text-[#FFFFFF] hover:text-white transition-colors z-20 bg-[#000000]/80 p-2 md:p-0 rounded-md backdrop-blur-sm">
                <ArrowLeft size={16} /> BACK_TO_HUB
            </button>

            <div className={`w-full max-w-4xl z-10 mt-8 md:mt-0 smooth-transition delay-100 ${view === 'notes' ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-16 text-white uppercase">Notes_</h1>
                <div className="grid gap-8 md:gap-12 text-left">
                    {portfolioData.notes.length > 0 ? (
                        portfolioData.notes.map(note => (
                            <div key={note.id} className="border-l-2 border-[#27272A] pl-6 md:pl-10 pb-8 md:pb-10 group hover:border-[#FFFFFF] transition-colors relative">
                                <div className="absolute -left-[5px] top-0 w-2 h-2 bg-[#27272A] group-hover:bg-[#FFFFFF] transition-colors"></div>
                                <span className="text-[10px] font-mono text-[#A1A1AA] mb-4 block tracking-[0.3em] uppercase">{note.date} // ARCHIVE_PHASE</span>
                                <h3 className="text-2xl font-black mb-6 group-hover:text-white transition-colors uppercase tracking-tight">{note.title}</h3>
                                <p className="text-[#C5C6C7]/60 mb-8 font-light max-w-2xl">{note.summary}</p>
                                <a href={note.link} className="text-[10px] font-mono uppercase tracking-[0.4em] text-[#FFFFFF] hover:text-white flex items-center gap-3 group/link transition-colors">
                                    Read Protocol [0x1] <span className="group-hover/link:translate-x-2 transition-transform">&rarr;</span>
                                </a>
                            </div>
                        ))
                    ) : (
                        <p className="text-xl text-[#A1A1AA] font-mono uppercase tracking-[0.2em] animate-pulse">[[ DATA_STREAM_EMPTY ]]</p>
                    )}
                </div>
            </div>
        </div>
    );
}
