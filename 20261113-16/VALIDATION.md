# Observed validation — Gauge Harbor, 2026-11-13

## Local production bundle

- `npm run predeploy` passed. Real Transformers.js 4.3.2 MiniLM q8 on WASM CPU, GPU disabled. `browser-validation.json`: 8 workflow checks; both materially different fixture batches matched the eight intended feature links (4/4 each). This tiny curated set is not a general accuracy estimate. Unrelated credential-request text still received a nearest match; it remained pending and was held, with no external action.
- Each fixture: nominal-inside baseline 2, contained 1, overlap 2, disjoint 1; one otherwise nominal-inside reading needs follow-up. Schema/vector finite dimension/norm checks and exact per-record endpoint/count invariants passed.
- `oracle-validation.json`: 4,009 independent BigInt endpoint-predicate cases including containment, zero U, touching boundaries, negative lower endpoints and invalid data rejection.
- Review corrections, pending guard, holds, all holds, undo, multiline owner/note, invalid measurement guard, current-snapshot invalidation, clipboard, audit-original reimport, 40-record batches and stale input changes passed. CSV/JSON downloads independently parsed with Python; all records and multiline quoted/comma/formula-like edits survived, Markdown matched reviewed text.
- Real model-host download cancellation and fresh-input retry passed (`model-cancel-validation.json`). Defensive fault injection separately tested model-host failure/recovery, worker-download failure, unavailable worker runtime, malformed output, timeout and worker errors (`defensive-validation.json`). These mocks were only defensive checks, never the successful inference path.
- All captured requests were GET with no bodies to documented asset hosts; no model download before explicit loading. Built asset credential-pattern scan found no matches; source has no provider integrations. Shared WASM was byte-identical. These are bounded checks, not an exhaustive security audit.
- Fully offline fresh-worker real inference passed after warming the already-open production page. Offline reload is not claimed. Desktop 1440 and narrow 390/320 widths: no horizontal overflow, ≥44px button targets, labels and keyboard focus. Normal viewport input/review/results screenshots inspected. Physical phones, other engines, cache eviction and app-shell offline reload untested.

## Combined/public verification

Recorded below after root assembly and publication. A branch push alone is not public verification.

- Root `npm run predeploy`: 641 apps assembled, zero failures/skips; preserved baseline 640 gallery entries. All inline scripts compiled with Node `new Function`; new `ai-utility` entry exactly once and newest first. Legacy categories retained and gallery responsive.
- Full eight-check real-browser suite rerun against the root `deploy/` production assembly, including both real inference batches and fully offline fresh-worker processing; passed (`combined-browser-validation.json`). Captured traffic and built credential-pattern/shared-WASM audits passed. Maximum 8-profile/40-record/numeric-boundary real-inference and audit reimport passed separately (`limits-validation.json`).

- Final phone screenshot review found a clipped native-select label at 320px. Shortened the approval option, simplified feature options and added wrapping selected-feature/specification text. Rebuilt and reran the full local and combined-bundle workflow suites successfully. A combined-test server initially retained a deleted deployment working directory after root rebuild; corrected the test server to use an absolute directory and reran successfully. This was test-server lifecycle behavior, not a public app fallback.

- **Published and verified:** https://xianghui.github.io/daily-app2/20261113-16/ . Final gh-pages commit `729a749b49bbee044407c708d81d5d1e26856142` reached `built`. Every public app file plus shared WASM and root gallery matched local build bytes. Both real-AI fixtures and all eight public workflow checks passed, including offline fresh-worker inference, current reviewed exports/reimport and phone layouts. Public gallery retained 641 entries and legacy categories. See `public-browser-validation.json`, `public-asset-validation.json`, `public-gallery-validation.json` and `publication-status.json`.
