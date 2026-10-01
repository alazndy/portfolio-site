import Link from 'next/link';
import { ArrowRight, Code2, Compass, Layers3, Smartphone } from 'lucide-react';

export async function generateStaticParams() {
  return [{ lang: 'tr' }, { lang: 'en' }];
}

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === 'en';
  const products = [
    {
      name: 'InfAssist',
      description: isEn ? 'A workspace for creators to organize messages and draft replies.' : 'İçerik üreticilerinin mesajlarını düzenlemesine ve yanıt taslakları hazırlamasına yardımcı olan çalışma alanı.',
      href: `/${lang}/proje/InfAssist`,
      icon: Smartphone,
    },
    {
      name: 'GT-Launcher',
      description: isEn ? 'A modular Android launcher with configurable widgets and local app indexing.' : 'Yapılandırılabilir widget’lar ve yerel uygulama indeksleme sunan modüler Android başlatıcısı.',
      href: `/${lang}/proje/GT-Launcher`,
      icon: Layers3,
    },
    {
      name: 'GTab',
      description: isEn ? 'A customizable Chrome new-tab workspace.' : 'Chrome için özelleştirilebilir yeni sekme çalışma alanı.',
      href: `/${lang}/gtab`,
      icon: Compass,
    },
    {
      name: 'R-AI-OS',
      description: isEn ? 'Local tools for developer workflows and task orchestration.' : 'Geliştirici iş akışları ve görev düzenlemesi için yerel araçlar.',
      href: `/${lang}/proje/R-AI-OS`,
      icon: Code2,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-12 pb-24 px-2 sm:px-4">
      <section className="apple-card p-8 sm:p-14 space-y-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-apple-blue">AlazLab</p>
        <h1 className="max-w-3xl text-4xl sm:text-6xl font-extrabold tracking-tight text-foreground">
          {isEn ? 'Independent digital products, made with purpose.' : 'Amaca yönelik bağımsız dijital ürünler.'}
        </h1>
        <p className="max-w-3xl text-base sm:text-lg leading-relaxed text-muted-foreground">
          {isEn
            ? 'AlazLab is a product studio building software for mobile, desktop, and web, together with focused tools for technical workflows. We publish and maintain our own products; each product page describes its current capabilities and availability.'
            : 'AlazLab; mobil, masaüstü ve web için yazılımlar ile teknik iş akışlarına yönelik araçlar geliştiren bağımsız bir ürün stüdyosudur. Kendi ürünlerimizi yayımlar ve sürdürürüz; her ürün sayfasında mevcut özellikler ve erişim bilgileri yer alır.'}
        </p>
        <a href="mailto:goktugturhan74@gmail.com" className="inline-flex items-center gap-2 rounded-xl bg-foreground px-5 py-3 text-sm font-semibold text-background hover:opacity-90">
          {isEn ? 'Contact AlazLab' : 'AlazLab ile iletişime geç'} <ArrowRight className="w-4 h-4" />
        </a>
      </section>

      <section className="space-y-5">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">{isEn ? 'Products' : 'Ürünler'}</h2>
          <p className="mt-2 text-sm text-muted-foreground">{isEn ? 'A few of the products currently developed under AlazLab.' : 'AlazLab çatısı altında geliştirilen ürünlerden bazıları.'}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {products.map(({ name, description, href, icon: Icon }) => (
            <Link key={name} href={href} className="apple-card group flex items-start gap-4 p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-muted text-apple-blue"><Icon className="h-5 w-5" /></span>
              <span className="min-w-0">
                <span className="flex items-center gap-2 font-semibold text-foreground">{name}<ArrowRight className="h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:translate-x-1" /></span>
                <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">{description}</span>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
