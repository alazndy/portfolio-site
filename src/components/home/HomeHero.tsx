'use client';

import { motion } from 'framer-motion';
import { ArrowDown, MapPin, Zap } from 'lucide-react';

interface HomeHeroProps {
  projectCount: number;
  liveCount: number;
  categoryCount: number;
}

export function HomeHero({ projectCount, liveCount, categoryCount }: HomeHeroProps) {
  return (
    <section className="relative pt-8 pb-16 md:pt-14 md:pb-20">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-20 right-1/4 w-64 h-64 bg-cyan-500/6 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="space-y-7"
      >
        {/* Status badge */}
        <div className="flex items-center gap-3 flex-wrap">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-400 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available for work
          </span>
          <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-foreground/30">
            <MapPin className="w-3 h-3" />
            Istanbul, Turkey
          </span>
        </div>

        {/* Name */}
        <div className="space-y-2">
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-[0.88] text-foreground">
            Göktuğ<br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 via-amber-300 to-cyan-400">
              Turhan
            </span>
          </h1>
          <p className="text-sm md:text-base font-mono text-foreground/40 uppercase tracking-[0.2em]">
            System Architect · Full-Stack Engineer · Embedded Systems
          </p>
        </div>

        {/* Bio */}
        <p className="max-w-lg text-sm md:text-base text-foreground/55 leading-relaxed">
          Building multi-disciplinary infrastructure — from AI-driven trading engines and automotive ECU systems to global-scale web platforms and custom hardware.
        </p>

        {/* Stats */}
        <div className="flex items-center gap-4 sm:gap-6 flex-wrap pt-1">
          {[
            { value: projectCount.toString(), label: 'Projects' },
            { value: liveCount.toString(),    label: 'Live' },
            { value: categoryCount.toString(), label: 'Domains' },
            { value: '5+',                    label: 'Years' },
          ].map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center sm:items-start">
              <span className="text-2xl sm:text-3xl font-black text-foreground tabular-nums">{value}</span>
              <span className="text-[10px] font-mono text-foreground/30 uppercase tracking-widest">{label}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3 pt-2">
          <a href="#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-foreground text-background text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            <Zap className="w-4 h-4" />
            View Work
          </a>
          <a href="mailto:goktugturhan74@gmail.com"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border text-sm font-semibold text-foreground/70 hover:text-foreground hover:border-foreground/20 transition-all"
          >
            Contact
          </a>
        </div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="hidden md:flex absolute bottom-4 right-0 items-center gap-2 text-foreground/20 text-[10px] font-mono uppercase tracking-widest"
      >
        <ArrowDown className="w-3 h-3 animate-bounce" />
        scroll
      </motion.div>
    </section>
  );
}
