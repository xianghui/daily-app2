# Observed validation — 2026-11-10

Production Vite build served with its real `/daily-app2/20261110-5/` base in desktop Chrome, not Vite dev or mocked successful inference.

- Two distinct synthetic fixtures: science notes → C1/C2/C3; web notes → H1/H2/H3. Real MiniLM q8 WASM embeddings selected all **6/6 intended links**. Each fixture's exact-title baseline found **0/3**. This is tiny fixture performance, not general accuracy or measured time savings.
- Negation challenge selected C1 despite saying not to study photosynthesis (cosine ~0.652). Unrelated database/keyboard note selected C1 at ~0.106. Both were manually held. No minimum cosine is marketed as correctness.
- Full bounds: 24 notes × 16 candidates, 40 texts embedded in batches of four. All records/cards survived JSON and reimport; import resets approvals. All-held leaves every original card unchanged.
- Human edit, link override, recall rating, duplicate-card blocking, missing-rating blocking, hold, undo and applied-export invalidation tested. Current JSON/CSV/Markdown downloads and clipboard read back; Python's independent CSV parser checks reviewed ratings, exact sources, held/approved dates and quoted multiline formula-like annotations.
- Independent known schedule checks: prior 6 days, repetitions 2, ease 2.5, q5 → 15 days, ease 2.6, due November 25; q2 → next day/reset; year rollover and leap-year crossing. 72 quality/interval/ease combinations check bounds plus deterministic duplicate/grade/review guards.
- Offline after an online run: network blocked, old worker terminated, fresh worker constructed from cached source; real inference succeeds. Only an already-open page is covered, not offline reload/navigation.
- Fresh-context model-host download failure gives explicit error, no suggestions; removing block allows real retry. Cancellation intercepted an actual ONNX weight request, terminated the run, then real retry completed. Input changes, cancellation, late stale messages, malformed vectors, unsupported worker/WASM, timeout and recovery tested (fault injection used only for defensive failures).
- Empty, null, malformed, invalid dates, missing/oversized lists, invalid card interval, overlong notes, unsupported CSV and >1MB import rejected. A validation failure exposed full-audit size larger than raw-input limit; fixed by checking outer audit ≤1MB and extracted original input ≤40KB, then full suite rerun.
- Network audit begins before production page startup. No model-host request before load. Successful default path uses GET-only asset downloads with null bodies, only same origin and documented model hosts; inspected URLs contain no source text. Source has no remote inference integration or API credentials. Build asset scan recorded separately.
- Desktop plus 390/320px layouts: no horizontal overflow before/after results, associated input labels, focus and ≥44px main buttons. Screenshots included. Physical phones, non-Chrome browsers and assistive technologies remain untested.

Machine-readable evidence: `browser-validation.json`, `network-validation.json`, `cancel-download-validation.json`, `artifact-validation.json`, asset/gallery/public validation JSON. Public publishing status is recorded separately and must pass before this is counted completed.

## Publication verified

Root combined `predeploy` and `deploy` passed with 567 app folders, zero build failures/skips. Pages built gh-pages commit `962fcbd54dbd89e15b3c01ae7623ad61276d69d6`; workflow `42689955865` completed successfully. Public app HTML/JS/CSS, module worker, WASM factory and shared 26,861,777-byte WASM are byte-identical to validated local assets. Both real public AI fixtures matched all six intended cards, applied user-entered ratings and exported actual complete schedules. Public gallery renders 567 cards, AI Utilities first, with earlier categories and oldest-app search intact. See public asset/inference/gallery JSON records.
