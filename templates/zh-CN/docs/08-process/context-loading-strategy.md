---
status: Current
kind: process
trigger: 控制上下文规模与 token 成本
required_when: []
optional_when:
  - "面临超预算上下文加载"
do_not_use_when:
  - "用户只问一个无需读取仓库的直接问题"
must_read_with: []
---

# 上下文加载策略

> 建议先加载能完成当前判断的最小集，而不是默认把所有入口都读一遍。预算是提示，不是绝对硬上限；复杂问题可以突破，但应说明原因和停止条件。

## 默认预算

- **最小加载集**：目标 ≤ 2k tokens
- **标准实施集**：目标 ≤ 5k tokens
- **扩展调查集**：目标 ≤ 8k tokens
- **超过扩展预算**：说明原因，优先摘要化或分解任务，不继续盲读

## 加载层级

### 最小加载集

- SESSION 当前状态区段
- AGENTS 最小入口
- 一个直接相关的过程文档

### 标准实施集

- 最小加载集
- 一份正式设计文档
- 受影响代码 / 测试 / 最近失败信息

### 扩展调查集

- 标准实施集
- 第二份设计文档或项目看板
- 必要的历史基线 / 回归摘要

## 场景建议

| 场景 | 建议加 | 按需加 | 目标预算 |
|------|------|--------|---------|
| 新功能 | SESSION + ai-collaboration-protocol + design-gate | 1 份设计文档、planning | 5k |
| bug 修复 | SESSION + debugging | failure log、tdd | 5k |
| 收口审查 | SESSION + ai-collaboration-protocol | review、git-protocol | 3k |
| 持续开发 | SESSION + AGENTS + ai-collaboration-protocol | 1 份权威文档 | 4k |
| 用户明确要求 autopilot | SESSION + autopilot + 当前过程文档 | review / planning | 4k |

## 停止扩张条件

- 权威来源已经明确，但还在继续读同类长文档
- 为回答单一问题需要加载 >2 份长设计文档
- 需要引用历史资料时，先摘要化再继续
- 预计超过扩展预算时，说明原因并分解任务