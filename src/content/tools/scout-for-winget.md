---
name: "Scout for WinGet"
tagline: "WinGet in your terminal, with install plans, saved sets, and update checks."
author: "Kevin Harder"
author_github: "harder"
github_url: "https://github.com/harder/wingetscout"
thumbnail: "/thumbnails/scout-for-winget.webp"
website_url: "https://wingetscout.com"
thumbnail_source: "https://raw.githubusercontent.com/harder/wingetscout/main/site/media/scout-sage-search.png"
tags: ["windows", "winget", "tui", "package-manager", "cli"]
language: "C#"
license: "MIT"
theme: "retro"
date_added: "2026-10-14"
featured: false
---

Scout for WinGet lets you search and inspect winget packages, review selected install or upgrade plans, and manage packages, pins, and saved sets from a beautiful Terminal UI. It keeps recent run results and can check daily for new upgrades without installing them automatically. The tool uses WinGet’s COM API when available and falls back to the winget CLI. It runs as a simple C#-based AOT executable that does not require the .NET framework.