'use client';

import { motion } from 'framer-motion';
import { Typewriter } from '@/components/ui/Typewriter';

export function Hero() {
  return (
    <section className="py-16 space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-lcars-orange/10 border border-lcars-orange/20 rounded-full">
          <div className="w-1.5 h-1.5 rounded-full bg-lcars-orange animate-pulse" />
          <span className="text-[10px] font-mono text-lcars-orange uppercase tracking-widest">Available for work</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] uppercase text-white">
          Engineering<br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-lcars-orange to-lcars-cyan">
            & Operations
          </span><br />
          Ecosystem
        </h1>

        <p className="max-w-xl text-base text-white/50 leading-relaxed font-mono">
          <Typewriter
            text="Secure by design. Performance is a feature. Building multi-disciplinary infrastructure from automotive systems to global AI trade engines."
            speed={18}
            delay={600}
          />
        </p>
      </motion.div>
    </section>
  );
}
