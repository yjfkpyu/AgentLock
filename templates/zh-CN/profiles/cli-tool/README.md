---
status: Current
owner: docs-template
last_verified: 2026-05-04
---

# CLI Tool Profile

适用于命令行工具、离线脚本、开发者工具和本地自动化程序。

## 最小起步文档

- [../../AGENTS.md](../../AGENTS.md)
- [../../SESSION.md](../../SESSION.md)
- [../../docs/README.md](../../docs/README.md)
- [../../docs/02-requirements/PRD.md](../../docs/02-requirements/PRD.md)
- [../../docs/02-requirements/use-cases.md](../../docs/02-requirements/use-cases.md)
- [../../docs/03-architecture/system-architecture.md](../../docs/03-architecture/system-architecture.md)
- [../../docs/04-design/external-api-spec.md](../../docs/04-design/external-api-spec.md)
- [../../docs/05-project/feature-registry.md](../../docs/05-project/feature-registry.md)
- [../../docs/06-dev-guide/SPEC.md](../../docs/06-dev-guide/SPEC.md)
- [../../docs/06-dev-guide/testing-strategy.md](../../docs/06-dev-guide/testing-strategy.md)

## 建议启用

| 文档 | 处理方式 | 原因 |
|------|----------|------|
| docs/04-design/external-api-spec.md | 改写为 CLI 接口规范 | 冻结命令、参数、退出码、stdout/stderr 和配置优先级 |
| docs/06-dev-guide/deployment-architecture.md | 改写为发布分发说明 | 覆盖安装、升级、兼容版本和二进制分发 |
| docs/05-project/doc-code-map.md | 启用 | 命令入口改动通常需要同步 CLI 规范 |

## 建议裁剪

| 文档 | 处理方式 | 原因 |
|------|----------|------|
| docs/07-frontend/README.md | 删除 / 未启用 | 无图形界面时不保留高注意力入口 |
| docs/04-design/agent-specs.md | 删除 / 未启用 | 无 Agent 执行单元 |
| docs/04-design/runtime-control-plane-spec.md | 合并 / 未启用 | 简单 CLI 通常不需要独立控制面 |

## 初始化重点

1. 先冻结命令表、参数兼容策略、退出码和错误输出格式。
2. 把用户可见行为写入 PRD 或 CLI 接口规范，不散落在 README 示例里。
3. testing-strategy 至少覆盖命令级 golden test、错误输入和配置优先级。
