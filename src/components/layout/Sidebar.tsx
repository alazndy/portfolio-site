'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  Home, 
  Layers, 
  ShieldAlert,
  Activity,
  Cpu,
  Binary,
  Compass,
  Zap,
  User
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'INDEX', icon: Home, path: '/', color: 'bg-lcars-orange', code: '001' },
  { name: 'ABOUT', icon: User, path: '/about', color: 'bg-lcars-gold', code: '007' },
  { name: 'CRUCIX', icon: ShieldAlert, path: '/projects/Crucix', color: 'bg-lcars-cyan', code: '042' },
  { name: 'TRADER', icon: Activity, path: '/projects/AI_Trader', color: 'bg-lcars-purple', code: '119' },
  { name: 'TEK-UI', icon: Layers, path: '/projects/tek-ui', color: 'bg-lcars-gold', code: '256' },
  { name: 'NEXUS', icon: Cpu, path: '/projects/NEXUS', color: 'bg-lcars-red', code: '512' },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 flex-shrink-0 flex flex-col h-full bg-[#030305] border-r border-white/5 relative z-30 select-none">
      
      {/* ── LCARS TOP FRAME ── */}
      <div className="pt-8 px-4 space-y-1">
        <div className="flex items-end gap-2">
          <div className="w-1/2 h-16 bg-lcars-orange rounded-tl-[40px] relative">
             <div className="absolute top-4 left-6 text-[10px] font-black text-black tracking-[0.3em]">NAV_COM</div>
          </div>
          <div className="flex-1 h-8 bg-lcars-cyan/20 rounded-tr-lg" />
        </div>
        <div className="flex gap-2 pr-12">
          <div className="w-8 h-8 bg-lcars-orange rounded-bl-2xl" />
          <div className="flex-1 h-2 bg-lcars-orange/40 rounded-full mt-2" />
        </div>
      </div>

      {/* ── SYSTEM NAVIGATION ── */}
      <nav className="flex-1 px-4 mt-8 space-y-4">
        {navItems.map((item, idx) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.name}
              href={item.path}
              className="group flex flex-col gap-1 relative"
            >
              <div className="flex items-center gap-3">
                 {/* The Modular Segment */}
                 <div 
                  className={cn(
                    "lcars-btn w-20 h-8 transition-all duration-500 ease-in-out",
                    item.color,
                    isActive ? "w-32 brightness-125 shadow-[0_0_20px_rgba(255,255,255,0.1)]" : "opacity-60 hover:opacity-100 hover:w-24"
                  )}
                >
                  <span className="pr-4 z-10">{item.code}</span>
                </div>
                
                <div className={cn(
                  "flex flex-col transition-all duration-300",
                  isActive ? "translate-x-1" : "group-hover:translate-x-1"
                )}>
                  <span className={cn(
                    "text-[11px] font-black tracking-[0.2em] uppercase",
                    isActive ? "text-white" : "text-white/30 group-hover:text-white/60"
                  )}>
                    {item.name}
                  </span>
                  <span className="text-[7px] font-mono text-white/10 uppercase tracking-tighter">
                    Sector_{Math.floor(Math.random()*999)}_Alpha
                  </span>
                </div>
              </div>

              {isActive && (
                <motion.div 
                  layoutId="sidebar-active-glow"
                  className="absolute -left-4 top-0 bottom-0 w-1 bg-white shadow-[0_0_20px_#fff] z-20"
                />
              )}
            </Link>
          );
        })}

        {/* Dynamic Decoration */}
        <div className="pt-12 space-y-4 px-2">
           <div className="flex items-center gap-3 text-[9px] font-mono text-white/20 uppercase tracking-widest">
              <Compass className="w-3 h-3" />
              <span>Grid_Ref: 42.091.22</span>
           </div>
           <div className="grid grid-cols-4 gap-1">
              {[...Array(8)].map((_, i) => (
                <div key={i} className={cn(
                  "h-1 rounded-full",
                  i % 3 === 0 ? "bg-lcars-cyan/30" : "bg-white/5"
                )} />
              ))}
           </div>
        </div>
      </nav>

      {/* ── SYSTEM STATUS PANEL ── */}
      <div className="p-6 mt-auto space-y-6 bg-white/[0.02] border-t border-white/5">
        <div className="space-y-3">
          <div className="flex justify-between items-end">
             <div className="text-[9px] font-black font-mono text-white/40 uppercase tracking-[0.2em]">Core_Stability</div>
             <div className="text-[10px] font-mono text-lcars-green animate-pulse font-black uppercase">Optimal</div>
          </div>
          <div className="flex gap-0.5 h-3">
             {[...Array(20)].map((_, i) => (
               <motion.div 
                key={i}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                className={cn(
                  "flex-1 rounded-sm",
                  i < 14 ? "bg-lcars-cyan" : "bg-white/5"
                )}
               />
             ))}
          </div>
        </div>

        <div className="flex items-center justify-between">
           <div className="flex items-center gap-3">
              <div className="relative">
                 <Binary className="w-8 h-8 text-lcars-orange opacity-40" />
                 <motion.div 
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute inset-0 bg-lcars-orange/20 blur-lg"
                 />
              </div>
              <div className="text-[9px] font-mono leading-none space-y-1">
                <div className="text-white/60 font-black tracking-widest uppercase">GOKTUG_SYS</div>
                <div className="text-white/20 uppercase tracking-tighter">Auth_Level: 05</div>
              </div>
           </div>
           <div className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors cursor-pointer group">
              <Zap className="w-4 h-4 text-white/20 group-hover:text-lcars-gold transition-colors" />
           </div>
        </div>
      </div>

      {/* ── LCARS BOTTOMDirsek ── */}
      <div className="pb-8 px-4">
        <div className="flex items-start gap-2">
          <div className="w-1/3 h-12 bg-lcars-cyan rounded-bl-[40px] transition-all hover:w-1/2" />
          <div className="flex-1 h-2 bg-lcars-cyan/20 rounded-full mt-2" />
        </div>
      </div>
    </aside>
  );
}
