---
image: "/projects/InfAssist/en/01-inbox.png"
title: "InfAssist"
category: "Mobil & Oyun"
area: "lab"
status: "Early"
date: "2026-10-01"
github: "https://github.com/gturhan71/infassist"
live: "https://alazlab.com/infassist"
gallery:
  - src: "/projects/InfAssist/en/01-inbox.png"
    alt: "InfAssist sample inbox"
    caption: "Review fictional sample messages and sort them by intent."
  - src: "/projects/InfAssist/en/02-reply-draft.png"
    alt: "InfAssist reply draft"
    caption: "Prepare a reply; you remain in control of sending it from your account."
  - src: "/projects/InfAssist/en/03-deals.png"
    alt: "InfAssist brand-deal board"
    caption: "Track brand offers and deliverable steps on your device."
  - src: "/projects/InfAssist/en/04-bookings.png"
    alt: "InfAssist booking planner"
    caption: "Organize bookings and export them to your calendar."
  - src: "/projects/InfAssist/en/05-assistant.png"
    alt: "InfAssist Pro assistant"
    caption: "An in-app assistant is among the optional Pro features."
  - src: "/projects/InfAssist/en/06-links.png"
    alt: "InfAssist link bundles"
    caption: "Bundle links you may want to include in replies."
  - src: "/projects/InfAssist/en/07-persona.png"
    alt: "InfAssist reply persona settings"
    caption: "Manage personas used by reply templates."
version: "Android test build 1.0.2"
summary: "A device-first Capacitor app that organizes sample inbox messages, reply drafts, brand deals, bookings and link bundles for social-media creators."
techStack: ["Capacitor 8", "JavaScript", "SQLite", "Google Play Billing"]
---

## A personal business assistant for creators

InfAssist helps creators sort sample messages by intent, prepare replies, and organize brand deals, bookings and link bundles. App data stays in an on-device SQLite database; the app has no server of its own.

### Features

- A unified inbox for fictional Instagram DM, comment and e-mail examples
- Brand offer, deliverable and payment tracking
- Booking management and `.ics` calendar export
- Reply templates, local notification rules and reusable link bundles
- Optional Pro features and AI drafts when users provide their own OpenAI API key
- Android monthly and yearly Pro plan support through Google Play Billing

### Important limitations

The app does not connect to real Instagram, e-mail, TikTok or WhatsApp accounts and does not import real messages. The inbox uses sample data; users hand off replies to their mail app or Instagram and send them themselves. Sample profiles and messages are fictional.

Android `1.0.2` is being prepared for closed testing; there is no public Google Play listing yet. Purchase testing can begin after Play subscription products and license testers are configured. iOS subscriptions remain disabled until the later StoreKit implementation.

### Privacy

- [Gizlilik Politikası (Türkçe)](https://alazlab.com/tr/infassist/privacy-policy)
- [Privacy Policy in English](https://alazlab.com/en/infassist/privacy-policy)
- [View the source code on GitHub](https://github.com/gturhan71/infassist)
