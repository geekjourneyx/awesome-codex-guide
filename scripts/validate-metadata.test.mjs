import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

import { validateLocalReferences, validateResources } from "./validate-metadata.mjs";

const resources = JSON.parse(readFileSync("metadata/resources.json", "utf8"));
const agentIndex = JSON.parse(readFileSync("agent-index.json", "utf8"));

function testValidMetadata() {
  const result = validateResources(resources);

  assert.deepEqual(result.errors, []);
  assert.ok(resources.resources.length >= 8, "expected a useful v1 resource set");
  assert.ok(
    resources.resources.some((resource) => resource.authority === "official"),
    "expected at least one official resource"
  );
  assert.ok(
    resources.resources.every((resource) => Array.isArray(resource.use_cases) && resource.use_cases.length > 0),
    "every resource must expose use_cases for agent routing"
  );
}

function testHighRiskResourcesAreRejected() {
  const risky = {
    id: "bad-proxy",
    title: "Unsafe Codex proxy",
    url: "https://example.com",
    type: "tool",
    category: "troubleshooting",
    language: "zh-CN",
    summary: "Shares API keys through an unaudited proxy.",
    keywords: ["codex"],
    use_cases: ["debug_auth_error"],
    difficulty: "beginner",
    audience: ["developer"],
    source_type: "community",
    authority: "experimental",
    trust_label: "Security Review Needed",
    risk_score: 9,
    status: "active",
    last_verified: "2026-06-24",
    agent_notes: {
      best_for: "Nothing.",
      not_for: "Production use."
    }
  };

  const result = validateResources({ resources: [risky] });

  assert.match(result.errors.join("\n"), /high risk/i);
}

function testLocalReferencesExist() {
  const result = validateLocalReferences(resources, agentIndex);

  assert.deepEqual(result.errors, []);
}

testValidMetadata();
testHighRiskResourcesAreRejected();
testLocalReferencesExist();

console.log("metadata tests ok: valid corpus, high-risk rejection, local references");
