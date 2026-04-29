'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Layers, ShieldAlert, Activity, Cpu, User } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Index', icon: Home, path: '/', accent: 'bg-lcars-orange' },
  { name: 'About', icon: User, path: '/about', accent: 'bg-lcars-gold' },
  { name: 'Crucix', icon: ShieldAlert, path: '/projects/Crucix', accent: 'bg-lcars-cyan' },
  { name: 'AI Trader', icon: Activity, path: '/projects/AI_Trader', accent: 'bg-lcars-purple' },
  { name: 'tek-ui', icon: Layers, path: '/projects/tek-ui', accent: 'bg-lcars-gold' },
  { name: 'NEXUS', icon: Cpu, path: '/projects/NEXUS', accent: 'bg-lcars-red' },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-60 shrink-0 flex flex-col h-full bg-[#030305] border-r border-white/5 relative z-30 select-none">

      {/* Logo */}
      <div className="px-6 py-6 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-2 h-8 bg-lcars-orange rounded-full" />
          <div>
            <div className="text-sm font-black text-white tracking-widest uppercase">Göktuğ</div>
            <div className="text-[10px] font-mono text-white/30 uppercase tracking-wider">System Architect</div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-6 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.name}
              href={item.path}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200",
                isActive
                  ? "bg-white/8 text-white"
                  : "text-white/40 hover:text-white/70 hover:bg-white/5"
              )}
            >
              <div className={cn("w-1 h-4 rounded-full shrink-0 transition-opacity", item.accent, isActive ? "opacity-100" : "opacity-0")} />
              <item.icon className="w-4 h-4 shrink-0" />
              <span className="text-xs font-semibold tracking-wide">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-lcars-green animate-pulse" />
          <span className="text-[10px] font-mono text-white/30 uppercase tracking-wider">Systems Online</span>
        </div>
      </div>
    </aside>
  );
}
