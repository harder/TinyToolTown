---
name: "Path Normalizer for Windows"
tagline: "Quickly correct the various non-Windows paths coding agents frequently emit"
author: "Paul Kippes"
author_github: "kippesp"
github_url: "https://github.com/kippesp/normpath"
thumbnail: "/thumbnails/path-normalizer-for-windows.gif"
thumbnail_source: "https://static.kippesp.dev/np-v1.0.0.gif"
tags: ["cli", "window", "terminal", "command-line", "utility"]
language: "c++"
license: "MIT"
theme: "retro"
date_added: "2026-10-25"
featured: false
---

Windows paths, particularly in cmd.exe, frequently reject paths with forward slashes, alternate drive indications, the tilde shortcut, etc. coding agents currently emit on a regular basis.  `np` normalizes the path to accommodate cmd.exe, Power Shell, or File Explorer.