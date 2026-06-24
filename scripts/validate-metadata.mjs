import { existsSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const allowedLanguages = new Set(["zh-CN", "en"]);
const allowedTrustLabels = new Set([
  "Official",
  "Community",
  "Experimental",
  "Security Review Needed",
  "Archived / Outdated"
]);

const requiredFields = [
  "id",
  "title",
  "url",
  "type",
  "category",
  "language",
  "summary",
  "keywords",
  "use_cases",
  "difficulty",
  "audience",
  "source_type",
  "authority",
  "trust_label",
  "risk_score",
  "status",
  "last_verified",
  "agent_notes"
];

export function validateResources(document) {
  const errors = [];
  const resources = Array.isArray(document?.resources) ? document.resources : [];
  const ids = new Set();

  if (!Array.isArray(document?.resources)) {
    errors.push("resources must be an array");
    return { errors };
  }

  for (const [index, resource] of resources.entries()) {
    const label = resource?.id || `resource at index ${index}`;

    for (const field of requiredFields) {
      if (!(field in resource)) {
        errors.push(`${label}: missing required field "${field}"`);
      }
    }

    if (typeof resource.id === "string") {
      if (ids.has(resource.id)) {
        errors.push(`${label}: duplicate id`);
      }
      ids.add(resource.id);
    }

    if (!allowedLanguages.has(resource.language)) {
      errors.push(`${label}: unsupported language "${resource.language}"`);
    }

    if (!allowedTrustLabels.has(resource.trust_label)) {
      errors.push(`${label}: unsupported trust_label "${resource.trust_label}"`);
    }

    if (!Array.isArray(resource.keywords) || resource.keywords.length === 0) {
      errors.push(`${label}: keywords must be a non-empty array`);
    }

    if (!Array.isArray(resource.use_cases) || resource.use_cases.length === 0) {
      errors.push(`${label}: use_cases must be a non-empty array`);
    }

    if (!Array.isArray(resource.audience) || resource.audience.length === 0) {
      errors.push(`${label}: audience must be a non-empty array`);
    }

    if (!Number.isInteger(resource.risk_score) || resource.risk_score < 0 || resource.risk_score > 10) {
      errors.push(`${label}: risk_score must be an integer from 0 to 10`);
    }

    if (resource.risk_score >= 8 && resource.status !== "excluded") {
      errors.push(`${label}: high risk resources must be excluded or removed`);
    }

    if (resource.trust_label === "Official" && resource.authority !== "official") {
      errors.push(`${label}: Official resources must use authority "official"`);
    }

    if (!/^\d{4}-\d{2}-\d{2}$/.test(resource.last_verified || "")) {
      errors.push(`${label}: last_verified must use YYYY-MM-DD`);
    }

    if (
      !resource.agent_notes ||
      typeof resource.agent_notes.best_for !== "string" ||
      typeof resource.agent_notes.not_for !== "string"
    ) {
      errors.push(`${label}: agent_notes.best_for and agent_notes.not_for are required`);
    }
  }

  return { errors };
}

export function validateLocalReferences(resourcesDocument, agentIndexDocument) {
  const errors = [];
  const resources = Array.isArray(resourcesDocument?.resources) ? resourcesDocument.resources : [];
  const entrypoints = Array.isArray(agentIndexDocument?.entrypoints) ? agentIndexDocument.entrypoints : [];
  const metadata = agentIndexDocument?.metadata || {};

  for (const resource of resources) {
    if (typeof resource.url === "string" && !isExternalUrl(resource.url) && !existsSync(resource.url)) {
      errors.push(`${resource.id}: local url does not exist: ${resource.url}`);
    }

    if (typeof resource.canonical === "string" && !isExternalUrl(resource.canonical) && !existsSync(resource.canonical)) {
      errors.push(`${resource.id}: local canonical does not exist: ${resource.canonical}`);
    }
  }

  for (const entrypoint of entrypoints) {
    if (!existsSync(entrypoint.url)) {
      errors.push(`agent-index entrypoint missing: ${entrypoint.url}`);
    }
  }

  for (const [key, value] of Object.entries(metadata)) {
    if (!existsSync(value)) {
      errors.push(`agent-index metadata "${key}" missing: ${value}`);
    }
  }

  return { errors };
}

function isExternalUrl(value) {
  return /^https?:\/\//.test(value);
}

function main() {
  const document = JSON.parse(readFileSync("metadata/resources.json", "utf8"));
  const agentIndex = JSON.parse(readFileSync("agent-index.json", "utf8"));
  const result = mergeResults(validateResources(document), validateLocalReferences(document, agentIndex));

  if (result.errors.length > 0) {
    for (const error of result.errors) {
      console.error(`metadata error: ${error}`);
    }
    process.exit(1);
  }

  console.log(`metadata ok: ${document.resources.length} resources`);
}

function mergeResults(...results) {
  return { errors: results.flatMap((result) => result.errors) };
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main();
}
