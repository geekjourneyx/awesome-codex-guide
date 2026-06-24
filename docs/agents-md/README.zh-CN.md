# AGENTS.md 项目规则

`AGENTS.md` 是给 Codex 的项目级说明书。它应该减少重复解释，让 Agent 在当前仓库里遵守相同的工程规则。

## 应该写什么

- 项目用途和主要目录。
- 安装、测试、构建命令。
- 代码风格和命名约定。
- 哪些文件不能改。
- 需要用户确认的危险操作。
- PR、提交、验证要求。

## 最小模板

```md
# AGENTS.md

## Project
说明这个仓库做什么。

## Commands
- Test: `npm test`
- Validate: `npm run validate`

## Rules
- 修改前先说明计划。
- 不要读取或打印密钥。
- 不要运行破坏性 Git 命令。
- 完成前必须运行相关验证。
```

## 好的 AGENTS.md 标准

- 短，明确，可执行。
- 写项目事实，不写空泛价值观。
- 明确测试命令和验证门槛。
- 把安全边界写在前面。

Official source: [AGENTS.md guide](https://developers.openai.com/codex/guides/agents-md)

Last verified: 2026-06-24
