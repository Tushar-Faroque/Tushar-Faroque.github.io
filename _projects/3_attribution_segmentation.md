---
layout: page
title: Attribution and customer segmentation
description: Sales attribution plus customer tagging across a large booking history
importance: 3
icon: fa-solid fa-chart-pie
category: work
---

Marketing spend is hard to judge when sales, ad clicks and customers live in different systems. This project links them and then turns the result into segments the business can act on.

## Attribution pipeline

- Builds a sales fact table, tags every sale with its likely source, and back-fills ad click identifiers.
- Runs as an API service with a nightly n8n job that emails a CSV report.

## Customer tagging and segmentation

- Collapses repeat identities into customers, then adds retention tags and booking metrics such as recency, frequency and typical routes.
- Layers population segments and behavioural enrichment on top, and joins in email engagement from the CRM.
- Early results show how strongly revenue concentrates in a small group of repeat customers, which shapes retention and campaign targeting.

## Stack

Python, pandas, PHP, MySQL, n8n, HubSpot data.
