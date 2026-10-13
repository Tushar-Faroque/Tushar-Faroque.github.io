---
layout: page
title: Home lab and NAS
description: Self-hosted n8n on a home NAS, reachable anywhere over Tailscale
importance: 1
category: personal
---

I moved my personal n8n instance off a laptop and onto a UGREEN NAS so workflows keep running when the laptop is closed.

## Setup

- n8n runs in Docker through Compose on the NAS.
- Tailscale runs in its own container, and n8n shares its network namespace, so n8n can reach any device on my tailnet.
- Fixing the Tailscale container to use a real network interface rather than silently falling back to userspace networking made the connection reliable.
- Going over Tailscale gave noticeably lower latency than the vendor's relay service.

## Why

It is the test bench for ideas like the [selector discovery pipeline](/projects/7_selector_discovery/), which runs n8n at home and a browser service on my laptop.

## Stack

Docker, Tailscale, n8n.
