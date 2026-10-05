---
name: "recoveryspend"
tagline: "Tiny terminal calculator for home recovery gear: true cost per session and the payoff clock against a gym membership."
author: "James Verlander"
author_github: "scrapertweeter3-prog"
github_url: "https://github.com/scrapertweeter3-prog/recovery-lab-math"
thumbnail: "/thumbnails/recoveryspend.webp"
website_url: "https://hackedself.com/recovery/home-recovery-lab-cost-per-session/"
thumbnail_source: "https://raw.githubusercontent.com/scrapertweeter3-prog/recovery-lab-math/main/docs/terminal.png"
tags: ["cli", "recovery", "cost-analysis"]
language: "Python"
license: "MIT"
theme: "terminal"
date_added: "2026-10-05"
featured: false
---

Point it at a home sauna, cold plunge, or massage gun and it prints what one session actually costs: energy from the nameplate wattage times your local $/kWh, consumables per session, and the hardware amortized over its rated life, then a payoff clock showing the sessions-per-week where owning beats the gym lounge via --freq. Verdicts are honest, including a losing path that exits nonzero when the gym wins the math. It is a single stdlib Python file, runs offline, and supports --json for scripting. I built it after reading gear reviews that quote sticker price and stop there; this one shows every input and prints the break-even. The README walks one full sauna example and links HackedSelf, where I publish this kind of protocol and cost-per-session auditing.