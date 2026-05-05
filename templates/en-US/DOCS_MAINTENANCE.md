---
status: Current
owner: docs-template
last_verified: YYYY-MM-DD
---

# Documentation Maintenance Rules

This document defines minimum rules for keeping docs accurate, current, navigable, and safe for AI coding agents. Shared definitions live in `docs/08-process/conventions.md`.

## One Topic, One Authority

- Each topic should have one official source-of-truth document.
- Discussion docs may influence official docs, but must not replace them permanently.
- Plan docs describe execution; they do not define final project reality.

## Prefer Updating Existing Authority Docs

Before creating a new doc, check whether an existing Current authority doc should be updated instead.

## Keep Entrypoints Light

AGENTS, README, and docs index files should stay navigational. Push detailed contracts into dedicated lower-level docs.

## Make Drift Visible

When docs and code disagree, record the issue in `SESSION.md` Known Drift / Open Questions before pretending the answer is clear.

## When Code Changes Require Doc Updates

Update Current authority docs when code changes affect:

- user-visible behavior or acceptance criteria
- public API, events, CLI, IPC, or device interfaces
- data models, storage schemas, migrations, or key configuration
- permissions, security, audit, tenancy, or risk boundaries
- architecture boundaries, dependency direction, deployment, or runtime constraints

## Discussion Promotion

Promote stable discussion or proposal conclusions into official docs. After promotion, mark the source as Superseded and set `graduated_to`.
