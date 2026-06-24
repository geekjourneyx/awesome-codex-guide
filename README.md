# Awesome Codex Guide

**给中文开发者看的 OpenAI Codex 使用手册。**

这里收官方文档、中文教程、社区项目和一些可直接复制的工作流。重点是少绕路，少踩坑。

[English](./README.en.md) | [中文](./README.zh-CN.md) | [Agent Index](./agent-index.json) | [llms.txt](./llms.txt) | [Contributing](./CONTRIBUTING.md)

<img src="assets/banner.webp" alt="Awesome Codex Guide banner" width="100%">

## 先看这些

| 你的目标 | 中文入口 | English |
| --- | --- | --- |
| 先弄清怎么学 | [入门路线](./docs/getting-started/README.zh-CN.md) | [Getting Started](./docs/getting-started/README.en.md) |
| 安装和使用 Codex CLI | [CLI 使用](./docs/codex-cli/README.zh-CN.md) | [CLI Guide](./docs/codex-cli/README.en.md) |
| 写好项目级指令 | [AGENTS.md](./docs/agents-md/README.zh-CN.md) | Coming soon |
| 别把权限放太大 | [权限与安全](./docs/permissions-security/README.zh-CN.md) | Coming soon |
| 找 MCP、Skills、Plugins、Subagents | [扩展资源](./docs/resources/ecosystem.zh-CN.md) | Coming soon |
| 解决 401、沙箱、配置问题 | [排障手册](./docs/troubleshooting/common-errors.zh-CN.md) | [Troubleshooting](./docs/troubleshooting/common-errors.en.md) |
| 复制常用工作流 | [工作流](./docs/workflows/README.zh-CN.md) | Coming soon |

## 怎么收

- 先放官方资料，再放社区资料。
- 每条资源都要说明用在什么场景。
- 需要 token、MCP、插件、本地文件访问的内容，要写清风险。
- 过期、无法验证、只讲噱头的内容不收。
- 给 Agent 用的索引放在 `llms.txt`、`agent-index.json` 和 `metadata/resources.json`。

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

## 标签

| 标签 | 含义 |
| --- | --- |
| Official | 官方或一手维护资源 |
| Community | 社区维护，已基本验证 |
| Experimental | 新项目或生态探索，稳定性未知 |
| Security Review Needed | 涉及 token、权限、代理、脚本执行，需自行审计 |
| Archived / Outdated | 可能过时，仅作历史参考 |

## 推荐资源

- [OpenAI Codex official docs](https://developers.openai.com/codex/quickstart) - 官方入口。
- [openai/codex](https://github.com/openai/codex) - 官方 Codex CLI 仓库。
- [ComposioHQ/awesome-codex-skills](https://github.com/ComposioHQ/awesome-codex-skills) - Codex Skills 资源。
- [VoltAgent/awesome-codex-subagents](https://github.com/VoltAgent/awesome-codex-subagents) - Codex Subagents 集合。
- [hashgraph-online/awesome-codex-plugins](https://github.com/hashgraph-online/awesome-codex-plugins) - Codex plugins 资源。
- [RoggeOhta/awesome-codex-cli](https://github.com/RoggeOhta/awesome-codex-cli) - Codex CLI 工具索引。
- [bozhouDev/codex-orange-book](https://github.com/bozhouDev/codex-orange-book) - 中文 Codex 橙皮书，有安装、配置和案例。
- [freestylefly/CodexGuide](https://github.com/freestylefly/CodexGuide) - 中文 CodexGuide 开源仓库。
- [CodexGuide.ai](https://codexguide.ai/) - 中文 Codex 教程站，有 App、CLI、AGENTS.md、权限、排障和案例。

更多结构化条目见 [metadata/resources.json](./metadata/resources.json)。

## 仓库结构

```txt
docs/                 使用说明
examples/             可复制的提示词和例子
metadata/             资源索引
scripts/              校验脚本
agent-index.json      给 Agent 用的入口
llms.txt              给 AI 搜索和 Agent 看的摘要
llms-full.txt         详细索引说明
```

## 许可证

[MIT](./LICENSE)
