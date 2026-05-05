---
status: Current
owner: docs-template
last_verified: 2026-05-04
---

# Library / SDK Profile

适用于可被其它项目集成的库、SDK、框架、插件包或内部共享模块。

## 最小起步文档

- [../../AGENTS.md](../../AGENTS.md)
- [../../SESSION.md](../../SESSION.md)
- [../../docs/README.md](../../docs/README.md)
- [../../docs/02-requirements/PRD.md](../../docs/02-requirements/PRD.md)
- [../../docs/02-requirements/glossary.md](../../docs/02-requirements/glossary.md)
- [../../docs/03-architecture/system-architecture.md](../../docs/03-architecture/system-architecture.md)
- [../../docs/04-design/external-api-spec.md](../../docs/04-design/external-api-spec.md)
- [../../docs/06-dev-guide/SPEC.md](../../docs/06-dev-guide/SPEC.md)
- [../../docs/06-dev-guide/testing-strategy.md](../../docs/06-dev-guide/testing-strategy.md)
- [../../docs/05-project/feature-registry.md](../../docs/05-project/feature-registry.md)

## 建议启用

| 文档 | 处理方式 | 原因 |
|------|----------|------|
| docs/04-design/external-api-spec.md | 启用 | 公共 API、兼容性、错误模型和版本策略是核心契约 |
| docs/05-project/adr/README.md | 启用 | 关键 API 与依赖取舍需要保留背景 |
| docs/05-project/doc-code-map.md | 启用 | 代码入口与公开契约必须可反查 |

## 建议裁剪

| 文档 | 处理方式 | 原因 |
|------|----------|------|
| docs/07-frontend/README.md | 删除 / 未启用 | 库本身通常无交互界面 |
| docs/04-design/runtime-control-plane-spec.md | 删除 / 未启用 | 除非库包含运行态控制面 |
| docs/04-design/safety-governance.md | 按需保留 | 安全相关库必须启用，否则可合并到 SPEC |

## 初始化重点

1. 明确公共 API、兼容性承诺、版本策略和弃用流程。
2. testing-strategy 至少覆盖契约测试、兼容性测试和示例代码可运行性。
3. SPEC 中写清哪些 API 或行为属于冻结区，避免 AI 在重构时破坏兼容性。
