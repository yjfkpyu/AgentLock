---
status: Current
kind: process
trigger: 用户明确要求 autopilot / 连续自动执行
required_when: []
optional_when:
  - "用户明确说出 autopilot / 自动推进 / 继续自动执行"
do_not_use_when:
  - "任务处于 High / Critical 风险"
  - "SESSION.md 尚未写清 Active Work / Next Intended Change"
must_read_with: ["docs/08-process/ai-collaboration-protocol.md", "docs/08-process/review.md"]
---

# Autopilot 自动执行协议

> 高级可选能力。仅在用户明确开启时，允许在有边界的预算窗口内连续执行；默认模板不依赖 autopilot。
> 本文只列最小启用规则；具体收口标准沿用 [ai-collaboration-protocol.md](ai-collaboration-protocol.md) 与 [review.md](review.md)，不在此重复。

## 启动条件

- 用户明确说出 "autopilot" / "自动推进" / "继续自动执行"
- [SESSION.md](../../SESSION.md) 已写清 Active Work、Next Intended Change
- 当前任务不处于 High / Critical 风险

## 预算窗口

- 用户未指定次数：默认 3 个工作项
- 用户明确指定（如 "自动推进 5 次"）：按指定次数计数
- 每完成并收口 1 个工作项，剩余预算减 1；为 0 时自动暂停汇报
- 预算只对当前 window 有效；新一轮 autopilot 需新的明确授权

## 风险门禁

| 级别 | 是否可自动继续 |
|------|----------------|
| Low / Medium | 可，按 ai-collaboration-protocol 收口 |
| High / Critical | 否，立即退出 autopilot 等待用户确认 |

风险升级、Backlog 项需要插队、下一步主线变化、权威文档冲突时，立即暂停说明，不得用剩余预算继续。

## 执行循环

1. 读 SESSION → 确定 Next Intended Change 和风险级别
2. 按需加载过程文档（参考 [context-loading-strategy.md](context-loading-strategy.md)）
3. 执行 → 按 [ai-collaboration-protocol.md](ai-collaboration-protocol.md) 收口
4. 若影响后续判断，更新 SESSION
5. 剩余预算 > 0 且未触发退出条件，继续；否则暂停汇报

## 收口回复要求

每个工作项完成后必须包含：完成项、验证证据、文档影响、下一步、剩余预算（如 "已完成 2/5，剩余 3"）。
