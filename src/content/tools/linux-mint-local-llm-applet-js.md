---
name: "Linux Mint Local LLM Applet"
tagline: "A lightweight applet that adds a convenient pop up chat interface for your local Ollama LLM"
author: "John Thompson"
author_github: "JohnMThompson"
github_url: "https://github.com/JohnMThompson/ollama-mint-applet"
thumbnail: "/thumbnails/linux-mint-local-llm-applet-js.webp"
tags: ["linux", "applet", "ollama", "ai", "desktop"]
language: "JavaScript"
license: "MIT"
theme: "minimal"
date_added: "2026-06-18"
featured: false
---

A small, dependency-free chat interface for an Ollama-hosted Mistral model.

The project includes:

A browser chat UI served by python3 app.py
A local Python proxy for Ollama's chat API
An optional Linux Mint Cinnamon panel applet that opens a quick chat popup
A user systemd service installer for autostarting the local chat server

I wanted to build this to solve "small questions" that come up during my day. I didn't want to go to a browser and break my flow, so I created this applet for Linux Mint where a local LLM chat interface can be opened for simple questions and one off conversations. It also has a localhost web version as well with chat history.