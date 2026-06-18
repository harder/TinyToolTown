---
name: "atref"
tagline: "Claude Code's @ file picker, everywhere - fuzzy-find any file and drop an @\"path\" into any text field."
author: "Juanjo Fuchs"
author_github: "JuanjoFuchs"
github_url: "https://github.com/JuanjoFuchs/atref"
thumbnail: "/thumbnails/atref-rust.webp"
website_url: "https://juanjofuchs.github.io/ai-development/2026/06/09/launching-atref-dont-install-skills-mention-your-second-brain-guides-into-any-agent.html"
thumbnail_source: "https://raw.githubusercontent.com/JuanjoFuchs/atref/main/docs/picker-guides.png"
tags: ["claude-code", "ai-agents", "windows", "cli", "file-picker"]
language: "Rust"
license: "MIT"
theme: "terminal"
date_added: "2026-06-18"
featured: false
---

atref puts Claude Code's @ file picker in every text field on Windows. Press Ctrl+Space over any app (terminal, browser, Obsidian, your IDE) and a fuzzy picker pops up at the caret; type a few letters (it handles CamelHumps, so `gcg` finds "Git Commit Guide", plus smart-case), hit Enter, and it drops an `@""` reference right where you were typing.

I built it because I keep a curated "second brain" of guides and kept wanting to hand them to coding agents like Claude Code and Codex from other repos - copying file paths out of VS Code got old. It's a single small Rust tray app: git-aware multi-folder indexing (follows .gitignore), frecency ranking, a live file-watcher, and an on-disk cache so it opens instantly. It even doubles as a config CLI (`atref describe`) so an agent can set it up for you.

The delightful part: one keystroke, the full path lands, and the agent reads the whole file in one shot - no listing, no grepping.