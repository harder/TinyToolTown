---
name: "Claude Code Hooks Settings Checker"
tagline: "Check Claude Code settings.json hooks, matchers, handler shape, and config placement locally."
author: "Turner Levey"
author_github: "Turner-Levey"
github_url: "https://github.com/Turner-Levey/claude-code-hooks-settings-checker"
website_url: "https://claude-code-hooks-settings-checker.vercel.app/"
tags: ["claude-code", "claude-code-hooks", "settings-json", "developer-tools", "json-validator"]
language: "JavaScript"
license: "MIT"
theme: "Developer utility"
date_added: "2026-05-20"
featured: false
ai_summary: "Say goodbye to config chaos with this nifty in-browser checker that zaps JSON errors and keeps your Claude Code hooks and settings perfectly in shape—no uploads, no fuss, just instant local sanity checks!"
ai_features: ["🔥 JSON parse error detection", "⚡ Validates hook event arrays under the right object", "🎯 Checks matcher and handler shapes for common hook types", "🛡️ Provides hints for correct config file placement"]
---

A free browser-only utility for developers configuring Claude Code hooks. Users paste a settings JSON file, choose whether it is project, local, user, plugin, or standalone hook JSON, and get a local shape report for JSON parse errors, hook event nesting, matcher format, handler fields, and config-location hints. The report is copyable as Markdown. The tool is static, local-first, and does not require signup.