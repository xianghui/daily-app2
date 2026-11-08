# Triplet Foundry — observed validation, 2026-11-08

## Production browser and real AI

Desktop Chrome through Playwright, built Vite bundle served under the real production base; no development-server worker shortcut. `browser-validation.json` records successful local real inference and network capture, and `extra-validation.json` records a fresh-context model-host failure/recovery and known-answer checks.

- Service intents and Library topics each produced six reviewed triplets plus one held holdout. Twelve expected same-label positives were retained; eligibility forces those unique positives, so this alone is not a semantic-quality claim. Actual negative IDs changed with content.
- **Account/orders known-answer negatives:** 8/8 selected expected sibling labels (password reset/change; order cancellation/refund), baseline 4/8. Mean cosine baseline 0.353, semantic proposals 0.637.
- **Garden/baking known-answer negatives:** 8/8 selected expected sibling labels (vegetables/flowers; bread/cake), baseline 4/8. Mean cosine baseline 0.319, semantic proposals 0.523.
- These fixtures check hard-negative neighborhood selection only; no training, downstream evaluation, measured time savings or general accuracy was claimed.
- Opposing allow/deny rules were highly similar (one negative cosine 0.887 exceeded its positive 0.866). Wrong-label challenge still proposed the deliberately mislabeled same-label positive. Existing labels are trusted, not validated by AI; human rejection remains essential.
- A 48-record maximum-size batch ran through actual inference with all originals/IDs preserved, caps checked and audit import round-tripped. Embeddings are bounded and processed four at a time.
- Online run followed by network-disabled **fresh-worker** real inference passed. Only same-open-page inference after cached downloads is claimed, not offline reload/startup.

## Review, failure paths, artifacts and UI

- Pending reviews block Apply. Hold excludes training entries but preserves source audit. Pair edit requires reapproval. Note edit invalidates export snapshot; undo and clipboard/download match the current reviewed set.
- Holdout approval, self/invalid targets, matching negative labels, shared source groups and excessive negative reuse are rejected. All-held output preserves records and yields empty training JSONL.
- Empty, invalid, oversized JSON/text/files, record count, duplicates, invalid split/reuse settings, source groups across split and exact normalized duplicates across split rejected. Unsupported file clears previous output.
- Cancel terminates worker; input changes, cancelled/stale worker fetch failure and delayed file reads cannot overwrite a newer run.
- Actual worker download/model-host abort and subsequent recovery tested. Unsupported worker/runtime, worker crash, malformed vectors and timeout tested with explicit fault injection. No fake results generated. Desktop CPU path requires no WebGPU.
- Browser-downloaded JSON, CSV and JSONL independently parsed in Python. All audit rows, quote/comma/newline notes and formula-like strings survived proper format-specific escaping. JSONL contains exactly reviewed approved source text and three expected training columns; train/group/label/cap invariants independently checked. Displayed mean cosine/counts independently recomputed.
- Network capture from startup/inference: GET file downloads only, no bodies or user content in URLs; no Hugging Face traffic before explicit Load AI. Source has no remote inference, keys or analytics. Built asset credential-pattern scan is supplementary, not a proof about every dependency.
- Desktop and 320/390px layouts: no horizontal overflow, input/edit/apply/download actions and focus ring checked; screenshots saved and narrow layout inspected. Full phone hardware, screen reader audit, Safari, Firefox and Edge untested.

See `core-validation.json`, `artifact-validation.json`, `asset-audit.json`, browser logs and screenshots. Public Pages build/asset/inference checks are recorded separately after publication; build or branch push alone is not proof of public functionality.

## Public publication verified

- URL: https://xianghui.github.io/daily-app2/20261108-11/
- Final combined gh-pages head `8a0f8dd40587d1919ad9a1383722a26d6f656ed6` confirmed `built` by Pages API. Workflow: https://github.com/xianghui/daily-app2/actions/runs/42437356677 . The final metadata publication superseded an initial title/favicon version; no duplicate rebuild trigger was used.
- Root assembly: 527 apps, failed 0, skipped 0; new gallery entry exactly once, previous 526 entries deeply equal to prior gallery, all inline scripts compiled, all app index files present. Public gallery displays 527 cards and preserves AI Utilities/STL Generators/Mini Games and search.
- Public app HTML, JS, CSS, worker, runtime factory and shared WASM fetched and SHA-256 compared to the local production build (`public-assets-validation.json`). Public gallery bytes match root source.
- The **entire 15-check browser suite passed on the public URL**, including real default MiniLM inference on both included synthetic batches, 48-row batch, offline fresh-worker inference, reviewed/current export actions, input changes, cancellation, stale fetch, defensive fault injection, network failure/retry, privacy capture and 320/390px UI checks. See `public-browser-validation.json` and `public-gallery-validation.json`.
- Browser-downloaded public outputs independently reopened and checked again with `artifact-test.py`; reviewed text/notes, all audit rows, training-only JSONL and cap/group/label constraints survived.
