// Runtime consumer check: Node resolves both entry points through the exports
// map (self-reference) to the built dist/. Run with `npm test` after `npm run build`.

import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { test } from 'node:test';

test('the package root resolves to the compiled constants', async () => {
  const mod = await import('@openflow/protocol');
  assert.equal(mod.WS_PATH, '/ws');
  assert.equal(mod.DEFAULT_PORT, 17800);
});

test('the deprecated index.ts subpath resolves to the same compiled module', async () => {
  const root = await import('@openflow/protocol');
  const legacy = await import('@openflow/protocol/index.ts');
  assert.equal(legacy, root);
});

test('global.d.ts and package.json are reachable through the exports map', async () => {
  const require = createRequire(import.meta.url);
  const pkg = require('@openflow/protocol/package.json');
  assert.equal(pkg.name, '@openflow/protocol');
  const globalPath = import.meta.resolve('@openflow/protocol/global.d.ts');
  assert.match(await readFile(new URL(globalPath), 'utf8'), /declare namespace OpenFlow/);
});
