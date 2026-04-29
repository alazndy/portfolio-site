'use client';

import { motion } from 'framer-motion';
import { 
  Terminal, 
  History, 
  Target, 
  ShieldCheck, 
  Code2, 
  Cpu, 
  Globe,
  Database,
  Layers,
  Zap,
  Shield,
  Activity,
  Box,
  Fingerprint
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Typewriter } from '@/components/ui/Typewriter';
import { SystemTower } from '@/components/ui/SystemTower';

const PROFILE_IMAGE = "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070";

export default function AboutPage() {
  return (
    <div className="max-w-[1600px] mx-auto space-y-32 pb-32 animate-in fade-in duration-1000">
      
      {/* ── [01] SYSTEM_IDENTITY: AUTH_HERO ── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden glass rounded-[64px] border-border">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#030305]/40 z-10" />
          <img 
            src={PROFILE_IMAGE} 
            alt="" 
            className="w-full h-full object-cover grayscale brightness-[0.2]"
          />
          <div className="absolute inset-y-0 left-0 w-full lg:w-3/5 overflow-hidden hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#030305] to-[#030305] z-10" />
            <img 
              src={PROFILE_IMAGE} 
              alt="System Architect" 
              className="w-full h-full object-cover grayscale-[0.8] opacity-80 scale-105 origin-left"
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-16 relative z-10 w-full py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="hidden lg:block lg:col-span-5 relative h-full">
               <div className="absolute top-1/2 left-0 -translate-y-1/2 p-6 glass border-lcars-orange/30 rounded-2xl rotate-[-5deg]">
                  <Fingerprint className="w-12 h-12 text-lcars-orange opacity-40 mb-3" />
                  <div className="text-[10px] font-mono text-lcars-orange font-black uppercase tracking-widest">Access_Granted</div>
                  <div className="text-xs font-mono text-foreground/40 uppercase mt-1">L5_ARCHITECT_VERIFIED</div>
               </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-12"
            >
              <div className="space-y-8">
                <div className="inline-flex items-center gap-4 px-5 py-2 rounded-sm bg-lcars-orange text-black font-black text-[11px] tracking-[0.4em] uppercase shadow-[0_0_25px_rgba(255,153,0,0.2)]">
                  <Shield className="w-4 h-4" />
                  Kernel_Operator: Level_05
                </div>
                
                <h1 className="text-7xl md:text-[120px] font-black tracking-[calc(-0.08em)] text-foreground uppercase leading-[0.75]">
                  Architecting <br/>
                  <span className="text-lcars-cyan">The Core.</span>
                </h1>

                <div className="relative group">
                  <div className="absolute -left-8 top-0 bottom-0 w-1 bg-lcars-cyan shadow-[0_0_15px_#00ccff] rounded-full" />
                  <div className="text-2xl md:text-3xl text-foreground/80 leading-[1.1] font-black tracking-tight uppercase">
                    <Typewriter 
                      text="Building mission-critical ecosystems where extreme performance meets visual authority. Secure. Scalable. Visual Excellence."
                      speed={20}
                      delay={1200}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 pt-12 border-t border-border">
                {[
                  { label: 'System_Nodes', val: '46 ACTIVE', icon: Box, color: 'text-lcars-orange' },
                  { label: 'Uptime_Index', val: '99.982%', icon: Activity, color: 'text-lcars-cyan' },
                  { label: 'Auth_Protocol', val: 'LEVEL 5', icon: ShieldCheck, color: 'text-lcars-green' },
                ].map((stat) => (
                  <div key={stat.label} className="space-y-3">
                    <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center border border-border bg-foreground/5", stat.color)}>
                      <stat.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-foreground tracking-tighter uppercase">{stat.val}</h3>
                      <p className="text-foreground/20 text-[9px] font-mono uppercase tracking-[0.3em]">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── [02] MISSION_VISION: CORE PHILOSOPHY ── */}
      <section className="relative overflow-hidden px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
               <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.85]">
                 Engineering <br/>
                 <span className="text-lcars-orange">Directives.</span>
               </h2>
               <div className="prose prose-invert max-w-xl text-foreground/60">
                  <p className="text-2xl text-foreground/80 font-medium italic">&quot;True engineering is creating an ecosystem that anticipates and prevents problems before they occur.&quot;</p>
               </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
               {[
                 { label: 'Secure_by_Design', desc: 'Day-0 RLS and kernel-level encryption protocols.', icon: Shield },
                 { label: 'Performance_is_Feature', desc: '0.0ms delay architecture with optimized data streams.', icon: Zap },
                 { label: 'Visual_Excellence', desc: 'Premium UI/UX standards that command authority.', icon: Layers }
               ].map((directive) => (
                 <div key={directive.label} className="p-8 glass rounded-[32px] border-border flex gap-8 items-center group hover:border-lcars-cyan/30 transition-all">
                    <div className="w-16 h-16 rounded-2xl bg-foreground/5 flex items-center justify-center border border-border group-hover:bg-lcars-cyan/10">
                       <directive.icon className="w-8 h-8 text-foreground/40 group-hover:text-lcars-cyan" />
                    </div>
                    <div>
                       <div className="text-[11px] font-black font-mono text-lcars-cyan tracking-[0.2em] uppercase">{directive.label}</div>
                       <p className="text-sm text-foreground/40 font-medium">{directive.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── [03] INTERACTIVE_CAMPUS: SYSTEM TOWER ── */}
      <section className="space-y-16 px-4">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 px-12">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-foreground/5 border border-border text-foreground/40 text-[10px] font-black tracking-[0.3em] uppercase">
              <Layers className="w-4 h-4" />
              SYSTEM_TOWER_VISUALIZATION
            </div>
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase text-foreground leading-none">
              The_Station
            </h2>
          </div>
          <p className="text-foreground/20 max-w-sm text-right hidden md:block font-mono text-[10px] leading-relaxed uppercase tracking-widest">
            Hover to trigger the exploded view sequence and analyze individual layer protocols and technical stacks.
          </p>
        </div>

        {/* The Animated Building Area */}
        <div className="w-full glass rounded-[64px] border-border overflow-visible bg-gradient-to-br from-white/[0.02] to-transparent min-h-[900px] flex items-center justify-center relative shadow-[0_0_100px_rgba(0,0,0,0.5)]">
           <SystemTower />
           
           {/* Decorative UI elements around the frame */}
           <div className="absolute top-12 left-12 glass p-6 border-lcars-orange/30 rounded-2xl">
              <div className="text-[10px] font-black text-lcars-orange uppercase tracking-widest animate-pulse">Scanning_Internal_Nodes...</div>
              <div className="text-[8px] font-mono text-foreground/20 mt-1 uppercase">Freq: 5.8GHz // Integrity: Stable</div>
           </div>
           
           <div className="absolute bottom-12 left-12 flex gap-1 opacity-20">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="w-1 h-8 bg-foreground rounded-full" />
              ))}
           </div>
        </div>
      </section>

      {/* ── SECURITY_FOOTER ── */}
      <footer className="flex items-center justify-between px-16 opacity-30 border-t border-border pt-12">
         <div className="flex items-center gap-6 text-[12px] font-mono font-black tracking-[0.5em] uppercase">
            <span className="text-lcars-cyan">END_OF_MISSION_FILE</span>
            <span className="text-foreground/40">ARCHITECT_GOKTUG_SYS</span>
         </div>
         <div className="text-[10px] font-mono text-lcars-orange uppercase tracking-widest">Authorized_Only</div>
      </footer>
    </div>
  );
}
