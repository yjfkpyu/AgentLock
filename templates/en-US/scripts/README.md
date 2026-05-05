---
status: Current
owner: docs-template
last_verified: YYYY-MM-DD
---

# scripts/

This directory contains small scripts related to documentation self-governance. Scripts are reference implementations, not hard dependencies.

## Current Scripts

| Script | Purpose | Notes |
|--------|---------|-------|
| `validate-docs.mjs` | checks required files, front-matter, process metadata, Markdown links, and code_owns warnings | Node.js >= 18, no dependencies |

Run:

```bash
node scripts/validate-docs.mjs
```

## Project-Specific Script Guidance

The template only includes stack-neutral checks. Real projects should generate stack-specific scripts after the AI reads the project's language, package manager, and CI setup.

Prompt for AI:

> This project uses <language/package-manager/CI>. Read docs/08-process/conventions.md, docs/05-project/doc-code-map.md, and scripts/README.md. Generate a doc-code-map generator and drift-check script that match this project stack, reusing existing front-matter fields and avoiding extra runtimes.
