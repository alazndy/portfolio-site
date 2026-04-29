import { getProjectBySlug, getAllProjects } from '@/lib/markdown';
import { notFound } from 'next/navigation';
import { marked } from 'marked';
import { 
  Terminal, 
  Cpu, 
  Tag, 
  ChevronLeft, 
  ShieldCheck, 
  Zap, 
  Database, 
  Globe,
  Code2,
  Share2,
  Maximize2,
  AlertCircle,
  Info
} from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ProjectDashboard } from '@/components/projects/ProjectDashboard';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const contentHtml = marked.parse(project.content);

  const categoryColors: Record<string, string> = {
    'AI & Veri': 'text-lcars-purple border-lcars-purple/30 bg-lcars-purple/5 shadow-[0_0_15px_rgba(153,102,204,0.1)]',
    'Crucix': 'text-lcars-red border-lcars-red/30 bg-lcars-red/5 shadow-[0_0_15px_rgba(204,51,51,0.1)]',
    'Endüstriyel & Saha': 'text-lcars-gold border-lcars-gold/30 bg-lcars-gold/5 shadow-[0_0_15px_rgba(255,204,0,0.1)]',
    'Web & Apps': 'text-lcars-cyan border-lcars-cyan/30 bg-lcars-cyan/5 shadow-[0_0_15px_rgba(0,204,255,0.1)]',
    'Default': 'text-lcars-orange border-lcars-orange/30 bg-lcars-orange/5 shadow-[0_0_15px_rgba(255,153,0,0.1)]'
  };

  const activeColor = categoryColors[project.metadata.category] || categoryColors['Default'];

  return (
    <div className="max-w-7xl mx-auto space-y-16 animate-in fade-in duration-1000 pb-32">
      {/* ── COMMAND HEADER ── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/5 pb-12">
        <div className="space-y-6">
          <Link 
            href="/" 
            className="inline-flex items-center gap-3 text-[10px] font-mono font-black text-white/30 hover:text-lcars-orange transition-all group tracking-[0.2em]"
          >
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            [ACCESS_CONTROL: RETURN_TO_ROOT]
          </Link>
          
          <div className="space-y-3">
            <div className={cn("inline-flex items-center gap-3 px-4 py-1.5 rounded-sm border text-[11px] font-mono font-black tracking-[0.3em] uppercase", activeColor)}>
              <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
              MODULE_ID: {slug.toUpperCase()}
            </div>
            <h1 className="text-6xl md:text-9xl font-black tracking-[calc(-0.06em)] uppercase leading-[0.8] text-white">
              {project.metadata.title}
            </h1>
          </div>
        </div>

        <div className="flex flex-col items-end gap-4">
          <div className="flex gap-3">
             <button className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-white/20 hover:text-lcars-cyan hover:border-lcars-cyan/30 transition-all cursor-pointer">
                <Share2 className="w-5 h-5" />
             </button>
             <button className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-white/20 hover:text-lcars-cyan hover:border-lcars-cyan/30 transition-all cursor-pointer">
                <Maximize2 className="w-5 h-5" />
             </button>
          </div>
          <div className="text-right space-y-1">
             <div className="text-[11px] font-mono text-lcars-cyan font-black tracking-[0.2em] uppercase">LINK_SECURE: AES-256</div>
             <div className="text-[9px] font-mono text-white/20 uppercase tracking-widest font-bold">Node_Status: Verified</div>
          </div>
        </div>
      </div>

      {/* ── CORE SYSTEM GRID ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Left Column: Diagnostics & Specs */}
        <aside className="lg:col-span-3 space-y-8 order-2 lg:order-1">
          {/* Diagnostic Widget */}
          <div className="glass rounded-[32px] p-8 border-white/10 space-y-8 relative overflow-hidden group">
             <div className="absolute -top-12 -right-12 w-48 h-48 bg-lcars-orange/5 rounded-full blur-3xl -z-10 group-hover:bg-lcars-orange/10 transition-colors" />
             
             <div className="flex items-center gap-3">
               <div className="w-1 h-8 bg-lcars-orange rounded-full shadow-[0_0_10px_#ff9900]" />
               <span className="text-sm font-black font-mono tracking-[0.2em] text-white/90 uppercase">Diagnostics</span>
             </div>

             <div className="space-y-6">
                {[
                  { label: 'Integrity', value: '100%', icon: ShieldCheck, color: 'text-lcars-green', bar: 'bg-lcars-green' },
                  { label: 'Processing', value: 'High', icon: Cpu, color: 'text-lcars-cyan', bar: 'bg-lcars-cyan' },
                  { label: 'Data_Sync', value: 'Stable', icon: Database, color: 'text-lcars-purple', bar: 'bg-lcars-purple' },
                  { label: 'Latency', value: '2ms', icon: Zap, color: 'text-lcars-gold', bar: 'bg-lcars-gold' },
                ].map((spec) => (
                  <div key={spec.label} className="space-y-2">
                    <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.15em] px-1 font-bold">
                      <span className="text-white/40 flex items-center gap-2">
                        <spec.icon className={cn("w-3.5 h-3.5", spec.color)} />
                        {spec.label}
                      </span>
                      <span className="text-white/80">{spec.value}</span>
                    </div>
                    <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                       <div className={cn("h-full opacity-40 w-full", spec.bar)} />
                    </div>
                  </div>
                ))}
             </div>
          </div>

          {/* Infrastructure Module */}
          <div className="glass rounded-[32px] p-8 border-white/10 space-y-6">
             <div className="flex items-center gap-3">
               <div className="w-1 h-8 bg-lcars-cyan rounded-full shadow-[0_0_10px_#00ccff]" />
               <span className="text-sm font-black font-mono tracking-[0.2em] text-white/90 uppercase">Infra_Stack</span>
             </div>
             
             <div className="grid grid-cols-1 gap-2">
               {(project.metadata.techStack || ['React 19', 'Next.js 15', 'Firebase', 'TypeScript']).map(tech => (
                 <div key={tech} className="px-4 py-3 bg-white/5 border border-white/5 rounded-xl text-[10px] font-black text-white/50 uppercase tracking-[0.2em] hover:text-lcars-cyan hover:border-lcars-cyan/30 hover:bg-white/10 transition-all cursor-default flex items-center justify-between group">
                   {tech}
                   <Code2 className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                 </div>
               ))}
             </div>
          </div>

          {/* Technical Specs Callout */}
          <div className="p-6 rounded-[32px] bg-lcars-cyan/5 border border-lcars-cyan/20 space-y-4">
             <div className="flex items-center gap-2 text-lcars-cyan">
                <Info className="w-4 h-4" />
                <span className="text-[10px] font-mono font-black tracking-widest uppercase">System_Requirement</span>
             </div>
             <p className="text-[10px] font-mono text-lcars-cyan/60 leading-relaxed uppercase tracking-tighter">
                Requires level 5 authorization for full kernel access and database modification protocols.
             </p>
          </div>
        </aside>

        {/* Right Column: Main Analysis & Content */}
        <div className="lg:col-span-9 space-y-12 order-1 lg:order-2">
          
          {/* Executive Summary */}
          <div className="relative p-10 md:p-16 rounded-[48px] glass border-white/5 overflow-hidden group">
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-lcars-cyan/5 rounded-full blur-[120px] -z-10 transition-all duration-700 group-hover:bg-lcars-cyan/10" />
             <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-lcars-orange/5 rounded-full blur-[120px] -z-10" />
             
             <div className="flex items-start gap-6">
                <div className="hidden md:block pt-2">
                   <div className="w-12 h-1 bg-lcars-orange rounded-full" />
                </div>
                <p className="text-3xl md:text-5xl text-white font-black tracking-tight leading-[1.1]">
                   &quot;{project.metadata.summary || "Core architecture analysis reveals a highly optimized, mission-critical infrastructure deployed across global edge nodes."}&quot;
                </p>
             </div>
          </div>

          {/* 📊 DYNAMIC VISUALIZATION ENGINE */}
          <ProjectDashboard slug={slug} category={project.metadata.category} />

          {/* 📝 TECHNICAL DOCUMENTATION */}
          <div className="glass rounded-[48px] p-10 md:p-20 border-white/5 relative bg-gradient-to-b from-white/[0.02] to-transparent">
             {/* Readability Enhancements for Content */}
             <div 
              className={cn(
                "prose prose-invert max-w-none prose-lg md:prose-xl",
                "prose-headings:text-white prose-headings:font-black prose-headings:tracking-tighter prose-headings:uppercase",
                "prose-h2:text-4xl prose-h2:md:text-5xl prose-h2:mt-24 prose-h2:mb-12 prose-h2:flex prose-h2:items-center prose-h2:gap-6",
                "prose-h3:text-2xl prose-h3:md:text-3xl prose-h3:mt-16 prose-h3:mb-8 prose-h3:text-white/90",
                "prose-p:text-white/70 prose-p:leading-[1.8] prose-p:mb-10 prose-p:font-light",
                "prose-li:text-white/60 prose-li:mb-4 prose-li:marker:text-lcars-cyan",
                "prose-strong:text-lcars-cyan prose-strong:font-black prose-strong:tracking-tight",
                "prose-code:text-lcars-gold prose-code:bg-white/5 prose-code:px-2 prose-code:py-1 prose-code:rounded-lg prose-code:before:content-none prose-code:after:content-none prose-code:font-mono prose-code:text-sm md:prose-code:text-base",
                "prose-blockquote:border-l-lcars-orange prose-blockquote:bg-white/[0.03] prose-blockquote:p-10 prose-blockquote:rounded-3xl prose-blockquote:italic prose-blockquote:text-white/80 prose-blockquote:my-16"
              )}
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />

            {/* Corner Decorative Elements */}
            <div className="absolute top-10 right-10 flex flex-col gap-1 opacity-20 group-hover:opacity-40 transition-opacity">
               {[...Array(4)].map((_, i) => (
                 <div key={i} className="w-8 h-0.5 bg-white rounded-full" />
               ))}
            </div>
          </div>

          {/* 🏁 SYSTEM FOOTER */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-12 opacity-30 group cursor-default">
             <div className="flex items-center gap-4 text-[11px] font-mono font-black tracking-[0.4em] uppercase">
                <span className="text-lcars-cyan">END_OF_MISSION_FILE</span>
                <span className="w-12 h-[1px] bg-white/20" />
                <span className="text-white/40">GOKTUG_ECOSYSTEM_2026</span>
             </div>
             <div className="flex gap-2 h-2 items-end">
                <div className="w-16 bg-lcars-orange rounded-full group-hover:w-24 transition-all duration-700" />
                <div className="w-4 bg-lcars-cyan rounded-full animate-pulse" />
                <div className="w-2 bg-lcars-purple rounded-full" />
             </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .prose h2::before {
          content: "";
          display: block;
          width: 12px;
          height: 48px;
          background-color: var(--lcars-cyan);
          border-radius: 9999px;
          box-shadow: 0 0 20px rgba(0, 204, 255, 0.4);
        }
      `}} />
    </div>
  );
}
