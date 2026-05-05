#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

const root = process.argv[2] ? path.resolve(process.argv[2]) : process.cwd();
const requiredFiles = [
  'AGENTS.md',
  'SESSION.md',
  'DOCS_MAINTENANCE.md',
  'docs/README.md',
  'docs/08-process/conventions.md',
  'docs/05-project/feature-registry.md',
  'docs/05-project/doc-code-map.md',
  'docs/02-requirements/glossary.md',
];

const requiredFrontMatterFiles = [
  'AGENTS.md',
  'SESSION.md',
  'DOCS_MAINTENANCE.md',
  'NEW_PROJECT_CHECKLIST.md',
  'docs/README.md',
  'docs/08-process/conventions.md',
  'docs/05-project/feature-registry.md',
  'docs/05-project/doc-code-map.md',
  'docs/02-requirements/glossary.md',
];

const errors = [];
const warnings = [];

function toRelative(filePath) {
  return path.relative(root, filePath).split(path.sep).join('/');
}

function exists(relativePath) {
  return fs.existsSync(path.join(root, relativePath));
}

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), 'utf8');
}

function walk(directory, files = []) {
  if (!fs.existsSync(directory)) return files;
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (entry.name === '.DS_Store' || entry.name === 'node_modules' || entry.name === '.git') continue;
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) walk(fullPath, files);
    if (entry.isFile() && entry.name.endsWith('.md')) files.push(fullPath);
  }
  return files;
}

function hasFrontMatter(content) {
  return content.startsWith('---\n') && content.indexOf('\n---', 4) !== -1;
}

function frontMatter(content) {
  if (!hasFrontMatter(content)) return '';
  return content.slice(4, content.indexOf('\n---', 4));
}

function checkLinks(filePath, content) {
  const relativeFile = toRelative(filePath);
  const base = path.dirname(filePath);
  const linkPattern = /\[[^\]]+\]\(([^)]+)\)/g;
  for (const match of content.matchAll(linkPattern)) {
    const target = match[1];
    if (/^(https?:|mailto:|#)/.test(target)) continue;
    const cleanTarget = decodeURIComponent(target.split('#')[0]);
    if (!cleanTarget) continue;
    const resolved = path.resolve(base, cleanTarget);
    if (!resolved.startsWith(root) || !fs.existsSync(resolved)) {
      errors.push(`${relativeFile}: broken link -> ${target}`);
    }
  }
}

for (const file of requiredFiles) {
  if (!exists(file)) errors.push(`missing required file: ${file}`);
}

for (const file of requiredFrontMatterFiles) {
  if (!exists(file)) continue;
  const content = read(file);
  if (!hasFrontMatter(content)) {
    errors.push(`${file}: missing front-matter`);
    continue;
  }
  const meta = frontMatter(content);
  for (const field of ['status:', 'owner:', 'last_verified:']) {
    if (!meta.includes(field)) errors.push(`${file}: missing ${field}`);
  }
}

const markdownFiles = walk(root);
for (const filePath of markdownFiles) {
  const content = fs.readFileSync(filePath, 'utf8');
  checkLinks(filePath, content);
}

const processDir = path.join(root, 'docs/08-process');
for (const filePath of walk(processDir)) {
  if (path.basename(filePath) === 'README.md' || path.basename(filePath) === 'conventions.md') continue;
  const relative = toRelative(filePath);
  const content = fs.readFileSync(filePath, 'utf8');
  if (!hasFrontMatter(content)) {
    errors.push(`${relative}: process doc missing front-matter`);
    continue;
  }
  const meta = frontMatter(content);
  for (const field of ['status:', 'kind: process', 'trigger:', 'required_when:', 'do_not_use_when:', 'must_read_with:']) {
    if (!meta.includes(field)) errors.push(`${relative}: missing ${field}`);
  }
  if (!meta.includes('optional_when:')) warnings.push(`${relative}: optional_when not set`);
}

const codeOwnsMatches = markdownFiles.filter((filePath) => frontMatter(fs.readFileSync(filePath, 'utf8')).includes('code_owns:'));
if (codeOwnsMatches.length === 0) {
  warnings.push('no document declares code_owns yet; doc-code-map will remain a manual placeholder');
}

const docsRoot = path.join(root, 'docs');
const skipDocsPrefix = ['docs/08-process/', 'docs/discussions/', 'docs/plans/', 'docs/proposed-design/', 'docs/temp-reference/'];
for (const filePath of walk(docsRoot)) {
  const relative = toRelative(filePath);
  if (skipDocsPrefix.some((prefix) => relative.startsWith(prefix))) continue;
  const content = fs.readFileSync(filePath, 'utf8');
  if (!hasFrontMatter(content)) {
    warnings.push(`${relative}: docs file has no front-matter (status/owner/last_verified recommended)`);
  }
}

if (warnings.length) {
  console.log('Warnings:');
  for (const warning of warnings) console.log(`- ${warning}`);
}

if (errors.length) {
  console.error('Documentation validation failed:');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Documentation validation passed (${markdownFiles.length} markdown files checked).`);
