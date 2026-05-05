---
status: Current
owner: docs-template
last_verified: YYYY-MM-DD
---

# Project Documentation Index

> Root entrypoint: `../AGENTS.md`. This file is the full official documentation index.

## Usage

- Not every project must enable every folder.
- Use `../profiles/README.md` to choose a starting scope.
- Status values are defined in `08-process/conventions.md`.

## Official Layers

| Layer | Directory | Purpose |
|-------|-----------|---------|
| 1 | `01-vision`, `02-requirements` | why and what |
| 2 | `03-architecture` | system and integration architecture |
| 3 | `04-design` | detailed design templates |
| 4 | `05-project` | feature registry, roadmap, ADR, risks |
| 5 | `06-dev-guide` | engineering rules, testing, deployment |
| 6 | `07-frontend` | UI, CLI, HMI, or operation surface |
| 7 | `08-process` | process library loaded on demand |

## Intermediate Artifacts

| Directory | Purpose |
|-----------|---------|
| `discussions` | exploratory notes and comparisons |
| `plans` | implementation and design plans |
| `proposed-design` | candidate designs |
| `temp-reference` | temporary external references |

## Traceability Chain

```text
feature-registry (F-xxx) -> Current authority docs -> code entrypoints -> SESSION current reality
```
