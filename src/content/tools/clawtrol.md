---
name: "ClawTrol"
tagline: "Open source mission control for your AI coding agents 🦞"
author: "Gonzalo Gorbalan"
author_github: "wolverin0"
github_url: "https://github.com/wolverin0/clawtrol"
website_url: "https://github.com/wolverin0/clawtrol"
tags: ["ai", "agents", "dashboard", "kanban", "rails", "mission-control", "claude", "codex", "devtools"]
language: "Ruby"
license: "MIT"
date_added: "2026-02-13"
featured: false
---

ClawTrol is a kanban-style dashboard for managing AI coding agents. Track tasks, assign work to agents (Claude, Codex, Gemini, etc.), monitor their activity in real-time with WebSocket updates, and see results — all from a single board.

Built it because managing multiple AI agents across terminals was chaos. Needed one place to see what's running, what's done, what failed. It's Rails 8 + Hotwire, deploys in minutes, and has a full REST API so agents can update their own tasks.

Features: multi-board kanban, real-time agent activity, nightshift mission scheduler, file viewer, analytics, and webhook integrations.