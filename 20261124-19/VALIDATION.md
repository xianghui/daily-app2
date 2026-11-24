# Cookie Trail — observed validation, 2026-11-24

## Production-build workflow

React/Vite `npm run predeploy` passed. Tests use the emitted production bundle under `/daily-app2/20261124-19/`, not the development server. The shared worker, factory and WASM are immutable same-origin dependencies; `runtime-provenance.json` records exact hashes.

### Real inference and task quality

- CPU/WASM q8 MiniLM in installed desktop Chrome, with GPU disabled: first batch selected `checkout, embedded, email-link`; second selected `local, embedded, checkout`. All **6/6 tiny known-answer context links** matched. This is an observed fixture result, not a population accuracy estimate.
- 24-record batch matched every expected context across four-text chunks; each source record survived review and export.
- Context-only change with identical cookies selected checkout then embedded. Expected included indices changed from `[0,2,1,3,5]` to `[2]`, demonstrating AI materially changes workflow output.
- A negated “not an embedded partner iframe” note incorrectly selected `embedded` rather than intended `checkout`. This documented limitation is why all matches require confirmation and can be corrected/held. No fabricated confidence or general accuracy claims.
- `core-test.mjs`: six groups cover exact delivery sets, domain/host-only and slash boundaries, cross-site POST, empty/malformed snapshots, prefix/storage invariants, input/vector bounds, review gating and held/blocked conservation.

### Independent actual-browser rule oracle

`cookie-oracle.cjs` installs synthetic cookies with Chrome CDP, intercepts all fixture destinations locally, and initiates actual top-level navigations, a POST and cross-site iframes. **All 7 actual outgoing Cookie headers matched computed expectations**, including duplicate-name ordering, host-only vs parent domain, `/cart` vs `/cartoon`, HTTP Secure withholding, Strict/Lax/None behavior and cross-site POST exclusion. No real destination was contacted. Third-party phaseout flags were disabled; the planner does not claim to emulate privacy settings.

The initial oracle harness used HTTPS creation URLs for insecure cookies; CDP converted those to Secure despite the explicit false flag. Inspecting the actual cookie store revealed this setup error. Correcting creation URLs to match cookie transport fixed the oracle; no app rules were weakened to satisfy a bad fixture.

### Review, artifacts and reversibility

Actual browser downloads: full audit JSON, CSV, Markdown and release JSON for both batches, edited reviews and 24 records. Independent Python `csv`/`json` parsers verified all rows, original/reviewed snapshots, formula-leading quoted multiline notes, current header values, release indices and held/blocked accounting. Edited `domain=reviewed-value` survived the download. Clipboard worksheet readback passed. Undo, hold, malformed approved snapshots, reimport of the 24-record audit and export invalidation after edits passed. Reimport deliberately restores originals only.

### Privacy, caching and defensive behavior

- Request audit from startup through inference: only GET downloads, no request bodies and no fixture destinations. No model-host traffic before explicit load. Stored reports strip CDN signed query values, keeping hosts/paths/query-key names only.
- Actual model-host abort produced a visible error and no suggestions; removing the network block and retrying ran real inference successfully.
- Inference passed after all network was disabled and a **fresh worker** was created in the already-open warmed page. This does not establish offline reload/navigation.
- Fault injection covers missing Worker/WASM, worker construction/error, malformed vector output, timeout and stale error. Actual worker fetch abort and cancellation during a delayed fetch yielded no fabricated rows.
- Cancellation/retry and source edits invalidate older work. Delayed import cannot overwrite newer input. A delayed valid-schema mocked old response could not overwrite a newer **real** inference result. Mocks are used only for failure/race checks, never successful AI evidence.
- Credential-pattern scan of built text, provider-integration inspection, shared runtime hashes and exact required package scripts are checked by `static-test.py`. A pattern scan is supplementary evidence, not an exhaustive secret detector.

### Layout and access

Desktop 1440px and narrow 390px/320px viewports: no horizontal overflow, every input/select/textarea labeled, touch controls ≥44px. Keyboard review focus order passed. Normal-height hero/review/results screenshots captured; narrow hero and review screenshots visually inspected. Headless desktop Chrome only; physical devices, screen readers and other browser engines remain untested.

## Combined deployment and public verification

The gallery baseline contains 846 entries. New gallery: 847, one Cookie Trail entry under `ai-utility`; all baseline entries preserved, AI Utilities first. Every inline script compiles via `new Function`; missing script or syntax error fails validation. Combined predeploy assembled 847 apps, 0 failures/skips; size **999,952,344 bytes**, below the unchanged 1,000,000,000-byte guard. No additional legacy deduplication rule was needed.

Assembled and public verification reports record the exact asset bytes, actual runtime inference, artifact round trips and gallery behavior. Publication status is recorded in `publication-status.json`; “Published” alone is not accepted as Pages completion.

## Explicit limitations

Tiny synthetic fixtures only; semantic negation/ambiguity can fail. User reviews site relationship and creation order. Cookies must already have been accepted and remain unexpired/unpartitioned. No public-suffix or server parser validation; no default SameSite grace period or browser privacy-policy emulator. No real browser data access, live-site traffic, session credentials, remote API calls, external sending or account changes. No cold offline startup or physical-phone inference claim.

## Public release outcome

Matching Pages commit `ac936a0065570b7fee36307a232c22ea8cc7937e` reached **built**; workflow `45372163149` completed successfully. Public byte audit matched 9 assets (including shared worker/factory/WASM and gallery). The complete public real-inference workflow, both 3-record fixtures, 24-record batches, edited/held/blocked reviews, downloaded artifact parsing, clipboard, fresh-worker offline inference and phone-width checks passed. The public gallery rendered all 847 cards without page errors. See `public-*.json` reports and `publication-status.json`.
