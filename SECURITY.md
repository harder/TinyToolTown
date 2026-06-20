# Security Policy

Tiny Tool Town is a static directory website. It stores no user accounts,
passwords, or personal data, and it performs no server-side processing at
runtime — the published site is plain HTML/CSS/JS served from GitHub Pages.

## Reporting a Vulnerability

If you discover a security issue, please report it privately:

- Preferred: open a [GitHub security advisory](https://github.com/shanselman/TinyToolTown/security/advisories/new)
  (**Security → Report a vulnerability**).
- Please **do not** open a public issue for security reports.

Include as much detail as you can:

- A description of the issue and its potential impact.
- Steps to reproduce (a proof of concept is ideal).
- Any affected workflow, script, or page.

We aim to acknowledge reports within a few days and will keep you updated as we
investigate and ship a fix.

## Scope

Examples of issues we care about:

- Cross-site scripting (XSS) via tool submission content rendered on the site.
- Workflow vulnerabilities (e.g. command/script injection in GitHub Actions
  that process untrusted issue content).
- Supply-chain risks in build dependencies.

Out of scope:

- Vulnerabilities in third-party tools merely **listed** in the directory —
  please report those to the respective tool's own repository.
- Reports that require physical access to a maintainer's machine.

## Submission Content Safety

Tool submissions are user-provided. Markdown is sanitized via `rehype-sanitize`
(see `astro.config.mjs`), and the automation that turns issues into content
files sanitizes/escapes untrusted fields. If you find a way to bypass this,
that's exactly the kind of report we want.
