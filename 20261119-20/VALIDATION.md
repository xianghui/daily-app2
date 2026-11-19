# Level Loop — observed validation

## Local production bundle

- `npm run predeploy`: passed React + Vite production build. CPU/WASM real model, not mocked success.
- Garden fixture: FROM/TO links exactly `gate→pond→oak→shed→gate` (8/8 endpoint identities); raw closure +6 mm over 600 m; known corrections −1, −2, −1, −2 mm; adjusted closure zero.
- Library fixture: exactly `desk→stairs→archive→cafe→desk` (8/8); raw closure −4 mm over 200 m; corrections +0.6, +1, +0.4, +2 mm; adjusted closure zero within floating arithmetic. These are tiny synthetic tests, not general accuracy evidence.
- Real maximum inference: eight station candidates + 48 endpoint notes = 56 texts, four-text chunks, 24 original legs conserved. Unvisited-register checks correctly withheld adjustment; maximum JSON reimport retained every original and renewed pending review. Core maximum closed 24-leg circuit passed separately.
- 42 core assertions: signed arithmetic, closure conservation, distance proportionality, exact-zero tolerance, whole-number bounds, review decisions, malformed vectors, self-loop/chain/hold gates and formats.
- Independent Python JSON/CSV parse: ten actual downloaded audit sets; rows/identities/readings conserved, negative numeric values preserved, multiline quoted formula-leading note protected, edited values and blocked blank adjustments survived. JSON/Markdown/clipboard reflect applied reviews, not stale defaults.
- Review/edit/undo/hold, wrong endpoint, changed length, oversized/empty/invalid JSON, unsupported/oversized file, invalid numeric fields and excessive closure all exercised. Raw originals retained. Review edits invalidate export snapshots.
- All-network-disabled inference with a terminated previous worker and a fresh real worker passed in an already-open warmed page. Offline navigation/reload was not tested or promised.
- Cold model-download cancellation followed by real retry passed; source changes, delayed file reads and delayed old results could not overwrite newer inputs/results. Race mocks used only to force defensive timing, never to establish successful AI functionality.
- Cold download/network failure, unavailable WASM, worker download failure/construction failure, malformed envelope/vectors, worker error and timeout all failed closed with actionable messages and no fake output. Network recovery retried the real model successfully.
- Request audit from production page startup through inference: no model host before explicit load; only GET/HEAD downloads, no request bodies or source text in URLs; sanitized paths persisted, no signed CDN query values. No provider integration. Credential-pattern scan of built text assets is recorded separately, not an exhaustive secret-proof claim.
- Desktop 1440 and narrow 390/320 CSS-pixel layouts: no horizontal overflow, all input labels associated, keyboard focus visible, buttons ≥44 px, screenshots captured. Physical phones and browsers other than desktop Chrome unverified.
- Irrelevant instruction-like endpoint still received a nearest station: similarity is not identity. Human hold correctly blocked adjustment. No imported instructions acquired tool authority or requested credentials.

## Collection/public checks

Gallery inline-script compilation and exactly-one new ai-utility entry passed; 728 earlier gallery entries preserved unchanged. Root assembly passed: 729 app builds copied, no failed/skipped builds. Deploy-only runtime deduplication keeps existing paths and source builds intact.

See assembled/public browser reports, gallery reports, asset hash audits and `publication-status.json` for the observed hosting state. Publication is complete only after a matching Pages commit reaches built and public real inference/runtime checks pass.


## Public release confirmed

Matching Pages commit `64ad4360c219a3734e945e564f44ac343b6676ba` reached **built** on the first deployment. Nine public gallery/app/worker/factory/WASM assets matched assembled bytes. Both public real-AI fixtures, the full reviewed workflow, maximum batching, privacy audit, fresh-worker offline inference and independent downloaded-artifact parsing passed; public gallery renders all 729 cards with AI Utilities first and legacy categories intact. Browser runner shutdown initially waited after all assertions/reports had completed; only that test process was terminated, then the full public suite reran with bounded teardown and closed normally. No app/runtime failure was observed. Main staging excludes unrelated pre-existing changes. No digest sent.
