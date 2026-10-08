# @openflow/protocol

## 0.1.0

### Patch Changes

- de42b50: First release on npm as `@openflow/protocol`. The package now ships compiled
  JavaScript and `.d.ts` for the module entry (`dist/`) alongside `global.d.ts`.
  `@openflow/protocol/index.ts` still resolves (to the compiled output) but is
  deprecated: import from `@openflow/protocol` instead.
- fa6fe58: Installing from git (`github:openflowfm/protocol#<sha>`) now builds `dist/` through a `prepare` script, so the package's exports resolve without a manual build.
- 01b95e7: Add the master[flow] contract: `insertDevice`, `deleteDevice` and `moveDevice` (with
  `deviceInserted`, `deviceDeleted` and `deviceMoved` replies), `paramText` for Live's text
  of a control's values without writing them, and the probe messages `probes`,
  `probeListen`, `probeListening`, `probePass` and `probeReport` with the `ProbeReport`, `ProbeBand`,
  `ProbeEntry` and `DeviceRun` types. `identify` now takes any client key plus an optional
  display `name` and `version`; `ClientKind` is a `string`, and `{ client: 'set' }` stays
  valid.
- 4f375e7: Document that a probe pass ends when the client that started it disconnects without stopping it (`global.d.ts` and README).
