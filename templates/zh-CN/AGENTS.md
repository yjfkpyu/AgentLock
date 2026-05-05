---
status: Current
owner: project-owner
last_verified: YYYY-MM-DD
---

# [项目名称]

> 面向 AI 持续开发的项目总入口文档。保持轻量，只承载项目定位、当前真相入口、权威文档导航和防过时文档误读规则。
>
> 状态、Track、风险级别、front-matter、命名约定、doc↔code 映射等共享术语统一在 [`docs/08-process/conventions.md`](docs/08-process/conventions.md)，本文不再重复表格内容。

---

## 项目定位

用 3-6 行说明以下内容：

- 项目要解决什么问题
- 项目的交付形态是什么（例如：库、服务、桌面程序、CLI、固件、上位机、平台）
- 主要服务对象是谁
- 成功标准是什么
- 当前项目处于什么阶段

## 当前真相入口

AI 开始任何开发任务前，优先读取以下最小集合：

1. 本文件：确认项目定位、权威来源和文档状态规则
2. [SESSION.md](SESSION.md)：确认当前代码现实、下一步、已知漂移和最近验证结果
3. [docs/README.md](docs/README.md)：确认正式文档索引和已启用范围
4. [docs/05-project/feature-registry.md](docs/05-project/feature-registry.md)：任务涉及功能范围、阶段范围或取舍时确认 `Track`
5. 当前任务直接相关的唯一权威文档

除非任务需要，不默认读取完整 `docs/08-process/`、历史讨论稿、临时参考材料或所有设计文档。

## 全局规则

### 技术红线

按项目实际情况列出禁止事项，例如：

1. 禁止越过统一接口直接操作核心业务数据
2. 禁止在无审批条件下执行高风险动作
3. 禁止绕过验证、审计、权限和可追溯约束

### 核心协议或集成原则

- 列出项目中已经冻结的协议、边界或集成约束
- 若项目不区分前后端，可改写为“模块边界 / 进程边界 / 设备边界 / 部署边界”
- 若尚未冻结，写明“先定义抽象接口，具体框架延后选型”

### 文档可信度、Track 与风险分级

以下三类术语的完整定义、字段值与 AI 默认行为统一见 [`docs/08-process/conventions.md`](docs/08-process/conventions.md)：

- **文档状态（Status）**：Current / Draft / Unverified / Superseded / Archived；AI 不得默认信任非 Current。
- **阶段分轨（Track）**：NOW / BOTH / LATER；判断功能是否属于本阶段。
- **风险分级（Risk）**：Low / Medium / High / Critical；High/Critical 必须暂停确认。

若文档没有状态标记，但内容会影响接口、数据、架构、权限、安全或验收标准，应先在 [SESSION.md](SESSION.md) 的 Known Drift / Open Questions 中记录疑点，再继续推进。遇到阻塞或范围变化时显式说明：暂停原因、已验证事实、推荐下一步。

如果项目尚未启用 [docs/05-project/evolution-backlog.md](docs/05-project/evolution-backlog.md)，可以先在 feature-registry 的备注列记录后续触发条件；复杂项目建议启用该清单，避免未来设计想法污染当前阶段文档。

## 文档入口

> 修改文档前先遵守 [DOCS_MAINTENANCE.md](DOCS_MAINTENANCE.md)。完整正式文档导航见 [docs/README.md](docs/README.md)；本文件只保留 AI 最小入口。

### 当前真相与权威来源

| 用途 | 位置 |
|------|------|
| 当前状态快照 | [SESSION.md](SESSION.md) |
| 全量文档导航 | [docs/README.md](docs/README.md) |
| 共享术语 / 状态 / Track / 风险 / front-matter | [docs/08-process/conventions.md](docs/08-process/conventions.md) |
| 功能范围与状态权威 | [docs/05-project/feature-registry.md](docs/05-project/feature-registry.md) |
| 当前阶段聚合视图 | [docs/05-project/stage-view.md](docs/05-project/stage-view.md) |
| doc ↔ code 反查映射 | [docs/05-project/doc-code-map.md](docs/05-project/doc-code-map.md) |
| 后续进化清单 | [docs/05-project/evolution-backlog.md](docs/05-project/evolution-backlog.md) |
| 架构决策记录 | [docs/05-project/adr/README.md](docs/05-project/adr/README.md) |
| 术语 / 缩写表 | [docs/02-requirements/glossary.md](docs/02-requirements/glossary.md) |
| 计划文档 | [docs/plans/](docs/plans/README.md)（只描述怎么做，不是当前事实来源） |
| 过程库入口 | [docs/08-process/README.md](docs/08-process/README.md)（按需加载） |
| 历史设计指针 | [docs/design-checklist.md](docs/design-checklist.md) |
| 项目类型裁剪 | [profiles/README.md](profiles/README.md)（按需参考，不保存项目事实） |
| 文档维护规则 | [DOCS_MAINTENANCE.md](DOCS_MAINTENANCE.md) |
| 文档自检脚本与扩展指南 | [scripts/README.md](scripts/README.md) |

### AI 默认最小必读集

1. 本文件（AGENTS.md）
2. [SESSION.md](SESSION.md)
3. [docs/README.md](docs/README.md)
4. 当前任务相关的 1 份 Current 权威文档；任务涉及功能范围时加读 feature-registry

## AI 任务分发表

> 动手前先确认任务类型，按需加载对应过程文档。过程文档是协作建议，不是默认全量必读项。

| 当你准备… | 请先读… |
|-----------|--------|
| 准备继续开发 | [ai-collaboration-protocol](docs/08-process/ai-collaboration-protocol.md) |
| 实现新功能 | 相关权威设计文档 → [ai-collaboration-protocol](docs/08-process/ai-collaboration-protocol.md) → 按需读 [design-gate](docs/08-process/design-gate.md) |
| 修复 bug | [debugging](docs/08-process/debugging.md)（复杂问题）→ 按需读 [tdd](docs/08-process/tdd.md) |
| 修改 API / 数据模型 / 配置 / 权限 | 对应 Current 权威文档 → [DOCS_MAINTENANCE](DOCS_MAINTENANCE.md) |
| 判断功能是否属于当前阶段 | [docs/05-project/feature-registry.md](docs/05-project/feature-registry.md) 的 `Track` → 必要时查 [docs/05-project/evolution-backlog.md](docs/05-project/evolution-backlog.md) |
| 记录当前阶段不做、但未来可能需要的设计点 | [docs/05-project/evolution-backlog.md](docs/05-project/evolution-backlog.md) |
| 文档收口 / 状态同步 | [DOCS_MAINTENANCE](DOCS_MAINTENANCE.md) → [ai-collaboration-protocol](docs/08-process/ai-collaboration-protocol.md) |
| 用户明确要求自动推进 | [autopilot](docs/08-process/autopilot.md) |

## 当前阶段

- 用一句话说明当前阶段
- 用 3-5 个要点说明当前阶段的目标、边界和交付物
- 交付物描述按项目实际形态填写，例如：协议冻结、模块稳定、固件 bring-up、服务上线、CLI 可用、集成验证通过

**后续阶段见** [路线图](docs/05-project/roadmap.md)

---

## 快速参考

> 按项目实际情况填写核心概念与缩写的快速索引表。建议收录：项目缩写、核心协议名称、状态 / 阶段标记含义等。

| 概念 | 含义 |
|------|------|
| 待填写 | 待填写 |
