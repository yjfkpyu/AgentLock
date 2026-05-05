---
status: Current
owner: project-owner
last_verified: YYYY-MM-DD
---

# SESSION

> 当前项目真相快照。用于帮助 AI 跨会话恢复上下文，避免继续按照过时文档或旧计划开发。
>
> 状态、Track、风险级别等术语统一引用 [`docs/08-process/conventions.md`](docs/08-process/conventions.md)，本文不再重复定义。

## Current Phase

- Phase: （填写当前项目阶段，例如：设计冻结 / 核心实现 / 联调 / 上线准备）
- Stage: （填写当前阶段内的具体子目标）
- Branch: （填写当前开发分支名）
- Updated: YYYY-MM-DD

## Current Scope

> 只写当前阶段真实要做 / 不做的范围，避免新会话把远期设想误当作当前任务。

### In Scope

- （当前阶段必须完成或验证的范围）

### Out of Scope

- （当前阶段明确不做的范围；如未来可能需要，链接到 `docs/05-project/evolution-backlog.md`）

## Current Code Reality

> 只记录已经在代码中真实存在、最近确认过的事实。不要写计划或愿望。
>
> 推荐用以下结构化条目，便于脚本与 AI 校验：每条 Reality 必须能被 `verified_paths`（路径必须存在）或 `verified_command`（命令必须可重放）佐证；否则降级为 Open Question。

```yaml
# Current Code Reality 示例条目（可有多条）
- id: R-001
  summary: "<一句话事实，例如：SSE 客户端已实现并通过最小回归>"
  verified_paths:
    - "src/api/chat.ts"
  verified_command: "pnpm test chat"
  verified_at: YYYY-MM-DD
  related_features: ["F-xxx"]
```

人工 Markdown 形式：

- R-001 | 待填写一句话事实 | paths: 待填写 | cmd: 待填写 | at: YYYY-MM-DD

如果当前还没有任何已验证事实（例如刚初始化项目），明确写一行：`R-000 当前 workspace 尚未发现实现代码`。**禁止**用计划或文档内容填充本节。

## Active Work

- Work Item: （当前正在处理的功能、缺陷或文档同步任务）
- Related Feature: `F-xxx` / none
- Related Docs: （列出当前任务依赖的 Current 权威文档）
- Status: not-started / in-progress / blocked / review

## Next Intended Change

> 写清下一步最可能要做的事，让新的 AI 会话能继续。

- （下一步动作）
- Expected Files: （预计涉及的代码或文档路径）
- Validation: （预计验证命令或人工检查方式）

## Last Verified Commands

> 记录最近能证明当前状态的命令、结果或人工验证。没有验证就写“未验证”。

| Date | Command / Check | Result | Notes |
|------|-----------------|--------|-------|
| YYYY-MM-DD | 待填写 | 未验证 | 待填写 |

## Known Drift / Open Questions

> 发现文档与代码、计划与实现、入口与实际状态不一致时，先记录在这里，再修正文档或请求确认。

| ID | Type | Description | Affected Docs / Code | Status |
|----|------|-------------|----------------------|--------|
| D-001 | docs-code / docs-docs / plan-code / unknown | 待填写 | 待填写 | open |

## Recently Completed

> 只保留最近 5-10 条高价值完成项。长期历史依赖 git、发布记录或归档文档。

| Date | Item | Evidence | Docs Updated |
|------|------|----------|--------------|
| YYYY-MM-DD | 待填写 | 待填写 | yes / no / n/a |

---

## 使用说明

- 本文件不是执行审计日志，也不是自动驾驶队列；它只保存“下一位 AI 继续开发必须知道的当前事实”。
- 每次完成会影响后续开发判断的任务后，更新 Current Code Reality、Next Intended Change、Last Verified Commands 或 Known Drift。
- 当前阶段范围变化时，更新 Current Scope，并同步检查 feature-registry 的 `Track` 和 evolution-backlog。
- 代码改动影响 API、数据模型、配置、部署、权限、安全、架构边界、用户行为或验收标准时，同步更新对应权威文档，并在 Recently Completed 中说明。
- 如果某项信息只是计划，放到 plans 或 feature registry；不要写进 Current Code Reality。
