---
layout: page
title: Call intelligence
description: Fine-tuned classifiers that brief human agents during live calls
importance: 1
category: ai
---

The goal is a copilot, not a robot caller. While a travel agent is on a call with a customer, the system builds a live profile of what the customer needs, what they object to, their budget and their sentiment, so the agent can respond better.

## Pipeline

1. Real-time transcription of the call.
2. An analysis step classifies what the customer is asking for and extracts structured details.
3. Python routing logic turns that output into JSON the agent-facing screen can show.

## Replacing a paid API with a self-hosted model

The first version used a hosted LLM for classification. To cut per-call cost and keep data in-house, I am fine-tuning **ModernBERT** (base, then large) on a rented GPU to classify the customer's need type. Training data comes from historical customer and agent transcripts that were rolled up and labelled across 16 need types. The model runs as its own small FastAPI service, in the same pattern as the rest of the platform, and the surrounding routing code stays unchanged.

## Also in progress

A text-only test harness with a simulated customer and mocked tools, so voice-agent prompts can be tested without paying per call.

## Stack

Python, PyTorch, ModernBERT, FastAPI, OpenAI API, GPU pod.
