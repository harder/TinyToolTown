---
name: "Agent Instruction Drift Checker"
tagline: "Compare AI coding instruction files for drift, contradictions, stale references, and missing shared rules locally."
author: "Turner Levey"
author_github: "Turner-Levey"
github_url: "https://github.com/Turner-Levey/agent-instruction-drift-checker"
website_url: "https://agent-instruction-drift-checker.vercel.app/"
tags: ["agent-instructions", "agents-md", "claude-md", "coding-agents", "developer-tools"]
language: "JavaScript"
license: "MIT"
theme: "blue"
date_added: "2026-05-19"
featured: false
---

A free browser-only utility for developers and teams maintaining multiple AI coding instruction files such as AGENTS.md, CLAUDE.md, Cursor rules, Copilot instructions, Gemini guidance, or Windsurf rules. Users paste a canonical instruction file, paste a tool-specific file, optionally paste a known file list, and get a local drift report with missing canonical rules, likely contradictions, command drift, stale file references, size/context warnings, and copyable Markdown findings. It is static, local-first, and does not require signup.