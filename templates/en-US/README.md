---
status: Current
owner: docs-template
last_verified: 2026-05-05
---

# AgentLock English Template

> This is the English project-local template from AgentLockDoc. After copying this directory's contents into a project root, AI agents should use [AGENTS.md](AGENTS.md) as the project entrypoint and [SESSION.md](SESSION.md) as the current truth snapshot.

## Role of This README

This file explains how to use the template package. After installation in a real project, the AI work entrypoint remains [AGENTS.md](AGENTS.md), and the official documentation index remains [docs/README.md](docs/README.md).

Keeping this file helps because:

- humans browsing the template directory can quickly see what to copy
- AI agents opening the template directory can understand the template intent before reading AGENTS / SESSION
- the repository-level README and the project-local template entrypoint stay clearly separated

## Quick Start

```bash
cp -R templates/en-US/. /path/to/your-project/
cd /path/to/your-project
node scripts/validate-docs.mjs
```

If you are already inside this directory:

```bash
cp -R . /path/to/your-project/
```

## Initialization Order

1. Fill [AGENTS.md](AGENTS.md): project positioning, authority map, AI task routing
2. Fill [SESSION.md](SESSION.md): current phase, code reality, next change, known drift
3. Read [docs/README.md](docs/README.md): official docs index and enabled scope
4. Choose a project type: [profiles/README.md](profiles/README.md)
5. Fill [docs/02-requirements/glossary.md](docs/02-requirements/glossary.md): core terms
6. Fill [docs/05-project/feature-registry.md](docs/05-project/feature-registry.md): feature scope, state, authority docs, code entrypoints, validation evidence
7. Enable [docs/05-project/doc-code-map.md](docs/05-project/doc-code-map.md) and `code_owns` when real code paths exist
8. Run `node scripts/validate-docs.mjs`

## Default AI Entrypoint

Minimal prompt for AI agents:

```text
Read AGENTS.md, SESSION.md, docs/README.md, and the Current source-of-truth document related to this task.
Follow Status / Track / Risk / front-matter rules in docs/08-process/conventions.md.
At close-out, run node scripts/validate-docs.mjs and report validation results, documentation impact, and next steps.
```

## Directory Guide

| Path | Role |
|------|------|
| [AGENTS.md](AGENTS.md) | AI project entrypoint |
| [SESSION.md](SESSION.md) | current project truth snapshot |
| [DOCS_MAINTENANCE.md](DOCS_MAINTENANCE.md) | documentation maintenance rules |
| [NEW_PROJECT_CHECKLIST.md](NEW_PROJECT_CHECKLIST.md) | new project initialization checklist |
| [docs/](docs/README.md) | official docs and intermediate artifacts |
| [profiles/](profiles/README.md) | project-type trimming guidance |
| [scripts/](scripts/README.md) | validation script and extension guide |
