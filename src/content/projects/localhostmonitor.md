---
image: "/projects/localhostmonitor.png"
title: "localhostmonitor"
category: "UI Altyapısı"
status: "Active"
summary: "High-performance desktop utility for monitoring local services and system resources with minimal overhead. Features a glassmorphic UI."
techStack: ["Tauri", "Rust", "React 19", "Framer Motion"]
---

## Overview

High-performance desktop utility for monitoring local services and system resources with minimal overhead. Features a glassmorphic UI.

## Proje Detayları (README)



Rust tabanlı Tauri ile güçlendirilmiş, düşük kaynak tüketimli masaüstü sistem izleme uygulaması.

## Proje Hakkında

localhostmonitor, CPU, RAM, disk ve ağ gibi sistem kaynaklarını gerçek zamanlı olarak izlemek için geliştirilmiş hafif bir masaüstü uygulamasıdır. Electron'dan farklı olarak Tauri'nin Rust tabanlı mimarisi sayesinde çok daha düşük bellek ve disk alanı kullanır. React 19 frontend'i Framer Motion animasyonları ve Tailwind tabanlı modern bir arayüzle sistem verilerini görsel olarak sunar.

---

## Özellikler

- **Gerçek Zamanlı Sistem Metrikleri** — CPU, RAM, disk ve ağ kullanımını anlık olarak takip et
- **Rust Backend (Tauri)** — Sistem kaynaklarına doğrudan erişim; Electron'a kıyasla belirgin şekilde düşük RAM ve disk kullanımı
- **Animasyonlu Arayüz** — Framer Motion ile akıcı geçişler ve veri görselleştirme
- **Modern Tasarım Sistemi** — Tailwind CSS + lucide-react ile temiz ve sezgisel UI
- **TypeScript** — Tip güvenli frontend kodu

---

## Teknoloji Yığını

### Frontend
- React 19 + TypeScript + Vite
- Framer Motion (animasyonlar)
- Tailwind CSS
- lucide-react (ikonlar)

### Backend / Masaüstü Kabuk
- Tauri (@tauri-apps/api + @tauri-apps/cli)
- Rust (sistem erişim katmanı)

---

## Kurulum ve Çalıştırma

### Gereksinimler

- Node.js 18+
- pnpm
- Rust toolchain (`rustup` ile kurulur)
- Tauri sistem bağımlılıkları (platform başına değişir — [Tauri Prerequisites](https://tauri.app/v1/guides/getting-started/prerequisites))

### Rust Kurulumu

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

### Paket Kurulumu

```bash
pnpm install
```

### Geliştirme (Hot Reload)

```bash
pnpm tauri dev
```

### Üretim Derlemesi

```bash
pnpm tauri build
```

Derlenen uygulama `src-tauri/target/release/bundle/` dizininde platforma özgü yükleyici olarak çıktı verir.

---

## Electron ile Karşılaştırma

| Özellik | localhostmonitor (Tauri) | Electron |
|---|---|---|
| Kurulum boyutu | ~5–10 MB | ~80–150 MB |
| RAM kullanımı | ~30–60 MB | ~150–300 MB |
| Backend dili | Rust | Node.js |
| Sistem API erişimi | Doğrudan (Rust) | IPC üzerinden |



*This project was dynamically imported and enriched from the master portfolio database.*
