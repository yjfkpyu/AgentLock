# Release Notes

## v0.1.0 - Initial bilingual template release

AgentLockDoc is an AI-native documentation template system that keeps coding agents aligned with the current truth of a codebase.

### Highlights

- Complete Chinese template under `templates/zh-CN`
- Complete English template under `templates/en-US`
- `AGENTS.md` project entrypoint for AI coding agents
- `SESSION.md` current-truth snapshot for cross-session handoff
- Status / Track / Risk / front-matter conventions
- Feature registry, stage view, evolution backlog, doc-code map, and ADR template
- Starter profiles: Agent Platform, CLI Tool, Web SaaS, Library / SDK, Software Automation
- Zero-dependency validation script for template structure and links
- MIT License

### Recommended first use

```bash
cp -R templates/en-US/. /path/to/your-project/
cd /path/to/your-project
node scripts/validate-docs.mjs
```

Chinese projects can use:

```bash
cp -R templates/zh-CN/. /path/to/your-project/
```

### Notes

The base templates have no real code paths, so `no document declares code_owns yet` is expected until the template is installed in a real project.
