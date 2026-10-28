---
name: "seqsurvive"
tagline: "One-file Python Monte Carlo that counts how often a fixed withdrawal plan survives 10,000 random sequences of real returns."
author: "James Verlander"
author_github: "scrapertweeter3-prog"
github_url: "https://github.com/scrapertweeter3-prog/seqsurvive"
website_url: "https://firenomics.com"
tags: ["retirement", "fire", "monte carlo", "calculator"]
date_added: "2026-10-21"
featured: false
---

A plan can carry a fine average return and still break early, because the bad years can land while the balance is at its peak. This file runs 10,000 random return sequences against a fixed real withdrawal and reports how often the plan outlives the horizon. You get the survival rate, median and 10th percentile ending balances, and a count of which plan years ruin the most plans. Defaults are a 5% mean real return with a 15% spread, a --seed keeps every run repeatable, and --json feeds scripts. On a million dollars at a 4% draw it survives 77.5% of sequences; step the draw to 6% and survival drops to 43.1%. I run FireNomics, a FIRE math site, and the withdrawal strategy writing behind the tool lives there.