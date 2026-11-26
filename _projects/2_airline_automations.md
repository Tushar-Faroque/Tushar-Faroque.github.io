---
layout: page
title: Airline group-booking automations
description: Air India, AirAsia, Batik Air, Singapore Airlines and Qantas workflows across portals and Amadeus
importance: 2
icon: fa-solid fa-plane
category: work
---

Group bookings involve long manual sequences across airline portals and a global distribution system (GDS) terminal. I automated the repetitive, error-prone parts and kept a human in the loop where money moves.

## What it covers

- **Ticket issuance**: builds passenger name-list spreadsheets from booking data and emails them to the airline for ticketing and special service requests.
- **Payments and EMD issuance**: pays a group booking on the airline portal, issues the matching electronic miscellaneous document through GDS terminal commands, and applies it back to the booking. Only one booking is processed at a time because the portal allows a single login.
- **Stock release**: releases unsold seats from group bookings through a queue table, an n8n poller and an API, so sales can trigger it from a button.
- **Name changes and refunds**: tracks dummy-ticket name replacement and refund requests end to end.
- **Payment error handling**: when an airline portal fails at the payment step, the workflow emails the airline with the amount and a screenshot, watches the same thread for the reply, then checks the portal read-only to confirm the payment cleared before marking it complete.
- **Ancillary payments**: pays meal add-ons for AirAsia and Batik Air after the airline confirms them by email, triggered from a button on the payment manager page.
- **E-ticket capture**: reads airline e-ticket PDFs from email, extracts ticket numbers and matches them to passengers by booking reference and name, with airline-specific name rules.
- **E-ticket delivery**: once a ticket number is entered, the customer's e-ticket email is built and sent automatically, for both on-demand and group fare bookings.
- **Booking list scrapes**: pulls the full bookings list from airline group portals on a schedule for reporting.
- **Reconciliation**: matches airline settlement files against issued tickets on a daily and weekly schedule.

## Design choices

- Scrapers are separated from orchestration, so a portal redesign only touches selectors.
- Queue tables and status columns make every run resumable and auditable.
- Duplicate detection and verification passes guard against double payments.

## Stack

Python, Playwright, FastAPI, PM2, n8n, PHP, MySQL, Excel generation.
