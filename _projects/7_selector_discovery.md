---
layout: page
title: Selector discovery pipeline
description: An LLM walks a website step by step, then writes the Playwright code
importance: 2
category: ai
---

Writing a browser automation starts with a slow phase of finding out how the site works: which button, which menu, where the OTP prompt appears. This pipeline automates that reconnaissance.

## How it works

1. An LLM parses a plain-text description of the task into atomic steps.
2. A Playwright and FastAPI recon service walks the real website step by step, logging the selector used at each step.
3. A second LLM call turns the selector log into the final automation script.
4. The generated code is tested locally before it goes anywhere near production.

## Safety

- Irreversible steps such as payment or submit use dry-run interception, aborting the real network request, plus a manual confirmation gate in the generated code.
- The recon service runs on a laptop with a visible browser so I can watch it, and n8n reaches it over Tailscale.

## Extensions

Hover-triggered navigation menus (including multi-level hover chains) and login pattern detection are handled, so the pipeline can map a whole site.

## Stack

n8n, Playwright, FastAPI, OpenAI API, Tailscale.
