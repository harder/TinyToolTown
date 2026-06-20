# Maintainer Improvements TODO

Tracking the TinyToolTown reliability/scaling pass started 2026-06-20.

## P0 — Reliability / correctness

- [x] Add pull request CI that runs `npm ci`, `npm test`, and `npm run build`.
- [x] Stop generating every social PNG during every Astro build; move social card generation to an incremental/static script.
- [x] Fix or remove stale `release-submitter.yml` workflow that references a missing `tools/TinyToolSubmitter` project.
- [x] Unify issue-form parsing between triage and batch import workflows in shared, tested code.

## P1 — Quality / maintainer ergonomics

- [x] Add duplicate GitHub repo detection in automated triage and batch import.
- [x] Standardize workflows on Node 24 and `npm ci`.
- [x] Add sitemap generation for discoverability.
- [x] Update `.github/copilot-instructions.md` so coding agents see current tests, schema paths, and queue/batch import flow.
- [x] Reduce dependency audit findings from 14 total / 8 high to low-only by updating dependencies, including Astro 6.

## P2 — Cleanup / polish

- [x] Reduce empty scheduled import-queue polling now that label events dispatch the queue processor.
- [x] Add community-health files: `CONTRIBUTING.md`, root `LICENSE`, and `SECURITY.md`.

## Validation checklist

- [x] `npm ci`
- [x] `npm test`
- [x] `npm run build`
- [x] Inspect changed workflows for permissions/concurrency correctness
- [x] Review generated site behavior for social images and sitemap
