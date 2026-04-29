---
image: "/projects/NEXUS.png"
title: NEXUS
category: Hardware & Embedded
status: Early
summary: A unified IoT gateway and edge compute node — connecting industrial sensors, CAN networks, and cloud pipelines through a single hardened device.
techStack: [ESP32-S3, ESP-IDF, FreeRTOS, MQTT, C/C++, Node-RED, InfluxDB, Grafana]
date: 2026-02-01
github: https://github.com/alazndy/NEXUS
---

## Overview

NEXUS is a hardware gateway device designed to bridge industrial and embedded systems with cloud infrastructure. It aggregates data from multiple sensor buses (CAN, I2C, UART, RS-485), processes it at the edge, and forwards structured telemetry to cloud pipelines via MQTT.

## Design Goals

- **Protocol agnostic** — Modular firmware architecture allows plugging in different sensor drivers without touching core logic.
- **Edge processing** — Basic filtering, aggregation, and anomaly detection happen on-device before transmission, reducing cloud egress costs.
- **Hardened** — Designed for automotive and industrial environments: wide supply voltage range, ESD protection, watchdog-backed firmware.

## Firmware Architecture

Built on ESP-IDF with FreeRTOS. Core tasks:

- **Sensor_Poll_Task** — Reads from all configured sensor buses on a configurable interval.
- **Edge_Process_Task** — Applies smoothing filters and threshold checks to raw readings.
- **MQTT_Pub_Task** — Serializes processed data to JSON and publishes to broker topics.
- **OTA_Task** — Handles firmware updates over MQTT with rollback support.

## Cloud Side

Node-RED handles MQTT subscription and routing. Data lands in InfluxDB for time-series storage, with Grafana dashboards for visualization.

## Status

Early stage. Hardware design complete, firmware in active development.
