# alazlab.com Memory

## Son Durum
- Tarih: 2026-04-30
- Aktif agent: Claude

## Claude
### Yaptıkları
- Proje adı portfolio-site → alazlab.com olarak güncellendi
- package.json name güncellendi
- gitrepo.md oluşturuldu
- GitHub reposu oluşturuldu: https://github.com/alazndy/alazlab.com
- Tüm değişiklikler commit edilip push edildi
- entities.json güncellendi
- Vercel production deploy yapıldı (https://alazlab.com canlı)
- CyberBackground, marquee bar, Sidebar animasyonları kaldırıldı — tasarım sadeleştirildi
- 7 proje için markdown içerik dosyaları oluşturuldu (src/content/projects/)
- markdown.ts path'i düzeltildi (Portfolio/ → src/content/projects/)
- CategoryGrid merkezi project-config.ts'e taşındı
- Her proje sayfası için dinamik OG/Twitter metadata eklendi
- sitemap.xml ve robots.txt oluşturuldu
- layout.tsx global SEO metadata güncellendi
- GTab Chrome Web Store linki güncellendi
- lucide-react v1.8 ikon uyumsuzlukları (Chrome, Github) düzeltildi
### Yapacakları
- —
### Notlar
- Klasör adı hâlâ portfolio-site (VS Code kilidi nedeniyle). VS Code kapatılıp Windows Explorer'dan alazlab.com olarak yeniden adlandırılmalı.
- Google OAuth Search Console domain doğrulaması yapılıyor (TXT kaydı Squarespace'e eklendi)
- Vercel domain ayarlarında DNS Change Recommended uyarısı var (216.198.79.1 ve yeni CNAME)

## Gemini
### Yaptıkları
- —
### Yapacakları
- —
### Notlar
- —

## Antigravity
### Yaptıkları
- **Yapılanlar**: 
  - Projenin `alazlab.com` domaini için Vercel deployment hazırlıkları yapıldı.
  - GTab projesi için `/gtab` ve `/gtab/privacy-policy` özel sayfaları oluşturuldu (LCARS temalı).
  - ENV-I, UniControl, Crucix, tek-ui, AI_Trader, ve NEXUS projeleri için `/projects/[slug]` ezilerek tamamen custom, mimariyi ve donanımı anlatan devasa sayfalar yapıldı.
  - `C:\Users\turha\Desktop\Dev Ops\Portfolio\projects_metadata.json` dosyasındaki tüm veri analiz edildi ve otomatik bir Node scripti ile 35 yeni proje `src/content/projects/` klasörüne import edildi. Site artık toplam 42 projeyi sergiliyor.
  - Tüm siteye TR/EN dil desteği ve Light/Dark mod toggle'ları eklendi. SSR mimarisiyle uyumlu çalışacak i18n altyapısı kuruldu. (Önceki oturum)
  - Projelerin içerikleri otomatik zenginleştirildi: DevOps içindeki (`C:\Users\turha\Desktop\Dev Ops\...`) ana klasörler taranıp, içlerinde bulunan gerçek `README.md` veya `memory.md` dosyalarındaki teknik dokümantasyonlar, portföydeki proje detaylarına (markdown) dinamik olarak basıldı. Toplam 9 proje için gerçek DevOps README dosyalarından içerik entegre edildi.
  - 7 adet özel tasarım (custom) proje sayfası, markdown dosyalarındaki `project.content` (okunan README'leri) render edecek şekilde bir Node betiğiyle topluca güncellendi.
- **Yapılacaklar**: 
  - Vercel üzerinde DNS güncellemeleri tamamlandıktan sonra sitenin canlı kontrolleri yapılacak.
  - Gerekirse diğer yeni import edilen projeler için de özel custom sayfalar (custom routes) tasarlanacak.
### Yapacakları
- —
### Notlar
- —

## Plan
### Tamamlananlar
- [x] memory.md oluştur
- [x] /gtab/privacy-policy sayfası
- [x] /gtab sayfası
- [x] Ana sayfada GTab kartı
- [x] Proje adı alazlab.com yapıldı
- [x] GitHub reposu oluşturuldu: https://github.com/alazndy/alazlab.com
- [x] Vercel production deploy (https://alazlab.com)
- [x] Tasarım sadeleştirildi
- [x] 7 proje içeriği yazıldı ve sayfalar oluşturuldu
- [x] SEO: sitemap, robots, metadata, OG tags
- [x] GTab Chrome Web Store linki güncellendi

### Devam Edenler
- [ ] —

### Sıradakiler
- [ ] Klasör adını manuel olarak portfolio-site → alazlab.com yap (VS Code kapalıyken)
- [ ] Vercel'de DNS kayıtlarını güncelle (216.198.79.1 ve yeni CNAME)
- [ ] Google Search Console domain doğrulamasını tamamla
- [ ] Google OAuth consent screen re-verification gönder

## Karar Günlüğü
| Tarih | Agent | Karar | Neden |
|-------|-------|-------|-------|
| 2026-04-29 | Antigravity | memory.md eklendi | Sistem kuralları gereği |
| 2026-04-29 | Claude | Proje adı alazlab.com yapıldı | Kullanıcı isteği |
| 2026-04-29 | Claude | GitHub repo: alazndy/alazlab.com | Yeni proje adıyla eşleşsin |
| 2026-04-29 | Claude | CyberBackground kaldırıldı | Göz yoruyor, performans düşürüyor |
| 2026-04-29 | Claude | markdown.ts path düzeltildi | Vercel'de dışarıdaki Portfolio/ klasörü erişilemez |
| 2026-04-30 | Claude | sitemap/robots/SEO eklendi | Arama motoru indexleme |
| 2026-04-30 | Antigravity | i18n ve Theme eklendi | Çoklu dil ve Aydınlık/Karanlık mod |
| 2026-04-30 | Antigravity | DevOps README.md Enjeksiyonu | Proje sayfalarının içeriğini gerçek verilerle zenginleştirmek için DevOps dizinini tarayıp içeriği markdown dosyalarına enjekte ettik |
