/// <reference path="./global.d.ts" preserve="true" />
// `preserve` keeps this reference into dist/index.d.ts, so importing this module
// also brings the global `OpenFlow` namespace into scope.
//
// Module re-exports of the global OpenFlow namespace, for consumers that can use
// normal imports (set/, core/). See global.d.ts for why the source of truth is
// a global namespace.

export type Track = OpenFlow.Track;
export type Scene = OpenFlow.Scene;
export type Clip = OpenFlow.Clip;
export type PlayingClip = OpenFlow.PlayingClip;
export type ClipStatusFrame = OpenFlow.ClipStatusFrame;
export type Snapshot = OpenFlow.Snapshot;
export type Palette = OpenFlow.Palette;
export type TransportState = OpenFlow.TransportState;
export type TransportPatch = OpenFlow.TransportPatch;
export type ApplyOp = OpenFlow.ApplyOp;
export type SceneOp = OpenFlow.SceneOp;
export type Role = OpenFlow.Role;
export type DeviceState = OpenFlow.DeviceState;
export type ChainDevice = OpenFlow.ChainDevice;
export type RackChain = OpenFlow.RackChain;
export type ChainWatch = OpenFlow.ChainWatch;
export type WatchedChain = OpenFlow.WatchedChain;
export type ChainState = OpenFlow.ChainState;
export type DeviceParameterState = OpenFlow.DeviceParameterState;
export type ChainValueChange = OpenFlow.ChainValueChange;
export type DeviceTarget = OpenFlow.DeviceTarget;
export type DevicePatch = OpenFlow.DevicePatch;
export type DeviceRun = OpenFlow.DeviceRun;
export type ProbeReport = OpenFlow.ProbeReport;
export type ProbeBand = OpenFlow.ProbeBand;
export type ProbeEntry = OpenFlow.ProbeEntry;
export type ClientKind = OpenFlow.ClientKind;
export type ApplyResult = OpenFlow.ApplyResult;
export type Request = OpenFlow.Request;
export type RequestType = OpenFlow.RequestType;
export type Event = OpenFlow.Event;
export type EventType = OpenFlow.EventType;
export type EventOf<K extends OpenFlow.EventType> = OpenFlow.EventOf<K>;

/** WebSocket path. Namespaced so Vite can proxy it in dev without colliding with `/`. */
export const WS_PATH = '/ws';
export const DEFAULT_PORT = 17800;
