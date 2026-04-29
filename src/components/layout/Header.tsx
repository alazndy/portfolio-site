'use client';

import { Terminal, Shield, Wifi, Battery, Command } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Header() {
  const [time, setTime] = useState<Date | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTime(new Date());
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const openCommandPalette = () => {
    const e = new KeyboardEvent('keydown', { key: 'k', ctrlKey: true, metaKey: true, bubbles: true });
    window.dispatchEvent(e);
  };

  return (
    <header className="h-16 border-b border-white/5 glass flex items-center justify-between px-6 z-10 relative shrink-0">
      <div className="scanline" />
      
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 px-3 py-1 bg-lcars-orange/10 border border-lcars-orange/30 rounded text-lcars-orange">
          <Terminal className="w-4 h-4" />
          <span className="text-[10px] font-mono font-black tracking-widest">ACCESS: GOKTUG_SYS</span>
        </div>
        
        <div className="hidden md:flex items-center gap-6 text-[10px] font-mono text-white/30">
          <div className="flex items-center gap-1">
            <Shield className="w-3.5 h-3.5 text-lcars-green" />
            <span>ENCRYPTED</span>
          </div>
          <div className="flex items-center gap-1">
            <Wifi className="w-3.5 h-3.5 text-lcars-cyan" />
            <span>LINK: STABLE</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-8">
        {/* Command Palette Button */}
        <button 
          onClick={openCommandPalette}
          className="flex items-center gap-4 px-4 py-1.5 glass rounded-xl border-white/5 hover:border-lcars-cyan/50 hover:bg-white/5 transition-all group group cursor-pointer"
        >
          <div className="flex items-center gap-2">
             <Command className="w-3.5 h-3.5 text-white/40 group-hover:text-lcars-cyan" />
             <span className="text-[10px] font-mono font-black tracking-widest text-white/30 group-hover:text-white/60 uppercase">System_Search</span>
          </div>
          <div className="px-2 py-0.5 bg-white/5 rounded text-[9px] font-mono text-white/20 border border-white/10 group-hover:text-lcars-cyan group-hover:border-lcars-cyan/20">
             CTRL+K
          </div>
        </button>

        <div className="text-right min-w-[120px]">
          {mounted && time ? (
            <>
              <div className="text-xs font-mono font-black text-lcars-cyan tracking-widest">
                {time.toLocaleTimeString('en-US', { hour12: false })}
              </div>
              <div className="text-[8px] font-mono text-white/30 uppercase tracking-tighter">
                {time.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              </div>
            </>
          ) : (
            <div className="text-[10px] font-mono text-white/10 animate-pulse uppercase">Connecting...</div>
          )}
        </div>
      </div>
    </header>
  );
}
