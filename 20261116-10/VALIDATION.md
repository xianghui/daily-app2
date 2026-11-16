# Observed validation — 2026-11-16

## Local production bundle

- React/Vite `npm run predeploy` passed. No dev-server AI dependency.
- Real MiniLM q8 WASM CPU inference, GPU disabled in installed desktop Chrome, correctly matched **12/12** paraphrased observation descriptions across two materially different synthetic workflows (book binding/parcel packing; audio editing/photo retouching). This tiny fixture is not a general accuracy estimate. Each model run emits actual four-text batch progress and validated 384-dimensional vectors.
- Known-answer log-linear curves: workshop slopes −0.5 and 0, studio slopes −0.5 and −0.5. Workshop next-four-per-procedure effort 253.12604170523895 min vs flat 260; studio next-three effort 76.42659088466034 vs flat 81. These are computed scenario estimates, **not measured future savings**.
- Sixteen additional exact-power numerical cases cover decreasing, flat and increasing slopes, doubling ratios, horizon sums and residuals. Unsorted observations use greatest index, not source order. Invalid vectors are rejected.
- Maximum complete browser workflow: 8 procedures, 24 observations, 32 real embedded texts, 100 next units each = **800 forecast rows**. All 24 exact-description matches, all eight slopes, original conservation, export/reimport and independent CSV parsing passed. A separate maximum ambiguous/incomplete audit also retained all 24 sources and blocked incomplete forecasting.

## Review, artifacts and defenses

- Mandatory per-record review; edits to identities/sequence/minutes reset approval. Holds block fitting, not audit export. Undo, changed-output invalidation, multiline notes, copy and source/audit import passed. Import restores originals, never stale approvals.
- Actual browser-downloaded JSON/CSV/Forecast CSV/Markdown parsed independently with Python JSON/CSV. All source IDs, reviewed fields, numeric values, 800 maximum forecast records and quoted multiline notes survived. Formula-leading multiline CSV text receives a leading apostrophe; JSON retains exact original text.
- Empty/malformed/oversized input, bad numeric types/ranges, duplicate IDs, insufficient observations, duplicate indices, unsupported files and malformed files rejected. Missing/held groups are never omitted from a supposed complete forecast.
- Cancel then real retry, changing input mid-run, and delayed file-read overwrite prevention passed.
- Fault-injected network denial, missing WASM, blocked worker download, unavailable module workers, malformed vectors/envelopes, worker crash and accelerated timeout each produced an error with no fake output. Network recovery then ran genuine model inference. Successful AI tests did not use mocks.
- Instruction-like irrelevant content still gets a nearest procedure candidate. The user must hold it; semantic similarity cannot verify procedure equivalence. The content remained inert and never requested credentials/uploaded anything.

## Privacy, caching and UI

- No model-host requests before explicit load. Network capture from page startup through successful runs showed GET downloads only, no bodies, and no fixture text in full URLs. Hosts were app origin, Hugging Face and its CDN; report query values were removed before saving. App has no remote provider integration. Built text assets passed credential-pattern scan; this is not represented as exhaustive secret detection.
- Networking disabled in the warmed, already-open production page: a fresh worker performed **real offline inference** from cached worker, factory, WASM and model. Offline startup/navigation/reload is explicitly not claimed. Model host updates, cache eviction/private mode remain limitations.
- 1440/390/320 CSS-pixel layouts: no horizontal overflow, associated field labels, visible keyboard focus and ≥44px buttons. Normal viewport input/review/results screenshots captured; desktop overview and narrow-phone review/results inspected. Physical phones, non-Chrome browsers, screen-reader speech output and low-memory devices are unverified.
- Combined root predeploy assembled 707 apps, zero failures/skips, preserving the 706 prior entries/categories. Gallery inline script compilation, exact-one new entry, AI Utilities first, old categories/cards, search and narrow widths passed. The assembled production app and shared dependencies byte-matched source builds; real inference/workflow/offline suite rerun on the actual assembled site.

## Public verification

**Passed on the public GitHub Pages URL.** Deployment head `c10bc12f6eb3403755ac478586c9c5e04cc1d224` reached Pages `built`; workflow 43784645876 completed successfully. Public worker, module factory, WASM and every new app asset byte-matched assembled production files. The live app reran the complete real-AI workflow/privacy/offline/artifact/phone-layout suite and both fixtures again matched 12/12. The live maximum complete workflow again matched 24/24 exact descriptions and exported all 800 forecasts; its audit reimport preserved all originals. The public gallery rendered all 707 cards, AI Utilities first, older categories/cards preserved, with working search/narrow layouts. See `publication-status.json`, `public-browser-validation.json`, `public-asset-audit.json`, `public-max-ready-validation.json` and `public-gallery-validation.json`.
