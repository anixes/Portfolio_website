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

    const bentoLayouts = [
        [ // Layout 1: Desktop Left-heavy | Mobile: Normal flow, About & Notes side-by-side
            "col-span-2 order-2 md:order-none md:col-span-2 md:col-start-1 md:row-span-2 md:row-start-1 flex-col items-start justify-end",
            "col-span-1 order-3 md:order-none md:col-span-1 md:col-start-3 md:row-span-2 md:row-start-1 flex-col items-center justify-center",
            "col-span-1 order-4 md:order-none md:col-span-1 md:col-start-4 md:row-span-3 md:row-start-1 flex-col items-end justify-start",
            "col-span-2 order-5 md:order-none md:col-span-3 md:col-start-1 md:row-span-1 md:row-start-3 flex-col md:flex-row items-start md:items-end justify-between",
            "66.66%", "50%"
        ],
        [ // Layout 2: Desktop Right | Mobile: Projects & About sideways
            "col-span-1 order-3 md:order-none md:col-span-2 md:col-start-3 md:row-span-2 md:row-start-1 flex-col items-end justify-end text-right md:text-left",
            "col-span-1 order-2 md:order-none md:col-span-1 md:col-start-2 md:row-span-2 md:row-start-1 flex-col items-center justify-center",
            "col-span-2 order-4 md:order-none md:col-span-1 md:col-start-1 md:row-span-3 md:row-start-1 flex-col items-start justify-start",
            "col-span-2 order-5 md:order-none md:col-span-3 md:col-start-2 md:row-span-1 md:row-start-3 flex-col md:flex-row items-start md:items-end justify-between",
            "66.66%", "50%"
        ],
        [ // Layout 3: Desktop Bottom | Mobile: Notes first layout
            "col-span-2 order-4 md:order-none md:col-span-2 md:col-start-1 md:row-span-2 md:row-start-2 flex-col items-start justify-end",
            "col-span-1 order-2 md:order-none md:col-span-1 md:col-start-3 md:row-span-2 md:row-start-2 flex-col items-center justify-center",
            "col-span-1 order-3 md:order-none md:col-span-1 md:col-start-4 md:row-span-3 md:row-start-1 flex-col items-end justify-start",
            "col-span-2 order-5 md:order-none md:col-span-3 md:col-start-1 md:row-span-1 md:row-start-1 flex-col md:flex-row items-start md:items-start justify-between",
            "33.33%", "50%"
        ],
        [ // Layout 4: Desktop Top Edge | Mobile: Fully vertical shuffle
            "col-span-2 order-4 md:order-none md:col-span-2 md:col-start-3 md:row-span-2 md:row-start-2 flex-col items-end justify-end text-right",
            "col-span-2 order-3 md:order-none md:col-span-1 md:col-start-2 md:row-span-2 md:row-start-2 flex-col items-center justify-center",
            "col-span-2 order-2 md:order-none md:col-span-1 md:col-start-1 md:row-span-3 md:row-start-1 flex-col items-start justify-start",
            "col-span-2 order-5 md:order-none md:col-span-3 md:col-start-2 md:row-span-1 md:row-start-1 flex-col md:flex-row items-start md:items-start justify-between",
            "33.33%", "50%"
        ],
        [ // Layout 5: Desktop Centric | Mobile: Notes & About swapped
            "col-span-2 order-2 md:order-none md:col-span-2 md:col-start-2 md:row-span-2 md:row-start-1 flex-col items-center justify-end text-center md:text-left",
            "col-span-1 order-4 md:order-none md:col-span-1 md:col-start-1 md:row-span-2 md:row-start-1 flex-col items-center justify-center",
            "col-span-1 order-3 md:order-none md:col-span-1 md:col-start-4 md:row-span-3 md:row-start-1 flex-col items-end justify-start",
            "col-span-2 order-5 md:order-none md:col-span-3 md:col-start-1 md:row-span-1 md:row-start-3 flex-col md:flex-row items-start md:items-end justify-between",
            "66.66%", "25%"
        ]
    ];

    const [layoutIndex, setLayoutIndex] = React.useState(0);

    React.useEffect(() => {
        if (view === 'grid') {
            setLayoutIndex(Math.floor(Math.random() * bentoLayouts.length));
        }
    }, [view]);

    const activeLayout = bentoLayouts[layoutIndex];

    return (
        <div
            className={`absolute inset-0 text-[#C5C6C7] smooth-transition origin-center overflow-y-auto overflow-x-hidden hide-scrollbar md:overflow-hidden overscroll-contain
        ${view === 'grid' ? 'opacity-100 z-20 scale-100 pointer-events-auto' : 'opacity-0 z-0 scale-95 pointer-events-none'}`}
        >
            {/* Pure Mobile Stack vs Desktop Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-3 min-h-[100dvh] md:h-full w-full gap-[2px] bg-[#27272A] p-[2px] pb-24 md:pb-[2px]">
                <style>{`
                  @keyframes cyber-glitch {
                    0% { opacity: 0; clip-path: inset(100% 0 0 0); transform: translateY(20px); }
                    20% { opacity: 1; clip-path: inset(0 0 80% 0); transform: translateY(-10px) skewX(10deg); }
                    40% { opacity: 0.5; clip-path: inset(40% 0 20% 0); transform: translateY(5px) skewX(-10deg); }
                    60% { opacity: 1; clip-path: inset(10% 0 60% 0); transform: translateY(0) skewX(5deg); }
                    80% { opacity: 0.8; clip-path: inset(0 0 0 0); transform: translate(2px, -2px) scale(1.02); }
                    100% { opacity: 1; clip-path: inset(0 0 0 0); transform: translate(0, 0) scale(1); }
                  }
                  @keyframes center-glitch {
                    0% { opacity: 0; transform: translate(-50%, -50%) scale(0.5); filter: blur(10px) invert(1); }
                    40% { opacity: 1; transform: translate(-48%, -52%) scale(1.1); filter: blur(0px) invert(1); }
                    60% { opacity: 0.8; transform: translate(-52%, -48%) scale(0.95); filter: invert(0); }
                    80% { opacity: 1; transform: translate(-50%, -50%) scale(1.02); }
                    100% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
                  }
                  .crosshair-tl { position: absolute; top: 1rem; left: 1rem; width: 10px; height: 10px; border-top: 1px solid #3F3F46; border-left: 1px solid #3F3F46; }
                  .crosshair-br { position: absolute; bottom: 1rem; right: 1rem; width: 10px; height: 10px; border-bottom: 1px solid #3F3F46; border-right: 1px solid #3F3F46; }
                `}</style>

                {/* ANIXES.IN Main Tile (Mobile Only) */}
                <div
                    onClick={() => setView('hero')}
                    className={`col-span-2 order-1 md:hidden aspect-[2/1] sm:min-h-[180px] bg-[#000000] hover:bg-[#0A0A0A] transition-colors duration-500 flex flex-col items-center justify-center p-6 cursor-pointer group relative overflow-hidden`}
                    style={{
                        animation: view === 'grid' ? 'cyber-glitch 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.05s both' : 'none',
                    }}
                >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ backgroundImage: blueprintPattern }}></div>
                    <div className="crosshair-tl transition-colors group-hover:border-[#A1A1AA]"></div>
                    <div className="crosshair-br transition-colors group-hover:border-[#A1A1AA]"></div>

                    <div className="relative z-10 w-24 h-24 bg-[#0A0A0A] border border-[#27272A] flex items-center justify-center group-hover:border-[#FFFFFF] shadow-[0_0_20px_rgba(0,0,0,0.8)] rounded-none transition-colors">
                        <div className="absolute inset-0 bg-[radial-gradient(#27272A_1px,transparent_1px)] [background-size:8px_8px] opacity-20 group-hover:scale-110 transition-transform duration-1000"></div>
                        <span className="text-white font-black text-xl tracking-tighter relative z-10 group-hover:text-[#FFFFFF] transition-colors">ANIXES<span className="text-[#A1A1AA]">.IN</span></span>
                    </div>
                    <div className="mt-6 font-mono text-[8px] text-[#A1A1AA] tracking-widest uppercase flex items-center gap-2 group-hover:text-[#FFFFFF] transition-colors">
                        <span className="w-1.5 h-1.5 bg-[#FFFFFF] animate-pulse"></span>
                        RETURN_TO_CORE
                    </div>
                </div>

                {/* PROJECTS - Large Main Block (Top Left) */}
                <div
                    onClick={() => setView('projects')}
                    className={`${activeLayout[0].replace(/col-span-[0-9]+ order-[0-9]+ /g, '')} aspect-square md:aspect-auto sm:min-h-[300px] md:min-h-0 bg-[#000000] hover:bg-[#0A0A0A] transition-colors duration-500 flex p-8 pt-16 pb-10 md:p-12 cursor-pointer group relative overflow-hidden`}
                    style={{
                        animation: view === 'grid' ? 'cyber-glitch 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.1s both' : 'none',
                    }}
                >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ backgroundImage: blueprintPattern }}></div>
                    <div className="crosshair-tl transition-colors group-hover:border-[#A1A1AA]"></div>
                    <div className="crosshair-br transition-colors group-hover:border-[#A1A1AA]"></div>

                    <div className="absolute top-4 right-4 md:top-6 md:right-6 text-[8px] font-mono tracking-widest text-[#52525B] group-hover:text-[#A1A1AA] transition-colors">
                        SEC // 01 [PRIMARY]
                    </div>

                    <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-[#A1A1AA] group-hover:text-[#FFFFFF] transition-colors relative z-10 leading-none">
                        PROJECTS.
                    </h2>
                    <p className="mt-4 text-[10px] font-mono tracking-[0.2em] text-[#52525B] group-hover:text-[#A1A1AA] uppercase">
                        &gt; Explore active modules
                    </p>
                </div>

                {/* ABOUT - Tall Side Block (Top Middle) */}
                <div
                    onClick={() => setView('about')}
                    className={`${activeLayout[1].replace(/col-span-[0-9]+ order-[0-9]+ /g, '')} aspect-[4/3] md:aspect-auto sm:min-h-[250px] md:min-h-0 bg-[#000000] hover:bg-[#0A0A0A] transition-colors duration-500 flex p-6 md:p-10 cursor-pointer group relative overflow-hidden`}
                    style={{
                        animation: view === 'grid' ? 'cyber-glitch 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s both' : 'none',
                    }}
                >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ backgroundImage: blueprintPattern }}></div>

                    <div className="absolute top-4 left-4 md:top-6 md:left-6 text-[8px] font-mono tracking-widest text-[#52525B] group-hover:text-[#A1A1AA] transition-colors -rotate-90 origin-left">
                        SEC // 02
                    </div>

                    <h2 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter text-[#A1A1AA] group-hover:text-[#FFFFFF] transition-colors relative z-10 [writing-mode:vertical-rl] md:rotate-180">
                        ABOUT.
                    </h2>
                </div>

                {/* NOTES - Tall Full Edge Block (Right Edge) */}
                <div
                    onClick={() => setView('notes')}
                    className={`${activeLayout[2].replace(/col-span-[0-9]+ order-[0-9]+ /g, '')} aspect-[4/3] md:aspect-auto sm:min-h-[250px] md:min-h-0 bg-[#000000] hover:bg-[#0A0A0A] transition-colors duration-500 flex p-6 pt-12 md:p-12 cursor-pointer group relative overflow-hidden`}
                    style={{
                        animation: view === 'grid' ? 'cyber-glitch 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s both' : 'none',
                    }}
                >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ backgroundImage: blueprintPattern }}></div>
                    <div className="crosshair-tl transition-colors group-hover:border-[#A1A1AA]"></div>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-[#A1A1AA] group-hover:text-[#FFFFFF] transition-colors relative z-10 [writing-mode:horizontal-tb] md:[writing-mode:vertical-rl] rotate-0 md:rotate-180">
                        NOTES.
                    </h2>
                    <div className="mt-8 text-[8px] font-mono text-[#52525B] group-hover:text-[#A1A1AA] space-y-2 uppercase tracking-widest hidden md:block">
                        <p>Total Records: 14</p>
                        <p>Status: Synchronized</p>
                        <p>Last Sync: Today</p>
                    </div>

                    <div className="absolute bottom-6 right-6 md:bottom-12 md:right-12 text-[8px] md:text-[10px] font-mono tracking-widest text-[#52525B] group-hover:text-[#A1A1AA] transition-colors">
                        SEC // 03 [LOGS]
                    </div>
                </div>

                {/* CONTACT - Wide Bottom Block */}
                <div
                    className={`${activeLayout[3].replace(/col-span-[0-9]+ order-[0-9]+ /g, '')} aspect-[4/3] md:aspect-auto sm:min-h-[250px] md:min-h-0 bg-[#000000] hover:bg-[#0A0A0A] transition-colors duration-500 flex p-8 md:p-12 mb-20 md:mb-0 group relative overflow-hidden`}
                    style={{
                        animation: view === 'grid' ? 'cyber-glitch 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s both' : 'none',
                    }}
                >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ backgroundImage: blueprintPattern }}></div>
                    <div className="crosshair-br transition-colors group-hover:border-[#A1A1AA]"></div>

                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter mb-8 md:mb-0 text-[#A1A1AA] group-hover:text-white transition-colors relative z-10 uppercase">
                        CONNECT.
                    </h2>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-12 text-[10px] font-mono tracking-[0.25em] text-[#71717A] relative z-10 uppercase w-full md:w-auto">
                        <a href={`mailto:${portfolioData.personalInfo.email}`} className="flex items-center gap-2 hover:text-[#FFFFFF] transition-colors border-b border-[#27272A] hover:border-[#FFFFFF] pb-2">
                            EMAIL <ArrowUpRight size={14} className="text-[#A1A1AA]" />
                        </a>
                        <a href={portfolioData.personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#FFFFFF] transition-colors border-b border-[#27272A] hover:border-[#FFFFFF] pb-2">
                            GITHUB <ArrowUpRight size={14} className="text-[#A1A1AA]" />
                        </a>
                        <a href={portfolioData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#FFFFFF] transition-colors border-b border-[#27272A] hover:border-[#FFFFFF] pb-2">
                            LINKEDIN <ArrowUpRight size={14} className="text-[#A1A1AA]" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Center Logo - Returns to Hero (Desktop) */}
            <div
                onClick={() => setView('hero')}
                className="absolute z-30 cursor-pointer hidden md:block transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{
                    top: view === 'grid' ? activeLayout[4] : '50%',
                    left: view === 'grid' ? activeLayout[5] : '50%',
                    animation: view === 'grid' ? 'center-glitch 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.5s both' : 'none',
                    opacity: view === 'grid' ? 1 : 0,
                    transform: view !== 'grid' ? 'translate(-50%, -50%) scale(0.5)' : 'translate(-50%, -50%) scale(1)'
                }}
            >
                <div className="relative z-10 w-32 h-32 bg-[#000000] border border-[#27272A] flex items-center justify-center group overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.8)] hover:shadow-[0_0_50px_rgba(255,255,255,0.1)] transition-shadow duration-700">
                    <div className="absolute inset-0 bg-[radial-gradient(#27272A_1px,transparent_1px)] [background-size:12px_12px] opacity-20 group-hover:scale-150 transition-transform duration-1000"></div>
                    <span className="text-white font-black text-2xl tracking-tighter group-hover:text-[#FFFFFF] transition-colors relative z-10">ANIXES<span className="text-[#A1A1AA]">.IN</span></span>
                    <div className="absolute bottom-2 font-mono text-[8px] text-[#A1A1AA] tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">SYS_ACTIVE</div>
                </div>
            </div>
        </div>
    );
}
