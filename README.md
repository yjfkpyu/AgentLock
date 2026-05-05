# AgentLockDoc

> **AgentLock** 是一套为 AI 编程设计的项目文档模板系统。  
> 它帮助 coding agent 始终对齐项目的当前真相：范围、权威文档、功能状态、doc-code 归属、验证规则，以及跨会话交接上下文。

<p align="center">
  <strong>给 AI 编程 Agent 一份稳定的项目记忆。</strong><br>
  Stop letting AI code from stale docs.
</p>

<p align="center">
  <a href="LICENSE"><img alt="License: MIT" src="https://img.shields.io/badge/license-MIT-1f8f4d.svg"></a>
  <img alt="Templates" src="https://img.shields.io/badge/templates-zh--CN%20%7C%20en--US-0f766e.svg">
  <img alt="AI Native" src="https://img.shields.io/badge/AI--native-docs--as--code-111827.svg">
  <img alt="Validation" src="https://img.shields.io/badge/validation-zero--dependency-2563eb.svg">
</p>

[English](README.en.md) · [中文模板](templates/zh-CN/README.md) · [English Template](templates/en-US/README.md) · [MIT License](LICENSE)

![AgentLock 信息图](assets/agentlock-infographic.svg)

---

## 这是什么

AgentLockDoc 是一个开源文档模板仓库。根目录用于介绍项目、授权协议和使用方式；真正要复制到你项目里的模板放在：

| 模板目录 | 语言 | 使用方式 |
|----------|------|----------|
| [templates/zh-CN](templates/zh-CN) | 中文 | 复制该目录下的全部内容到你的项目根目录或文档模板目录 |
| [templates/en-US](templates/en-US) | English | Copy the full contents into your project root or documentation-template directory |

仓库名可以使用 **AgentLockDoc**；项目品牌名是 **AgentLock**。

如果 AgentLock 能帮助你的 AI 编程 Agent 少走弯路，欢迎点一个 Star，让更多开发者发现它。

---

## 为什么需要 AgentLock

AI 编程正在从一次性的代码补全，走向长期、多轮、跨会话的工程协作。问题也随之出现：

- AI 不知道哪些文档仍然可信，哪些只是草稿或历史方案
- README、设计文档、计划文档和真实代码逐渐漂移
- 新会话无法判断当前阶段到底做什么、不做什么
- 功能范围、代码入口、测试证据和权威文档散落在不同地方
- AI 容易把愿景、计划、讨论稿误当成已经实现的事实
- 高风险变更缺少统一的暂停、确认和收口规则

AgentLock 的目标不是让文档变多，而是让 AI 和人类在同一个工程事实面上工作。它把“当前真相”“权威来源”“阶段边界”“代码归属”“验证证据”整理成一套可读、可裁剪、可检查的 docs-as-code 模板。

---

## 核心能力

| 能力 | 说明 |
|------|------|
| AI 最小入口 | AGENTS + SESSION + docs/README 帮助 AI 快速恢复当前上下文 |
| 文档状态治理 | Current / Draft / Unverified / Superseded / Archived 防止误信过时文档 |
| 阶段范围控制 | NOW / BOTH / LATER 区分当前实现、最小切片和未来候选 |
| 当前代码现实 | R-xxx 结构化记录真实存在且已验证的实现事实 |
| doc↔code 映射 | code_owns + doc-code-map 支持代码改动反查权威文档 |
| Feature Registry | 功能、阶段、状态、权威文档、代码入口、验证证据的唯一清单 |
| Evolution Backlog | 承接当前不做但未来可能需要的设计点，避免污染当前阶段 |
| ADR | 记录关键架构决策与取舍背景 |
| Starter Profiles | Agent Platform、CLI Tool、Web SaaS、Library / SDK、Software Automation 五类裁剪建议 |
| Process Metadata | 过程文档可被 AI 按任务类型检索和按需加载 |
| Validation Script | 检查关键入口、front-matter、过程元数据、Markdown 链接 |
| Script Extension Guide | 指导 AI 在真实项目中生成与技术栈匹配的 doc-code-map / drift-check 脚本 |

---

## 目录结构

```text
AgentLockDoc/
  README.md                 # 中文项目介绍
  README.en.md              # English project README
  LICENSE                   # MIT License
  templates/
    zh-CN/                  # 中文完整模板，复制此目录内容到中文项目
      AGENTS.md
      SESSION.md
      DOCS_MAINTENANCE.md
      NEW_PROJECT_CHECKLIST.md
      docs/
      profiles/
      scripts/
    en-US/                  # English complete template, copy this directory into English projects
      AGENTS.md
      SESSION.md
      DOCS_MAINTENANCE.md
      NEW_PROJECT_CHECKLIST.md
      docs/
      profiles/
      scripts/
```

根目录 README 不再承担“项目内模板文档”的角色，避免用户复制后混淆。用户真正需要复制的是某个语言目录里的完整内容。

---

## 快速开始

### 中文项目

```bash
cp -R templates/zh-CN/. /path/to/your-project/
cd /path/to/your-project
node scripts/validate-docs.mjs
```

然后按 [templates/zh-CN/NEW_PROJECT_CHECKLIST.md](templates/zh-CN/NEW_PROJECT_CHECKLIST.md) 初始化。复制到真实项目后，该文件会位于你的项目根目录：`NEW_PROJECT_CHECKLIST.md`。

### English project

```bash
cp -R templates/en-US/. /path/to/your-project/
cd /path/to/your-project
node scripts/validate-docs.mjs
```

Then follow [templates/en-US/NEW_PROJECT_CHECKLIST.md](templates/en-US/NEW_PROJECT_CHECKLIST.md). After copying, it will be available at your project root as `NEW_PROJECT_CHECKLIST.md`.

### 作为独立文档模板目录使用

如果不想把 AGENTS.md / SESSION.md 放在项目根目录，可以复制到一个子目录：

```bash
cp -R templates/zh-CN /path/to/your-project/agentlock-docs
# or
cp -R templates/en-US /path/to/your-project/agentlock-docs
```

这种方式更保守，但 AI 进入项目后不一定会自动发现模板入口。希望 AI 默认读取时，推荐直接把所选语言模板的内容放到项目根目录。

---

## 使用 AgentLock 的收益

### 对个人开发者

- 新会话更容易续上上下文
- AI 不再每次从零猜项目结构
- 减少“按旧文档写新代码”的概率
- 能清楚知道下一步做什么、哪些不该做
- 小项目也能保留轻量工程纪律

### 对团队

- 文档、代码、功能范围和验证证据形成可追溯链路
- 新成员和 AI agent 都能从同一套入口理解项目
- 设计讨论不会长期冒充正式规范
- 阶段范围和远期设想分离，减少 scope creep
- 高风险改动有统一暂停、确认、收口规则

### 对长期项目

- 防止 README、设计文档、计划文档和代码长期漂移
- 保留架构决策背景，同时不污染当前实现文档
- 支持从原型到产品化的渐进式治理
- 能逐步引入自动校验和 CI 检查

---

## 不使用这类模板时，常见代价

| 没有 AgentLock 时 | 使用 AgentLock 后 |
|------------------|-------------------|
| AI 不知道哪些文档可信 | 文档状态明确，非 Current 不默认作为实现依据 |
| 计划文档被误当成事实 | SESSION 只记录可验证代码现实 |
| 功能范围散落在多个文档 | feature-registry 作为唯一功能清单 |
| 代码改了但文档没同步 | code_owns 和 doc-code-map 提供反查机制 |
| 远期设想污染当前阶段 | evolution-backlog 承接未来候选 |
| 新会话读太多或读错材料 | AGENTS 定义最小必读集和按需加载规则 |
| 高风险动作凭直觉推进 | Risk 分级和 dry-run 强制暂停确认 |

---

## 推荐给 AI 的开工提示词

把某个语言模板复制到真实项目后，可以对 coding agent 这样说：

```text
请先阅读 AGENTS.md、SESSION.md、docs/README.md，以及当前任务相关的 Current 权威文档。
遵守 docs/08-process/conventions.md 中的 Status / Track / Risk / front-matter 规则。
如果代码改动影响 API、数据模型、配置、部署、权限、安全、架构边界、用户行为或验收标准，请同步对应权威文档。
完成后运行 node scripts/validate-docs.mjs，并说明验证结果、文档影响和下一步。
```

英文模板项目可以使用：

```text
Read AGENTS.md, SESSION.md, docs/README.md, and the Current source-of-truth document related to this task.
Follow Status / Track / Risk / front-matter rules in docs/08-process/conventions.md.
If code changes affect APIs, data models, configuration, deployment, permissions, security, architecture boundaries, user-visible behavior, or acceptance criteria, update the corresponding authority docs.
At close-out, run node scripts/validate-docs.mjs and report validation results, documentation impact, and next steps.
```

---

## 内置 Profiles

两套语言模板都包含相同的 profile 结构：

- Agent Platform
- CLI Tool
- Web SaaS
- Library / SDK
- Software Automation

中文入口：[templates/zh-CN/profiles/README.md](templates/zh-CN/profiles/README.md)  
English entry: [templates/en-US/profiles/README.md](templates/en-US/profiles/README.md)

---

## 自检

两套模板都内置零依赖 Node.js 自检脚本：

```bash
node scripts/validate-docs.mjs
```

在仓库内直接验证两套模板：

```bash
cd templates/zh-CN && node scripts/validate-docs.mjs
cd ../en-US && node scripts/validate-docs.mjs
```

模板阶段没有真实代码，因此 `no document declares code_owns yet` 是正常 warning。复制到真实项目后，建议为 Current 权威文档补上真实代码路径。

---

## Roadmap

- [x] 中文完整模板
- [x] English complete template
- [x] Current truth entrypoints: AGENTS / SESSION / docs index
- [x] Status / Track / Risk / front-matter conventions
- [x] Feature registry, evolution backlog, stage view
- [x] doc-code-map convention and script extension guide
- [x] Starter profiles
- [x] ADR template
- [x] Validation script
- [ ] Optional CLI initializer
- [ ] Optional GitHub Action example
- [ ] Optional doc-code-map generator examples for popular stacks

---

## License

AgentLockDoc is released under the [MIT License](LICENSE).
