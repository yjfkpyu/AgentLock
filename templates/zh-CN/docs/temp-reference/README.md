---
status: Current
owner: docs-template
last_verified: 2026-05-04
---

# 临时参考目录

本目录用于隔离存放临时参考材料，如外部文献摘要、第三方框架笔记、临时对比分析等。

> 命名、front-matter、状态统一见 [`../08-process/conventions.md`](../08-process/conventions.md)。

## 使用规则

- 放入本目录的文件不应被视为正式文档或权威来源
- AI 默认不主动读取本目录内容，除非用户明确要求
- 参考材料中的结论如需固化，应转入对应正式文档
- 不再需要的临时参考应及时清理

## 命名

- `YYYY-MM-DD-<主题>-ref.md`
- `YYYY-MM-DD-<外部来源>-notes.md`

## front-matter 模板

```yaml
---
status: Archived
kind: temp-reference
created: YYYY-MM-DD
topic: <主题简述>
---
```

