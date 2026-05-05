---
status: Current
owner: docs-template
last_verified: YYYY-MM-DD
---

# Documentation and Collaboration Conventions

> Single source of truth for shared terminology, status values, Track, risk levels, front-matter, naming rules, and doc-code mapping.

## Document Status

| Status | Meaning | Default AI Behavior |
|--------|---------|---------------------|
| Current | Current authority source | Can be used for implementation |
| Draft | Draft or pending confirmation | Useful reference; confirm before key implementation |
| Unverified | Not checked against code or facts | Do not treat as code reality |
| Superseded | Replaced by another doc | Follow replacement |
| Archived | Historical context | Read only for traceability |

## Track

| Track | Meaning | Default AI Behavior |
|-------|---------|---------------------|
| NOW | Required in the current phase | Implement according to Current authority docs |
| BOTH | Minimal current slice plus future expansion | Implement current slice only; log expansion in evolution backlog |
| LATER | Not in current phase | Do not implement; add trigger conditions to backlog if needed |

## Risk

| Level | Examples | Execution Strategy |
|-------|----------|-------------------|
| Low | docs, small fixes, non-contract refactors | Execute and report validation |
| Medium | user behavior, interfaces, config, cross-module boundaries | Confirm authority docs; sync docs if needed |
| High | permissions, security, data models, deployment, public APIs, irreversible actions | Pause for confirmation and define rollback |
| Critical | production data damage, permission bypass, unrecoverable release, major architecture shift | Human confirmation required |

## Front-Matter

```yaml
---
status: Current | Draft | Unverified | Superseded | Archived
owner: <team / role / person>
last_verified: YYYY-MM-DD
features: ["F-001"]
code_owns:
  - "src/module/**"
supersedes: <relative path>
superseded_by: <relative path>
---
```

## doc-code Mapping

- Official docs declare owned code paths with `code_owns`.
- `docs/05-project/doc-code-map.md` aggregates reverse lookup from code paths to docs.
- Code changes under a `code_owns` path should trigger doc sync review.
