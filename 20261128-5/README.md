# Gatherfold Studio

A local-AI booklet imposition worksheet for small print rooms and bookbinding workshops. Informal job descriptions often omit the exact binding-profile name; MiniLM retrieves a supplied profile from meaning rather than literal keywords. Human-reviewed page counts and section limits drive deterministic nested signatures and shared-stock checks. This is a new numbered-page imposition process, not a PDF editor, paper-cut optimizer or caption formatter.

## Workflow and formats

Try **Zine handoff** or **Sewn sections**, paste source JSON or import `.json` (1 MB maximum). Source is limited to 30,000 characters, 2–8 profiles and 1–12 jobs, unique short IDs, descriptions/notes ≤200 characters. Each profile provides `signaturePages` (4–64, multiple of four) and `stockSheets` (0–1,000,000). Jobs provide `pages` (1–256), `copies` (1–1,000), `wasteSheets` (0–1,000). All counts are integers.

Explicitly **Load AI & match profiles**. Four-text chunks and download progress are displayed; cancel terminates the worker, and Load retries. Timeout: 180 seconds. Input changes cancel work and discard prior review/export snapshots. Delayed imports and stale worker responses are identity-guarded.

Inspect source notes and ranked profile evidence. Relink profiles and edit counts; numeric/profile edits reset approval. Approve or hold every job. Undo restores the previous review layer (up to 30 changes), never overwrites originals. Apply the worksheet to enable exports; later edits invalidate it. Shared stock is grouped by profile and includes approved jobs only. Reviewed stock caps for the same profile must agree. Press release requires every job approved and no shared-stock shortage.

- JSON (`gatherfold-v1`): originals, reviewed rows, cosine evidence, signature spreads, stock checks and computed totals. Reimport restores originals only, requiring fresh AI and review.
- Audit CSV: every job, including holds and shortages, original notes and reviewed counts.
- Press CSV: one row per sheet pattern with job ID, copies, signature, outside-to-inside sheet number, front/back left/right page numbers, and reviewer note. Empty positions are blanks. Copy count is explicit; rows are not repeated per copy. Spoilage sheets are in audit totals, not content-bearing spreads.
- Markdown / clipboard: all job worksheets and source/reviewer text plus shared stock checks.

CSV uses RFC-style quotes and CRLF. Formula-leading text is apostrophe-prefixed; signed numeric results retain their types. JSON preserves exact multiline review text. No PDF, binary artwork, machine commands or remote print action is exported.

## Real AI, runtime, license and data flow

Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized q8. Runtime: shared Transformers.js 4.3.2 bundle (Apache-2.0), ONNX Runtime Web (MIT), WASM CPU with normalized mean-pooled 384-dimensional sentence vectors. Cosine ranking matches each job to supplied profile descriptions. Numeric extraction, pagination, stock checking and exports are deterministic; AI does not invent print specifications. Cosine scores are **not confidence**. Nearest-neighbor retrieval always offers a match even for unrelated/negated requests; human review is mandatory. English-first, not a general-purpose instruction model.

Initial download is approximately 50 MB: ~23 MB weights plus ~27 MB runtime. Internet to this site, Hugging Face and its CDN is required initially. Current browser with module workers, WebAssembly SIMD and adequate memory required. No WebGPU, paid service, shared key or provider integration. Tested in installed desktop Chrome with GPU disabled; physical phones, other browsers and constrained-memory devices are untested. Responsive phone layout is browser-emulated only.

Default user content and embeddings remain in the local worker. Model/runtime GET downloads are not content uploads. Input text is data and grants no authority. No analytics, credential forms or remote inference path exist. Closing the tab loses the editable workspace; export JSON to preserve source. Cache API model/runtime caches may be evicted. **Fresh-worker inference offline in an already loaded page after a successful online run is tested. Offline reload/app-shell startup is not supported or claimed.**

The app reuses immutable same-origin worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`, and WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm` to keep the collection under its size cap. Preserve these paths. Hashes/lengths: `runtime-provenance.json`. Worker source, factory and WASM are explicitly cached; worker is instantiated from a module blob. Shared worker uses four-text batches, normalized mean pooling and model tokenizer truncation. Its feature-extraction pipeline ignores a passed `max_length`; our ≤200-character text bound is enforced, not a promised 256-token cap. The model tokenizer's own limit applies. Vector shape/count, finiteness and normalization are validated before any ranking.

## Deterministic method and baseline

Number content pages 1…N (including any intended covers). Split into consecutive sections at the reviewed cap. Pad the last section to a multiple of four; earlier sections are full. For padded signature size P and zero-based sheet s, front = [P−2s,1+2s], back = [2+2s,P−1−2s], adjusted by section start. Positions beyond content are blank. Every numbered page is checked to appear once. Sheets list outside to inside. Each side is viewed face-on, left to right; this is a position contract, not a printer duplex setting.

Required sheets = sum(padded section pages / 4) × copies + spoilage. Baseline pads **every** section to the full reviewed cap. Sheets avoided is the exact difference; equal spoilage is included in both. Displayed all-job totals include held jobs; stock checks explicitly use approved jobs only. No measured productivity, elapsed-time or universal accuracy claims.

Variable final signatures may be unsuitable for some binding equipment. No creep, trim, bleed, grain, thickness, separate-cover treatment, right-to-left binding or printer driver flip settings are modeled. Make and fold a paper dummy and verify real press/binder constraints. Stock pools are independent by profile; do not duplicate a shared physical inventory across profiles. This utility does not process PDFs or modify equipment/files/accounts.

## Build and validation

React + Vite; base `/daily-app2/20261128-5/`. `npm run predeploy` builds the app. Required per-app `gh-pages` dependency and `deploy: gh-pages -d dist` are retained, but **publish only using the repository root combined-site workflow**. See `VALIDATION.md` for observed quality, browser tests, export round trips, defensive injections and publication status.
