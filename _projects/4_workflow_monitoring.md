---
layout: page
title: Workflow monitoring
description: Execution tracking, a live dashboard and stall alerts for 80+ n8n workflows
importance: 4
icon: fa-solid fa-gauge-high
category: work
---

With dozens of workflows running on schedules and webhooks, the question "did it actually run?" needs a real answer. I built a monitoring layer on top of n8n.

## Components

- **Status sync**: tracks running, success and failed states for all active workflows and writes them to a MySQL log table.
- **Live dashboard**: a page with polling, run, retry and stop buttons, an action log per user, and a scan for executions that were never tracked.
- **Watchdog**: detects stalled runs using two thresholds, sends email alerts, and de-duplicates notifications so one stall means one email.
- **Failure logger**: a shared n8n error workflow that records the failure reason for multi-trigger chains without splitting them into separate workflows.

## Lessons

- Monitoring workflows must not clutter n8n with their own execution data, so they log sparingly.
- Failure-only tracking per trigger chain is far more useful than logging every success.

## Stack

n8n, PHP, Python (FastAPI), MySQL.

## Memory investigation

I also track the n8n container's memory use over time with a small sampler, to find out why long-running workflows get unstable and what to change.
