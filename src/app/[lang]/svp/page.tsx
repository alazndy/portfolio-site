import React from 'react';
import Link from 'next/link';
import { ChevronLeft, Film, ShieldCheck, ScrollText } from 'lucide-react';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ lang: string }>;
}

export async function generateStaticParams() {
  return [{ lang: 'tr' }, { lang: 'en' }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isEn = lang === 'en';
  const title = 'SVP — Short Video Pipeline';
  const description = isEn
    ? 'A local-first pipeline that produces evidence-led English history documentary Shorts, built and operated solely by Göktuğ Turhan.'
    : 'Kanıta dayalı İngilizce tarih belgeseli Shorts videoları üreten, tamamen Göktuğ Turhan tarafından geliştirilip işletilen yerel-öncelikli bir üretim hattı.';

  return {
    title,
    description,
    openGraph: {
      title: `${title} — Göktuğ Turhan`,
      description,
      url: `https://alazlabs.com/${lang}/svp`,
      siteName: 'alazlabs.com',
      type: 'article',
    },
    alternates: { canonical: `https://alazlabs.com/${lang}/svp` },
  };
}

export default async function SvpPage({ params }: Props) {
  const { lang } = await params;
  const isEn = lang === 'en';

  return (
    <article className="max-w-4xl mx-auto pb-24 px-2 sm:px-4 space-y-10 animate-in fade-in duration-500">
      <div className="py-2">
        <Link
          href={`/${lang}`}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted/60 hover:bg-muted border border-border text-xs font-medium text-muted-foreground hover:text-foreground transition-all group"
        >
          <ChevronLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
          {isEn ? 'Back to All Projects' : 'Tüm Projelere Dön'}
        </Link>
      </div>

      <header className="space-y-3">
        <div className="flex items-center gap-3">
          <Film className="w-8 h-8 text-lcars-cyan" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter text-foreground">SVP — Short Video Pipeline</h1>
        </div>
        <p className="text-muted-foreground font-mono text-xs tracking-widest uppercase">
          {isEn ? 'Personal, single-owner production tool · Not a public service' : 'Kişisel, tek sahipli üretim aracı · Genel kullanıma açık bir servis değildir'}
        </p>
      </header>

      <div className="glass p-6 sm:p-10 rounded-3xl border-border space-y-8 text-foreground/80 leading-relaxed bg-card shadow-lg">
        <section className="space-y-4">
          <p className="text-base text-foreground">
            {isEn
              ? 'SVP is a local-first software pipeline that researches, scripts, narrates, captions, and renders short-form (45-second, 1080×1920) English documentary videos about verifiable history and strange real events. It is developed and operated exclusively by Göktuğ Turhan for his own personal and portfolio publishing accounts.'
              : 'SVP; doğrulanabilir tarih ve gerçek "garip olaylar" konularında kısa formatlı (45 saniye, 1080×1920) İngilizce belgesel videoları araştıran, senaryolayan, seslendiren, altyazılayan ve render eden yerel-öncelikli bir yazılım hattıdır. Yalnızca Göktuğ Turhan tarafından, kendi kişisel ve portföy yayın hesapları için geliştirilir ve işletilir.'}
          </p>
          <div className="bg-lcars-orange/10 border border-lcars-orange/30 rounded-2xl p-5 text-foreground/80 text-sm">
            <strong className="text-foreground">{isEn ? 'Summary:' : 'Özet:'}</strong>{' '}
            {isEn
              ? 'SVP is not a multi-user platform. There is no public sign-up, no accounts other than the developer\'s own, and no third-party data is ever collected, stored, or processed by SVP.'
              : 'SVP çok kullanıcılı bir platform değildir. Herkese açık bir kayıt sistemi, geliştiricinin kendi hesapları dışında bir hesap yoktur ve SVP hiçbir zaman üçüncü taraf verisi toplamaz, saklamaz veya işlemez.'}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-lcars-orange uppercase tracking-tight flex items-center gap-3">
            <span className="w-1.5 h-6 bg-lcars-orange rounded-full" />
            {isEn ? 'What it does' : 'Ne yapar'}
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-foreground/75">
            <li>{isEn ? 'Sources every claim to a verifiable HTTPS reference before scripting.' : 'Senaryo yazılmadan önce her iddiayı doğrulanabilir bir HTTPS kaynağına dayandırır.'}</li>
            <li>{isEn ? 'Uses only public-domain or CC0-licensed archival visuals with tracked provenance and SHA-256 hashes.' : 'Yalnızca kaynağı takip edilen ve SHA-256 ile doğrulanan kamu malı veya CC0 lisanslı arşiv görselleri kullanır.'}</li>
            <li>{isEn ? 'Narrates locally with an on-device text-to-speech model; no cloud voice API is used.' : 'Yerel bir metin-konuşma modeliyle seslendirme yapar; bulut tabanlı bir ses API\'si kullanılmaz.'}</li>
            <li>{isEn ? 'Publishing (including TikTok) is fail-closed: nothing is posted without an explicit, per-episode owner action and consent record.' : 'Yayınlama (TikTok dahil) fail-closed çalışır: geliştiricinin her bölüm için açık bir onayı ve rıza kaydı olmadan hiçbir şey paylaşılmaz.'}</li>
            <li>{isEn ? 'Every published video truthfully discloses synthetic narration using each platform\'s AI-generated content label.' : 'Yayınlanan her video, platformun kendi yapay-zeka etiketini kullanarak sentetik seslendirmeyi doğru biçimde belirtir.'}</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-lcars-orange uppercase tracking-tight flex items-center gap-3">
            <span className="w-1.5 h-6 bg-lcars-orange rounded-full" />
            {isEn ? 'TikTok integration' : 'TikTok entegrasyonu'}
          </h2>
          <p className="text-sm text-foreground/75">
            {isEn
              ? 'SVP uses the TikTok Content Posting API (Direct Post) solely to let the developer publish videos to his own authorized TikTok account. See the Privacy Policy below for exactly what TikTok data is accessed and how it is handled.'
              : 'SVP, TikTok Content Posting API (Direct Post) özelliğini yalnızca geliştiricinin kendi yetkilendirdiği TikTok hesabına video yayınlayabilmesi için kullanır. TikTok verilerinin tam olarak nasıl erişildiği ve işlendiği için aşağıdaki Gizlilik Politikasına bakın.'}
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href={`/${lang}/svp/privacy-policy`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-lcars-cyan/10 border border-lcars-cyan/30 text-lcars-cyan text-xs font-mono tracking-widest uppercase hover:bg-lcars-cyan/20 transition-colors"
            >
              <ShieldCheck className="w-4 h-4" />
              {isEn ? 'Privacy Policy' : 'Gizlilik Politikası'}
            </Link>
            <Link
              href={`/${lang}/svp/terms-of-service`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-lcars-orange/10 border border-lcars-orange/30 text-lcars-orange text-xs font-mono tracking-widest uppercase hover:bg-lcars-orange/20 transition-colors"
            >
              <ScrollText className="w-4 h-4" />
              {isEn ? 'Terms of Service' : 'Kullanım Koşulları'}
            </Link>
          </div>
        </section>

        <section className="space-y-3 pt-4 border-t border-border">
          <h2 className="text-lg font-bold text-foreground uppercase">{isEn ? 'Contact & Developer' : 'İletişim & Geliştirici'}</h2>
          <p className="text-sm text-muted-foreground">
            {isEn ? 'Developer' : 'Geliştirici'}: Göktuğ Turhan · Email:{' '}
            <a href="mailto:goktugturhan74@gmail.com" className="text-lcars-cyan hover:underline">goktugturhan74@gmail.com</a> ·{' '}
            {isEn ? 'Website' : 'Web sitesi'}: <a href="https://alazlabs.com" className="text-lcars-cyan hover:underline">alazlabs.com</a>
          </p>
        </section>
      </div>
    </article>
  );
}
