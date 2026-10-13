---
layout: post
title: A four-layer pattern for browser automation
date: 2026-10-14 10:00:00
description: How Playwright, FastAPI, n8n and PHP/MySQL fit together
tags: automation architecture n8n
categories: notes
---

Most of the automations I build start the same way: a person logs into a website, clicks through a flow and copies something somewhere else. After a few of these I settled on a pattern that keeps each new automation small.

## The layers

**1. Playwright does the clicking.** One Python script per task, with selectors kept in one place at the top. When a portal changes, this is the only file that needs to change.

**2. FastAPI makes the task callable.** Each script is wrapped in a small HTTP service with a clear request and response. PM2 keeps the services running and restarts them if they crash.

**3. n8n decides when and what next.** Schedules, webhooks, retries, branching and notifications live here, where they are visible and easy to change without touching code.

**4. PHP and MySQL remember everything.** Results, statuses and queues are stored in tables. That gives dashboards, audit trails and the ability to resume after a failure.

## Rules I follow

- A task should do one thing and report clearly, rather than hide branching inside a script.
- Anything irreversible, such as a payment, gets a duplicate check and a verification pass.
- The database is the source of truth for state, not the workflow engine.
- Monitor the monitors: workflows that log other workflows should barely log themselves.

The result is that a new automation is mostly new selectors and business rules, which is where the real knowledge lives.
