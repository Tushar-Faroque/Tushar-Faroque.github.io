---
layout: page
title: mx3s-ctl
description: A Rust controller for the Logitech MX Master 3S
importance: 2
category: personal
---

A small Windows tool written in Rust that talks to the MX Master 3S over HID and replaces the vendor software for the features I use.

## Features in v0.2.0

- An on-screen Actions Ring with colour-key transparency.
- DPI-aware placement that behaves on dual-monitor setups.
- Volume control through Windows Core Audio COM.
- A system tray icon with its own thread.

## Stack

Rust, egui and eframe, hidapi, Windows COM.
