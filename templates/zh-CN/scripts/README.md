---
status: Current
owner: docs-template
last_verified: 2026-05-04
---

# scripts/

本目录存放与文档模板自治相关的小型脚本。脚本是参考实现，不是模板的硬依赖。

## 当前脚本

| 脚本 | 用途 | 备注 |
|------|------|------|
| `validate-docs.mjs` | 检查关键入口文件、front-matter、过程文档元数据、Markdown 链接，并对未声明 `code_owns` 与 docs 下缺 front-matter 的情况给出 warning | Node.js ≥ 18，无依赖；运行：`node scripts/validate-docs.mjs` |

## 项目接入时的脚本扩展指南

模板只提供与文档结构强相关、跨语言通用的最小自检脚本。**与项目业务逻辑、技术栈或 CI 平台耦合的脚本应由项目自行实现**。下面给出在真实项目中常见的扩展点和实现思路，便于 AI 在了解项目技术栈后直接生成对应脚本。

### 1. doc ↔ code 反查表生成脚本（推荐优先做）

目标：扫描所有正式 markdown 文档的 YAML front-matter 中 `code_owns` 字段，输出 [`../docs/05-project/doc-code-map.md`](../docs/05-project/doc-code-map.md) 中的反查表。

实现要点：

1. 遍历 `docs/**/*.md` 与根目录 `*.md`。
2. 解析 front-matter（仅需识别 `code_owns:` YAML 列表，可直接正则或用项目已有 YAML 解析库）。
3. 把 `(代码 glob, 文档相对路径, 关联 features, owner)` 收集成行，按 glob 字典序输出 markdown 表格。
4. 写回 `doc-code-map.md` 中由脚本管理的固定区段，建议用 `<!-- AUTO:doc-code-map start --> ... <!-- AUTO:doc-code-map end -->` 包裹，保留人工补充的"未覆盖代码区""备注"等列。
5. 检测同一 glob 被多个文档同时声明时报 warning（边界未收敛）；检测代码路径未被任何 `code_owns` 命中时按项目策略报 warning 或 error。

技术栈映射：

- Node / TypeScript：`fs.promises` + `gray-matter` 或自写 4 行正则；放进 `pnpm run docs:gen-map`
- Python：`pathlib` + `pyyaml` 或 `frontmatter` 包；放进 `Makefile` 或 `nox`
- Go：`os.ReadDir` + `gopkg.in/yaml.v3`；放进 `go run ./tools/docmap`
- Rust / 嵌入式：`walkdir` + `serde_yaml`，或简单 `grep` + `awk` 的 shell 实现

### 2. 文档 ↔ 代码漂移检查脚本

目标：根据各正式文档的 `code_owns` 列出代码路径，检查这些路径是否真实存在；对真实存在但无任何 `code_owns` 命中的代码模块输出 warning。

触发时机：每次 PR 或本地 pre-commit；CI 失败可阻断合并，本地 warning 仅提示。

### 3. front-matter / 过程元数据校验扩展

本仓自带的 `validate-docs.mjs` 只覆盖与模板结构强相关的字段。项目可在自己的脚本里追加：

- `last_verified` 距今超过 N 天的 Current 文档需要复核
- `features:` 中出现的 `F-xxx` 必须存在于 `feature-registry.md`
- ADR 状态从 `Accepted` 变为 `Superseded` 时必须填 `superseded_by`

### 4. 链接与命名规则扩展

- 中间产物文件命名是否符合 `YYYY-MM-DD-*` 约定
- 中间产物 `kind` 是否与所在目录一致
- `graduated_to` 指向的正式文档是否真实存在

### 5. 与 CI / 编辑器集成

- CI：把 `node scripts/validate-docs.mjs` 与项目自定义脚本一起放入 lint 阶段；exit code ≠ 0 时阻断合并
- 本地：通过 `lefthook`、`pre-commit`、`husky` 或 `lint-staged` 在提交前跑一次
- 编辑器：把 markdown 校验加入 VS Code tasks 或 Makefile，便于 AI 在写代码前执行 dry-run

### 6. AI 自动生成脚本的提示词模板

真实项目接入时，AI 可按以下提示词为本项目生成脚本：

> 本项目的技术栈是 `<语言/包管理器/CI>`。请阅读 `docs/08-process/conventions.md` §4 §6、`docs/05-project/doc-code-map.md` 和 `scripts/validate-docs.mjs`，按 `scripts/README.md` 的"项目接入时的脚本扩展指南"，生成与本项目技术栈一致的 doc-code-map 生成脚本和漂移检查脚本，复用现有目录与 front-matter 字段，不引入额外语言运行时。

## 维护原则

- 模板内置脚本只解决"文档结构是否合规"，不接触项目业务代码
- 项目自行实现的脚本应放在项目自己的 `scripts/`、`tools/` 或 `Makefile` 中，避免污染模板基线
- 任何会写回 `doc-code-map.md` 等文档的脚本，必须用显式标记包裹自动生成区段，保留人工列
