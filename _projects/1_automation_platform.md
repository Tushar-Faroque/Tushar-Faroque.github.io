---
layout: page
title: Automation platform
description: A four-layer architecture behind 20+ production automations
importance: 1
icon: fa-solid fa-diagram-project
category: work
---

Most business processes at a travel company end in someone logging into a supplier portal, clicking through a flow and copying results into another system. I designed a repeatable architecture so each of those processes could become an automation without reinventing the plumbing every time.

## The four layers

1. **Playwright** drives the browser: logging in, handling OTP prompts, navigating, scraping and submitting.
2. **FastAPI services under PM2** wrap each browser task as a small HTTP API with a predictable request and response shape, and PM2 keeps them alive and restarts them on failure.
3. **n8n** orchestrates: schedules, webhooks, retries, branching, email and notifications.
4. **PHP and MySQL** store results, back the dashboards and give the sales and operations teams buttons that trigger workflows.

## Why it works

- One pattern means a new automation is mostly new selectors and business rules, not new infrastructure.
- Every task is an API, so n8n, a dashboard button or another script can call it the same way.
- State lives in MySQL, so workflows can resume, retry and be audited.

## Stack

Python, Playwright, FastAPI, PM2, n8n, PHP, MySQL.

Related: [airline workflows](/projects/2_airline_automations/), [workflow monitoring](/projects/4_workflow_monitoring/), [selector discovery](/projects/7_selector_discovery/).
