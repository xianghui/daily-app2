# Firstpass Atlas — observed validation, 2026-11-26

## Real AI and workflow
- Production React/Vite bundle served under `/daily-app2/20261126-15/`; real collection MiniLM q8 worker, ONNX WASM CPU, Chrome headless with GPU disabled. No mocked successful inference.
- Final reference-based classifier: **7/8 + 7/8 fixture outcomes matched**. Both misses classified an assembly rework as a first pass. Tests explicitly corrected those suggestions in the editable review layer before asserting the known-answer worksheet. These small synthetic fixtures do not establish general accuracy. The earlier single-description design had substantially worse results and was replaced.
- Two additional mixed-chronology/negation challenge notes matched 2/2. This is not evidence of general negation reliability.
- Reviewed fixture 1: observed all-station first pass 2/4; final pass 3/4; product-of-marginals independence scenario 37.5%.
- Reviewed fixture 2: observed all-station first pass 2/4; final pass 4/4; independence scenario 56.25%.
- Real maximum 24-record / 12-unit inference, 33 texts in nine four-text chunks including reference notes; every record survives and audit reimport restores originals. Production browser test also runs real inference after cancellation.
- Fresh-worker real inference succeeds with all network disabled **inside the same warmed open page**. Offline navigation, page reload and cold startup are explicitly not claimed.

## Deterministic and artifact checks
- All 81 possible two-unit/two-station outcome grids checked, with independent Python Fraction arithmetic for marginal products and independent enumeration for linked counts. Station totals and every original record conserved.
- Pending review blocks apply. Hold blocks entire-cohort metrics while retaining every original observation in audit exports. Outcome edits change metrics; edits invalidate exports; undo restores review. Missing/duplicate unit-station pairs are rejected rather than treated as passes.
- Actual browser downloads parsed with Python JSON and standard-library CSV; original rows, current review fields, multiline quoted formula-leading reviewer notes and all records preserved. Markdown reopened; clipboard read back. Maximum audit JSON reimported and AI rerun.
- Empty, invalid JSON, non-object, empty/oversized batch, too-long source/note, duplicate/missing pairs, unsupported file extension and oversized file rejected visibly.

## Defensive, privacy and UI checks
- Actual worker-download abort, actual model-host download abort, pending worker fetch cancellation and model-download cancellation exercised. Cancellation followed by real retry succeeds without late results.
- Fault injection only for defensive cases: missing Worker/WebAssembly, constructor error, worker error, malformed vector result, accelerated 180-second timeout and a stale late callback after source edit. Each fails visibly without fabricated suggestions.
- Tokenizer config fetched directly and feature-extraction implementation inspected: actual model_max_length 512; the shared worker’s max_length:256 option is ignored by this pipeline. UI/docs were corrected before final publication; note characters remain bounded at 200.
- Production request audit: no model-host requests before explicit load; only GET file downloads, no request bodies, source snippets absent from request URLs. External download hosts limited to Hugging Face/CDNs. Shared worker/factory/WASM byte hashes verified; app bundle scanned for credential patterns and source inspected for provider integration (none).
- Desktop 1440 and narrow 390/320 widths: no horizontal overflow, input labels, keyboard export focus order, ≥44px form/button controls. Hero/review/results screenshots saved; normal 390 hero and 320 results inspected visually. Physical phones, other browsers and screen-reader behavior not tested.

## Publishing
- Root gallery inline scripts compile; exactly one new AI utility entry; all 890 previous entries and categories unchanged. New total 891. Existing utility-focused tagline retained.
- Root predeploy: 891 built, zero failed/skipped; deploy-only shared-runtime reuse reduces assembled site to **817,758,271 bytes**, under the unchanged 1,000,000,000-byte guard.
- Final Pages head `a9e067118f785d7d01d70c208ec3b1522b4352d9` reached **built**, workflow `45766437434` succeeded. Public app, bundled CSS/JS, shared worker/factory/WASM hashes match the assembled tree (seven assets including gallery/app HTML). Public real inference, both fixtures, fresh-worker offline run, maximum batch, review/edit/undo/hold, cancellation/retry, downloads/clipboard, privacy and 1440/390/320 layout checks passed again; all 891 gallery cards and old links preserved. An initial publication was superseded by the tokenizer-documentation correction; the documented legacy build trigger was used once after no final-head build was queued. No Pages source settings changed.
- Assembled and public checks are recorded in their `*-browser-validation.json`, `*-artifact-validation.json`, `*-gallery-browser.json` and `*-assets.json` reports. Publication is complete only after those checks and Pages commit verification, recorded in `publication-status.json`.

## Known limitations
Mandatory human review: final AI still missed two assembly corrections. Complete closed cohorts only; every unit must actually have every checkpoint. No stage censoring/skipping, repeat-attempt event logs, defect Pareto, throughput forecast, causal claims, automatic lot release, remote actions or general statistical guarantees. Model caches can be evicted. CPU performance on real phones and browsers other than tested Chrome is unverified.
