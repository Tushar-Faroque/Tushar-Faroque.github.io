---
layout: page
title: Internal tools
description: Invoice converters, a live flight board and reporting helpers
importance: 7
icon: fa-solid fa-screwdriver-wrench
category: work
---

Smaller tools that remove a recurring chore.

- **Invoice to Excel converter**: turns supplier tax invoice PDFs into day-wise, multi-sheet Excel workbooks that use formulas rather than hardcoded values. It started as a command line tool and grew into a small Flask web app with upload, a progress bar and download.
- **Invoice parser and generator**: started by reading e-ticket PDFs from Outlook, then moved to a form-driven page where staff create the request and upload the PDF, which is parsed into a branded invoice and emailed. The form route copes far better with varied email styles.
- **Live flight board**: a PHP page showing departures in the style of an airport display, built in two versions, one on an airport's own public data feed and one on a licensed flight data API as the fallback.
- **Bank and booking portal exports**: daily exports from a business banking portal, a payments portal and a flight booking portal, imported into MySQL for reconciliation. These use human-like browser behaviour and need selector updates whenever a portal redesigns.
- **Technical documentation**: written guides for the airline automations, covering each workflow, its tables and how to run it manually when something fails.
- **Search and analytics feeds**: Search Console, GA4, Google Ads alerts and social media audience data brought into MySQL for reporting.

## Stack

Python, Flask, pandas, PHP, MySQL, n8n.
