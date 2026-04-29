---
title: "AG Manager"
category: "Diğer"
status: "Active"
summary: "High-performance desktop hub for managing multiple AI accounts (Gemini, Claude, etc.) from a single interface using gRPC."
techStack: ["Electron", "NestJS", "gRPC", "React 19", "Drizzle ORM", "SQLite"]
---

## Overview

High-performance desktop hub for managing multiple AI accounts (Gemini, Claude, etc.) from a single interface using gRPC.

## Proje Detayları (README)



Birden fazla Gemini ve Claude AI hesabını tek bir masaüstü arayüzünden yönetmek için geliştirilmiş üretkenlik uygulaması.

---

## Özellikler

- **Çoklu hesap yönetimi** — Gemini ve Claude AI hesapları arasında kolayca geçiş yapma
- **Dahili NestJS/gRPC arka uç** — Uygulama içi servis katmanı, hızlı ve tip güvenli IPC
- **@orpc ile tip güvenli API katmanı** — İstemci-sunucu arası tip paylaşımı
- **Drizzle ORM + SQLite** — Yerel veri kalıcılığı, oturum ve hesap bilgilerinin saklanması
- **Radix UI bileşen seti** — Erişilebilir ve özelleştirilebilir arayüz öğeleri
- **TanStack Router + Query** — Güçlü istemci tarafı yönlendirme ve önbellek yönetimi
- **Keytar entegrasyonu** — İşletim sistemi güvenli depolama ile API anahtarı yönetimi
- **i18n desteği** — react-i18next ile çoklu dil desteği
- **Sentry hata izleme** — Electron süreçlerinde hata takibi
- **Otomatik CI/CD** — GitHub Actions + semantic-release ile sürüm yönetimi ve dağıtım
- **Kapsamlı test altyapısı** — Vitest (birim) + Playwright (uçtan uca) testleri

## Teknoloji Yığını

| Katman | Teknoloji |
|---|---|
| Masaüstü kabuğu | Electron + electron-forge |
| Ön yüz | React 19, TypeScript, Vite |
| Stil | Tailwind CSS v4, Radix UI |
| Arka uç (süreç içi) | NestJS, Fastify, gRPC, @orpc |
| Veritabanı | better-sqlite3, Drizzle ORM |
| Durum / Veri | TanStack Query, TanStack Router |
| Test | Vitest, Playwright, Testing Library |
| CI/CD | GitHub Actions, semantic-release |

## Kurulum ve Geliştirme

Gereksinimler: **Node.js 20+**, **pnpm**

```bash
# Bağımlılıkları kur
pnpm install

# Geliştirme modunda başlat (Electron + Vite hot-reload)
pnpm start

# Uygulama paketini oluştur
pnpm make

# Birim testleri çalıştır
pnpm test

# Uçtan uca testler çalıştır
pnpm test:e2e

# TypeScript tip denetimi
pnpm type-check
```

## Derleme ve Yayınlama

```bash
# Mevcut platform için çıktı paketi üret
pnpm package

# Dağıtım için yükleyici oluştur (Squirrel/WiX/DMG/deb)
pnpm make

# GitHub'a yayınla (CI/CD akışı)
pnpm publish
```

Sürüm yönetimi `semantic-release` ile otomatik olarak yürütülür. Her ana dala birleşen commit, `CHANGELOG.md` güncellemesi ve GitHub Release oluşturma dahil yeni bir sürüm tetikler.

## Versiyon

**v0.10.0** — Lisans: CC-BY-NC-SA-4.0



*This project was dynamically imported and enriched from the master portfolio database.*
