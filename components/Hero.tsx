'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import FloatingSpheres from './FloatingSpheres';
import { portfolioData } from '@/lib/data';
import { useShakeDetection } from '@/hooks/useShakeDetection';

interface HeroProps {
    view: string;
    loadingProgress: number;
    titlePhase: number;
    onEnter: () => void;
}

const AnimatedRoleTitle = ({ phase }: { phase: number }) => {
    const roles = [
        { text: "MACHINE LEARNING.", color: "text-[#FFFFFF]", shadow: "rgba(255, 255, 255, 0.6)" },
        { text: "DATA SCIENCE.", color: "text-[#E2E8F0]", shadow: "rgba(226, 232, 240, 0.6)" },
        { text: "ARTIFICIAL INTELLIGENCE.", color: "text-[#A1A1AA]", shadow: "rgba(161, 161, 170, 0.6)" },
        { text: "VIBE CODING.", color: "text-[#F8FAFC]", shadow: "rgba(248, 250, 252, 0.6)" },
        { text: "BACKEND.", color: "text-[#E0F2FE]", shadow: "rgba(224, 242, 254, 0.6)" },
        { text: "FRONTEND.", color: "text-[#FFFFFF]", shadow: "rgba(255, 255, 255, 0.4)" }
    ];
    const [roleIndex, setRoleIndex] = useState(0);
    const [display, setDisplay] = useState(roles[0].text);
    const [isGlitching, setIsGlitching] = useState(false);
    const chars = '01ABCDEF_/><*&%';

    useEffect(() => {
        if (phase !== 3) return;
        const interval = setInterval(() => {
            const nextIndex = (roleIndex + 1) % roles.length;
            const nextRole = roles[nextIndex].text;

            setIsGlitching(true);

            const glitchText = nextRole.split('').map(char =>
                Math.random() > 0.6 && char !== ' ' ? chars[Math.floor(Math.random() * chars.length)] : char
            ).join('');

            setDisplay(glitchText);

            setTimeout(() => {
                setDisplay(nextRole);
                setRoleIndex(nextIndex);
                setIsGlitching(false);
            }, 150);
        }, 1200);

        return () => clearInterval(interval);
    }, [roleIndex, phase]);

    const currentRole = roles[roleIndex];

    return (
        <p
            className={`whitespace-nowrap text-base md:text-4xl font-mono tracking-widest ${currentRole.color} transition-all duration-300 absolute ${phase === 3 ? 'opacity-100' : 'opacity-0'}`}
            style={{
                textShadow: isGlitching ? `0 0 20px ${currentRole.shadow}, 0 0 40px ${currentRole.shadow}` : 'none',
                transform: isGlitching ? 'scale(1.05) skewX(-5deg)' : 'scale(1) skewX(0)',
            }}
        >
            {display}
        </p>
    );
};

const AnimatedHeroTitle = ({ text, view }: { text: string, view: string }) => {
    const [display, setDisplay] = useState(text);
    const [isLastName, setIsLastName] = useState(false);
    const chars = '01ABCDEF_';
    const lastName = 'DWIVEDI';

    useEffect(() => {
        const runGlitch = () => {
            const isNameSwap = Math.random() > 0.2;

            if (isNameSwap) {
                setDisplay(lastName);
                setIsLastName(true);
                setTimeout(() => {
                    setDisplay(text);
                    setIsLastName(false);
                }, 800);
            } else {
                const arr = (isLastName ? lastName : text).split('');
                const numGlitches = Math.floor(Math.random() * 3) + 2;
                for (let i = 0; i < numGlitches; i++) {
                    const idx = Math.floor(Math.random() * (isLastName ? lastName : text).length);
                    arr[idx] = chars[Math.floor(Math.random() * chars.length)];
                }
                setDisplay(arr.join(''));
                setTimeout(() => {
                    setDisplay(isLastName ? lastName : text);
                }, 60);
            }

            const nextTime = 800 + Math.random() * 700;
            setTimeout(runGlitch, nextTime);
        };

        const initialTimeout = setTimeout(runGlitch, 1000);
        return () => clearTimeout(initialTimeout);
    }, [text]);

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
            className="text-[23vw] md:text-[13rem] leading-none font-black tracking-tighter select-none cursor-crosshair flex justify-center gap-0.5 md:gap-2 group transition-all duration-700 relative z-20"
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 900 }}
        >
            {display.split('').map((char, i) => {
                const isGlitching = display !== text && display !== lastName;
                const isLastNameStr = display === lastName;

                return (
                    <span
                        key={i}
                        className={`inline-block transition-colors duration-300 ease-out py-2 [-webkit-text-stroke:1px_white] md:[-webkit-text-stroke:0px] ${isLastNameStr ? 'text-white' : 'text-white group-hover:text-[#FFFFFF]'}`}
                        style={{
                            textShadow: isGlitching
                                ? '0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.4)'
                                : isLastNameStr ? 'none' : '0 15px 35px rgba(0,0,0,0.8), 0 0 15px rgba(255,255,255,0.3)',
                            transform: isGlitching ? 'scale(1.1) skewX(-10deg)' : 'scale(1) skewX(0)',
                        }}
                    >
                        {char}
                    </span>
                )
            })}
        </h1>
    );
};

export default function Hero({ view, loadingProgress, titlePhase, onEnter }: HeroProps) {
    const shakeIntensity = useShakeDetection();

    return (
        <div
            className={`absolute inset-0 flex flex-col items-center justify-center cursor-pointer smooth-transition origin-center
        ${view === 'hero' ? 'opacity-100 z-20 scale-100' : 'opacity-0 pointer-events-none scale-105'}`}
            onClick={onEnter}
        >
            {/* Soft 3D Background */}
            <div className="absolute inset-0 flex items-center justify-center opacity-90">
                <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
                    <FloatingSpheres shakeIntensity={shakeIntensity} />
                </Canvas>
            </div>

            {/* Foreground Content */}
            <div className="relative z-10 flex flex-col items-center text-center">
                {loadingProgress < 100 ? (
                    <div className="flex flex-col items-center w-64 transition-opacity duration-300 opacity-100">
                        <div className="flex justify-between w-full text-xs font-mono text-[#FFFFFF] mb-2 tracking-widest uppercase">
                            <span>Initialising Systems</span>
                            <span>{loadingProgress}%</span>
                        </div>
                        <div className="w-full h-[1px] bg-[#27272A] overflow-hidden">
                            <div className="h-full bg-[#FFFFFF] transition-all duration-75" style={{ width: `${loadingProgress}%` }} />
                        </div>
                    </div>
                ) : (
                    <div className={`flex flex-col items-center text-center smooth-transition ${titlePhase > 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        <AnimatedHeroTitle text={portfolioData.personalInfo.name.split(' ')[0].toUpperCase()} view={view} />
                        <div className="h-12 mt-4 flex items-center justify-center relative">
                            <p className={`whitespace-nowrap text-xl md:text-4xl font-mono tracking-widest text-[#FFFFFF] transition-opacity duration-700 absolute ${titlePhase >= 1 && titlePhase < 3 ? 'opacity-100' : 'opacity-0'}`}>
                                DATA SCIENTIST.
                            </p>
                            <AnimatedRoleTitle phase={titlePhase} />
                        </div>
                        <div className="mt-16 md:mt-24">
                            <p className="text-[11px] md:text-[13px] font-mono text-[#FFFFFF] animate-pulse tracking-[0.4em] uppercase bg-black/40 px-8 py-4 rounded-full backdrop-blur-md border border-[#FFFFFF]/30 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all">
                                [ ACCESS TERMINAL ]
                            </p>
                        </div>
                    </div>
                )}
            </div>

            {/* Footer Credit */}
            <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 text-[7px] md:text-[9px] font-mono text-[#A1A1AA] uppercase tracking-[0.4em] flex items-center gap-4">
                <div className="hidden md:block w-16 h-[1px] bg-[#27272A]"></div>
                AESTHETIC: LIQUID CHROME
            </div>
        </div>
    );
}
