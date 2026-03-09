'use client';

import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import FloatingSpheres from './FloatingSpheres';
import { portfolioData } from '@/lib/data';

interface HeroProps {
    view: string;
    loadingProgress: number;
    titlePhase: number;
    onEnter: () => void;
}

const AnimatedHeroTitle = ({ text, view }: { text: string, view: string }) => {
    const [display, setDisplay] = useState(text);
    const [isLastName, setIsLastName] = useState(false);
    const chars = '01ABCDEF_';
    const lastName = 'DWIVEDI';

    useEffect(() => {
        // Random glitch timer loop
        const runGlitch = () => {
            const isNameSwap = Math.random() > 0.4; // 60% chance of name swap for higher frequency

            if (isNameSwap) {
                setDisplay(lastName);
                setIsLastName(true);
                setTimeout(() => {
                    setDisplay(text);
                    setIsLastName(false);
                }, 800);
            } else {
                const arr = (isLastName ? lastName : text).split('');
                const numGlitches = Math.floor(Math.random() * 2) + 1;
                for (let i = 0; i < numGlitches; i++) {
                    const idx = Math.floor(Math.random() * text.length);
                    arr[idx] = chars[Math.floor(Math.random() * chars.length)];
                }
                setDisplay(arr.join(''));
                setTimeout(() => {
                    setDisplay(isLastName ? lastName : text);
                }, 60);
            }

            // Queue next glitch (every ~3 seconds)
            const nextTime = 2500 + Math.random() * 1000;
            setTimeout(runGlitch, nextTime);
        };

        const initialTimeout = setTimeout(runGlitch, 1000);
        return () => clearTimeout(initialTimeout);
    }, [text]); // Removed isLastName from deps to prevent infinite loops, using text as anchor

    // Trigger glitch on view change
    useEffect(() => {
        setDisplay(lastName);
        setIsLastName(true);
        setTimeout(() => {
            setDisplay(text);
            setIsLastName(false);
        }, 800);
    }, [view]);

    return (
        <h1
            className="text-[5.5rem] md:text-[9.5rem] leading-none font-black text-white tracking-tighter select-none mix-blend-overlay cursor-crosshair flex gap-1 md:gap-2 group transition-all duration-700"
        >
            {display.split('').map((char, i) => (
                <span
                    key={i}
                    className="inline-block group-hover:text-[#45A29E] transition-colors duration-300 ease-out py-2"
                    style={{
                        textShadow: (display !== text && display !== lastName) || isLastName
                            ? '0 0 25px rgba(69, 162, 158, 0.6)'
                            : 'none'
                    }}
                >
                    {char}
                </span>
            ))}
        </h1>
    );
};

export default function Hero({ view, loadingProgress, titlePhase, onEnter }: HeroProps) {
    return (
        <div
            className={`absolute inset-0 flex flex-col items-center justify-center cursor-pointer smooth-transition origin-center
        ${view === 'hero' ? 'opacity-100 z-20 scale-100' : 'opacity-0 pointer-events-none scale-105'}`}
            onClick={onEnter}
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
                        <div className="flex justify-between w-full text-xs font-mono text-[#45A29E] mb-2 tracking-widest uppercase">
                            <span>Initialising Systems</span>
                            <span>{loadingProgress}%</span>
                        </div>
                        <div className="w-full h-[1px] bg-[#1F2833] overflow-hidden">
                            <div className="h-full bg-[#45A29E] transition-all duration-75" style={{ width: `${loadingProgress}%` }} />
                        </div>
                    </div>
                ) : (
                    <div>
                        <AnimatedHeroTitle text={portfolioData.personalInfo.name.split(' ')[0].toUpperCase()} view={view} />
                        <div className="h-12 mt-2 flex items-center justify-center relative">
                            <p className={`text-xl md:text-3xl font-mono tracking-widest text-[#45A29E] transition-opacity duration-700 absolute ${titlePhase >= 1 && titlePhase < 3 ? 'opacity-100' : 'opacity-0'}`}>
                                DATA SCIENTIST.
                            </p>
                            <p className={`text-xl md:text-3xl font-mono tracking-widest text-[#7289DA] transition-opacity duration-700 absolute ${titlePhase === 3 ? 'opacity-100' : 'opacity-0'}`}>
                                ML ENGINEER.
                            </p>
                        </div>
                        <p className="mt-20 text-[10px] font-mono text-[#45A29E] animate-pulse tracking-[0.3em] uppercase bg-black/40 px-6 py-3 rounded-full backdrop-blur-md border border-[#45A29E]/30">
                            Click to access main terminal
                        </p>
                    </div>
                )}
            </div>

            {/* Footer Credit */}
            <div className="absolute bottom-10 right-10 text-[9px] font-mono text-[#1F2833] uppercase tracking-[0.4em] flex items-center gap-4">
                <div className="w-16 h-[1px] bg-[#1F2833]"></div>
                AESTHETIC: OBSIDIAN IRIDESCENCE
            </div>
        </div>
    );
}
