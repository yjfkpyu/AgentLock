---
status: Current
kind: process
trigger: 项目需要严格审计 AI 变更历史 / 启用 checkpoint
required_when:
  - "项目明确启用 checkpoint 协议"
optional_when:
  - "多轮 AI 开发需要更细提交审计"
do_not_use_when:
  - "没有启用 checkpoint 的轻量项目"
must_read_with: []
---

# Git Checkpoint 协议

> 可选增强协议。适用于项目需要严格审计 AI 变更历史时；默认持续开发只要求提交范围、验证和文档影响表述清楚。本文只提供参考格式，项目可按团队习惯调整。

## 提交边界

- 一次 commit 尽量只承载一个清晰工作项或一个显式文档 / 治理任务
- 不混入无关重构、格式化或另一工作项变更
- 发现无关变更时，先拆分工作树，再提交

## 提交信息参考格式

项目启用 checkpoint 协议时，推荐 subject 能回溯到功能或治理任务，例如：

```text
F-001 | implement feature work
META  | harden process rules
```

其中 `F-xxx` 关联功能登记册，`META` 表示显式文档 / 治理 / 模板任务。如果项目不使用该约定，应在本文中记录项目自己的 commit 习惯。

## 提交正文建议字段

- `Scope:` 变更范围
- `Tests:` 跑过的测试或 docs-only 说明
- `Docs:` 是否同步权威文档，或无需同步的原因
- `Next:` 下一步或暂停原因

项目如需额外字段（如 `Review:`）可自行扩展。

## 何时应拆分提交

- 同时修改多个无关功能或工作项
- 产品代码与无关文档治理混在一起
- 生成物或格式化变更掩盖真实改动

## 提交前检查

- working tree 只剩当前任务相关变更
- 下一步或暂停原因已明确
- 需要同步的权威文档已同步或在 SESSION 中记录原因
