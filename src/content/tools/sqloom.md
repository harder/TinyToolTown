---
name: "sqloom"
tagline: "Sqloom helps you trace slow database queries back to the exact .NET API endpoint that triggered them."
author: "Jesse Gador"
author_github: "jgador"
github_url: "https://github.com/jgador/sqloom"
thumbnail: "/thumbnails/sqloom.webp"
tags: []
language: "C#"
license: "MIT"
date_added: "2026-06-22"
featured: false
ai_summary: "Trace those sneaky slow database queries right back to the .NET API endpoint causing them and get smart tuning advice to speed things up—it’s like having a detective and a performance coach for your code all in one!"
ai_features: ["🔥 Replay API calls to capture SQL queries", "⚡ Correlate captured SQL with SQL Server Query Store data", "🎯 Generate actionable tuning advice and SQL proposals", "🤖 Leverage OpenAI models for expert optimization tips"]
---

Sqloom helps you connect a slow database query to the exact .NET API endpoint that produced it. It reads Query Store from SQL Server or Azure SQL, replays requests through an app-specific test harness, correlates the captured SQL back to the database history, and writes tuning advice plus a proposed SQL script. It is built for the frustrating case where you know the database is slow, but you still need to prove which endpoint triggered it and what to change.