# Common Ground

A local-AI peer-learning pairing planner for facilitators. Import/paste a synthetic or consented participant roster, set a minimum topic similarity and optional cross-team rule, run real browser inference, inspect the source interests and scores, edit/reject pairings, apply a reviewed plan, and export a complete roster. This is not a generic chat interface or a personality/suitability assessment. No invitations or other external actions occur.

## AI and deterministic steps

- `Xenova/all-MiniLM-L6-v2`, quantized q8 ONNX, MIT weights. Source/model cards: https://huggingface.co/Xenova/all-MiniLM-L6-v2 and https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2 . Transformers.js (Apache-2.0), ONNX Runtime Web (MIT), WASM CPU, one thread; locally bundled worker/module factory/WASM. Exact versions in package-lock.json and third-party sources in THIRD_PARTY_NOTICES.md.
- Real mean-pooled, normalized 384-dimensional embeddings of interest descriptions, in batches of four, capped at 256 tokens per description. Finite normalized vectors validated before use.
- Deterministic cosine similarity and user threshold produce candidate edges. Exact bitmask dynamic programming maximizes number of disjoint pairs, then sum of similarities, respecting the optional team constraint. No random/canned answers or fallback masquerading as AI. Manual reassignment below threshold is shown as an override; duplicate participants and same-team violations block applying.
- An exact-full-description baseline uses the same team rule. Pair counts are coverage, not accuracy or a claimed improvement percentage. Similarity is not confidence. Original inputs, rejected pairs and all unpaired participants survive JSON export.

## Requirements, network and privacy

First run downloads about 23 MB weights/config/tokenizer plus approximately 27 MB WASM runtime (transfer compression varies). Internet required to Hugging Face and its CDN, including hf.co hosts. Runtime assets come from this static site. Model loading starts only on explicit **Load AI & find pairs**. Modern desktop browser with WebAssembly, Web Workers, approximately 300 MB free memory; no WebGPU required. Chrome desktop tested; other browsers and physical phones not tested. Phones may be slower/memory limited.

Roster descriptions are embedded only in worker memory, never sent to a model service. No keys, backend, analytics or optional provider integration. Inputs/outputs remain in memory until exported; close the page to discard them. Model weights and runtime files use Cache API, not roster storage. After a successful online run, a fresh worker in the already-open page supports offline inference (tested with all networking disabled). Cached model reuse after online page reload is tested. Offline page reopening/navigation is NOT promised; no app-shell service worker. Cache eviction, private browsing or browser restrictions can require another download.

Imported text is data, not executable instructions or authority to request credentials. Avoid sensitive profiles; topic similarity alone is no basis for high-stakes personnel decisions.

## Input, review and export

CSV with exactly `id,name,team,interests` headers; 2–16 rows, unique IDs, ID 1–40 characters, name/team 1–80, interests 1–400; file/input maximum 30 KB. English-focused. Blank, malformed, duplicated, oversized and unsupported inputs show actionable errors. Team comparison is case-insensitive. Threshold range 0.2–0.85, default 0.35. Cancel kills the worker, and late worker/file responses cannot overwrite changed inputs. Retry reuses caches. Download/worker/model errors, malformed vectors and a 180-second timeout fail closed without fake results.

Each proposed pair shows original interests and measured similarity. Change a partner, uncheck acceptance to reject, add a conversation note, or undo the last 30 edits. Conflicts block applying; changes invalidate any applied export snapshot. Unpaired participants remain visible in the complete roster. This version cannot manually add a wholly new pair when no candidate was suggested; lower the threshold and rerun if appropriate. Get human agreement before arranging a session.

**Apply reviewed plan** creates the in-app export snapshot. JSON retains originals, constraints, proposed/rejected pairs, reviewed notes/scores and every participant with partner/unpaired status. CSV is one row per participant, including unpaired rows, and escapes formula-like text (leading apostrophe) for spreadsheet safety. Markdown/copy gives a readable full roster. Actual downloaded artifacts have been parsed independently and reconciled, including quotes, commas, newlines and formula-like values. CSV formula escaping intentionally changes leading characters; JSON preserves exact source text.

## Development and publishing

`npm install`, `npm run dev`, `npm run predeploy`. Vite base `/daily-app2/20261106-23/`. Required per-app gh-pages dependency and `predeploy: npm run build`, `deploy: gh-pages -d dist` retained; publication must use the parent combined collection's root workflow, NOT per-app deployment.

Validation: `node core-test.mjs`; serve the production dist with `python3 serve-test.py`, then `node browser-test.cjs`. Set TEST_URL and REPORT for a public rerun. Browser suite requires local Playwright installation as recorded in the script. See VALIDATION.md and machine-readable browser reports for actual outcomes and limitations.
