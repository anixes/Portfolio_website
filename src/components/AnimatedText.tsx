import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface WordProps {
  word: string;
  range: [number, number];
  progress: MotionValue<number>;
}

const Word: React.FC<WordProps> = ({ word, range, progress }) => {
  const opacity = useTransform(progress, range, [0.35, 1]);

  return (
    <motion.span
      style={{ opacity }}
      className="inline-block mr-[0.35em] mb-[0.1em] text-white font-medium select-none"
    >
      {word}
    </motion.span>
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
