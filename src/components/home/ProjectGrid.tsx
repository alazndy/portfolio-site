'use client';

import { useState, useMemo, memo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Dot } from 'lucide-react';
import type { ProjectMetadata } from '@/lib/markdown';
import { categoryConfig, defaultConfig, statusConfig, statusDot } from '@/lib/project-config';
import { cn } from '@/lib/utils';

type CardSize = 'featured' | 'standard' | 'compact';

const STATUS_SIZE: Record<string, CardSize> = {
  Live:    'featured',
  Active:  'standard',
  Stable:  'standard',
  Early:   'compact',
  Pending: 'compact',
  Legacy:  'compact',
};

// ── FEATURED CARD (Live projects) ─────────────────────────────────────────────
const FeaturedCard = memo(function FeaturedCard({ project, idx }: { project: ProjectMetadata; idx: number }) {
  const cat = categoryConfig[project.category] ?? defaultConfig;
  const sc  = statusConfig[project.status]  ?? statusConfig['Early'];
  const href = project.slug === 'GTab' ? '/gtab' : `/projects/${project.slug}`;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.3, delay: Math.min(idx * 0.06, 0.3) }}
      className="sm:col-span-1"
    >
      <Link href={href} className="group block h-full">
        <article className="relative h-full min-h-[280px] sm:min-h-[340px] rounded-2xl overflow-hidden border border-border hover:border-foreground/20 transition-all duration-300 hover:shadow-xl hover:shadow-black/30">
          {/* Background image */}
          {project.image ? (
            <img src={project.image} alt={project.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className={cn("absolute inset-0", cat.glow, "opacity-30")} />
          )}

          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-black/10" />
          <div className={cn("absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-linear-to-t", cat.gradient?.replace('from-', 'from-').replace('/80', '/30').replace('/70', '/20') ?? '')} />

          {/* Top badges */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
            <span className={cn("inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9px] font-mono border backdrop-blur-sm", cat.badge)}>
              <cat.icon className="w-2.5 h-2.5" />
              {project.category.length > 16 ? project.category.split(' ').slice(0, 2).join(' ') : project.category}
            </span>
            <span className={cn("inline-flex items-center gap-1 px-2 py-1 rounded-full text-[9px] font-mono border backdrop-blur-sm", sc)}>
              <span className={cn("w-1.5 h-1.5 rounded-full", statusDot[project.status] ?? '')} />
              {project.status}
            </span>
          </div>

          {/* Bottom content */}
          <div className="absolute bottom-0 left-0 right-0 p-5 space-y-2">
            <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight leading-tight">
              {project.title}
            </h3>
            <p className="text-xs text-white/60 line-clamp-2 leading-relaxed">
              {project.summary}
            </p>
            {project.techStack && project.techStack.length > 0 && (
              <div className="flex flex-wrap gap-1 pt-1">
                {project.techStack.slice(0, 3).map(t => (
                  <span key={t} className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/10 text-white/50 border border-white/10">
                    {t}
                  </span>
                ))}
                {project.techStack.length > 3 && (
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-white/30">
                    +{project.techStack.length - 3}
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Arrow */}
          <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-200">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </article>
      </Link>
    </motion.div>
  );
});

// ── STANDARD CARD (Active/Stable) ─────────────────────────────────────────────
const StandardCard = memo(function StandardCard({ project, idx }: { project: ProjectMetadata; idx: number }) {
  const cat = categoryConfig[project.category] ?? defaultConfig;
  const sc  = statusConfig[project.status]  ?? statusConfig['Early'];
  const href = project.slug === 'GTab' ? '/gtab' : `/projects/${project.slug}`;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, delay: Math.min(idx * 0.04, 0.25) }}
    >
      <Link href={href} className="group block h-full">
        <article className="h-full rounded-2xl border border-border overflow-hidden hover:border-foreground/15 transition-all duration-200 hover:shadow-md hover:shadow-black/20">
          <div className="relative aspect-video bg-foreground/3 overflow-hidden">
            {project.image ? (
              <img src={project.image} alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            ) : (
              <div className={cn("w-full h-full flex items-center justify-center", cat.glow, "opacity-20")}>
                <cat.icon className={cn("w-8 h-8", cat.accent, "opacity-40")} />
              </div>
            )}
            <div className="absolute inset-0 bg-linear-to-t from-background/50 to-transparent" />
            <span className={cn("absolute top-3 right-3 inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-mono border backdrop-blur-sm", sc)}>
              <span className={cn("w-1 h-1 rounded-full", statusDot[project.status] ?? '')} />
              {project.status}
            </span>
            <div className="absolute bottom-3 right-3 w-6 h-6 rounded-full bg-foreground text-background flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowUpRight className="w-3 h-3" />
            </div>
          </div>
          <div className="p-4 space-y-1">
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-sm font-bold text-foreground/80 group-hover:text-foreground transition-colors">{project.title}</h3>
              <span className={cn("shrink-0 text-[9px] font-mono px-1.5 py-0.5 rounded border", cat.badge)}>
                {project.category.split(' ')[0]}
              </span>
            </div>
            <p className="text-xs text-foreground/40 line-clamp-2">{project.summary}</p>
          </div>
        </article>
      </Link>
    </motion.div>
  );
});

// ── COMPACT ROW (Early/Pending/Legacy) ────────────────────────────────────────
const CompactRow = memo(function CompactRow({ project, idx }: { project: ProjectMetadata; idx: number }) {
  const cat = categoryConfig[project.category] ?? defaultConfig;
  const sc  = statusConfig[project.status]  ?? statusConfig['Early'];
  const href = project.slug === 'GTab' ? '/gtab' : `/projects/${project.slug}`;
  const isLegacy = project.status === 'Legacy';

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, delay: Math.min(idx * 0.02, 0.2) }}
    >
      <Link href={href}
        className={cn(
          "group flex items-center gap-3 px-3 py-2.5 rounded-xl border border-transparent hover:border-border hover:bg-foreground/3 transition-all",
          isLegacy ? "opacity-40 hover:opacity-60" : ""
        )}
      >
        {project.image ? (
          <div className="w-9 h-9 rounded-lg overflow-hidden border border-border shrink-0">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" loading="lazy" />
          </div>
        ) : (
          <div className={cn("w-9 h-9 rounded-lg flex items-center justify-center shrink-0 border border-border bg-foreground/3", cat.accent)}>
            <cat.icon className="w-4 h-4" />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <span className="text-xs font-semibold text-foreground/60 group-hover:text-foreground/80 transition-colors">{project.title}</span>
          <p className="text-[10px] text-foreground/25 truncate">{project.summary}</p>
        </div>
        <span className={cn("shrink-0 text-[9px] font-mono px-1.5 py-0.5 rounded border hidden sm:inline-flex", sc)}>
          {project.status}
        </span>
        <ArrowUpRight className="w-3.5 h-3.5 text-foreground/10 group-hover:text-foreground/30 shrink-0 transition-colors" />
      </Link>
    </motion.div>
  );
});

// ── MAIN ──────────────────────────────────────────────────────────────────────
const ALL = 'All';

export function ProjectGrid({ projects }: { projects: ProjectMetadata[] }) {
  const categories = useMemo(() => [ALL, ...new Set(projects.map(p => p.category))].sort((a, b) => a === ALL ? -1 : b === ALL ? 1 : a.localeCompare(b)), [projects]);
  const [active, setActive] = useState(ALL);

  const filtered = useMemo(() =>
    active === ALL ? projects : projects.filter(p => p.category === active),
    [projects, active]
  );

  const featured  = filtered.filter(p => STATUS_SIZE[p.status] === 'featured');
  const standard  = filtered.filter(p => STATUS_SIZE[p.status] === 'standard');
  const compact   = filtered.filter(p => STATUS_SIZE[p.status] === 'compact');

  return (
    <section id="projects" className="space-y-8">

      {/* Header + filter */}
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <h2 className="text-xs font-black font-mono uppercase tracking-[0.2em] text-foreground/30">Work</h2>
          <div className="flex-1 h-px bg-border" />
          <span className="text-[10px] font-mono text-foreground/20">{filtered.length} projects</span>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none -mx-1 px-1">
          {categories.map(cat => (
            <button key={cat} onClick={() => setActive(cat)}
              className={cn(
                "shrink-0 px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap",
                active === cat
                  ? "bg-foreground text-background"
                  : "text-foreground/40 hover:text-foreground/70 hover:bg-foreground/5"
              )}
            >
              {cat === ALL ? 'All' : cat.length > 20 ? cat.slice(0, 18) + '…' : cat}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="popLayout">

        {/* ── FEATURED (Live) */}
        {featured.length > 0 && (
          <motion.div key="featured" layout className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono text-foreground/25 uppercase tracking-widest">Live</span>
              <div className="flex-1 h-px bg-border/50" />
              <span className="text-[10px] font-mono text-foreground/15">{featured.length}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {featured.map((p, i) => <FeaturedCard key={p.slug} project={p} idx={i} />)}
            </div>
          </motion.div>
        )}

        {/* ── STANDARD (Active/Stable) */}
        {standard.length > 0 && (
          <motion.div key="standard" layout className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono text-foreground/25 uppercase tracking-widest">Active</span>
              <div className="flex-1 h-px bg-border/50" />
              <span className="text-[10px] font-mono text-foreground/15">{standard.length}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {standard.map((p, i) => <StandardCard key={p.slug} project={p} idx={i} />)}
            </div>
          </motion.div>
        )}

        {/* ── COMPACT (Early/Pending/Legacy) */}
        {compact.length > 0 && (
          <motion.div key="compact" layout className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono text-foreground/20 uppercase tracking-widest">Also built</span>
              <div className="flex-1 h-px bg-border/30" />
              <span className="text-[10px] font-mono text-foreground/10">{compact.length}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-0.5">
              {compact.map((p, i) => <CompactRow key={p.slug} project={p} idx={i} />)}
            </div>
          </motion.div>
        )}

      </AnimatePresence>
    </section>
  );
}
