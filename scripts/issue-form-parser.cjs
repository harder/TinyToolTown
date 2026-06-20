'use strict';

// Shared parser for tool-submission GitHub issue forms.
//
// Used by both .github/workflows/triage-tool.yml and
// .github/workflows/batch-approve.yml (via `require` inside actions/github-script)
// and exercised by src/lib/__tests__/issue-form-parser.test.ts.
//
// Keeping a single source of truth avoids the two workflows drifting apart in
// how they read the issue body.

// Extract the value of a single issue-form field by its rendered label.
// GitHub renders each form field as `### <label>` followed by the user's value,
// and the next field begins with another `### ` heading. The anchored,
// multiline match captures everything up to the next heading.
function getField(body, label) {
  const regex = new RegExp(`^### ${label}\\s*$\\n([\\s\\S]*?)(?=^### |(?![\\s\\S]))`, 'm');
  const match = (body || '').match(regex);
  return match ? match[1].trim() : '';
}

// Field key -> rendered issue-form label (regex-escaped where needed).
const FIELD_LABELS = {
  name: 'Tool Name',
  tagline: 'One-line description',
  description: 'Tell us about your tool',
  github_url: 'GitHub Repository URL',
  website_url: 'Website or Demo URL \\(optional\\)',
  thumbnail_url: 'Thumbnail image URL \\(optional\\)',
  author: 'Your Name',
  author_github: 'Your GitHub Username',
  tags: 'Tags \\(comma-separated\\)',
  language: 'Primary Programming Language',
  license: 'License',
  theme: 'Page Theme \\(optional\\)',
};

// Parse all known tool-submission fields from an issue body.
function parseToolSubmission(body) {
  const result = {};
  for (const [key, label] of Object.entries(FIELD_LABELS)) {
    result[key] = getField(body, label);
  }
  return result;
}

// Normalize a GitHub repository URL to a canonical "owner/repo" key (lowercased),
// or null when the URL is not a recognizable github.com repository URL. Used for
// duplicate detection so trivially different URLs (trailing slash, www, .git,
// case) collapse to the same key.
function normalizeRepoFromUrl(url) {
  if (!url) return null;
  const cleaned = String(url).trim().replace(/<[^>]*>/g, '');
  const match = cleaned.match(/github\.com\/([^/\s#?]+)\/([^/\s#?]+)/i);
  if (!match) return null;
  const owner = match[1].toLowerCase();
  const repo = match[2].replace(/\.git$/i, '').toLowerCase();
  if (!owner || !repo) return null;
  return `${owner}/${repo}`;
}

module.exports = {
  getField,
  parseToolSubmission,
  normalizeRepoFromUrl,
  FIELD_LABELS,
};
