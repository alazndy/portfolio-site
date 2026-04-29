'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Box, Cpu, Globe, Layers, Shield, Puzzle, type LucideIcon } from 'lucide-react';
import type { ProjectMetadata } from '@/lib/markdown';
import { cn } from '@/lib/utils';

interface CategoryGridProps {
  categories: Record<string, ProjectMetadata[]>;
}

const categoryConfig: Record<string, { icon: LucideIcon; accent: string }> = {
  'AI & Finance':       { icon: Cpu,    accent: 'text-lcars-purple border-lcars-purple/20' },
  'Security':           { icon: Shield, accent: 'text-lcars-red border-lcars-red/20' },
  'Hardware & Embedded':{ icon: Box,    accent: 'text-lcars-gold border-lcars-gold/20' },
  'Web & Apps':         { icon: Globe,  accent: 'text-lcars-cyan border-lcars-cyan/20' },
  'UI Infrastructure':  { icon: Layers, accent: 'text-lcars-orange border-lcars-orange/20' },
  'Browser Extensions': { icon: Puzzle, accent: 'text-lcars-green border-lcars-green/20' },
} satisfies Record<string, { icon: LucideIcon; accent: string }>;

const statusColors: Record<string, string> = {
  'Live':   'bg-lcars-green/10 text-lcars-green border-lcars-green/20',
  'Active': 'bg-lcars-cyan/10 text-lcars-cyan border-lcars-cyan/20',
  'Stable': 'bg-lcars-orange/10 text-lcars-orange border-lcars-orange/20',
  'Early':  'bg-white/5 text-white/40 border-white/10',
};

export function CategoryGrid({ categories }: CategoryGridProps) {
  const allProjects = Object.values(categories).flat();

  return (
    <section className="space-y-8">
      <div className="flex items-center gap-4">
        <h2 className="text-2xl font-black tracking-tight uppercase text-white/90">Projects</h2>
        <div className="flex-1 h-px bg-white/5" />
        <span className="text-xs font-mono text-white/20">{allProjects.length} total</span>
      </div>

      <div className="space-y-3">
        {allProjects.map((project, idx) => {
          const config: { icon: LucideIcon; accent: string } = categoryConfig[project.category] ?? { icon: Globe, accent: 'text-white/40 border-white/10' };
          const Icon = config.icon;
          const statusClass = statusColors[project.status] ?? statusColors['Early'];

          return (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.04 }}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="group flex items-center gap-4 p-4 rounded-2xl border border-transparent hover:border-white/8 hover:bg-white/4 transition-all duration-200"
              >
                <div className={cn("w-9 h-9 rounded-xl border flex items-center justify-center shrink-0", config.accent)}>
                  <Icon className="w-4 h-4" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-sm font-semibold text-white/80 group-hover:text-white transition-colors">{project.title}</span>
                    <span className={cn("hidden sm:inline-flex px-2 py-0.5 rounded-full text-[10px] font-mono border", statusClass)}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-xs text-white/30 truncate">{project.summary}</p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <span className="hidden md:block text-[10px] font-mono text-white/20">{project.category}</span>
                  <ArrowRight className="w-4 h-4 text-white/10 group-hover:text-white/40 group-hover:translate-x-0.5 transition-all" />
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
