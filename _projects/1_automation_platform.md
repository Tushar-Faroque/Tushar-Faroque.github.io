---
layout: page
title: Automation platform
description: A four-layer architecture behind 50+ production automations
importance: 1
icon: fa-solid fa-diagram-project
category: work
---

Most business processes at a travel company end in someone logging into a supplier portal, clicking through a flow and copying results into another system. I designed a repeatable architecture so each of those processes could become an automation without reinventing the plumbing every time.

{% include flow.liquid steps="Playwright::drives the browser|FastAPI + PM2::tasks as APIs|n8n::orchestrates workflows|PHP + MySQL::state and dashboards" label="Flow from Playwright to FastAPI and PM2 to n8n to PHP and MySQL" %}

## The four layers

1. **Playwright** drives the browser: logging in, handling OTP prompts, navigating, scraping and submitting.
2. **FastAPI services under PM2** wrap each browser task as a small HTTP API with a predictable request and response shape, and PM2 keeps them alive and restarts them on failure.
3. **n8n** orchestrates: schedules, webhooks, retries, branching, email and notifications.
4. **PHP and MySQL** store results, back the dashboards and give the sales and operations teams buttons that trigger workflows.

## What runs on it

More than 50 automations run in the background on this pattern, on schedules, webhooks or dashboard buttons.

- **Airlines**: Air India (payments, EMD and YQ issuance, ticket issuance, e-tickets, stock downsizing, bookings list), AirAsia (agency bookings, agent reports, stock payments, meal add-ons, ticket issuance), Qantas (PNR lookups, payments, tickets, bookings list), Batik Air and Singapore Airlines group portals.
- **GDS**: Amadeus Selling Platform Connect login, invoice lookups, group PNR checks and EMD commands.
- **Payments and banking**: transaction and statement exports from banking, card, payment gateway and wallet portals, balance checks, and payment confirmation emails.
- **Ticketing and reconciliation**: ticket number capture from consolidators, IATA settlement file reconciliation, refund applications and notices, and issue-reason tracking.
- **Booking platforms**: flight booking exports, booking error and passenger PNR scrapes, and marketplace inventory sync.
- **Customer and calling**: CRM data sync, contact centre dialler controls (mode switching, priority, adding numbers) and email classification.
- **Data and marketing**: sales attribution, ads audience segmentation and a daily AI usage cost report.
- **HR**: employee, leave and attendance sync, and applying approved leave.
- **Operations**: workflow execution logging, email attachment compression and container memory tracking.

## Why it works

- One pattern means a new automation is mostly new selectors and business rules, not new infrastructure.
- Every task is an API, so n8n, a dashboard button or another script can call it the same way.
- State lives in MySQL, so workflows can resume, retry and be audited.

## Stack

Python, Playwright, FastAPI, PM2, n8n, PHP, MySQL.

Related: [airline workflows](/projects/2_airline_automations/) and [workflow monitoring](/projects/4_workflow_monitoring/).
