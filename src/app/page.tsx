import { getProjectsByCategory } from '@/lib/markdown';
import { Hero } from '@/components/home/Hero';
import { CategoryGrid } from '@/components/home/CategoryGrid';
import { 
  Terminal, 
  Zap, 
  Shield, 
  Database, 
  Activity, 
  Globe, 
  Cpu, 
  Lock,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function Home() {
  const categories = getProjectsByCategory();
  const allProjectsCount = Object.values(categories).flat().length;

  return (
    <div className="max-w-[1600px] mx-auto space-y-12 animate-in fade-in duration-1000 pb-20">
      
      {/* ── SYSTEM TOP BAR ── */}
      <div className="flex items-center gap-6 border-b border-white/5 pb-8 overflow-hidden whitespace-nowrap">
         <div className="flex items-center gap-3 px-4 py-2 bg-lcars-orange text-black font-black text-[10px] tracking-[0.3em] rounded-sm">
            STATUS: AUTHORIZED
         </div>
         <div className="flex gap-8 text-[10px] font-mono text-white/20 uppercase tracking-widest animate-marquee">
            <span>Kernel_Secure: Verified</span>
            <span>Uptime: 99.982%</span>
            <span>Active_Nodes: {allProjectsCount}</span>
            <span>Region: EU-WEST-1</span>
            <span>Encryption: AES-256-GCM</span>
            <span>Last_Sync: {new Date().toLocaleTimeString()}</span>
         </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 items-start">
        
        {/* ── LEFT COLUMN: HERO & IDENTITY ── */}
        <div className="xl:col-span-8 space-y-12">
          <Hero />
          
          {/* Main Module Entry */}
          <div className="space-y-8">
             <div className="flex items-center gap-6">
                <h2 className="text-4xl font-black tracking-tighter uppercase flex items-center gap-4 text-white">
                  <span className="w-2 h-10 bg-lcars-cyan shadow-[0_0_15px_#00ccff] rounded-full" />
                  Primary_Systems
                </h2>
                <div className="flex-1 h-[1px] bg-white/5" />
             </div>
             
             <CategoryGrid categories={categories} />
          </div>
        </div>

        {/* ── RIGHT COLUMN: SYSTEM METRICS & LOGS ── */}
        <aside className="xl:col-span-4 space-y-8 sticky top-10">
          
          {/* Auth Card */}
          <div className="glass rounded-[32px] p-8 border-white/10 relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-6 opacity-10">
                <Lock className="w-12 h-12 text-lcars-orange" />
             </div>
             <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-lcars-orange/10 flex items-center justify-center border border-lcars-orange/20">
                   <Lock className="w-6 h-6 text-lcars-orange" />
                </div>
                <div>
                   <div className="text-[10px] font-mono font-black text-lcars-orange tracking-widest uppercase">Identity_Verified</div>
                   <h3 className="text-xl font-black text-white uppercase tracking-tight">GOKTUG_SYS_ADMIN</h3>
                </div>
             </div>
             
             <div className="space-y-4">
                <p className="text-xs text-white/40 font-mono leading-relaxed uppercase tracking-tighter">
                   Senior Full-stack Engineer & System Architect specializing in high-performance infrastructures and secure data ecosystems.
                </p>
                <div className="grid grid-cols-2 gap-3">
                   <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-center group-hover:border-lcars-cyan/30 transition-all">
                      <div className="text-[10px] font-mono text-white/20 uppercase mb-1">Clearance</div>
                      <div className="text-sm font-black text-lcars-cyan">LEVEL_5</div>
                   </div>
                   <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-center group-hover:border-lcars-orange/30 transition-all">
                      <div className="text-[10px] font-mono text-white/20 uppercase mb-1">Rank</div>
                      <div className="text-sm font-black text-lcars-orange">ARCHITECT</div>
                   </div>
                </div>
             </div>
          </div>

          {/* Quick Metrics Dashboard */}
          <div className="glass rounded-[32px] p-8 border-white/10 space-y-8">
             <div className="flex items-center gap-3">
                <Activity className="w-5 h-5 text-lcars-cyan" />
                <span className="text-xs font-black font-mono tracking-widest text-white/60 uppercase">Ecosystem_Metrics</span>
             </div>

             <div className="space-y-6">
                {[
                  { label: 'Cloud_Infrastructure', val: 94, color: 'text-lcars-cyan', bar: 'bg-lcars-cyan' },
                  { label: 'Security_Hardening', val: 100, color: 'text-lcars-green', bar: 'bg-lcars-green' },
                  { label: 'Hardware_Integration', val: 88, color: 'text-lcars-orange', bar: 'bg-lcars-orange' },
                  { label: 'AI_Orchestration', val: 92, color: 'text-lcars-purple', bar: 'bg-lcars-purple' },
                ].map(metric => (
                  <div key={metric.label} className="space-y-2">
                     <div className="flex justify-between text-[10px] font-mono font-bold tracking-widest px-1">
                        <span className="text-white/30 uppercase">{metric.label}</span>
                        <span className={cn("font-black", metric.color)}>{metric.val}%</span>
                     </div>
                     <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                        <div className={cn("h-full opacity-50", metric.bar)} style={{ width: `${metric.val}%` }} />
                     </div>
                  </div>
                ))}
             </div>
          </div>

          {/* Recent Transmissions (Featured Projects) */}
          <div className="glass rounded-[32px] p-8 border-white/10 space-y-6">
             <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-lcars-gold" />
                <span className="text-xs font-black font-mono tracking-widest text-white/60 uppercase">Recent_Transmissions</span>
             </div>
             
             <div className="space-y-4">
                {[
                  { name: 'GTab', cat: 'Productivity', status: 'Live', href: '/gtab' },
                  { name: 'AI_Trader', cat: 'Finance', status: 'Live' },
                  { name: 'Crucix', cat: 'Security', status: 'Active' },
                  { name: 'tek-ui', cat: 'Infra', status: 'Stable' },
                ].map((item) => (
                  <Link 
                    key={item.name}
                    href={item.href || `/projects/${item.name}`}
                    className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-transparent hover:border-white/10 hover:bg-white/10 transition-all group"
                  >
                    <div className="flex items-center gap-4">
                       <div className="w-2 h-2 rounded-full bg-lcars-green animate-pulse" />
                       <div>
                          <div className="text-sm font-black text-white/80 group-hover:text-lcars-cyan transition-colors">{item.name}</div>
                          <div className="text-[10px] font-mono text-white/20 uppercase tracking-tighter">{item.cat} // {item.status}</div>
                       </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-white/10 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
             </div>
          </div>

          {/* Decorative Terminal Code Widget */}
          <div className="h-40 glass rounded-[32px] border-white/5 p-6 overflow-hidden relative font-mono text-[10px] text-lcars-cyan/30 leading-tight select-none">
             <div className="absolute inset-0 bg-gradient-to-t from-[#06060a] to-transparent z-10" />
             <code>
                {`while(system.alive) {
  process.optimize();
  security.verify();
  data.stream();
  interface.render({ 
    theme: 'CYBER_INDUSTRIAL',
    vibe: 'PREMIUM'
  });
}`}
             </code>
          </div>
        </aside>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 40s linear infinite;
        }
      `}} />
    </div>
  );
}
