---
layout: page
title: Home lab and NAS
description: Self-hosted n8n on a home NAS, reachable anywhere over Tailscale
importance: 1
icon: fa-solid fa-server
category: personal
---

I moved my personal n8n instance off a laptop and onto a UGREEN NAS so workflows keep running when the laptop is closed.

## Setup

- n8n runs in Docker through Compose on the NAS.
- Tailscale runs in its own container, and n8n shares its network namespace, so n8n can reach any device on my tailnet.
- Fixing the Tailscale container to use a real network interface rather than silently falling back to userspace networking made the connection reliable.
- Going over Tailscale gave noticeably lower latency than the vendor's relay service.

## Why

It is my test bench for side projects and experiments with n8n and local services.

## Stack

Docker, Tailscale, n8n.
