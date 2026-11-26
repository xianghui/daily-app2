# Shareline Desk

Capital-action handoff → real local AI action-type proposals → mandatory review/edit/hold → exact daily weighted-share and basic-EPS worksheet → JSON, CSV, Markdown and interval CSV.

## User and distinct process

For a finance reviewer preparing a small, single-class ordinary-share denominator from mixed capital-action notes. AI compares narrative intent with cash-issue, share-repurchase and free bonus/split descriptions. This avoids manually coding every note; it does not verify legal effective dates or infer numerical terms. Dates and quantities are supplied facts. This is not a chat interface, account connector, automated filing or ledger posting.

All 413 earlier AI-utility gallery entries were parsed before selection. Earlier cash-flow performance, stock-movement and depreciation worksheets do not calculate daily weighted shares with retrospective bonus restatement. No gallery equivalent was found.

## Use

1. Load either synthetic example, paste source JSON, or import a `.json` source/exported audit.
2. Set reporting year, opening ordinary shares and profit attributable to ordinary holders. `profitMinor` uses 100 minor units per currency unit and may be negative. Supply 1–24 action records, including short note, effective date, whole-share quantity, numerator and denominator.
3. Explicitly click **Load AI & infer actions**. Read the download/privacy disclosure first. Inspect the neural cosine rankings and visible references; these are not confidence percentages.
4. Verify every type, date, quantity and bonus factor. Quantity is used only for cash issue/repurchase; factor only for bonus/split. Ratio is total after / before (3/2 = three for two). Approve each item or hold/reject it. Bulk approval is a reviewer attestation, not auto-acceptance.
5. Apply. A hold or impossible timeline blocks the complete worksheet but permits complete audit exports. Editing any review field invalidates the applied snapshot. Undo restores the previous review, then reapply. Source edits cancel inference and clear approvals.
6. Download JSON (all originals, current review, neural rankings, exact fractions and result), audit CSV (every source/held record), Markdown handoff or complete interval CSV. Copy uses the current applied Markdown. Audit reimport restores originals, intentionally not prior approvals. Nothing is persisted except runtime/model files: download work before leaving.

## Exact calculation and conventions

Opening count is effective Jan 1. Each action takes effect at the start of its date. Actions are sorted by reviewed date; simultaneous dates are blocked rather than inventing a sequence. Cash issues add, repurchases subtract, bonus factors multiply actual shares. Actual outstanding counts must remain whole and between 1 and 1,000,000,000. Bonus ratios must exceed one. Each interval's actual shares is retrospectively multiplied by every later bonus factor in the reporting year, weighted by actual days / 365 or 366. Adjacent intervals cover the full year exactly once. January 1 and December 31 events are supported. BigInt rational arithmetic prevents intermediate rounding. JSON fractions are integer strings, not lossy numbers. Display rounding: six decimals, nearest with half away from zero.

Basic EPS = profitMinor / 100 / exact weighted shares. The computed baseline divides the same profit by year-end actual shares; it is not measured time savings or an accuracy claim. Unsupported: multiple classes, partly paid shares, rights issues, options, convertibles, diluted EPS, reverse splits, fractional-share settlements and post-year bonus events. The worksheet does not establish financial-reporting compliance, profit attribution or the proper legal recognition date.

## Real AI and assets

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0; MiniLM transformer, normalized mean-pooled 384-dimensional embeddings, quantized q8 ONNX, WASM CPU.
- Runtime: Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web 1.31.0-dev.20260914-8d85527a0 (MIT). Exact installed versions and shared byte provenance are checked in validation; see runtime audit.
- AI task: embed three explicit references and source notes; deterministic cosine ranking proposes the nearest type. Numerical inputs are never guessed. No hard-coded responses, provider integration, API keys or fake fallback.
- Seven chunks at maximum batch: four texts per model call, 27 texts including references. Notes ≤200 characters. The shared feature-extraction pipeline does not forward the worker's max_length override; actual tokenizer configuration has a 512-token model ceiling, not a promised 256-token ceiling. See `tokenizer-audit.json`.
- First-use budget roughly 50 MB (~23 MB model weights, ~27 MB WASM plus tokenizer/code). Internet required initially. Hugging Face/CDN model requests download files only. Model identifier currently resolves `main`; future host changes can affect reproducibility/availability.
- Immutable same-origin shared dependencies: worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, module factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`, WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve these existing app assets; `runtime-provenance.json` records hashes. This avoids ~27 MB duplicate bytes. App UI code and React are locally bundled.
- Download progress/file and inference chunk progress are visible. Cancellation terminates the worker. Run IDs and import-read IDs prevent stale writes; timeout is 180 seconds. Network failures, worker construction/errors, unavailable WASM/workers and malformed vectors fail visibly without fabricated results. Correct the cause and click Load again.

## Privacy, devices and offline scope

Input, review and outputs stay in this tab. No supplied content in network URLs/bodies; there is no remote inference path. React renders imported text as text; no tool authority is granted. Only synthetic test fixtures are committed. No shared credentials.

Current desktop Chromium with module workers and WebAssembly SIMD is tested with GPU disabled; no WebGPU requirement. Current other engines may work but are not tested; physical phones and low-memory performance are unverified. Cache API stores worker, WASM factory and binary; Transformers.js caches model files. Cache failures may require redownloads. Tested offline scope: after a successful online inference, terminate the worker, block network, then do another real inference in the already-open warmed page. Cold offline navigation/reload is NOT promised. Browser eviction/private mode/blocked storage can break cache availability. User documents are not put in these caches.

## Formats, bounds and limitations

Source JSON ≤60,000 characters, audit/file import ≤8 MB, 1–24 unique-ID records, notes ≤200 characters, reviewer notes ≤500, years 1900–2199, opening 1–100,000,000 shares, event quantity 1–100,000,000 shares, factor components 1–10. Profit bounded ±100,000,000,000 minor units. Empty, malformed, unsupported and oversize inputs receive actionable errors. Exported JSON restores all originals within source bounds. CSV text beginning with spreadsheet formula characters gets an apostrophe; numeric fields stay numeric. Markdown is plain text, not an instruction for external action.

Semantic proximity is not classification certainty. Eight simple fixture labels matched, and the tested negation probe selected the intended cash issue, but an unrelated note was still forced to an action. Always inspect source notes. There is no general accuracy claim. See `VALIDATION.md` for observed outcomes and explicit untested areas.

## Development / deployment

React + Vite. `npm install`, `npm run dev`; `npm run predeploy` builds the production app with base `/daily-app2/20261126-20/`. Required per-app deploy script is retained but **do not run it to publish the collection**. Root `npm run predeploy` assembles all gallery entries; root `npm run deploy` publishes combined `deploy/`.

Validation scripts: `node core-test.mjs`, `python3 independent-test.py`, `python3 serve-built.py --port 7800`, `node browser-test.cjs`, `node defensive-test.cjs`, `node extra-test.cjs`, `python3 artifact-test.py [prefix]`. Browser scripts use the existing local Playwright installation and installed Chrome. `APP_URL` and `PREFIX` select assembled/public targets. Public checks occur only after Pages reports the matching gh-pages head as built.
