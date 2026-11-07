# Chapter Cut — AI topic segmentation for working notes

A local-first utility for people preparing a readable handoff from long workshop/field notes. Paste paragraphs, choose a chapter count and maximum paragraphs per chapter, load real AI, review the boundaries, name chapters, apply and download Markdown + a lossless JSON audit. This is **contiguous document segmentation**, not generation, search, classification into a supplied taxonomy or a generic chat wrapper. Every paragraph remains in original order.

## AI and deterministic work

`Xenova/all-MiniLM-L6-v2`, Apache-2.0, https://huggingface.co/Xenova/all-MiniLM-L6-v2 (quantized ONNX), via bundled `@huggingface/transformers` and ONNX Runtime Web. The worker runs real 384-dimensional, normalized mean-pooled sentence embeddings on **WASM CPU**, four paragraphs per batch. Adjacent paragraph cosine similarities measure cohesion. An exact dynamic program minimizes the sum of cosine values at cuts under exact chapter count and maximum length constraints. Validation, grouping, editable titles and exports are deterministic. No generated summaries or automatic topic labels. Similarity is **not confidence**, truth or measured comprehension.

The displayed baseline cuts into equal-sized blocks; the computed mean cosine at its boundaries can be compared with the AI plan and current reviewed cuts. Lower values indicate larger semantic shifts only. This does not establish reading-time improvement or universal segmentation accuracy.

## Download, privacy and supported devices

First explicit run downloads about **23 MB model/tokenizer + 27 MB WASM**, plus <1 MB app/worker/factory, from Hugging Face (`huggingface.co`, redirect/download hosts including `*.hf.co`) and same-origin runtime assets. Downloads are GET/HEAD only; notes never leave the device. No backend, no remote inference integration, no API keys and no telemetry. Content is React text, never interpreted as tool instructions. Inputs and review state stay in page memory. Downloading JSON intentionally saves the original notes to your own file.

Use a current desktop browser with Web Workers, WebAssembly, modern JavaScript and roughly 500 MB free memory. WebGPU is **not required**. Actual inference tested in desktop Chromium on this builder host. Physical mobile hardware, Firefox and Safari are untested; phone-sized Chromium layout tests are not device-performance promises.

Model files use Transformers.js Cache API; the worker, WASM factory and binary have explicit Cache API caches. Offline **fresh-worker inference in the already open page** was tested after successful online loading, with all browser networking disabled. Offline reopening/navigation of the whole app is **not promised**. Private mode, cache eviction and browser policy may prevent persistence. Remove this site's browser storage to clear cached downloads; do not claim a successful download is permanent.

The collection reuses the byte-identical runtime at `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`; preserve this earlier deployment. This asset contains no content or credentials. Runtime factory and AI worker are bundled for this app's own base. Model weights are host-managed (not revision-pinned); upstream changes can alter scores. Production tests record observed scores and downloaded paths.

## Inputs, limits and review

- Paste or import UTF-8 TXT/MD. Blank lines delimit paragraphs. 2–32 paragraphs, at most 450 characters each, 16,000 total characters. File cap 128 KB; the notes limits still apply.
- Import Chapter Cut JSON to recover the exact original notes for a **new analysis**; prior edits are not silently reapplied.
- Up to 256 model tokens per paragraph; longer tokenizations are truncated despite character bounds. English-focused model; multilingual, mixed-topic paragraphs, conversational asides and transition phrases may segment poorly. Fixed user-selected chapter count can force unnatural boundaries. Within-paragraph splits are not supported.
- Defaults and examples are synthetic. Examples are processed by the real model; there are no stored responses or heuristic fallbacks.
- Cancellation terminates the worker; input changes and newer runs invalidate old messages and pending file imports. Timeout 180 seconds. Network/worker/runtime/schema errors show actionable failure and no substitute outputs.
- Inspect source paragraphs and adjacent scores. Toggle a cut, edit chapter titles, undo edits, reject AI for equal cuts or restore suggested cuts. Exactly the selected chapter count and maximum size are required before apply. Every edit invalidates review/application. The original paragraph text cannot be overwritten by a title edit.
- Check review, apply, then download/copy. Markdown normalizes blank-line separators and adds editable headings; original text including separators remains in JSON. Existing Markdown in source paragraphs is retained, not sanitized for publication. Review before publishing your output elsewhere.

## Output formats

`chapter-cut/v1` JSON stores exact `original`, source paragraphs, constraints, suggested/reviewed/baseline cuts, adjacent cosines and reviewed chapters. Cuts are zero-based start indices for chapters after the first; all chapter spans are half-open `[start,end)`. Markdown stores the current applied titles and all source paragraphs. Downloads and clipboard use only the current reviewed snapshot. JSON can be reopened to recover original inputs. No external actions or deletion.

## Build and publish

React + Vite, base `/daily-app2/20261107-22/`. `npm install`; `npm run predeploy`. Per-app `deploy` exists as required but **do not invoke it**: publish the combined collection from the root with `npm run predeploy` and `npm run deploy`. Browser tests use the production bundle: `python3 serve-test.py`, then `node browser-test.cjs`; `TEST_URL` selects the actual public app.

See `VALIDATION.md`, `browser-validation.json` and public evidence for observed outcomes, fixtures and limitations. `node core-test.mjs` independently exhaustively checks the optimizer against all feasible cut sets for n=2..9.

## Licenses

MiniLM model Apache-2.0; Transformers.js Apache-2.0; ONNX Runtime MIT; React MIT; Vite MIT; gh-pages MIT. See the model repository and dependencies' license files. No real documents or credentials are included.
