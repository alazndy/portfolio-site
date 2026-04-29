---
title: "ADC Web Sitesi"
category: "Tasarım & Geliştirici Araçları"
status: "Active"
summary: "High-performance corporate platform with automated data management for industrial safety systems. Features an AI-enhanced product catalog."
techStack: ["React 19", "TypeScript", "Tailwind CSS v4", "Express", "SQLite", "Google GenAI"]
---

## Overview

High-performance corporate platform with automated data management for industrial safety systems. Features an AI-enhanced product catalog.

## Proje Detayları (README)



ADC şirketi için geliştirilmiş, AI entegrasyonlu kurumsal web sitesi ve ürün kataloğu; Express arka ucu ve SQLite veritabanı ile tam yığın uygulama.

---

## Özellikler

- **Ürün kataloğu** — SQLite veritabanında tutulan ürün listesi, CSV içe aktarma ve dinamik güncelleme desteği
- **AI entegrasyonu** — Google Genai (Gemini) ile akıllı içerik ve soru-cevap özelliği
- **Akıcı animasyonlar** — anime.js v4 ile sayfa geçişleri ve etkileşimli görsel efektler
- **Express arka ucu** — Ürün verisi, katalog yönetimi ve API endpoint'leri
- **Duyarlı tasarım** — Radix UI bileşenleri ve Tailwind CSS ile mobil uyumlu arayüz
- **TypeScript desteği** — Ön yüz ve sunucu tarafında tip güvenliği
- **Ortam değişkeni yönetimi** — dotenv ile API anahtarları ve yapılandırma

## Teknoloji Yığını

| Katman | Teknoloji |
|---|---|
| Ön yüz | React 19, TypeScript, Vite |
| Stil | Tailwind CSS v4, Radix UI |
| Animasyon | anime.js v4, Motion |
| AI | @google/genai (Gemini) |
| Arka uç | Express, better-sqlite3 |
| Yönlendirme | react-router-dom v7 |
| Yardımcılar | clsx, tailwind-merge, lucide-react |

## Proje Yapısı

```
adc-web-sitesi-/
├── src/                    # React ön yüz kaynak kodu
├── dist/                   # Derlenmiş ön yüz çıktısı
├── parser.js               # Katalog veri ayrıştırıcısı
├── updateCatalog.js        # Ürün kataloğu güncelleme betiği
├── metadata.json           # Site meta verisi
├── package.json
└── vite.config.ts
```

## Kurulum

Gereksinimler: **Node.js 20+**, **pnpm**

```bash
# Bağımlılıkları kur
pnpm install

# .env.example dosyasını kopyala ve API anahtarlarını gir
cp .env.example .env
```

## Geliştirme

```bash
# Ön yüzü geliştirme modunda başlat (port 3000)
pnpm dev

# TypeScript tip denetimi
pnpm lint
```

## Derleme ve Sunucu

```bash
# Ön yüzü derle
pnpm build

# Express arka ucunu başlat
node server.js

# Ürün kataloğunu güncelle
node updateCatalog.js
```

## Ortam Değişkenleri

`.env.example` dosyasına bakarak gerekli değişkenleri ayarla. Minimum gereksinim: Google Genai API anahtarı.



*This project was dynamically imported and enriched from the master portfolio database.*
