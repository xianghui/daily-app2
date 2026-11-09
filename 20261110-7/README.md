# Index Folio

[Open the published app](https://xianghui.github.io/daily-app2/20261110-7/)

A local-AI subject-index editor for handbook/report editors. Paste/import a JSON batch of controlled subject headings (with definitions) and paginated excerpts. Real semantic retrieval suggests a heading even when the text does not literally mention its title. Review every excerpt, add/remove subjects, correct printed page spans, annotate and approve or hold. Apply the reviewed index; export JSON, CSV, Markdown or copy Markdown. No external book editing or uploads occur.

## Run and build

```sh
npm install
npm run dev
npm run predeploy
```

React + Vite; base `/daily-app2/20261110-7/`. Per-app `predeploy` and `deploy` exist as required, but **do not run the per-app deploy**: publish only the root combined collection via root `npm run predeploy` / `npm run deploy`.

## Real AI and deterministic boundaries

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0; quantized q8 ONNX, ~23 MB including tokenizer/config. Source architecture: sentence-transformers/all-MiniLM-L6-v2.
- Runtime: `@huggingface/transformers` 4.3.2 and its ONNX Runtime Web WASM CPU backend, single thread. No WebGPU or API key required.
- Mean-pooled, normalized 384-dimensional embeddings; cosine ranks each excerpt against supplied heading title + definition. Four texts per batch, bounded 256-token context. AI proposes the single nearest heading and exposes every candidate similarity. It does not invent headings or page numbers, judge importance, or prove subject relevance. Similarity is not confidence.
- User can assign up to `maxTerms` subjects (1–3) per approved excerpt. Mandatory approve/hold prevents blind publishing. Negation, incidental mentions, unrelated text, multi-topic passages and specialized terms need judgment. No threshold can establish editorial correctness.
- After review, deterministic page expansion, numeric sorting, per-heading deduplication and range compression build the index. Consecutive runs of at least three compress (12–14); two remain separate (12, 13). Held sources remain in audits and contribute no index references. Every heading remains in JSON, including unused terms.
- Baseline is the count of excerpts containing any literal heading title (case insensitive). AI-confirmed links count approved excerpts whose selections still include their proposed heading. These are different review counts, not accuracy, time saved or claimed productivity improvements.

## Downloads, privacy, devices and caching

Before explicit model loading there are no model-host requests. First inference requires internet and approximately 50 MB: ~23 MB model/config/tokenizer from huggingface.co and its hf.co delivery hosts, plus ~27 MB collection-hosted WASM. All application code, worker and WASM factory are local static assets. The byte-identical WASM reuses immutable `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`; keep that earlier app asset deployed. This app adds under 1 MB to the collection.

Default user content stays in browser memory and is never a network request body or URL parameter. Weight requests download model files, not user content. No optional remote AI, credentials, analytics or server endpoints exist. Imported instructions are embedded as data; they cannot invoke tools or request credentials. Samples are synthetic.

Current desktop Chrome tested with module workers and WebAssembly SIMD; no GPU needed. Other browsers, physical phones and low-memory devices unverified. Errors explain network/WASM requirements; failure never substitutes fake inference. Model progress and per-batch progress are shown; cancel terminates workers. Input changes, asynchronous imports and late callbacks use run identities. Timeout is 180 seconds; retry constructs a fresh worker.

Model assets use Transformers.js Cache API. Worker source, WASM binary and WASM factory are explicitly cached and fetched as local blob modules on reuse. **Tested offline scope: a fresh worker performing real inference inside an already-open page after a successful online run with all network disabled.** Offline navigation/reload is not promised. Cache eviction/private browsing may require re-downloads; clear site data to remove caches. Export before closing: inputs and reviews are not persisted.

## Input schema and limits

Choose either synthetic example to inspect the complete schema:

```json
{"name":"Chapter batch","maxTerms":2,"terms":[{"id":"W","title":"Water conservation","description":"Saving water with rain collection and efficient irrigation."}],"excerpts":[{"id":"E1","start":12,"end":14,"text":"Collect rain in a barrel and water roots through a drip line."}]}
```

1–12 headings; 1–24 excerpts; unique IDs up to 30 chars per collection. Titles/name 100 chars, definitions/text 400, annotations 500. Heading titles must be distinct ignoring case and outer spaces. Pages are integers 1–9999, end >= start, inclusive span at most 21 pages. Split long excerpts; this is not a PDF/OCR/import-layout tool. Input JSON under 40 KB, JSON/audit file under 1 MB. Unsupported/empty/malformed/oversized data is rejected. Vector count, dimensions, finiteness and normalization are validated before any suggestion appears.

Change `maxTerms` to constrain indexing density. Selected headings all inherit the reviewed span: split excerpts if a subject appears on only some pages. Page numbers must already be correct printed-page references; the tool cannot inspect pagination.

## Review, exports and reversibility

Every excerpt begins pending. Edit subject checkboxes, pages or notes, then approve or hold. Edits return the excerpt to pending and invalidate applied/exportable results. Undo restores one of the last 100 review snapshots; originals remain intact. Pending reviews, too many/missing/invalid subjects, invalid pages or malformed annotations block application.

- **JSON**: complete originals, reviews, AI candidates/proposal, all headings, current page arrays/ranges, baseline and computed metrics. Reimport restores `originalInput`, not approvals or review edits: rerun AI and review again. No destructive transformation.
- **CSV**: one row per original excerpt, including holds, original text, proposal, reviewed term-ID JSON array, pages and annotation. Papa Parse quotes commas/newlines/quotes. Formula-like text begins with an apostrophe to prevent spreadsheet evaluation; genuine numeric page fields remain numbers.
- **Markdown/copy**: applied subject index, unused headings and complete source audit. Plain editorial text, not executable HTML. Download/copy always reflects the current applied review; edits disable stale artifacts.

## Validation

See [VALIDATION.md](VALIDATION.md) and JSON reports for actual observations and publication status. Tests run against the production bundle, not only Vite development mode. Tiny fixture matches do not establish indexing quality for real books; no universal accuracy/completeness guarantee.
