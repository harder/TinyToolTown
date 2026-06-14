---
name: "WebPageHost"
tagline: "Simple WebView2 CLI with auto-login, zoom, JS eval as exit code, etc."
author: "Thomas Gossler"
author_github: "thgossler"
github_url: "https://github.com/thgossler/WebPageHost"
thumbnail: "/thumbnails/webpagehost.webp"
thumbnail_source: "https://github.com/thgossler/WebPageHost/raw/main/images/screenshot.jpg"
tags: ["cli", "windows", "webview2"]
language: "C#, Javascript"
license: "MIT"
theme: "terminal"
date_added: "2026-06-10"
featured: false
ai_summary: "Turn your command line into a slick mini browser with auto-login, zoom control, and the power to run JavaScript that exits with your chosen code—perfect for quick web tasks wrapped in Microsoft Edge's WebView2 magic!"
ai_features: ["🔥 Command line control for opening URLs in embedded WebView2", "⚡ Auto-login and adjustable zoom for smooth browsing", "🎯 Run JavaScript with results returned as exit codes", "🖥️ Lightweight Windows tool using .NET and WinForms"]
---

This is a simple CLI tool for Windows which uses GUI to open web page URLs in an embedded Microsoft WebView2 control (like a web app wrapper). It has a variety of options to control the behavior of the window and the embedded web browser (auto-login, zoom, etc.). Further, it supports evaluation and customization of the tool's CLI exit code via JavaScript and, thus, let's you use it for selecting anything from the web page and return it as result on standard output. I built it as a capable input box with item selection on web pages from within a command line tool or script.