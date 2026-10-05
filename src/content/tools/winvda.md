---
name: "winvda"
tagline: "Zero-cached-state virtual desktop engine and automation CLI for Windows 10 and 11."
author: "Amir Farhadi"
author_github: "amirf147"
github_url: "https://github.com/amirf147/winvda"
thumbnail: "/thumbnails/winvda.webp"
website_url: "https://pypi.org/project/winvda/"
thumbnail_source: "https://raw.githubusercontent.com/amirf147/winvda/master/docs/images/winvda-architecture.png"
tags: ["windows", "virtual-desktops", "desktop-management", "cli", "automation"]
language: "Python"
license: "Apache-2.0"
theme: "terminal"
date_added: "2026-10-05"
featured: false
---

winvda is a zero-dependency Python library and CLI tool for inspecting, switching, and managing Windows 10 and 11 virtual desktops and pinned window states.

Existing tools often rely on stateful COM proxies that crash with RPC_S_SERVER_UNAVAILABLE when explorer.exe restarts, or fail to pin multi-window modern applications like Windows Terminal due to sub-AUMID tokens. winvda resolves these issues by using a call-scoped Multi-Threaded Apartment (MTA) architecture. Each operation acquires transient COM pointers directly from the active shell, executes within 0.02 milliseconds, and releases them immediately.

This design provides automatic re-binding when Windows Explorer restarts, preserves apartment state across background worker threads for voice control systems (Caster, Talon Voice), and matches native Task View behavior when pinning multi-instance applications.