---
status: Current
owner: docs-template
last_verified: 2026-05-04
---

# 计划文档目录

本目录用于存放实施计划、设计计划、分阶段执行计划等中间文档。

> 命名、front-matter、状态、转正流程统一见 [`../08-process/conventions.md`](../08-process/conventions.md)。

## 使用规则

- 计划文档只描述怎么做，不承担最终事实来源职责
- 计划完成后，如仍保留，应在 front-matter 将 `status` 改为 `Archived`
- 计划文档应与实际正式文档或实现工作建立明确对应关系
- 进入活跃执行的计划同步加入 [docs/README.md](../README.md) 索引，避免只存在于目录而没有导航入口

## 切片粒度建议

- 推荐 **1 个可执行切片 = 1 个计划文件**
- 计划文件应通过 `feature_ref` 关联到 [核心功能登记册](../05-project/feature-registry.md) 的 F-xxx ID
- 一个功能需要多个切片时，可使用同一前缀命名和递增编号

## 与当前状态的关系

- 计划进入当前工作后，应在 [SESSION.md](../../SESSION.md) 的 Active Work 或 Next Intended Change 中体现
- 计划完成或被替代后，应同步更新 feature-registry 中的功能状态、相关代码入口和最后验证证据

## 命名

- `YYYY-MM-DD-<主题>-plan.md`
- `YYYY-MM-DD-<主题>-design.md`

## front-matter 模板

```yaml
---
status: Draft
kind: plan
created: YYYY-MM-DD
topic: <主题简述>
feature_ref: ["F-xxx"]
graduated_to: ""
---
```

