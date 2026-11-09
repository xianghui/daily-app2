# Observed validation — 2026-11-09

Production Vite bundle served with its real `/daily-app2/20261109-10/` base, local worker/module factory and shared same-origin WASM. Headless installed desktop Chrome through Playwright; no fake successful AI outputs. See machine-readable reports and runnable tests in this folder.

## Actual AI and task quality

- **Greenhouse sensors:** real q8 MiniLM inference matched `air, stem, crop, air` (4/4 tiny known-answer links). Approved results: 77 F → 25 C; 1.2 m → 120 cm; 2500 g → 2.5 kg. The fourth row's kg → C approval was blocked, then held with null normalized value.
- **Parcel lab:** real inference matched `mass, length, delay, delay` (4/4 tiny known-answer links). 2 lb → 0.90718474 kg; 10 in → 25.4 cm; 120 s → 2 min. The fourth row's m → min approval was blocked, then held.
- Each batch's exact-case-insensitive description baseline matched 1/4 versus AI's 4/4 proposals. Counts are computed from sources; proposal coverage is not general accuracy or measured effort/time saved. Eight matches and six conversions on two tiny synthetic batches cannot establish production reliability.
- **Negation limitation observed:** “This is not the air temperature … not ambient warmth” still retrieved `air` at cosine ~0.8103. Held manually. Semantic similarity is not equivalence/entailment; dimensional compatibility cannot repair a meaning error.
- Full batch: eight metric definitions plus 24 records = 32 texts processed in four-text chunks; all 24 preserved as held. Independent JSON reimport/rerun preserved complete source input.
- Deterministic unit tests: same-unit identities, freezing/boiling and −40 F/C, Kelvin offset, exact pound/inch factors and minutes/milliseconds; incompatible dimensions rejected; finite normalized embedding schema, record-conservation checks, review requirements and signed numeric CSV checked.

## Full workflow and defenses

- Apply blocked while any decision pending; dimension-invalid approved rows blocked. Human target edits reset approval; undo restored prior target and approval. Review edits invalidated old applied export snapshots.
- Downloaded JSON/CSV/Markdown reflect reviewed values and multiline quoted Unicode notes. Python standard `csv` independently parsed all rows, numeric originals, units, final metrics/decisions, conversions and null holds; formula-like text received a guard, while signed numeric fields remain numeric. Browser clipboard matched downloaded Markdown. JSON audit reimport roundtrip passed.
- Online inference followed by **fully offline fresh-worker real inference** passed in the same open page. Worker/factory/WASM/model cache behavior was exercised; offline navigation/reload is explicitly not promised.
- Fresh browser context blocked actual model-host requests: showed fetch error, produced no records; removing block and retrying executed real inference. Another fresh context paused the actual ONNX weight request, cancelled, then successfully retried real inference. No model-host calls before user loading.
- Cancellation, source changes and retry passed. Late cancelled callbacks before/after a newer real run could not overwrite current state. Defensive-only fake workers injected malformed vectors, unsupported WebAssembly and accelerated 180-second timeout; errors were visible and real retry recovered. These injections were not used to demonstrate successful AI.
- Empty/invalid/null JSON, empty lists, duplicate IDs, over-limit counts/text/payload, string-valued numbers, unsupported unit symbols and CSV imports rejected. No stale recommendations remained after input changes.
- Request audit from production-bundle startup through inference recorded only GET downloads with no request bodies; user record content was not sent off-device. Source inspection found no remote inference integration. Built text assets had no common OpenAI/GitHub/Google/AWS credential-pattern hits; this is a scoped scan, not a universal secret-detector guarantee.
- Desktop and 390/320 px phone viewports: no horizontal overflow; labeled source focus, review controls and actual downloads worked. Screenshots captured. Physical phones, other browser engines, low-memory behavior and screen-reader manual audit untested.

## Gallery and publication

Gallery validation compiles all inline scripts via Node `new Function`, requires scripts to exist, checks exactly one correct new AI-utility entry, and verifies all 548 previous entries unchanged. Combined-site and public byte/inference checks are recorded separately after root publication. See `publication-status.json`, `public-validation.json` and `public-browser-validation.json` for final hosting evidence.

Final public verification passed: Pages commit `1401dd3ec848c270191dfdc2a53529234331b74a` reached `built` (workflow 42543805409). All public app/index/worker/module-factory/shared-WASM bytes matched local production artifacts; public gallery retained earlier categories and apps. The complete ten-check browser suite, including both real inference fixtures and offline fresh-worker inference, passed again on the HTTPS public URL. Root assembly: 549 built, zero failed/skipped. Public downloaded exports passed the independent artifact parser again.
