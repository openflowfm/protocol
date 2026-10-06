---
"@openflow/protocol": patch
---

Add the master[flow] contract: `insertDevice`, `deleteDevice` and `moveDevice` (with
`deviceInserted`, `deviceDeleted` and `deviceMoved` replies), `paramText` for Live's text
of a control's values without writing them, and the probe messages `probes`,
`probeListen` and `probeReport` with the `ProbeReport`, `ProbeBand` and `DeviceRun` types.
