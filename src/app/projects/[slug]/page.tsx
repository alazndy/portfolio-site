import { getProjectBySlug, getAllProjects } from '@/lib/markdown';
import { notFound } from 'next/navigation';
import { marked } from 'marked';
import { ChevronLeft, ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

const statusColors: Record<string, string> = {
  'Live':   'bg-lcars-green/10 text-lcars-green border-lcars-green/20',
  'Active': 'bg-lcars-cyan/10 text-lcars-cyan border-lcars-cyan/20',
  'Stable': 'bg-lcars-orange/10 text-lcars-orange border-lcars-orange/20',
  'Early':  'bg-white/5 text-white/40 border-white/10',
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const contentHtml = await marked.parse(project.content);
  const statusClass = statusColors[project.metadata.status] ?? statusColors['Early'];

  return (
    <div className="max-w-4xl mx-auto pb-24 space-y-10">

      {/* Back */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-xs font-mono text-white/30 hover:text-white/60 transition-colors group"
      >
        <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
        Back
      </Link>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3 flex-wrap">
          <span className={cn("px-2.5 py-1 rounded-full text-[10px] font-mono border", statusClass)}>
            {project.metadata.status}
          </span>
          <span className="text-[10px] font-mono text-white/20">{project.metadata.category}</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white uppercase">
          {project.metadata.title}
        </h1>

        <p className="text-base text-white/50 leading-relaxed max-w-2xl">
          {project.metadata.summary}
        </p>

        <div className="flex items-center gap-3 pt-2">
          {project.metadata.live && (
            <a
              href={project.metadata.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/8 hover:bg-white/12 border border-white/10 rounded-xl text-xs font-semibold text-white/70 hover:text-white transition-all"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Live
            </a>
          )}
          {project.metadata.github && (
            <a
              href={project.metadata.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-xs font-semibold text-white/50 hover:text-white/70 transition-all"
            >
              <Github className="w-3.5 h-3.5" />
              Source
            </a>
          )}
        </div>
      </div>

      {/* Tech Stack */}
      {project.metadata.techStack && project.metadata.techStack.length > 0 && (
        <div className="space-y-3">
          <div className="text-[10px] font-mono text-white/30 uppercase tracking-widest">Tech Stack</div>
          <div className="flex flex-wrap gap-2">
            {project.metadata.techStack.map(tech => (
              <span
                key={tech}
                className="px-3 py-1.5 bg-white/5 border border-white/8 rounded-lg text-xs font-mono text-white/50 hover:text-white/70 hover:border-white/15 transition-all cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="h-px bg-white/5" />

      {/* Content */}
      <div
        className={cn(
          "prose prose-invert max-w-none",
          "prose-headings:font-black prose-headings:tracking-tight prose-headings:uppercase prose-headings:text-white",
          "prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4",
          "prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-white/80",
          "prose-p:text-white/55 prose-p:leading-relaxed prose-p:mb-4",
          "prose-li:text-white/50 prose-li:marker:text-lcars-cyan",
          "prose-strong:text-white/80 prose-strong:font-semibold",
          "prose-code:text-lcars-gold prose-code:bg-white/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none prose-code:text-sm",
          "prose-blockquote:border-l-lcars-orange prose-blockquote:text-white/60 prose-blockquote:not-italic"
        )}
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </div>
  );
}
