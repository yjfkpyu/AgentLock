---
status: Current
owner: docs-template
last_verified: 2026-05-04
---

# Web SaaS Profile

适用于 Web 应用、SaaS 控制台、B2B 后台、运营管理系统和带前后端协作的服务型项目。

## 最小起步文档

- [../../AGENTS.md](../../AGENTS.md)
- [../../SESSION.md](../../SESSION.md)
- [../../docs/README.md](../../docs/README.md)
- [../../docs/01-vision/README.md](../../docs/01-vision/README.md)
- [../../docs/02-requirements/PRD.md](../../docs/02-requirements/PRD.md)
- [../../docs/03-architecture/system-architecture.md](../../docs/03-architecture/system-architecture.md)
- [../../docs/04-design/external-api-spec.md](../../docs/04-design/external-api-spec.md)
- [../../docs/04-design/data-model.md](../../docs/04-design/data-model.md)
- [../../docs/04-design/safety-governance.md](../../docs/04-design/safety-governance.md)
- [../../docs/07-frontend/README.md](../../docs/07-frontend/README.md)
- [../../docs/07-frontend/user-personas.md](../../docs/07-frontend/user-personas.md)
- [../../docs/05-project/feature-registry.md](../../docs/05-project/feature-registry.md)

## 建议启用

| 文档 | 处理方式 | 原因 |
|------|----------|------|
| docs/04-design/storage-schema.md | 启用 | SaaS 通常需要持久化模型、迁移和数据隔离说明 |
| docs/06-dev-guide/deployment-architecture.md | 启用 | 环境、发布、回滚和配置管理是上线边界 |
| docs/05-project/risk-register.md | 启用 | 权限、数据、SLA 和发布风险需要持续跟踪 |

## 建议裁剪

| 文档 | 处理方式 | 原因 |
|------|----------|------|
| docs/04-design/agent-specs.md | 删除 / 未启用 | 除非项目存在 Agent 执行单元 |
| docs/04-design/a2a-integration-spec.md | 删除 / 未启用 | 除非存在 Agent 间通信 |
| docs/04-design/skill-syntax-spec.md | 删除 / 未启用 | 除非存在 Skill 插件体系 |

## 初始化重点

1. 先冻结角色、权限、核心流程、API 边界和数据模型。
2. 前端文档以真实工作流、信息架构和权限状态为核心，不写营销页式描述。
3. 任何影响用户可见行为的代码改动都应回查 PRD、API、数据模型和前端文档。
