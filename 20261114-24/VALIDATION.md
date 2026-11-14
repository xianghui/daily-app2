# Observed validation — 2026-11-14

- Scaffold/install and per-app predeploy passed. Real production-bundle Chrome WASM CPU inference (GPU disabled), not mocks, passed both synthetic datasets: garden/rail and campus/harbor, eight of eight known zone links. Exact description equality baseline matched zero of eight. This tiny fixture is not an accuracy estimate.
- Both fixtures: first candidate cost 170 demand-km, two radius violations; only feasible center cost 100. Approved demand conserved (20), all four rows retained. 500 independent random candidate/radius enumerations agreed with deterministic selection.
- Maximum batch: six zones + 32 rows in four-text inference chunks, 12 hubs. JSON/CSV retain all 32; audit reimport reruns AI with pending decisions.
- Real warmed-page fresh-worker inference passed with browser network offline. Offline navigation/reload, cache eviction persistence and physical mobile performance untested.
- Approve/hold, reassignment, weight and multiline owner/note edits, undo, export invalidation, clipboard, actual downloaded JSON/CSV/Markdown, original-input import and maximum audit roundtrip passed. Python independently parsed CSV/JSON, verified all records and formula-escaped quoted multiline text.
- Empty, null, malformed, oversized, duplicate IDs, invalid coordinates/weights/radius, unsupported files and unreviewed/invalid reviews blocked. Cancellation/retry, changed input, delayed worker download and delayed file import cannot revive stale results.
- Fault injection tested network errors with real-model retry, unavailable WASM, blocked worker download, unsupported workers, malformed vectors/envelopes, worker errors and shortened timeout. All errors showed no fabricated output; successful inference checks used real AI.
- Unrelated instruction-like text still gets a nearest-zone suggestion. It remained inert, but relevance cannot be established by cosine; human hold required. No claim of universal semantic correctness.
- Desktop 1440px and narrow 390/320px: no horizontal overflow, labeled controls, keyboard focus, ≥44px buttons and input/review/result screenshots checked. Physical touch devices and screen-reader interaction untested.
- Production requests were GET-only without bodies; no content upload path exists. Runtime worker/factory/WASM paths and shared binary SHA verified locally. Built asset secret-pattern audit and combined/public checks recorded separately.

Machine-readable reports: browser-validation.json, defensive-validation.json, artifact-validation.json, distance-validation.json, download-stale-validation.json, import-stale-validation.json. Publication evidence will be recorded after root deployment.

## Public release

Root combined predeploy/deploy succeeded (673 apps, zero failed/skipped). Pages built gh-pages commit `19861ca377d19ba7688025469a502f4ea8902839` on the first deployment. Public app/worker/factory/WASM and gallery were byte-matched; the full public browser suite passed both real-AI fixtures, warmed-page offline inference, batch/review/cancel/export/phone checks and independent artifact reparse. Live 673-entry gallery search and prior categories passed. Existing unrelated working-tree README/index edits and draft folders were preserved and excluded from this source commit. See publication-status.json, pages-build.json and public-*.json.
