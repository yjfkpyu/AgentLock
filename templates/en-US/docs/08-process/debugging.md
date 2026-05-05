---
status: Current
kind: process
trigger: Use when this process matches the current task type
required_when:
  - "The task explicitly requires this process"
optional_when:
  - "The task would benefit from additional structure"
do_not_use_when:
  - "The task is unrelated or can be answered directly without project work"
must_read_with: ["docs/08-process/ai-collaboration-protocol.md"]
---

# Debugging

## Purpose

Guide AI-assisted development for this task type. Keep the process proportional to risk and complexity.

## Steps

1. Confirm current truth and scope.
2. Identify authority docs and affected code.
3. Execute the smallest safe slice.
4. Validate with tests, commands, review, or manual checks.
5. Close out with completed work, validation, doc impact, and next step.

## Stop Conditions

- Authority docs conflict with code reality.
- The task enters High or Critical risk.
- Required product, architecture, security, or data decisions are missing.
