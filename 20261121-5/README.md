# Cue Harbor — 20261121-5

A local-AI rehearsal alignment desk for facilitators and museum tour script editors. Paste an ordered cue run sheet and chronological text fragments. Neural meaning retrieval plus exact monotone partial matching proposes source-linked cue coverage. A human approves, edits, leaves unmatched or holds each fragment before exporting an evidence/gap worksheet. No audio capture or external actions.

## Distinct process

The bottleneck is reconciling paraphrased rehearsal notes with a required delivery sequence, without declaring reordered/repeated snippets complete. Unlike unordered checklist revision assignment (Revision Dock), timestamp prerequisite inspection (Trace Current) or packet insertion (Packet Seam), this app finds a maximum-weight **order-preserving one-to-one partial sequence alignment**. Skips remain visible; there is no automatic transcript reordering or content rewriting. The complete gallery (761 entries, 279 AI utilities at start) was inspected; see `original-gallery-audit.json`.

## Use

1. Open a synthetic example or paste/import JSON; inspect the source format in the UI.
2. Edit cues in required order, fragments in spoken order and the cosine floor (0–1). This is a similarity threshold, not a probability. Segment manually: at most one cue per fragment and one representative fragment per cue.
3. Explicitly click **Load AI & reconcile**. Review model loading/CPU processing progress; Cancel download / run terminates the worker. Errors allow retry, never canned AI.
4. Read every fragment and all cue scores. Select the correct cue or unmatched; add multiline evidence/follow-ups, then approve or hold. Changing a link resets approval. Undo restores prior review state.
5. **Apply reviewed checks** blocks pending reviews, duplicate cue links and reversed approved links. Held fragments remain in the audit, excluded from evidence coverage.
6. Inspect ordered cue cards and missing approved evidence; use these to plan another rehearsal. Download JSON, Audit CSV, Cue CSV or Markdown; copy the exact Markdown. Any edit disables exports until reapplied. JSON reimport restores originals, never stale model suggestions or approvals.

A missing approved link is not proof a cue was omitted. This is not speech recognition, semantic entailment, comprehension testing or compliance certification.

## Real AI, runtime and licenses

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized `q8` ONNX feature extraction. Source model is sentence-transformers/all-MiniLM-L6-v2.
- Runtime: Transformers.js **4.3.2**, Apache-2.0; ONNX Runtime Web/WASM CPU, MIT. Normalized mean-pooled **384-dimensional neural embeddings**; four texts per chunk. No WebGPU is required or used.
- Actual immutable shared worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`, WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve those apps/assets. Their source protocol was inspected; this app accepts `{id,type:result,vectors}` and validates vector count, shape, finite values and normalized magnitude before use. Dependency byte sizes/hashes and observed model revision are in `runtime-dependency-audit.json`.
- Approximately **23 MB model + 27 MB WASM**, plus worker/tokenizer/app code. First loading requires internet and uses documented Hugging Face/CDN file hosts. The UI shows this before loading and reports model-file progress. Model `main` is **unpinned** and can change; the audit records the observed revision, not a permanently pinned guarantee.
- Secure-context modern browser with WebAssembly SIMD, module workers, Cache API and several hundred MB available RAM. Tested in desktop Chrome with GPU disabled, including 320/390 px emulated viewports. Physical phones and other browser engines were not tested.
- Each text ≤300 characters; actual tokenizer `model_max_length=512`. Shared feature extraction's per-call max_length option is not an enforced 256-token cap, so we do not claim one. Source bounds plus the tokenizer ceiling apply. Maximum 64 texts / 16 CPU chunks. A 180-second run timeout provides an actionable retry.

### Exact deterministic steps

The model produces embeddings; cosine scores compare each fragment to every cue. Only scores **strictly above** your floor qualify. A linked edge contributes `cosine - floor`. Dynamic programming maximizes their sum, allowing free skips and strictly increasing cue indices; each fragment/cue appears at most once. Ties retain the earlier optimal prefix. This can deliberately drop a plausible match to preserve order. The independent nearest-cue baseline uses the same neural scores and approved fragment subset, but ignores one-to-one/order constraints. Structural violations count unordered fragment pairs with identical/reversed cue indices. They are not accuracy, saved minutes or calibrated confidence. Human corrections are separately validated; edited links may be below the model floor because human judgment overrides similarity.

Review, source conservation, coverage, duplicate/reversal counts, gap reports and artifacts are deterministic. Every cue is retained in Cue CSV, every fragment including holds in Audit CSV and JSON. No sample responses, regex classifiers or fake AI fallbacks.

## Inputs / limits

Source JSON (1–40,000 characters):

```json
{
  "context": "Synthetic tour rehearsal, required order",
  "minimumSimilarity": 0.3,
  "cues": [
    {"id": "entry", "text": "Welcome visitors and introduce the museum tour."},
    {"id": "exit", "text": "Direct visitors to the gift shop and exit."}
  ],
  "records": [
    {"id": "r1", "text": "Welcome to the museum! I will be your guide."}
  ]
}
```

- Nonempty context/text ≤300 characters. 2–24 ordered cues and 1–40 chronological fragments. Each array's IDs unique, letter-first then letters/digits/underscore/hyphen, ≤40 characters.
- Import `.json` under 2 MB: source or `cue-harbor/v1` audit envelope. Originals are validated at the stricter source limit. Other files, malformed/empty/oversized inputs and invalid numeric types are rejected.
- Review notes ≤1,000 characters, including line breaks. Originals immutable in the audit. Imported instructions are inert strings; no tools, credentials or network authority are conferred.
- JSON fully preserves original source, review decisions, cosine evidence, baseline and applied results. CSV uses quoted, escaped fields/CRLF; dangerous spreadsheet-leading string characters are apostrophe-prefixed, including multiline formulas. Markdown is a human reading worksheet, not executable text. Do not treat raw imported HTML/Markdown as trusted code when using a separate renderer.

## Privacy / caching / failures

No keys, remote provider, telemetry, content uploads or account integration. All requested network traffic observed during validation was GET file download without request bodies. Text crosses only local worker `postMessage`, never a service API. Source/results are memory-only unless you download/copy them. Cache API stores worker/factory/WASM/model assets, **not rehearsal content**. Default model-file downloads do not upload text.

After one successful run, the **already-open warmed page** can terminate its worker and perform real inference with all browser networking offline. Cache API explicitly bridges worker/factory/WASM, and Transformers.js caches model assets. This was tested on the production bundle locally and must pass again publicly. Offline first visit, navigation or reload is **not promised**; no app-shell service worker is provided. Browser eviction/quotas can require downloads again.

Run identity guards asynchronous file reads, worker-source fetches and messages. Cancel, input replacement or retry terminates old work and prevents late output from replacing newer results. Network, runtime construction, WASM, worker, malformed output and timeout errors leave no fabricated results. Cache unavailability may still permit online operation, not an offline guarantee.

## Validation and known limitations

See [VALIDATION.md](VALIDATION.md), executable tests and observed JSON reports. The small fixtures are not general accuracy measurements. Semantic similarity misreads negation; a challenge denying discussion of a painting still linked to the painting cue. Initially vague workshop wording missed welcome/feedback above the chosen floor. Improved, explicit example wording then matched eight supplied keys in total. Do not generalize those results; inspect every link. Multiple cues per fragment, repeated filler, out-of-order delivery, multilingual text, subtle paraphrases and overlapping cues need manual adjudication. The one-to-one assumption is unsuitable for long free-flowing transcripts without preprocessing.

## Build / deployment

React + Vite, base `/daily-app2/20261121-5/`. `npm install`, `npm run predeploy` builds `dist`. Per-app scripts remain `predeploy: npm run build` and `deploy: gh-pages -d dist`, with gh-pages installed. **Do not deploy this app individually**: publish root combined `deploy/` through `/Volumes/ExternalHD/daily_app2` after all gates pass. Root Pages verification requires matching built gh-pages commit, public byte hashes and real public browser inference; a branch push alone is not release proof.

Collection-size maintenance adds deploy-only byte-identical Manifold sharing for legacy `20261028-16` → existing immutable `20261028-24/assets/manifold-BE4c7gO-.wasm`. Source builds and compatibility JS paths are retained; worker/shell entries are query-versioned. The unchanged <1,000,000,000-byte guard remains enforced. Actual legacy worker, PNG/STL imports and valid closed-mesh downloads are checked locally and publicly; no apps removed or relabeled. No digest is sent.
