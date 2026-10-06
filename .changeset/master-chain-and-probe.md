---
"@openflow/protocol": patch
---

Add the master[flow] contract: `insertDevice`, `deleteDevice` and `moveDevice` (with
`deviceInserted`, `deviceDeleted` and `deviceMoved` replies), `paramText` for Live's text
of a control's values without writing them, and the probe messages `probes`,
`probeListen`, `probeListening` and `probeReport` with the `ProbeReport`, `ProbeBand`,
`ProbeEntry` and `DeviceRun` types. `identify` now takes any client key plus an optional
display `name` and `version`; `ClientKind` is a `string`, and `{ client: 'set' }` stays
valid.
