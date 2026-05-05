---
status: Current
kind: process
trigger: 任务复杂、需要显式阶段控制
required_when: []
optional_when:
  - "跨多个模块、需要探索→设计→计划→实施→审查→反思完整闭环"
do_not_use_when:
  - "普通持续开发任务优先使用 ai-collaboration-protocol.md"
must_read_with: ["docs/08-process/ai-collaboration-protocol.md"]
---

# 主开发管道

> 可选开发管道。普通持续开发任务优先使用 [ai-collaboration-protocol.md](ai-collaboration-protocol.md)；本文件用于任务复杂、需要显式阶段控制时。

## 管道阶段

```
探索 → 设计 → 计划 → 实施 → 审查 → 反思
```

### 1. 探索（Explore）

- 读取 SESSION.md 确认 Current Code Reality、Active Work 和 Next Intended Change
- 读取 AGENTS.md 分发表确定任务类型和文档可信度规则
- 按需加载本目录下对应的过程文档
- 优先按 [context-loading-strategy.md](context-loading-strategy.md) 加载最小集，避免默认读取完整索引和多份长文档
- 搜索代码库建立上下文（用 semantic_search / grep_search）

### 2. 设计（Design）

- **新功能 / 新模块**：建议先读 [design-gate.md](design-gate.md)，确认边界后再继续
- **Bug 修复**：跳过设计，直接进入实施阶段的调试流程
- **收口 / 优化**：确认现有设计边界，不引入新概念

### 3. 计划（Plan）

- 复杂任务可读 [planning.md](planning.md) 确认可执行粒度
- 单个任务切片应在 1-2 轮对话内可完成
- 同类微切片连续较多时应复核是否需要合并规划

### 4. 实施（Implement）

- 高风险或核心逻辑变更建议读 [tdd.md](tdd.md)，先写测试再写实现
- Bug 修复先读 [debugging.md](debugging.md)
- 实施完毕必须跑回归验证

### 5. 审查（Review）

- 读 [ai-collaboration-protocol.md](ai-collaboration-protocol.md) 或 [review.md](review.md) 执行收口
- 如影响后续开发判断，更新 SESSION.md 当前状态

### 6. 反思（Reflect）

- 复杂问题或重复问题可读 [reflection.md](reflection.md)
- 仅在反思会改变后续开发方式时写入 SESSION.md
