---
name: "WinStasis"
tagline: "Lightweight CLI to instantly capture and restore window positions across Virtual Desktops on Windows"
author: "Amir Farhadi"
author_github: "amirf147"
github_url: "https://github.com/amirf147/winstasis"
thumbnail: "/thumbnails/winstasis.webp"
tags: ["window-management", "window-manager", "productivity", "utility", "windows"]
language: "C#"
license: "MIT"
date_added: "2026-05-19"
featured: false
ai_summary: "Say goodbye to window chaos with a nifty CLI that snapshots and restores your app positions and virtual desktops instantly—perfect for power users craving tidy multi-workspace setups after every reboot!"
ai_features: ["🔥 Save and restore window layouts across all Virtual Desktops", "⚡ Lightweight, self-contained native C# CLI with no extra runtimes needed", "🎯 Stores sessions as JSON for easy management and sharing", "🛠️ Supports restoring individual windows by Target ID or full profiles"]
---

### What does it do?
WinStasis (winst) is a lightweight C# command-line utility designed to save and restore your workspace layouts. It captures the exact position, size, window state (normal, minimized, maximized), and Virtual Desktop location for every running application window, storing them in simple JSON profiles. 
When restoring a layout, WinStasis matches windows using process names and titles, clamps coordinates safely to prevent windows from opening off-screen, and tracks globally pinned windows that span all desktops.