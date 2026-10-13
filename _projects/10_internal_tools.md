---
layout: page
title: Internal tools
description: Invoice converters, a live flight board and reporting helpers
importance: 7
category: work
---

Smaller tools that remove a recurring chore.

- **Invoice to Excel converter**: turns supplier tax invoice PDFs into day-wise, multi-sheet Excel workbooks that use formulas rather than hardcoded values. It started as a command line tool and grew into a small Flask web app with upload, a progress bar and download.
- **Invoice parser and generator**: reads e-ticket PDFs from Outlook, imports the rows and generates and emails customer invoices automatically.
- **Live flight board**: a PHP page showing departures in the style of an airport display, built in two versions, one on an airport's own public data feed and one on a licensed flight data API as the fallback.
- **Search and analytics feeds**: Search Console, GA4, Google Ads alerts and social media audience data brought into MySQL for reporting.

## Stack

Python, Flask, pandas, PHP, MySQL, n8n.
