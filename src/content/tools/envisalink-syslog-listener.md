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
ai_summary: "Turn your EnvisaLink 4 alarm syslog into smart notifications, email alerts, and Google Sheets logs with ease—because who says home security can’t be clever and connected?"
ai_features: ["📡 Listens to EnvisaLink 4 syslog over UDP without interfering with other smart home apps", "📧 Sends customizable email alerts via Mailgun", "📱 Push notifications through ntfy.sh for instant updates", "📊 Logs zone events directly to Google Sheets for easy tracking"]
---

The EnvisaLink 4 is a network module for DSC and Honeywell/Ademco Vista alarm panels. It has a built-in syslog sender that's easy to overlook. This listener catches those UDP messages on a Raspberry Pi and turns them into friendly "Front Door opened" notifications on your phone (via ntfy), logs everything to Google Sheets, and lets you suppress alerts from HomeKit when you're intentionally leaving the garage open. Zero cloud dependencies, no subscription fees.