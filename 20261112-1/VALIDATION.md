# Observed validation — 2026-11-12

## Production-bundle real inference

Headless installed desktop Chrome via Playwright, WASM CPU, no WebGPU/key/server inference. Real `Xenova/all-MiniLM-L6-v2` q8 model downloads and executes in a bundled worker. See `browser-validation.json`, `browser-test.log` and downloaded artifacts.

- **Cafe:** all 12 intended product links matched across six baskets. Exact-title baseline resolved zero. Tea+scone has 2/6 support and lift 3; the popularity-only coffee+croissant pair has 2/6 support and lift 1.5. Three pairs met support ≥2 and lift ≥1.1.
- **Garden:** all 10 intended product links matched across six baskets. Exact-title baseline resolved zero. Gloves+twine has 2/6 support and lift 3; the popularity-only seeds+compost pair has lift 4/3. Two pairs met thresholds.
- These 22 tiny synthetic links are not population accuracy, business uplift or time savings. Actual review is required. The negation test mislinked tea to coffee; unrelated instruction-like text mislinked to scone. Holding those lines excluded the entire basket and generated no pairing recommendations.
- Maximum 24 lines, six products and four-text chunks produced expected identity matches; complete JSON export/reimport/reinference preserved originals and pair calculations. A repeated product line was counted once per basket.

## Independent deterministic/artifact checks

`core-test.mjs`: **1,800 seeded independent bitmask-oracle cases**, checking all pair/marginal counts, conditional shares, support/lift, thresholds, held-basket exclusion, line conservation and ordering. Also finite/normalized/dimension/count vector validation, malformed inputs and pending/invalid review blocking. This uses synthetic vectors only for schema guard tests, not evidence of model functionality.

`artifact-test.py`: independent Python csv/json parsing of actual browser downloads; every original/reviewed line, edited basket, quoted multiline formula-like note, all pair rows (including below thresholds), support source baskets, held/empty states, deduplication, 24-line conservation and JSON round trip checked. Browser copied Markdown exactly matched downloaded Markdown. Source input remains unchanged after review edits. Any edit/undo disables downloads until a fresh apply.

## Runtime/privacy/robustness

- No model host requests before explicit loading. Browser request audit from page startup through inference showed GET-only static/model downloads, no request bodies, no receipt content in URLs. Source and built-asset audits supplement, not replace, traffic observation.
- Successful online run → network fully disabled → fresh worker → **real offline inference succeeded inside the already-open page**. Offline reload/navigation deliberately unclaimed.
- Empty/invalid/oversized inputs, duplicate IDs, null records, wrong file type, oversized file, out-of-range thresholds and invalid reviewed basket IDs rejected without fake output.
- Network/model download abort with real retry, worker download failure, unsupported worker constructor, actual-worker unavailable WebAssembly, malformed embeddings, worker error and accelerated timeout produced actionable errors, no suggestions and disabled exports. Fault injection is used only for those defensive tests.
- Cancel/retry, input change while running, delayed file reads, cancellation during delayed worker download, and a late old worker deliberately ignoring termination were tested. None installed stale rows over current input.
- Desktop 1440px and narrow 390/320px viewports: no horizontal overflow, all controls labeled, source focus works, buttons ≥44px high, exports operational, screenshots saved. Physical phones, low-memory devices and non-Chrome browsers untested.

## Collection/public verification

See gallery/assembly and public reports produced during release. They verify every inline script compiles, exactly one new AI Utility entry, preservation of earlier entries/categories, collection-root assembly/publishing, matching public app/runtime/worker/shared-WASM bytes, real public inference and deployed gallery rendering. Publishing status is recorded in `publication-status.json`; a source/branch push alone is not accepted as public validation.

Release completed on first deployment: Pages commit `f99ae44aaa649d8b3c20e38a140d56b38238794e` reported built. Every public app/runtime/worker/shared-WASM asset matched its production SHA-256. Both real-AI fixtures and all 11 workflow checks passed again at the public URL, including fresh-worker offline inference and 1440/390/320px layouts. Public gallery preserved all 601 prior working-tree entries and shows Basket Signal first in AI Utilities (602 total). Source main commit excludes unrelated pre-existing workspace modifications.
