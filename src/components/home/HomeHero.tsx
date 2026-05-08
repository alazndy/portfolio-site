'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';

interface HomeHeroProps {
  projectCount: number;
  liveCount: number;
  categoryCount: number;
}

const stats = (p: number, l: number, c: number) => [
  { value: p,       suffix: '',  label: 'Proje'     },
  { value: l,       suffix: '',  label: 'Aktif'     },
  { value: c,       suffix: '',  label: 'Alan'      },
  { value: 5,       suffix: '+', label: 'Yıl'       },
];

export function HomeHero({ projectCount, liveCount, categoryCount }: HomeHeroProps) {
  return (
    <section className="relative pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden">

      {/* Ambient glow — single subtle orange */}
      <div
        aria-hidden
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.06) 0%, transparent 70%)' }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="space-y-10"
      >

        {/* Status pill */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-4 flex-wrap"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border text-[11px] font-mono text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] animate-pulse" />
            Available · Istanbul, TR
            <MapPin className="w-3 h-3 opacity-50" />
          </span>
        </motion.div>

        {/* Name — the centerpiece */}
        <div className="space-y-1">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-black tracking-tighter leading-[0.88] uppercase"
            style={{ fontSize: 'clamp(3.5rem, 12vw, 10rem)' }}
          >
            Göktuğ
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-black tracking-tighter leading-[0.88] uppercase"
            style={{
              fontSize: 'clamp(3.5rem, 12vw, 10rem)',
              color: 'var(--accent-primary)',
            }}
          >
            Turhan
          </motion.h1>
        </div>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="text-sm font-mono text-muted-foreground tracking-[0.15em] uppercase max-w-sm"
        >
          System Architect · Full-Stack · Embedded
        </motion.p>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.42 }}
          className="text-base text-foreground/60 leading-relaxed max-w-md"
        >
          Building infrastructure across disciplines — AI trading engines,
          automotive ECU systems, web platforms, and hardware from scratch.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex items-end gap-8 sm:gap-12 pt-2"
        >
          {stats(projectCount, liveCount, categoryCount).map(({ value, suffix, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.06 }}
              className="flex flex-col gap-0.5"
            >
              <span className="text-3xl sm:text-4xl font-black tabular-nums leading-none text-foreground">
                {value}{suffix}
              </span>
              <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                {label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex items-center gap-3 pt-1"
        >
          <a href="#projects"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all"
            style={{ background: 'var(--accent-primary)', color: '#fff' }}
          >
            Çalışmaları Gör
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="mailto:goktugturhan74@gmail.com"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm border border-border text-foreground/70 hover:text-foreground hover:border-foreground/20 transition-all"
          >
            İletişim
          </a>
        </motion.div>

      </motion.div>

      {/* Decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.9, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute bottom-0 left-0 right-0 h-px origin-left"
        style={{ background: 'linear-gradient(to right, var(--accent-primary), transparent)' }}
      />
    </section>
  );
}
