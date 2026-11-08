# Search Rescue

A static, no-key synonym-review workbench for help-center and catalog editors. User: search operations/editor. Input: missed search queries plus canonical labels and descriptions. Bottleneck: manually finding which canonical phrase an unfamiliar query means. Output: human-reviewed directional synonym JSON, a complete audit JSON/CSV, and an exact-phrase coverage simulator. This does not connect to or change a live search account.

## Workflow

1. Select **Help center** or **Library catalog**, paste JSON, or import an exported audit. All fixtures are synthetic. For real work, de-identify query logs first. The original collection is untouched.
2. Set `minSimilarity` (0.1–0.9) in JSON; add 1–12 concepts and 1–32 queries. IDs are unique ASCII letters/digits/underscore/hyphen, at most 40 characters. Canonical labels: 1–120 characters, unique after normalization. Description/query: 1–500 characters. Total JSON at most 50,000 characters; files at most 50 KB. Unsupported formats are rejected.
3. Press **Load AI & suggest aliases**. First-run internet is required and size/privacy notices appear before this action. Progress reports model files and four-text batches; cancel terminates download/inference worker. A 180-second timeout produces an actionable error, never simulated AI.
4. Inspect original queries and ranked source descriptions. Cosines are relevance similarities, not confidence. Change target, approve or hold every query, and optionally record notes. **Adopt threshold proposal** is an explicit bulk human approval action; inspect first. Below-threshold suggestions are held by default; exact canonical matches need no alias. Undo keeps up to 30 review snapshots. Original source records remain immutable.
5. **Apply reviewed aliases** validates every decision, blocks conflicting duplicate aliases and canonical remapping, and builds a deduplicated one-way dictionary. Held queries remain in the audit. Review edits invalidate exports and must be applied again. Input edits terminate runs and clear old results.
6. Compare exact normalized lookup before/after. Try a phrase in the applied dictionary. This intentionally simple baseline has only canonical labels. Recovery counts are local hit counts, **not** accuracy, production search performance, conversion uplift or measured time savings.
7. Download **JSON** (complete audit), **CSV** (all reviewed/held rows) or **SYNONYMS** (only approved new rules); copy rules with the clipboard button. JSON imports restore original inputs and constraints, deliberately not approvals. CSV formula-leading cells are apostrophe-escaped, including multiline text; exact originals remain in JSON.

## Input schema

```json
{
  "minSimilarity": 0.3,
  "concepts": [{"id":"access","label":"Reset password","description":"Recover access when you forget the login password."}],
  "queries": [{"id":"Q1","text":"forgot my login secret"}]
}
```

## Actual AI and deterministic steps

Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), quantized q8 ONNX, Apache-2.0, derived from sentence-transformers/all-MiniLM-L6-v2. [Transformers.js](https://github.com/huggingface/transformers.js) 4.3.2 (Apache-2.0) performs mean-pooled normalized 384-dimensional feature extraction, using ONNX Runtime Web WASM CPU (MIT). Model/tokenizer download is approximately 23 MB; the shared binary adds 26,861,777 bytes (~27 MB), plus local worker/factory/app assets. No GPU or API key is needed. Texts are processed four at a time, capped at 256 tokens; long or token-dense text can be truncated. Batch count, 384 dimensions, finite values and vector normalization are checked before results can be used.

AI materially proposes meaning-based query matches beyond exact phrase equality. Deterministic cosine ranking selects a top concept; a threshold recommends approval/hold. Existing exact canonical phrases retain their identity. Human review may override any suggestion or threshold. Case folding, whitespace collapsing and Unicode NFKC normalization drive exact dictionary keys; code prevents any phrase from mapping to two concepts. Duplicate approved queries targeting one concept produce one rule while all source rows survive. Baseline/result hit counts and artifact generation are deterministic. Text is data, never authority; no generative tool execution or credential request exists.

Synonym output uses Algolia's one-way synonym shape, for example:

```json
[{"objectID":"search-rescue-Q1","type":"oneWaySynonym","input":"forgot my login secret","synonyms":["Reset password"]}]
```

Importing those files into a search service is a separate manual action. This workbench does not test an Algolia account or assert equivalent behavior under a service's tokenization/ranking/settings. It does not create symmetric or transitive synonym sets. Re-running against a service with matching objectIDs may replace its existing rules: review IDs and take a backup there before manual import.

## Privacy, caching and devices

The default and only path keeps all query/concept text on-device. Requests download model configuration, tokenizer and ONNX weights from `huggingface.co` / its CDN and runtime/app files from this GitHub Pages site. No content is placed in URLs, request bodies or logs by the app, and there are no provider integrations, credentials, analytics or external actions. Browser tests capture requests and check GET-only downloads. The model cache may contain downloaded weights; original content is only React memory until you export it. Export files can contain sensitive original queries; keep them private.

Current desktop browsers with WebAssembly, module workers and Cache API are required; roughly 300 MB free memory is recommended, not an exact memory guarantee. WASM/CPU is the actual default and tested path, independent of WebGPU. Only installed Chrome on macOS was exercised; physical phones, Safari, Firefox and low-memory hardware were not tested. Mobile widths 320/390 were tested in desktop Chromium. Runtime failures give a retry/device message, never fake output.

Worker source, WASM module factory and binary are explicitly cached; model/tokenizer use the Transformers browser cache. After one successful online run, **fresh-worker inference while the page remains open** was tested with all network disabled. Offline reload/navigation/app-shell startup is **not promised**; there is no service worker. Browser eviction/private mode can require a fresh online download; manually clear this site's browser storage to clear its caches. Cancel may leave partial downloaded assets. No content is added to model-cache keys.

The byte-identical WASM is reused at `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm` to avoid another 27 MB deployment. Root deployment must preserve that app/immutable file. Worker and factory remain local to this app; Vite's base and absolute WASM URL are verified. See `asset-audit.json` for byte counts and hashes.

## Build / publish

```sh
npm install
npm run predeploy
```

React + Vite; base `/daily-app2/20261108-9/`. Per-app `predeploy` and `deploy` scripts and gh-pages dependency are retained. Publish **only through the root combined-site workflow**, never this app's deploy script in isolation. Root README documents Pages verification.

## Validation and limitations

See [VALIDATION.md](VALIDATION.md) and the executable browser/core/artifact tests. Actual model inference, not mocks, must establish functional success. Defensive failure injections are labeled separately. MiniLM is not an entailment model: related phrases, negation and ambiguous requests may receive incorrect high matches. It does not know if a query is safe to rewrite globally. Human review is essential; holds remain visible. Simple synthetic fixture results are not real-world accuracy estimates. Source package version is locked in package-lock.json; the model host's default revision may change and browser caches may retain an older download. No public production search engine, external account import, live personal log or provider credential is used.
