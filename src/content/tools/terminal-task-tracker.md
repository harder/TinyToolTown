---
name: "Terminal Task Tracker"
tagline: "A to-do list that lives in your terminal."
author: "Andres Zepeda"
author_github: "code-qtzl"
github_url: "https://github.com/code-qtzl/Terminal-Task-Tracker"
thumbnail: "/thumbnails/terminal-task-tracker.webp"
tags: []
language: "go, golang"
date_added: "2026-06-29"
featured: false
ai_summary: "Keep your to-dos right where you live—in the terminal! This handy CLI manages your tasks with safe CSV storage and simple commands, making productivity a breeze without ever leaving your command line zone."
ai_features: ["🔥 Safe concurrent CSV task storage with file locking", "⚡ Simple add, list, complete, and delete commands", "🎯 Monotonically increasing task IDs for consistency", "🐢 Lightweight Go CLI perfect for Unix-like systems"]
---

A small Go CLI for managing a todo list from the terminal. Tasks are persisted to a CSV file with an exclusive flock lock so concurrent invocations don't corrupt the data. In other words, tasks are safely saved to a CSV file using a locking mechanism that prevents multiple simultaneous users from overwriting or corrupting the data.