---
status: Current
owner: project-owner
last_verified: YYYY-MM-DD
---

# [Project Name]

> AI-native project entrypoint. Keep this file lightweight: project positioning, current-truth entrypoints, authority map, task routing, and rules for avoiding stale-doc mistakes.
>
> Shared definitions for Status, Track, Risk, front-matter, naming, and doc-code mapping live in `docs/08-process/conventions.md`. Do not duplicate those tables here.

## Project Positioning

Describe in 3-6 lines:

- what problem this project solves
- delivery form: library, service, desktop app, CLI, firmware, platform, etc.
- primary users or operators
- success criteria
- current project phase

## Current Truth Entrypoints

Before starting any development task, an AI agent should read the smallest reliable set:

1. This file: project positioning, authority map, and doc status rules
2. `SESSION.md`: current code reality, next intended change, known drift, recent validation
3. `docs/README.md`: official documentation index and enabled scope
4. `docs/05-project/feature-registry.md` when feature scope or phase trade-offs are involved
5. The single Current authority document directly related to the task

Do not load the full process library, historical discussions, temporary references, or every design document unless the task requires it.

## Global Rules

### Technical Red Lines

1. TBD
2. TBD
3. TBD

### Document Trust, Track, and Risk

Definitions and default AI behavior are defined in `docs/08-process/conventions.md`:

- Status: Current / Draft / Unverified / Superseded / Archived
- Track: NOW / BOTH / LATER
- Risk: Low / Medium / High / Critical

If a document has no status but affects APIs, data, architecture, permissions, security, or acceptance criteria, record a question in `SESSION.md` Known Drift / Open Questions before proceeding.

## Authority Map

| Purpose | Location |
|---------|----------|
| Current project snapshot | `SESSION.md` |
| Full documentation index | `docs/README.md` |
| Shared conventions | `docs/08-process/conventions.md` |
| Feature scope and status | `docs/05-project/feature-registry.md` |
| Stage view | `docs/05-project/stage-view.md` |
| doc-code reverse map | `docs/05-project/doc-code-map.md` |
| Future evolution backlog | `docs/05-project/evolution-backlog.md` |
| Architecture decisions | `docs/05-project/adr/README.md` |
| Glossary | `docs/02-requirements/glossary.md` |
| Process library | `docs/08-process/README.md` |
| Validation scripts | `scripts/README.md` |

## AI Task Routing

| When you are about to... | Read first... |
|--------------------------|---------------|
| Continue development | `docs/08-process/ai-collaboration-protocol.md` |
| Implement a new feature | Current authority docs, then design gate if needed |
| Fix a bug | `docs/08-process/debugging.md` |
| Change APIs, data, config, permissions, deployment, or security | Relevant Current authority doc and `DOCS_MAINTENANCE.md` |
| Decide current phase scope | `docs/05-project/feature-registry.md` |
| Run continuously by explicit request | `docs/08-process/autopilot.md` |

## Current Phase

- Phase: TBD
- Goals: TBD
- Boundaries: TBD
- Deliverables: TBD
