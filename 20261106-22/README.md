# Shelf Life

A browser-local knowledge maintenance queue for help-center editors. Import upcoming product/process changes and an article catalog, find semantically related articles, inspect source links, assign owners and explicitly decide what needs updating. Apply the reviewed queue and download JSON, CSV or Markdown (or copy Markdown). No article is fetched, rewritten, sent or published.

## Real AI, not a rules demo

`Xenova/all-MiniLM-L6-v2`, MIT open weights, through Transformers.js 4.x on ONNX Runtime Web WASM CPU. The quantized q8 model generates normalized mean-pooled 384-dimensional sentence embeddings. Every article is compared with every change using cosine similarity. Thresholding and counts are deterministic; AI supplies the semantic representation. There is no generative prompt, remote inference, fake fallback or model-provider key. Imported text cannot alter application authority.

Model sources: https://huggingface.co/Xenova/all-MiniLM-L6-v2 and https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2 . See THIRD_PARTY_NOTICES.md and package-lock.json for libraries and versions.

## Setup and limits

```
npm install
npm run dev
npm run predeploy
```

Production base: `/daily-app2/20261106-22/`. Per-app deploy scripts exist as required, but publish this collection only through **root** `npm run predeploy` / `npm run deploy`.

Use a current browser with Web Workers and WebAssembly, approximately 300 MB free memory. First explicit AI run downloads ~23 MB model plus ~27 MB local WASM runtime and a ~550 KB worker. Model downloads use Hugging Face and its CDN (`huggingface.co`, `*.hf.co`); app/runtime files come from the same static host. Current desktop Chrome was tested; other browsers and physical phones were not. No WebGPU needed. Phones may be slow or memory constrained.

## Input and workflow

- Changes CSV exact header: `id,description,priority`; 1–20 rows; integer priority 1–5.
- Article CSV exact header: `id,description,owner`; 1–30 rows; owner 1–80 characters.
- Per-list IDs unique, 1–32 ASCII letters/digits/underscore/hyphen; descriptions 1–400 characters; 30,000 characters / 30 KB uploaded file limit. Quoted commas/newlines supported.
- Start with the Store or Clinic synthetic examples, or paste/import CSV. Threshold 0.2–0.8, default 0.45. Lower values trade additional links for more noise.
- Click **Load AI & find impact**. Downloads and embedding batches report progress; cancel terminates the worker. Processing has a 180-second timeout. Failed runs show actionable errors and do not substitute deterministic results.
- Inspect all source change scores, highest-priority source map, and suggested article actions. Choose Check for update / Update required / No change needed / No link found. Edit owner/notes, reject a suggestion or undo up to 30 edits. Original descriptions and source records remain unchanged.
- Apply reviewed queue. Every review edit invalidates applied exports until reapplied. JSON includes original catalogs, all reviewed articles and all cosine links. CSV includes all articles and above-threshold source IDs. Markdown retains every article and marks explicit decisions. CSV formula-leading strings are prefixed with an apostrophe; JSON preserves original strings. There is no JSON re-import; exported CSV is a handoff format, not the three-column input schema.

The concrete benefit is finding paraphrased change-to-document links and consolidating a traceable owner handoff. The UI computes AI-linked article count against a deliberately simple case-insensitive whole-change-phrase baseline. More links are not proof of correctness; no measured accuracy or time-saving claim is made. Priority orders the source change map, not a learned importance score. Explicit decision count covers Update required / No change needed only.

## Privacy, cache and failure behavior

No user text leaves the device. No analytics, uploads, accounts, credential input, external inference or persistent document storage. Weight-download requests contain file paths, not text. Inputs/results live in React and worker memory until closing/reloading. The bundled worker, WASM module and binary are cached with Cache API when available; Transformers.js caches model files. After a successful online run, another real inference can run with a fresh worker offline **in the already-open page**. Offline site reopening is not promised. Cache eviction/private browsing/restricted storage may require re-download; UI errors report this. Browser settings can clear site caches.

Run IDs guard worker fetches, late messages and file reads. Cancellation/input changes terminate the worker and invalidate results. Model vectors must have matching row count, dimension 384 and finite values. Review/export schemas check preserved records and field limits. No external actions occur.

## Important limitations

Semantic relatedness is not proof an article is out of date, complete or accurate. No-link articles still need human review. English-focused short descriptions work best; negation, version numbers and subtle factual changes can be missed. Only summaries are embedded, not article bodies; URLs alone are poor input. Descriptions are capped at 400 characters and tokenization at 256 tokens. Input order is preserved, not a priority-sorted article queue. Download sizes and memory needs are estimates, not promises for every device.

## Validation

See VALIDATION.md and browser-validation.json for observed production-bundle results. `browser-test.cjs` executes real model inference on two domains, maximum 50-text batch, unrelated negative pair, review/undo/exports/copy, offline fresh worker, cached reload, invalid/import limits, cancel/retry and defensive fault injections. Successful AI tests use the actual model; only failure tests inject unavailable workers/malformed vectors/timeouts/stale replies. `export-roundtrip.py` independently parses downloaded JSON/CSV and confirms preservation and escaping. Public deployment is checked against the gh-pages commit and every production asset hash, then the browser suite is repeated against GitHub Pages.
