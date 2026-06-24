# Codex 生态扩展

## 生态地图

| 类型 | 解决什么 | 代表资源 |
| --- | --- | --- |
| Skills | 可复用任务能力 | [awesome-codex-skills](https://github.com/ComposioHQ/awesome-codex-skills) |
| Subagents | 多角色任务分工 | [awesome-codex-subagents](https://github.com/VoltAgent/awesome-codex-subagents) |
| Plugins | 外部系统能力 | [awesome-codex-plugins](https://github.com/hashgraph-online/awesome-codex-plugins) |
| MCP | 工具和上下文协议 | [Codex MCP docs](https://developers.openai.com/codex/mcp) |
| CLI tools | 终端工作流增强 | [awesome-codex-cli](https://github.com/RoggeOhta/awesome-codex-cli) |

## 使用顺序

不要一开始就装很多扩展。推荐顺序：

1. 先跑通 Codex CLI。
2. 写好 `AGENTS.md`。
3. 确认权限和审批边界。
4. 再按任务引入 MCP、Skills、Plugins、Subagents。

## 收录提醒

生态资源不等于背书。任何需要 token、浏览器、数据库、云账号、本地文件写入的工具，都必须先看源码、权限范围和数据流。

Last verified: 2026-06-24
