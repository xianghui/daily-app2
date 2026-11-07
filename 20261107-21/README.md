# Claim Ledger

Published and public real-AI validation passed on 2026-11-07. Editorial source-review utility for product marketers and community communications editors preparing batches of publication claims.

## Workflow

1. Paste/import two UTF-8 CSVs with exactly `id,text` headers: draft claims and approved source excerpts. Synthetic service-launch and community-venue examples are provided.
2. Set a candidate cosine threshold and explicitly load local AI. MiniLM embeds each text and retrieves a meaning-related source candidate for each claim; this finds paraphrases that exact-text matching misses.
3. Inspect candidates and unchanged excerpts, switch source links, hold claims, mark them excluded, or record human-verified support. **AI never establishes factual support.** Every claim starts held. Supported status requires a verification note; missing numerical literals block it.
4. Check each review box and apply the register. Download current JSON, CSV or Markdown, or copy JSON. Any review edit invalidates the applied export. Undo and Hold all are reversible; originals are preserved. Exclusion never deletes a source record or publishes/deletes anything externally.

## Real AI / static hosting

- `Xenova/all-MiniLM-L6-v2`, quantized q8; Apache-2.0. Source: https://huggingface.co/Xenova/all-MiniLM-L6-v2 . Underlying sentence-transformers model is Apache-2.0. Weights are downloaded, not checked into Git.
- Transformers.js (exact installed version in package-lock.json), ONNX Runtime Web WASM CPU, normalized mean-pooled 384-dimensional embeddings; up to 256 tokens per short text; four texts per inference batch.
- Approximately 23 MB initial model plus 27 MB CPU binary, tokenizer/config and app code. Model download requires internet. Download/loading progress, cancellation, errors and retry are shown.
- App/worker/WASM factory are bundled locally; the byte-identical CPU binary reuses the collection's immutable `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Root combined deploy must preserve this earlier build. No CDN runtime scripts or backend. Per-app deploy scripts exist as required but **publish only via root deploy**.
- Current desktop Chrome/Edge recommended with Workers, WebAssembly, Cache API and sufficient RAM. No WebGPU required. Desktop Chrome CPU inference tested; physical phone performance, Safari and Firefox not certified. Private mode/cache eviction may require re-download.
- Assets are cached using Cache API. After online success, a terminated worker can be replaced with a fresh worker and perform inference with all network blocked in the same open page. Offline app-shell startup/reload is **not promised**.

## Privacy / safety / limits

No credentials, remote inference, content upload, analytics or external actions. Network requests download public model files from Hugging Face and its asset delivery hosts; user text is only passed to a local worker. Model/runtime cache does not intentionally store user content; review state stays in memory. Export files contain the original content and verification notes. Clear site data to remove asset caches. Text is data, never tool authority or instructions.

Each CSV ≤18 KB, 1–24 records, unique nonempty IDs ≤50 characters, each text 1–350 characters. Maximum 48 text embeddings in 12 batches. 180-second timeout. Empty, malformed, oversized and unsupported imports fail visibly. Worker/model/runtime failures never become canned results. Run identities guard cancelled/late worker messages and asynchronous imports.

Deterministic steps are cosine ranking, configurable threshold, checking digit literals in claims against the selected source, review/verification gates and metrics. The baseline counts only identical-text links. Assisted candidate count is initial top-ranked sources above threshold without missing digits. Counts are not accuracy, verified truth, confidence or measured time savings.

Similarity can miss contradiction/negation and return unrelated nearest sources. Numeric comparison does not interpret units, number words, locale formatting, dates or semantic relationships; a matching number is not necessarily evidence. These limitations are why claims begin held and supported status always needs human verification. Source authenticity is the user's responsibility. Not legal, medical or autonomous fact-checking advice.

## Output / validation

JSON preserves original claims, every source, all ranked candidate IDs/scores, selected source text, reviewed decisions, notes and metrics. CSV preserves every claim and selected source with formula-like leading strings escaped using an apostrophe. Markdown is a complete publication register including held/excluded claims. `output` contains only human-supported claims; no original is silently discarded. Round-trip CSV/JSON parses are checked independently.

See VALIDATION.md, browser-validation.json, core-test.mjs and browser-test.cjs for actual observed results and scope. Successful inference uses the real model; fault injection is only used for defensive error tests.

## Development

`npm install`, `npm run dev`, `npm run predeploy`. Production Vite base `/daily-app2/20261107-21/`. For production-bundle browser checks start `python3 serve-test.py` then `node browser-test.cjs`. Model weights are fetched on explicit action. Root README governs combined-site publishing and Pages verification.
