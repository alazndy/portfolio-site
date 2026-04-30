---
image: "/projects/Radar-Firmware.png"
title: "Radar Firmware"
category: "AI & Veri"
status: "Pending"
summary: "Low-level signal processing and CANBus integration firmware for 77GHz radar systems. Handles raw sensor data and communication protocols."
techStack: ["C++", "Arduino"]
---

## Overview

Low-level signal processing and CANBus integration firmware for 77GHz radar systems. Handles raw sensor data and communication protocols.

## Proje Detayları (README)



Araç radar sistemleri için gömülü yazılım ve görselleştirme araçları koleksiyonu.

## Hakkında

Bu proje, UniControl Pro donanımı üzerinde çalışan araç radar sistemleri için geliştirilmiş firmware ve görselleştirme araçlarını içermektedir. Nextion HMI ekran entegrasyonu ve Python tabanlı PC render scriptleri dahil, farklı görüntüleme yöntemlerini kullanan birden fazla iterasyonu kapsar.

## İçerik

| Klasör / Dosya | Açıklama |
|---|---|
| `radar screen/` | Python render scriptleri + Nextion HMI arayüzü |
| `radar7/` | Radar sensör görüntüleme firmware'i (7. iterasyon) |
| `radarv3/` | Radar firmware v3 (`radar4.ino`, `radarv3.ino`) |
| `CAN_receive_3_EN/` | CAN bus veri alma ve çözümleme firmware'i |

## Özellikler

- Araç radar sensöründen mesafe ve açı ölçümü
- Nextion HMI dokunmatik ekranda gerçek zamanlı görüntüleme
- CAN bus üzerinden radar verisi alma (TWAI sürücüsü)
- Python tabanlı PC görselleştirme ve debug araçları
- Farklı donanım revizyonlarını destekleyen iteratif geliştirme yapısı

## Teknoloji Yığını

- **Firmware Dili:** C++ (Arduino framework)
- **Platform:** ESP32-S3 (UniControl Pro)
- **İletişim:** CAN bus (TWAI), UART
- **Ekran:** Nextion HMI
- **Görselleştirme:** Python 3
- **Geliştirme Ortamı:** Arduino IDE / PlatformIO

## Kurulum ve Derleme

### Firmware (Arduino IDE / PlatformIO)

1. Arduino IDE veya PlatformIO kurun.
2. ESP32 board desteğini ekleyin.
3. Hedef sketch klasörünü açın (örn. `radar7/`).
4. Board olarak **ESP32-S3** seçin, port ve hız ayarlarını yapın.
5. Derleyip cihaza yükleyin.

> Önerilen iterasyon: `radar7/` en güncel kararlı sürümdür. Eski sürümler (`radarv3/`) referans amaçlı korunmaktadır.

### Python Görselleştirme

```bash
cd "radar screen"
pip install -r requirements.txt
python main.py
```

Python 3.8 veya üzeri gereklidir.

### CAN Bus Firmware

`CAN_receive_3_EN/` klasöründeki sketch, CAN bus üzerinden gelen radar verilerini çözümler ve seri port üzerinden iletir. UniControl Pro CAN transceiver devresine bağlı ESP32-S3 ile kullanılır.

## Versiyon Geçmişi

| Versiyon | Dosya | Durum |
|---|---|---|
| v3 | `radarv3/radarv3.ino` | Arşiv |
| v4 | `radarv3/radar4.ino` | Arşiv |
| v7 | `radar7/` | Aktif / Güncel |

## İlgili Projeler

- **UniControl Pro v5.1** — Hedef donanım platformu
- **Arduino Firmware Sketches** — Genel ESP32-S3 sketch koleksiyonu
- **UCC APP** — UniControl için endüstriyel HMI mobil arayüzü



*This project was dynamically imported and enriched from the master portfolio database.*
