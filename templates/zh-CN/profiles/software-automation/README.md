---
status: Current
owner: docs-template
last_verified: 2026-05-04
---

# Software Automation Profile

适用于自动化操作软件、桌面应用控制、浏览器自动化、UI 学习、CLI 编排、RPA 或本地工作流执行器。

## 最小起步文档

- [../../AGENTS.md](../../AGENTS.md)
- [../../SESSION.md](../../SESSION.md)
- [../../docs/README.md](../../docs/README.md)
- [../../docs/02-requirements/PRD.md](../../docs/02-requirements/PRD.md)
- [../../docs/02-requirements/use-cases.md](../../docs/02-requirements/use-cases.md)
- [../../docs/03-architecture/system-architecture.md](../../docs/03-architecture/system-architecture.md)
- [../../docs/04-design/external-api-spec.md](../../docs/04-design/external-api-spec.md)
- [../../docs/04-design/runtime-control-plane-spec.md](../../docs/04-design/runtime-control-plane-spec.md)
- [../../docs/04-design/safety-governance.md](../../docs/04-design/safety-governance.md)
- [../../docs/06-dev-guide/SPEC.md](../../docs/06-dev-guide/SPEC.md)
- [../../docs/05-project/feature-registry.md](../../docs/05-project/feature-registry.md)

## 建议启用

| 文档 | 处理方式 | 原因 |
|------|----------|------|
| docs/04-design/sample-scenarios-architecture-refinement.md | 启用 | 自动化软件需要冻结代表性场景、动作序列和失败恢复 |
| docs/04-design/safety-governance.md | 启用 | 自动操作必须定义权限、确认、回滚和禁止动作 |
| docs/05-project/risk-register.md | 启用 | 高风险操作、环境差异和不可逆动作需要登记 |
| docs/07-frontend/README.md | 按需改写 | 若有操作台、回放视图或审批面板则启用 |

## 建议裁剪

| 文档 | 处理方式 | 原因 |
|------|----------|------|
| docs/04-design/agent-specs.md | 按需保留 | 只有存在多个自动化执行单元时启用 |
| docs/04-design/a2a-integration-spec.md | 删除 / 未启用 | 无 Agent 间协作协议时不保留 |
| docs/04-design/skill-syntax-spec.md | 按需保留 | 存在用户可编辑自动化技能时启用 |

## 初始化重点

1. 区分开源软件 CLI / API 自动化与闭源软件 UI 学习 / UI 镜像路径。
2. 在 safety-governance 中写清高风险动作、确认点、撤销策略和审计证据。
3. 在 sample-scenarios 中冻结 3-5 个代表性任务，用于校验动作模型和失败恢复。
4. 在 SESSION 中记录当前可真实执行的自动化入口，不把愿景写成代码现实。
