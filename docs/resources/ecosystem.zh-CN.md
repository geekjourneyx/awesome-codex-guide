# Codex 扩展资源

## 资源表

| 类型 | 解决什么 | 代表资源 |
| --- | --- | --- |
| Skills | 可复用任务能力 | [awesome-codex-skills](https://github.com/ComposioHQ/awesome-codex-skills) |
| Subagents | 多角色任务分工 | [awesome-codex-subagents](https://github.com/VoltAgent/awesome-codex-subagents) |
| Plugins | 外部系统能力 | [awesome-codex-plugins](https://github.com/hashgraph-online/awesome-codex-plugins) |
| MCP | 工具和上下文协议 | [Codex MCP docs](https://developers.openai.com/codex/mcp) |
| CLI tools | 终端工作流增强 | [awesome-codex-cli](https://github.com/RoggeOhta/awesome-codex-cli) |
| 中文指南 | 中文学习材料 | [Codex 橙皮书](https://github.com/bozhouDev/codex-orange-book), [CodexGuide](https://github.com/freestylefly/CodexGuide), [CodexGuide.ai](https://codexguide.ai/) |

## Windows 桌面辅助工具

- [Codex Quota Overlay](https://github.com/cpys/codex-quota-overlay)：MIT 开源额度悬浮条与本地 Quota Center；v0.4.0 仅分发 Windows 安装包，macOS 仍为源码/CI 验证范围。该条目由项目维护者授权提交，项目与 OpenAI 无隶属或背书关系。

使用前请阅读项目 [隐私说明](https://github.com/cpys/codex-quota-overlay/blob/main/PRIVACY.md) 并审查源码：工具读取本地 App Server 额度/用量接口，探测前台应用身份及窗口边界；项目声明不读取对话内容、截图或浏览器 Cookie，也不消耗重置额度。API-key-only 配置不保证提供订阅额度数据。Windows 包未商业代码签名，应从项目 Releases 下载并核对发布的校验值。本次只核验公开资料与目录元数据，未重新安装测试或进行独立安全审计。

## 使用顺序

不要一开始就装很多扩展。可以按这个顺序来：

1. 先跑通 Codex CLI。
2. 写好 `AGENTS.md`。
3. 确认权限和审批边界。
4. 再按任务引入 MCP、Skills、Plugins、Subagents。
5. 需要中文长教程时，再看 Codex 橙皮书和 CodexGuide。功能、价格、认证、安全策略还是回到官方资料确认。

## 先看一眼权限

看到需要 token、浏览器、数据库、云账号、本地文件写入的工具，先看源码、权限范围和数据流。

## 中文资源

- [bozhouDev/codex-orange-book](https://github.com/bozhouDev/codex-orange-book) - Codex 橙皮书，可以按长文顺序读。
- [freestylefly/CodexGuide](https://github.com/freestylefly/CodexGuide) - CodexGuide 开源仓库，可以看教程站背后的内容结构。
- [CodexGuide.ai](https://codexguide.ai/) - 教程网站，包含 Codex 桌面 App、CLI、IDE、Cloud、AGENTS.md、沙盒审批、排障和实战案例。

可用性、订阅、认证、权限和安全策略，先回到 OpenAI 官方资料确认。
