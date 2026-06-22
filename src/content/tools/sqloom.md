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
---

Sqloom helps you connect a slow database query to the exact .NET API endpoint that produced it. It reads Query Store from SQL Server or Azure SQL, replays requests through an app-specific test harness, correlates the captured SQL back to the database history, and writes tuning advice plus a proposed SQL script. It is built for the frustrating case where you know the database is slow, but you still need to prove which endpoint triggered it and what to change.