---
status: Current
kind: process
trigger: 新功能、新模块、对外契约或高风险边界变化
required_when:
  - "新增功能模块 / 外部 API 端点 / 存储表 / 跨模块交互路径"
optional_when:
  - "中等风险行为变化或需要先冻结边界"
do_not_use_when:
  - "Bug 修复、文档同步、小范围收口任务"
must_read_with: ["docs/08-process/ai-collaboration-protocol.md"]
---

# 设计门禁

> 新功能、新模块、对外契约或高风险边界变化建议先通过本检查。Bug 修复、文档同步和小范围收口任务通常可跳过。

## 触发条件

- 新增功能模块（不是修改现有模块的行为）
- 新增外部 API 端点
- 新增存储表或重大 schema 变更
- 新增跨模块交互路径

## 建议回答的问题

1. **边界**：这个功能的输入、输出和责任边界是什么？不做什么？
2. **权威文档**：对应的正式设计文档是哪个？是否需要先更新设计？
3. **影响范围**：会影响哪些现有模块？需要修改哪些既有接口？
4. **测试策略**：怎么测试？最少需要哪些测试用例？
5. **回退方案**：如果实施后发现方向错误，怎么回退？

## 设计记录

如果回答结果会影响后续实现，应记录到以下位置之一：

- 对应 Current 权威设计文档
- `docs/05-project/feature-registry.md` 的功能备注或权威文档字段
- `SESSION.md` 的 Active Work、Next Intended Change 或 Known Drift / Open Questions

## 与 superpowers 的关系

若已安装 `brainstorming` skill，可用于展开门禁问题的探索。本文档定义必须回答的问题，skill 提供具体引导方式。
