# Discordance Dock

A local-AI paired QA audit for people comparing first-check and recheck case logs. The bottleneck is reconciling paraphrased case names without quietly comparing different populations. Real neural embeddings materially determine the proposed case pairs; exact assignment prevents reuse. Reviewed pass/fail transitions then distinguish improvement, regression and unchanged outcomes. This is not a generic chat tool, test runner or release authority.

## Workflow
1. Paste JSON or import a synthetic/source `.json`; examples cover product and software QA. Supply a title, matching floor and two unordered case logs.
2. Press **Load AI & reconcile**. This explicitly starts downloads and actual CPU inference. Inspect progress; cancel download/inference at any point.
3. Verify each case's identity, right-log counterpart and both pass/fail outcomes. Edit outcomes, add multiline notes, approve or hold. Reject links with Unmatched. Undo restores the last review state. No approval is automatic.
4. **Apply reviewed audit** checks one-to-one uniqueness and complete review. Inspect the paired 2×2 table, directed reversals, paired net change, original marginal baseline and exact discordance evidence.
5. Download current JSON, CSV or Markdown; copy Markdown. Any review edit invalidates exports until reapplied. JSON audit import restores originals only, deliberately requiring new inference/review. No sending, account changes or remote deletion.

## Real AI / deterministic boundary
- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0; quantized q8 ONNX, 384-dimensional normalized mean-pooled embeddings. Transformers.js **4.3.2** (Apache-2.0) / ONNX Runtime Web (MIT), WASM CPU single-threaded.
- Approximately **23 MB model/tokenizer + 27 MB CPU runtime**, plus app/worker code. First load requires internet. Downloads come from Hugging Face and its CDN; no API key or paid service.
- Shared immutable same-origin worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`, WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve these published apps/assets. Their protocol and dependency bytes were audited in `runtime-dependency-audit.json`. No additional runtime CDN scripts.
- Worker computes actual embeddings four texts per batch. Actual tokenizer ceiling is **512 tokens**; source text is independently limited to 300 characters. The pipeline's per-call max_length option is not relied on. Model main revision is unpinned; observed revision is recorded in the runtime audit.
- Deterministic cosine scoring and exact subset-DP partial assignment maximize summed `(cosine − minCosine)` above the floor; leaving cases unlinked is allowed. The floor is not a calibrated probability. Human overrides must still use a right case no more than once.
- Outcome counts, validation, exports and exact binomial calculations are deterministic. Imported instructions remain text data: no tools, credentials or authority can be requested by the model.

## Interpretation and baseline
For approved paired cases, count pass/pass, pass/fail, fail/pass, fail/fail. Net pass-rate change is `(fail→pass − pass→fail)/paired cases`. All-original baseline is the right-log pass share minus left-log pass share; it may compare different case mixes and uses original, not edited, outcomes. The separate independent-nearest-link baseline counts reused right cases, versus zero in the exact AI proposal. These are computed comparisons, not measured time savings or model accuracy claims.

The exact two-sided McNemar calculation is `min(1, 2 × P[Binomial(b+c, 0.5) ≤ min(b,c)])` for discordant counts `b,c`. With no discordance p=1; no pairs means unavailable effect. It assumes independent pairs and symmetric discordant outcomes under the null. It is not confidence, effect size, causal attribution, equivalence proof, clinical screening, multiple-testing correction or a safety release. Tiny examples illustrate arithmetic, not reliable population inference. Human outcome edits affect reviewed counts only; originals remain intact.

## Privacy, caching, devices
No user text is uploaded: processing happens in the browser worker; network requests only download static code/runtime/model files. No telemetry, remote provider integration, credentials or persistent user-content storage. Supplied examples and committed reports are synthetic. Downloaded audits may contain sensitive imported data; app contents disappear on reload unless the user exports.

Requires secure context (HTTPS or localhost), module workers, WebAssembly SIMD, Cache API for offline caching, and several hundred MB RAM. WebGPU is unnecessary. Desktop Chrome CPU tested; physical phones, Safari, Firefox and constrained-memory devices not verified. Responsive UI checked at 1440, 390 and 320 CSS pixels.

App caches worker source; shared worker explicitly caches WASM factory and binary; Transformers.js caches model files. Cache eviction/private browsing can force downloads. **Tested offline scope: another real inference with a new worker in an already-open warmed page, all networking blocked.** Offline startup, reload and permanent cache retention are not promised. Cache API denial may permit online use but not offline reuse. Cancel terminates the worker; 180-second timeout and generation guards prevent late/old results replacing current input. Network/runtime/vector-schema failures are explicit and never use canned results.

## Formats and bounds
```json
{"title":"QA recheck", "minCosine":0.25,
 "left":[{"id":"caseA","text":"Desk lamp power switch works.","outcome":"fail"}],
 "right":[{"id":"caseB","text":"Table light turns on at its button.","outcome":"pass"}]}
```
Title 1–120 characters, minCosine numeric 0–0.9. Each log 1–12 records, unique letter-first IDs ≤40 characters, text 1–300 characters, outcome exactly `pass` or `fail`. Total ≤24 texts, ≤6 inference chunks. Paste ≤60,000 characters; source/audit `.json` ≤2 MB. Unsupported formats, empty/invalid/oversized inputs and duplicate IDs are rejected. No original records disappear when held or unpaired.

- **JSON:** complete originalInput, review decisions/edits, cosine evidence, unlinked right records, counts and assumptions. Reimport originals only.
- **Audit CSV:** one row per left case plus each unmatched right case, both original/reviewed outcomes, source texts, decisions, notes and cosine (not confidence). RFC-style quoting handles commas, quotes and newlines. Formula-like strings get an apostrophe for spreadsheet safety; JSON stays lossless.
- **Markdown:** source-linked reviewer worksheet with computed comparison, limitations, all left and unlinked right cases. Imported Markdown-like text is never interpreted as HTML in the UI.

## Validation / limitations
See [VALIDATION.md](VALIDATION.md) and machine-readable reports. Tests use the production Vite bundle and real Chrome WASM inference, not a mocked successful model. Defensive mocks only test malformed output, unsupported APIs, timeout and stale-message handling. Both synthetic fixtures matched six intended links each; these easy fixtures do not establish accuracy. Negation, similar-case distinctions, domain shift and unrelated notes can still produce bad links; review every case and hold ambiguity. Binary outcomes and identical pass rules are user-supplied, not inferred or verified.

## Development and publishing
`npm install`, `npm run dev`, `npm run predeploy`. Vite base `/daily-app2/20261121-13/`. Required per-app `predeploy: npm run build` and `deploy: gh-pages -d dist` retained, but **publish only through the collection root** so other apps are preserved. Browser test files depend on this machine's Playwright installation; portable installation of Playwright and Chrome is possible by updating that path.
