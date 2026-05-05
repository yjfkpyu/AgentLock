---
status: Current
owner: docs-template
last_verified: YYYY-MM-DD
---

# New Project Checklist

Use this checklist when initializing a real project from AgentLock. It is a reference, not a strict process.

## 1. Choose a Profile

Start with `profiles/README.md`. Pick the closest profile and do not combine every document from multiple profiles unless the project truly needs them.

## 2. Fill Entrypoints

- `AGENTS.md`: positioning, authority map, task routing
- `SESSION.md`: current phase, code reality, next change
- `docs/README.md`: enabled official docs
- `DOCS_MAINTENANCE.md`: maintenance rules

## 3. Establish Authority Lists

- `docs/02-requirements/glossary.md`: core terms
- `docs/05-project/feature-registry.md`: feature scope, status, docs, code, validation
- `docs/05-project/doc-code-map.md`: reverse lookup from code paths to authority docs

## 4. Validate

Run:

```bash
node scripts/validate-docs.mjs
```

The base template warns about missing `code_owns` until real project paths are added.
