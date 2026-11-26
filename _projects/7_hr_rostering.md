---
layout: page
title: HR and rostering automations
description: Leave and attendance sync between the HR system and the staff roster
importance: 5
icon: fa-solid fa-calendar-check
category: work
---

The HR system holds leave and attendance, but the staff roster lives in the company's own platform. Keeping the two in step by hand was slow and easy to get wrong, so I connected them.

## What it covers

- **Employee and leave sync**: scheduled exports of active employees, leave approvals and leave history, imported into MySQL.
- **Roster updates**: approved leave for any month marks the matching roster days as leave. Other statuses change nothing.
- **Attendance import**: daily attendance detail brought in for reporting and unpaid leave checks.
- **Applying leave back**: a button on the roster dashboard triggers a webhook workflow that applies approved leave in the HR system. The HR system cannot take a multi-day request reliably, so the workflow splits it into one request per day and approves each one. A log table doubles as the queue, and every step updates its row.
- **Roster optimiser and leave views**: a roster page for leave and rostered days off, plus a live view of leave approvals where the leave type can be corrected.

## Design choices

- Everything is tested on the beta site first, against a separate backend port, so live data is never edited during development.
- One workflow handles both single and batch runs, and requests can run in parallel on one API.

## Stack

Python, Playwright, FastAPI, PM2, n8n, PHP, MySQL.
