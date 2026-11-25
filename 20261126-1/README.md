# Variant Grove — 20261126-1 (UNPUBLISHED DRAFT)

**Hosting blocked:** GitHub Pages deployment and recovery APIs returned HTTP 500; public app remains 404. This draft is excluded from the completed gallery/combined deployment. Local and assembled production-bundle checks pass, but public assets/inference could not be verified. See `publication-status.json`.

A local-AI catalog completeness desk for a merchandiser reviewing a single product family. Rough listing descriptions hide absent **joint variants**, even when every individual option value appears somewhere. MiniLM proposes one value for each of two axes; the reviewer confirms or holds every listing; a deterministic Cartesian audit exposes gaps, duplicate slots and listed-but-zero-stock combinations. No products are created, merged, deleted or updated.

## Workflow

1. Try the synthetic notebook or T-shirt catalog, paste JSON, or import source/audit `.json`.
2. Set the intended range with **exactly two option axes**, each with 2–6 described values. Every cross-combination must be intended. Conditional exclusions, multiple families and third axes are unsupported; do not interpret deliberately excluded combinations as gaps.
3. Explicitly click **Load AI & map variants**. No model-host download occurs before this action. Inspect the exact original listing and both per-axis ranked semantic alternatives (cosine scores, not confidence).
4. Correct either option, adjust stock units if needed, write notes and approve or hold each listing. Undo restores the previous review. Held listings stay in the full audit but do not populate the matrix. Approve-all is a convenience for links you have actually checked, not automatic product verification.
5. Apply the reviewed map. All required pairs appear, including missing pairs. A variant with zero stock is still listed. Multiple source rows mapped to the same pair produce a duplicate-slot cue, not an automatic merge. Unit sums include approved duplicate rows as supplied, and are **not deduplicated inventory**.
6. Download current audit JSON, all-listing CSV, complete Matrix CSV or plain-text Markdown; copy the worksheet. Any edit invalidates exports until reapplying. Reimport audit JSON restores exact originals and requires fresh AI/review, not old approval state.

## Real AI and deterministic boundary

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized q8 ONNX; Transformers.js **4.3.2**, ONNX Runtime Web, single-thread WASM CPU. Revision is not pinned.
- Normalized mean-pooled **384-dimensional embeddings** materially drive per-axis semantic retrieval across paraphrases (e.g. wire coils → spiral binding). Option IDs and stock numbers are not used as semantic evidence. AI does not generate stock, identify products from images, prove actual attributes, or automatically reject unrelated text.
- Subsequent ranking, Cartesian enumeration, exact source-ID lineage, duplicate/missing counts, integer stock sums and baseline are deterministic. No generative model, canned responses, regex masquerading as AI or silent fallback.
- Maximum 12 option descriptions + 24 listings = **36 embeddings in nine four-text chunks**. Descriptions bound context before inference. The shared pipeline supplies max_length 256, but this feature-extraction implementation actually uses tokenizer model_max_length **512**; do not assume an independently enforced 256-token cap. Unusual ≤200-character text can still truncate.
- The existing same-origin immutable runtime is reused to avoid redundant collection assets. Preserve these originating apps and URLs:
  - `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`
  - `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`
  - `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`
- Protocol, pooling, q8, chunking and CPU configuration were inspected. SHA-256/byte provenance: `runtime-provenance.json`, verified by `audit-assets.mjs`.

## Downloads, supported runtime, privacy and cache

About **50 MB initially** (23 MB weights + 27 MB WASM, plus tokenizer/JS). Requires internet initially for Hugging Face/CDN model downloads and same-origin collection runtime assets. App code, worker, runtime factory and WASM are hosted in the collection, not external JS CDNs. Requires module workers, WebAssembly SIMD and sufficient memory. **No WebGPU required**; actual inference tested in installed desktop Chrome with GPU disabled. Physical phones and other browser engines remain untested. Responsive 320/390px Chrome layouts were checked, not physical phone performance.

User content stays in page memory/local worker. No API key, remote inference, telemetry or store/account integrations. No agent credentials, private data or real product fixtures. Model downloading is not user-content uploading. Browser request audit from startup through actual inference observed only GETs without bodies to same-origin files and documented Hugging Face/CDN hosts. Audit reports retain host/path and query-key names, not temporary signed query values. Built text assets were scanned for common credential patterns, complemented by source/network inspection, not an exhaustive security guarantee.

Cache API retains worker source, factory, WASM and model files where supported. **Tested offline scope: fresh-worker real inference in an already-open warmed page with networking disabled.** Offline navigation/reload/app-shell startup is not promised. Eviction/private browsing/storage denial can require a fresh download. Source/import/run identities and worker termination prevent stale results after input changes or cancellation. A 180-second timeout, visible download/chunk progress, cancellation and retry are present. Network failures, unsupported workers/WASM, construction/runtime failures and malformed finite/unit-normalized vector count/dimension fail visibly without fabricated suggestions. Imported text is rendered as data, never HTML, tool authority, instructions or a credential request.

## Formats and limits

Source JSON:

```json
{"title":"Notebook range","axes":[{"id":"binding","label":"Binding","values":[{"id":"coil","description":"Spiral wire bound notebook"},{"id":"sewn","description":"Thread stitched notebook"}]},{"id":"paper","label":"Paper","values":[{"id":"plain","description":"Blank sketchbook pages"},{"id":"grid","description":"Squared graph paper pages"}]}],"listings":[{"id":"N-1","description":"Wire spiral notebook with graph paper","units":12}]}
```

- Source ≤60,000 characters; source/audit file import ≤1 MB. JSON only. Unknown source fields rejected. Audit JSON import only restores validated `original`.
- Title ≤200 characters; exactly two axes, each 2–6 values; axis label ≤40, option description ≤150 characters. At most 36 required pairs.
- 1–24 listings: nonblank description ≤200 characters; units must be an integer 0–1,000,000. Zero is allowed. Every original row retained, including duplicates and held rows.
- IDs 1–60 ASCII letters/digits/underscore/hyphen, unique within each list. Reused value IDs across different axes are safe: tuples are separate array entries, not delimiter-concatenated keys. Text must be well-formed Unicode without disallowed control characters. Reviewer note ≤500 characters; multiline supported.
- Full audit JSON includes originals, review, candidates, all listings, matrix cells, metrics and source lineage. Listing CSV contains all originals/holds and reviewed values. Matrix CSV contains **every required combination**, exact source IDs encoded as JSON, listing count and approved reviewed units. Held source IDs are absent from the matrix intentionally but retained in audit/listing CSV.
- CSV RFC-style quoting preserves commas, quotes and line breaks. Formula-like text beginning `= + - @ TAB CR` is apostrophe-prefixed, including multiline fields. Numeric quantities remain numeric. Markdown is plain text, not safe HTML. No executable store-import payload is generated.

## Observed quality and comparison

Actual model inference matched **16/16 axis choices (8/8 whole listing pairs)** across two synthetic catalogs; always-first-option baseline matched **6/16** axis choices. This small hand-authored fixture set is not representative accuracy. Each reviewed example has 3/4 combinations listed, one missing, one duplicate slot and one zero-stock listed combination; axis-only baseline says all options appear. The in-app baseline uses the **same reviewed rows** and reports coverage only, not model quality or invented time savings.

Stress checks show a real limitation: “Not spiral bound. Sewn with thread. Pages are blank, not a graph grid.” selected sewn/grid, not the intended sewn/plain. An unrelated café delivery/refund sentence still received a nearest pair. Mandatory human verification and holds are essential; no confidence percentage or automatic out-of-domain safety claim. Missing combinations are provisional audit cues, especially when rows are held or the intended-range definition is wrong.

## Development, validation and publication

React + Vite, base `/daily-app2/20261126-1/`; `npm install`, `npm run dev`, `npm run predeploy`. Standalone Vite serves the UI but does not host the older shared runtime paths; for actual local inference serve the assembled collection `deploy/` at `/daily-app2/` (or mount the three documented shared assets at those same paths), as the production-browser validation does. Required app scripts `predeploy: npm run build`, `deploy: gh-pages -d dist`; gh-pages dependency retained. **Publish only through the root combined workflow**, never individual deploy.

See [VALIDATION.md](VALIDATION.md), browser, defensive/recovery, SQLite oracle, artifact and runtime audit reports. Validation explicitly distinguishes real successful inference from fault-injected defensive tests. Untested: physical phones/other engines, cold offline startup, representative product-language accuracy, actual store-system import, conditional variants and more than two axes. No digest is sent by this builder.
