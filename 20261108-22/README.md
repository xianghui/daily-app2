# Citation Loom

A local-AI editorial workbench for matching rough citation notes to a supplied bibliography and exporting a reviewed, first-appearance-numbered manuscript. No generated papers, web search, factual verification, remote actions or API integration.

## Workflow

1. Paste/import JSON or choose the two explicitly synthetic examples. `references` contains unique `id`, `title`, `authors`, `year`, `summary`; `passages` contains unique `id`, manuscript `text` and citation `hint`. `threshold` is a cosine floor, 0.2–0.9. Passage array order is manuscript order.
2. Explicitly click **Load AI & match citations**. MiniLM compares hint meaning with reference titles/summaries in a local worker. Inspect the ranked evidence; similarity is not confidence or source support.
3. Verify the original paper independently, select a reference or no link, and approve or hold every passage. Undo is reversible. Link changes reset review; all review edits invalidate the applied export. Inputs remain untouched.
4. Apply: deterministic numbering follows first approved appearance, reuses numbers for repeated references, excludes held links and reports unused bibliography. Download JSON/CSV/Markdown or copy Markdown. Unlinked passages remain visible. This is one-reference-per-passage plain numbered style, not an APA/Vancouver compliance engine.

## Real AI and privacy

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, q8 ONNX feature extraction. Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web WASM CPU (MIT). Normalized mean pooling, 384 dimensions. Four-text batches, 256-token truncation.
- First use needs internet: roughly 23 MB weights plus tokenizer/config from Hugging Face and its CDN, roughly 27 MB WASM runtime plus <1 MB deployed app/runtime code. Exact built sizes/hashes are in asset-audit.json.
- Runtime JS and worker bundled locally. Immutable same-origin WASM reused from `../20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`; root combined deployment must preserve this older app. WASM factory is locally bundled under runtime/. Licenses are in licenses/.
- Current WASM-capable Chrome/Edge/Firefox/Safari intended. No WebGPU requirement; only desktop Chrome was actually tested, with narrow viewport emulation (not physical phones). Low-memory devices may fail or be slow. No model-provider keys or paid services.
- User content stays in local worker memory. Only model/runtime downloads use network; no content upload. No remote inference integration. Cache API stores worker/runtime; Transformers.js caches model files. User input is not persisted by this app. Cancel terminates the worker and run IDs discard stale callbacks. Model/network/worker failures do not substitute fake output. Timeout: 180 seconds.
- Offline tested: after successful loading, disable all network and create a fresh worker for actual inference in the same open page. Offline reload/app-shell navigation is **not** supported/promised. Browser eviction/private browsing can remove caches. Clear site storage to remove cached model/runtime files.

## Limits and validation

JSON only, <100 KB file / ≤100,000 characters pasted; each list 1–24 records; simple unique IDs; each field 1–500 characters; reference title+summary ≤500 combined. English intended; dense text can exceed 256 tokens and be truncated. No PDF/BibTeX/CSV import. Bibliography metadata is supplied, never authenticated. Imported instructions remain inert strings. Model vectors must be finite, normalized, 384-dimensional and complete.

AI improves semantic candidate retrieval beyond exact-title matching. The displayed baseline counts hints exactly equal to supplied titles (case insensitive); AI coverage counts above-floor proposals. Neither is accuracy or time savings. The two simple known-answer fixtures matched 8/8 intended references versus 0/8 exact-title baseline. A contradictory heat claim also retrieved the heat paper: topical similarity is not entailment. Always read sources and use holds for uncertain links.

JSON is a complete audit including originals, candidates and reviews. Reimport intentionally restores **original input**, not old approvals. CSV preserves every passage and reference with quoted multiline fields and spreadsheet formula protection; Markdown includes all passages, the cited reference list, notes and unused IDs. HTML/Markdown metacharacters in imported text are escaped. Exports reflect only the current applied review.

## Development / publishing

`npm install`, `npm run dev`, `npm run predeploy`. Per-app deploy script exists as required, but **do not run it for collection publishing**. Use root `npm run predeploy` then root `npm run deploy`; base `/daily-app2/20261108-22/`. Read root README Pages verification instructions.

Tests: `node core-test.mjs`; `python3 serve-test.py` then `node browser-test.cjs`, `node network-test.cjs`, `python3 artifact-test.py`. Browser tests use the installed workspace Playwright and Chrome against the actual production bundle; successful inference is never mocked. Fault injection is used only for defensive paths. See VALIDATION.md for observed outcomes and limitations.
