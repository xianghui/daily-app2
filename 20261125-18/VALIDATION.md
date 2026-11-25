# Observed validation — Count Orchard

Synthetic-only checks, 2026-11-25. No private inputs, external database writes or digest.

## Real AI, not mocked success

Chrome, production Vite bundle, GPU disabled, shared same-origin module worker, real q8 MiniLM WASM inference:

| Fixture | Intended rules | Actual suggestions | Reviewed counts |
|---|---|---|---|
| Registration field audit | rows / present / distinct | all three matched | 6 / 5 / 4 |
| Lab response batch | distinct / present / rows | all three matched | 4 / 5 / 0 |

Cosines and full candidate evidence are in `browser-validation.json`. A separate four-request probe matched 3/4: “Do not deduplicate. Count all non-null answers…” incorrectly chose distinct. This limitation is disclosed in the UI/README; human review is mandatory. Tiny synthetic fixtures are not representative accuracy estimates.

## Exact logic and actual artifacts

- `core-test.mjs` generates 300 seeded fixtures, 900 independent rule cases, lengths 0–40, mixed null/boolean/integer/string values, quotes/newlines/Unicode, and full audit reimports. Schema/malformed vector guards also exercised.
- `artifact-check.py` independently recomputes typed counts with Python sets and executes all 900 generated SQLite queries; it parses actual browser-downloaded CSV/JSON, checks empty-group markers, original order, every value, signed integers, multiline notes, formula prefixing, decisions, count metrics and downloaded approved-only SQL queries.
- Local artifact check: **6,675 assertions passed**, eight downloaded audit snapshots. First checker run exposed negative JSON numeric text being formula-prefixed; CSV was corrected to keep numeric values numeric, the full browser suite reran and all parsed artifacts passed.
- Rule changes materially change applied counts; undo restores them. Held requests retain originals, no SQL cases. JSON reimport restores originals. CSV includes every row plus explicit empty-group rows. Current reviewed note appears in Markdown clipboard/download.
- Maximum batch: 8 profiles + 24 requests = 32 real embeddings in eight chunks; 960 source rows retained and exported/reimported. Nullable values do not enter embeddings; only profile descriptions/request contexts do.

## Defensive/browser checks

- Empty, malformed, oversized source; missing value fields; invalid object values; unsupported import format; >1.5 MB import; unknown fields, missing review decisions and invalid modes/vectors are rejected.
- Actual worker-download abort and model-host abort fail visibly without fabricated results. Injected unsupported Worker/WebAssembly, constructor failure, worker error, malformed vector, timeout and stale error callbacks are isolated defensive checks, not success-path inference mocks.
- Cancellation while worker fetch is pending prevents construction; cancellation followed by real inference succeeds. Late async file reads cannot overwrite selected examples. An old injected callback cannot overwrite a newer **real** model result.
- Fresh worker performs actual inference with context fully offline after warming in the same already-open page. No offline reload/cold-start claim.
- Browser requests from initial bundle load through inference are GET file downloads with no content bodies or request-text URLs. No model-host request occurs before explicit processing. Reports retain host/path/query-key names only, not signed CDN parameters.
- Built JS/CSS credential-pattern scan found no matches; source review found no remote AI/provider integration or keys. Pattern scanning is not exhaustive proof against every secret type.
- Desktop 1440, phone-width 390 and 320: no document overflow, labeled form controls, ≥44px interactive controls, working export/input actions. Keyboard Tab and Enter open runtime details. Viewport screenshots inspected. Physical phones, other browser engines and screen-reader testing remain unverified.

## Collection and release

Full galleries parsed for objective/name distinctness; original collection read-only. All **870** prior second-collection entries remain identical, new entry once, AI Utilities first, all gallery inline scripts compile with `new Function`. Browser gallery renders **871** cards and search finds old and new entries.

Root `npm run predeploy` assembled all **871** apps with zero failed/skipped builds. Combined output **812,401,170 bytes**, under the unchanged 1,000,000,000-byte guard. No deduplication rule changes. Shared runtime hashes are recorded in `runtime-provenance.json`.

Assembled/public final validation and publication evidence are recorded in the machine-readable reports and appended below when finished. A branch push alone is not considered release verification.

### Verified public release

- Pages commit `673e1400ebf82ebc7240182b45a7c1562ca7a0a5` reached **built**; matching workflow `45582859554` completed **successfully**.
- Seven public files (app HTML/JS/CSS, shared worker/factory/WASM, root gallery) byte-match local assembled output. Combined public report: **812,401,170 bytes**.
- Full assembled and public browser suites passed: real model on both fixtures, current-reviewed exports, maximum 960-row batch, audit reimport, edit/hold/undo, clipboard, cancellation/retry, fresh-worker warmed-page offline inference, request privacy, invalid inputs and desktop/narrow layouts.
- Public artifacts passed **6,675 independent assertions**, including 900 generated SQLite QA queries and eight downloaded audit snapshots. Actual CSV/JSON/SQL were parsed/executed, including preserved typed zero/false and signed integers.
- Public gallery renders **871** cards and search locates both the new app and the oldest prior entry. The separate public four-request quality probe reproduced the documented 3/4 result and negation failure.
- Source staging excludes unrelated pre-existing untracked recovery folders. No digest sent.
