---
name: "costperdecade"
tagline: "One-file Python calculator for buy-it-for-life math: cost per decade, cost per use, and break-even between a cheap and a durable option."
author: "James Verlander"
author_github: "scrapertweeter3-prog"
github_url: "https://github.com/scrapertweeter3-prog/cost-per-decade"
thumbnail: "/thumbnails/costperdecade.webp"
website_url: "https://durablepicks.com/kitchen/coffee-bean-storage-canister-decade-cost/"
thumbnail_source: "https://raw.githubusercontent.com/scrapertweeter3-prog/cost-per-decade/main/docs/terminal.png"
tags: ["cli", "bifl", "buying-guide-tools"]
language: "Python"
license: "MIT"
theme: "terminal"
date_added: "2026-10-05"
featured: false
---

Give it two price-and-lifespan pairs and it works out what each item really costs you over time: cost per decade (price divided by life, times ten), cost per use over any horizon, how many replacements a cheap version burns through, and the year the durable option finally comes out ahead. There's a --json flag for scripts, a warranty-years input that folds warranty coverage into the math, and it exits 1 when the cheap item actually wins, so it's honest about losing cases. I kept reaching for this math while writing gear reviews, got tired of redoing it in a spreadsheet, and turned it into the one file. The README links Durable Picks, where the cost-per-decade method started.