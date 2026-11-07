# Inquiry Grid

Participant-balanced interview evidence boards for qualitative researchers. Unlike a generic evidence retriever, the same interviewee has a global quote cap across questions; a minimum-cost flow solver allocates quote placements under both participant and question capacities. No generated quotes, summaries or findings.

## Workflow

1. Choose either synthetic example, paste JSON or import `.json` (up to 50 KB). Define `questions:[{id,text}]`, `quotes:[{id,participant,text}]`, `perQuestion`, `perParticipant` and `minSimilarity`.
2. Set quotas in the JSON (integers 1–3), and similarity eligibility (0.1–0.9). Click **Load AI & balance evidence**. Model loading is explicit and cancellable.
3. Inspect every quote, its INCLUDE/RESERVE proposal and all candidate question scores/source descriptions. **Adopt balanced proposal** stages the solver's choices for review. It restores original proposed question links. Alternatively include or hold each quote individually, change its question and add review notes. Undo restores the last review state (30 snapshots).
4. **Apply reviewed board** checks every decision and both caps. Nothing external is sent or changed. Holds survive the audit. Input edits cancel runs and discard obsolete review layers. Review edits invalidate exports until reapplied.
5. Download complete JSON/CSV and a Markdown evidence board (CHECKLIST button, `.md`) or copy the Markdown. Included sources appear in the applied in-app board. JSON imports restore original inputs/constraints, not approvals. Retain JSON for exact originals; CSV prefixes formula-like strings with an apostrophe for spreadsheet safety. Markdown uses collision-safe fenced blocks to preserve included quote text.

## Real AI / deterministic boundary

[Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized q8 ONNX, runs with @huggingface/transformers 4.3.2 / ONNX Runtime Web 1.30.0 in a dedicated WebAssembly CPU worker. MiniLM emits actual 384-dimensional mean-pooled normalized embeddings. Cosine similarity across quotes/questions, not keywords, drives eligibility and relevance.

A deterministic min-cost maximum-flow allocation maximizes the count of eligible placements, then total similarity, with one question per selected quote, a global participant cap and a per-question cap. **It does not maximize question coverage directly**; unanswered counts can remain even when changing priorities might cover another question. The minimum similarity is a user-selected relevance cutoff, not a calibrated probability. Human reviewers may deliberately include below-threshold quotes; the applied snapshot counts these overrides. Capacity validation, counts, gap rendering and exports are deterministic. Original participant IDs are exact/case-sensitive: de-identify and normalize aliases before importing.

## Privacy, devices, downloads & offline

No API key, account, server or remote inference path. User content stays in memory on-device; model-host network requests download files, not quotes. Imported strings are data, never tool instructions. No analytics or remote actions. Exported research content can still be sensitive: use de-identified excerpts.

Initial load needs internet: approximately 23 MB model/tokenizer from Hugging Face (redirects may use its CDN), plus approximately 27 MB WASM and app/worker assets from this site. Current browser with WebAssembly, module workers and Cache API recommended; around 300 MB free memory recommended, not measured as a hard limit. No WebGPU dependency; WASM CPU is the default, not an untested fallback. Desktop Chrome was tested; other browsers and physical phones were not tested.

Worker source, WASM factory and binary use browser Cache API; Transformers.js caches model files. Caches can be evicted. After an online successful run, fresh-worker inference with **all network disabled while the page remains open** passed. Offline reload/app-shell startup is not promised. No service worker. Clearing site storage clears weights/runtime cache. Cancelling terminates the worker and ignores late callbacks; partially cached downloads can remain. Timeouts are 180 seconds; failure paths show an error and permit retry without invented suggestions.

The bundle reuses the byte-identical shared `../20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`; preserve this published earlier app in combined deployments. `asset-audit.json` records hashes and bytes. The factory is locally bundled under `runtime/`. No runtime JavaScript from a CDN.

## Limits / interpretation

English short excerpts; 1–6 questions, 1–32 quotes, 1–600 characters per text, unique alphanumeric/hyphen/underscore IDs, participant IDs 1–80 characters. Embedding batches contain four texts, max 256 model tokens per text (long/unusual strings may truncate). Input max 50,000 characters. No PDFs, audio transcription, rich documents or arbitrary executable imports.

**Relevance is not sentiment, agreement, truth, causation or representative sampling.** A quote saying login is fine and billing is broken was incorrectly matched to login in our negation challenge. Mixed-topic quotes, indirect wording and negation need manual correction. Do not turn inclusion counts into prevalence claims. A missing question is a follow-up cue, not proof that research never addressed it. Human-reviewed source selection is the product, not an automated research conclusion.

## Development / publishing

`npm install`, `npm run dev`, `npm run predeploy`. Vite base `/daily-app2/20261108-8/`. Required per-app gh-pages scripts retained but publish only via root combined deployment. See `VALIDATION.md` and executable validation scripts. All fixtures are synthetic. No agent/provider credentials used.
