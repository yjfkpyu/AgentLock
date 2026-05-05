---
status: Current
owner: docs-template
last_verified: 2026-05-04
---

# 讨论文档目录

本目录用于存放讨论稿、比较稿、探索稿、吸收评估稿等非正式文档。

> 命名、front-matter、状态、转正流程统一见 [`../08-process/conventions.md`](../08-process/conventions.md)。

## 使用规则

- 讨论稿可以推动正式文档演进，但不能长期替代正式文档
- 讨论结论稳定后，应转入对应正式文档，并按 conventions §7 处理原稿
- 转正后，原稿 front-matter 应改为 `status: Superseded` 并回填 `graduated_to`

## 命名

- `YYYY-MM-DD-<主题>.md`（例如 `2026-05-04-routing-strategy.md`）

## front-matter 模板

```yaml
---
status: Draft
kind: discussion
created: YYYY-MM-DD
topic: <主题简述>
feature_ref: []
graduated_to: ""
---
```

