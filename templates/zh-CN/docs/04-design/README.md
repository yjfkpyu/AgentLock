---
status: Draft
owner: project-owner
last_verified: YYYY-MM-DD
---

# 详细设计文档组（按需启用）

本目录用于承接已经进入正式冻结阶段的详细设计文档。

它提供的是一组高复用设计样板，而不是要求所有项目都必须完整启用的固定清单。

使用原则：

- 只有当某个主题已经成为实现、评审或协作的稳定输入时，才应把它提升为正式详细设计文档
- 若项目不存在智能体、控制面、MCP、A2A、技能文件或复杂能力编排，不应为了“结构完整”而强行填写对应文档
- 对独立程序、CLI、SDK、桌面软件、嵌入式或设备控制项目，可将本目录理解为“接口、状态机、能力边界、对象流、治理规则”的专题集合
- 若某主题只处于讨论或候选阶段，应继续放在 discussions 或 proposed-design，而不是提前写进本目录
- 若项目使用某个 profile，优先按 [../../profiles/README.md](../../profiles/README.md) 中的 profile 启用清单裁剪本目录，并同步更新 [../README.md](../README.md)

适用范围速查：

| 类型 | 优先考虑 |
|------|----------|
| 通用项目 | phase1-minimal-implementation-interfaces、external-api-spec（如有接口）、safety-governance（如有风险边界） |
| 数据 / 状态型项目 | data-model、storage-schema、external-api-spec |
| 复杂集成项目 | integration 相关架构文档、sample-scenarios-architecture-refinement、responsibility-model |
| Agent / 平台型项目 | agent-specs、runtime-control-plane-spec、task-capability-architecture-and-evolution、a2a-integration-spec、skill-syntax-spec、mcp-interface-spec |
| 嵌入式 / 设备控制项目 | external-api-spec、phase1-minimal-implementation-interfaces、safety-governance；可把数据模型改写为状态机 / 寄存器 / 设备对象模型 |

建议启用顺序：

1. 先补当前阶段必须冻结的接口、状态机、责任和安全边界
2. 再按项目实际需要补充数据模型、存储建模、外部接口和样板场景
3. 仅在项目确实存在相应机制时，再启用 agent / control-plane / MCP / A2A / skill 等专题文档