---
name: "Tableau Complexity"
tagline: "A Python utility for parsing Tableau workbooks (.twb / .twbx) to extract per-worksheet metadata (marks, shelves, filters, calcs, parameters, etc.) and compute a configurable complexity score."
author: "John Thompson"
author_github: "JohnMThompson"
github_url: "https://github.com/JohnMThompson/tableau-complexity"
tags: ["cli", "tableau", "data visualization"]
language: "Python"
license: "MIT"
date_added: "2026-02-14"
featured: false
---

This tool takes a single Tableau workbook, or a directory of workbooks, and assesses each workbook based on its complexity. Useful for planning a migration away from Tableau, looking for anti-patterns in your workbooks, or just for fun! Outputs include json, csv, or a local html page in a nicely formatted report view.