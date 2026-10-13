---
layout: page
title: Email ingestion pipelines
description: Outlook mailboxes turned into structured, searchable tables
importance: 5
category: work
---

Customer care, sales, payments and refunds all arrive as email. I built pipelines that read those mailboxes and turn messages into structured records the teams can filter and report on.

## How it works

1. n8n fetches mail from each Outlook mailbox through the Microsoft Graph API.
2. Fields are extracted from each message, including the airline involved and booking references.
3. Rows accumulate into a CSV that a PHP importer upserts into a dedicated MySQL table per mailbox.
4. A dashboard shows each mailbox, with reply composing for the departments that need it.

## Details worth noting

- Outlook folder IDs and names are tracked with Graph delta sync, using one shared endpoint that picks the target table from the caller's API key.
- The refund pipeline tracks thread replies so unanswered requests stand out.
- The payment pipeline saves attachment images and shows them in a lightbox.

## Stack

n8n, Microsoft Graph API, PHP, MySQL.
