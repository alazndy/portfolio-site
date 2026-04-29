'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Box, Cpu, Globe, Layers, Shield, Terminal } from 'lucide-react';
import type { ProjectMetadata } from '@/lib/markdown';
import { cn } from '@/lib/utils';

interface CategoryGridProps {
  categories: Record<string, ProjectMetadata[]>;
}

const categoryIcons: Record<string, any> = {
  'AI & Veri': Cpu,
  'Crucix': Shield,
  'Endüstriyel & Saha': Box,
  'Web & Apps': Globe,
  'UI Altyapısı': Layers,
  'Default': Terminal
};

export function CategoryGrid({ categories }: CategoryGridProps) {
  return (
    <section className="space-y-12 pb-20">
      <div className="flex items-center gap-6">
        <h2 className="text-3xl font-black tracking-tighter uppercase flex items-center gap-4">
          <span className="w-3 h-10 bg-lcars-cyan shadow-[0_0_15px_#00ccff] rounded-full" />
          Active Core Modules
        </h2>
        <div className="flex-1 h-[1px] bg-white/10" />
        <div className="text-[10px] font-mono text-white/20 animate-pulse">
          STATUS: SCANNING_DATABASE...
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(categories).map(([name, projects], idx) => {
          const Icon = categoryIcons[name] || categoryIcons['Default'];
          return (
            <motion.div 
              key={name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="group relative"
            >
              {/* Module Frame */}
              <div className="glass rounded-3xl p-8 border-white/5 group-hover:border-lcars-cyan/50 transition-all duration-500 flex flex-col h-[400px] relative overflow-hidden">
                {/* ID Tag */}
                <div className="absolute top-0 right-0 px-6 py-2 bg-white/5 border-b border-l border-white/5 text-[10px] font-mono text-white/30 rounded-bl-2xl uppercase group-hover:text-lcars-cyan transition-colors">
                  MOD_0x{idx.toString(16).toUpperCase()}
                </div>

                <div className="space-y-6 flex-1">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-lcars-cyan/10 group-hover:border-lcars-cyan/30 transition-all duration-500">
                      <Icon className="w-6 h-6 text-white/40 group-hover:text-lcars-cyan group-hover:scale-110 transition-all" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono font-black text-lcars-orange tracking-widest uppercase">
                        {projects.length} Systems Active
                      </div>
                      <h3 className="text-2xl font-black tracking-tight group-hover:text-white transition-colors uppercase">
                        {name}
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-3 pt-4">
                    {projects.slice(0, 4).map((p) => (
                      <Link 
                        key={p.slug}
                        href={`/projects/${p.slug}`}
                        className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-transparent hover:border-white/10 hover:bg-white/10 transition-all group/item"
                      >
                        <span className="text-sm font-medium text-white/60 group-hover/item:text-white transition-colors">{p.title}</span>
                        <ArrowRight className="w-4 h-4 text-white/20 group-hover/item:text-lcars-cyan group-hover/item:translate-x-1 transition-all" />
                      </Link>
                    ))}
                    {projects.length > 4 && (
                      <div className="text-[10px] font-mono text-white/20 pl-3">
                        ++ [SECURE_NODE_ACCESS_REQUIRED_FOR_MORE]
                      </div>
                    )}
                  </div>
                </div>

                {/* Hardware Spec Footer */}
                <div className="pt-6 mt-auto border-t border-white/5 flex items-center justify-between">
                  <div className="flex gap-1">
                     {[...Array(4)].map((_, i) => (
                       <div key={i} className="w-1.5 h-4 bg-lcars-cyan/20 rounded-full group-hover:bg-lcars-cyan/40 transition-colors" />
                     ))}
                  </div>
                  <div className="text-[8px] font-mono text-white/20 uppercase tracking-[0.2em]">
                    Data Integrity: 100%
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
