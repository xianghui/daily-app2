# Recoup River

A local-AI claim reconciliation and priority-tier distribution worksheet for small project/event treasurers. Publication status is recorded in `publication-status.json` and the public verification section of `VALIDATION.md`.

## Workflow

1. Choose a synthetic festival or film example, paste source JSON or import a source/audit `.json` under 2 MB.
2. Supply context (including your single currency), `availableCents`, 2–8 cost classes with IDs, labels, descriptions and integer priorities `tier: 1..4`. Each of 1–24 distinct unpaid claims has an ID, description and positive `amountCents`. All money is integer cents up to 100,000,000 per amount; zero available funds is supported. IDs begin with a letter, then letters/digits/underscore/hyphen, maximum 30 characters. Context/labels/descriptions have 1–300 characters; source JSON maximum 50,000 characters.
3. Explicitly load AI. Neural embeddings suggest the nearest cost class for every rough claim. Inspect the top two source definitions and cosine scores, not fabricated confidence. The model does not extract amounts, infer priority law or verify entitlements. It is intended for short English descriptions; ambiguous or unrelated text still gets a nearest candidate and must be held or corrected.
4. Review every identity, tier and amount; approve or hold. Corrected amounts/classes reset approval. Add multiline review notes. Undo review changes. Source edits invalidate all suggestions; review edits invalidate applied exports. Audit import restores **original inputs only**, never prior approvals.
5. Apply to validate. Holds block the entire distribution, but a complete held-record audit remains exportable. No obligation silently disappears.
6. Export current applied JSON audit, all-record CSV, ready-only Payout CSV, or Markdown checklist. Copy uses current Markdown. CSV protects leading spreadsheet formulas and correctly quotes commas, quotes and newlines. JSON retains exact text. All zero-paid records and remaining funds survive.

## AI/runtime, source and licenses

Real `Xenova/all-MiniLM-L6-v2` q8 feature extraction, Apache-2.0: https://huggingface.co/Xenova/all-MiniLM-L6-v2 . Transformers.js **4.3.2** (Apache-2.0) with ONNX Runtime Web (MIT), mean-pooled normalized 384-dimensional embeddings, WASM CPU, single thread. Four-text batches; up to 32 texts per run. Finite dimensions and normalized vectors are validated before matching. The inspected feature-extraction pipeline ignores its unused `max_length` option; the actual tokenizer ceiling is **512 tokens**. Short descriptions remain capped at 300 characters. This is semantic retrieval, not a generative chatbot or deterministic keyword matcher.

Initial download approximately **23 MB model + 27 MB CPU WASM**, plus approximately 1 MB worker/runtime and app assets. Internet is needed before caching. Hugging Face and its `*.hf.co` CDN serve only model-file downloads. The immutable same-origin shared worker is `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`; factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`; WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. **Preserve both older app builds.** This avoids duplicating runtime bytes near the collection size limit. Worker text/vector protocol and dependency paths were inspected; served bytes are audited independently.

Requires a modern browser with WebAssembly SIMD, module workers, Cache API, BigInt and several hundred MB RAM. No WebGPU required. Actual CPU Chrome tested with GPU disabled. Narrow desktop-emulated phone layouts tested; physical phones, Safari/Firefox and low-memory devices unverified. Model loading displays per-file progress and batch counts, with cancellation and a 180-second timeout. Unsupported runtimes, network errors and malformed output show actionable errors; there is no fake AI fallback.

## Privacy and offline scope

No keys, provider integration, backend, telemetry, content uploads, payment instructions or account changes. User inputs/reviews live in page memory and explicit downloads/clipboard. Imported instructions are inert text. Cache API stores worker/factory/WASM/model assets, not input documents. Full browser requests were checked in memory: only GET file traffic, no request bodies or fixture text in URLs; saved reports strip query values. Source and fixtures are synthetic. Built assets receive a credential-pattern scan (not proof against every possible secret).

Tested offline claim: after a complete online run, a **fresh worker inside the already-open warmed page** performs real inference with the browser fully offline. Worker source, runtime factory/binary and model cache all participate. Offline navigation/reload/app-shell startup is not implemented or promised. Cache eviction/private browsing may require downloads again.

## Deterministic allocation and comparison

Tier 1 fills before 2, 3 and 4. Each full tier is paid to its reviewed claim amounts. The first underfunded tier shares the remaining pot proportionally: exact BigInt products, integer floor, then one cent each to largest fractional remainders. Equal fractions resolve by ASCII claim-ID order. Lower tiers get zero until all earlier obligations are filled. Excess pot remains undistributed. Source row order remains unchanged in exports.

Baseline uses the same capped proration across **all claims**, ignoring tiers. Tier-bypassing cents = baseline money allocated to a tier while at least one earlier-tier claim remains unpaid. This measures consistency with supplied priority rules, not savings, fairness law, entitlement, accuracy or future benefit. Available = allocated + undistributed; reviewed claims = allocated + unpaid. No currency conversion, tax, interest, duplicate invoice detection, installment tracking, collateral or per-person cap logic. Priorities must be supplied and verified; no insolvency/legal determination is made.

This differs from the gallery's expense netting, invoice aging, receipt application and equal microgrant awards: it preserves a seniority-ordered unpaid-claim ledger and explicitly quantifies priority bypass from tier-blind splitting. All 226 prior AI utility objectives were checked before selection.

## Development & deployment

React + Vite. `npm install`, `npm run dev`, `npm run predeploy`. Base `/daily-app2/20261116-12/`. Per-app `predeploy: npm run build` and `deploy: gh-pages -d dist` are retained, but **publish only through the root combined deploy**, never this app's deploy command. Root predeploy assembles root gallery and all prior app builds. See root README.

Validation scripts and observed results: [VALIDATION.md](VALIDATION.md). `browser-test.cjs` runs real inference, full review/export/privacy/offline and responsive checks. `defensive-test.cjs` injects failures only for defensive checks; successful fixture results are real inference. `oracle-test.py` independently checks exact allocations using Python Fraction. `artifact-test.py` uses Python CSV/JSON parsers on browser downloads. Additional stale import/download/older-run tests defend race conditions.
