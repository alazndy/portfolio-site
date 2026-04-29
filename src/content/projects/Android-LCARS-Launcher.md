---
image: "/projects/Android-LCARS-Launcher.png"
title: "Android LCARS Launcher"
category: "Diğer"
status: "Active"
summary: "Fully functional, highly customizable Android home screen launcher with Star Trek LCARS aesthetics and OBD-II/OCR integrations."
techStack: ["Kotlin", "Jetpack Compose", "OBD-II BLE", "ML Kit OCR", "Room"]
---

## Overview

Fully functional, highly customizable Android home screen launcher with Star Trek LCARS aesthetics and OBD-II/OCR integrations.

## Proje Detayları (README)



![GT Launcher](store_assets/LOGO.png)

> Android cihazınızı 24. Yüzyıl teknolojisine yükseltin: Star Trek "The Next Generation" estetiğine sadık, "Secure by Design" felsefesiyle geliştirilmiş elit bir ana ekran deneyimi.

[![GitHub](https://img.shields.io/badge/GitHub-GT--Launcher-181717?style=flat-square&logo=github)](https://github.com/alazndy/GT-Launcher)
![Platform](https://img.shields.io/badge/Platform-Android_10%2B-3DDC84?style=flat-square&logo=android)
![Kotlin](https://img.shields.io/badge/Language-Kotlin_1.9-7F52FF?style=flat-square&logo=kotlin)
![Compose](https://img.shields.io/badge/UI-Jetpack_Compose-4285F4?style=flat-square&logo=android)
![Version](https://img.shields.io/badge/Version-2.6.4-blue?style=flat-square)

---

## Özellik Listesi

### 🏎️ Drive Mode — "Interceptor" (V2.2+)

Sürüş deneyiminizi bir yıldız gemisi kokpitine dönüştürün.

- **Landscape Exclusive:** Sürüş için optimize edilmiş yatay arayüz, sürüşe başlayınca otomatik aktif.
- **GPS Telemetry:** Gerçek zamanlı GPS hız göstergesi ve Geocode entegrasyonu ile anlık sokak/yol ismi.
- **FFT Audio Visualizer:** Müziğinizle gerçek zamanlı etkileşime giren neon ses spektrumu (`RECORD_AUDIO`).
- **Interactive Media Panel:** Albüm kapağına dokunarak aktif player'a veya favori müzik uygulamasına hızlı geçiş.
- **Gesture Panel Resize:** Sağ OBD panelini swipe ile boyutlandırma (PointerEventPass.Initial tabanlı, buton çakışması yok).
- **Auto Trigger:** Cihaz landscape konumuna geçince veya araç Bluetooth'una bağlanınca otomatik drive mode açılır.

---

### 📡 OBD-II Telemetry — BLE (V2.3+)

vLinker iCar Pro (ANDROID-VLINK) ve diğer ELM327 **BLE** adaptörlerle tam entegrasyon.

- **Bağlantı Protokolü:** Bluetooth Low Energy GATT — `FFF0` service, `FFF1` notify, `FFF2` write. Classic SPP değil.
- **Canlı Göstergeler:** RPM, Araç Hızı, Soğutma Suyu Sıcaklığı, Turbo Boost (MAP−Baro), Motor Yükü, Gaz Pedalı Pozisyonu.
- **Yakıt Tüketimi:** PID 5E (doğrudan) veya MAF 0110 fallback ile L/h hesabı; anlık L/100km göstergesi.
- **DTC Desteği:** Mode 03 hata kodları okuma (P/C/B/U formatında).
- **Polling Grupları:** Group A 500ms (RPM/Hız/Soğutma), Group B 1s (Yakıt/Boost), Group C 5s (DTC/DPF).
- **Adaptör Ayarı:** Mühendislik Paneli → SÜRÜŞ → OBD CİHAZI sekmesinden cihaz seçimi.

---

### 🗺️ Trip Manager & Maliyet Takibi (V2.3+)

Her sürüşü kayıt altına alır, cebinize ne kadar gittiğini gösterir.

- **Otomatik Seyahat Başlatma:** Araç BT bağlandığında seyahat otomatik başlar, kesilince kapanır.
- **Room DB Persistansı:** Mesafe (km), yakıt tüketimi (L) ve maliyet (TL) her seyahat için ayrı kaydedilir.
- **Canlı Maliyet:** Sürüş sırasında TL bazlı anlık harcama DriveOBDPanel'de görünür.
- **Aylık Rapor:** Mühendislik Paneli → SÜRÜŞ'ten aylık toplam yakıt harcaması özeti.

---

### 🧾 Yakıt Fişi OCR (V2.3+)

Yakıt fiyatını elle girmek zorunda değilsiniz.

- **ML Kit Text Recognition:** CameraX ile gerçek zamanlı fiş tarama.
- **Türkçe Label Desteği:** "TL/L", "Birim Fiyat", "Litre Fiyatı" vb. ifadeleri otomatik algılar.
- **Field Discovery:** Fiyat, miktar ve toplam alanlarını fişin formatından bağımsız olarak çıkarır.
- **Otomatik Güncelleme:** Okunan litre fiyatı maliyet hesaplamasına anında yansır.

---

### 🧩 Dynamic App Drawer — "Odyssey" (V2.4+)

Uygulama organizasyonu artık tamamen sizin kontrolünüzde.

- **Dinamik Departmanlar:** Sabit kategoriler yok. Mühendislik Paneli → UYGULAMALAR'dan kendi tablarınızı oluşturun, silin, yeniden adlandırın.
- **Keyword Autosort:** Paket adındaki anahtar kelimelere göre (örn. "telegram" → COMM, "game" → GAMING) otomatik sınıflandırma.
- **Manuel Override:** İstediğiniz uygulamayı istediğiniz departmana atayabilirsiniz.
- **GSON Persistence:** Özelleştirilmiş departman listesi `UserPreferences` üzerinden asenkron olarak saklanır.
- **Otomatik Odak:** Uygulama çekmecesi açılır açılmaz arama çubuğu odaklanır, klavye açılır.
- **Son Kullanılanlar & Son Yüklenenler:** Drawer açılışında en üstte yatay scroll ile hızlı erişim bölümü.
- **Hide from Drawer:** Kaldırmak istemediğiniz ama görmek istemediğiniz uygulamaları drawer'dan gizleyin.
- **Uygulama Kaldırma:** Drawer içinden doğrudan uninstall — sistem diyaloğu açılır, onaylayınca liste otomatik güncellenir.

---

### 🖖 Sidebar Özelleştirme (V2.3+)

- **Asimetrik Köşe:** İç (sağ) ve dış (sol) köşe yuvarlaklığını bağımsız sliderlar ile ayarlayın.
- **Gesture Desteği:** Her sidebar butonuna Swipe Up / Swipe Down aksiyonu atayın.
- **Özel Logo:** Galeri'den seçilen görsel sidebar logosu olarak ayarlanabilir.
- **Dinamik Widget Yönetimi:** Core widget'lar (Settings, Apps, Files, Search, Payment, Nav) tekil aç/kapat.
- **Sistem Kontrolleri:** Back, Home, Recents dinamik widget olarak sidebar'a eklenebilir (`LcarsAccessibilityService` tabanlı).

---

### 🛰️ Nav Share & Park Asistanı (V2.3+)

- **Nav Share:** Google Maps'ten paylaşılan kısa linkler veya konum bilgileri otomatik çözülür, koordinat bazlı Nav paneline kaydedilir.
- **Park Asistanı:** Araç BT bağlantısı kesildiğinde GPS koordinatları otomatik kaydedilir ve harita rotaları listesine eklenir.
- **Kayıtlı Rotalar:** Mühendislik Paneli → SÜRÜŞ'ten manuel rota ekleme/silme.

---

### ⚙️ Engineering Panel (V2.4+)

Tüm launcher ayarları tek panel altında gruplu, profesyonel layout ile.

| Sekme | İçerik |
| --- | --- |
| GÖRÜNÜM | Tema rengi, ikon paketi, header metni, köşe yuvarlaklığı, AMOLED |
| SİSTEM | Widget yönetimi, grid span, status bar görünümü |
| UYGULAMALAR | Departman yönetimi, autosort anahtar kelimeleri, gizli uygulamalar |
| SÜRÜŞ | OBD cihazı, Park asistanı, Drive Mode tetikleyicileri, OCR ve yakıt geçmişi |
| HAKKINDA | İzin yönetimi, erişilebilirlik servisi, uygulama bilgisi |

---

### 📐 Pro Grid Engine (V2.1+)

- **1x1'den 6x40'a:** Her kartı integer tabanlı gridSpanX/Y ile grid hücrelerine tam snap yapacak şekilde ölçeklendirin.
- **Dynamic Branding:** Header metinlerini ("HERMES", "ENTERPRISE" vb.) ayarlar üzerinden kişiselleştirin.
- **Adaptive Theme Engine:** Pil %20 altı → RED ALERT, şarj → GOLD, yağmurlu hava → BLUE, saatlik otomatik tema.

---

### 📟 Omni-Terminal (V2.0+)

- **Fuzzy Search:** Türkçe karakter toleransıyla yüzlerce uygulamayı anında bulur.
- **Smart Modules:** Matematik, Rehber, Takvim, Spotify kontrolü — hepsi terminalden.
- **Web Actions:** Google, Harita, Play Store'da arama — aynı arayüzden.

---

### 🎨 LCARS Estetik

- **AMOLED Optimizasyonu:** Saf siyah arka planlar.
- **12+ Tema:** ORANGE, BLUE, RED, GOLD, GREEN, PURPLE ve premium Portal (Aperture Science).
- **İkon Paketi Desteği:** Play Store'daki tüm ikon paketleri uyumlu.

---

## Sürüm Notları (Changelog)

### v2.6.4 - Communications & OmniSearch Update
- **Doğrudan Arama (Direct Calling):** OmniSearch ve 'DIAL' kartı üzerinden gerçekleştirilen aramalarda, kişiler için varsayılan yöntem `ACTION_DIAL` (numara çevirici) yerine `ACTION_CALL` ile tamamen otomatik direkt aramaya yükseltildi. Güvenlik izinleri (SecurityException) nedeniyle başarısız olan durumlar için numara çevirici fallback sistemi eklendi.
- **Tıklanabilir İletişim Kartları:** `ContactResultCard` yapısındaki arama panelleri, yalnızca küçük alt butonlardan ibaret olmayacak şekilde tam yatay tıklanabilir yapıldı.
- **Derleme Çözümleri:** Kapt dosya kilitlemeleri giderilerek build stabilitesi artırıldı. Clean architecture deployment yöntemleri uygulandı. 
- **Codebase Clean-Up:** Log kayıtları ve gereksiz ithalat paketleri temizlenerek kod satırları hafifletildi.
- **App List Cleanup Bug Fix:** Uygulama çekmecesinde çökme yapan `fetchApps` paketi eşdeğer `packageName`'lerle ilgili kopya hatalarından arındırıldı (`distinctBy`).

---

## Teknik Altyapı

| Katman | Teknoloji |
| --- | --- |
| UI | Jetpack Compose (Material 3) |
| OBD Transport | Bluetooth LE GATT (ELM327 BLE, FFF0/FFF1/FFF2) |
| OCR | ML Kit Text Recognition + CameraX |
| Veritabanı | Room (Trip, FuelFillup) |
| Tercihler | SharedPreferences + GSON |
| Konum | FusedLocationProvider + Geocoder |
| Medya | NotificationListenerService + MediaSession |
| Sensörler | Accelerometer (Drive Mode tetikleyici) |
| Erişilebilirlik | AccessibilityService (Back/Recents) |
| Mimari | Single-Activity, StateFlow reaktif UI |

---

## Kurulum & Derleme

### Gereksinimler

- Android Studio Iguana+
- JDK 17+
- Android 10+ cihaz veya emülatör (minSdk 29)

### Derleme

```bash
./gradlew assembleDebug

# Cihaza yükleme:
./gradlew installDebug

# Release bundle (Play Store):
./gradlew bundleRelease
```

### OBD Kurulum Adımları

1. vLinker iCar Pro adaptörünü araç OBD portuna takın.
2. Android Bluetooth ayarlarında `ANDROID-VLINK` cihazını eşleştirin (pin: **1234**).
3. Launcher → Mühendislik Paneli → **SÜRÜŞ** → **OBD BLUETOOTH CİHAZI** → `ANDROID-VLINK` seçin.
4. Drive Mode'u açın — adaptör ~5 saniyede (ATZ reset) bağlanır, veri gelmeye başlar.

> [!NOTE]
> Medya kontrolleri ve visualizer için **Bildirim Erişimi** iznini vermeyi unutmayın.
> OBD verisi için **BLUETOOTH_CONNECT** ve **BLUETOOTH_SCAN** izinleri gereklidir (Android 12+).
> Back/Recents butonları için **Erişilebilirlik Servisi** etkinleştirilmelidir (Mühendislik Paneli → HAKKINDA).

---

"Space, the final frontier..." — Make it so! 🖖



*This project was dynamically imported and enriched from the master portfolio database.*
