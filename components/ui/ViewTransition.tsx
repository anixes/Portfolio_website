'use client';

import React from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';

interface ViewTransitionProps {
    isVisible: boolean;
    children: React.ReactNode;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
    className?: string;
}

export default function ViewTransition({
    isVisible,
    children,
    direction = 'up',
    className = ''
}: ViewTransitionProps) {
    const prefersReducedMotion = useReducedMotion();

    const variants = {
        hidden: {
            opacity: 0,
            y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
            x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0,
            pointerEvents: 'none' as const,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            pointerEvents: 'auto' as const,
            transition: {
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
            }
        },
        exit: {
            opacity: 0,
            y: direction === 'up' ? -20 : direction === 'down' ? 20 : 0,
            x: direction === 'left' ? -20 : direction === 'right' ? 20 : 0,
            pointerEvents: 'none' as const,
            transition: {
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1],
            }
        }
    };

    const reducedMotionVariants = {
        hidden: { opacity: 0, pointerEvents: 'none' as const },
        visible: { opacity: 1, pointerEvents: 'auto' as const },
        exit: { opacity: 0, pointerEvents: 'none' as const }
    };

    return (
        <AnimatePresence mode="wait">
            {isVisible && (
                <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={prefersReducedMotion ? reducedMotionVariants : variants}
                    className={`absolute inset-0 ${className}`}
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    );
}
