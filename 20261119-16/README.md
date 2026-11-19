# Dewpoint Desk

A React + Vite, static-host, local-AI utility for facilities survey coordinators. Turn rough room-location notes and measured surface temperatures into a reviewed condensation-margin recheck worksheet. This is not a building safety certification or an equipment controller.

## Workflow

1. Load either synthetic example, paste source JSON, or import a source/audit `.json` file. Supply 2–8 room climate profiles, 1–16 surface rows, a chosen 0–10 °C margin and RH-only baseline threshold. All temperatures are Celsius; RH is percent.
2. Explicitly click **Load AI & reconcile inputs**. Real MiniLM neural embeddings match informal room labels to the supplied room descriptions. No model generation, sensor-value invention or hard-coded responses.
3. Inspect source snippets and ranked cosine similarities (not confidence). Review each room match and surface temperature. Edit notes/readings/links, approve or hold; undo restores previous reviews. Change air/RH or constraints in source JSON and rerun. All originals are preserved.
4. **Apply reviewed plan** requires an approve/hold decision on every row. Any hold blocks the worksheet rather than silently dropping data. Applied output is invalidated after every edit.
5. Download complete JSON audit, CSV with current reviewed rows and calculations, or Markdown recheck worksheet; copy Markdown. Imported audits restore original source only and intentionally require fresh inference/review, not previous approvals. The source/audit format is bounded separately (50,000 source characters; 2 MB import).

## What AI does and why

`Xenova/all-MiniLM-L6-v2` produces normalized mean-pooled 384-dimensional semantic vectors. Cosine nearest-profile retrieval reconciles notes such as "Quiet bookshelves reading area" to a library climate profile despite differing wording. Misassigned rooms change the dewpoint and recheck recommendations; manual approval is essential. AI never determines room humidity, temperatures or physical safety. Irrelevant/negated text still receives a nearest match: hold it.

Model: https://huggingface.co/Xenova/all-MiniLM-L6-v2 — Apache-2.0; model card/license available there. Runtime: Transformers.js 4.3.2 (Apache-2.0) with ONNX Runtime Web WASM CPU (MIT). q8 weights, no WebGPU required, no API key or paid service.

Preserve the immutable same-origin worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs` and WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Reusing the byte-verified collection runtime avoids duplicating tens of MB under the Pages size limit. Worker accepts `{id,texts}` and emits progress/batch/result/error. Exact vector counts, normalized finite values and 384 dimensions are validated before ranking. Max 24 texts, chunks of four, ≤300-character descriptions. Tokenizer's actual `model_max_length` is 512; feature extraction does not guarantee the worker's supplied max_length=256 is enforced. No model access to tools or credentials.

## Deterministic math and baseline

Magnus liquid-water approximation, constants a=17.62, b=243.12 °C:

`gamma = ln(RH/100) + a*T/(b+T)`; `dewpoint = b*gamma/(a-gamma)`.

For every reviewed row: `clearance = surface - dewpoint`, `target = dewpoint + margin`, `gap = max(0,target-surface)`. Recheck if clearance ≤0 or strictly below the margin. Exact-boundary positive margins are labeled above/chosen-margin rather than inside. Baseline flags any surface in a room with RH ≥ the supplied RH threshold. Row disagreements are computed comparisons, **not accuracy or measured improvement**. Each source surface survives in all audit exports, including blocked worksheets.

Input air 0–50 °C, RH 1–100%, surface 0–60 °C. Subzero dewpoints are informational, not frost predictions. Readings must be simultaneous and calibrated; limits intentionally reject below-freezing surface use. No time evolution, sensor uncertainty, mold model, material behavior or compliance assessment. Above-margin readings are not safety guarantees. Target surface temperature is a mathematical reference, not an instruction to heat a building or equipment. Recheck physically before intervention.

## Downloads, privacy, devices and offline scope

First explicit load requires internet: approximately 23 MB model/tokenizer assets from Hugging Face/CDN, 27 MB local WASM runtime, plus local JS. Before clicking, no model requests. Loading progress, cancellation and 180-second timeout are visible. Cancel terminates the worker; retry is available. Worker/fetch/file-read run IDs prevent stale results overwriting newer inputs. Failures never switch to a heuristic/demo output.

All source text and reviews remain on-device, in page memory. Only static GET/HEAD file requests occur, with no content in URL/body. No analytics, provider integration, API keys, backend or external actions. Model/runtime Cache API stores downloads, not survey content. Fresh-worker inference in an already-open warmed page is tested with all network disabled. **Offline startup/navigation/reload is not promised**. Eviction/private browsing may require redownloading. Close/reload can lose your work: export first.

Requires module workers, WASM SIMD, Cache API and several hundred MB memory. CPU headless Chrome/macOS tested with GPU disabled, including 1440/390/320px widths. Physical phones and other browsers unverified. If model/runtime loading fails, check internet/storage, enable WASM/module workers or use a current desktop Chrome and retry. Invalid/empty/oversized/unsupported inputs show actionable errors. JSON imports only; no PDF extraction. Notes ≤1,000 characters. Imported instructions remain text data.

## Build and publication

`npm install`, `npm run predeploy` builds this app. Vite base `/daily-app2/20261119-16/`. Per-app required scripts and gh-pages dependency retained, but **publish only with the repository ROOT deploy workflow** to preserve all collection apps. React 18.3.1 keeps this small application within the existing combined-site size guard. App CSS, JS and shell are local; runtime uses the immutable same-origin collection paths above.

See [VALIDATION.md](VALIDATION.md), browser/defensive/race/core/artifact reports and synthetic downloaded artifacts for actual observed tests and limitations. No personal datasets or credentials are included.

Public app: https://xianghui.github.io/daily-app2/20261119-16/ — publicly verified real inference and assets; see publication-status.json.
