# Observed validation — 2026-11-25

- Production Vite build passed; runtime is the canonical real WASM worker, not a mock.
- Real Chrome CPU inference matched 6/6 intended contract links across two materially different synthetic examples: language/compression/origin and responsive-device/image-format/nonreusable medical data. These tiny fixtures are not an accuracy claim.
- Negation challenge selected language when compression was intended. Mandatory human review remains required; similarity is not entailment.
- A context-only change selected a different contract and changed deterministic key results. 24-record inference exercised four-text chunks and preserved all request occurrences.
- Warmed-page, fresh-worker inference passed with all network blocked. No cold offline app-shell claim.
- Review/edit/approval renewal, hold, undo, invalid approved input, fresh applied exports, audit reimport, clipboard, cancellation/retry and stale response/file-read guards passed.
- Empty, non-JSON, invalid schema, oversized input, unsupported file formats and unsafe keys failed visibly without fabricated results.
- Actual worker/model-host download aborts failed visibly; real-model retries passed after network restoration. Fault-injected unsupported Worker/WASM, construction/error, malformed vectors and timeout all surfaced errors. Stale late response could not overwrite edited input. These defensive checks use injected faults; successful AI checks use real weights.
- `oracle-validation.json`: 21 known-answer checks including URL-only collision, correct/wrong Vary, wildcard nonreuse, missing versus empty, same representation tags, malformed and credential headers, invalid contracts and invalid vectors.
- Actual JSON/CSV/Markdown/fixture downloads retained 3/3/3/24 batch records; Python csv/json independently reparsed quoted multiline reviews and represented requests. Fixture expected-key arrays equal current reviewed results. User-edited newline survives export.
- Desktop 1440 and narrow 390/320 CSS-pixel screenshots inspected. No horizontal overflow; all form inputs labeled and rendered touch controls ≥44px. Physical touch hardware/other engines untested.
- Request audit from startup through real inference: GET-only, no request bodies or source contexts in URLs; only same-origin/blob and documented model hosts. Persisted logs strip signed CDN query values. No model request before explicit loading. Built-asset credential-pattern scan plus source inspection checks for absence of provider integration/credentials.

Public/assembled verification results are recorded below when completed. None of these checks establish full HTTP cache compliance: exact raw header tuple matching intentionally omits semantic normalization, freshness and policy.

## Assembly and size recovery

Root predeploy first built all 854 apps but correctly refused publication at 1,000,192,908 bytes. Deploy-only deduplication now also covers `20261106-5`: its 541,470-byte Manifold runtime matches the immutable `20261028-24` asset exactly. Source builds remain unchanged; legacy JS compatibility URLs and query-versioned entries remain available. Final assembled site: **999,651,644 bytes**, below unchanged 1,000,000,000-byte guard. Real legacy browser checks passed default geometry plus PNG/JPEG/ASCII/binary-STL imports and fingerprint/mesh-validated STL downloads using the shared runtime. Future apps will require more headroom; the guard remains active.

Assembled app and gallery passed real inference/export/offline/layout checks; all 854 gallery entries and older categories survived. Context-only AI link changes produced 0 versus 1 collision witnesses with identical request data. Runtime/factory/WASM and new app asset bytes match the served production files. See assembled reports and `size-recovery-validation.json`.

## Public publication verified

Root combined deploy published commit `64705a80f59319eb66e340e8128515007b1d6017`; Pages reports built and workflow 45444925303 completed successfully. Public URL returned 200. Full public browser suite repeated both real model fixtures, 24-record batches, context-only impact, review/edit/undo/hold, malformed inputs, actual downloads, copy, layout and warmed-page offline inference. Independent Python parsing passed public downloads; dedicated real-AI collision batch exposed the expected [0,1] pair. Public app/worker/factory/WASM/gallery bytes equal assembled assets. Legacy public geometry/import/export and shared asset byte checks passed. Negation limitation reproduced, not concealed. No physical-device, non-Chrome, semantic header normalization, cold-offline startup or live-cache compliance claim.
