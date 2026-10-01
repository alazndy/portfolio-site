import React from 'react';
import fs from 'node:fs';
import path from 'node:path';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { marked } from 'marked';
import { ArrowLeft, ShieldCheck } from 'lucide-react';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ lang: string }>;
}

const policyFiles = {
  en: 'privacy-policy.en.md',
  tr: 'privacy-policy.tr.md',
} as const;

type SupportedLanguage = keyof typeof policyFiles;

function isSupportedLanguage(lang: string): lang is SupportedLanguage {
  return Object.hasOwn(policyFiles, lang);
}

export function generateStaticParams() {
  return Object.keys(policyFiles).map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isSupportedLanguage(lang)) return {};

  const title = lang === 'en' ? 'InfAssist Privacy Policy' : 'InfAssist Gizlilik Politikası';
  const description = lang === 'en'
    ? 'Privacy policy for the InfAssist mobile app.'
    : 'InfAssist mobil uygulamasının gizlilik politikası.';
  const canonical = `https://alazlab.com/${lang}/infassist/privacy-policy`;

  return {
    title,
    description,
    alternates: { canonical },
    robots: { index: true, follow: true },
  };
}

export default async function InfAssistPrivacyPolicy({ params }: Props) {
  const { lang } = await params;
  if (!isSupportedLanguage(lang)) notFound();

  const policyPath = path.join(
    process.cwd(),
    'src',
    'content',
    'legal',
    'infassist',
    policyFiles[lang],
  );
  const markdown = fs.readFileSync(policyPath, 'utf8');
  const html = await marked.parse(markdown);
  const isEnglish = lang === 'en';

  return (
    <main className="min-h-screen max-w-4xl mx-auto px-4 py-16 sm:px-6">
      <Link
        href={`/${lang}/proje/InfAssist`}
        className="mb-10 inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-muted-foreground transition-colors hover:text-lcars-cyan"
      >
        <ArrowLeft className="h-4 w-4" />
        {isEnglish ? 'Back to InfAssist' : 'InfAssist sayfasına dön'}
      </Link>

      <header className="mb-8 flex items-center gap-3">
        <ShieldCheck className="h-8 w-8 shrink-0 text-lcars-cyan" aria-hidden="true" />
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {isEnglish ? 'Legal information' : 'Yasal bilgilendirme'}
          </p>
          <h1 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl">
            {isEnglish ? 'InfAssist Privacy Policy' : 'InfAssist Gizlilik Politikası'}
          </h1>
        </div>
      </header>

      <article
        className="overflow-x-auto rounded-3xl border border-border bg-card p-6 leading-relaxed text-foreground/80 shadow-lg sm:p-10 [&_a]:text-lcars-cyan [&_a]:underline [&_h1]:mb-5 [&_h1]:text-2xl [&_h1]:font-black [&_h2]:mb-3 [&_h2]:mt-9 [&_h2]:text-xl [&_h2]:font-bold [&_li]:my-1 [&_ol]:my-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:my-4 [&_strong]:text-foreground [&_table]:my-5 [&_table]:min-w-[40rem] [&_td]:border-b [&_td]:border-border [&_td]:p-3 [&_th]:border-b [&_th]:border-border [&_th]:p-3 [&_th]:text-left [&_ul]:my-4 [&_ul]:list-disc [&_ul]:pl-6"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </main>
  );
}
