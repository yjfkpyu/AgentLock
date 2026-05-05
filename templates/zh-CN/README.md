---
status: Current
owner: docs-template
last_verified: 2026-05-05
---

# AgentLock 中文模板

> 这是 AgentLockDoc 的中文项目内模板。复制本目录下的全部内容到你的项目根目录后，AI 应以 [AGENTS.md](AGENTS.md) 作为项目总入口，以 [SESSION.md](SESSION.md) 作为当前事实快照。

## 这个 README 的角色

本文只说明“如何使用这份模板”。复制到真实项目后，项目的 AI 工作入口仍然是 [AGENTS.md](AGENTS.md)，正式文档索引是 [docs/README.md](docs/README.md)。

保留本文的好处：

- 人类浏览模板目录时能快速知道该复制什么
- AI 打开模板目录时能先理解模板意图，再转入 AGENTS / SESSION
- 避免把开源仓库根目录 README 和项目内模板入口混淆

## 快速使用

```bash
cp -R templates/zh-CN/. /path/to/your-project/
cd /path/to/your-project
node scripts/validate-docs.mjs
```

如果你已经在本目录内：

```bash
cp -R . /path/to/your-project/
```

## 初始化顺序

1. 填写 [AGENTS.md](AGENTS.md)：项目定位、权威入口、AI 任务分发
2. 填写 [SESSION.md](SESSION.md)：当前阶段、代码现实、下一步、已知漂移
3. 阅读 [docs/README.md](docs/README.md)：确认正式文档索引和启用范围
4. 选择项目类型：[profiles/README.md](profiles/README.md)
5. 填写 [docs/02-requirements/glossary.md](docs/02-requirements/glossary.md)：核心术语
6. 填写 [docs/05-project/feature-registry.md](docs/05-project/feature-registry.md)：功能范围、状态、权威文档、代码入口和验证证据
7. 按需启用 [docs/05-project/doc-code-map.md](docs/05-project/doc-code-map.md) 与 `code_owns`
8. 运行 `node scripts/validate-docs.mjs`

## AI 默认入口

给 AI 的最小提示：

```text
请先阅读 AGENTS.md、SESSION.md、docs/README.md，以及当前任务相关的 Current 权威文档。
遵守 docs/08-process/conventions.md 中的 Status / Track / Risk / front-matter 规则。
完成后运行 node scripts/validate-docs.mjs，并说明验证结果、文档影响和下一步。
```

## 目录说明

| 路径 | 作用 |
|------|------|
| [AGENTS.md](AGENTS.md) | AI 项目总入口 |
| [SESSION.md](SESSION.md) | 当前项目事实快照 |
| [DOCS_MAINTENANCE.md](DOCS_MAINTENANCE.md) | 文档维护规则 |
| [NEW_PROJECT_CHECKLIST.md](NEW_PROJECT_CHECKLIST.md) | 新项目初始化清单 |
| [docs/](docs/README.md) | 正式文档与中间产物目录 |
| [profiles/](profiles/README.md) | 项目类型裁剪建议 |
| [scripts/](scripts/README.md) | 文档自检脚本与扩展指南 |
