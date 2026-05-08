'use client';

import { memo } from 'react';
import { Activity, Globe, ChevronRight, Lock } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useI18n } from '@/lib/i18n';

export const HomeWidgets = memo(function HomeWidgets() {
  const { t } = useI18n();
  
  return (
    <aside className="xl:col-span-4 space-y-6 sticky top-10">
      {/* Identity */}
      <div className="glass rounded-2xl p-6 border-border">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-10 h-10 rounded-xl bg-lcars-orange/10 flex items-center justify-center border border-lcars-orange/20">
            <Lock className="w-5 h-5 text-lcars-orange" />
          </div>
          <div>
            <div className="text-[10px] font-mono text-lcars-orange tracking-widest uppercase">Doğrulanmış</div>
            <h3 className="text-base font-black text-foreground uppercase tracking-tight">Göktuğ Turhan</h3>
          </div>
        </div>
        <p className="text-xs text-foreground/60 leading-relaxed">
          {t('home.subtitle')}
        </p>
        <div className="grid grid-cols-2 gap-2 mt-4">
          <div className="p-2.5 bg-foreground/5 rounded-lg text-center">
            <div className="text-[9px] font-mono text-foreground/40 uppercase mb-1">Yetki</div>
            <div className="text-xs font-black text-lcars-cyan">Seviye 5</div>
          </div>
          <div className="p-2.5 bg-foreground/5 rounded-lg text-center">
            <div className="text-[9px] font-mono text-foreground/40 uppercase mb-1">Rütbe</div>
            <div className="text-xs font-black text-lcars-orange">Mimar</div>
          </div>
        </div>
      </div>

      {/* Metrics */}
      <div className="glass rounded-2xl p-6 border-border">
        <div className="flex items-center gap-2 mb-5">
          <Activity className="w-4 h-4 text-lcars-cyan" />
          <span className="text-xs font-black text-foreground/50 uppercase tracking-widest">{t('home.tech')}</span>
        </div>
        <div className="space-y-4">
          {[
            { label: 'Cloud & Altyapı', val: 94, color: 'text-lcars-cyan', bar: 'bg-lcars-cyan' },
            { label: 'Güvenlik', val: 100, color: 'text-lcars-green', bar: 'bg-lcars-green' },
            { label: 'Donanım & Gömülü', val: 88, color: 'text-lcars-orange', bar: 'bg-lcars-orange' },
            { label: 'AI & ML', val: 92, color: 'text-lcars-purple', bar: 'bg-lcars-purple' },
          ].map(m => (
            <div key={m.label} className="space-y-1.5">
              <div className="flex justify-between text-[10px] font-mono">
                <span className="text-foreground/50">{m.label}</span>
                <span className={cn("font-black", m.color)}>{m.val}%</span>
              </div>
              <div className="w-full h-1 bg-foreground/10 rounded-full overflow-hidden">
                <div className={cn("h-full opacity-60", m.bar)} style={{ width: `${m.val}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Projects */}
      <div className="glass rounded-2xl p-6 border-border">
        <div className="flex items-center gap-2 mb-4">
          <Globe className="w-4 h-4 text-lcars-gold" />
          <span className="text-xs font-black text-foreground/50 uppercase tracking-widest">Öne Çıkanlar</span>
        </div>
        <div className="space-y-2">
          {[
            { name: 'GTab', cat: 'Productivity', href: '/gtab' },
            { name: 'AI Trader', cat: 'Finance', href: '/projects/AI_Trader' },
            { name: 'tek-ui', cat: 'Infrastructure', href: '/projects/tek-ui' },
            { name: 'ENV-I', cat: 'Industrial', href: '/projects/ENV-I' },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center justify-between p-3 rounded-xl hover:bg-foreground/5 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-lcars-green" />
                <div>
                  <div className="text-sm font-semibold text-foreground/70 group-hover:text-foreground transition-colors">{item.name}</div>
                  <div className="text-[10px] font-mono text-foreground/40">{item.cat}</div>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-foreground/20 group-hover:text-foreground/60 transition-all group-hover:translate-x-0.5" />
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
});
