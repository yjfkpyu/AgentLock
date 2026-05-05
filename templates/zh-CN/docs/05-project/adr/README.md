---
status: Current
owner: docs-template
last_verified: 2026-05-04
---

# ADR 目录

本目录用于保存 Architecture Decision Record（架构决策记录）。ADR 记录“为什么这样选”，不替代 Current 权威设计文档。

## 使用规则

- 影响架构边界、数据模型、部署方式、外部接口、安全策略或关键技术选型时，建议新增 ADR。
- ADR 一旦接受，必须把最终约束同步到对应 Current 权威文档。
- ADR 可保留历史决策背景；状态变更时只更新本文档和对应 ADR，不在多个入口重复解释。

## 命名

- `ADR-<NNN>-<主题>.md`
- 示例：`ADR-001-storage-choice.md`

## 状态

| Status | 含义 |
|--------|------|
| Proposed | 已提出，尚未接受 |
| Accepted | 已接受，约束应同步到正式文档 |
| Superseded | 已被后续 ADR 替代 |
| Rejected | 已拒绝，仅保留背景 |

## 索引

| ADR | 状态 | 主题 | 替代关系 |
|-----|------|------|----------|
| [ADR-000-template.md](ADR-000-template.md) | Template | ADR 模板 | n/a |
