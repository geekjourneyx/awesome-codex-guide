# Codex 怎么开始

## 适用人群

你知道 Codex，但不知道先看 CLI、IDE、Web、AGENTS.md、MCP 还是 Skills。

## 顺序

1. 先读官方入口：[Codex Quickstart](https://developers.openai.com/codex/quickstart)。
2. 在一个可回滚的 Git 仓库里启动 Codex CLI。
3. 为项目写 `AGENTS.md`，沉淀测试命令、代码风格和权限边界。
4. 从一个低风险任务开始：解释代码、补测试、修小 bug。
5. 再学习权限、沙箱、MCP、Skills、Plugins、Subagents。

## 学习顺序

| 阶段 | 做什么 | 入口 |
| --- | --- | --- |
| 1 | 跑通 CLI | [Codex CLI 实战](../codex-cli/README.zh-CN.md) |
| 2 | 写项目规则 | [AGENTS.md](../agents-md/README.zh-CN.md) |
| 3 | 控制风险 | [权限与安全](../permissions-security/README.zh-CN.md) |
| 4 | 处理一个小任务 | [工作流](../workflows/README.zh-CN.md) |
| 5 | 找扩展资源 | [扩展资源](../resources/ecosystem.zh-CN.md) |
| 6 | 排障 | [常见错误](../troubleshooting/common-errors.zh-CN.md) |

## 判断是否学会

你不需要记住所有命令。你需要能做到：

- 让 Codex 安全读取当前仓库。
- 让 Codex 在改代码前理解项目规则。
- 看懂它要运行的命令和权限风险。
- 要求它运行测试并解释失败原因。
- 在不泄露密钥的前提下排查认证和配置问题。

最后验证：找一个测试仓库，让 Codex 读代码、补测试、修失败、解释 diff。
