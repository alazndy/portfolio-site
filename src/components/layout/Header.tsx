'use client';

import { Terminal, Shield, Wifi, Battery, Command, Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { useI18n } from '@/lib/i18n';

export function Header() {
  const [time, setTime] = useState<Date | null>(null);
  const [mounted, setMounted] = useState(false);

  const { theme, setTheme } = useTheme();
  const { lang, setLang, t } = useI18n();

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

      <div className="flex items-center gap-4 md:gap-8">
        <div className="flex items-center gap-2">
          {/* Language Toggle */}
          <button
            onClick={() => setLang(lang === 'tr' ? 'en' : 'tr')}
            className="flex items-center justify-center w-8 h-8 rounded-lg glass border-white/5 hover:border-lcars-cyan/50 hover:bg-white/5 transition-all group cursor-pointer"
            title="Toggle Language"
          >
            <span className="text-[10px] font-mono font-black text-foreground/40 group-hover:text-lcars-cyan uppercase">{lang}</span>
          </button>
          
          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="flex items-center justify-center w-8 h-8 rounded-lg glass border-white/5 hover:border-lcars-cyan/50 hover:bg-white/5 transition-all group cursor-pointer"
            title="Toggle Theme"
          >
            {mounted && theme === 'dark' ? (
              <Sun className="w-3.5 h-3.5 text-foreground/40 group-hover:text-lcars-cyan" />
            ) : (
              <Moon className="w-3.5 h-3.5 text-foreground/40 group-hover:text-lcars-cyan" />
            )}
          </button>
        </div>

        {/* Command Palette Button */}
        <button 
          onClick={openCommandPalette}
          className="hidden md:flex items-center gap-4 px-4 py-1.5 glass rounded-xl border-white/5 hover:border-lcars-cyan/50 hover:bg-white/5 transition-all group cursor-pointer"
        >
          <div className="flex items-center gap-2">
             <Command className="w-3.5 h-3.5 text-foreground/40 group-hover:text-lcars-cyan" />
             <span className="text-[10px] font-mono font-black tracking-widest text-foreground/30 group-hover:text-foreground/60 uppercase">{t('header.search')}</span>
          </div>
          <div className="px-2 py-0.5 bg-foreground/5 rounded text-[9px] font-mono text-foreground/20 border border-foreground/10 group-hover:text-lcars-cyan group-hover:border-lcars-cyan/20">
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
                {time.toLocaleDateString(lang === 'tr' ? 'tr-TR' : 'en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              </div>
            </>
          ) : (
            <div className="text-[10px] font-mono text-foreground/10 animate-pulse uppercase">Connecting...</div>
          )}
        </div>
      </div>
    </header>
  );
}
