---
status: Current
owner: docs-template
last_verified: 2026-05-04
---

# 项目类型 Profile

`profiles/` 用于存放面向特定项目类型的裁剪起步样板，例如 CLI 工具、SDK / Library、桌面应用、MCU 固件、数据流水线或 Agent 平台。

Profile 的作用不是另建一套权威文档，而是回答：基于通用模板，当前项目类型应该启用哪些文档、弱化哪些文档、合并哪些文档、删除哪些高注意力入口。

## 使用原则

- 没有匹配 profile 时，直接使用通用模板，并按 [NEW_PROJECT_CHECKLIST.md](../NEW_PROJECT_CHECKLIST.md) 裁剪
- 使用 profile 时，以 profile 的启用清单为初始化建议；真正的项目事实仍写回 `AGENTS.md`、`SESSION.md`、`docs/README.md` 和对应 Current 权威文档
- Profile 不应长期保存项目事实、功能状态或当前进度
- Profile 只能裁剪或建议启用文档，不能绕过 [DOCS_MAINTENANCE.md](../DOCS_MAINTENANCE.md) 的文档状态与权威源规则
- 如果某类项目通常存在“先做最小版本、后续演进”的路径，profile 可以建议启用 `docs/05-project/evolution-backlog.md`；但 profile 不应写入具体项目的进化条目

## 推荐 profile 结构

每个 profile 建议使用独立目录：

```text
profiles/<profile-name>/
  README.md
  enabled-docs.md        # 建议启用 / 合并 / 删除的文档清单
  migration-guide.md     # 从通用模板迁移的步骤，可选
```

## profile README 推荐内容

```md
# <Profile 名称>

## 适用项目

- <适用条件>
- <不适用条件>

## 最小起步文档

- AGENTS.md
- SESSION.md
- docs/README.md
- docs/05-project/feature-registry.md
- docs/05-project/evolution-backlog.md（如该 profile 通常需要阶段演进）
- <该项目类型必须启用的文档>

## 建议裁剪

| 通用模板文档 | 处理方式 | 原因 |
|--------------|----------|------|
| docs/04-design/agent-specs.md | 删除 / 未启用 | 项目无智能体执行单元 |
| docs/07-frontend/README.md | 改写 / 未启用 | 项目无图形界面 |

## 初始化步骤

1. 复制通用模板
2. 按本 profile 裁剪 `docs/README.md` 与 `AGENTS.md`
3. 填写 `SESSION.md` 和 `feature-registry.md`
4. 给启用的正式文档补顶部状态标记
```

## 当前内置 profile

| Profile | 适用项目 | 入口 |
|---------|----------|------|
| Agent Platform | Agent、技能、工具调用、记忆、任务编排或多执行单元协作平台 | [agent-platform/README.md](agent-platform/README.md) |
| CLI Tool | 命令行工具、离线脚本、本地开发者工具 | [cli-tool/README.md](cli-tool/README.md) |
| Web SaaS | Web 应用、SaaS 控制台、B2B 后台、前后端协作服务 | [web-saas/README.md](web-saas/README.md) |
| Library / SDK | 库、SDK、框架、插件包或内部共享模块 | [library-sdk/README.md](library-sdk/README.md) |
| Software Automation | 软件自动化、UI 学习、CLI 编排、RPA、本地工作流执行器 | [software-automation/README.md](software-automation/README.md) |

新增具体 profile 时，应同步更新本节索引。
