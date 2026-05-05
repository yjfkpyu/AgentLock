---
status: Draft
owner: project-owner
last_verified: YYYY-MM-DD
---

# 对等系统协作 / A2A 集成规约（按需）

## 用途

定义多个对等执行主体、系统节点或智能体之间如何发现、通信、认证和治理。

如果项目不存在多主体协作、跨节点编排或 A2A 协议，本文件可以不启用。

## 建议章节

### 1. 发现机制

- Agent Card、Service Descriptor、Peer Descriptor 或等价发现对象

### 2. 消息模型

- 请求
- 响应
- 事件
- 错误

### 3. 治理边界

- 认证授权
- 版本兼容
- 配额与限流

### 4. 适用边界

- 哪些协作主体属于对等关系
- 哪些调用应继续走普通集成接口，而不是进入对等协作协议

## 不应写入本层的内容

- 高层愿景、战略定位（属于 01-vision）
- 需求描述和用例定义（属于 02-requirements）
- 系统级架构边界（属于 03-architecture）
- 项目管控信息（属于 05-project）
- 开发规范和编码标准（属于 06-dev-guide）

