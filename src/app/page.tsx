import { getProjectsByCategory } from '@/lib/markdown';
import { Hero } from '@/components/home/Hero';
import { CategoryGrid } from '@/components/home/CategoryGrid';
import { Activity, Globe, ChevronRight, Lock } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function Home() {
  const categories = getProjectsByCategory();

  return (
    <div className="max-w-[1400px] mx-auto space-y-12 pb-20">

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 items-start">

        {/* ── LEFT: HERO & PROJECTS ── */}
        <div className="xl:col-span-8 space-y-10">
          <Hero />
          <CategoryGrid categories={categories} />
        </div>

        {/* ── RIGHT: SIDEBAR WIDGETS ── */}
        <aside className="xl:col-span-4 space-y-6 sticky top-10">

          {/* Identity */}
          <div className="glass rounded-2xl p-6 border-white/10">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-xl bg-lcars-orange/10 flex items-center justify-center border border-lcars-orange/20">
                <Lock className="w-5 h-5 text-lcars-orange" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-lcars-orange tracking-widest uppercase">Verified</div>
                <h3 className="text-base font-black text-white uppercase tracking-tight">Göktuğ Turhan</h3>
              </div>
            </div>
            <p className="text-xs text-white/40 leading-relaxed">
              Full-stack engineer & system architect. High-performance infrastructure, embedded systems, AI-driven applications.
            </p>
            <div className="grid grid-cols-2 gap-2 mt-4">
              <div className="p-2.5 bg-white/5 rounded-lg text-center">
                <div className="text-[9px] font-mono text-white/20 uppercase mb-1">Clearance</div>
                <div className="text-xs font-black text-lcars-cyan">Level 5</div>
              </div>
              <div className="p-2.5 bg-white/5 rounded-lg text-center">
                <div className="text-[9px] font-mono text-white/20 uppercase mb-1">Rank</div>
                <div className="text-xs font-black text-lcars-orange">Architect</div>
              </div>
            </div>
          </div>

          {/* Metrics */}
          <div className="glass rounded-2xl p-6 border-white/10">
            <div className="flex items-center gap-2 mb-5">
              <Activity className="w-4 h-4 text-lcars-cyan" />
              <span className="text-xs font-black text-white/50 uppercase tracking-widest">Expertise</span>
            </div>
            <div className="space-y-4">
              {[
                { label: 'Cloud & Infrastructure', val: 94, color: 'text-lcars-cyan', bar: 'bg-lcars-cyan' },
                { label: 'Security', val: 100, color: 'text-lcars-green', bar: 'bg-lcars-green' },
                { label: 'Hardware & Embedded', val: 88, color: 'text-lcars-orange', bar: 'bg-lcars-orange' },
                { label: 'AI & ML', val: 92, color: 'text-lcars-purple', bar: 'bg-lcars-purple' },
              ].map(m => (
                <div key={m.label} className="space-y-1.5">
                  <div className="flex justify-between text-[10px] font-mono">
                    <span className="text-white/30">{m.label}</span>
                    <span className={cn("font-black", m.color)}>{m.val}%</span>
                  </div>
                  <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                    <div className={cn("h-full opacity-60", m.bar)} style={{ width: `${m.val}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Projects */}
          <div className="glass rounded-2xl p-6 border-white/10">
            <div className="flex items-center gap-2 mb-4">
              <Globe className="w-4 h-4 text-lcars-gold" />
              <span className="text-xs font-black text-white/50 uppercase tracking-widest">Featured</span>
            </div>
            <div className="space-y-2">
              {[
                { name: 'GTab', cat: 'Productivity', href: '/gtab' },
                { name: 'AI Trader', cat: 'Finance', href: '/projects/AI_Trader' },
                { name: 'Crucix', cat: 'Security', href: '/projects/Crucix' },
                { name: 'tek-ui', cat: 'Infrastructure', href: '/projects/tek-ui' },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-lcars-green" />
                    <div>
                      <div className="text-sm font-semibold text-white/70 group-hover:text-white transition-colors">{item.name}</div>
                      <div className="text-[10px] font-mono text-white/20">{item.cat}</div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-white/10 group-hover:text-white/40 transition-all group-hover:translate-x-0.5" />
                </Link>
              ))}
            </div>
          </div>

        </aside>
      </div>
    </div>
  );
}
