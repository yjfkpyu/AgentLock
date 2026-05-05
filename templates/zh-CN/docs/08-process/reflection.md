---
status: Current
kind: process
trigger: 重复问题、复杂调试、流程明显失效或阶段收口
required_when: []
optional_when:
  - "项目阶段切换 / 文档漂移明显"
do_not_use_when:
  - "每个小任务都要复盘，会变成固定负担"
must_read_with: []
---

# 反思与模式识别

> 可选过程改进工具。仅在重复问题、复杂调试、流程明显失效或阶段收口时使用；不要把反思变成每个小任务的固定负担。

## 轻量反思

如果反思会影响后续开发方式，可在 SESSION.md 的 Known Drift / Open Questions 或 Recently Completed 中追加一行：

```
- YYYY-MM-DD: [主题]；事实=...；根因=...；调整=...；下次验证=...
```

最低要求：
- **事实**：发生了什么，花了几轮，结果如何
- **根因**：为什么会这样，不写空泛感受
- **调整**：下次准备怎么改
- **下次验证**：下一轮怎么证明调整有效

## 阶段复盘

当项目阶段切换、重复问题出现或文档漂移较多时，可在独立计划/复盘文档或 SESSION.md 中追加一个复盘块：

```markdown
### 阶段复盘 [日期]
- 范围：[功能 / 阶段 / 问题]
- 总耗轮数 vs 预期：
- 上次调整是否有效：
- 当前重复模式：
- 新的流程调整：
- 下一阶段验证点：
```

## 记录位置

- 与当前状态有关：写入 SESSION.md
- 与流程规则有关：更新对应过程文档或 DOCS_MAINTENANCE.md
- 只保留历史背景：写入 docs/plans、docs/discussions 或归档文档，并标注状态

## 触发升级

- 同一问题重复出现 ≥ 2 次：记录到 SESSION.md 的 Known Drift / Open Questions
- 流程规则需修改：先记录 before / after 和影响范围
- 若影响 >3 个既有任务或改变风险边界：暂停并请求用户确认
