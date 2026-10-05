---
name: "detectext"
tagline: "Tiny terminal AI-text detector: one Python file, stdlib only, scores writing 0-100 on surface statistics."
author: "James Verlander"
author_github: "scrapertweeter3-prog"
github_url: "https://github.com/scrapertweeter3-prog/ai-text-detector"
thumbnail: "/thumbnails/detectext.webp"
website_url: "https://pastagi.com/"
thumbnail_source: "https://raw.githubusercontent.com/scrapertweeter3-prog/ai-text-detector/main/docs/terminal.png"
tags: ["cli", "ai-detection", "writing-analysis"]
language: "Python"
license: "MIT"
theme: "terminal"
date_added: "2026-10-05"
featured: false
---

Point it at a text file and it scores how machine-shaped the prose is: sentence-length burstiness, contraction rate, formal-connective density, templated openers, punctuation variety, and a rolling vocabulary-repetition band, each weighted and shown with the measurement behind it. It supports --json and a --threshold flag that exits 1 for CI gates, refuses to score anything under 40 words, and runs offline because the sensible tells are plain statistics anyway. I built it after reading detector claims that never showed their math; this one prints the numbers behind every point. The README links PastAGI, where I publish this kind of eval and detector-skepticism writing.