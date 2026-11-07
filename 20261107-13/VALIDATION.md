# Validation — 2026-11-07

Production Vite bundle served at its actual base in desktop Chrome via Playwright. Tests are executable in browser-test.cjs; observations in browser-validation.json. All successful inference uses real MiniLM q8 weights with WASM CPU; only defensive error tests inject model/worker failures.

- Event launch: links [none, A, B], execution A → B → C; bakery: [none, B1, B2], execution B1 → B2 → B3. Six of six expected links on these tiny synthetic fixtures; NOT general causal accuracy. Exact-text baseline misses both event paraphrase links (0); AI proposes 2, with observed cosine 0.891 and 0.573.
- Additional real-inference shuffled-source check: original order C, A, B is preserved in JSON; reviewed execution order becomes A, B, C (reordered-test.cjs / reordered-validation.json).
- Real 12-task / 24-description / six-chunk maximum run preserves all records. Finite normalized vector count/dimension checks. Core tests reject cycles, self-links, missing rows, malformed vectors and invalid floors.
- Review all required before apply. Reject/undo/edit invalidate snapshot; note changes survive downloaded JSON/CSV and clipboard. A → C → B → A cycle prevents apply; removing the edge restores validity. Export ordering conserves every task, including unlinked tasks, with every parent before child.
- Python's independent csv/json parsers reopened actual browser downloads, checking order, stage, notes, multiline quoted fields and formula-safe CSV. JSON retains originals losslessly. CSV is a plan schema, not input round-trip format.
- Online first load, cached reload with no further remote requests, and fully network-blocked open-page fresh-worker inference all passed. No claim of offline reload/navigation. Runtime factory and shared immutable WASM verified byte-identical to installed runtime and documented SHA-256.
- No model-host requests before explicit load. Observed remote requests are GET/HEAD downloads without request bodies or task text. No content upload integration exists. Production asset credential pattern scan passed; pattern scan alone is not comprehensive proof.
- Empty/invalid/oversized/duplicate/malformed CSV, invalid floor, unsupported formats, malformed AI schema, missing Worker/WASM, worker constructor/error, timeout, blocked download, blocked WASM all show errors with no fabricated output. Network/runtime retry passed.
- Download cancellation, processing cancellation/retry, changed inputs, late cancelled result and stale file read all passed. Workers terminated and run IDs isolate jobs.
- 1440px desktop and 390/320px phone viewports: no horizontal overflow, working labels/focus, mobile review/apply/export. Screenshots saved. These are Chrome emulations, not physical phone or cross-browser tests.

Limits: one incoming dependency per task, English short descriptions, semantic association is not causal validation, no multi-resource scheduling, no dates. Users must resolve unlinked external needs and verify every link. Browser memory/storage may vary.

Publishing and public-URL verification are recorded separately after the combined deployment.

## Publication blocked — draft, not complete

Application deployment runs 42336993819, 42337919126 and 42338879156 all built successfully but failed in Pages deployment. The first stalled in syncing_files; the third stalled in deployment_queued. Two documented rebuilds were requested only after verifying no matching workflow remained active. Public app stayed unavailable; actual public inference/worker verification could not run. Gallery candidate validation (507 entries) records the pre-publication local check only. The final gallery is restored to its exact prior 506 entries and this draft is excluded from the combined deployment. Source, tested app and evidence are retained for later promotion. No Pages source/configuration or scheduler changes were made.
