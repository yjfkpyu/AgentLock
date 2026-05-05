---
status: Current
owner: project-owner
last_verified: YYYY-MM-DD
---

# SESSION

> Current project truth snapshot for AI handoff across sessions. This file prevents new sessions from continuing from stale docs or old plans.

## Current Phase

- Phase: TBD
- Stage: TBD
- Branch: TBD
- Updated: YYYY-MM-DD

## Current Scope

### In Scope

- TBD

### Out of Scope

- TBD. Link future candidates to `docs/05-project/evolution-backlog.md`.

## Current Code Reality

Only record facts that are true in the codebase and recently verified. Do not record plans or wishes.

Each Reality item must be supported by `verified_paths` or `verified_command`; otherwise move it to Open Questions.

```yaml
- id: R-001
  summary: "One verified implementation fact"
  verified_paths:
    - "src/example.ts"
  verified_command: "npm test"
  verified_at: YYYY-MM-DD
  related_features: ["F-xxx"]
```

If the workspace has no verified implementation yet, write: `R-000 No implementation code has been verified in this workspace yet`.

## Active Work

- Work Item: TBD
- Related Feature: F-xxx / none
- Related Docs: TBD
- Status: not-started / in-progress / blocked / review

## Next Intended Change

- Action: TBD
- Expected Files: TBD
- Validation: TBD

## Last Verified Commands

| Date | Command / Check | Result | Notes |
|------|-----------------|--------|-------|
| YYYY-MM-DD | TBD | not verified | TBD |

## Known Drift / Open Questions

| ID | Type | Description | Affected Docs / Code | Status |
|----|------|-------------|----------------------|--------|
| D-001 | docs-code / docs-docs / plan-code / unknown | TBD | TBD | open |

## Recently Completed

| Date | Item | Evidence | Docs Updated |
|------|------|----------|--------------|
| YYYY-MM-DD | TBD | TBD | yes / no / n/a |
