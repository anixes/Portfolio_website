'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
    hover3D?: boolean;
    delay?: number;
}

export default function GlassCard({
    children,
    className = '',
    hover3D = false,
    delay = 0
}: GlassCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const prefersReducedMotion = useReducedMotion();
    const shouldAnimate = !prefersReducedMotion;
    const enable3D = hover3D && !prefersReducedMotion;

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!enable3D || !cardRef.current) return;
        if (typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) return;

        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        // Max rotation of 5 degrees
        const rotateX = (y / (rect.height / 2)) * -5;
        const rotateY = (x / (rect.width / 2)) * 5;

        setRotation({ x: rotateX, y: rotateY });
    };

    const handleMouseLeave = () => {
        if (!enable3D) return;
        setRotation({ x: 0, y: 0 });
    };

    // Use inline styles for dynamic 3D rotation, while keeping static styling in classes
    const hoverStyles = enable3D ? {
        transform: `perspective(var(--perspective-card, 1200px)) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        transition: rotation.x === 0 && rotation.y === 0 ? 'var(--transition-smooth, transform 0.4s ease)' : 'none'
    } : {};

    return (
        <motion.div
            ref={cardRef}
            initial={shouldAnimate ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                delay: shouldAnimate ? delay : 0,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1]
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`glass-panel border-l-2 border-[#27272A] hover:border-[#FFFFFF] transition-colors ${className}`}
            style={hoverStyles}
        >
            {children}
        </motion.div>
    );
}
