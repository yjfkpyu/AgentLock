---
status: Current
owner: docs-template
last_verified: 2026-05-04
---

# 新项目初始化参考清单

本文档用于帮助新项目基于模板快速起步。

它是参考清单，不是必须逐条严格执行的流程。项目可以根据规模、行业、阶段和团队协作方式调整顺序或裁剪部分内容。

> 共享术语（状态 / Track / 风险 / front-matter / 命名 / doc↔code 映射）的唯一权威是 [`docs/08-process/conventions.md`](docs/08-process/conventions.md)；初始化时如需重命名 Track 标签，只在该文件改一次。

## 一、先明确是否沿用整套模板

- 先判断项目属于哪一类：服务 / 平台、独立程序、CLI / 工具、SDK / Library、桌面 / 移动端、嵌入式 / 固件、混合系统
- 判断项目是否需要完整的 01-08 分层文档体系
- 查看 [profiles/README.md](profiles/README.md)，若已有匹配项目类型的 profile，优先按 profile 的启用清单裁剪模板
- 如果匹配多个 profile，先选择最接近交付形态的一类；混合项目只合并确实需要的文档，不叠加所有清单
- 如果项目较小，可保留结构但减少内容深度
- 如果项目较复杂，建议完整保留正式文档层级和中间产物目录
- 如果项目没有前端、控制面、智能体、多租户等概念，不要把对应文档当成必填项
- 如果没有匹配 profile，直接使用通用模板，并在 AGENTS.md 与 docs/README.md 中标注未启用或已裁剪的文档

## 二、优先补齐入口文档

- 填写 [AGENTS.md](AGENTS.md)，建立项目定位、当前真相入口、全局规则和文档导航
- 初始化 [SESSION.md](SESSION.md)，记录当前代码现实、下一步、已知漂移和最近验证结果
- 在 [SESSION.md](SESSION.md) 的 Current Scope 中写清当前阶段 In Scope / Out of Scope
- 阅读并按需调整 [DOCS_MAINTENANCE.md](DOCS_MAINTENANCE.md)，确保维护规则符合项目习惯
- 阅读 [docs/README.md](docs/README.md)，确认索引结构适合当前项目

## 三、尽早建立唯一权威清单

- 填写 [docs/05-project/feature-registry.md](docs/05-project/feature-registry.md)
- 决定功能范围、阶段标记和统计摘要都由该文档统一承接
- 若项目会分阶段交付，建议启用 `Track`：`NOW`（当前做）、`BOTH`（当前最小切片 + 后续扩展）、`LATER`（当前不做）
- 若出现较多“未来可能需要但当前不做”的设计点，启用 [docs/05-project/evolution-backlog.md](docs/05-project/evolution-backlog.md)，为每个条目写清触发条件
- 避免在多个文档重复维护完整功能真相

## 四、先补边界，再补细节

- 先写 [docs/01-vision/README.md](docs/01-vision/README.md)
- 再写 [docs/02-requirements/PRD.md](docs/02-requirements/PRD.md) 和 [docs/02-requirements/use-cases.md](docs/02-requirements/use-cases.md)
- 再冻结 [docs/03-architecture/system-architecture.md](docs/03-architecture/system-architecture.md) 及相关架构文档
- 详细设计文档建议等边界稳定后再逐步补齐

## 五、按项目复杂度决定是否启用可选文档

- 优先按 [profiles/README.md](profiles/README.md) 或具体 profile 的启用清单裁剪 04-design、07-frontend 和 08-process
- 若项目存在代表性高价值场景，可使用 [docs/04-design/sample-scenarios-architecture-refinement.md](docs/04-design/sample-scenarios-architecture-refinement.md)
- 若项目不存在复杂运行态或控制面，可适度简化 [docs/04-design/runtime-control-plane-spec.md](docs/04-design/runtime-control-plane-spec.md)
- 若项目没有智能体或多执行单元，可不启用 [docs/04-design/agent-specs.md](docs/04-design/agent-specs.md)
- 若项目没有前端 / 图形界面，可不启用 [docs/07-frontend/README.md](docs/07-frontend/README.md)，或将其改写为 CLI / HMI / 操作面文档
- 若项目是嵌入式、驱动或设备控制软件，应更重视系统边界、部署/硬件约束、接口与状态机，而不是强行套用前后端分层

## 六、中间产物只做中间产物

- 讨论稿放在 [docs/discussions/README.md](docs/discussions/README.md) 所定义的目录中
- 计划稿放在 [docs/plans/README.md](docs/plans/README.md) 所定义的目录中
- 候选设计稿放在 [docs/proposed-design/README.md](docs/proposed-design/README.md) 所定义的目录中
- 当结论稳定后，应把规则转入正式文档，而不是长期停留在中间目录

## 七、初始化后做一次轻量检查

- AGENTS.md 是否已经能正确导航到主要正式文档
- docs/README.md 是否与实际保留的文件结构一致
- feature-registry.md 是否已明确唯一权威地位
- SESSION.md 是否能回答“当前代码现实、下一步、已知漂移、最后验证”
- 关键正式文档是否能判断 Current / Draft / Unverified / Superseded / Archived 状态
- 是否存在已经承担正式角色、但仍放在 discussions 或 plans 中的内容

## 八、推荐的最小起步集合

如果希望先快速启动，可以优先完成以下文档：

- [AGENTS.md](AGENTS.md)
- [SESSION.md](SESSION.md)
- [DOCS_MAINTENANCE.md](DOCS_MAINTENANCE.md)
- [docs/README.md](docs/README.md)
- [docs/08-process/conventions.md](docs/08-process/conventions.md)（按项目重命名 Track 等术语）
- [docs/02-requirements/glossary.md](docs/02-requirements/glossary.md)（先放 5–10 个关键术语即可）
- [docs/01-vision/README.md](docs/01-vision/README.md)
- [docs/02-requirements/PRD.md](docs/02-requirements/PRD.md)
- [docs/03-architecture/system-architecture.md](docs/03-architecture/system-architecture.md)
- [docs/05-project/feature-registry.md](docs/05-project/feature-registry.md)
- [docs/05-project/stage-view.md](docs/05-project/stage-view.md)（项目进入执行期后启用）
- [docs/05-project/doc-code-map.md](docs/05-project/doc-code-map.md)（出现首份正式文档后启用）

其余文档可随着项目边界冻结逐步补齐；不适用的层应在 docs/README 和 AGENTS 中明确裁剪，而不是默认留空装作将来一定会有。

## 九、如果项目使用 AI 持续开发

以下步骤适用于希望 AI 长期参与开发、跨会话续上上下文的项目：

- 初始化 [SESSION.md](SESSION.md)，填写 Current Phase、Current Code Reality、Active Work、Next Intended Change、Known Drift 和 Last Verified Commands
- 确认 AGENTS.md 中的 AI 持续开发规则章节已按项目实际情况调整
- 确认 [docs/08-process/ai-collaboration-protocol.md](docs/08-process/ai-collaboration-protocol.md) 可作为默认轻量协作协议
- 初始化 [docs/05-project/feature-registry.md](docs/05-project/feature-registry.md)，填写功能、权威文档、相关代码入口和最后验证证据
- 如功能存在当前阶段 / 后续阶段分流，填写 `Track`，并把 `LATER` 或 `BOTH` 的扩展部分放入 [docs/05-project/evolution-backlog.md](docs/05-project/evolution-backlog.md)
- 如项目较大，再初始化 [docs/05-project/master-delivery-tracker.md](docs/05-project/master-delivery-tracker.md)，填写聚合统计摘要
- 确认 Agent 的 Git 分支策略（如：AI 在独立分支上提交，不直接推送到主分支）
- 做一次检查：AGENTS.md → SESSION.md → feature-registry → Current 权威文档 → 相关代码入口的引用链路是否贯通
- 运行 `node scripts/validate-docs.mjs` 检查关键入口、front-matter、过程元数据和 Markdown 链接
- 若项目确实需要连续自动执行，再按需启用 [docs/08-process/autopilot.md](docs/08-process/autopilot.md)