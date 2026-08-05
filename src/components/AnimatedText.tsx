import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface WordProps {
  word: string;
  range: [number, number];
  progress: MotionValue<number>;
}

const Word: React.FC<WordProps> = ({ word, range, progress }) => {
  const opacity = useTransform(progress, range, [0.3, 1]);
  const y = useTransform(progress, range, [3, 0]);

  return (
    <span className="relative inline-block mr-[0.3em] mb-[0.15em]">
      <span className="opacity-25 select-none text-[#A0B0C0]">{word}</span>
      <motion.span
        style={{ opacity, y }}
        className="absolute left-0 top-0 text-[#FFFFFF] font-medium drop-shadow-sm"
      >
        {word}
      </motion.span>
    </span>
  );
};

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = "" }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.85', 'end 0.35'],
  });

  const words = text.split(" ");
  const totalWords = words.length;

  return (
    <p ref={containerRef} className={`${className} leading-relaxed tracking-normal`}>
      {words.map((word, wordIndex) => {
        const start = wordIndex / totalWords;
        const end = Math.min(1, (wordIndex + 2) / totalWords);
        return (
          <Word
            key={wordIndex}
            word={word}
            range={[start, end]}
            progress={scrollYProgress}
          />
        );
      })}
    </p>
  );
};
