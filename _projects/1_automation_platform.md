---
layout: page
title: Automation platform
description: A four-layer architecture behind 20+ production automations
importance: 1
icon: fa-solid fa-diagram-project
category: work
---

Most business processes at a travel company end in someone logging into a supplier portal, clicking through a flow and copying results into another system. I designed a repeatable architecture so each of those processes could become an automation without reinventing the plumbing every time.

<div class="flow-diagram">
<svg viewBox="0 0 900 150" role="img" aria-label="Flow from Playwright to FastAPI and PM2 to n8n to PHP and MySQL">
  <rect class="flow-box" x="10" y="30" width="190" height="90" rx="12"/>
  <text class="flow-title" x="105" y="72">Playwright</text>
  <text class="flow-sub" x="105" y="98">drives the browser</text>
  <line class="flow-line" x1="204" y1="75" x2="228" y2="75"/>
  <rect class="flow-box" x="235" y="30" width="190" height="90" rx="12"/>
  <text class="flow-title" x="330" y="72">FastAPI + PM2</text>
  <text class="flow-sub" x="330" y="98">tasks as APIs</text>
  <line class="flow-line" x1="429" y1="75" x2="453" y2="75"/>
  <rect class="flow-box" x="460" y="30" width="190" height="90" rx="12"/>
  <text class="flow-title" x="555" y="72">n8n</text>
  <text class="flow-sub" x="555" y="98">orchestrates workflows</text>
  <line class="flow-line" x1="654" y1="75" x2="678" y2="75"/>
  <rect class="flow-box" x="685" y="30" width="190" height="90" rx="12"/>
  <text class="flow-title" x="780" y="72">PHP + MySQL</text>
  <text class="flow-sub" x="780" y="98">state and dashboards</text>
</svg>
</div>

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
