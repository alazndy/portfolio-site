import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck } from 'lucide-react';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ lang: string }>;
}

export async function generateStaticParams() {
  return [{ lang: 'tr' }, { lang: 'en' }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const title = 'SVP Privacy Policy';
  const description = 'Privacy policy for SVP\'s TikTok Content Posting API integration.';
  return {
    title,
    description,
    alternates: { canonical: `https://alazlab.com/${lang}/svp/privacy-policy` },
    robots: { index: true, follow: true },
  };
}

export default async function SvpPrivacyPolicy({ params }: Props) {
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
            <ShieldCheck className="w-8 h-8 text-lcars-cyan" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter text-foreground">SVP Privacy Policy</h1>
          </div>
          <p className="text-muted-foreground font-mono text-xs tracking-widest uppercase">
            {isEn ? 'Last updated: September 16, 2026' : 'Son güncelleme: 16 Eylül 2026'}
          </p>
        </header>

        <div className="glass p-6 sm:p-10 rounded-3xl border-border space-y-8 text-foreground/80 leading-relaxed bg-card shadow-lg">

          <section className="space-y-4">
            <p className="text-base text-foreground">
              {isEn
                ? 'SVP ("the Service") is a local-first, single-owner software pipeline developed and operated exclusively by Göktuğ Turhan ("the Developer", "we", "our") to produce and publish original short-form documentary videos. This policy explains what data SVP accesses through the TikTok Content Posting API, how it is used, and how it is protected, in compliance with TikTok\'s Developer Terms of Service and Developer Data Security Requirements.'
                : 'SVP ("Servis"), yalnızca Göktuğ Turhan ("Geliştirici", "biz") tarafından geliştirilen ve işletilen, özgün kısa formatlı belgesel videoları üreten ve yayınlayan, yerel-öncelikli, tek sahipli bir yazılım hattıdır. Bu politika, SVP\'nin TikTok Content Posting API üzerinden hangi verilere eriştiğini, bu verilerin nasıl kullanıldığını ve nasıl korunduğunu, TikTok\'un Geliştirici Kullanım Koşulları ve Geliştirici Veri Güvenliği Gereksinimleri ile uyumlu biçimde açıklar.'}
            </p>
            <div className="bg-lcars-orange/10 border border-lcars-orange/30 rounded-2xl p-5 text-foreground/80 text-sm">
              <strong className="text-foreground">{isEn ? 'Summary:' : 'Özet:'}</strong>{' '}
              {isEn
                ? 'SVP is not a public multi-user application. It connects only to the Developer\'s own TikTok account, stores tokens only on the Developer\'s own device, and never collects, sells, or shares data belonging to any other person.'
                : 'SVP herkese açık, çok kullanıcılı bir uygulama değildir. Yalnızca Geliştiricinin kendi TikTok hesabına bağlanır, token\'ları yalnızca Geliştiricinin kendi cihazında saklar ve başka hiçbir kişiye ait veriyi asla toplamaz, satmaz veya paylaşmaz.'}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-lcars-orange uppercase tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-6 bg-lcars-orange rounded-full" />
              1. {isEn ? 'TikTok Data Accessed' : 'Erişilen TikTok Verileri'}
            </h2>
            <p className="text-sm text-foreground/70">
              {isEn ? 'SVP accesses the following data only after the Developer completes TikTok OAuth authorization for his own account, and only to perform the direct post the Developer explicitly approved:' : 'SVP, aşağıdaki verilere yalnızca Geliştirici kendi hesabı için TikTok OAuth yetkilendirmesini tamamladıktan sonra ve yalnızca Geliştiricinin açıkça onayladığı doğrudan gönderiyi gerçekleştirmek için erişir:'}
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 text-foreground font-bold">{isEn ? 'Data' : 'Veri'}</th>
                    <th className="text-left py-3 text-foreground font-bold">{isEn ? 'Purpose' : 'Amaç'}</th>
                  </tr>
                </thead>
                <tbody className="text-foreground/70">
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4 font-semibold text-foreground">open_id, access token, refresh token</td>
                    <td className="py-3">{isEn ? 'Authenticate the Developer\'s own account for one Direct Post request' : 'Geliştiricinin kendi hesabını tek bir Direct Post isteği için doğrulamak'}</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4 font-semibold text-foreground">creator_info (nickname, privacy level options, comment/duet/stitch settings, max duration)</td>
                    <td className="py-3">{isEn ? 'Display the account\'s real posting options before the Developer confirms a privacy level' : 'Geliştirici bir gizlilik seviyesi onaylamadan önce hesabın gerçek paylaşım seçeneklerini göstermek'}</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-semibold text-foreground">{isEn ? 'The video file itself' : 'Video dosyasının kendisi'}</td>
                    <td className="py-3">{isEn ? 'Uploaded to TikTok as the post content the Developer authored and approved' : 'Geliştiricinin oluşturduğu ve onayladığı gönderi içeriği olarak TikTok\'a yüklenmek'}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-lcars-orange uppercase tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-6 bg-lcars-orange rounded-full" />
              2. {isEn ? 'How We Use This Data' : 'Bu Verileri Nasıl Kullanıyoruz'}
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-sm text-foreground/75">
              <li><strong className="text-foreground">{isEn ? 'Single-purpose use:' : 'Tek amaçlı kullanım:'}</strong> {isEn ? 'Data returned by the TikTok API is used solely to complete the specific Direct Post upload the Developer initiated for a specific video file.' : 'TikTok API\'sinden dönen veriler, yalnızca Geliştiricinin belirli bir video dosyası için başlattığı Direct Post yüklemesini tamamlamak amacıyla kullanılır.'}</li>
              <li><strong className="text-foreground">{isEn ? 'No external transmission:' : 'Harici aktarım yok:'}</strong> {isEn ? 'API calls go directly from the Developer\'s own machine to TikTok\'s official endpoints. SVP has no backend server, so no data ever passes through infrastructure controlled by anyone other than TikTok and the Developer.' : 'API çağrıları doğrudan Geliştiricinin kendi makinesinden TikTok\'un resmi uç noktalarına gider. SVP\'nin bir arka uç sunucusu yoktur; bu nedenle hiçbir veri TikTok ve Geliştirici dışında herhangi bir altyapıdan geçmez.'}</li>
              <li><strong className="text-foreground">{isEn ? 'No profiling, ads, or AI training:' : 'Profilleme, reklam veya AI eğitimi yok:'}</strong> {isEn ? 'TikTok data is never used to build advertising profiles, train machine learning models, or track any user other than the Developer\'s own posting activity.' : 'TikTok verileri asla reklam profili oluşturmak, makine öğrenmesi modeli eğitmek veya Geliştiricinin kendi paylaşım etkinliği dışında bir kullanıcıyı izlemek için kullanılmaz.'}</li>
              <li><strong className="text-foreground">{isEn ? 'Explicit consent per post:' : 'Her gönderi için açık rıza:'}</strong> {isEn ? 'Before any upload, SVP records the Developer\'s explicit consent for the selected privacy level and the required synthetic-media (AI-generated content) disclosure.' : 'Herhangi bir yükleme öncesinde SVP, Geliştiricinin seçilen gizlilik seviyesi ve gerekli sentetik medya (yapay zeka içerik) açıklaması için verdiği açık rızayı kaydeder.'}</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-lcars-orange uppercase tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-6 bg-lcars-orange rounded-full" />
              3. {isEn ? 'Storage, Retention & Deletion' : 'Depolama, Saklama ve Silme'}
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-sm text-foreground/75">
              <li><strong className="text-foreground">{isEn ? 'Local storage only:' : 'Yalnızca yerel depolama:'}</strong> {isEn ? 'OAuth tokens are stored strictly in an owner-only local file on the Developer\'s own machine, outside the project\'s source repository. They are never uploaded to any cloud service.' : 'OAuth token\'ları, kesinlikle Geliştiricinin kendi makinesinde, proje kaynak deposunun dışında yalnızca sahibin erişebildiği yerel bir dosyada saklanır. Hiçbir zaman bir bulut hizmetine yüklenmez.'}</li>
              <li><strong className="text-foreground">{isEn ? 'Publish receipts:' : 'Yayın makbuzları:'}</strong> {isEn ? 'After a successful post, SVP writes a local, non-secret receipt (publish ID, privacy level, video hash, timestamp) to keep an audit trail of what was published and when. This receipt contains no personal data about any third party.' : 'Başarılı bir gönderiden sonra SVP, ne zaman ne yayınlandığının denetim izini tutmak için yerel, gizli olmayan bir makbuz (yayın kimliği, gizlilik seviyesi, video hash\'i, zaman damgası) yazar. Bu makbuz hiçbir üçüncü tarafa ait kişisel veri içermez.'}</li>
              <li><strong className="text-foreground">{isEn ? 'Revocation:' : 'İptal:'}</strong> {isEn ? 'The Developer can revoke SVP\'s TikTok access at any time from TikTok account settings ("Manage apps"), which immediately invalidates the stored tokens. Deleting the local token file has the same effect on SVP\'s side.' : 'Geliştirici, SVP\'nin TikTok erişimini istediği zaman TikTok hesap ayarlarından ("Uygulamaları yönet") iptal edebilir; bu, saklanan token\'ları anında geçersiz kılar. Yerel token dosyasının silinmesi SVP tarafında aynı etkiyi yaratır.'}</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-lcars-orange uppercase tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-6 bg-lcars-orange rounded-full" />
              4. {isEn ? 'Data Sharing' : 'Veri Paylaşımı'}
            </h2>
            <p className="text-sm text-foreground/75">
              {isEn
                ? 'SVP does not sell, rent, or share any data with third parties. The only external party any data is ever sent to is TikTok itself, via its official API, to perform the upload the Developer explicitly approved.'
                : 'SVP hiçbir veriyi üçüncü taraflarla satmaz, kiralamaz veya paylaşmaz. Herhangi bir verinin gönderildiği tek harici taraf, Geliştiricinin açıkça onayladığı yüklemeyi gerçekleştirmek için resmi API\'si üzerinden TikTok\'un kendisidir.'}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-lcars-orange uppercase tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-6 bg-lcars-orange rounded-full" />
              5. {isEn ? 'Synthetic Media Disclosure' : 'Sentetik Medya Beyanı'}
            </h2>
            <p className="text-sm text-foreground/75">
              {isEn
                ? 'Every video SVP publishes to TikTok uses locally synthesized narration. Every such upload sets is_aigc: true and enables TikTok\'s AI-generated content label, consistent with TikTok\'s synthetic and manipulated media policy.'
                : 'SVP\'nin TikTok\'a yayınladığı her video, yerel olarak sentezlenmiş bir seslendirme kullanır. Bu tür her yükleme is_aigc: true olarak işaretlenir ve TikTok\'un yapay zeka üretimi içerik etiketini, TikTok\'un sentetik ve manipüle edilmiş medya politikasıyla uyumlu biçimde etkinleştirir.'}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-lcars-orange uppercase tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-6 bg-lcars-orange rounded-full" />
              6. {isEn ? "Children's Privacy" : 'Çocukların Gizliliği'}
            </h2>
            <p className="text-sm text-foreground/75">
              {isEn
                ? 'SVP is not directed at children and does not knowingly collect data from anyone other than its own Developer.'
                : 'SVP çocuklara yönelik değildir ve kendi Geliştiricisi dışında hiç kimseden bilerek veri toplamaz.'}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-lcars-orange uppercase tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-6 bg-lcars-orange rounded-full" />
              7. {isEn ? 'Changes to This Policy' : 'Bu Politikadaki Değişiklikler'}
            </h2>
            <p className="text-sm text-foreground/75">
              {isEn
                ? 'Material changes to this policy will be reflected on this page with an updated "Last updated" date.'
                : 'Bu politikadaki önemli değişiklikler, güncellenmiş bir "Son güncelleme" tarihiyle bu sayfaya yansıtılır.'}
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
