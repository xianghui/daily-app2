# Observed validation — Basket Deflator

## Local production bundle

- `npm run predeploy`: passed React/Vite production build.
- Real Chrome WebAssembly CPU inference, no GPU, with actual MiniLM q8 weights: Office 6/6 intended product matches; Community garden 4/4. These are tiny synthetic fixtures, not accuracy estimates.
- Office: base spend 19,000 cents, current 21,200; cross baskets 20,200 and 20,800. Fisher price +4.096265%, quantity +7.188233%, nominal spend +11.578947%; unweighted price baseline +8.333333%.
- Garden: base 14,000, current 21,000; cross baskets 15,000 and 22,000. Fisher price +1.129979%, quantity +48.323970%; unweighted price baseline +20%. These are computed descriptive differences, not savings or causal effects.
- 1,000 independently generated Decimal arithmetic oracle cases verified all four exact-cent totals, six ratios/indices and multiplicative factorization, including zero individual quantities and maximum numeric scales.
- Browser workflow: mandatory review, product/period/price/quantity edits, hold blocking, undo, duplicates/missing cells, invalid numbers, stale export invalidation, current JSON/CSV/basket CSV/Markdown downloads and clipboard. Independent Python CSV/JSON/Markdown artifact checks conserve every source and reviewed field, exact totals, and quoted/comma/multiline/formula-like notes.
- Model batching: 32 actual input texts (8 products +24 rows), every source preserved. Maximum audit JSON reimport restores all originals, not approvals. All held rows and zero-spend baskets remain blocked.
- Cache/offline: after online model load, fully offline fresh-worker real inference succeeded inside the already-open warmed page. Offline navigation/reload is **not** tested or promised.
- Cancellation then real retry; input changes mid-run; delayed old worker response after newer completed run; delayed worker download; delayed file import. Generation guards prevent stale overwrites. Fault-injected output is used only for defensive race/error tests, never successful AI evidence.
- Defensive isolated contexts: denied model network then successful real retry, missing WASM, denied worker download, unsupported Worker, malformed vectors, malformed envelope, timeout, worker error. All show errors with no fake results or enabled exports.
- Desktop 1440 and narrow 390/320 CSS-pixel layouts: no horizontal overflow, labels and keyboard focus, ≥44px buttons; viewport screenshots inspected. Physical phones, other browser engines and constrained-memory devices remain untested.
- Browser request audit from startup to inference: no model download before explicit run, all requests GET without bodies, no fixture content in full URLs; only same-origin static/runtime and documented Hugging Face/CDN hosts. Persisted reports omit signed URL values. Built asset credential-pattern scan is supplemented by source inspection: no provider integration.
- Unrelated/instruction-like text still gets the nearest dictionary product; it is held and blocks output. AI does not establish product equivalence or price quality. Negation, multiple products per row and changing pack sizes require human correction.

Reports: `browser-validation.json`, `defensive-validation.json`, race reports, `oracle-validation.json`, `artifact-validation.json`, asset/gallery checks and screenshots. Combined-site and public results will be recorded only after those checks execute.

## Combined collection

- Root predeploy assembled all 706 apps without build failures. Gallery inline scripts compiled with `new Function`; new entry occurs once under AI Utilities; all 705 prior entries/categories and their ordering preserved. Rendered gallery search, category order and phone layouts passed.
- Full real-AI browser workflow suite passed again from the root-generated `deploy/`, including both fixtures, current exports, maximum inputs, cancellation and offline fresh-worker processing. Maximum complete basket (8 products × two periods) matched 16/16 same-description identities with actual inference, applied ready results and reimported all originals with fresh pending reviews.
- Runtime credential-pattern audit passed. Immutable worker/factory/WASM SHA-256 recorded. Combined output: 999,545,680 bytes, below the existing conservative 1 GB limit.
- Byte-identical deploy-only Manifold reuse extended to older app `20261028-22`; source builds untouched. Its real worker loaded the shared WASM from `20261028-24` and downloaded a binary STL with valid triangle count/byte length. Existing JS URLs remain available; query-versioned references avoid stale modules.

## Public release

Matching Pages commit `56201376095ae2b5bc8b36aec750ab59a639cf47` reached **built** on the first publish. Public app/worker/factory/WASM and affected legacy HTML/JS/CSS bytes matched the root deploy output. Both real-AI fixtures (10/10 paraphrased product links), the full reviewed workflow/privacy/current-artifact suite, maximum complete basket, warmed-page offline fresh-worker inference and all 706 gallery cards passed. The affected older app also loaded shared geometry and downloaded a valid 2,724-triangle binary STL at the public URL. Reports: `public-browser-validation.json`, `public-max-ready-validation.json`, `public-asset-audit.json`, `public-gallery-validation.json`, `public-shared-geometry-validation.json`, `publication-status.json`. Physical phones, other browser engines, offline page reload and real-world purchasing data remain untested. No digest was sent.
