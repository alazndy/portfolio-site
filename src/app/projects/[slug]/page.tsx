import { getProjectBySlug, getAllProjects } from '@/lib/markdown';
import { categoryConfig, defaultConfig, statusConfig } from '@/lib/project-config';
import { notFound } from 'next/navigation';
import { marked } from 'marked';
import { ChevronLeft, ExternalLink, Code2, Calendar, Tag } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  const { title, summary, category, techStack } = project.metadata;
  const description = summary || `${title} — ${category} project by Göktuğ Turhan.`;
  const keywords = [title, category, ...(techStack ?? []), 'Göktuğ Turhan', 'alazlab'].join(', ');

  return {
    title: `${title} — Göktuğ Turhan`,
    description,
    keywords,
    openGraph: {
      title: `${title} — Göktuğ Turhan`,
      description,
      url: `https://alazlab.com/projects/${slug}`,
      siteName: 'alazlab.com',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} — Göktuğ Turhan`,
      description,
    },
    alternates: { canonical: `https://alazlab.com/projects/${slug}` },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { metadata, content } = project;
  const contentHtml = await marked.parse(content);
  const cat = categoryConfig[metadata.category] ?? defaultConfig;
  const Icon = cat.icon;
  const statusClass = statusConfig[metadata.status] ?? statusConfig['Early'];

  return (
    <article className="max-w-5xl mx-auto pb-24">

      {/* ── BACK ── */}
      <div className="py-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-foreground/25 hover:text-foreground/60 transition-colors group"
        >
          <ChevronLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
          All projects
        </Link>
      </div>

      {/* ── HERO ── */}
      <header className="relative mb-12 pb-12 border-b border-border">
        {/* Glow */}
        <div className={cn("absolute -top-20 -right-20 w-80 h-80 rounded-full blur-[120px] opacity-30 pointer-events-none", cat.glow)} />

        <div className="relative space-y-5">
          {/* Category + Status */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className={cn("inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono border", cat.badge)}>
              <Icon className="w-3 h-3" />
              {metadata.category}
            </span>
            <span className={cn("px-2.5 py-1 rounded-full text-[10px] font-mono border", statusClass)}>
              {metadata.status}
            </span>
            {metadata.date && (
              <span className="inline-flex items-center gap-1 text-[10px] font-mono text-foreground/20">
                <Calendar className="w-3 h-3" />
                {new Date(metadata.date).getFullYear()}
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-foreground uppercase leading-[0.9]">
            {metadata.title}
          </h1>

          {/* Summary */}
          <p className="text-base md:text-lg text-foreground/50 leading-relaxed max-w-2xl">
            {metadata.summary}
          </p>

          {/* CTAs */}
          <div className="flex items-center gap-3 pt-1 flex-wrap">
            {metadata.live && (
              <a
                href={metadata.live}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  "inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all",
                  "bg-foreground/10 hover:bg-foreground/15 border border-border hover:border-border text-foreground"
                )}
              >
                <ExternalLink className="w-4 h-4" />
                Live
              </a>
            )}
            {metadata.github && (
              <a
                href={metadata.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-foreground/50 hover:text-foreground/70 bg-foreground/5 hover:bg-foreground/8 border border-border transition-all"
              >
                <Code2 className="w-4 h-4" />
                Source
              </a>
            )}
          </div>
        </div>
      </header>

      {/* ── BODY ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

        {/* Main content */}
        <div className="lg:col-span-8 order-2 lg:order-1">
          <div
            className={cn(
              "prose prose-invert max-w-none",
              "prose-headings:font-black prose-headings:tracking-tight prose-headings:text-foreground",
              "prose-h2:text-xl prose-h2:uppercase prose-h2:mt-10 prose-h2:mb-4 prose-h2:flex prose-h2:items-center prose-h2:gap-3",
              "prose-h2:before:content-[''] prose-h2:before:block prose-h2:before:w-1 prose-h2:before:h-5 prose-h2:before:rounded-full",
              cat.accent.replace('text-', 'prose-h2:before:bg-'),
              "prose-h3:text-base prose-h3:text-foreground/70 prose-h3:mt-6 prose-h3:mb-2",
              "prose-p:text-foreground/50 prose-p:leading-relaxed prose-p:mb-4 prose-p:text-sm",
              "prose-li:text-foreground/45 prose-li:text-sm prose-li:marker:text-lcars-cyan",
              "prose-strong:text-foreground/75 prose-strong:font-semibold",
              "prose-code:text-lcars-gold prose-code:bg-foreground/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none prose-code:text-xs",
              "prose-blockquote:border-l-2 prose-blockquote:border-lcars-orange prose-blockquote:text-foreground/40 prose-blockquote:not-italic prose-blockquote:pl-4"
            )}
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4 order-1 lg:order-2 space-y-6 lg:sticky lg:top-10">

          {/* Tech stack */}
          {metadata.techStack && metadata.techStack.length > 0 && (
            <div className="glass rounded-2xl p-5 border-border space-y-4">
              <div className="flex items-center gap-2 text-[10px] font-mono text-foreground/30 uppercase tracking-widest">
                <Tag className="w-3.5 h-3.5" />
                Tech Stack
              </div>
              <div className="flex flex-wrap gap-2">
                {metadata.techStack.map(tech => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 bg-foreground/5 border border-border rounded-lg text-[11px] font-mono text-foreground/50 hover:text-foreground/70 transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Quick info */}
          <div className="glass rounded-2xl p-5 border-border space-y-3">
            <div className="text-[10px] font-mono text-foreground/30 uppercase tracking-widest mb-3">Details</div>
            <div className="space-y-3 text-xs">
              <div className="flex justify-between">
                <span className="text-foreground/30 font-mono">Category</span>
                <span className="text-foreground/60 font-medium">{metadata.category}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground/30 font-mono">Status</span>
                <span className={cn("px-2 py-0.5 rounded-full text-[10px] font-mono border", statusClass)}>{metadata.status}</span>
              </div>
              {metadata.date && (
                <div className="flex justify-between">
                  <span className="text-foreground/30 font-mono">Year</span>
                  <span className="text-foreground/60">{new Date(metadata.date).getFullYear()}</span>
                </div>
              )}
              {metadata.techStack && (
                <div className="flex justify-between">
                  <span className="text-foreground/30 font-mono">Stack size</span>
                  <span className="text-foreground/60">{metadata.techStack.length} technologies</span>
                </div>
              )}
            </div>
          </div>

          {/* Other projects */}
          <div className="glass rounded-2xl p-5 border-border space-y-3">
            <div className="text-[10px] font-mono text-foreground/30 uppercase tracking-widest">All Projects</div>
            <Link href="/" className="flex items-center gap-2 text-xs text-foreground/40 hover:text-foreground/70 transition-colors group">
              <ChevronLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
              Back to overview
            </Link>
          </div>

        </aside>
      </div>
    </article>
  );
}
