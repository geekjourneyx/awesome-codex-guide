# Contributing

Thanks for improving Awesome Codex Guide.

## What We Accept

- Official Codex documentation links.
- Tested workflows with commands, expected output, and failure modes.
- Clear troubleshooting pages with version and verification date.
- Community resources with source code, maintenance signals, and permission notes.
- English translations for existing Chinese-first pages.

## What We Reject

- Shared API keys, key pools, authentication bypasses, quota abuse, or closed proxy schemes.
- One-click scripts without source review.
- SEO-only articles that copy installation steps without tested context.
- Resources with unclear permissions or no maintenance signal.

## Resource Metadata

Every resource in `metadata/resources.json` needs:

- `id`
- `title`
- `url`
- `category`
- `language`
- `summary`
- `use_cases`
- `authority`
- `trust_label`
- `risk_score`
- `last_verified`
- `agent_notes.best_for`
- `agent_notes.not_for`

Run before submitting:

```bash
npm test
npm run validate
```
