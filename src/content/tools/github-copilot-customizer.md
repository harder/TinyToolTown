---
name: "GitHub Copilot Customizer"
tagline: "A Visual Studio extension that gives you a UI for authoring and managing GitHub Copilot customization files: workspace instructions, file-based instructions, prompt files, custom agents, agent skills, and hooks."
author: "Siddhesh Prabhugaonkar"
author_github: "siddheshp"
github_url: "https://github.com/siddheshp/Github-Copilot-Customizer"
thumbnail: "/thumbnails/github-copilot-customizer.webp"
website_url: "https://marketplace.visualstudio.com/items?itemName=SiddheshPrabhugaonkar.GitHubCopilotCustomizer"
thumbnail_source: "https://raw.githubusercontent.com/siddheshp/copilot-customizer/main/screenshots/tools-menu.png"
tags: ["visual studio", "github copilot", "customization"]
language: "C#"
license: "MIT"
date_added: "2026-06-18"
featured: false
ai_summary: "Tired of juggling GitHub Copilot customization files outside Visual Studio? This extension brings a slick UI to manage all your workspace instructions, prompts, agents, and hooks directly inside Visual Studio—keeping your team perfectly in sync and your workflow smooth!"
ai_features: ["🛠️ Dockable tool window for easy access", "🌲 Tree view with file-system watcher to stay updated", "✨ Smart name-based file creation automates folder and suffix choices", "✔️ Built-in JSON schema validation and workspace-wide checks"]
---



GitHub Copilot Customizer (Unofficial)A Visual Studio extension that gives you a UI for authoring and managing GitHub Copilot customization files: workspace instructions, file-based instructions, prompt files, custom agents, agent skills, and hooks.GitHub Copilot's customization UI (for managing instruction files, prompts, agents, and skills) is available in VS Code, but unfortunately it is not available in Visual Studio. This extension fills that gap by bringing the same file-management experience directly into Visual Studio.DisclaimerThis is an independent, community-built tool. It is not affiliated with, endorsed by, or sponsored by GitHub, Inc. or Microsoft."GitHub" and "GitHub Copilot" are trademarks of GitHub, Inc.; used solely to describe the customization file formats this extension edits (nominative fair use).ScreenshotsTools menu entry — open the GitHub Copilot Customizer tool window from the VS Tools menu.GitHub Copilot Customizer tool window — select a category on the left, enter a name, and click Add to create the file in the correct .github subfolder.What It Manages
Kind | Path pattern | Active in VS today
-- | -- | --
Workspace instructions | .github/copilot-instructions.md, AGENTS.md, CLAUDE.md | Yes
File-based instructions | **/*.instructions.md (commonly .github/instructions/) | VS Code only
Prompt files | .github/prompts/*.prompt.md | VS Code only
Custom agents | .github/agents/*.agent.md | VS Code only
Agent skills | .github/skills//SKILL.md (+ supporting files) | VS Code only
Hooks | .github/hooks.json (+ scripts) | VS Code only

Visual Studio's GitHub Copilot today only consumes .github/copilot-instructions.md at runtime. The other file types are runtime-active only in VS Code, but this extension lets you maintain them from Visual Studio so your VS Code teammates' customizations stay in sync.FeaturesDockable GitHub Copilot Customizer tool window (available from the Tools menu)Tree grouped by Kind, backed by a file-system watcherName-based file creation: enter a base name and click Add — the correct suffix and .github subfolder are chosen automaticallyJSON-Schema validation surfaced in the status barWorkspace-wide validator commandOptions page under Tools → Options → GitHub Copilot CustomizerRequirementsVisual Studio 2022 17.9 or later, or Visual Studio 2026

