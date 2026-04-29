---
title: Crucix
category: Security
status: Active
summary: A modular security operations platform for threat detection, log aggregation, and incident response — built for small to mid-size infrastructure teams.
techStack: [Go, React 19, TypeScript, PostgreSQL, ClickHouse, Kafka, Docker, Kubernetes]
date: 2025-09-05
github: https://github.com/alazndy/Crucix
---

## Overview

Crucix is a self-hosted security operations platform. It ingests logs and events from multiple sources, correlates them using rule-based and ML-assisted detection, and surfaces actionable alerts to security teams. The goal: give smaller teams the capabilities of enterprise SIEM tools without the enterprise price tag.

## Core Modules

### Ingestion Pipeline
Kafka-based event bus handles high-throughput log ingestion from syslog, HTTP endpoints, and cloud provider APIs. Events are normalized into a common schema and stored in ClickHouse for fast analytical queries.

### Detection Engine
Rules are defined in a custom DSL that supports temporal patterns (e.g., "5 failed logins within 60 seconds from the same IP"). A secondary ML layer flags anomalous sequences that don't match known signatures.

### Incident Management
Alerts are grouped into incidents. Each incident has a timeline, affected assets, and a suggested remediation checklist. Integrates with Slack and PagerDuty for notifications.

## Key Features

- Sub-second alert latency on rule-based detections
- Retention policies with automatic data tiering
- Role-based access control with audit logging
- REST API for external integrations
- Dark-mode web UI built with React 19

## Status

Active development. Core detection and ingestion modules are production-ready.
