# Load Harbor

A daily dispatch utility for facilities/operations coordinators. Paste work orders with estimated minutes and crew expertise with shift capacities. Run actual local MiniLM inference, review each assignment and its original skill evidence, hold jobs or edit dispatcher notes, undo changes, apply a capacity-validated roster, then download CSV/JSON or copy CSV. Every job, including held work, survives export. No external dispatch is performed.

## AI versus deterministic work

`Xenova/all-MiniLM-L6-v2` (Apache-2.0; https://huggingface.co/Xenova/all-MiniLM-L6-v2), quantized q8 ONNX, computes normalized 384-dimensional mean-pooled text embeddings via Transformers.js 4.3.2 and ONNX Runtime Web WASM on CPU. Worker and JS runtime are bundled; the byte-identical 26,861,777-byte WASM is shared from `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Model files come from Hugging Face and its CDN. First use needs approximately 23 MB weights + 27 MB runtime + tokenizer files and internet. No WebGPU required or used. No credentials or remote inference integration.

Deterministic cosine ranking considers jobs by strongest fit first and assigns each to the best remaining compatible crew above the user cosine threshold. Jobs cannot be split. This is a greedy heuristic, not global optimization or proof of qualifications. Review can override semantic thresholds; hard integer minute capacities always apply before export. Dates, travel, breaks, certifications and dependencies are not modeled. Input minutes are user estimates, not AI predictions. Similarity is not confidence, correctness, or a safety authorization.

## Privacy, caching and supported devices

All input, embeddings and review data remain on-device in memory. Only model/runtime file GET downloads occur; text is not in requests. No persistent content storage, telemetry or server backend. Clear site storage to remove cached downloads. Use a recent browser with WebAssembly, module workers, Cache API and approximately 300 MB available memory. Actual tests used desktop Chrome with CPU inference, including narrow 320/390 CSS-pixel emulation, not physical phones or other browsers. Storage eviction/private browsing can require re-download.

Worker code, WASM module factory/binary and model assets are cached. Offline fresh-worker inference is tested in an already-open tab after a successful online run. Offline navigation/reopening is NOT claimed (there is no app-shell service worker). Progress is per file and per four-description chunk. Cancellation terminates workers; partial downloads may remain cached. Network/model/worker errors are visible, with retry; no deterministic fake response is substituted.

## Formats and limits

Input JSON: `{crews:[{id,name,expertise,capacity}],jobs:[{id,text,minutes}]}`. 2–6 crews, 1–24 jobs, unique IDs per list (≤40 characters), crew names ≤80 characters, descriptions 1–450 characters, minutes/capacities integer 1–480. Raw input ≤35,000 characters; file import JSON ≤60 KB. Embeddings are truncated to 256 tokens and processed four descriptions at a time. English short descriptions work best. Imported text has no instruction/tool authority.

JSON exports include original input, complete review, cosine matrix, model, threshold, loads and metrics. JSON can be imported as original input; prior review edits are intentionally not restored. CSV contains every job, original description, minutes, crew ID/name and current review note. Quoting supports commas, quotes and newlines; leading spreadsheet formula characters are prefixed with an apostrophe. Source JSON remains lossless. Edits invalidate the applied export snapshot; apply again. Up to 30 review edits can be undone; source changes discard the review, preserving the editable source text.

## Metrics and validation

Compare reviewed semantic mean cosine and scheduled job/minute counts with input-order first-fit dispatch that ignores meaning but obeys capacities. No accuracy, time savings or universal improvement claims. A higher score only means stronger embedding similarity, and may change with human review.

See `VALIDATION.md`, actual browser reports, synthetic exported fixtures and test scripts. Run `npm run predeploy`, `node core-test.mjs`; serve `python3 serve-test.py`, then `node browser-test.cjs` and `node extra-test.cjs`. Tests use the installed workspace Playwright. For public tests set `TEST_URL` to the public app URL and `REPORT` to a separate file.

## Deployment

React + Vite base `/daily-app2/20261108-1/`; per-app scripts retained as required. Publish only through the collection root `npm run predeploy` / `npm run deploy` to preserve all older apps. Keep the shared prior WASM asset. Model revisions currently follow the repository default; a future upstream model change could alter results, requiring fixture revalidation. License notices accompany source. No personal data or agent credentials used.
