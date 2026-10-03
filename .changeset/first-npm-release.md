---
"@openflow/protocol": patch
---

First release on npm as `@openflow/protocol`. The package now ships compiled
JavaScript and `.d.ts` for the module entry (`dist/`) alongside `global.d.ts`.
`@openflow/protocol/index.ts` still resolves (to the compiled output) but is
deprecated: import from `@openflow/protocol` instead.
