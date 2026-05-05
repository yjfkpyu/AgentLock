---
status: Draft
owner: project-owner
last_verified: YYYY-MM-DD
---

# MCP / 统一能力接口规范（按需）

## 用途

定义工具、资源、提示词、插件能力或服务能力如何通过统一接口暴露给调用方使用。

如果项目不使用 MCP，也可以把本文改写为其他统一扩展接口规范；若项目没有统一能力暴露层，则不必启用。

## 建议章节

### 1. 能力分类

- Tool
- Resource
- Prompt
- Service / Extension / Action（按项目实际补充）

### 2. 接口定义模板

- 名称
- 输入
- 输出
- 权限要求
- 失败语义

### 3. 注册与治理

- 注册方式
- 版本策略
- 安全限制

## 不应写入本层的内容

- 高层愿景、战略定位（属于 01-vision）
- 需求描述和用例定义（属于 02-requirements）
- 系统级架构边界（属于 03-architecture）
- 项目管控信息（属于 05-project）
- 开发规范和编码标准（属于 06-dev-guide）

