---
name: "Trace Your Code"
tagline: "Every prompt becomes a chapter. See what Claude Code / Copilot actually changed (real diffs, never chat claims), scrub any file back through time, undo any turn, and ask \"what broke since it last worked?\". Local-only; works with no API key."
author: "Shreedhar"
author_github: "shreedharv16"
github_url: "https://github.com/shreedharv16/Trace-Your-Code"
thumbnail: "/thumbnails/trace-your-code-ts.webp"
website_url: "https://github.com/shreedharv16/Trace-Your-Code/tree/main/img"
thumbnail_source: "https://github.com/shreedharv16/Trace-Your-Code/blob/main/img/img2.jpeg"
tags: ["code explorer", "ai", "vibe coding", "llm", "genai"]
language: "typescript"
license: "MIT"
date_added: "2026-06-18"
featured: false
---

What it does
Trace Your Code
 is a local-only VS Code extension that acts as a "flight recorder" for your codebase. It monitors changes made by AI assistants (like Claude Code and GitHub Copilot Chat), maps each change back to the prompt that caused it, and organizes them into a visual timeline. It keeps track of modifications by creating commits in an isolated shadow Git repository, giving you features like interactive time travel (scrubbing through file versions), churn maps of frequently edited files, and a breakage detective to find exactly what changed since the code last worked.

Why it was built
In the era of agentic and "vibe" coding, AI tools can make massive, rapid changes across many files. When something breaks several prompts later, diagnosing the root cause is extremely difficult because assistant summaries can be inaccurate or incomplete. This tool was built to focus entirely on what actually landed on disk, rather than what the AI claimed it did, making it easy to audit, review, and debug AI-generated code.

Why it's delightful
Automatic & Non-Intrusive: It runs completely in the background without needing account setup, telemetry, or configuration. It respects your existing .gitignore and stores everything in VS Code's extension storage, keeping your actual project files and Git history completely clean.
Breakage Detective: The "Ask" tab lets you pinpoint a turn when the code worked and instantly view the exact cumulative diff of everything that changed since.
Seamless Time Travel & Undo: You can scrub any file back through its edits or undo an entire prompt's changes with a single click.