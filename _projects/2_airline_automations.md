---
layout: page
title: Airline group-booking automations
description: Air India, AirAsia and Singapore Airlines workflows across portals and Amadeus
importance: 2
category: work
---

Group bookings involve long manual sequences across airline portals and a global distribution system (GDS) terminal. I automated the repetitive, error-prone parts and kept a human in the loop where money moves.

## What it covers

- **Ticket issuance**: builds passenger name-list spreadsheets from booking data and emails them to the airline for ticketing and special service requests.
- **Payments and EMD issuance**: pays a group booking on the airline portal, issues the matching electronic miscellaneous document through GDS terminal commands, and applies it back to the booking. Only one booking is processed at a time because the portal allows a single login.
- **Stock release**: releases unsold seats from group bookings through a queue table, an n8n poller and an API, so sales can trigger it from a button.
- **Name changes and refunds**: tracks dummy-ticket name replacement and refund requests end to end.
- **Ancillary payments**: pays meal add-ons after the airline confirms them by email.
- **Reconciliation**: matches airline settlement files against issued tickets on a daily and weekly schedule.

## Design choices

- Scrapers are separated from orchestration, so a portal redesign only touches selectors.
- Queue tables and status columns make every run resumable and auditable.
- Duplicate detection and verification passes guard against double payments.

## Stack

Python, Playwright, FastAPI, PM2, n8n, PHP, MySQL, Excel generation.
