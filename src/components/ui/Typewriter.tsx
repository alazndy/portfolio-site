'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
}

export function Typewriter({ text, speed = 30, delay = 0, className }: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [start, setStart] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStart(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!start) return;

    if (displayedText.length < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, speed);
      return () => clearTimeout(timer);
    }
  }, [displayedText, text, speed, start]);

  return (
    <span className={className}>
      {displayedText}
      {displayedText.length < text.length && (
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="inline-block w-1.5 h-4 bg-lcars-cyan align-middle ml-1"
        />
      )}
    </span>
  );
}
