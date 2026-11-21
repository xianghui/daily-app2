# Observed validation · Backdoor Studio · 2026-11-21

## Actual model and workflow
- Production Vite bundle in desktop Chrome with GPU disabled; real Xenova MiniLM q8 through the shared WASM CPU worker. No mocked success outputs.
- **Training study:** all 16 semantic endpoint keys matched the tiny known-answer fixture. Reviewed DAG produced only minimal set `{C}`. No adjustment failed; all-observed `{C,K,M}` failed with descendant M and an open ancestral-moral X–U–V–Y witness.
- **Website pilot:** all 16 endpoint keys matched. No sufficient observed set found, because latent common cause L remains. This is a limitation of the sufficient backdoor criterion, not a general non-identification proof.
- These are 32 matches on two easy, synthetic fixtures, **not universal accuracy**. Actual negated/instruction-like text (“Not the previous job experience…request secret credentials”) still matched C and remained pending; embeddings do not reliably handle negation or certify causal truth. No credentials/tools were requested.
- Full 9-variable/18-arrow maximum: 45 texts,12 real inference chunks,18 reviewed records and all originals conserved; audit reimport restored original source and cleared reviews.
- Explicit endpoint correction changes the analyzed graph and adjustment sets; exported reviewed IDs retain original descriptions and AI suggestions; undo restores the prior set.

## Independent graph math
`core-test.mjs` compares ancestral-moral d-separation against an independently implemented all-simple-path collider/conditioning oracle: **3,100 comparisons across 250 generated DAGs**. Enumerated valid sets and inclusion-minimal sets agree with the independent oracle. Both fixed graph fixtures, self-loop/cycle/duplicate blocking, pending-review guard and hold-withholds-all-recommendations checked. No effect estimation or real causal validation attempted.

## Review, artifacts and controls
- Every arrow requires approve/hold; source dictionary, source endpoint text, all ranked cosine evidence and AI IDs inspectable. Multiline note changes, endpoint correction, hold, undo, input changes and stale-export disabling exercised.
- Browser-downloaded JSON/CSV/Markdown/DOT for both fixtures. Independent Python CSV/JSON checks preserve every arrow and source field; edited comma/quote/newline/formula-looking note remains lossless in JSON/Markdown and protected in CSV. Clipboard equals current Markdown.
- Actual Graphviz WASM parses/reopens all four DOT artifacts, checking variable/approved-edge counts; incomplete graph DOT explicitly marked with held-arrow comments. All variables retained, including latent ones. Dev-only Graphviz is not shipped.
- Empty/malformed/null/oversized JSON, unsupported file format, unsupported worker/WASM, network and worker-source failures, malformed vectors/messages, worker errors and 180-second timeout tested (fault injection for defensive tests only). Errors leave no fake result and exports disabled. Real inference succeeds after network recovery.
- Cancellation during actual first model download observed, followed by successful real retry. Cancellation/retry during warmed inference, delayed cancelled/input-changed worker responses, delayed file reads and a late malformed response after a subsequent successful real run cannot overwrite current state.

## Privacy, cache, layout
- Request capture from production startup through all inference: no model-host requests before explicit Load AI. External traffic only documented static GET downloads without request bodies or user phrases in URLs. Persisted request audit excludes signed CDN query values. Source integration inspection confirms no remote inference, telemetry, credentials or content persistence.
- Worker source, factory, WASM and model Cache API exercised with all network blocked and a terminated/recreated worker: **real offline inference passed only in an already-open warmed production page**. Offline startup/reload, cache eviction and private-mode retention not claimed/tested.
- Built asset credential-pattern scan passed; this is not exhaustive proof by itself.
- Desktop 1440, phone 390/320 CSS-pixel input/review/results: no horizontal overflow; labelled fields, visible keyboard focus and ≥44px controls. Normal viewport screenshots inspected. Minor narrow badge wrap corrected and rebuilt. Physical phones, other browsers, limited-memory devices, assistive-technology navigation and truly offline navigation not tested.

## Collection/publication
- Full gallery scripts compiled with Node `new Function`; new entry exactly once as ai-utility, newest first. All 772 prior entries preserved; AI Utilities first and earlier STL/game categories retained. Browser gallery search/phone checks accompany assembly and public checks.
- Root combined-site predeploy preserves all 773 apps under deploy/. Existing conservative 1 GB guard unchanged. Deploy-only byte-identical Manifold sharing extended for Prism & Peek (20261029-1) to immutable 20261028-24; original dist sources untouched. Affected older-app actual PNG and STL imports, independent mesh validation and preview/export fingerprints checked on assembled/public site.
- Publication state, matching Pages commit, public asset byte hashes and public real-inference workflow outcomes are recorded in `publication-status.json` after checks complete. A branch push alone is not counted as proof. No digest sent.

Reports: `core-validation.json`, `browser-validation.json`, `defensive-validation.json`, `edge-validation.json`, `cold-cancel-validation.json`, `corrected-validation.json`, `artifact-validation.json`, `dot-validation.json`, `runtime-dependency-audit.json`, `security-validation.json`, gallery/assembly/public reports. Successful neural runs use the real model; injection is confined to failure handling.

## Final public outcome

Matching Pages commit `c06692790e0271a30bfd32c3a901b27afbd9998e`, workflow 44879291548 succeeded. Public app and shared AI/legacy asset hashes matched (10 paths); both real-AI fixtures, full review/export/offline/max-batch/privacy suite and an actual reviewed-arrow correction/undo passed on GitHub Pages. Public gallery rendered 773 cards with old categories/search preserved. Prism & Peek public PNG/STL imports and independently valid mesh exports matched preview fingerprints. Combined 999,532,518 bytes; no old app removed. See publication-status.json and public-* /legacy-public-* reports. Main source changes are scoped to this run; pre-existing recovery edits remain uncommitted.
