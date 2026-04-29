'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Home, User, ChevronRight, ChevronDown, Folder, 
  BrainCircuit, Factory, Palette, Zap, Smartphone, 
  MonitorPlay, Wrench, Globe, LayoutGrid
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { ProjectMetadata } from '@/lib/markdown';
import { useI18n } from '@/lib/i18n';

const categoryConfig: Record<string, { icon: any, color: string }> = {
  'AI & Veri': { icon: BrainCircuit, color: 'bg-lcars-cyan' },
  'Endüstriyel & Saha': { icon: Factory, color: 'bg-lcars-orange' },
  'UI Altyapısı': { icon: Palette, color: 'bg-lcars-purple' },
  'Kişisel Üretkenlik': { icon: Zap, color: 'bg-lcars-gold' },
  'Mobil & Oyun': { icon: Smartphone, color: 'bg-lcars-red' },
  'Medya & Ses': { icon: MonitorPlay, color: 'bg-lcars-cyan' },
  'Tasarım & Geliştirici Araçları': { icon: Wrench, color: 'bg-white' },
  'Web Platformları': { icon: Globe, color: 'bg-lcars-green' },
  'Sistem Araçları': { icon: LayoutGrid, color: 'bg-lcars-blue' },
  'Diğer': { icon: Folder, color: 'bg-white/50' },
};

function getCategoryConfig(category: string) {
  return categoryConfig[category] || { icon: Folder, color: 'bg-white/50' };
}

export function Sidebar({ projects = [] }: { projects?: ProjectMetadata[] }) {
  const pathname = usePathname();
  const { t } = useI18n();
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({});

  // Group projects by category
  const groupedProjects = projects.reduce((acc, project) => {
    if (!acc[project.category]) acc[project.category] = [];
    acc[project.category].push(project);
    return acc;
  }, {} as Record<string, ProjectMetadata[]>);

  // Sort categories alphabetically, put "Diğer" at the bottom
  const sortedCategories = Object.keys(groupedProjects).sort((a, b) => {
    if (a === 'Diğer') return 1;
    if (b === 'Diğer') return -1;
    return a.localeCompare(b);
  });

  const toggleCategory = (cat: string) => {
    setOpenCategories(prev => ({ ...prev, [cat]: !prev[cat] }));
  };

  return (
    <aside className="w-64 shrink-0 flex flex-col h-full bg-background border-r border-border relative z-30 select-none">
      
      {/* Logo */}
      <div className="px-6 py-6 border-b border-border shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-2 h-8 bg-lcars-orange rounded-full" />
          <div>
            <div className="text-sm font-black text-foreground tracking-widest uppercase">Göktuğ</div>
            <div className="text-[10px] font-mono text-foreground/30 uppercase tracking-wider">System Architect</div>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar flex flex-col py-4">
        {/* Top Navigation */}
        <nav className="px-3 space-y-1 mb-6">
          <Link href="/" className={cn(
            "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200",
            pathname === '/' ? "bg-foreground/10 text-foreground" : "text-foreground/40 hover:text-foreground/70 hover:bg-foreground/5"
          )}>
            <div className={cn("w-1 h-4 rounded-full shrink-0 transition-opacity bg-lcars-orange", pathname === '/' ? "opacity-100" : "opacity-0")} />
            <Home className="w-4 h-4 shrink-0" />
            <span className="text-xs font-semibold tracking-wide">{t('nav.home')}</span>
          </Link>
          <Link href="/about" className={cn(
            "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200",
            pathname === '/about' ? "bg-foreground/10 text-foreground" : "text-foreground/40 hover:text-foreground/70 hover:bg-foreground/5"
          )}>
            <div className={cn("w-1 h-4 rounded-full shrink-0 transition-opacity bg-lcars-gold", pathname === '/about' ? "opacity-100" : "opacity-0")} />
            <User className="w-4 h-4 shrink-0" />
            <span className="text-xs font-semibold tracking-wide">{t('nav.about')}</span>
          </Link>
        </nav>

        {/* Categorized Projects */}
        <div className="px-3">
          <div className="px-3 mb-2 text-[10px] font-black text-foreground/20 uppercase tracking-widest">
            {t('nav.portfolio')}
          </div>
          
          <div className="space-y-1">
            {sortedCategories.map(category => {
              const catConfig = getCategoryConfig(category);
              const isOpen = openCategories[category];
              const isActiveCategory = groupedProjects[category].some(p => pathname === `/projects/${p.slug}` || (p.slug === 'GTab' && pathname === '/gtab'));
              
              return (
                <div key={category} className="flex flex-col">
                  {/* Category Header */}
                  <button 
                    onClick={() => toggleCategory(category)}
                    className={cn(
                      "flex items-center justify-between px-3 py-2 rounded-lg transition-colors w-full",
                      isOpen || isActiveCategory ? "text-foreground" : "text-foreground/50 hover:text-foreground hover:bg-foreground/5"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <catConfig.icon className={cn("w-4 h-4", isOpen || isActiveCategory ? "text-foreground" : "opacity-60")} />
                      <span className="text-xs font-bold truncate">{category}</span>
                    </div>
                    {isOpen ? <ChevronDown className="w-3 h-3 opacity-50" /> : <ChevronRight className="w-3 h-3 opacity-50" />}
                  </button>

                  {/* Project Links (Collapsible) */}
                  {(isOpen || isActiveCategory) && (
                    <div className="mt-1 mb-2 ml-4 border-l border-border pl-2 space-y-0.5">
                      {groupedProjects[category].map(project => {
                        // Handle special redirects/routes like GTab
                        const projectUrl = project.slug === 'GTab' ? '/gtab' : `/projects/${project.slug}`;
                        const isActive = pathname === projectUrl;
                        
                        return (
                          <Link 
                            key={project.slug} 
                            href={projectUrl}
                            className={cn(
                              "flex items-center gap-2 px-3 py-1.5 rounded-md transition-all",
                              isActive 
                                ? "bg-foreground/10 text-foreground" 
                                : "text-foreground/40 hover:text-foreground/70 hover:bg-foreground/5"
                            )}
                          >
                            <div className={cn("w-1 h-3 rounded-full shrink-0 transition-opacity", catConfig.color, isActive ? "opacity-100" : "opacity-0")} />
                            <span className="text-[11px] font-medium truncate tracking-wide">{project.title}</span>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-border shrink-0 bg-background">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-lcars-green animate-pulse" />
          <span className="text-[10px] font-mono text-foreground/30 uppercase tracking-wider">{t('nav.systems')} ({projects.length})</span>
        </div>
      </div>
    </aside>
  );
}
