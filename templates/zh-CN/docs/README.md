---
status: Current
owner: docs-template
last_verified: 2026-05-04
---

# 项目文档索引

> 总入口在 [../AGENTS.md](../AGENTS.md)。本索引是正式文档的全量导航；AGENTS.md 仅保留最小入口、当前真相入口、风险和任务分发表。
>
> 新增、修改、拆分或转正文档前，先遵守 [../DOCS_MAINTENANCE.md](../DOCS_MAINTENANCE.md)。
>
> 文档状态、Track、风险级别、front-matter、命名约定的完整定义见 [`08-process/conventions.md`](08-process/conventions.md)。

## 使用说明

- 本索引提供的是稳定目录基线，不代表每个项目都必须完整启用所有层级
- 若项目没有前端 / UI、没有智能体、没有显式控制面或不是平台型系统，应在初始化阶段明确裁剪对应文档
- 若存在匹配项目类型的 profile，先参考 [../profiles/README.md](../profiles/README.md) 决定启用、合并或删除哪些模板文档
- 裁剪后要同步更新 AGENTS.md 和本索引中的说明，避免目录仍暗示这些能力“默认存在”
- 如果项目存在“当前先做最小版本、未来再扩展”的阶段演进，建议启用 [05-project/evolution-backlog.md](05-project/evolution-backlog.md)，并在 feature-registry 中维护 `Track`
- 每个正式文档应在顶部或索引中能判断状态：Current / Draft / Unverified / Superseded / Archived
- AI 默认不应把 Draft、Unverified、Superseded 或 Archived 文档当作当前实现依据

## 文档状态约定

状态值与 AI 默认行为统一见 [`08-process/conventions.md`](08-process/conventions.md) §1。索引中的每份正式文档应在顶部 front-matter 标记 `status`，未标注的视为 Unverified。

## 设计总纲

| 文档 | 说明 |
|------|------|
| [设计要点检查清单](design-checklist.md) | 默认作为历史指针，功能范围以 feature-registry 为准 |

## 第1层：为什么做 & 做什么

| 文档 | 说明 |
|------|------|
| [项目愿景](01-vision/README.md) | 战略定位、目标用户、成功标准 |
| [产品需求文档](02-requirements/PRD.md) | 功能需求、非功能需求、角色与约束 |
| [核心用例](02-requirements/use-cases.md) | 关键业务场景与流程 |
| [术语 / 缩写表](02-requirements/glossary.md) | 项目核心术语、同义词、禁用别名的唯一权威来源 |

## 第2层：怎么做（架构）

| 文档 | 说明 |
|------|------|
| [系统总体架构](03-architecture/system-architecture.md) | 顶层模块、边界、交互路径 |
| [核心技术/方法框架](03-architecture/composite-ai-framework.md) | 核心方法论、验证流水线或决策框架；若项目无需单独方法框架，可合并到总体架构 |
| [集成架构](03-architecture/integration-architecture.md) | 外部系统接入、协议与适配策略 |

## 第3层：怎么做（详细设计）

> 04-design 是专题样板集合。初始化项目时应结合 profile 和项目形态裁剪，不应把下表全部视为默认必填。

| 文档 | 适用范围 | 说明 |
|------|----------|------|
| [详细设计文档组说明](04-design/README.md) | 通用 | 说明 04-design 是按需启用的专题样板集合，而不是固定必填清单 |
| [阶段最小实现接口](04-design/phase1-minimal-implementation-interfaces.md) | 通用 / 当前阶段 | 当前阶段必须冻结的最小工程接口 |
| [责任模型](04-design/responsibility-model.md) | 按需 | 决策、审批、升级与执行责任划分 |
| [样板场景细化与模块边界设计](04-design/sample-scenarios-architecture-refinement.md) | 复杂项目 | 复杂项目按需冻结代表性场景的对象流、模块边界与协作方式 |
| [安全治理](04-design/safety-governance.md) | 按需 / 高风险 | 权限、审批、沙箱、审计和风险控制 |
| [数据模型](04-design/data-model.md) | 数据型 / 状态型项目 | 核心对象、本体、语义关系与记忆结构 |
| [存储建模](04-design/storage-schema.md) | 数据型 / 有持久化项目 | 持久化结构、缓存、索引、迁移策略 |
| [外部 API 规范](04-design/external-api-spec.md) | 有外部接口项目 | REST、WebSocket、事件、CLI、IPC 或设备接口边界 |
| [Runtime / Control-Plane 设计规范](04-design/runtime-control-plane-spec.md) | 平台型 / 控制面项目 | 控制面、运行态、状态流转与恢复；没有显式控制面的项目可省略或改写 |
| [智能体规范](04-design/agent-specs.md) | Agent / 多执行单元项目 | 智能体或核心执行单元的职责、边界与生命周期；仅在项目存在这类执行单元时启用 |
| [任务能力架构与能力进化机制](04-design/task-capability-architecture-and-evolution.md) | Agent 平台 / 能力组合项目 | 能力抽象、绑定、缺口与演进；适合平台型或能力组合型项目 |
| [A2A 集成规约](04-design/a2a-integration-spec.md) | Agent 协作项目 | 智能体间发现、调用与治理边界；仅适用于 agent 协作项目 |
| [SKILL.md 语法规范](04-design/skill-syntax-spec.md) | 技能化 / Agent 项目 | 技能文件结构、解析和加载边界；仅适用于技能化 / Agent 化项目 |
| [MCP 接口规范](04-design/mcp-interface-spec.md) | MCP 能力项目 | 工具、资源、提示词或服务能力接口；仅在项目实际提供 MCP 能力时启用 |

## 第4层：项目管控

| 文档 | 说明 |
|------|------|
| [路线图](05-project/roadmap.md) | 阶段、里程碑、验收口径 |
| [Now / Next / Later 阶段视图](05-project/stage-view.md) | 当前阶段聚合视图；便于快速查看 NOW / NEXT / LATER，但不替代 feature-registry |
| [核心功能登记册](05-project/feature-registry.md) | 功能范围与阶段标记的唯一权威清单 |
| [进化清单](05-project/evolution-backlog.md) | 当前阶段不做、但未来可能需要转正的设计点与触发条件 |
| [doc ↔ code 反查映射](05-project/doc-code-map.md) | 按代码路径反查权威文档；由 front-matter 的 `code_owns` 派生 |
| [ADR 目录](05-project/adr/README.md) | 架构决策记录；保存关键取舍背景，不替代正式设计文档 |
| [项目主任务清单](05-project/master-delivery-tracker.md) | 全局完成度、优先级与剩余工作的总看板 |
| [风险登记册](05-project/risk-register.md) | 技术、业务、组织与安全风险 |
| [技术选型](05-project/tech-stack.md) | 技术决策记录与取舍理由 |

## 第5层：开发规范

| 文档 | 说明 |
|------|------|
| [代码工程骨架](06-dev-guide/project-scaffold.md) | 代码目录、模块边界与新增组件方式 |
| [SPEC.md](06-dev-guide/SPEC.md) | 开发红线、错误处理、可观测性等工程约束 |
| [编码规范](06-dev-guide/coding-standards.md) | 命名、风格、提交与评审约束 |
| [测试策略](06-dev-guide/testing-strategy.md) | 测试分层、基线要求与验收方法 |
| [部署架构](06-dev-guide/deployment-architecture.md) | 环境拓扑、发布流程、运行约束 |

## 第6层：交互界面与操作面（按需）

| 文档 | 说明 |
|------|------|
| [前端架构总纲](07-frontend/README.md) | Web / App / Desktop / CLI / HMI 等交互面边界与操作结构；无交互面的项目可不启用 |
| [用户角色模型](07-frontend/user-personas.md) | 用户、操作者、集成方或维护角色的目标与权限差异 |

## 第7层：开发过程方法论

| 文档 | 说明 |
|------|------|
| [过程方法论总览](08-process/README.md) | 按需过程库，默认不全量加载 |
| [通用约定](08-process/conventions.md) | 状态 / Track / 风险 / front-matter / 命名 / doc↔code 映射的唯一权威 |
| [AI 协作协议](08-process/ai-collaboration-protocol.md) | 持续开发、轻量收口、防文档漂移 |
| [开发流水线](08-process/workflow.md) | 复杂任务的阶段化参考 |
| [设计门禁](08-process/design-gate.md) | 新功能 / 新模块的边界确认 |
| [任务分解](08-process/planning.md) | 大任务或跨模块任务的粒度复核 |
| [TDD 建议](08-process/tdd.md) | 高风险变更优先先红后绿 |
| [调试流程](08-process/debugging.md) | 四阶段根因 + 三次升级 |
| [审查与收口](08-process/review.md) | 高风险或契约变更的增强收口 |
| [反思机制](08-process/reflection.md) | 重复问题或流程修正时使用 |
| [Autopilot](08-process/autopilot.md) | 用户明确要求连续自动执行时启用 |
| [Git Checkpoint 协议](08-process/git-protocol.md) | 项目启用 checkpoint 时使用 |
| [上下文加载策略](08-process/context-loading-strategy.md) | 最小加载集、扩展加载集、预算建议 |

## 中间产物目录

| 文档 | 说明 |
|------|------|
| [讨论文档目录](discussions/README.md) | 讨论稿的适用边界和转正规则 |
| [计划文档目录](plans/README.md) | 实施计划的使用边界 |
| [建议设计目录](proposed-design/README.md) | 非正式候选设计稿的收敛位置 |
| [临时参考目录](temp-reference/README.md) | 临时参考材料的隔离存放区，AI 默认不主动读取 |

## 设计与计划索引约定

- 当项目产生新的设计稿或实施计划时，应在本索引中新增对应条目，而不是只把文件留在目录里
- 如果计划已完成但仍保留，应在文件顶部标注“已完成 / 非当前依据”
- 如果讨论稿已经转正，应同步降低其在本索引中的注意力或移出高优先级入口
	讨论稿降级操作示例：将条目从正式文档表格移到“中间产物目录”区段，并加“（已转正 → 见 XXX）”后缀

## 跨文档可追溯性

项目中的功能、计划、代码和当前状态应保持引用链路贯通：

```
feature-registry (F-xxx) → Current 权威文档 → 相关代码入口 → SESSION.md 当前状态
```

- 功能 ID（如 `F-001`）是追溯链路的起点
- 设计稿或计划文件应在标题、表格或正文中显式标出关联功能 ID
- feature-registry 应能指向相关权威文档、代码入口和最后验证证据
- feature-registry 的 `Track` 应能说明该功能属于当前阶段、未来阶段，还是当前最小切片 + 后续扩展；后续扩展应能追溯到 evolution-backlog
- SESSION.md 中的 Current Code Reality、Active Work 和 Next Intended Change 应能回溯到对应功能或计划主题
- 若当前任务没有独立计划文件，至少保证任务描述、收口摘要和功能主题口径一致