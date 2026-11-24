# Crawl Compass

A local-first crawl-policy handoff workbench for SEO editors and web developers. Mixed notes describe *which crawler* needs a path; reconciling those notes with the right product token and checking exceptions by hand is error-prone. Real local neural embeddings propose the crawler identity, then a bounded robots.txt engine supplies exact source-line witnesses. Nothing crawls or changes a website.

## Workflow

1. Choose **Editorial launch** or **Media & archive review**, paste source JSON, or import a source/prior audit `.json` (≤1 MB). Only originals are restored from audits; old approvals are deliberately not trusted.
2. Edit `plans` (2–5 profiles: unique `id`, semantic `description`, ASCII crawler `agent` product token), shared `robots` policy, and `records` (unique `id`, context note, `raw` JSON string containing exactly `{ "path": "/..." }`). These are the user's goals/contracts, not model-generated rules. Examples use fictional agents and synthetic paths.
3. Read the download/device/privacy notice, then explicitly click **Load AI & reconcile**. Cancel terminates the worker. Retry by clicking Load again.
4. Review every proposed crawler against the original note and profile description. Inspect similarity evidence and winning policy line. Correct the profile or path, add notes, approve or hold. Profile/path changes reset approval; every edit invalidates export snapshots. Undo restores review edits. Originals never change.
5. **Apply reviewed scenario**. Pending reviews prevent apply. Approved malformed paths are retained as blocked; held records remain in complete audits. Inspect exact decisions and first-match baseline disagreements.
6. Download complete JSON/CSV/Markdown, copy Markdown, or download **Release JSON** containing the robots policy and approved valid agent/path/expected-decision fixtures. No endpoint request or policy deployment is executed.

## Real AI, deterministic checks, and limitations

Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), quantized q8 ONNX, Apache-2.0. Runtime: Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT), single-thread WASM CPU. It produces real normalized mean-pooled 384-dimensional embeddings, four texts per chunk. Cosine similarity ranks the provided descriptions for each context. It does not generate text, authenticate crawlers, interpret legal permissions, infer robots rules, or execute imported instructions. Source snippets and all candidate similarities are visible. Similarity is not confidence, relevance proof or a measure of correctness. Ambiguous, irrelevant, multilingual and negated descriptions may misroute; human verification/hold is mandatory.

The shared worker is the immutable Circuit Cove build at `20261115-6/assets/ai.worker-lkOoPoq8.js`; its factory is `20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`; its binary is `20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve these older app paths. `runtime-provenance.json` records verified bytes/hashes. No duplicate model runtime is bundled. The tokenizer's `model_max_length` is 512; feature-extraction's supplied `max_length:256` is not treated as an enforced cap. This app separately bounds descriptions/contexts to 200 characters, avoiding unbounded document inference.

All policy parsing, group selection, pattern matching, rule precedence, reviews, metrics and artifacts are deterministic. Supported **bounded subset**, not full RFC conformance:

- ASCII `User-agent`, `Allow`, `Disallow`, comments, and blank lines only. Unsupported directives (including Sitemap and Crawl-delay) are rejected rather than silently misinterpreted. Policy ≤8000 characters / 80 lines.
- Agent product tokens: 1–60 ASCII letters/digits/hyphen/underscore, at least one letter in profiles. Case-insensitive substring matching; groups with longest matching agent tokens are merged. Wildcard-agent groups are used only when no specific group matches. Blank lines do not split consecutive user-agent lines.
- Unencoded ASCII slash paths, including literal query strings, ≤240 characters. No percent escapes, Unicode, fragments, whitespace, backslashes or absolute URLs. Normalize those separately; this app refuses to guess equivalence.
- Slash patterns ≤180 characters; `*` matches zero or more characters and final `$` anchors the end. Longest matching literal path length wins (excluding `*` and `$`); equal specificity favors Allow. Empty rules do nothing; no matching rule allows by default. Path matching is case-sensitive.
- No HTTP redirects, origin selection, robots fetching, cache/response status behavior, encoding normalization, actual crawler implementation differences or search-indexing guarantees. Robots exclusion is voluntary, **not authorization or protection for private content**.

## Network, download, devices and offline scope

Initial download approximately **23 MB weights + 27 MB CPU runtime**, plus tokenizer/code. Internet is required the first time. Weights/config/tokenizer download from `huggingface.co` and its documented Hugging Face CDN redirects (`cdn-lfs.*`, `cas-bridge.xethub.hf.co` `us.aws.cdn.hf.co` (observed), or current HF CDN). Worker/factory/WASM download from the same GitHub Pages collection. Loading/progress, 180-second timeout, errors, cancel and retry are visible; there is no fake/demo inference fallback.

Tested on desktop Google Chrome with GPU disabled: module workers, WebAssembly SIMD, Cache API and several hundred MB free RAM recommended. WebGPU is not required. Other engines, low-memory devices and physical phones are untested; the UI was tested at 320, 390 and 1440 CSS pixels. Use a current desktop Chrome if model/runtime errors occur.

Cache API explicitly caches worker source, factory and WASM. Transformers.js caches downloaded model assets. **Tested offline claim: a fresh worker can run real inference in an already-open, previously warmed page with all networking disabled.** Cold offline navigation/reload is not promised. Browser storage eviction, unavailable storage, changed model-host files or clearing site data can require re-download. Inputs/reviews are not intentionally persisted; export before closing.

## Privacy and formats

No API keys, remote inference, backend, telemetry, content uploads, website lookups, account changes, or external actions. Only bounded descriptions and context notes reach the on-device embedding worker; paths/policy/reviews remain in the page. Model download requests are not content uploads. Imported instruction-like text is inert data; the worker has no tool or credential authority. Use synthetic/redacted examples and never place sensitive credentials in documents.

Source limit 50,000 characters; 1–24 records; each source context/description ≤200 characters; raw path JSON ≤1500 characters; IDs ≤80 (profile IDs ≤60); notes ≤2000. Imports ≤1 MB allow complete audit envelopes while retaining stricter source limits. File reads, worker downloads and model callbacks share run identities; stale/cancelled runs cannot replace newer inputs/results. Finite 384-vector count/norm validation precedes ranking.

JSON preserves exact original inputs, reviews, evidence, held/blocked records and computed outcomes. CSV includes source context, policy, reviewed profile description, original/reviewed case and review notes; proper quoted multiline fields plus leading-formula text escaping are used. JSON preserves unescaped exact strings. Markdown includes full original input and source-linked reviews. Release JSON includes only valid approved fixtures and the policy. Reimport restores originals and requires renewed inference/review, not automatic application of saved review instructions.

## Metrics and validation

The baseline selects the **first matching directive in the correctly selected agent groups**, without longest-path precedence. Counted disagreements compare deterministic reviewed decisions; they are not model accuracy or saved time. Held/blocked records are not counted as baseline differences. Counts are derived from current applied results; editing disables exports until reapply.

See [VALIDATION.md](VALIDATION.md) and machine-readable reports for exact observed tests and publication status. Known-answer fixture results are small synthetic checks, not population accuracy claims. The independent oracle uses Python fnmatch with prefix enumeration, rather than the app's bounded dynamic-programming matcher.

## Development and publication

React + Vite; `npm install`, `npm run dev`, `npm run predeploy`. Base `/daily-app2/20261124-17/`. Per-app gh-pages dependency and required predeploy/deploy scripts remain present, **but publish the collection only from the repository root** with root `npm run predeploy` / `npm run deploy`. This app's own deploy script would replace the collection and must not be used for publication. No digest is sent by the builder.
