---
status: Draft
owner: project-owner
last_verified: YYYY-MM-DD
---

# 代码工程骨架

## 用途

定义项目代码目录、模块边界以及新增模块时的标准方式。

> 本文档不要求所有项目都采用 `apps / packages / services` 结构。目录骨架应服从项目类型，而不是反过来让项目去迎合模板。

## 建议章节

### 1. 仓库结构

- 按项目类型给出实际骨架，而不是套固定目录名
- 典型示例：
	- 应用 / 服务型：`apps/`、`services/`、`packages/`、`docs/`
	- SDK / Library：`src/`、`tests/`、`examples/`、`docs/`
	- CLI / 独立程序：`cmd/` 或 `src/`、`tests/`、`scripts/`、`docs/`
	- 嵌入式 / 固件：`firmware/`、`boards/`、`drivers/`、`hal/`、`tools/`、`docs/`
	- 桌面 / 设备配套软件：`app/`、`core/`、`platform/`、`installer/`、`docs/`

### 2. 模块边界

- 每层模块负责什么
- 哪些依赖方向是允许的
- 若项目涉及硬件 / 驱动 / RTOS，应额外写明板级支持、驱动层、协议层与业务层的边界

### 3. 新增模块流程

- 新增目录
- 注册入口
- 测试与文档补齐要求
- 明确哪些模块允许直接依赖平台接口，哪些必须通过抽象层或适配层进入
