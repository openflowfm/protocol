// Type-level consumer check: resolves the package through its own exports map
// (self-reference), exactly as an installed consumer would, against the built
// dist/. Compiled with `npm test` (NodeNext resolution, skipLibCheck off), so
// a broken `types` condition or a missing global namespace fails here.
//
// global.d.ts is deliberately NOT listed in tsconfig: it must arrive through
// the reference preserved in dist/index.d.ts.

import { DEFAULT_PORT, WS_PATH, type Event, type Request, type Track } from '@openflow/protocol';
import { WS_PATH as LEGACY_WS_PATH, type Snapshot } from '@openflow/protocol/index.ts';

const path: '/ws' = WS_PATH;
const legacyPath: '/ws' = LEGACY_WS_PATH;
const port: 17800 = DEFAULT_PORT;

// The module types and the global namespace are the same types.
const track: Track = {} as OpenFlow.Track;
const global: OpenFlow.Track = track;
const snapshot: OpenFlow.Snapshot = {} as Snapshot;
const request: OpenFlow.Request = {} as Request;
const event: OpenFlow.Event = {} as Event;

export { path, legacyPath, port, global, snapshot, request, event };
