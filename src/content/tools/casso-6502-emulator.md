---
name: "Casso 6502 emulator"
tagline: "Casso — A scrappy little Apple II emulator named after the emu's larger, flightless, considerably angrier cousin."
author: "Rob Elmer"
author_github: "relmer"
github_url: "https://github.com/relmer/Casso"
thumbnail: "/thumbnails/casso-6502-emulator.webp"
thumbnail_source: "https://raw.githubusercontent.com/relmer/Casso/master/Assets/Apple%202e%20DHGR%20Cassowary.png"
tags: ["emulator", "apple-ii", "apple-iie", "6502", "assembler"]
language: "C++"
license: "MIT"
theme: "matrix"
date_added: "2026-05-19"
featured: false
ai_summary: "Step back into the golden age of computing with this scrappy Apple II emulator that not only boots BASIC but brings realistic Disk II drive sounds and deep debugging magic to your modern machine—retro nostalgia never sounded so good!"
ai_features: ["🕹️ Authentic Apple //e emulation with 80-column and Double Hi-Res color modes", "🎧 Realistic Disk II drive audio with stereo panning and mechanical sound effects", "🐞 Live Disk II event debug window for detailed controller insights", "🚀 Easy first-run setup with automatic ROM and disk image downloads"]
---

Casso is a scrappy little Windows Apple ][,  ][ plus, and //e emulator with a AS65-compatible 6502 assembler, written from scratch in C++, mostly because I wanted to see if I could. Highlights:

- 🍎 **Cold-boots a real //e to BASIC** — audit-correct Language Card, 64 KB aux RAM, 80-column text, Double Hi-Res with NTSC artifact colors, the works.
- 💾 **Disk II that actually sounds like a Disk II** — runs DOS 3.3 / ProDOS / WOZ disks with stereo motor hum, head-step clicks, and track-0 bumps (Drive 1 leans left, Drive 2 leans right).
- 🛠️ **AS65-compatible assembler** — drop-in stand-in for Frank Kingswood's AS65: macros, conditionals, S-records, Intel HEX, the whole syntax.
- 📦 **Friendly first-run bootstrap** — politely offers to fetch the ROMs and a sample disk so you can stop pretending you know where you put them in 1985.
- 🧪 **1100+ unit tests + a headless harness** — keeping the 6502 honest against Klaus Dormann's functional suite and Tom Harte's per-opcode vectors.
- 🔜 **Coming soon** — Apple //c with 65C02 support, plus the two games that legally justify owning one: *Lode Runner* and *Choplifter*. Maybe I'll even get *Karateka* working on it, even though it never worked on my real //c in the '80s.

Is it the best Apple II emulator out there? Absolutely not — AppleWin, MAME, and friends have a many-decade head start, and Casso is happily and respectfully standing on their shoulders. But it boots, it assembles, it clicks and hums in stereo, and it's named after the emu's larger, flightless, considerably angrier cousin instead of, you know, "Emu" — so it's got that going for it.