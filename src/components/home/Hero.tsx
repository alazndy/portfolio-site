'use client';

import { motion } from 'framer-motion';
import { Typewriter } from '@/components/ui/Typewriter';
import { Terminal, Shield, Zap } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Decorative Cyber Background Element */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-lcars-cyan/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute top-1/2 -right-48 w-[600px] h-[600px] bg-lcars-orange/5 rounded-full blur-[150px] -z-10" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-8"
      >
        <div className="flex items-center gap-4">
          <div className="px-4 py-1.5 bg-lcars-cyan text-black font-black text-[10px] tracking-[0.4em] uppercase rounded-full">
            SYSTEM_BOOT_INIT
          </div>
          <div className="flex items-center gap-2 text-lcars-cyan/50 font-mono text-[10px] tracking-widest uppercase">
            <Shield className="w-3 h-3" />
            PROTOCOL_V15_SECURE
          </div>
        </div>

        <div className="space-y-2">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] uppercase"
          >
            Engineering <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lcars-orange via-lcars-gold to-lcars-cyan animate-gradient-x">
              & Operations
            </span> <br/>
            <span className="flex items-center gap-6">
              Ecosystem
              <div className="hidden md:flex gap-1 h-12 items-end">
                {[...Array(6)].map((_, i) => (
                  <motion.div 
                    key={i}
                    animate={{ height: [12, 48, 12] }}
                    transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.1 }}
                    className="w-2 bg-lcars-cyan/30 rounded-t-full"
                  />
                ))}
              </div>
            </span>
          </motion.h1>
        </div>

        <div className="max-w-3xl glass p-8 rounded-3xl border-white/5 relative group">
          <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-100 transition-opacity">
            <Zap className="w-6 h-6 text-lcars-gold" />
          </div>
          <div className="text-xl md:text-2xl text-white/70 font-medium leading-relaxed font-mono tracking-tight">
            <Typewriter 
              text="Secure by Design. Performance is a Feature. Visual Excellence. Building a multi-disciplinary engineering infrastructure from automotive systems to global AI trade motors."
              speed={15}
              delay={800}
            />
          </div>
        </div>
      </motion.div>

      {/* Background Grid Accent */}
      <div className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
