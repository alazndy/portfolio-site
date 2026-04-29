'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Cpu, Shield, Zap, Globe, Database, Activity } from 'lucide-react';

const systems = [
  { id: 'TRADER', name: 'AI_TRADER', icon: Activity, color: 'bg-lcars-orange', x: 0, y: 0, level: 'L5' },
  { id: 'CRUCIX', name: 'CRUCIX_OS', icon: Shield, color: 'bg-lcars-red', x: 1, y: 0, level: 'L4' },
  { id: 'TEKUI', name: 'T_ECOSYSTEM', icon: Cpu, color: 'bg-lcars-cyan', x: 0, y: 1, level: 'CORE' },
  { id: 'ENVI', name: 'ENV_I_GLOBAL', icon: Globe, color: 'bg-lcars-purple', x: 1, y: 1, level: 'L5' },
  { id: 'MARKET', name: 'T_MARKET', icon: Database, color: 'bg-lcars-gold', x: 2, y: 0, level: 'L3' },
  { id: 'NEXUS', name: 'NEXUS_CORE', icon: Zap, color: 'bg-lcars-cyan', x: 2, y: 1, level: 'L4' },
];

export function IsometricGrid() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="relative w-full h-full flex items-center justify-center p-20 overflow-visible">
      {/* Isometric Wrapper */}
      <div 
        className="relative"
        style={{ 
          transform: 'rotateX(60deg) rotateZ(-45deg)',
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Base Grid Pattern */}
        <div className="absolute -inset-20 blueprint-bg opacity-20 -z-10" style={{ transform: 'translateZ(-1px)' }} />

        <div className="grid grid-cols-3 gap-8">
          {systems.map((system) => {
            const isHovered = hoveredId === system.id;
            const isDimmed = hoveredId && hoveredId !== system.id;

            return (
              <div
                key={system.id}
                className="relative w-40 h-40"
                style={{ transformStyle: 'preserve-3d' }}
                onMouseEnter={() => setHoveredId(system.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Module Block */}
                <motion.div
                  animate={{ 
                    z: isHovered ? 40 : 0,
                    scale: isHovered ? 1.05 : 1,
                    opacity: isDimmed ? 0.3 : 1
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className={cn(
                    "w-full h-full glass border-2 transition-colors duration-500 relative flex flex-col items-center justify-center gap-4",
                    isHovered ? "border-lcars-cyan shadow-[0_0_40px_rgba(0,204,255,0.4)] bg-lcars-cyan/10" : "border-white/10"
                  )}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Floating Icon */}
                  <system.icon className={cn(
                    "w-12 h-12 transition-all duration-500",
                    isHovered ? "text-lcars-cyan scale-110" : "text-white/20"
                  )} />
                  
                  {/* System Label (Isometric Side) */}
                  <div className="absolute -bottom-8 left-0 text-[10px] font-mono font-black text-white/40 uppercase tracking-widest whitespace-nowrap">
                    {system.name}
                  </div>

                  {/* Visual Authority Level */}
                  <div className={cn(
                    "absolute top-2 right-2 px-2 py-0.5 rounded text-[8px] font-black font-mono border transition-all",
                    isHovered ? "bg-lcars-cyan text-black border-lcars-cyan" : "bg-white/5 text-white/20 border-white/10"
                  )}>
                    {system.level}
                  </div>

                  {/* 3D Sides (The "Thickness") */}
                  <div className={cn(
                    "absolute top-0 left-full w-[40px] h-full origin-left transition-all duration-500",
                    system.color,
                    isHovered ? "opacity-40" : "opacity-5"
                  )} 
                    style={{ transform: 'rotateY(90deg)' }} 
                  />
                  <div className={cn(
                    "absolute top-full left-0 w-full h-[40px] origin-top transition-all duration-500",
                    system.color,
                    isHovered ? "opacity-30" : "opacity-5"
                  )} 
                    style={{ transform: 'rotateX(-90deg)' }} 
                  />
                </motion.div>

                {/* Data Popup when Hovered */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, x: 20, y: 20, rotateZ: 45, rotateX: -60 }}
                      animate={{ opacity: 1, x: 80, y: -40, rotateZ: 45, rotateX: -60 }}
                      exit={{ opacity: 0 }}
                      className="absolute top-0 left-full z-50 pointer-events-none w-64"
                    >
                      <div className="glass p-6 rounded-2xl border-lcars-cyan/50 space-y-3">
                         <div className="flex items-center justify-between">
                            <span className="text-[10px] font-mono text-lcars-cyan font-black uppercase">Module_Active</span>
                            <div className="w-2 h-2 rounded-full bg-lcars-green animate-pulse" />
                         </div>
                         <h4 className="text-xl font-black text-white uppercase">{system.name}</h4>
                         <p className="text-[10px] text-white/40 font-mono leading-relaxed uppercase">
                           Sector: {Math.floor(Math.random()*999)}<br/>
                           Auth: Authorized_Personnel<br/>
                           Status: Processing_Data...
                         </p>
                         <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden mt-2">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: "100%" }}
                              transition={{ duration: 1 }}
                              className="h-full bg-lcars-cyan"
                            />
                         </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
