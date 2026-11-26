# Unitloom Desk

Production cost-pool handoff → real local cost-incurrence inference → human review → exact equivalent-unit cost worksheet → JSON/CSV/Markdown.

For workshop cost reviewers. The bottleneck is inconsistent narrative descriptions of when material, conversion and finishing costs are incurred. AI proposes one of three explicit treatments from the note: all at start, uniform through production, or all at completion. This is not a chat interface and does not extract or invent financial values.

## Use

1. Select either synthetic example, paste source JSON, or import `.json` source/audit.
2. Explicitly click **Load AI & match patterns**. Inspect download/batch progress; cancel or retry if necessary.
3. Inspect every original note and ranked pattern description. Edit pattern, completed/ending counts, common ending completion percentage and total available cost. Approve verified pools or hold unsupported ones. Reviewer notes support multiple lines; undo restores the preceding review state.
4. Apply reviewed allocation. Pending rows block export. Held records remain in all audits, but are excluded from partial approved totals and block a complete release.
5. Download JSON, CSV or Markdown, or copy the worksheet. Editing invalidates prior export snapshots. Audit reimport restores originals, not prior approvals.

Source example shape:
```json
{"title":"Synthetic pool","currency":"USD","requests":[{"id":"labor","note":"Labor incurred evenly throughout production","completed":800,"ending":200,"percent":25,"cost":"85000"}]}
```

Each row is an independent cost pool. Multiple pools may refer to the same physical units. Never sum unit counts across pools. Total costs should be independent amounts, not duplicated departmental totals.

## Real AI, model and runtime

- [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0; q8 ONNX weights 22,972,370 bytes. Model revision `main` is unpinned and may change.
- Transformers.js 4.3.2 / ONNX Runtime Web, Apache-2.0/MIT. Real WASM CPU inference, normalized mean-pooled 384-dimensional embeddings; cosine ranking against three cost-pattern descriptions. Scores are similarity, **not confidence**. No remote inference/provider or API key path.
- Initial download approximately 50 MB: 23 MB weights, 26,861,777-byte WASM, JS/tokenizer overhead. Internet needed from Hugging Face and its public model CDN plus same-origin runtime paths. No model download before explicit loading.
- Reuses immutable same-origin worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, module factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`, and WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve these older builds. SHA-256s and byte counts in `runtime-provenance.json`; `{id,texts}` → progress/batch/error or `{id,vectors}` protocol checked. No runtime CDN imports.
- Four texts per chunk; 3 patterns plus up to 24 notes (seven chunks). The reused pipeline passes `max_length:256`, but the installed feature-extraction implementation does not enforce that option: actual tokenizer model limit is 512. Notes are bounded to 200 characters; unusual Unicode can truncate. No claim of a stricter token bound.
- Current desktop browser with module workers, WebAssembly SIMD, BigInt, Cache API and sufficient memory. Tested Chrome CPU with GPU disabled, not WebGPU. Physical phones, other browser engines and constrained-memory hardware unverified.

## Privacy, cache and failures

Content remains in browser memory. Network requests are downloads of static code/model files, not user-content uploads. There is no analytics, backend, credentials or external account action. Imported notes are data, not instructions. Closing the page loses unsaved changes.

Worker source, factory, WASM and model files use Cache API when available. Verified offline scope: new worker, same already-open page after successful loading, with all browser network disabled. Offline cold navigation/reload is **not** promised. Private browsing, cache eviction and storage restrictions may require redownloads. Download/batch status, cancellation and 180-second timeout are visible. Worker termination plus run IDs prevent late callbacks, imports or source downloads from overwriting newer inputs. Network, runtime and malformed-vector errors produce no fabricated result; use current Chrome/WASM SIMD and retry with internet.

## Deterministic arithmetic and limits

- Source ≤60,000 characters, 1–24 rows, unique 1–40-character ASCII IDs, notes ≤200 characters. Completed and ending counts are integers 0–1,000,000 (positive combined count); common ending completion integer 0–100; cost nonnegative integer string ≤12 digits in one currency's minor units. Source file ≤1 MB; audit ≤8 MB; reviewer note ≤500 characters. Invalid Unicode/control characters rejected.
- Start weight = 100%; uniform weight = reviewed percentage; end weight = 0% until 100%, then 100%. Equivalent units = completed units + ending units × weight. A zero-percent **started** unit still receives start materials.
- Exact BigInt rational unit rate retained. Completed cost = total cost × completed units / equivalent units, rounded nearest minor unit, ties upward. Ending cost gets the exact residual. Thus every approved pool conserves every minor unit; no pre-rounded rate is used. At zero EU, zero cost is allowed with undefined unit rate; positive cost blocks allocation until corrected or held.
- Baseline treats all physical ending units as fully complete, uses the same rounding/residual policy and cost total. Differences are computed scenarios, not accuracy, measured savings, book adjustments or validated accounting policy.
- JSON schema `unitloom-desk/v1` retains originals, complete reviews, AI candidates, holds, calculation fractions and totals. CSV retains all original/review rows and allocation results, RFC-style quoting/CRLF. Text beginning with spreadsheet formula markers is apostrophe-prefixed; signed numeric differences remain numeric. Load large integer fields as text. Markdown preserves source notes and reviewed results.

## Assumptions and limitations

No opening WIP (not a FIFO opening-layer or weighted-average opening-cost tool), scrap/spoilage, transferred-in costs, cost at intermediate thresholds, heterogeneous progress within a pool, unit losses or ledger posting. Separate cohorts first. AI cannot establish actual production policies or accounting compliance; verify descriptions and every numeric value. It always chooses a nearest pattern even for unrelated notes. An unrelated bicycle note selected `end`; this is not evidence that it is a valid pool. A simple negation fixture matched `end`, but that does not establish general negation understanding. All proposals start pending.

## Build and publishing

React + Vite; `npm install`, `npm run predeploy`. Base `/daily-app2/20261126-13/`. Required per-app `deploy: gh-pages -d dist` exists but **do not invoke it to publish the collection**. Root `npm run predeploy` assembles the entire gallery; root `npm run deploy` publishes combined `deploy/`. See root README for Pages build verification.

## Validation

See `VALIDATION.md` and machine-readable reports. Real browser fixture tests, independent Python Fraction checks, downloaded-artifact parsing, defensive faults, offline fresh-worker inference, responsive screenshots and public runtime byte comparisons are recorded, with tested scope distinguished from unverified devices.
