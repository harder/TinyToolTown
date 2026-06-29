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
---

A small Go CLI for managing a todo list from the terminal. Tasks are persisted to a CSV file with an exclusive flock lock so concurrent invocations don't corrupt the data. In other words, tasks are safely saved to a CSV file using a locking mechanism that prevents multiple simultaneous users from overwriting or corrupting the data.