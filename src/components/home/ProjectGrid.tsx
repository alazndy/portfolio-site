'use client';

import { useState, useMemo, memo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { ProjectMetadata } from '@/lib/markdown';
import { categoryConfig, defaultConfig, statusConfig, statusDot } from '@/lib/project-config';
import { cn } from '@/lib/utils';

// ── SCORING ──────────────────────────────────────────────────────────────────
const STATUS_SCORE: Record<string, number> = {
  Live: 10, Active: 8, Stable: 6, Early: 4, Pending: 2, Legacy: 0,
};

function score(p: ProjectMetadata) {
  return (STATUS_SCORE[p.status] ?? 2) + Math.min(p.techStack?.length ?? 0, 10) * 0.8;
}

type Size = 'hero' | 'large' | 'medium' | 'small' | 'xs';

function getSize(s: number): Size {
  if (s >= 16) return 'hero';
  if (s >= 11) return 'large';
  if (s >= 7)  return 'medium';
  if (s >= 3)  return 'small';
  return 'xs';
}

// col-span in a 6-col grid
const SPANS: Record<Size, string> = {
  hero:   'col-span-6 sm:col-span-3',
  large:  'col-span-6 sm:col-span-3 lg:col-span-2',
  medium: 'col-span-3 sm:col-span-2',
  small:  'col-span-3 sm:col-span-2 lg:col-span-1',
  xs:     'col-span-6 sm:col-span-3 lg:col-span-2',
};

// ── CARD ─────────────────────────────────────────────────────────────────────
const ProjectCard = memo(function ProjectCard({
  project, size, idx,
}: {
  project: ProjectMetadata; size: Size; idx: number;
}) {
  const cat  = categoryConfig[project.category] ?? defaultConfig;
  const sc   = statusConfig[project.status]  ?? statusConfig['Early'];
  const dot  = statusDot[project.status]     ?? statusDot['Early'];
  const href = project.slug === 'GTab' ? '/gtab' : `/projects/${project.slug}`;
  const isXs = size === 'xs';
  const isLegacy = project.status === 'Legacy' || project.status === 'Pending';

  // XS — compact list row
  if (isXs) {
    return (
      <motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        transition={{ duration: 0.2, delay: Math.min(idx * 0.015, 0.2) }}
        className={SPANS[size]}
      >
        <Link href={href}
          className={cn(
            "group flex items-center gap-3 p-3 rounded-xl border border-border/50 hover:border-border hover:bg-foreground/3 transition-all h-full",
            isLegacy && "opacity-40 hover:opacity-60"
          )}
        >
          {project.image
            ? <img src={project.image} alt="" className="w-9 h-9 rounded-lg object-cover border border-border shrink-0" loading="lazy" />
            : <div className={cn("w-9 h-9 rounded-lg flex items-center justify-center shrink-0 bg-foreground/5 border border-border", cat.accent)}><cat.icon className="w-3.5 h-3.5" /></div>
          }
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-foreground/55 group-hover:text-foreground/80 truncate transition-colors">{project.title}</p>
            <p className="text-[10px] text-foreground/25 truncate">{project.category}</p>
          </div>
          <span className={cn("shrink-0 text-[9px] font-mono px-1.5 py-0.5 rounded border hidden sm:inline-flex items-center gap-1", sc)}>
            <span className={cn("w-1 h-1 rounded-full", dot)} />{project.status}
          </span>
        </Link>
      </motion.div>
    );
  }

  // HERO / LARGE / MEDIUM / SMALL — image card
  const imgHeights: Record<Size, string> = {
    hero:   'aspect-[16/9] sm:aspect-[21/9]',
    large:  'aspect-[16/9]',
    medium: 'aspect-[4/3]',
    small:  'aspect-[4/3]',
    xs:     '',
  };

  const titleSizes: Record<Size, string> = {
    hero:   'text-2xl sm:text-3xl',
    large:  'text-lg sm:text-xl',
    medium: 'text-sm sm:text-base',
    small:  'text-xs sm:text-sm',
    xs:     '',
  };

  const showTech   = size === 'hero' || size === 'large';
  const showSummary = size !== 'small';

  return (
    <motion.div layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.28, delay: Math.min(idx * 0.03, 0.35) }}
      className={cn(SPANS[size], isLegacy && "opacity-60 hover:opacity-80 transition-opacity")}
    >
      <Link href={href} className="group block h-full">
        <article className="h-full rounded-2xl border border-border overflow-hidden hover:border-foreground/20 transition-all duration-200 hover:shadow-lg hover:shadow-black/25 flex flex-col">

          {/* Image */}
          <div className={cn("relative overflow-hidden bg-foreground/3", imgHeights[size])}>
            {project.image
              ? <img src={project.image} alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              : <div className={cn("absolute inset-0 flex items-center justify-center", cat.glow, "opacity-20")}>
                  <cat.icon className={cn("w-10 h-10", cat.accent, "opacity-30")} />
                </div>
            }

            {/* Overlay */}
            {(size === 'hero' || size === 'large') && (
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
            )}

            {/* Top: status + category */}
            <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
              <span className={cn("inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[9px] font-mono border backdrop-blur-sm", cat.badge)}>
                <cat.icon className="w-2.5 h-2.5" />
                {size === 'hero' ? project.category : project.category.split(' ')[0]}
              </span>
              <span className={cn("inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-mono border backdrop-blur-sm", sc)}>
                <span className={cn("w-1 h-1 rounded-full", dot)} />
                {project.status}
              </span>
            </div>

            {/* Bottom (hero/large only — overlay title) */}
            {(size === 'hero' || size === 'large') && (
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 space-y-2">
                <h3 className={cn(titleSizes[size], "font-black text-white uppercase tracking-tight leading-tight")}>
                  {project.title}
                </h3>
                {showSummary && (
                  <p className={cn("text-white/60 line-clamp-2", size === 'hero' ? 'text-sm' : 'text-xs')}>
                    {project.summary}
                  </p>
                )}
                {showTech && project.techStack && project.techStack.length > 0 && (
                  <div className="flex flex-wrap gap-1 pt-0.5">
                    {project.techStack.slice(0, size === 'hero' ? 5 : 3).map(t => (
                      <span key={t} className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/10 text-white/50 border border-white/10">{t}</span>
                    ))}
                    {project.techStack.length > (size === 'hero' ? 5 : 3) && (
                      <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-white/30">+{project.techStack.length - (size === 'hero' ? 5 : 3)}</span>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Arrow */}
            <div className="absolute bottom-3 right-3 w-7 h-7 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-200">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Info box (medium/small only — title below image) */}
          {(size === 'medium' || size === 'small') && (
            <div className="p-3 sm:p-4 flex-1 space-y-1 bg-background">
              <h3 className={cn(titleSizes[size], "font-bold text-foreground/80 group-hover:text-foreground transition-colors leading-tight")}>
                {project.title}
              </h3>
              {showSummary && (
                <p className="text-[11px] text-foreground/40 line-clamp-2">{project.summary}</p>
              )}
            </div>
          )}
        </article>
      </Link>
    </motion.div>
  );
});

// ── MAIN ─────────────────────────────────────────────────────────────────────
const ALL = 'All';

export function ProjectGrid({ projects }: { projects: ProjectMetadata[] }) {
  const categories = useMemo(() =>
    [ALL, ...new Set(projects.map(p => p.category))].sort((a, b) =>
      a === ALL ? -1 : b === ALL ? 1 : a.localeCompare(b)),
    [projects]
  );
  const [active, setActive] = useState(ALL);

  const sorted = useMemo(() => {
    const list = active === ALL ? projects : projects.filter(p => p.category === active);
    return [...list].sort((a, b) => score(b) - score(a));
  }, [projects, active]);

  return (
    <section id="projects" className="space-y-6">

      {/* Header */}
      <div className="flex items-center gap-4">
        <h2 className="text-xs font-black font-mono uppercase tracking-[0.2em] text-foreground/30">Work</h2>
        <div className="flex-1 h-px bg-border" />
        <span className="text-[10px] font-mono text-foreground/20">{sorted.length} projects</span>
      </div>

      {/* Category filter */}
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
            {cat === ALL ? 'All' : cat.length > 22 ? cat.slice(0, 20) + '…' : cat}
          </button>
        ))}
      </div>

      {/* Grid — 6 columns, cards span based on score */}
      <motion.div layout className="grid grid-cols-6 gap-3 sm:gap-4">
        <AnimatePresence mode="popLayout">
          {sorted.map((p, i) => (
            <ProjectCard key={p.slug} project={p} size={getSize(score(p))} idx={i} />
          ))}
        </AnimatePresence>
      </motion.div>

    </section>
  );
}
