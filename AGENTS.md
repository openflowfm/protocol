# AGENTS.md

`@openflow/protocol`: the wire protocol types (`global.d.ts`, the source of
truth) plus module re-exports (`index.ts`, compiled to `dist/`). Node version is
in `.nvmrc`. Read the README before changing a message.

## Checks

Run `npm ci` once per worktree. A change runs only `npm run build` and
`npm run typecheck`. The rest runs in a test pass (when asked, or before a PR,
each check once) and on CI (`.github/workflows/ci.yml`, every push and PR).
Tests are written to a spec as their own step, not as part of a change.

| Command | What it checks | When to run |
| --- | --- | --- |
| `npm run typecheck` | `index.ts` and `global.d.ts` compile (no emit) | After any change |
| `npm run build` | Emits `dist/index.js` and `dist/index.d.ts` | After any change; before `npm test` or `npm pack` |
| `npm test` | Type-level and runtime consumer checks against `dist/` through the exports map (`test/`) | Test pass and CI; needs `npm run build` first |
| `npm pack --dry-run` | The tarball contains only `dist/index.js`, `dist/index.d.ts`, `global.d.ts`, README, LICENSE, `package.json` | Test pass when `files`, `exports` or the build changed, and CI |

There is no watcher; the build is a single `tsc` run.

## Rules

- Don't add a second copy of any type. `global.d.ts` is the source of truth;
  `index.ts` only re-exports.
- Changing what consumers get (types, constants, exports, files) needs a
  changeset, once per PR (not per change): `npx changeset`, commit the file
  under `.changeset/`.
- Never run `npm publish` or bump `version` by hand. The Release workflow does
  both (see README > Releasing).
- Versioning below 1.0: breaking change = **minor**, features and fixes =
  **patch** (matches npm `^0.x` ranges). No `-rc`/prerelease versions during
  0.x. 1.0.0 is the first release meant for other people.
- `RENOVATE_DISPATCH_TOKEN` and the `renovate` dispatch event type are a shared
  contract with `openflowfm/renovate`; don't rename them.
- `dist/` is build output and gitignored.
