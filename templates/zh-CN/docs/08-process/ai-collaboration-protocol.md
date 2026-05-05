---
status: Current
kind: process
trigger: AI 持续开发、轻量收口、防文档与代码脱钩
required_when:
  - "任何会影响后续开发判断的代码或文档变更"
optional_when:
  - "轻量文档调整 / docs-only"
do_not_use_when:
  - "仅为探索、未计划输出代码或文档的调研会话"
must_read_with: ["docs/08-process/conventions.md"]
---

# AI 协作协议

> 面向 AI 持续开发的最小协作协议。目标是续上上下文、验证当前事实、防止文档和代码脱钩。

## 开始任务前

AI 默认只需确认四件事：

1. 当前项目状态与当前阶段范围：读取根目录 `SESSION.md`，特别是 Current Scope
2. 文档导航和启用范围：读取 `docs/README.md`
3. 当前任务的唯一权威文档：优先读取状态为 Current 的正式文档
4. 功能状态：任务涉及功能范围时读取 `docs/05-project/feature-registry.md`，确认 `Track` 是 NOW / BOTH / LATER

若这些入口互相冲突，先记录到 `SESSION.md` 的 Known Drift / Open Questions，不要假装已经明确。

### 开工前 dry-run

当任务涉及 Medium 以上风险、跨多个文档 / 模块、外部接口、数据模型、权限、安全、部署或不可逆操作时，动手前先做一次 3-5 行 dry-run：

1. 预计要修改哪些文件或模块
2. 依赖的 Current 权威文档是哪几份
3. 可能触发的文档同步点是什么
4. 准备如何验证
5. 是否存在需要用户确认的 High / Critical 风险

Low 风险、小范围 docs-only 或用户明确要求直接执行的任务，可把 dry-run 压缩为一句话工作说明。

## 实施中

- 优先相信代码中的当前事实，但不要忽略正式文档中的契约和边界
- 如果代码与文档冲突，先判断是代码未实现、文档过时，还是计划尚未落地
- 如果发现任务内容属于当前阶段不做的 LATER 范围，先登记到 `docs/05-project/evolution-backlog.md` 或说明已有条目，不直接实现
- 如果功能是 BOTH，只实现当前阶段最小切片；后续扩展写入 evolution-backlog
- 不默认读取历史讨论稿、归档文档、临时参考材料，除非需要追溯背景
- 过程方法如 TDD、调试流程、切片规划、autopilot 均按需启用

## 需要同步文档的变更

判断标准统一遵循 [DOCS_MAINTENANCE.md](../../DOCS_MAINTENANCE.md) 第 10.1 节《代码变更何时必须同步文档》，本文不再重复列出，避免出现两份口径。

## 收口时

简要回答四个问题即可：

1. 完成了什么
2. 如何验证
3. 是否影响权威文档，已更新或为何无需更新
4. 下一步是什么，是否需要更新 `SESSION.md`

## 何时暂停

- 文档状态为 Draft / Unverified / Superseded，但任务要求按其实现
- 当前入口、功能登记册、代码现实互相冲突
- 变更进入 High / Critical 风险
- 需要产品、架构、安全或数据口径决策
- 继续推进会让文档和代码漂移更严重