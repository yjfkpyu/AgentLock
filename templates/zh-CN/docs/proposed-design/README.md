---
status: Current
owner: docs-template
last_verified: 2026-05-04
---

# 建议设计目录

本目录用于存放尚未转正的候选设计稿。

> 命名、front-matter、状态、转正流程统一见 [`../08-process/conventions.md`](../08-process/conventions.md)。

## 适用场景

- 正式进入实现前，需要对对象契约、模块边界或交互方式做多轮收敛
- 主题已经超出普通讨论稿粒度，但仍未达到正式规范稳定度

## 使用规则

- proposed-design 不是正式基线
- 设计一旦稳定，应转入对应正式文档，并同步处理旧稿状态
- 不要让 proposed-design 长期承担权威来源角色

## 命名

- `YYYY-MM-DD-<主题>-proposal.md`

## front-matter 模板

```yaml
---
status: Draft
kind: proposed-design
created: YYYY-MM-DD
topic: <主题简述>
feature_ref: ["F-xxx"]
graduated_to: ""
---
```

