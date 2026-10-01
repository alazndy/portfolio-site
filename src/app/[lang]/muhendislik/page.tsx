import Link from 'next/link';
import { getAllProjects } from '@/lib/markdown';
import { statusConfig, statusDot } from '@/lib/project-config';
import { Wrench, Cpu, ArrowRight } from 'lucide-react';

export async function generateStaticParams() {
  return [{ lang: 'tr' }, { lang: 'en' }];
}

export default async function MuhendislikPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === 'en';
  const projects = getAllProjects(lang).filter(p => p.area === 'muhendislik');

  return (
    <div className="max-w-7xl mx-auto space-y-10 pb-24 px-2 sm:px-4">

      {/* HEADER */}
      <div className="apple-card p-8 sm:p-12 space-y-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-apple-orange">
            <Wrench className="w-4 h-4" />
            <span>{isEn ? 'AlazLab · Engineering tools' : 'AlazLab · Mühendislik araçları'}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground">
            {isEn ? 'Tools for engineering workflows' : 'Mühendislik iş akışları için araçlar'}
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl font-normal">
            {isEn
              ? 'A selection of independent software tools for technical diagrams, project workflows, and connected systems. Product pages describe the available features and current status.'
              : 'Teknik çizimler, proje akışları ve bağlantılı sistemler için geliştirilen bağımsız yazılım araçları. Mevcut özellikler ve durum, ürün sayfalarında açıklanır.'}
          </p>
        </div>

      </div>

      {/* PROJECT MATRIX */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p) => (
          <Link
            key={p.slug}
            href={`/${lang}/proje/${p.slug}`}
            className="apple-card p-6 flex flex-col justify-between space-y-5 group"
          >
            <div className="space-y-4">
              {/* Image or Icon Preview */}
              {p.image ? (
                <div className="w-full h-44 rounded-2xl overflow-hidden border border-border bg-black">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              ) : (
                <div className="w-full h-32 rounded-2xl bg-muted border border-border flex items-center justify-center text-apple-orange group-hover:bg-orange-500/10 transition-colors">
                  <Cpu className="w-8 h-8" />
                </div>
              )}

              {/* Status & Category */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-muted-foreground">
                  {p.category}
                </span>
                <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border uppercase flex items-center gap-1.5 ${statusConfig[p.status] ?? ''}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${statusDot[p.status] ?? ''}`} />
                  {p.status}
                </span>
              </div>

              {/* Title & Summary */}
              <div className="space-y-1.5">
                <h3 className="text-lg font-bold tracking-tight text-foreground group-hover:text-apple-orange transition-colors flex items-center justify-between">
                  {p.title}
                  <ArrowRight className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-apple-orange" />
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {p.summary}
                </p>
              </div>
            </div>

            {/* Tech Stack Pills */}
            {p.techStack && p.techStack.length > 0 && (
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border">
                {p.techStack.slice(0, 4).map((tech) => (
                  <span key={tech} className="px-2 py-0.5 rounded text-[11px] font-mono bg-muted text-foreground/80 border border-border">
                    {tech}
                  </span>
                ))}
                {p.techStack.length > 4 && (
                  <span className="px-1.5 py-0.5 text-[11px] font-mono text-muted-foreground">
                    +{p.techStack.length - 4}
                  </span>
                )}
              </div>
            )}
          </Link>
        ))}
      </div>

    </div>
  );
}
