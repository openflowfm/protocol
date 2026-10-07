# AGENTS.md

`@openflow/protocol`: the wire protocol types (`global.d.ts`, the source of
truth) plus module re-exports (`index.ts`, compiled to `dist/`). Node version is
in `.nvmrc`. Read the README before changing a message.

## Checks

Run `npm ci` once per worktree (its `prepare` script builds `dist/`). Each check is quick; run each once, in this
order, after your last edit. CI (`.github/workflows/ci.yml`) runs the same list
on every push and PR.

| Command | What it checks | When to run |
| --- | --- | --- |
| `npm run typecheck` | `index.ts` and `global.d.ts` compile (no emit) | Any change to `.ts` / `.d.ts` or tsconfig |
| `npm run build` | Emits `dist/index.js` and `dist/index.d.ts` | Before `npm test` or `npm pack`; after changing `index.ts` or `tsconfig.build.json` |
| `npm test` | Type-level and runtime consumer checks against `dist/` through the exports map (`test/`) | Any change to `index.ts`, `package.json` exports, or build config; needs `npm run build` first |
| `npm pack --dry-run` | The tarball contains only `dist/index.js`, `dist/index.d.ts`, `global.d.ts`, README, LICENSE, `package.json` | Any change to `files`, `exports` or the build |

There is no watcher; the build is a single `tsc` run.

## Rules

- Don't add a second copy of any type. `global.d.ts` is the source of truth;
  `index.ts` only re-exports.
- Changing what consumers get (types, constants, exports, files) needs a
  changeset: `npx changeset`, commit the file under `.changeset/`.
- Never run `npm publish` or bump `version` by hand. The Release workflow does
  both (see README > Releasing).
- Versioning below 1.0: breaking change = **minor**, features and fixes =
  **patch** (matches npm `^0.x` ranges). No `-rc`/prerelease versions during
  0.x. 1.0.0 is the first release meant for other people.
- `RENOVATE_DISPATCH_TOKEN` and the `renovate` dispatch event type are a shared
  contract with `openflowfm/renovate`; don't rename them.
- `dist/` is build output and gitignored.
- Every agent commit must end with a blank line and a GitHub-compatible co-author trailer naming the agent that actually made it, for example `Co-authored-by: Codex <noreply@openai.com>` or `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`. Never name an agent that didn't write the commit.
