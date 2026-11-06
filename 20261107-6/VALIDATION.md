# Split Sentinel — observed validation (2026-11-07)

## Real production-bundle browser inference

Chrome headless, actual Vite dist under `/daily-app2/20261107-6/`, Transformers.js q8 MiniLM on WASM CPU. No mocked successful AI runs. See `browser-validation.json`, `extra-validation.json`, screenshots, scripts/logs.

- Customer help: paraphrased refund E1 → T1 cosine **0.744**; identical shipping E2 → T3 **0.995**; unrelated garden E3 **0.042**. At 0.70 threshold, two flags versus one exact-baseline flag; expected decisions quarantine/quarantine/keep observed.
- Workplace safety: eye protection E1 → T1 **0.837**; fire evacuation E2 → T2 **0.774**; unrelated jazz E3 **0.020**. Two semantic flags versus zero exact flags; expected quarantine/quarantine/keep observed.
- Six curated expected review decisions matched on these two tiny fixtures. This is not a general accuracy estimate. Quantized batch inference may produce small numerical variation, including identical text scoring slightly below 1.
- Deliberate limitation fixture: “Employees are allowed…” vs “Employees are not allowed…” scored **0.897** and was suggested for quarantine despite opposing permission. This is a false equivalence if taken as automatic deduplication, and demonstrates why flags are investigation leads, not proven leakage. All eval rows require explicit review before apply.
- CPU inference succeeded with `navigator.gpu` unavailable. Physical phones, Firefox/Safari, low-memory devices and large external corpora were not tested.

## Workflow and defensive checks

- No automatic weight request before explicit start. Observed remote traffic was public asset GET/HEAD with no content bodies. Input text was absent from URLs/bodies; inspected code contains no telemetry or provider API. `asset-audit.json` records hashes and zero credential-pattern hits (pattern scans alone are not a complete security proof).
- Fresh worker with browser context **all networking offline** completed another real inference after successful online run. Online page reload reused model cache without further remote traffic. Offline navigation/reload/app-shell startup is intentionally not claimed.
- Full 80-record batch (40 train, 40 eval), 20 chunks, **1,600 cross-split pairs**; all 40 training rows kept and all 40 flagged eval rows present in audit. No lost records; kept eval + quarantined eval equals original eval count.
- Rejected a suggestion, undid it, edited multiline notes, reviewed every row, applied and exported. Apply is disabled before all eval rows are reviewed. Any edit removes old exports until reapply. Training decisions are reference-only.
- Downloaded actual audit JSON/CSV and kept CSV. Independent Python `csv`/`json` parsing (`export-roundtrip-validation.json`) verified all IDs, original text, decisions, notes, matches/scores, quoted commas/quotes/newlines, formula-leading cells and kept-set conservation. Clipboard Markdown included current reviewed decisions/notes. JSON remains lossless; safe CSV apostrophes are explicit.
- Actual encoder inference on imported instruction-like text and HTML markup preserved records, rendered markup literally and caused no content uploads or credential UI (`data-safety-validation.json`).
- Nine empty/malformed/oversized/invalid-split/duplicate-ID inputs, bad threshold, unsupported file and oversized file handled visibly.
- Real model network failure/recovery, WASM network failure/recovery, cancellation during cold model download/retry, normal cancel/retry and input-change cancellation passed.
- Fault-injected **defensive tests only**: unsupported Worker/WASM, constructor failure, worker error, timeout, malformed model vectors, cancelled delayed response, delayed file read. No fabricated outputs applied. Additional old-result-after-new-run test confirmed newer real safety results survive late stale messages.
- Node schema checks reject zero-norm/nonfinite/wrong-dimension vectors, missing records, nonexistent match IDs and attempted training quarantine.
- Desktop 1440 px and narrow 390/320 px screenshots checked with no horizontal overflow. Phone-width note/edit/apply/export actions worked; labels and keyboard focus checked. Visual inspection caught overly narrow diagram cells despite no overflow; equal-width grid cells fixed it. `layout-validation.json` reruns real inference and verifies readable cell widths/heights at all three sizes on the final production build. Physical touch-device performance and screen-reader audit not claimed.

## Publishing checks

`npm run predeploy` passed. Root gallery and combined deployment checks, asset byte comparisons, Pages build status and public real-inference results are recorded in the separate gallery/deployment/public validation artifacts after publication. Build alone was not accepted as AI verification. Prior unrelated untracked work is excluded from this app's source commit.

## Final public verification — passed

- Combined root deploy: 500 gallery apps, zero failures/skips; all previous entries/categories preserved and new entry exactly once. The prior `20261107-5` draft remains excluded.
- GitHub Pages latest build **built** for gh-pages `2dae7036ad21c87a9424a69ccdfd81b4fd913aa1`, matching the remote branch. No manual legacy rebuild trigger was needed. The earlier successful deployment was followed by a changed-assets deployment for the phone diagram fix, not an unchanged republish.
- Public HTML, JS, worker, WASM factory and other emitted files match local SHA-256; shared 26,861,777-byte WASM also matches. See `deployment-validation.json`.
- At the public URL, both materially different fixtures executed genuine model inference and produced expected quarantine/quarantine/keep decisions. Each was reviewed, annotated, applied, downloaded and JSON-parsed with six original records and conserved eval counts.
- Public-bundle fresh-worker inference with all networking offline passed; desktop/320 px overflow checks, no pre-start model requests, asset-only remote requests and no browser page errors passed (`public-browser-validation.json`). Public gallery rendered 500 cards, AI Utilities first, old categories intact and search functional (`public-gallery-validation.json`).
