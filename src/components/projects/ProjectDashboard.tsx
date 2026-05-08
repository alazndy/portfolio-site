'use client';

import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, RadarChart, PolarGrid, Radar, PolarAngleAxis
} from 'recharts';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { 
  Activity, Shield, Cpu, Database, Zap, Gauge, 
  Smartphone, Monitor, Radio, GitBranch, Layers
} from 'lucide-react';

// --- Data Sets ---

const aiTraderData = [
  { year: '2015', reel: 3.3, nominal: 12.4 },
  { year: '2017', reel: 29.7, nominal: 45.2 },
  { year: '2019', reel: 15.0, nominal: 28.6 },
  { year: '2021', reel: 4.3, nominal: 42.0 },
  { year: '2022', reel: 73.5, nominal: 185.0 },
  { year: '2024', reel: 8.8, nominal: 85.0 },
  { year: '2025', reel: 10.3, nominal: 60.0 },
];

const mobileAppRadar = [
  { subject: 'UI/UX', A: 120, fullMark: 150 },
  { subject: 'Performance', A: 150, fullMark: 150 },
  { subject: 'Security', A: 140, fullMark: 150 },
  { subject: 'Real-time', A: 130, fullMark: 150 },
  { subject: 'PWA', A: 110, fullMark: 150 },
];

const COLORS = ['#00ccff', '#ff9900', '#a855f7', '#ff3b3b', '#22c55e'];

// --- Visual Modules ---

function BlueprintPlaceholder({ slug, category }: { slug: string, category: string }) {
  return (
    <div className="w-full h-full min-h-[300px] blueprint-bg rounded-2xl flex items-center justify-center relative overflow-hidden group">
       <div className="absolute inset-0 bg-gradient-to-br from-lcars-cyan/5 to-transparent pointer-events-none" />
       <div className="flex flex-col items-center gap-4 z-10">
          <Layers className="w-16 h-16 text-lcars-cyan/20 group-hover:text-lcars-cyan/40 transition-all group-hover:scale-110 duration-700" />
          <div className="text-center">
             <div className="text-[10px] font-mono text-lcars-cyan/40 font-black tracking-[0.4em] uppercase">Architecture_Plan_0{Math.floor(Math.random()*9)}</div>
             <div className="text-xs font-mono text-white/20 uppercase mt-1 tracking-widest">{slug}_SYSTEM_MODULE</div>
          </div>
       </div>
       {/* Decorative CAD-like measurements */}
       <div className="absolute top-8 left-8 w-32 h-[1px] bg-lcars-cyan/20">
          <div className="absolute -top-4 left-0 text-[8px] font-mono text-lcars-cyan/40">dim: 1024px</div>
       </div>
       <div className="absolute bottom-8 right-8 h-32 w-[1px] bg-lcars-cyan/20">
          <div className="absolute top-1/2 left-4 -rotate-90 text-[8px] font-mono text-lcars-cyan/40 origin-left">scale: 1:1</div>
       </div>
    </div>
  );
}

function TechnicalMetrics({ slug, category }: { slug: string, category: string }) {
  if (slug === 'AI_Trader') {
    return (
      <div className="h-full w-full">
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={aiTraderData}>
            <defs>
              <linearGradient id="colorReel" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ff9900" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="#ff9900" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
            <XAxis dataKey="year" stroke="rgba(255,255,255,0.3)" fontSize={10} tickLine={false} axisLine={false} />
            <YAxis stroke="rgba(255,255,255,0.3)" fontSize={10} tickLine={false} axisLine={false} tickFormatter={(v) => `%${v}`} />
            <Tooltip 
              contentStyle={{ background: 'rgba(10, 10, 15, 0.95)', border: '1px solid rgba(0, 204, 255, 0.1)', borderRadius: '16px', backdropFilter: 'blur(20px)' }}
              itemStyle={{ fontSize: '12px', fontWeight: '900', textTransform: 'uppercase' }}
            />
            <Area type="monotone" dataKey="reel" stroke="#ff9900" strokeWidth={4} fillOpacity={1} fill="url(#colorReel)" name="Reel Getiri" />
            <Area type="step" dataKey="nominal" stroke="#00ccff" strokeWidth={1} fill="transparent" name="Nominal Getiri" strokeDasharray="5 5" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }

  if (category.toLowerCase().includes('mobil') || category.toLowerCase().includes('iletişim')) {
    return (
      <div className="h-full w-full flex items-center justify-center">
        <ResponsiveContainer width="100%" height={300}>
          <RadarChart cx="50%" cy="50%" outerRadius="70%" data={mobileAppRadar}>
            <PolarGrid stroke="rgba(255,255,255,0.05)" />
            <PolarAngleAxis dataKey="subject" stroke="rgba(255,255,255,0.4)" fontSize={10} />
            <Radar
              name="Capability"
              dataKey="A"
              stroke="#00ccff"
              fill="#00ccff"
              fillOpacity={0.3}
            />
            <Tooltip 
               contentStyle={{ background: 'rgba(10, 10, 15, 0.95)', border: '1px solid rgba(0, 204, 255, 0.1)', borderRadius: '16px' }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    );
  }

  return <BlueprintPlaceholder slug={slug} category={category} />;
}

export function ProjectDashboard({ slug, category }: { slug: string; category: string }) {
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
      {/* Visual Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-stretch">
        <div className="lg:col-span-8 glass rounded-[24px] md:rounded-[32px] p-5 md:p-8 border-white/5 relative overflow-hidden group">
           <div className="absolute top-0 right-0 p-4 md:p-6 opacity-20">
              <GitBranch className="w-6 h-6 md:w-8 md:h-8 text-lcars-cyan" />
           </div>
           <div className="flex items-center gap-3 mb-6 md:mb-8">
             <div className="w-2.5 h-6 md:w-3 md:h-8 bg-lcars-cyan rounded-full shadow-[0_0_15px_#00ccff]" />
             <h3 className="text-lg md:text-xl font-black tracking-widest uppercase text-white/90">Teknik_Görselleştirme</h3>
           </div>
           
           <div className="h-[250px] md:h-[300px]">
             <TechnicalMetrics slug={slug} category={category} />
           </div>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-6">
           {/* Speed/Performance Gauge */}
           <div className="glass rounded-[24px] md:rounded-[32px] p-6 md:p-8 border-white/5 flex-1 flex flex-col justify-center items-center gap-4 relative overflow-hidden group min-h-[200px]">
              <div className="absolute inset-0 bg-gradient-to-br from-lcars-orange/5 to-transparent pointer-events-none" />
              <div className="relative w-32 h-32 rounded-full border-2 border-white/5 flex items-center justify-center">
                 <motion.div 
                   animate={{ rotate: 360 }}
                   transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                   className="absolute inset-0 rounded-full border-t-2 border-lcars-orange opacity-40"
                 />
                 <div className="text-center">
                    <div className="text-4xl font-black text-white leading-none">98</div>
                    <div className="text-[10px] font-mono text-lcars-orange font-black mt-1">PERF_İNDEXİ</div>
                 </div>
              </div>
              <p className="text-[10px] font-mono text-white/30 text-center uppercase tracking-[0.2em]">Ölçeklenebilir_Mimari</p>
           </div>

           {/* Security Module */}
           <div className="glass rounded-[24px] md:rounded-[32px] p-6 md:p-8 border-white/5 flex-1 relative overflow-hidden group">
              <div className="flex items-center gap-3 mb-6">
                 <Shield className="w-5 h-5 text-lcars-green" />
                 <span className="text-xs font-black font-mono tracking-widest text-white/60 uppercase">Güvenlik_Katmanı</span>
              </div>

              <div className="space-y-4">
                 {[
                   { label: 'Bütünlük', val: 100, color: 'bg-lcars-green' },
                   { label: 'Uptime', val: 99, color: 'bg-lcars-cyan' }
                 ].map(item => (
                   <div key={item.label} className="space-y-2">
                      <div className="flex justify-between text-[10px] font-mono text-white/40 uppercase tracking-widest">
                         <span>{item.label}</span>
                         <span className="text-white font-black">{item.val}%</span>
                      </div>
                      <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                         <motion.div 
                           initial={{ width: 0 }}
                           animate={{ width: `${item.val}%` }}
                           className={cn("h-full", item.color)}
                         />
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </div>

      {/* Terminal Access Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
         {[
           { icon: Cpu, label: 'İŞLEMCİ_TAHSİSİ' },
           { icon: Database, label: 'VERİ_SENK' },
           { icon: Radio, label: 'SİNYAL_TX' },
           { icon: Smartphone, label: 'MOBİL_UI' },
           { icon: Monitor, label: 'SİSTEM_OS' },
           { icon: Zap, label: 'GÜÇ_SİSTEMİ' }
         ].map((node) => (
           <div key={node.label} className="glass p-4 rounded-2xl border-white/5 flex flex-col items-center gap-3 hover:border-lcars-cyan/30 transition-all group cursor-default">
              <node.icon className="w-5 h-5 text-white/20 group-hover:text-lcars-cyan transition-colors" />
              <span className="text-[8px] font-mono text-white/20 group-hover:text-white/40 transition-colors uppercase tracking-widest">{node.label}</span>
              <div className="flex gap-1">
                 {[...Array(3)].map((_, i) => (
                   <div key={i} className="w-1 h-1 rounded-full bg-lcars-green/40" />
                 ))}
              </div>
           </div>
         ))}
      </div>
    </div>
  );
}
