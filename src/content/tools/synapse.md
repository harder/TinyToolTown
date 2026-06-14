---
name: "Synapse"
tagline: "A deterministic, local, offline repository context compiler."
author: "Dave Sekula"
author_github: "prom3theu5"
github_url: "https://github.com/SimCubeLtd/synapse"
tags: ["cli", "repository graph", "knowledge graph"]
language: "Rust"
license: "0BSD"
theme: "terminal"
date_added: "2026-06-08"
featured: false
ai_summary: "Turn your codebase into a smart, local knowledge graph that crafts perfectly focused, LLM-ready context packs without any cloud fuss or network calls—ideal for turbocharging your AI-powered coding sessions offline!"
ai_features: ["🔥 Offline deterministic indexing of repos", "⚡ Generates compact, token-budgeted Markdown context for LLMs", "🎯 Powerful symbol and relationship queries with graph visualization", "🚀 Zero network or AI API dependencies, pure local CLI"]
---

Synapse indexes a source repository into a lightweight graph (files, symbols, projects, packages, and their relationships), persists it in [LadybugDB](https://ladybugdb.com/), and emits compact, LLM-ready Markdown context packs you can paste into Copilot, Claude, Codex, or any other agentic code partnered developer.

It is not an AI agent, not an MCP server, and requires no daemon, no network, and no AI API calls. It is a pure local CLI built for large mono-repos and mixed-language engineering repositories. Its really built for my own use case of token per watt reduction vs Grep for agent discovery phases

You can easily transfer knowledge graphs between worktrees / feature branches utilising built in [Oras](https://oras.land/) support to push and pull the database to an oci compatible registry (ACR / GH packages etc)