'use client';

import { useState, useMemo, memo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { ProjectMetadata } from '@/lib/markdown';
import { categoryConfig, defaultConfig, statusConfig, statusDot } from '@/lib/project-config';
import { cn } from '@/lib/utils';

interface ProjectGridProps {
  projects: ProjectMetadata[];
}

const ALL = 'All';

const ProjectCard = memo(function ProjectCard({ project, idx }: { project: ProjectMetadata; idx: number }) {
  const cat = categoryConfig[project.category] ?? defaultConfig;
  const sc = statusConfig[project.status] ?? statusConfig['Early'];
  const sd = statusDot[project.status] ?? statusDot['Early'];
  const href = project.slug === 'GTab' ? '/gtab' : `/projects/${project.slug}`;
  const isLegacy = project.status === 'Legacy' || project.status === 'Pending';

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.28, delay: Math.min(idx * 0.03, 0.3) }}
    >
      <Link href={href} className="group block h-full">
        <article className={cn(
          "h-full rounded-2xl border border-border overflow-hidden transition-all duration-200",
          "hover:border-foreground/15 hover:shadow-lg hover:shadow-black/20",
          isLegacy ? "opacity-60 hover:opacity-80" : ""
        )}>
          {/* Image */}
          <div className="relative w-full aspect-[16/9] bg-foreground/3 overflow-hidden">
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className={cn("w-full h-full flex items-center justify-center", cat.glow)}>
                <cat.icon className={cn("w-10 h-10 opacity-20", cat.accent)} />
              </div>
            )}

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-background/60 via-transparent to-transparent" />

            {/* Status */}
            <div className="absolute top-3 right-3">
              <span className={cn("inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-mono border backdrop-blur-sm", sc)}>
                <span className={cn("w-1 h-1 rounded-full", sd)} />
                {project.status}
              </span>
            </div>

            {/* Arrow on hover */}
            <div className="absolute bottom-3 right-3 w-7 h-7 rounded-full bg-foreground text-background flex items-center justify-center opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Info */}
          <div className="p-4 space-y-1.5">
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-sm font-bold text-foreground/80 group-hover:text-foreground transition-colors leading-tight">
                {project.title}
              </h3>
              <span className={cn("shrink-0 text-[9px] font-mono px-1.5 py-0.5 rounded border", cat.badge)}>
                {project.category.split(' ')[0]}
              </span>
            </div>
            <p className="text-xs text-foreground/40 line-clamp-2 leading-relaxed">
              {project.summary}
            </p>
          </div>
        </article>
      </Link>
    </motion.div>
  );
});

export function ProjectGrid({ projects }: ProjectGridProps) {
  const categories = useMemo(() => {
    const cats = [...new Set(projects.map(p => p.category))].sort();
    return [ALL, ...cats];
  }, [projects]);

  const [active, setActive] = useState(ALL);

  const filtered = useMemo(() =>
    active === ALL ? projects : projects.filter(p => p.category === active),
    [projects, active]
  );

  return (
    <section id="projects" className="space-y-6">
      {/* Section header */}
      <div className="flex items-center gap-4">
        <h2 className="text-xs font-black font-mono uppercase tracking-[0.2em] text-foreground/30">Work</h2>
        <div className="flex-1 h-px bg-border" />
        <span className="text-[10px] font-mono text-foreground/20">{filtered.length} projects</span>
      </div>

      {/* Category filter — horizontal scroll on mobile */}
      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none -mx-1 px-1">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={cn(
              "shrink-0 px-3 py-1.5 rounded-lg text-xs font-medium transition-all",
              active === cat
                ? "bg-foreground text-background"
                : "text-foreground/40 hover:text-foreground/70 hover:bg-foreground/5 border border-transparent hover:border-border"
            )}
          >
            {cat === ALL ? 'All' : cat.length > 18 ? cat.slice(0, 16) + '…' : cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project, idx) => (
            <ProjectCard key={project.slug} project={project} idx={idx} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
