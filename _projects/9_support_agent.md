---
layout: page
title: Customer support agent
description: A CRM chatbot that answers real booking questions from live data
importance: 3
icon: fa-solid fa-robot
category: ai
---

I integrated a HubSpot customer-facing AI agent with the company's booking data so it can answer order questions with facts instead of generic replies.

## What it does

- A query router handles more than eight question types, including ticket status, payment balance, refund eligibility, date-change eligibility, baggage allowance and flight date.
- The agent calls an n8n webhook, which looks the booking up and returns a structured answer.
- The payment balance flow offers the right payment options dynamically.
- Self-service help content is pulled live from the CRM file manager with a 24 hour cache.
- Guardrails and a handoff configuration keep the agent inside what it can reliably answer and pass the rest to a person.

## Stack

HubSpot, n8n, PHP, MySQL.
