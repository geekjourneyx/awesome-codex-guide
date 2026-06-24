# Awesome Codex Guide

**中文优先、English switchable、Agent-readable 的 OpenAI Codex 实战指南。**

> 这不是 Codex 链接农场。目标是把官方文档、社区生态和真实工作流整理成一张可以执行的 Codex practice map。

[English](./README.en.md) | [中文](./README.zh-CN.md) | [Agent Index](./agent-index.json) | [llms.txt](./llms.txt) | [Contributing](./CONTRIBUTING.md)

## 从这里开始

| 你的目标 | 中文入口 | English |
| --- | --- | --- |
| 快速理解 Codex 学习路线 | [入门路线](./docs/getting-started/README.zh-CN.md) | [Getting Started](./docs/getting-started/README.en.md) |
| 安装和使用 Codex CLI | [CLI 实战](./docs/codex-cli/README.zh-CN.md) | [CLI Guide](./docs/codex-cli/README.en.md) |
| 写好项目级指令 | [AGENTS.md](./docs/agents-md/README.zh-CN.md) | Coming soon |
| 控制权限和安全边界 | [权限与安全](./docs/permissions-security/README.zh-CN.md) | Coming soon |
| 接入 MCP、Skills、Plugins、Subagents | [生态扩展](./docs/resources/ecosystem.zh-CN.md) | Coming soon |
| 解决 401、沙箱、配置问题 | [排障手册](./docs/troubleshooting/common-errors.zh-CN.md) | [Troubleshooting](./docs/troubleshooting/common-errors.en.md) |
| 看真实工程工作流 | [实战工作流](./docs/workflows/README.zh-CN.md) | Coming soon |

## 项目原则

- **任务优先**：每个页面必须回答一个真实任务、修复一个失败模式，或帮助 Agent 更准确执行。
- **官方优先**：OpenAI 官方文档和 `openai/codex` 是最高权威；社区链接只作为证据和案例。
- **安全优先**：涉及 API key、认证、MCP、插件、本地文件访问和命令执行的资源必须标注权限和风险。
- **中文优先**：默认服务中文开发者；英文版只保留高价值入口和可维护的翻译。
- **Agent 友好**：提供 `llms.txt`、`llms-full.txt`、`agent-index.json` 和 `metadata/resources.json`。
- **持续验证**：每个核心资源必须有 `last_verified`、可信度标签和风险分。

## 收录标准

优先收录：

- 官方 Codex 文档、`openai/codex`、OpenAI 发布内容。
- 可复现的 Codex CLI、AGENTS.md、权限、安全、MCP、Skills、Plugins、Subagents 教程。
- 真实工程工作流：修 bug、写测试、代码审查、发布、重构、排障。
- 活跃维护、源码可审计、权限清晰的社区项目。

拒绝收录：

- 第三方 key 池、共享 token、认证绕过、破解额度。
- 无源码一键脚本、闭源代理、权限不透明工具。
- 只复制安装命令、没有版本和验证日期的 SEO 拼接文章。
- 夸大“完全替代程序员”“无限免费”“零风险接管仓库”的内容。

## 可信度标签

| 标签 | 含义 |
| --- | --- |
| Official | 官方或一手维护资源 |
| Community | 社区维护，已基本验证 |
| Experimental | 新项目或生态探索，稳定性未知 |
| Security Review Needed | 涉及 token、权限、代理、脚本执行，需自行审计 |
| Archived / Outdated | 可能过时，仅作历史参考 |

## 核心资源

- [OpenAI Codex official docs](https://developers.openai.com/codex/quickstart) - 官方入口。
- [openai/codex](https://github.com/openai/codex) - 官方 Codex CLI 仓库。
- [ComposioHQ/awesome-codex-skills](https://github.com/ComposioHQ/awesome-codex-skills) - Codex Skills 生态。
- [VoltAgent/awesome-codex-subagents](https://github.com/VoltAgent/awesome-codex-subagents) - Codex Subagents 集合。
- [hashgraph-online/awesome-codex-plugins](https://github.com/hashgraph-online/awesome-codex-plugins) - Codex plugins 生态观察。
- [RoggeOhta/awesome-codex-cli](https://github.com/RoggeOhta/awesome-codex-cli) - Codex CLI 工具索引。
- [bozhouDev/codex-orange-book](https://github.com/bozhouDev/codex-orange-book) - 中文 Codex 橙皮书，从安装到实战案例的全链路指南。
- [freestylefly/CodexGuide](https://github.com/freestylefly/CodexGuide) - 高热中文 Codex 实践指南开源仓库。
- [CodexGuide.ai](https://codexguide.ai/) - 中文 Codex 教程站，覆盖 App、CLI、AGENTS.md、权限、排障和实战案例。

更多结构化条目见 [metadata/resources.json](./metadata/resources.json)。

## 仓库结构

```txt
docs/                 Task-first Codex guides
examples/             Runnable or versioned examples
metadata/             Agent-friendly resource metadata
scripts/              Validation scripts
agent-index.json      Compact routing index for agents
llms.txt              AI crawler and agent entrypoint
llms-full.txt         Expanded context map
```

## 许可证

[MIT](./LICENSE)
