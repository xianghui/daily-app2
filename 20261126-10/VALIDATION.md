# Observed validation — Rate Anchor / 2026-11-26

## Local production bundle and assembled collection

Chrome via Playwright, headless, GPU disabled, actual Vite production base. Successful AI tests use the real MiniLM WASM model (no mocked inference or deterministic fallback). Browser requests were observed from startup through all runs.

- Two materially different synthetic batches: Workshop close (cash claim, historical equipment, payable, prepaid services), Archive close (historical supplies, bank cash, historical scanner, creditor). All **8/8** supplied fixture treatment keys matched real inference. This is a small synthetic check, not general accuracy.
- Workshop reference net 308000 + signed movement 5000 = reviewed 313000 USD minor units; all-closing baseline 336000; difference −23000. Archive reference net 293750 − 3000 = reviewed 290750 EUR minor units; all-closing baseline 270250; difference +20500. Comparisons are computed discrepancies, not savings.
- Changing a reviewed historical row to monetary changed its carrying value/movement; changing the balance changed output; undo restored terms. Pending reviews blocked apply. Holds preserved every original, excluded their calculations and blocked complete release.
- All 600 generated calculation cases independently matched Python Decimal signed half-up endpoint rounding. Positive/negative half ties, zero balances, huge exact signed amounts, same-rate behavior and schema validation checked.
- Maximum 6 profiles + 24 balances = 30 actual model embeddings in eight four-text chunks. Maximum 12-digit signed balances and six-place rates retained exactly, including results above JavaScript safe integer. Reimport of maximum exported audit restored all original source inputs.
- Actual JSON/CSV/Worksheet CSV/Markdown downloads parsed with independent Python JSON/CSV/Decimal. All original IDs and rows, current review edits, signed integers, multiline quoted/formula-like reviewer notes, held placeholders and totals survived. Clipboard contained the current reviewed Markdown. Edits invalidated export buttons.
- Fresh-worker real inference succeeded with network entirely disabled in the **same warmed open page**. Offline startup/navigation/reload not claimed.
- No Hugging Face request before explicit Run. All observed requests were GET with no request bodies; user notes were absent from URLs. External paths were restricted to documented Hugging Face/CDN model downloads. Stored audits omit signed URL query values. No API/provider integration. Built text scan found none of the checked credential patterns; this is not an exhaustive secrets proof.
- Real worker-download and model-download aborts showed errors without fabricated results. After unblocking each network path, real inference succeeded on retry.
- Fault-injected Worker absence, WebAssembly absence, worker-construction failure, worker error, malformed vectors and timeout all failed visibly without proposals. Faults are confined to defensive tests, never successful AI checks.
- Cancel during pending worker-source fetch and active run, retry with actual model, stale callback after newer real inference, input changes and delayed file imports passed. Old runs/imports did not replace newer data.
- Empty/invalid JSON, unsupported/oversized file, duplicate IDs, excess rows/text, invalid reviewed signed balances/rates and matching currency labels rejected. Vector counts/dimensions/finiteness/norm rejected when malformed.
- Desktop 1440px and narrow 390/320px: no horizontal overflow, form labels present, buttons/inputs/selects ≥44px high, keyboard export focus order checked. Normal-viewport screenshots of hero, review and results manually inspected. No browser page errors.
- Root inline gallery script compiled with Node `new Function`; new entry exactly once, area ai-utility, first; all **885** earlier entries preserved unchanged. Browser gallery render/search and earlier-category links checked.
- Root assembly: **886 built, 0 failed, 0 skipped**. Existing deploy-only byte-identical runtime sharing preserved; conservative published size **816428847 bytes < 1000000000**. New app uses ~258 KB bundled JS/CSS plus shell/public scaffold assets; it does not duplicate model/runtime weights.
- Shared worker/module/WASM and app shell/assets byte-compared against the assembled production tree. See `assembled-assets.json` and `runtime-provenance.json`.

## Challenge limitation — do not hide this failure

A negated cash description that was really historical equipment matched historical correctly. Instruction-like imported text was treated only as data and matched the bank cash description, with no credential UI or authority changes. However, a **cash-refundable advance** matched historical rather than monetary. Such advances are explicitly excluded in UI/README and must be **held** for independent policy review. The model is a similarity retriever, not an accountant; mixed or out-of-scope text can always produce an inappropriate nearest match. See `challenge-validation.json`.

## Not tested / not promised

Physical-phone inference, other browser engines, offline app startup/reload, persistent saved designs, live accounting data, accounting-standard completeness, rates from external providers, changed/settled foreign quantities or automated postings. Model host main revision is unpinned. Storage eviction and host changes can invalidate cached behavior; users must independently verify rates, balances and policy.

## Reproducible evidence

`local-browser-validation.json`, `assembled-browser-validation.json`, matching artifact-validation files and downloaded synthetic artifacts; `core-validation.json`, `core-cases.json`, `defensive-validation.json`, `recovery-validation.json`, `challenge-validation.json`, `bundle-audit.json`, `gallery-validation.json`, `assembled-gallery-browser.json`, screenshots and asset audits. Public deployment verification is recorded separately in `publication-status.json` and public-* reports after publishing.


## Public publication verification

Root `npm run deploy` published combined gh-pages commit `d6863db6f87c15b7238c0fca3fd462919d1b525e`. GitHub Pages run `45733918089` completed successfully; Pages API targets the same built commit. Public app and gallery return 200. Seven public shell/JS/CSS/shared worker/factory/WASM assets match assembled SHA-256 bytes. The full public production browser suite repeated both real AI fixtures (8/8 keys), review/edit/hold/undo, maximum batch, artifact downloads, narrow layouts, privacy checks and fresh-worker offline inference. Independent Python parsed 10 public audit variants and their available CSV/Markdown files; all rows, reviewed notes, signed amounts and approved-only totals survived. Public gallery render/search preserved all 885 earlier entries; no browser page errors. Evidence: `public-browser-validation.json`, `public-artifact-validation.json`, `public-assets.json`, `public-gallery-browser.json`, public screenshots and downloaded synthetic files.
