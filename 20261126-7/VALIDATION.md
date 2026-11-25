# Observed validation — Deferral Folio

Production Vite bundle served at its real `/daily-app2/20261126-7/` path. Real Chrome, headless, GPU disabled. No mocked successful inference.

## Local results

- `npm run predeploy`: passed, React/Vite production build.
- `core-test.mjs`: **6,039 assertions/cases**, including both known-answer totals, exact remainder allocations, maximum 60 months/12-digit values, 6,000 value/range conservation combinations, schema/date bounds, pending-review rejection, holds and invalid treatment dates.
- Actual MiniLM inference: Studio batch **3/3**, Workshop batch **3/3** expected treatment links. Different note meanings changed the proposed profile and resulting monthly worksheet. All six approved contracts conserve their entire minor-unit values.
- Studio worksheet (2026-11): prior **10001**, current **55500**, future **160000** minor units.
- Workshop worksheet (2027-02): prior **90335**, current **3334**, future **25533** minor units.
- Maximum-batch real inference: **6 profiles + 24 contracts**, eight four-text chunks. All alternating service/delivery choices matched expected first equivalent profile; no lost rows; **2424** total units conserved. Downloaded audit reimported and reprocessed successfully.
- Actual browser JSON, contract CSV, schedule CSV and Markdown downloads independently parsed by Python JSON/CSV plus integer-month allocation oracle: **1,168 assertions** across local artifacts, including quotes, commas, multiline formula-like notes, changed amount/cutoff and held/blocked records. Clipboard reflects current reviewed notes. CSV formula mitigation survived parsing; no silent newline loss.
- Review required before apply; value, dates, treatment, report cutoff and notes editable; hold/reject blocks complete totals; undo restores preceding review and invalidates export snapshots; incorrect treatment missing its date and reversed service ranges fail visibly while preserving records.
- Worker/model downloads succeed only after user initiation. Captured successful-workflow requests are GET without bodies; no source notes in URLs. External hosts are only documented model downloads. URL paths/query-key names persisted without signed CDN query values.
- Actual fresh-worker offline inference passed in the same warmed open page with network blocked. No offline reload/cold-start claim.
- Defensive suite: **10 checks** — worker download abort, model-host abort, unsupported Worker, unsupported WebAssembly, worker construction/error, malformed vectors, timeout, stale callbacks and cancellation during worker fetch. All fail visibly with no fabricated suggestions.
- Recovery suite: **4 checks** — real inference after worker-download failure, real inference after model-download failure, a delayed stale callback cannot replace the newer real fixture, and a delayed file read cannot replace newer source. Cancellation followed by actual model retry also passed.
- Empty/bad JSON, wrong shapes, missing/duplicate IDs, invalid/zero/nonstring amounts, bad months, oversized inputs, >24 contracts, unsupported file types and >1 MB import rejected.
- Desktop 1440px and narrow 390/320px: no horizontal overflow, all fields labelled, minimum 44px controls, keyboard export focus order, screenshots captured. Desktop hero and 320px review screenshot visually inspected.
- Immutable shared worker/module/WASM hashes match `runtime-provenance.json`. Model tokenizer inspected: actual maximum 512 tokens; feature pipeline does not forward `max_length:256`. Strict 200-character text bounds are enforced.

## Quality limitation (observed, not hidden)

A negated hosting-versus-delivery challenge expected `handover` but actual MiniLM proposed `coverage`. `challenge-validation.json` records the exact synthetic note and result. This is a semantic retrieval aid, not contract interpretation or a revenue-recognition opinion. Human review remains mandatory. Six simple matches and one failed challenge do not establish representative accuracy.

## Untested / not claimed

Physical phones, non-Chrome engines, low-memory devices, cold offline navigation/reload, cache persistence after eviction, representative accounting-language accuracy, legal/tax correctness, real customer datasets or account connections. Runtime model revision is not pinned. No external postings, uploads or mandatory paid service.

## Publication verification

Public verification is recorded in `publication-status.json`, public workflow/artifact reports, public asset hashes and public gallery browser report after the combined Pages build. A push alone is not accepted as validation.

## Combined-site assembly

Root `npm run predeploy` passed; combined site **815,611,159 bytes**, below the preserved 1 GB guard. Root index plus app folder are present. All **882** prior gallery entries/categories preserved, **883** cards render with AI Utilities first. Every inline script compiles and the new entry appears exactly once. The assembled bundle passed the full real-AI browser suite again, including offline inference, review/export/batching and privacy capture; independent artifact parsing passed again. All seven root/app/JS/CSS/shared-worker/module/WASM byte hashes match the served assembly. See `assembled-*` reports.

## Public verification (completed)

Root deploy reported Published. Remote gh-pages head and the built Pages commit match **6b6b65b33f209ad79efde8d120b5ceaac7f1a375**; workflow **45711028398** completed successfully. Public URL: https://xianghui.github.io/daily-app2/20261126-7/ . The full real-browser suite passed again at that public URL: both fixtures **6/6**, 30-text maximum batch, review/edit/hold/undo, changed cutoff/value, invalid input/import, cancellation/retry, fresh-worker offline inference, current clipboard/downloads, request privacy checks and 1440/390/320px layouts. All **7** public root/app/runtime assets match assembled SHA-256 hashes; all **883** gallery cards render, preserving every old link/category. Public downloaded artifacts independently parsed with **1,168 assertions**. No digest sent. All samples are synthetic. Untested-device and semantic-quality limitations above still apply.
