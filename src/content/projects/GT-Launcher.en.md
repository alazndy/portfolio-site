---
image: "/projects/GT-Launcher.png"
title: "GT-Launcher"
category: "Diğer"
area: "lab"
status: "Active"
download: "https://play.google.com/store/apps/details?id=com.alazndy.gtlauncher"
downloads:
  - title: "Google Play Store"
    href: "https://play.google.com/store/apps/details?id=com.alazndy.gtlauncher"
    description: "Install directly from Google Play Store with automated updates."
    format: "Play Store"
gallery:
  - src: "/projects/GT-Launcher/home.jpg"
    alt: "GT-Launcher retro-fütüristik ana ekranı"
    caption: "Ana Ekran — Modüler LCARS kartları, finans, medya ve telemetri widget'ları."
  - src: "/projects/GT-Launcher/card-builder-5-tabs.gif"
    alt: "5 Sekmeli Card Builder canlı üretici akışı"
    caption: "Card Builder — İşlev, davranış, görünüm, boyut ve görsel katman sihirbazı."
  - src: "/projects/GT-Launcher/visual-style-switch.gif"
    alt: "6 Görsel stil arasında geçiş"
    caption: "Görsel Stiller — Flat, Glass, Neobrutalism, Claymorphism, Minimal ve Neon."
  - src: "/projects/GT-Launcher/wallpaper-background-photo.gif"
    alt: "Ana ekran duvar kağıdı seçimi ve canlı kırpma"
    caption: "Duvar Kağıdı — Canlı pinch-to-crop ve GPU tabanlı UV dilimleme."
  - src: "/projects/GT-Launcher/drive-mode-hud.gif"
    alt: "Drive Mode Interceptor kokpit HUD"
    caption: "Drive Mode — OBD-II telemetri, GPS hız göstergesi ve harita HUD kokpiti."
  - src: "/projects/GT-Launcher/search-mixed-results.gif"
    alt: "Omni-Terminal karma arama motoru"
    caption: "OmniSearch — Web, Play Store, uygulamalar ve sistem ayarları tek komuta kutusunda."
version: "v4.18.1"
summary: "A fully modular Android home screen with a Star Trek-inspired aesthetic: a capability-based card builder, an OmniSearch command deck, the Slide List app drawer, and an OBD-II-powered Drive Mode."
techStack: ["Kotlin", "Jetpack Compose", "Room", "OBD-II BLE", "ML Kit OCR", "Gson", "Material3"]
---

## Overview

GT-Launcher is an open-source Android home screen application built entirely with Kotlin and Jetpack Compose. It reimagines the Star Trek LCARS design philosophy into an ergonomic, ultra-fast mobile productivity workspace.

### Core Architecture

- **UI Framework:** 100% Jetpack Compose with reactive state management
- **Card System (UCCS):** Every card is built from composable capabilities rather than a fixed type, with conflict protection between incompatible modules in the editor
- **Theme Engine:** 6 visual styles (Flat, Glass, Neobrutalism, Claymorphism, Minimalism, Neon), 12 LCARS palettes, and live theme automation by clock/battery/weather
- **OmniSearch:** Web, Play Store, installed apps, contacts, and system settings, all running concurrently from one command bar
- **Drive Mode:** OBD-II BLE live telemetry, GPS speedometer, audio spectrum, and OCR fuel-receipt scanning in a landscape cockpit HUD

### Performance Benchmarks

- **Cold Startup:** < 180 ms on modern Android 14+ devices
- **Memory Footprint:** < 45 MB resident memory in background idle
- **Frame Rate:** Consistent 120 FPS scrolling across app drawers and widget grids

---

## Recent Updates (v4.15 → v4.18.1)

- **Gesture Input & Combo Link:** turn a shape drawn on a card (circle, triangle, checkmark, four arrows) into an action via a from-scratch $1 Unistroke recognizer, or hold one card and swipe a second, linked card to fire a bound action.
- **Tasker & MacroDroid, Both Directions:** trigger a Tasker task or MacroDroid macro from a card or gesture — or drive GT-Launcher itself from an external automation (load a preset, toggle Drive Mode/sidebar, launch a specific app).
- **Redesigned Edit Mode:** tap a card or sidebar button to select it, then use a floating dock for move/resize/rotate/settings/delete. Sidebar buttons now sit on a real free-cell grid with overlap protection.
- **Declarative Settings Engine:** all 10 settings tabs were rebuilt on one typed catalog; search now reaches 55+ individual destinations instead of just section names, and Style Studio moved into Settings with a live preview of the real home screen underneath every slider.
- **New Cards:** Calculator, Water Intake, Focus Timer, Voice Memo, Quick Toggles (Wi-Fi/Bluetooth/DND), and Favorite Contacts.
- **Instant Battery Status:** battery percentage now updates the moment it changes via a system broadcast, replacing the old 5-second polling loop.
- **Per-Card Visual Style Override:** any card can now break from the global visual style independently.
