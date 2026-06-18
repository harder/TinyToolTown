---
name: "AudioSwitcher"
tagline: "A tiny, fast Windows CLI to list and switch your default audio devices — from the terminal."
author: "Gabriele Castellani"
author_github: "GabrieleCastellani"
github_url: "https://github.com/GabrieleCastellani/as-audio-switcher"
thumbnail: "/thumbnails/audioswitcher-c.webp"
tags: ["windows", "cli", "audio", "dotnet", "native-aot"]
language: "C#"
license: "MIT"
date_added: "2026-06-18"
featured: false
---

AudioSwitcher is a single native ~3 MB executable for Windows that lets you list, set, and toggle default playback and recording devices straight from the command line. It supports full name, partial name, or device ID matching, and can target both the multimedia Default and Communications device slots. An interactive TUI picker helps you discover devices and build commands to use in scripts or hotkeys. No .NET runtime required — just drop `as.exe` on your PATH and go.