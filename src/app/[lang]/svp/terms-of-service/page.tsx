import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ScrollText } from 'lucide-react';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ lang: string }>;
}

export async function generateStaticParams() {
  return [{ lang: 'tr' }, { lang: 'en' }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const title = 'SVP Terms of Service';
  const description = 'Terms of Service for SVP, including its TikTok Content Posting API integration.';
  return {
    title,
    description,
    alternates: { canonical: `https://alazlab.com/${lang}/svp/terms-of-service` },
    robots: { index: true, follow: true },
  };
}

export default async function SvpTermsOfService({ params }: Props) {
  const { lang } = await params;
  const isEn = lang === 'en';

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 max-w-4xl mx-auto animate-in fade-in duration-1000">
      <Link href={`/${lang}/svp`} className="inline-flex items-center gap-2 text-muted-foreground hover:text-lcars-cyan transition-colors mb-10 text-xs font-mono tracking-widest uppercase">
        <ArrowLeft className="w-4 h-4" />
        {isEn ? 'Back to SVP' : "SVP'ye Dön"}
      </Link>

      <div className="space-y-10">
        <header className="space-y-3">
          <div className="flex items-center gap-3">
            <ScrollText className="w-8 h-8 text-lcars-orange" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter text-foreground">SVP Terms of Service</h1>
          </div>
          <p className="text-muted-foreground font-mono text-xs tracking-widest uppercase">
            {isEn ? 'Last updated: September 16, 2026' : 'Son güncelleme: 16 Eylül 2026'}
          </p>
        </header>

        <div className="glass p-6 sm:p-10 rounded-3xl border-border space-y-8 text-foreground/80 leading-relaxed bg-card shadow-lg">

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-lcars-cyan uppercase tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-6 bg-lcars-cyan rounded-full" />
              1. {isEn ? 'Scope' : 'Kapsam'}
            </h2>
            <p className="text-sm text-foreground/75">
              {isEn
                ? 'SVP ("the Service") is a personal, single-owner software pipeline developed and operated exclusively by Göktuğ Turhan ("the Developer", "we", "our") to research, produce, and publish original short-form documentary videos, including via the TikTok Content Posting API. SVP is not offered to the public as a multi-tenant application: there is no public sign-up, no user accounts other than the Developer\'s own, and no third party interacts with SVP directly.'
                : 'SVP ("Servis"), yalnızca Göktuğ Turhan ("Geliştirici", "biz") tarafından geliştirilen ve işletilen; özgün, kısa formatlı belgesel videoları araştıran, üreten ve TikTok Content Posting API dahil olmak üzere yayınlayan kişisel, tek sahipli bir yazılım hattıdır. SVP, çok kiracılı bir uygulama olarak halka sunulmaz: herkese açık bir kayıt sistemi, Geliştiricinin kendi hesapları dışında kullanıcı hesabı yoktur ve hiçbir üçüncü taraf SVP ile doğrudan etkileşime girmez.'}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-lcars-cyan uppercase tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-6 bg-lcars-cyan rounded-full" />
              2. {isEn ? 'Use of the TikTok API' : 'TikTok API Kullanımı'}
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-sm text-foreground/75">
              <li>{isEn ? 'Direct posting occurs only to the Developer\'s own authorized TikTok account.' : 'Doğrudan gönderi yalnızca Geliştiricinin kendi yetkilendirdiği TikTok hesabına yapılır.'}</li>
              <li>{isEn ? 'Every upload requires an explicit, per-episode consent record before it is sent.' : 'Her yükleme, gönderilmeden önce bölüm bazında açık bir rıza kaydı gerektirir.'}</li>
              <li>{isEn ? 'SVP queries creator_info immediately before each post so only privacy levels and settings the account actually supports are offered.' : 'SVP, her gönderiden hemen önce creator_info sorgusu yapar; böylece yalnızca hesabın gerçekten desteklediği gizlilik seviyeleri ve ayarlar sunulur.'}</li>
              <li>{isEn ? 'All uploads comply with TikTok\'s Developer Terms of Service, Community Guidelines, and synthetic/AI-generated media labeling requirements.' : 'Tüm yüklemeler TikTok\'un Geliştirici Kullanım Koşulları, Topluluk Kuralları ve sentetik/yapay zeka içerik etiketleme gerekliliklerine uygundur.'}</li>
              <li>{isEn ? 'Unaudited TikTok API clients are restricted by TikTok to private viewing; SVP never represents a post as public unless TikTok\'s own response confirms it.' : 'Denetlenmemiş TikTok API istemcileri TikTok tarafından yalnızca özel görünürlükle sınırlandırılır; SVP, TikTok\'un kendi yanıtı onaylamadıkça bir gönderiyi asla kamuya açık olarak sunmaz.'}</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-lcars-cyan uppercase tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-6 bg-lcars-cyan rounded-full" />
              3. {isEn ? 'Content Standards' : 'İçerik Standartları'}
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-sm text-foreground/75">
              <li>{isEn ? 'Every factual claim is backed by a verifiable HTTPS source before it is scripted.' : 'Senaryolanmadan önce her olgusal iddia, doğrulanabilir bir HTTPS kaynağına dayandırılır.'}</li>
              <li>{isEn ? 'All visual assets are public-domain or CC0-licensed, with tracked provenance and SHA-256 verification.' : 'Tüm görsel varlıklar, izlenebilir kaynak ve SHA-256 doğrulamasıyla kamu malı veya CC0 lisanslıdır.'}</li>
              <li>{isEn ? 'Narration is synthetic and is always disclosed as such on every platform that receives the video.' : 'Seslendirme sentetiktir ve videoyu alan her platformda bu şekilde belirtilir.'}</li>
              <li>{isEn ? 'Licensed music is used only with its required attribution recorded and displayed.' : 'Lisanslı müzik yalnızca gerekli atıf kaydedilip görüntülenerek kullanılır.'}</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-lcars-cyan uppercase tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-6 bg-lcars-cyan rounded-full" />
              4. {isEn ? 'No Warranty' : 'Garanti Verilmemesi'}
            </h2>
            <p className="text-sm text-foreground/75">
              {isEn
                ? 'SVP is provided "as is", for the Developer\'s own personal and portfolio use, without warranties of any kind. The Developer is not liable for TikTok platform availability, API changes, or moderation decisions made by TikTok, which are outside the Developer\'s control.'
                : 'SVP, Geliştiricinin kendi kişisel ve portföy kullanımı için, herhangi bir garanti verilmeksizin "olduğu gibi" sunulur. Geliştirici; TikTok platformunun erişilebilirliği, API değişiklikleri veya Geliştiricinin kontrolü dışında olan TikTok tarafından alınan moderasyon kararlarından sorumlu değildir.'}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-lcars-cyan uppercase tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-6 bg-lcars-cyan rounded-full" />
              5. {isEn ? 'Changes to These Terms' : 'Bu Koşullardaki Değişiklikler'}
            </h2>
            <p className="text-sm text-foreground/75">
              {isEn
                ? 'These Terms may be updated as SVP\'s capabilities change. Material changes will be reflected on this page with an updated "Last updated" date.'
                : 'Bu Koşullar, SVP\'nin yetenekleri değiştikçe güncellenebilir. Önemli değişiklikler, güncellenmiş bir "Son güncelleme" tarihiyle bu sayfaya yansıtılır.'}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-lcars-cyan uppercase tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-6 bg-lcars-cyan rounded-full" />
              6. {isEn ? 'Governing Law' : 'Uygulanacak Hukuk'}
            </h2>
            <p className="text-sm text-foreground/75">
              {isEn ? 'These Terms are governed by the laws of the Republic of Türkiye.' : 'Bu Koşullar, Türkiye Cumhuriyeti yasalarına tabidir.'}
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-border">
            <h2 className="text-lg font-bold text-foreground uppercase">{isEn ? 'Contact & Developer' : 'İletişim & Geliştirici'}</h2>
            <p className="text-sm text-muted-foreground">
              {isEn ? 'Developer' : 'Geliştirici'}: Göktuğ Turhan · Email: <a href="mailto:goktugturhan74@gmail.com" className="text-lcars-cyan hover:underline">goktugturhan74@gmail.com</a> · {isEn ? 'Website' : 'Web sitesi'}: <a href="https://alazlab.com" className="text-lcars-cyan hover:underline">alazlab.com</a>
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
