import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Shield, AlertTriangle, Search, Activity, Eye, Terminal, Database } from 'lucide-react';
import { getProjectBySlug } from '@/lib/markdown';
import { marked } from 'marked';

export default async function CrucixPage() {
  const project = getProjectBySlug('Crucix');
  const contentHtml = await marked.parse(project?.content || '');
  
  return (
    <div className="min-h-screen pb-24 animate-in fade-in duration-1000">
      
      {/* ── HERO ── */}
      <div className="relative pt-20 pb-16 px-6 overflow-hidden">
        {/* Radar/Scan background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
          <div className="w-[800px] h-[800px] border border-lcars-red rounded-full absolute" />
          <div className="w-[600px] h-[600px] border border-lcars-red rounded-full absolute" />
          <div className="w-[400px] h-[400px] border border-lcars-red rounded-full absolute" />
          <div className="w-[800px] h-1 bg-lcars-red absolute animate-pulse" />
          <div className="h-[800px] w-1 bg-lcars-red absolute animate-pulse" />
        </div>
        
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-lcars-red/10 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-5xl mx-auto relative z-10 space-y-8">
          <Link href="/#projects" className="inline-flex items-center gap-2 text-foreground/50 hover:text-lcars-red transition-colors font-mono tracking-widest uppercase text-xs">
            <ArrowLeft className="w-4 h-4" />
            Back to Hub
          </Link>

          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-foreground/5 border border-lcars-red/30 rounded-full font-mono text-xs uppercase tracking-widest text-lcars-red">
              <Shield className="w-4 h-4" />
              Security Operations Platform
            </div>
            
          {/* Project Cover Image */}
          {project?.metadata?.image && (
            <div className="relative w-full aspect-[21/9] rounded-[32px] overflow-hidden border border-border mb-12 group">
              <img 
                src={project.metadata.image} 
                alt={project.metadata.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
            </div>
          )}

          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-foreground">CRUCIX</h1>
            <p className="text-xl md:text-2xl text-foreground/60 font-light max-w-2xl leading-relaxed">
              A modular SIEM for threat detection, log aggregation, and incident response. Built for infrastructure teams.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 space-y-16 relative z-10">

        {/* ── ARCHITECTURE PIPELINE ── */}
        <div className="glass p-8 md:p-12 rounded-[32px] border-border space-y-8">
          <h2 className="text-2xl font-black text-foreground uppercase tracking-tight flex items-center gap-3">
            <span className="w-2 h-6 bg-lcars-red rounded-full" />
            Veri İşleme & Tehdit Analiz Hattı
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* Connecting lines for desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-foreground/5 -translate-y-1/2 z-0" />
            
            <div className="glass bg-[#0a0505] p-6 rounded-2xl border border-lcars-red/20 relative z-10 space-y-4">
              <div className="w-10 h-10 bg-lcars-red/10 rounded-full flex items-center justify-center">
                <Terminal className="w-5 h-5 text-lcars-red" />
              </div>
              <h3 className="font-bold text-foreground uppercase tracking-tight">1. Ingestion</h3>
              <p className="text-xs text-foreground/50 leading-relaxed font-mono">
                Kafka-based event bus ingests high-throughput logs from syslog, HTTP, and APIs.
              </p>
            </div>

            <div className="glass bg-[#0a0505] p-6 rounded-2xl border border-lcars-orange/20 relative z-10 space-y-4">
              <div className="w-10 h-10 bg-lcars-orange/10 rounded-full flex items-center justify-center">
                <Search className="w-5 h-5 text-lcars-orange" />
              </div>
              <h3 className="font-bold text-foreground uppercase tracking-tight">2. Detection</h3>
              <p className="text-xs text-foreground/50 leading-relaxed font-mono">
                Custom DSL for temporal rules & ML layer for anomalous sequences. Sub-second latency.
              </p>
            </div>

            <div className="glass bg-[#0a0505] p-6 rounded-2xl border border-lcars-cyan/20 relative z-10 space-y-4">
              <div className="w-10 h-10 bg-lcars-cyan/10 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-lcars-cyan" />
              </div>
              <h3 className="font-bold text-foreground uppercase tracking-tight">3. Response</h3>
              <p className="text-xs text-foreground/50 leading-relaxed font-mono">
                Incident grouping, Slack/PagerDuty webhooks, and actionable remediation checklists.
              </p>
            </div>
          </div>
        </div>

        {/* ── DATA LAYER & TECH STACK ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <div className="glass p-8 md:p-12 rounded-[32px] border-border space-y-6">
            <div className="flex items-center gap-4">
               <Database className="w-8 h-8 text-lcars-cyan" />
               <h2 className="text-2xl font-black text-foreground uppercase tracking-tight">ClickHouse OLAP</h2>
            </div>
            <p className="text-foreground/60 text-sm leading-relaxed">
              Milyarlarca log satırını milisaniyeler içinde sorgulamak için tasarlanmış sütun tabanlı veritabanı mimarisi (ClickHouse). Retention policy'ler ve otomatik data tiering ile donanım maliyetlerini minimize eder.
            </p>
          </div>

          <div className="glass p-8 md:p-12 rounded-[32px] border-border space-y-6 bg-black/40">
             <h2 className="text-2xl font-black text-foreground uppercase tracking-tight flex items-center gap-3">
              <span className="w-2 h-6 bg-foreground/20 rounded-full" />
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-2 pt-2">
              {['Go', 'React 19', 'TypeScript', 'PostgreSQL', 'ClickHouse', 'Kafka', 'Docker', 'Kubernetes'].map(tech => (
                <div key={tech} className="border border-border bg-foreground/5 px-4 py-2 rounded-xl text-xs font-mono text-foreground/70">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── SECURITY STATUS ── */}
        <div className="glass rounded-[32px] border-border p-8 flex flex-col md:flex-row items-center justify-between gap-6 bg-[url('/noise.png')]">
          <div className="flex items-center gap-4">
             <div className="w-3 h-3 rounded-full bg-lcars-green animate-pulse" />
             <div className="font-mono text-sm tracking-widest text-foreground/60 uppercase">System Status</div>
          </div>
          <div className="text-right">
             <div className="text-2xl font-black text-foreground uppercase tracking-tight">Active Development</div>
             <div className="text-xs text-foreground/40 font-mono mt-1">Core modules production-ready</div>
          </div>
        </div>

      
        {/* ── DYNAMIC PROJECT DETAILS ── */}
        <div className="glass p-8 md:p-12 rounded-[32px] border-border mt-16 max-w-5xl mx-auto px-6 relative z-10 mb-16">
          <div
            className="prose prose-invert max-w-none prose-headings:font-black prose-headings:tracking-tight prose-headings:text-foreground prose-p:text-foreground/60 prose-li:text-foreground/60 prose-strong:text-foreground/90 prose-a:text-lcars-red"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </div>
      </div>
    </div>
  );
}
