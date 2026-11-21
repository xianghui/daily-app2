# Observed validation — Span Meadow

Scheduled build 2026-11-21. Chrome headless on macOS, WASM CPU with GPU disabled for actual AI tests. All inputs synthetic. No physical phone, other engine, physical route, safety or real-world savings validation.

## Actual model + production workflows

`browser-test.cjs` loads the real shared Transformers.js/ONNX worker and Hugging Face MiniLM q8 weights. Successful checks are not mocked. The suite ran against the individual production bundle and the assembled `deploy/` production bundle (reports: `browser-validation.json`, `assembled-browser-validation.json`).

| Fixture | Known endpoint keys matched | Source-order work estimate | Minimum-forest estimate | Connectivity |
|---|---:|---:|---:|---|
| Festival paths | 10/10 | 55 minutes | 37 minutes | All four locations connected |
| Archive corridors | 8/8 | 54 minutes | 33 minutes | Packing room retained as isolated; incomplete forest |

These are tiny fixture outcomes, not universal accuracy or measured savings. All suggestions are pending until reviewed. `input-stale-validation.json` records a negated probe: expected reception n0 → packing n4, actual cold storage n2 → packing n4. The model is not reliable for negation/identity proof; mandatory review remains necessary. AI produces semantic vectors and materially changes endpoint IDs. The optimizer never invents a path or work estimate.

## Hard constraints, review, data and artifacts

- `core-test.mjs`: 120 small connected graphs, including mandatory edges, matched independent exhaustive n−1-edge subset enumeration for minimum work. Invalid source, malformed vectors, pending reviews, self-links and mandatory cycles rejected.
- Actual model maximum: 36 source paths, 12 catalog locations, 84 texts / 21 chunks; all records and isolated locations conserved. Selected forest edge count equals locations minus components. Maximum audit file reimport restores all 36 originals.
- Browser pending-review block, mandatory-cycle block/recovery, mandatory edge inclusion, edited minutes, multiline notes, hold/exclusion, undo and export invalidation passed. Source edits discard old review snapshots.
- Browser-downloaded JSON/Audit CSV/Plan CSV/Markdown artifacts independently parsed by Python `csv`/`json` in `artifact-test.py`. Every original ID/endpoint retained; selected edge IDs and summed minutes match reviewed JSON. Edited 2-minute path appears in current plan; comma/quote/newline/formula-like note preserved with documented CSV apostrophe protection. Copy equals downloaded Markdown.

## Cancellation, stale results and failure paths

`defensive-validation.json`: blocked model host then real retry; no WebAssembly; worker download abort; unsupported Worker constructor; malformed vector result; malformed envelope; worker error; accelerated timeout; late cancelled/input-invalidated messages. Fault injection was used only for defensive cases, never to pass successful AI checks. Every failure leaves no fake recommendations and disables artifacts.

`cold-cancel-validation.json`: genuinely cold model-file request held, loading progress visible, cancellation before model loaded, real model retry succeeds.

`input-stale-validation.json`: empty, invalid, null, oversized source; invalid estimates; duplicate locations; unsupported/oversized/malformed files; pending/invalid review blocks; old **actual** inference result deliberately delayed until after a second real run cannot overwrite the newer source. `file-race-validation.json`: delayed file read cannot replace newer example, keyboard focus reaches an interactive control.

## Runtime, privacy and cache

`runtime-dependency-audit.json`: inspected shared worker settings/protocol, actual tokenizer 512-token ceiling, Transformers.js 4.3.2, runtime hashes and observed unpinned model revision. Exact shared dependencies preserved. Browser captures confirm no model requests before explicit loading, only external GET downloads with no request bodies, no content-bearing URLs or external uploads. Audit reports store hosts/paths/query-key names, not signed query values. Built-text credential-pattern scan passed (`security-validation.json`); source data-flow inspection found no remote provider, credential handling or upload implementation. A pattern scan alone is not a proof about every possible secret.

After online inference, the entire browser context was made offline and a **fresh worker** completed real inference. Same result in assembled production bundle. This validates only a warmed already-open page, **not offline reload/navigation**. Cache eviction/private mode remain limitations. CPU works without WebGPU; physical phones and other engines unverified.

## UI and gallery

1440, 390 and 320 CSS-pixel viewport checks: no horizontal overflow, every input/textarea/select labeled, visible buttons/inputs/selects/summaries ≥44 px, no page errors. Hero/review/results normal-height screenshots saved; phone hero/review/results visually inspected. Full endpoint descriptions available in neural evidence and source, since narrow selects truncate option display.

Every inline gallery script compiled with Node `new Function`; missing scripts would fail. New entry exactly once, area ai-utility, all 766 previous entries unchanged. Actual assembled gallery renders 767 cards, AI Utilities first, legacy STL/mini-game categories and search retained; phone widths passed (`gallery-validation.json`, `gallery-ui-validation.json`).

## Combined size / legacy regression

First assembly exceeded the unchanged conservative 1 GB guard. An attempted rule for unpublished `20261028-20` saved no deployed bytes, so it was removed. Final rule extends existing byte-identical Manifold sharing only to published **Scene & Slot (`20261028-28`) → immutable `20261028-24`**, with compatibility JS URLs preserved and entry/worker references query-versioned. No source builds or older apps removed/changed. Final successful root predeploy: **999,636,927 bytes**, 767 apps, zero failed/skipped builds. Source-build hashes matched before/after.

`legacy-assembled-validation.json`: actual old-app geometry worker, shared WASM, PNG import and STL import with millimeter confirmation, closed positive-volume manifold STL downloads and exact preview/export fingerprint checks passed. Original legacy build unmodified (`legacy-source-preservation.json`).

## Publication

Public asset, real-model, offline, export, legacy and gallery checks are recorded separately after the matching Pages build succeeds. See `publication-status.json` and public report files; no branch-push-only success claim.

### Public checks completed

Matching Pages commit `1656659ef3e96b582857341c02ede8670767d967` reached built; workflow 44848621599 succeeded. Nine public gallery/new-app/AI runtime assets and four affected legacy entry/worker/WASM assets matched deployed bytes. The full actual-model suite passed publicly: both fixtures (18 endpoint keys), correct connected/incomplete forests, current edited artifact downloads/copy, maximum batch/audit import, cancel/retry, mandatory constraints and fresh-worker offline inference in a warmed page. Independent artifact parsing passed again. Public gallery rendered all 767 cards with legacy categories preserved. Public affected Scene & Slot worker, PNG/STL imports, exact fingerprint and valid closed-mesh export checks passed. See public report files and `publication-status.json`. No physical devices, offline app-shell restart or real path work tested.
