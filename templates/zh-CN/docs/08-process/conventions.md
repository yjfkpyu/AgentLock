---
status: Current
owner: docs-template
last_verified: 2026-05-04
applies_to: ["**/*.md"]
---

# 文档与协作通用约定（Conventions）

> 本文是项目内**所有共享术语、状态、Track、风险级别、front-matter、命名规则和 doc↔code 映射约定**的唯一权威来源。
>
> 其他文档（AGENTS / SESSION / DOCS_MAINTENANCE / docs/README / NEW_PROJECT_CHECKLIST / 各过程文档）只能引用本文，不得复制本文中的表格。表格出现两份时，以本文为准。

## 1. 文档状态（Status）

正式文档、讨论稿、计划稿、候选设计稿、临时参考都应能判断状态。

| Status | 含义 | AI 默认行为 |
|--------|------|-------------|
| Current | 当前权威来源 | 可作为实现依据 |
| Draft | 草稿或待确认 | 可参考，关键实施前应确认 |
| Unverified | 未与代码核验 | 不得直接当作代码现实 |
| Superseded | 已被替代 | 不作为当前依据，转向替代文档 |
| Archived | 历史背景 | 仅追溯时读取，不用于当前实现 |

无状态标记但内容会影响接口、数据、架构、权限、安全或验收标准时，AI 应先在 [`SESSION.md`](../../SESSION.md) 的 Known Drift / Open Questions 记录疑点，再继续推进。

## 2. 阶段分轨（Track）

用于在 [`feature-registry.md`](../05-project/feature-registry.md) 标注每个功能 / 能力是否属于当前阶段。

| Track | 含义 | AI 默认行为 |
|-------|------|-------------|
| NOW | 当前阶段必做 | 按 Current 权威文档实施 |
| BOTH | 当前阶段做最小切片，后续仍有扩展 | 只实现当前切片；扩展登记到 [`evolution-backlog.md`](../05-project/evolution-backlog.md) |
| LATER | 当前阶段不做 | 不实施；必要时登记 backlog 并写清触发条件 |

> 项目可在初始化时把 NOW/BOTH/LATER 重命名为更贴近业务语言的标签（例如 DEMO/EVOLUTION/BOTH）。重命名后必须只在本文修改一次，其它文档保持引用本文。

## 3. 风险分级（Risk）

| 级别 | 动作类型 | 执行策略 |
|------|---------|---------|
| Low | 普通文档、小修复、非契约性重构 | 可直接执行，收口时说明验证结果 |
| Medium | 影响用户行为、接口调用、配置或跨模块边界 | 执行前确认权威文档，完成后同步文档或说明无需同步 |
| High | 权限、安全、数据模型、部署、对外 API、不可逆操作 | 执行前暂停确认，必要时先更新设计或回退方案 |
| Critical | 生产数据破坏、权限绕过、不可恢复发布、重大架构改口径 | 必须人工确认，不自动继续 |

## 4. 文档 Front-Matter 规范

所有正式文档（`docs/**` 下、各根目录入口文件）建议在文件顶部加入 YAML front-matter，便于脚本和 AI 批量扫描状态、归属、影响面，无需阅读全文。

### 4.1 通用字段

```yaml
---
status: Current | Draft | Unverified | Superseded | Archived
owner: <团队 / 角色 / 责任人>
last_verified: YYYY-MM-DD          # 最近一次与代码或事实核验的日期
features: ["F-001", "F-002"]       # 关联 feature-registry 的功能 ID（可选）
code_owns:                          # 本文档对哪些代码路径“负权威解释”（可选）
  - "src/agent/**"
  - "src/skill/scada/**"
supersedes: <被本文替代的文档相对路径>     # 可选
superseded_by: <替代本文的文档相对路径>     # 可选
---
```

### 4.2 过程文档（`docs/08-process/*.md`）扩展字段

```yaml
---
status: Current
kind: process
trigger: <触发场景的简述，例如"遇到 bug 或测试失败">
required_when:                      # 必须启用的硬条件
  - "<条件>"
optional_when:                      # 推荐启用的软条件
  - "<条件>"
do_not_use_when:                    # 不应启用的反场景
  - "<条件>"
must_read_with: ["docs/08-process/ai-collaboration-protocol.md"]
---
```

### 4.3 中间产物（讨论 / 计划 / 候选设计 / 临时参考）扩展字段

```yaml
---
status: Draft | Superseded | Archived
kind: discussion | plan | proposed-design | temp-reference
created: YYYY-MM-DD
topic: <主题简述>
feature_ref: ["F-xxx"]              # 计划稿建议必填
graduated_to: <转正后的正式文档路径>   # 转正后回填
---
```

未加 front-matter 的旧文档不算违规，但任何**修改**都应顺手补齐。

## 5. 文件命名约定

| 目录 | 命名格式 | 示例 |
|------|---------|------|
| `docs/discussions/` | `YYYY-MM-DD-<主题>.md` | `2026-05-04-routing-strategy.md` |
| `docs/plans/` | `YYYY-MM-DD-<主题>-plan.md` 或 `-design.md` | `2026-05-04-phase0-skeleton-plan.md` |
| `docs/proposed-design/` | `YYYY-MM-DD-<主题>-proposal.md` | `2026-05-04-control-plane-proposal.md` |
| `docs/temp-reference/` | `YYYY-MM-DD-<来源>-notes.md` 或 `-ref.md` | `2026-05-04-superpowers-notes.md` |
| `docs/05-project/adr/`（可选） | `ADR-<NNN>-<主题>.md` | `ADR-001-storage-choice.md` |

正式文档（01–08 层）保持稳定的英文 kebab-case 文件名，不带日期前缀。

## 6. doc ↔ code 映射

为让 AI 在改完代码后能快速反查“哪些文档需要同步”，约定两条机制：

1. **正向声明**：每份正式文档在 front-matter 的 `code_owns` 中列出其负权威解释的代码路径（glob）。
2. **反向索引**：在 [`docs/05-project/doc-code-map.md`](../05-project/doc-code-map.md) 维护一份汇总表，按代码路径反查权威文档。该表可由脚本扫描 `code_owns` 字段自动再生。

代码改动落入某条 `code_owns` 路径时，AI 默认要求按 [`DOCS_MAINTENANCE.md`](../../DOCS_MAINTENANCE.md) §10.1 处理同步。

## 7. 中间产物转正流程（最简版）

讨论稿 / 候选设计稿满足 [`DOCS_MAINTENANCE.md`](../../DOCS_MAINTENANCE.md) §11 的转正条件后，按以下步骤同步处理：

1. 把规则吸收进对应 Current 正式文档，并更新其 `last_verified` 与（如适用）`code_owns`
2. 在原讨论稿 front-matter 加 `status: Superseded` 与 `graduated_to: <正式文档路径>`
3. 在 [`docs/README.md`](../README.md) 与 [`AGENTS.md`](../../AGENTS.md) 检查是否需要降低旧稿的导航权重
4. 在 [`SESSION.md`](../../SESSION.md) 的 Recently Completed 中记一条转正事件

## 8. 自检清单

- 本文 §1–§3 的表格在其它文档里是否仍有重复？应只剩“引用 + 一句话摘要”。
- 新增正式文档是否已带 front-matter？新增中间产物是否符合命名约定？
- 修改代码后，是否回看了 `code_owns` 命中的文档？
- 转正讨论稿后，原稿是否已标 `Superseded` 并回填 `graduated_to`？
