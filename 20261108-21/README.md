# Script Stitch

A browser-local rehearsal audit for trainers, guides and presenters: align a planned script with paraphrased spoken segments, review each link, and export a next-rehearsal checklist. Unlike unordered revision reconciliation, this workflow preserves sequence and allows both omitted cues and off-script speech.

## Workflow

1. Choose a synthetic example, paste JSON or import a `.json` file under 100 KB. Supply `script` and `transcript` arrays, each with 1–24 `{id,text}` records. IDs are unique within a side (1–40 ASCII letters/digits/underscore/hyphen); text is 1–500 characters. Transcript order is authoritative. Split long/split-topic speech into short cue-sized segments first.
2. Set `threshold` (0.2–0.9) in JSON. This is a cosine similarity floor, **not a confidence or accuracy threshold**.
3. Explicitly select **Load AI & align cues**. Review the proposal, source script snippets and cosine scores. Correct cue links, approve off-script speech or hold uncertain segments. There is no bulk auto-approval. Undo restores the last review edit.
4. Apply the audit. Pending reviews and duplicate/crossing approved links block it. Holds retain text but confirm no cue. Unconfirmed script cues require human investigation, not automatic omission claims.
5. Download JSON, CSV, Markdown or copy the Markdown. Exports use the current applied review only; edits disable them until reapplied. JSON reimport restores original inputs for new inference, not old approvals. CSV contains both script and transcript rows. Formula-like text is apostrophe-escaped in CSV; lossless originals remain in JSON.

No audio transcription, recording, factual verification, word-error measurement, external sending or remote changes are included.

## Real AI and deterministic steps

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0; sentence-transformers MiniLM mean-pooled normalized 384-dimensional embeddings, quantized q8 ONNX.
- Runtime: `@huggingface/transformers` 4.3.2 / ONNX Runtime Web, locally bundled dedicated module worker, WASM CPU with one thread. No WebGPU needed. No generative model or prompt authority; imported text is embedded only.
- Downloads: about 23 MB model weights plus 27 MB runtime WASM, approximately 0.9 MB app/runtime JS. Internet required initially. Model assets come from Hugging Face and its CDN; runtime comes from this same GitHub Pages collection. The model repository uses its host's default revision, not a pinned immutable model commit; the package lock pins npm dependencies.
- Four-text inference batches, 256-token truncation, at most 48 total texts. Results must contain exactly one finite normalized 384-vector per source record.
- Deterministic dynamic programming maximizes the sum of `(cosine − threshold)` across one-to-one ordered links with zero-cost gaps. It may skip either side; only positive-gain links are proposed. Review validation independently enforces chronological unique approved cues. The positional baseline counts same-index pairs above the same floor. Neither this count nor semantic similarity is an accuracy measurement.

Negation, subtle facts, numbers, unrelated text, reordered sections and split/merged cues can produce misleading links. Script Stitch is a source-review aid, not a safety/completeness guarantee or an automatic evaluator of speaking quality.

## Privacy, devices and offline scope

Default content remains in browser memory and a local worker. No keys, remote inference, analytics, uploads or persisted user content. Only static GET downloads occur. Models, worker source and both WASM factory/binary are stored with browser caches when available. Once loaded successfully, a fresh worker can perform inference **in the already-open page offline** while those caches remain. App-shell offline reload/startup is not supported or claimed. Clearing storage, private mode or eviction can require redownload.

Use a current browser with module workers, WebAssembly/SIMD and sufficient memory (desktop recommended). Chrome desktop is actually tested; other browsers and physical phones are unverified. Cache API failure falls back to online downloads. Cancel terminates the worker; retry constructs a new one. Input changes invalidate results and run IDs block stale fetch/worker completions. Network/runtime/malformed-vector failures and a 180-second timeout leave no fabricated results. Explicitly fix the device/network or reduce inputs and retry.

## Development and publishing

`npm install`, `npm run dev`; `npm run predeploy` builds the production bundle with base `/daily-app2/20261108-21/`. Required per-app deploy scripts exist, but **publish only from the collection root** using root `npm run predeploy` and `npm run deploy`. Never replace the collection with per-app deployment.

The byte-identical runtime WASM is reused from immutable collection path `20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`, SHA-256 `49871f5a4409519797e127440868a6d1923339d9185907f301a5b2a1d90af082`. Preserve that earlier app asset. `vite.config.js` removes duplicate WASM and rewrites the production worker reference. The local WASM factory is in `public/runtime/`.

See [VALIDATION.md](VALIDATION.md), browser/core/network/boundary evidence and actual parsed export artifacts. Fixtures are synthetic only. No optional provider integration exists.
