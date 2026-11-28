# Callout Loom

A private diagram-annotation planning utility for technical writers and exhibition editors. Short rough notes are semantically linked to supplied diagram landmarks using **real browser MiniLM inference**. Review those links and label copy, then compute a nonoverlapping right-hand label column and export an actual SVG handoff plus complete audits. This is not image recognition, a chat wrapper, an image cropper or a tool that changes remote files.

## Workflow and formats

1. Load **Workshop diagram** or **Museum floorplan** (synthetic), paste source JSON, or import `.json` source/audit ≤1 MB. Source limit: 30,000 JS characters.
2. `canvas`: integer `width` 700–1800, `height` 300–2000 and label `gap` 4–40 pixels. Coordinates refer to this original pixel canvas, not its responsive preview size. Right-hand column x = width − 280, label width 260; 20 px outer margins.
3. `setups`: 2–8 landmarks with unique simple `id` (ASCII letters/digits/underscore/hyphen, ≤24), `description` (1–200 characters), integer x (20 through width − 340) and y (20 through height − 20). Obtain coordinates yourself from a diagram; AI does not detect objects.
4. `records`: 1–24 callouts with unique `id`, short contextual `note` (1–200 characters), `label` (1–120 characters, printable ASCII plus CR/LF), and integer displacement `weight` 1–10. Higher weights resist vertical movement. Source notes/descriptions support Unicode; exported visible labels intentionally use ASCII for predictable monospace sizing. Unsupported labels fail visibly.
5. Explicitly click **Load AI & link callouts**. Inspect all ranked landmark descriptions and cosine similarity (not confidence). Correct the landmark, wording or weight; approve or hold each callout. Content edits reset approval. Reviewer notes support multiline text. An explicit “approve all checked” shortcut is provided; it is not automatic approval.
6. **Apply reviewed layout**. Labels follow landmark-y order (source order breaks ties), wrap every 24 printable ASCII characters, and have 20 px line height plus 16 px vertical padding. CRLF/CR normalize to LF for visible line layout; JSON and SVG title metadata retain exact label text. Midword wrapping is intentional.
7. Download JSON, Audit CSV, Markdown, or SVG, or copy the reviewed worksheet. Every edit invalidates the applied snapshot. Undo retains the previous 30 review states. If labels exceed vertical capacity or no callouts are approved, SVG is blocked while complete audit exports remain available.
8. Reimport the audit to restore **original** inputs only; never silently restore approvals. Rerun AI and review. Content is not persisted automatically.

SVG contains approved labels, source landmark dots and leader lines on a pale background, with original pixel dimensions and XML-escaped text. Background artwork is not included; use the coordinates/overlay as a handoff in your editor. JSON preserves all source records, holds, reviewed fields and ranked evidence. CSV includes every original and reviewed record plus current geometry; held/blocked rows have blank coordinates. CSV quotes embedded commas/newlines/quotes and prefixes spreadsheet-leading text (`= + - @ tab CR LF`) with an apostrophe. JSON stays lossless. Markdown is a plain-text checklist, not rendered trusted imported HTML.

## What the AI actually does

- [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized ONNX `q8`, normalized mean-pooled 384-dimensional embeddings. Original sentence-transformer [model](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2).
- Transformers.js **4.3.2** (Apache-2.0) and ONNX Runtime Web (MIT), WASM CPU/SIMD, one thread. No WebGPU, server or API key required.
- AI embeds the supplied landmark descriptions and annotation notes, then cosine ranking recommends the closest semantic landmark. This can reconcile paraphrased object descriptions rather than demanding exact ID strings. It does not generate labels or coordinates, understand a diagram, verify identity, or execute instructions in imported text.
- At most 32 texts in batches of four; each AI text ≤200 JS characters. Shared pipeline has tokenizer truncation at its inspected `model_max_length=512`. Its legacy `max_length:256` pipeline option is ignored; **no 256-token cap is claimed**.
- Validates count, 384 dimensions, finite numeric components and normalization before creating any review. Wrong/malformed vectors fail closed; no mock/deterministic fallback.

### Download, devices, caching and offline scope

Explicit first load requires internet: 22,972,370-byte model weights (~23 MB), tokenizer/config, ~26.9 MB WASM, ~0.6 MB shared worker/factory; about **50 MB**, plus the small app bundle. Download hosts: `huggingface.co` and its CDN (observed `us.aws.cdn.hf.co`). Runtime code is same-origin, not an external JavaScript CDN. Host model `main` is not pinned, so upstream revision/download details can change. Prior observed revision: `751bff37182d3f1213fa05d7196b954e230abad9`.

The byte-verified shared worker is `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`, and WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve these older apps/assets in combined deploy. Exact SHA-256 and byte counts: `runtime-provenance.json`. These assets implement the actual text→vector worker protocol; this app supplies domain-specific inputs, validation, ranking and layout.

Requires module workers, WebAssembly SIMD, Cache API for dependable caching, and sufficient free memory. Desktop Chrome CPU with GPU disabled was tested. Memory-constrained phones/other browsers were not inference-certified; use a current desktop browser if initialization fails. Missing worker/WASM, network failures, malformed messages, worker errors and 180-second timeouts display actionable errors. Cancel terminates the worker and aborts its initial source fetch. Run identities protect download, file-import and inference callbacks from stale overwrite. Retry uses the real model again.

Runtime source/factory/binary and model files cache locally. After a fully successful online run, a **new worker in the same warmed open page** performs real inference with all network disabled. Fresh offline navigation/reload is **not** supported or promised (no app-shell service worker). Cache eviction, private browsing or cleared site data can require a fresh download. Clear site data to remove model/runtime cache; this app stores no user content there.

## Deterministic optimization and comparison

For approved labels sorted by landmark y, height = wrapped line count ×20 +16. Let `s_i` be cumulative earlier label heights and required gaps; ideal top `a_i = landmarkY_i − height_i/2`. Solve

`min Σ weight_i × (top_i − a_i)^2`, subject to page margins and `top_(i+1) ≥ top_i + height_i + gap`.

Weighted pool-adjacent-violators fits nondecreasing `z_i = top_i − s_i` to `a_i − s_i`. Clamp fitted block means to the shared interval `[20, canvasHeight − 20 − totalStackHeight]`. This is the unique minimum weighted squared displacement for the fixed column and fixed landmark order. If the interval is empty, block SVG rather than silently discard a record. No horizontal packing or arbitrary reordering is attempted.

Baseline: independently center each label at its own landmark and clip to the same page margins, without resolving neighbor collisions. Compare the number of pairwise required-gap conflicts with the reviewed output (zero when feasible). Mean absolute move and weighted squared displacement are computed actual geometry, not measured time savings or AI accuracy. Positive displacement may be necessary even though the infeasible baseline moves less. Two fixture runs each had 3 baseline conflicts; resulting layouts had none, with mean moves 23 and 20 px respectively.

Layout guarantees label rectangle separation only. Leader lines can cross, the landmark region can contain clutter, artwork is not inspected, and substituted fonts can differ; check the SVG in its destination. This is not a complete graph-drawing or cartographic placement solver.

## Privacy and limitations

All content stays in browser memory and on-device worker messages. Network audits observed only GET asset downloads with no request bodies and no source notes in URLs. Model hosts see normal download metadata/IP, not annotation content. There are no credentials, analytics, uploads, optional remote providers or external actions. Only synthetic fixtures are committed.

Semantic similarity is not identity or negation understanding. On a deliberately negated workshop note, MiniLM selected WATER when the intended landmark was MOTOR; the reviewer corrected it before export. Eight simple known-answer links are not universal accuracy. Multiple visually identical objects require more context and manual review. Source landmark coordinates, intended labels and weights are the user's responsibility.

## Validation and running

`npm install`, `npm run dev`; `npm run predeploy` builds `/daily-app2/20261128-22/`. Required individual scripts remain `predeploy: npm run build`, `deploy: gh-pages -d dist`; **do not run individual deploy** for this collection. Publish only via repository-root predeploy/deploy, which assembles all older apps plus this one.

Tests: `node core-test.mjs`; `node browser-test.cjs`; `node defensive-test.cjs`; `node recovery-test.cjs`; `node model-cancel-test.cjs`; `node import-race-test.cjs`; `node input-guard-test.cjs`; `python3 artifact-test.py <prefix>`; `node asset-audit.mjs`. Browser scripts use the workspace Playwright installation and installed Chrome. `APP_URL`, `PREFIX`, and `SITE_ORIGIN` select local/assembled/public production tests. `serve.py` and `serve-assembled.py` use absolute handler roots, preserving real base paths.

See `VALIDATION.md` and saved observed JSON reports for actual outcomes. Build success alone is not inference validation. Untested: every phone/browser, fresh offline navigation, arbitrary upstream model revisions, background artwork, non-ASCII visible SVG labels and crossing-free leaders.
