# Escape Ledger

A local-AI content-handoff desk for content operations and integration engineers. Mixed destination notes are tedious to reconcile; treating every value as HTML also corrupts JSON strings and URL parameters. MiniLM retrieves a destination profile from meaning, mandatory human review confirms context/raw copy, and exact encoders produce a usable release with decode witnesses. This is not a chat wrapper, sanitizer or executable preview.

## Use

1. Open **Publishing handoff** or **Import edge cases** (synthetic), paste JSON, or import `.json`. Source schema: `title`, `profiles: [{id,description,encoder}]`, `records: [{id,note,value}]`. Encoder is `html`, `json` or `url`; value is a raw string, including empty. Profile descriptions explain the intended sink. Context notes—not raw values—are embedded. There are no hard-coded model answers.
2. Read the download notice; explicitly click **Load AI & reconcile**. Local mean-pooled normalized embeddings rank each context against profile descriptions by cosine similarity. At most 32 texts are processed in chunks of four. You can cancel downloads/inference and retry. Input changes invalidate old runs.
3. Inspect source snippets and similarity evidence (not confidence). Select a destination, edit raw values/notes, approve or hold **every** record. Changes to context/value reset approval. Undo restores one review edit. Change profile encoders in source and rerun. No automatic approval.
4. **Apply reviewed scenario** to encode approved strings and compare a same-input HTML-everywhere baseline. Complete results conserve all records, including held/invalid ones. Edits invalidate applied exports until reapply.
5. Download complete JSON, audit CSV, Markdown, or approved-only **Release CSV**; copy the worksheet plus audit. JSON preserves exact strings/originals. CSV is RFC4180-style with quoted fields/newlines; formula-leading strings receive an apostrophe (so JSON is the lossless interchange). Parse the CSV before using fields. Reimport audit JSON restores originals only and requires new inference/review.

## What AI does, what it does not

Real `Xenova/all-MiniLM-L6-v2`, q8 ONNX embeddings (Apache-2.0; [model/source](https://huggingface.co/Xenova/all-MiniLM-L6-v2)), via Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT) on WASM CPU. No WebGPU or API key. Nearest semantic retrieval proposes the destination based on free-text purpose, materially driving which encoding is reviewed. Encoding, validation, baseline, round-trip equality and exports are deterministic. Similarity is not identity proof or confidence; unknown/negated notes can misroute. Hold unsupported contexts rather than forcing one of these encoders.

- `html`: visible text between ordinary HTML tags, escaping `&<>` and carriage return (`&#13;`). Decode preserves literal preexisting entity spelling. NUL/unpaired surrogates are invalid. **Not** HTML attributes, comments, JavaScript, CSS, URL sinks or markup sanitization.
- `json`: one complete quoted string literal using `JSON.stringify`, verified with `JSON.parse`. Not a full JSON object and not for inline scripts.
- `url`: one RFC3986-style percent-encoded query component (`encodeURIComponent` plus `!'()*`), verified with `decodeURIComponent`. Unpaired surrogates are invalid. Not a full URL, query, routing rule or destination allowlist.

The baseline applies HTML escaping to every successfully encoded reviewed string, then attempts decoding in its reviewed context. Counts report exact equality failures and changed outputs for this scenario—not model accuracy, security improvement or measured time savings. Round-trip equality alone does not make arbitrary interpolation safe. Raw input is never pre-decoded, and imported markup is displayed as inert React text, never rendered or executed.

## Downloads, devices, privacy and offline scope

Before explicit loading: no model-host request. First complete use requires internet and approximately **23 MB model + 27 MB runtime**, plus small tokenizer/config/worker files. Models download from Hugging Face and its CDN hosts. User data is not uploaded; there is no telemetry, credential field, external provider integration or paid service. Keys are not needed. Imported instructions remain data and cannot change worker authority.

Requires HTTPS/localhost, module workers, WebAssembly SIMD, Cache API for offline caching and several hundred MB RAM. Default is CPU, tested in desktop Chrome with GPU disabled. Other browsers, physical phones and low-memory devices are not certified. Unsupported runtime, worker/network failures, invalid vectors, timeout and encoding failures show actionable errors without fabricated outputs. The 180-second timeout can be retried. Cancel terminates the worker and run IDs guard both file reads and worker-source fetches.

Runtime and worker assets are immutable same-origin collection dependencies (not a server API):

- `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`
- `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`
- `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`

Preserve both older apps/paths. Worker protocol `{id,texts}` → progress/batch/result with normalized 384-dimensional vectors or explicit errors; inspected against the actual bundle. Worker/model factory/WASM are Cache API cached; Transformers.js caches models. Pipeline tokenizer context is 512 (the passed feature-extraction `max_length` is not an enforced smaller cap; context strings are bounded to 200 characters). Model uses main revision, not a claimed pinned checkpoint. Hashes are in runtime-dependency-audit.json.

**Tested offline:** after one complete online inference, a new worker can infer in the already-open warmed production page with network blocked. **Not promised:** offline reload/navigation, installation, permanent cache retention. Cache eviction requires internet. Clearing site data clears cached weights/runtime; private mode/storage restrictions can prevent persistence. Content and review state are memory-only except explicit user exports; caching stores model/runtime assets, not source records.

## Limits and build

2–8 profiles, 1–24 records; title ≤200, profile IDs ≤50, record IDs ≤100, descriptions/context notes ≤200, raw values ≤1000, review notes ≤2000 characters. Source ≤60,000 characters, imported file ≤16 MB to permit larger complete audit envelopes. Invalid/extra schema fields are rejected. All review rows/indexes and finite normalized vectors are validated. No external actions, uploads, file moves or account changes.

React + Vite; base `/daily-app2/20261123-12/`. `npm install`, `npm run predeploy`. Per-app `predeploy: npm run build`, `deploy: gh-pages -d dist` are retained, **but publish only through the root combined-site workflow**. See root README. Root assembly retains the existing size guard; deploy-only byte-identical Manifold runtime reuse for older `20261029-23` preserves source builds and compatibility JS URLs while referencing `20261028-24`. That older app is regression-tested for actual worker, image/STL imports and exported/portable artifacts.

## Validation and limitations

See VALIDATION.md and machine-readable evidence for actual tests, small-fixture quality, browser defensive paths, artifacts, production caching, layout and publication. Fixtures are synthetic, not personal data. No universal accuracy or security certification claim. Review context at the real integration boundary; do not reuse these outputs in unsupported sinks.
