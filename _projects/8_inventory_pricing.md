---
layout: page
title: Inventory and pricing automation
description: Marketplace inventory sync and a rule-driven pricing engine
importance: 6
category: work
---

## Marketplace inventory

Seats sold through an online travel marketplace have to match what the company actually holds. I built an automation suite that adds inventory, syncs fares and baggage, and toggles listings on and off.

- A shadow sync-state table records what the marketplace currently holds, so updates are triggered by differences rather than blind re-uploads.
- Seat banding sets availability by tier, with activate and deactivate rules and an exclusions list.
- n8n workflows use checkpoint and resume so a long run can continue after an interruption.

## Pricing engine

Group fares are priced by rules that change by month and by days to departure.

- Analysed a few hundred beta pricing decisions in Excel to see which rules fired and why.
- Designed a rewrite that reads monthly JSON rule files and matches rules by priority.
- Every price carries an audit remark so the team can trace how it was derived.

## Stack

Python, Playwright, FastAPI, n8n, PHP, MySQL, JSON rule files.
