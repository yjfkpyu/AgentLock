---
status: Draft
owner: project-owner
last_verified: YYYY-MM-DD
---

# doc-code Reverse Map

> Use this table to answer: I changed `src/foo/**`; which docs may need updates?

Data should be derived from `code_owns` in official docs.

## Reverse Map

| Code path (glob) | Authority Doc | Features | Notes |
|------------------|---------------|----------|-------|
| `src/<todo>/**` | `docs/<todo>.md` | F-xxx | TBD |

## Auto-generated Section Convention

```markdown
<!-- AUTO:doc-code-map start -->
| Code path (glob) | Authority Doc | Features | owner |
|------------------|---------------|----------|-------|
<!-- AUTO:doc-code-map end -->
```

Project-specific implementation guidance is in `scripts/README.md`.
