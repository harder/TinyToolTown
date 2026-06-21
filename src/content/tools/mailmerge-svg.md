---
name: "MailMerge-SVG"
tagline: "CSV → SVG mail merge: a laser-ready nametag grid **or** one certificate per row — all in your browser"
author: "Jon Campbell"
author_github: "joncamp"
github_url: "https://github.com/joncamp/MailMerge-SVG"
tags: []
language: "HTML/JavaScript"
license: "MIT"
date_added: "2026-06-21"
featured: false
ai_summary: "Turn your CSV into laser-ready nametags or one-per-page certificates right in your browser—no installs, no fuss, just pure SVG magic that fits perfectly on your Glowforge bed or prints solo like a pro!"
ai_features: ["🔥 Auto-detects and fills placeholders from CSV columns", "⚡ Generates tiled grids or individual full-page SVGs", "🎯 Browser-based app with zero dependencies", "🛠️ Supports Glowforge Pro bed size for perfect laser cutting"]
---

Mail-merges a CSV onto an SVG template in one of two layouts, chosen automatically:

- **Grid mode** — tiles records into a grid sized for a Glowforge Pro laser bed (nametags, labels, place cards).
- **Individual mode** — emits one full-page SVG per CSV row (certificates, awards, invitations).

It auto-detects `{{PLACEHOLDER}}` tokens in the template and matches them to CSV columns (any fields, any order), adapts to any template shape, size, or unit, and copies the artwork byte-for-byte so fonts, logos, and cut borders stay perfectly intact. It runs fully client-side — nothing is uploaded, plus a one-click `.zip` download of all outputs — and also ships as a zero-dependency, standard-library-only Python CLI. Built because laying out dozens of laser-cut nametags (or hand-filling a stack of certificates) is miserable, and this makes it one drag-and-drop.