import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck } from 'lucide-react';

export async function generateStaticParams() {
  return [{ lang: 'tr' }, { lang: 'en' }];
}

type Row = readonly string[];

interface Copy {
  back: string;
  title: string;
  updated: string;
  intro: string;
  summaryLabel: string;
  summary: string;
  sections: readonly {
    heading: string;
    body?: string;
    head?: Row;
    rows?: readonly Row[];
  }[];
  contactHeading: string;
  contactBody: string;
}

const CONTACT_EMAIL = 'goktugturhan74@gmail.com';

const en: Copy = {
  back: 'Back to GT-Launcher',
  title: 'GT-Launcher Privacy Policy',
  updated: 'Last updated: September 25, 2026',
  intro:
    'GT-Launcher (com.alazndy.gtlauncher) is a home screen replacement for Android. It has no user accounts and no servers of its own. Almost everything it does happens on your device. This page lists the few things that leave your device, so you can decide for yourself.',
  summaryLabel: 'Summary:',
  summary:
    'Your cards, layouts, profiles, notes, voice memos, parking location, contacts, calendar entries and installed-app list stay on your device. Crash reports are sent only if you opt in.',
  sections: [
    {
      heading: '1. What stays on your device',
      body:
        'Your cards, layouts, profiles, settings, notes, voice memos, parking location, contacts, calendar entries and installed-app list are stored on your device only. GT-Launcher does not upload them anywhere. Profile files you export are saved where you choose and are shared only if you share them.',
    },
    {
      heading: '2. What leaves your device',
      body:
        'None of these services is given your name, email, phone number, contacts or messages, because the app has no account to attach them to.',
      head: ['Feature', 'Sent to', 'What is sent', 'When'],
      rows: [
        ['Weather card', 'OpenWeatherMap', "Your device's coordinates (GPS or network location), the app language and the app's API key", 'Only if you use the Weather card and grant location permission'],
        ['Finance card', 'CoinGecko, Frankfurter, Twelve Data, Yahoo Finance', 'The stock, crypto or currency symbols you added (never quantities or prices you paid)', 'Only if you use the Finance card'],
        ['Maps in Drive Mode', 'Google Maps SDK (Google)', 'Data the Maps SDK collects to draw the map, such as location and device information', 'Only when the Drive Mode map is shown'],
        ['Premium subscription', 'Google Play Billing (Google)', 'Handled by Google Play; the app does not receive your payment details', 'Only if you buy or restore a subscription'],
        ['Text recognition', 'Google Play services ML Kit', 'Text is recognized on the device; the SDK may send diagnostic and device identifiers', 'Only when you use a feature that reads text'],
        ['Crash reports', 'Firebase Crashlytics (Google)', 'See section 3', 'Only if you opt in'],
      ],
    },
    {
      heading: '3. Optional anonymous crash reports',
      body:
        'The first time you use the launcher, it asks whether you want to send crash reports. Nothing is sent until you say yes. You can change your answer at any time in Settings > System > Privacy, and your choice is never included in an exported profile. If you agree and the app crashes, Firebase Crashlytics receives the error and stack trace, the state of the app at the time, the device model and Android version, the app version and a Crashlytics installation identifier. It is used only to find and fix bugs. Crashlytics keeps crash data for 90 days, and Google processes it on our behalf under the Firebase privacy terms (firebase.google.com/support/privacy).',
    },
    {
      heading: '4. Permissions and why they are requested',
      body: 'You can withdraw any permission in Android settings. The related card stops working; the rest of the launcher continues to work.',
      head: ['Permission', 'Used for', 'Leaves the device?'],
      rows: [
        ['Contacts, Phone (call)', 'Fast-dial and favorite-contact cards, contact search', 'No'],
        ['Calendar', 'Upcoming-events card', 'No'],
        ['Location (fine and coarse)', 'Weather card, Drive Mode map and speed, remembering where you parked', 'Weather and map only, see section 2'],
        ['Bluetooth', 'Connecting to an OBD adapter and detecting your car\'s Bluetooth to save the parking spot', 'No'],
        ['Microphone', 'Voice-memo card and the audio visualizer', 'No'],
        ['Camera', 'Camera and flashlight cards', 'No'],
        ['Physical activity', 'Step counter card', 'No'],
        ['Notification access', 'Notification, message and now-playing cards', 'No'],
        ['Usage access, list of installed apps', 'Showing your apps, recent apps and the app drawer', 'No'],
        ['Accessibility service', 'Only performs the system Back and Recents actions for gestures; it does not read your screen', 'No'],
        ['Wallpaper, vibrate, delete packages', 'Wallpaper editor, haptic feedback, uninstalling an app you choose', 'No'],
      ],
    },
    {
      heading: '5. Children',
      body: 'GT-Launcher is not directed to children under 13 and does not knowingly collect data from them.',
    },
    {
      heading: '6. Retention and deletion',
      body:
        'We keep no user data on our own servers. Data on your device is removed when you uninstall the app or clear its storage. Crash reports, if you opted in, are deleted by Firebase after 90 days. To ask about anything else, contact us using the address below.',
    },
    {
      heading: '7. Changes to this policy',
      body:
        'If we change how data is handled, we will update this page and the date above. The in-app crash-report question is asked again only if the data collected changes.',
    },
  ],
  contactHeading: 'Contact & Developer',
  contactBody: 'Developer: Göktuğ Turhan · Email: ',
};

const tr: Copy = {
  back: "GT-Launcher'a Dön",
  title: 'GT-Launcher Gizlilik Politikası',
  updated: 'Son güncelleme: 25 Eylül 2026',
  intro:
    "GT-Launcher (com.alazndy.gtlauncher) Android için bir ana ekran uygulamasıdır. Kullanıcı hesabı ve kendi sunucusu yoktur. Yaptığı işin neredeyse tamamı cihazında gerçekleşir. Bu sayfa, cihazdan dışarı çıkan az sayıdaki şeyi listeler, böylece karar sen verirsin.",
  summaryLabel: 'Özet:',
  summary:
    'Kartların, düzenlerin, profillerin, notların, sesli notların, park konumun, rehberin, takvim kayıtların ve yüklü uygulama listen cihazında kalır. Çökme raporları yalnızca sen kabul edersen gönderilir.',
  sections: [
    {
      heading: '1. Cihazında kalanlar',
      body:
        'Kartların, düzenlerin, profillerin, ayarların, notların, sesli notların, park konumun, rehberin, takvim kayıtların ve yüklü uygulama listen yalnızca cihazında saklanır. GT-Launcher bunları hiçbir yere yüklemez. Dışa aktardığın profil dosyaları senin seçtiğin yere kaydedilir ve sen paylaşmadıkça paylaşılmaz.',
    },
    {
      heading: '2. Cihazından çıkanlar',
      body:
        'Bu servislerin hiçbirine adın, e-postan, telefon numaran, rehberin veya mesajların verilmez, çünkü uygulamanın bunları bağlayacağı bir hesabı yoktur.',
      head: ['Özellik', 'Gönderilen yer', 'Ne gönderilir', 'Ne zaman'],
      rows: [
        ['Hava durumu kartı', 'OpenWeatherMap', 'Cihazının koordinatları (GPS veya ağ konumu), uygulama dili ve uygulamanın API anahtarı', 'Yalnızca Hava Durumu kartını kullanırsan ve konum izni verirsen'],
        ['Finans kartı', 'CoinGecko, Frankfurter, Twelve Data, Yahoo Finance', 'Eklediğin hisse, kripto ya da döviz sembolleri (miktar veya ödediğin fiyat asla gönderilmez)', 'Yalnızca Finans kartını kullanırsan'],
        ['Drive Mode haritası', 'Google Maps SDK (Google)', 'Haritayı çizmek için Maps SDK\'sının topladığı veriler (konum, cihaz bilgisi gibi)', 'Yalnızca Drive Mode haritası görünürken'],
        ['Premium abonelik', 'Google Play Billing (Google)', 'Google Play tarafından yönetilir, uygulama ödeme bilgilerini almaz', 'Yalnızca abonelik satın alır veya geri yüklersen'],
        ['Metin tanıma', 'Google Play hizmetleri ML Kit', 'Metin cihazda tanınır, SDK tanılama ve cihaz kimliği gönderebilir', 'Yalnızca metin okuyan bir özelliği kullanırsan'],
        ['Çökme raporları', 'Firebase Crashlytics (Google)', 'Bkz. bölüm 3', 'Yalnızca sen kabul edersen'],
      ],
    },
    {
      heading: '3. İsteğe bağlı anonim çökme raporları',
      body:
        "Launcher'ı ilk kullandığında çökme raporu gönderip göndermek istemediğini sorar. Sen evet demeden hiçbir şey gönderilmez. Cevabını istediğin zaman Ayarlar > Sistem > Gizlilik'ten değiştirebilirsin ve bu tercih dışa aktarılan profillere asla girmez. Kabul edersen ve uygulama çökerse Firebase Crashlytics şunları alır: hata ve yığın izi, çökme anındaki uygulama durumu, cihaz modeli ve Android sürümü, uygulama sürümü ve bir Crashlytics kurulum kimliği. Yalnızca hataları bulup düzeltmek için kullanılır. Crashlytics çökme verisini 90 gün saklar, Google bu veriyi bizim adımıza Firebase gizlilik şartları (firebase.google.com/support/privacy) çerçevesinde işler.",
    },
    {
      heading: '4. İzinler ve neden istendikleri',
      body: 'Herhangi bir izni Android ayarlarından geri alabilirsin. İlgili kart çalışmaz, launcher\'ın geri kalanı çalışmaya devam eder.',
      head: ['İzin', 'Ne için', 'Cihazdan çıkar mı?'],
      rows: [
        ['Rehber, Telefon (arama)', 'Hızlı arama ve favori kişi kartları, kişi arama', 'Hayır'],
        ['Takvim', 'Yaklaşan etkinlikler kartı', 'Hayır'],
        ['Konum (hassas ve yaklaşık)', 'Hava durumu kartı, Drive Mode haritası ve hız, park yerini hatırlama', 'Yalnızca hava durumu ve harita, bkz. bölüm 2'],
        ['Bluetooth', "OBD adaptörüne bağlanma, aracın Bluetooth'unu algılayıp park yerini kaydetme", 'Hayır'],
        ['Mikrofon', 'Sesli not kartı ve ses görselleştirici', 'Hayır'],
        ['Kamera', 'Kamera ve fener kartları', 'Hayır'],
        ['Fiziksel aktivite', 'Adım sayacı kartı', 'Hayır'],
        ['Bildirim erişimi', 'Bildirim, mesaj ve şu an çalan kartları', 'Hayır'],
        ['Kullanım erişimi, yüklü uygulama listesi', 'Uygulamaları, son uygulamaları ve uygulama çekmecesini göstermek', 'Hayır'],
        ['Erişilebilirlik hizmeti', 'Jestler için yalnızca sistemin Geri ve Son Uygulamalar eylemlerini yapar, ekranını okumaz', 'Hayır'],
        ['Duvar kağıdı, titreşim, paket silme', 'Duvar kağıdı editörü, dokunsal geri bildirim, senin seçtiğin uygulamayı kaldırma', 'Hayır'],
      ],
    },
    {
      heading: '5. Çocuklar',
      body: 'GT-Launcher 13 yaşın altındaki çocuklara yönelik değildir ve onlardan bilerek veri toplamaz.',
    },
    {
      heading: '6. Saklama ve silme',
      body:
        'Kendi sunucularımızda hiçbir kullanıcı verisi tutmayız. Cihazındaki veriler uygulamayı kaldırdığında ya da depolamasını temizlediğinde silinir. Kabul ettiysen çökme raporları Firebase tarafından 90 gün sonra silinir. Başka bir konuda sormak için aşağıdaki adresle iletişime geç.',
    },
    {
      heading: '7. Bu politikadaki değişiklikler',
      body:
        'Veri işleme şeklimiz değişirse bu sayfayı ve yukarıdaki tarihi güncelleriz. Uygulama içindeki çökme raporu sorusu yalnızca toplanan veri değişirse yeniden sorulur.',
    },
  ],
  contactHeading: 'İletişim ve Geliştirici',
  contactBody: 'Geliştirici: Göktuğ Turhan · E-posta: ',
};

const COPY: Record<string, Copy> = { en, tr };

export default async function GTLauncherPrivacyPolicy({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const copy = lang === 'en' ? en : COPY[lang] ?? tr;

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 max-w-4xl mx-auto animate-in fade-in duration-1000">
      <Link
        href={`/${lang}/proje/GT-Launcher`}
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-lcars-cyan transition-colors mb-10 text-xs font-mono tracking-widest uppercase"
      >
        <ArrowLeft className="w-4 h-4" />
        {copy.back}
      </Link>

      <div className="space-y-10">
        <header className="space-y-3">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-lcars-cyan" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter text-foreground">{copy.title}</h1>
          </div>
          <p className="text-muted-foreground font-mono text-xs tracking-widest uppercase">{copy.updated}</p>
        </header>

        <div className="glass p-6 sm:p-10 rounded-3xl border-border space-y-8 text-foreground/80 leading-relaxed bg-card shadow-lg">
          <section className="space-y-4">
            <p className="text-base text-foreground">{copy.intro}</p>
            <div className="bg-lcars-orange/10 border border-lcars-orange/30 rounded-2xl p-5 text-foreground/80 text-sm">
              <strong className="text-foreground">{copy.summaryLabel}</strong> {copy.summary}
            </div>
          </section>

          {copy.sections.map((section) => (
            <section key={section.heading} className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-lcars-orange uppercase tracking-tight flex items-center gap-3">
                <span className="w-1.5 h-6 bg-lcars-orange rounded-full" />
                {section.heading}
              </h2>
              {section.body && <p className="text-sm text-foreground/75">{section.body}</p>}
              {section.head && section.rows && (
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="border-b border-border">
                        {section.head.map((cell) => (
                          <th key={cell} className="text-left py-3 pr-4 text-foreground font-bold">{cell}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="text-foreground/70">
                      {section.rows.map((row) => (
                        <tr key={row[0]} className="border-b border-border/50 align-top">
                          {row.map((cell, index) => (
                            <td key={`${row[0]}-${index}`} className={index === 0 ? 'py-3 pr-4 font-semibold text-foreground' : 'py-3 pr-4'}>{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          ))}

          <section className="space-y-3 pt-4 border-t border-border">
            <h2 className="text-lg font-bold text-foreground uppercase">{copy.contactHeading}</h2>
            <p className="text-sm text-muted-foreground">
              {copy.contactBody}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-lcars-cyan hover:underline">{CONTACT_EMAIL}</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
