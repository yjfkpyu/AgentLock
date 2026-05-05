---
status: Current
owner: docs-template
last_verified: 2026-05-04
---

# 开发过程方法论

> 本目录是按需使用的过程库，不是默认必读清单。模板的核心目标是防文档漂移和支持 AI 持续开发；自动驾驶、严格 TDD、切片审计等能力仅在项目需要时启用。

## 文件索引

| 文档 | 触发场景 | 行数上限 |
|------|---------|---------|
| [conventions.md](conventions.md) | 状态 / Track / 风险 / front-matter / 命名 / doc↔code 映射的唯一术语源 | n/a |
| [ai-collaboration-protocol.md](ai-collaboration-protocol.md) | AI 继续开发、轻量收口、防文档漂移 | 80 |
| [workflow.md](workflow.md) | 复杂任务需要阶段化推进时 | 60 |
| [design-gate.md](design-gate.md) | 新功能 / 新模块 / 契约变化 | 50 |
| [planning.md](planning.md) | 大任务或跨模块任务分解 | 60 |
| [tdd.md](tdd.md) | 高风险代码、核心逻辑或修 bug | 60 |
| [debugging.md](debugging.md) | 遇到 bug 或测试失败 | 50 |
| [review.md](review.md) | 高风险或契约变更收口 | 60 |
| [reflection.md](reflection.md) | 重复问题、阶段复盘或流程修正 | 60 |
| [autopilot.md](autopilot.md) | 用户明确要求连续自动执行 | 80 |
| [git-protocol.md](git-protocol.md) | Git checkpoint / 提交约定 | 50 |
| [context-loading-strategy.md](context-loading-strategy.md) | 控制上下文规模与 token 成本 | 60 |

## 使用原则

- **项目文档定义当前真相**：做什么、做到哪里、哪些文档可信、代码现实是什么
- **过程文档定义可选方法**：如何计划、测试、调试、收口或自动推进
- **默认只读最小集**：避免默认加载全索引、多个长文档或无关历史材料
- **强制项越少越好**：只有防过时误读、防文档漂移和高风险动作暂停应作为默认硬约束

## Superpowers 兼容声明

本目录的过程方法论与 [obra/superpowers](https://github.com/obra/superpowers) 技能框架兼容：

- **已安装 superpowers 时**：skills 作为过程层增强执行器，补具体步骤与质量门禁
- **未安装时**：本目录提供等效方法论指导，不依赖外部技能
- **冲突优先级**：当前代码现实 + Current 权威文档 > 项目过程文档 > superpowers skills > AI 默认行为
