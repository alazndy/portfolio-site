---
image: "/projects/InfAssist/tr/01-inbox.png"
title: "InfAssist"
category: "Mobil & Oyun"
area: "lab"
status: "Early"
date: "2026-10-01"
github: "https://github.com/gturhan71/infassist"
gallery:
  - src: "/projects/InfAssist/tr/01-inbox.png"
    alt: "InfAssist örnek gelen kutusu"
    caption: "Kurgusal örnek mesajları tek yerde inceleyip niyetlerine göre ayır."
  - src: "/projects/InfAssist/tr/02-reply-draft.png"
    alt: "InfAssist yanıt taslağı"
    caption: "Yanıt metnini hazırla; gerçek hesabına gönderimi sen yap."
  - src: "/projects/InfAssist/tr/03-deals.png"
    alt: "InfAssist marka anlaşmaları panosu"
    caption: "Marka tekliflerini ve teslimat adımlarını cihazında takip et."
  - src: "/projects/InfAssist/tr/04-bookings.png"
    alt: "InfAssist randevu planlama ekranı"
    caption: "Randevuları düzenle ve takvimine aktar."
  - src: "/projects/InfAssist/tr/05-assistant.png"
    alt: "InfAssist Pro asistan ekranı"
    caption: "İsteğe bağlı Pro özellikleri arasında uygulama içi asistan bulunur."
  - src: "/projects/InfAssist/tr/06-links.png"
    alt: "InfAssist bağlantı paketleri ekranı"
    caption: "Yanıtlarında kullanacağın bağlantıları paketle."
  - src: "/projects/InfAssist/tr/07-persona.png"
    alt: "InfAssist yanıt kişiliği ayarları"
    caption: "Yanıt şablonları için persona ayarlarını yönet."
version: "Android test build 1.0.2"
summary: "İçerik üreticileri için cihaz içi gelen kutusu örnekleri, yanıt taslakları, marka anlaşmaları, randevular ve bağlantı paketlerini tek yerde düzenleyen Capacitor mobil uygulaması."
techStack: ["Capacitor 8", "JavaScript", "SQLite", "Google Play Billing"]
---

## İçerik üreticileri için kişisel iş asistanı

InfAssist; mesaj örneklerini niyetlerine göre ayırmaya, yanıt taslakları hazırlamaya ve marka anlaşmaları, randevular ile bağlantı paketlerini düzenlemeye yarayan bir iOS/Android uygulamasıdır. Veriler cihazdaki SQLite veritabanında tutulur; uygulamanın kendi sunucusu yoktur.

### Özellikler

- Kurgusal Instagram DM, yorum ve e-posta örneklerini tek gelen kutusunda görüntüleme
- Marka tekliflerini, teslimatları ve ödemeleri takip etme
- Randevu planlama ve takvime `.ics` aktarma
- Yanıt şablonları, yerel bildirim kuralları ve bağlantı paketleri
- İsteğe bağlı Pro özellikleri ve kullanıcı kendi OpenAI anahtarını eklediğinde AI taslakları
- Android'de Google Play Billing üzerinden aylık ve yıllık Pro planı altyapısı

### Önemli sınırlar

Uygulama gerçek Instagram, e-posta, TikTok veya WhatsApp hesaplarına bağlanmaz ve gerçek mesajları içeri almaz. Gelen kutusu örnek verilerle çalışır; yanıtı posta uygulamasına veya Instagram'a aktarıp göndermek kullanıcıya kalır. Örnek profiller ve mesajlar kurgusaldır.

Android sürümü `1.0.2` kapalı test hazırlığındadır; henüz herkese açık Google Play listesi yoktur. Play abonelik ürünleri ve lisans testçileri tanımlandığında satın alma akışı test edilebilir. iOS abonelikleri StoreKit entegrasyonu sonraki aşamaya kadar kapalıdır.

### Gizlilik

- [Türkçe Gizlilik Politikası](https://alazlab.com/tr/infassist/privacy-policy)
- [Privacy Policy in English](https://alazlab.com/en/infassist/privacy-policy)
- [Kaynak kodu GitHub'da görüntüle](https://github.com/gturhan71/infassist)
