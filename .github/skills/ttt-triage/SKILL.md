---
name: ttt-triage
description: Triage Tiny Tool Town submissions. Reviews new-tool and author-page issues in shanselman/TinyToolTown, evaluates tools against acceptance criteria, queues imports, and helps convert verified author claims into author content files.
---

# Tiny Tool Town Triage Skill

Triage submissions for [Tiny Tool Town](https://tinytooltown.com) — a community directory of free, open-source tiny tools and claimed author pages.

## When to Use

Invoke this skill when asked to:

- Triage new issues / submissions
- Review tool submissions
- Approve or reject tools
- Review author-page claims
- Create or update author profile files
- Check what new tools are pending

## Tool Submission Triage Workflow

### Step 1: Fetch Open Issues

```powershell
gh issue list --repo shanselman/TinyToolTown --state open --label new-tool --json number,title,body,labels,createdAt --limit 50
```

Or use the GitHub MCP `list_issues` tool with `state: OPEN` on `shanselman/TinyToolTown`.

### Step 2: Evaluate Each Submission

For each issue, assess against all of these criteria and assign a confidence level.

### Step 3: Present Triage Table

Output a markdown table with: issue #, tool name, language, license, confidence (HIGH/MEDIUM/LOW), recommendation (APPROVE/REJECT/MAYBE), and notes.

### Step 4: Act on Decisions

After the user confirms:

- **APPROVE**: Label issue with `queued-import` (**not** `approved` — `batch-approve.yml` drains the queue)
- **REJECT**: Close with a polite comment explaining why
- **MAYBE**: Comment asking for the missing information

## Acceptance Criteria

### Approve if all of these are true:

1. **Open source** — Has a recognized open-source license (MIT, Apache 2.0, GPL, ISC, BSD, etc.)
2. **Repo is public and accessible** — Not a 404, not archived
3. **It's actually tiny** — Single-purpose, small, focused tool; not a full platform or suite
4. **It's fun, useful, or delightful** — TTT celebrates small, joyful tools
5. **Not enterprise/commercial** — No SaaS, no paid tiers, no enterprise features
6. **Has a README** — Should explain what the tool does
7. **Checklist is complete** — All boxes checked in the submission form

### Reject if any of these are true:

1. **No license** — Repo has no LICENSE file and submitter didn't specify one
2. **Dead repo** — 404, archived, or clearly abandoned
3. **Enterprise/commercial tool** — Paid SaaS, enterprise pricing, or "free tier" of a commercial product
4. **Not a tiny tool** — Full platform, framework, or suite
5. **Spam or low effort** — Empty repo, no code, or clearly auto-generated submission
6. **Duplicate** — Tool already exists on the site

### Maybe / Request Changes if:

1. **License unclear** — Repo exists but no LICENSE file; ask them to add one
2. **Borderline scope** — Could be tiny or could be too big; use judgment
3. **CC BY-NC or similar** — Non-commercial restriction is acceptable but worth flagging
4. **Repo looks new/empty** — Very few commits, might not be ready yet

## Confidence Levels

- **HIGH** — Clear-cut decision, all criteria met or clearly violated
- **MEDIUM** — Mostly clear but one minor concern
- **LOW** — Significant uncertainty or borderline fit

## Automated Labels

The submission workflow may add:

- `repo-verified`
- `has-license`
- `has-readme`
- `has-image`

Missing `has-image` is non-blocking.

## Important Operational Notes

### GitHub Auth

```powershell
gh auth switch -u shanselman
```

### Approval Queue

**Never label issues with `approved` directly.** Always use `queued-import`.
The `batch-approve.yml` workflow is the sole writer and drains the queue.

### Follow-up Comments

Before making a final decision, check whether the submitter recently commented that they added a license, fixed the repo, or uploaded an image.

### Rejection Comments

Be kind and specific:

```text
Hey @username! Thanks for submitting [tool name] to Tiny Tool Town! 👋

Unfortunately, we can't add this one because [specific reason].

[If fixable]: If you [add a license / trim it down / etc.], feel free to resubmit!

Thanks for thinking of us!
```

### Checking for Duplicates

```powershell
Get-ChildItem src/content/tools/*.md | Select-String -Pattern "github_url.*owner/repo"
```

## Triage Report Format

```md
## Recommend APPROVE (N tools)
| # | Tool | Language | Confidence | Notes |
|---|------|----------|------------|-------|
| 123 | ToolName | Python | HIGH | Brief reason |

## Maybe / Needs Info (N tools)
| # | Tool | Concern |
|---|------|---------|
| 456 | ToolName | What's needed |

## Recommend REJECT (N tools)
| # | Tool | Reason |
|---|------|--------|
| 789 | ToolName | Why it doesn't fit |
```

## Post-Triage

After approvals are queued, optionally trigger the batch workflow:

```powershell
gh workflow run batch-approve.yml --repo shanselman/TinyToolTown
```

## Author Page Claim Workflow

Author page claims use the `customize-author.yml` issue form and are labeled `author-page`.

### Step 1: Fetch Author Claims

```powershell
gh issue list --repo shanselman/TinyToolTown --state open --label author-page --json number,title,body,labels,author,comments,createdAt --limit 50
```

Also look for open issues titled `[Author] @...` that may be missing the label. If an author issue is missing `author-page`, add that label (create it if necessary) so the validation workflow and future triage can find it.

### Step 2: Check Verification Labels

`.github/workflows/validate-author-claim.yml` validates claims only:

- Runs for issues labeled `author-page` and for issues titled `[Author] ...`.
- Backfills the `author-page` label when it sees an author claim without the label.
- Adds `claim-verified` when the issue author matches the requested GitHub username.
- Adds `invalid-author-claim` when the issue author does not match the requested username.
- Comments on missing or mismatched usernames.

Important: this workflow **does not** create or update files under `src/content/authors/`. Author file ingress is currently handled by maintainers/agents through normal repo commits or PRs.

### Step 3: Evaluate Claim Readiness

Approve/take an author claim only when all are true:

1. Claim is verified (`claim-verified`) or the issue author clearly matches the requested handle.
2. The claimed handle has at least one accepted tool in `src/content/tools/*.md`.
3. The issue includes useful display content: at minimum a display name plus a short bio or headline.
4. Links are normal public profile/project links and use `https://`.
5. Featured groups reference existing tool slugs when provided.

Request info when:

- The claim has only links and no bio/headline. Claiming would replace the generated summary with a sparse page.
- The requested handle does not have any listed tools yet.
- Featured tool slugs are missing, misspelled, or not clearly intended.
- Links are malformed or unclear.

Reject/close when:

- The claim is invalid and not a special maintainer-approved case.
- The requested username does not match the issue author and no maintainer override is provided.

### Step 4: Create or Update Author Files

Author files live in:

```text
src/content/authors/{normalized-github-handle}.md
```

Schema is defined in `src/content.config.ts`:

```yaml
---
github: "handle"
name: "Display Name"
headline: "Short headline"
website_url: "https://example.com"
links:
  - label: "Blog"
    url: "https://example.com/blog"
notes:
  - "Short highlight."
sections:
  - title: "Tool group"
    description: "What these tools have in common."
    toolSlugs:
      - "existing-tool-slug"
---
Short bio / intro paragraph.
```

Guidelines:

- Normalize `github` and filename to lowercase without `@`.
- Keep user-provided voice, but lightly edit for clarity, length, and site fit.
- Prefer `and` over `&` in prose/headlines unless it is part of a brand.
- Do not include empty fields, `_No response_`, or placeholder bullets.
- For author `links`, parse issue-form lines as `Label - https://...`.
- For `sections`, only include groups with valid existing tool slugs.
- If no bio/headline is provided, do not create a file yet; comment asking for one.

### Step 5: Validate and Close

For author content changes:

```powershell
npm test
npm run build
```

After committing/pushing the author file:

- Close the author issue with a comment referencing the commit.
- If more info is needed, leave the issue open and comment with the specific missing information.

## Combined Daily Triage

When asked to triage "everything" or "other issues":

1. Fetch both `new-tool` and `author-page` issues.
2. Fetch open PRs.
3. Queue ready tools with `queued-import`.
4. Convert ready author claims into `src/content/authors/*.md` via commit/PR.
5. Request missing author info instead of creating sparse profiles.
6. Close or decline stale/superseded PRs only when explicitly authorized.
