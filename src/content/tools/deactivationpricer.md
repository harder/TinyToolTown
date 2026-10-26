---
name: "deactivationpricer"
tagline: "One-file Python calculator that folds gig-app deactivation risk into your true hourly rate."
author: "James Verlander"
author_github: "scrapertweeter3-prog"
github_url: "https://github.com/scrapertweeter3-prog/deactivationpricer"
website_url: "https://extrahustles.com"
tags: ["gig-economy", "side-hustle", "calculator", "hourly-rate"]
date_added: "2026-10-26"
featured: false
---

Gig apps deactivate accounts with a template email, the appeal takes weeks, and pay stops the whole time. The rate the app advertises never prices any of that in. This file takes your gross rate, weekly hours and expenses, the weekly odds of a deactivation, how long a suspension usually benches you, and the hours an appeal eats. It prints the sticker rate next to the risk-adjusted rate, expected suspensions per year, pay weeks lost, and appeal hours, with a --json flag for scripts. A $22/hr rate on a 30 hour week at 1% weekly odds and a 6 week suspension drops from $20.67 to $19.40. I run Extra Hustles, a side-hustle site, and the write-up on the deactivation gap behind the tool lives there.