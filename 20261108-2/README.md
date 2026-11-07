# Label Lens

A local semantic label-consistency audit for small training/annotation batches. Annotators paste/import labeled text; MiniLM embeds the text, then leave-one-out nearest neighbors highlight contradictory labels for human adjudication. Unlike duplicate-leakage tools, this audits label agreement inside a single batch, including non-identical paraphrases. Unlike a classifier, the app does not train or claim correct labels.

## Workflow

1. Try Help desk or Library desk, or paste/import JSON: `{"records":[{"id":"unique","text":"short English text","label":"category"}, ...]}`.
2. Set the cosine floor. Explicitly choose **Load AI & audit labels**. Inspect model-file progress; cancel any time.
3. Review each source text, original label, weighted neighbor vote, and up to three exact neighbor snippets with cosine scores. Resolve pending cues as **Keep original**, **Correct label**, or **Hold**. Correct lets you select an existing label. All records, not just flags, are editable. Undo restores previous review state (40-edit history).
4. Apply validates every review. Unresolved cues block export. Download JSON/CSV or copy CSV. Review edits invalidate the export snapshot until applied again.

Every row survives, including held records. **Hold does not remove a record from the exported dataset**; filter decision=hold downstream before training. JSON preserves exact original input, neighbor evidence, reviewed labels, notes and decisions. Reimporting JSON restores its original input, not prior review decisions. CSV has id, text, original_label, reviewed_label, decision, note; quote escaping is RFC-style, CRLF-separated. A leading apostrophe protects formula-like strings (including multiline fields); JSON remains lossless. Nothing changes external files or accounts.

## Real AI and deterministic steps

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), quantized `q8` ONNX, Apache-2.0; derived from sentence-transformers/all-MiniLM-L6-v2. Model host revision currently follows upstream main; not pinned. Future upstream changes can affect output/cache behavior.
- Runtime: bundled `@huggingface/transformers` 4.3.2, Apache-2.0, ONNX Runtime Web 1.30.0, MIT; single-threaded WASM/CPU, no WebGPU needed. See package-lock.json and THIRD_PARTY_NOTICES.md/licenses.
- AI computes normalized mean-pooled 384-dimensional vectors from text only, never labels. Input is data; it grants no authority, requests no credentials, and is not passed to a generative instruction model.
- Deterministic steps: validate schema, cosine similarities, exclude self, choose up to three above-floor neighbors, sum nonnegative cosine weights per label, abstain on no evidence or equal weights. Different winning label creates a pending cue. Ties are deterministic; equal-ranked neighbors use source order. No confidence percentages, learned accuracy claim, automatic label correction, or fake fallback.
- Baseline counts records with identical trimmed/case-insensitive text but different labels; the comparison shows semantic cue count vs exact-conflict count, not claimed accuracy or savings. Actual correction and hold counts are computed from review state.

## Limits and requirements

4–40 records, 2–8 labels with at least two records each; unique string IDs ≤60 characters, labels ≤60, texts ≤450; raw paste ≤60,000 characters/import ≤60 KB. Text truncated at 256 model tokens; unusual Unicode may reach this bound even under the character limit. Chunks of four. Initial load/run timeout 180 seconds. Finite normalized 384-vector per record is mandatory. Run IDs, terminated workers and guarded file/worker fetches prevent stale results. No oversized input silently split into unreviewable contexts.

First run needs internet and approximately **23 MB model + 27 MB WASM**, plus tokenizers/worker/module code. Downloads originate at Hugging Face/its CDN and this site's bundled assets. Modern browser with WebAssembly, module workers, Cache API, and approximately 300 MB available memory recommended; memory figure is an estimate, not a measured minimum. Tested on desktop Chrome CPU and emulated 320/390px mobile viewports. Physical phones, Safari/Firefox/Edge and disabled WASM hardware are not real-device tested. Runtime/worker/timeout defensive failures are injected in browser tests. Failures stop with actionable retry; no hidden remote fallback.

Model files use Transformers.js cache; worker, WASM binary and module factory use Cache API explicitly. Browser storage can be evicted; clear site storage to remove downloads. **Tested offline scope: after a successful online run, a fresh terminated/recreated worker performs real inference in the already-open tab with all network blocked.** Offline site reopening/reloading is not supported or promised (no app-shell service worker). Cache API failures may require repeat downloads.

The WASM binary is byte-identical to and reused from `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm` (26,861,777 bytes; SHA-256 `49871f5a4409519797e127440868a6d1923339d9185907f301a5b2a1d90af082`). Root combined deployment must preserve that app. App-specific module factory and worker are local bundled assets.

## Privacy and quality limitations

No account, key, remote inference provider or backend. Model downloads do not upload user content. Browser network capture checks all application requests are GET with no body and contain no submitted dataset. No data storage except in tab memory; user downloads are explicit. Only synthetic fixtures are committed. No telemetry. Model host still sees download metadata such as IP address.

Neighbor agreement is not truth: majority errors may reinforce one another, rare classes may be flagged unfairly, near-duplicate examples skew votes, and class distinctions invisible in text cannot be recovered. No batch can verify universal labeling correctness. English short prose is the intended domain. Review all rows, including unflagged ones, and never treat this as an automatic training-data release gate.

## Development and publishing

`npm install`, `npm run dev`, `npm run predeploy`. React + Vite base `/daily-app2/20261108-2/`. Required per-app deploy script retained, **but publish the collection only through root** `npm run predeploy` / `npm run deploy`; per-app deployment would replace the gallery. See root README.

## Validation

See VALIDATION.md, browser-validation.json, exported synthetic artifacts and browser-test.cjs. Real production-bundle inference on two materially different known-answer datasets, batch conservation, offline fresh-worker inference, edits/rejection/undo, export parsing/roundtrip, cancellation/stale results and defensive checks are recorded. Unit tests use synthetic vectors only for deterministic schema/vote guards; real-AI browser tests do not mock successful inference. No universal accuracy or unmeasured time-savings claims.

Validation evidence omits temporary model-CDN signed redirect query strings; request method/body assertions operate on the original in-memory requests. No downloaded model credentials are persisted in reports.
