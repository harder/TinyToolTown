---
name: "flatratemath"
tagline: "One-file Python calculator that compares a fixed-bid project, a staff hire, and a flat monthly subscription on one scale: total cost per delivered request."
author: "James Verlander"
author_github: "scrapertweeter3-prog"
github_url: "https://github.com/scrapertweeter3-prog/flatratemath"
website_url: "https://poketdev.com"
tags: ["pricing", "hiring", "budgeting", "calculator"]
date_added: "2026-10-12"
featured: false
---

The three ways to buy software quote different units: a contractor gives one number for the whole build, a hire shows a monthly salary, a subscription shows a smaller monthly fee for unlimited requests. Feed it your expected scope, how long the work has to stay alive, and how many discrete requests you expect to submit, and it prints total cost plus cost per request for each lane. The hire lane takes the fully loaded monthly cost, salary plus taxes and benefits, since those ride along whether you count them or not. There's a --compare mode that reads a CSV of all your lanes at once and ranks them by cost per request, doctest coverage on the math, and it refuses nonsense like zero requests. I kept redrawing this exact spreadsheet while scoping client work, so the file exists now. The README links Poket Dev, where the flat-fee side of this lives.