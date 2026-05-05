---
status: Current
kind: process
trigger: 高风险、跨模块或契约变更收口
required_when:
  - "High / Critical 风险任务"
  - "修改 AGENTS / 权限 / 安全 / 策略相关文档或代码"
optional_when:
  - "跨多个模块或出现未计划重构"
do_not_use_when:
  - "普通 Low / Medium 任务默认使用 ai-collaboration-protocol.md 轻量收口"
must_read_with: ["docs/08-process/ai-collaboration-protocol.md"]
---

# 代码审查与收口

> 可选增强收口协议。普通任务可使用 [ai-collaboration-protocol.md](ai-collaboration-protocol.md) 的四问轻量收口；高风险、跨模块或契约变更再使用本文件。

## 收口协议（Close-Out） {#close-out}

### 标准检查项

1. **测试通过**：所有新增测试绿色，受影响回归通过，并给出命令或结果摘要
2. **SESSION 更新**：若变更影响后续开发判断，Current Code Reality、Next Intended Change、Known Drift 已同步
3. **文档同步**：若影响 API、数据模型、配置、部署、权限、安全、架构边界、用户行为或验收标准，对应权威文档已同步
4. **Git checkpoint**：若项目启用 checkpoint 协议，遵循 [git-protocol.md](git-protocol.md)
5. **审查结论**：至少完成自审；满足升级条件时完成独立复审
6. **收口回复**：包含本次完成项、测试 / 证据、文档影响、下一步、执行状态

### 收口回复模板

```
本次完成：[任务描述]
测试 / 证据：[命令或摘要]
审查结论：self-review 通过 / independent-review 通过 / 因[原因]暂停
下一步：[下一步动作或暂停原因]
状态：默认暂停等待指令 / autopilot 继续推进 / 因[原因]阻塞暂停
```

## 审查升级条件

- High / Critical 风险任务
- 修改本目录、AGENTS、权限 / 安全 / 策略相关文档或代码
- 跨多个模块或出现未计划重构

## 代码审查检查项

- [ ] 变更符合当前工作项的目标和验收口径
- [ ] 没有引入未计划的功能或重构
- [ ] 新代码有对应测试，或明确说明 docs-only / 无需测试的理由
- [ ] 没有硬编码运行时设置
- [ ] 没有明显安全风险（OWASP Top 10）
- [ ] 文档如有变更，已同步更新入口索引
- [ ] Git checkpoint 符合 [git-protocol.md](git-protocol.md)（若项目启用）

## 与 superpowers 的关系

若已安装 `requesting-code-review` skill，该 skill 提供更全面的审查流程。本文档定义项目级最小收口标准。
