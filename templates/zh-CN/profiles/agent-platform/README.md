---
status: Current
owner: docs-template
last_verified: 2026-05-04
---

# Agent Platform Profile

适用于包含 Agent、技能、工具调用、记忆、任务编排或多执行单元协作的平台型项目。

## 最小起步文档

- [../../AGENTS.md](../../AGENTS.md)
- [../../SESSION.md](../../SESSION.md)
- [../../docs/README.md](../../docs/README.md)
- [../../docs/02-requirements/glossary.md](../../docs/02-requirements/glossary.md)
- [../../docs/03-architecture/system-architecture.md](../../docs/03-architecture/system-architecture.md)
- [../../docs/04-design/agent-specs.md](../../docs/04-design/agent-specs.md)
- [../../docs/04-design/task-capability-architecture-and-evolution.md](../../docs/04-design/task-capability-architecture-and-evolution.md)
- [../../docs/04-design/runtime-control-plane-spec.md](../../docs/04-design/runtime-control-plane-spec.md)
- [../../docs/04-design/safety-governance.md](../../docs/04-design/safety-governance.md)
- [../../docs/05-project/feature-registry.md](../../docs/05-project/feature-registry.md)
- [../../docs/05-project/evolution-backlog.md](../../docs/05-project/evolution-backlog.md)

## 建议启用

| 文档 | 处理方式 | 原因 |
|------|----------|------|
| docs/04-design/mcp-interface-spec.md | 按需启用 | 项目暴露 MCP 工具、资源或提示词时启用 |
| docs/04-design/a2a-integration-spec.md | 按需启用 | 存在 Agent 间协议或跨 Agent 调用时启用 |
| docs/04-design/skill-syntax-spec.md | 按需启用 | 存在可配置 Skill 文件时启用 |
| docs/07-frontend/README.md | 按需改写 | 有控制台、工作台或审计 UI 时启用 |

## 建议裁剪

| 文档 | 处理方式 | 原因 |
|------|----------|------|
| docs/04-design/storage-schema.md | 按需保留 | 只有存在持久化记忆、索引或审计库时才细化 |
| docs/04-design/external-api-spec.md | 按需保留 | 无外部 API 时不设为当前权威 |

## 初始化重点

1. 先在 glossary 中冻结 Agent、Skill、Tool、Capability、Memory 等术语。
2. 在 feature-registry 中标明 NOW / BOTH / LATER，避免平台远期能力污染当前切片。
3. 在 safety-governance 中写清权限、审批、工具边界和不可自动执行动作。
4. 在 SESSION 中记录当前真实代码入口，不用愿景填充 Current Code Reality。
