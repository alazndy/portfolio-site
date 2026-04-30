---
image: "/projects/AI_Trader.png"
title: AI Trader
category: AI & Finance
status: Live
summary: An AI-powered algorithmic trading engine that analyzes market signals in real time and executes strategies across multiple asset classes.
techStack: [Python, FastAPI, React 19, TypeScript, TensorFlow, PostgreSQL, Redis, WebSocket, Docker]
date: 2025-11-20
github: https://github.com/alazndy/AI-Trader
---

## Overview

AI Trader is a full-stack algorithmic trading platform. The backend processes live market data streams, runs ML inference for signal detection, and executes trades through broker APIs. The frontend provides a real-time dashboard for monitoring positions, P&L, and strategy performance.

## Architecture

The system is divided into three core services:

- **Data Ingestion Service** — Connects to market data providers via WebSocket, normalizes OHLCV data, and stores it in a time-series optimized PostgreSQL schema.
- **Strategy Engine** — A Python service that runs configurable trading strategies. Each strategy is a sandboxed module with its own risk parameters.
- **Execution Layer** — Handles order routing, position management, and broker API communication. Implements retry logic and circuit breakers for reliability.

## Key Features

- Real-time signal detection using LSTM and transformer models
- Backtesting framework with historical data replay
- Risk management: per-trade stop-loss, drawdown limits, position sizing
- Live P&L dashboard with WebSocket updates
- Multi-broker support via unified adapter pattern

## Status

Running in live trading mode. Performance metrics and strategy configs are private.
