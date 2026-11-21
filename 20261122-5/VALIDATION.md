# Observed validation — Equation Folio / 20261122-5

## Local production bundle

- `npm run predeploy` passed. Real Chrome with GPU disabled loaded the actual shared MiniLM q8 model, worker, local WASM factory and binary. Successful inference was never mocked.
- Carbon-cycle fixture: **8/8** source compound mappings matched the tiny known-answer set. Exact balances `[1,6,6,6]` and `[6,6,1,6]`; all-one baseline **0/2**, exact **2/2** balanced.
- Carbonate fixture: **12/12** source mappings matched. Exact balances `[1,1,1,1,1]`, `[1,1,1]`, `[2,1,1,1]`; all-one baseline **2/3**, exact **3/3** balanced.
- These are two small, favorable synthetic fixture sets, **not general accuracy**. Deliberate negation challenge expected water but selected glucose. Every compound requires manual approval or hold; conservation cannot validate chemical identity, feasibility or safety.
- **228 deterministic assertions**, including nine known textbook balances, both side-order permutations, 150 additional rotated cases compared with an independent brute-force positive-integer coefficient oracle (1..6), exact atom recount, invalid/nonpositive/ambiguous/duplicate blocking, source schema rejection and model-vector rejection. See `core-validation.json`.
- Maximum batch: **12 equations, 96 source compounds +16 anchors /28 neural chunks**, all original records preserved. Intentionally repeated same-side compounds blocked all 12 drafts; this is not a valid-equation quality test.
- Actual browser JSON/CSV/Markdown downloads independently parsed in Python. Every source record and reviewed coefficient survived. Independent atom totals matched on both sides. Multiline quoted formula-like reviewer note survived JSON/Markdown exactly and CSV with spreadsheet sanitization. Holds released no coefficients. A 491 KB audit envelope restored the bounded originals only.
- Real clipboard, mandatory review gating, compound correction/reset, hold, undo and export invalidation passed. A new input invalidates old reviews/results.
- Download progress/cold cancellation followed by real retry passed. Ten defensive modes exercised network failure/recovery, no WASM, worker download failure, unsupported workers, malformed vectors/envelopes, timeout, worker error and delayed cancelled/input-invalidated messages. Defensive fault injection was isolated from successful real-inference tests.
- Delayed file reads and worker-source fetches cannot overwrite changed inputs; a delayed fake old result could not replace a newer **real** carbonate inference. `async-race-validation.json`, `stale-validation.json`.
- After online warming, all network disabled, worker terminated, a **fresh worker** performed real inference. Only already-open-page offline inference is claimed; cold startup/reload and cache eviction are untested.
- All observed default-path requests were GET downloads with no bodies to same-origin/Hugging Face/CDN/blob resources; no model-host request before explicit load, no input text uploaded. URL query **names**, not temporary signed download values, are retained in public reports. Built JS credential-pattern scan passed; this is not an exhaustive proof. No external provider integration exists.
- Empty/bad/null/oversized JSON, unsupported CSV import, >8 MB file, pending review, duplicates and held equations handled visibly without fabricated results.
- Desktop 1440 px and 390/320 px layouts: no horizontal overflow; visible normal-viewport hero/review/results screenshots inspected. All controls labeled; touch controls ≥44 px; focus works. No physical-phone inference, Safari/Firefox or full screen-reader audit claim.

## Combined publication

Assembly, gallery preservation, Pages status, public asset byte matches and real public inference results are recorded below after publishing. Shared immutable AI dependencies and original read-only collection remain preserved. No digest or external announcement is sent by this builder.


## Verified public release

Final Pages commit `45da5001c9dde1cc0c109252939613c5c198edb2` reached **built**, and workflow `44945054607` completed **successfully**. Seven public gallery/app/worker/factory/WASM responses were byte-identical to the assembled deployment. The full real public MiniLM fixture/review/export/maximum-batch/offline/privacy/phone-layout suite passed with 20/20 favorable fixture mappings; the documented negation probe still failed and requires human review. Independently parsed actual downloaded JSON/CSV/Markdown after the public run. All **786** gallery entries rendered with previous categories/search intact. The newly shared older geometry app passed public byte audits and real PNG/STL import / parsed STL export / portable JSON regression. Final combined site: **999,593,305 bytes**, under the unchanged 1 GB guard.

An overlong native-select approval label found during normal phone screenshot inspection was shortened, and an explicit wrapping reviewed-formula readout added; the final bundle was rebuilt and the complete browser suite rerun. No further app-code changes were made after public verification. Source staging excludes unrelated pre-existing recovery edits and folders; they remain preserved. No digest sent.
