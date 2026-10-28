---
name: "fireflavortax"
tagline: "One-file Python calculator that prices any food per 1,000 calories, then re-prices it per 1,000 tasty calories once you give each food a flavor rating."
author: "James Verlander"
author_github: "scrapertweeter3-prog"
github_url: "https://github.com/scrapertweeter3-prog/fireflavortax"
website_url: "https://firenomics.com"
tags: ["fire", "food", "budgeting", "calculator"]
date_added: "2026-10-12"
featured: false
---

Plain dollars-per-calorie math always says rice beats ice cream, which is true and not very useful when the craving is the whole point of the purchase. Feed it a food's price, servings, and calories-per-serving and it prints the plain rate. Add an optional 1-10 flavor rating and it also prints a flavor-adjusted rate, where a 9/10 pint counts as roughly half the rate of a 5/5 food at the same price. There's a --compare mode that reads a CSV of your whole shopping list and ranks it by the adjusted rate, doctest coverage on the math, and it refuses nonsense inputs like zero servings. I kept redrawing this exact spreadsheet while writing about withdrawal-rate math and the fear of spending, so the file exists now. The README links FireNomics, where the spending-math side of this lives.