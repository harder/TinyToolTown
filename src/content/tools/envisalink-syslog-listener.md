---
name: "EnvisaLink Syslog Listener"
tagline: "Turn your EnvisaLink 4's syslog into phone notifications, Google Sheets logs, and smart alert rules."
author: "Josh Johanning"
author_github: "joshjohanning"
github_url: "https://github.com/joshjohanning/envisalink-syslog-listener"
tags: []
language: "JavaScript"
license: "MIT"
date_added: "2026-06-30"
featured: false
---

The EnvisaLink 4 is a network module for DSC and Honeywell/Ademco Vista alarm panels. It has a built-in syslog sender that's easy to overlook. This listener catches those UDP messages on a Raspberry Pi and turns them into friendly "Front Door opened" notifications on your phone (via ntfy), logs everything to Google Sheets, and lets you suppress alerts from HomeKit when you're intentionally leaving the garage open. Zero cloud dependencies, no subscription fees.