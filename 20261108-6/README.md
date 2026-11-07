# Redirect Harbor

A local-AI URL migration workbench for content editors. Input retired page paths/descriptions and live destination paths/descriptions, run semantic matching, inspect candidate evidence, edit targets, accept or hold every source, apply the review, then export a complete audit and staging-ready redirect map. No websites are modified.

## Real AI and deterministic work

- `Xenova/all-MiniLM-L6-v2`, Apache-2.0, [model source](https://huggingface.co/Xenova/all-MiniLM-L6-v2). Transformers.js 4.3.2 and ONNX Runtime Web 1.30 use q8 WASM CPU inference, mean pooling, normalized 384-dimensional embeddings and cosine ranking. No API keys, server inference, WebGPU requirement or mock fallback.
- AI compares meaning in page descriptions. It does **not** fetch websites or inspect current HTTP status, SEO authority, legal equivalence or redirect deployment. Imported text is model input data, not executable instructions.
- Deterministic: JSON/path/schema bounds, vector shape/finiteness, candidate ranking, review enforcement, all-record conservation, metrics and exports. Retired/live paths are disjoint, so redirects cannot form self-loops or chains. Many-to-one redirects are allowed.
- Baseline: all retired pages point to the first destination. UI reports the number of AI targets different from this baseline and human target overrides, **not** accuracy or SEO gain. Known-answer correctness is evaluated only in the documented synthetic tests.

## Download / privacy / device requirements

Explicit Run downloads the model/tokenizer (approximately 23 MB) from Hugging Face, approximately 27 MB shared WASM and under 1 MB app/runtime JS from this site. First loading requires internet. User content stays in browser memory and never enters model-download URLs or request bodies. No analytics or remote provider is integrated. No data is automatically persisted; downloaded audit files contain all original descriptions, so handle them as your own documents.

Modern browser with WebAssembly, module workers, Cache API and roughly 300 MB available memory recommended. CPU inference tested in desktop Chrome; actual iOS, Android, Firefox and Safari devices are not verified. Phone layout was tested at 320/390 CSS pixels in Chrome, not physical phone performance. Error states are actionable; no fake results are produced when loading fails.

Runtime worker source, WASM factory and binary use Cache API; model files use Transformers.js caching. After a successful run, a **fresh worker while the current page remains open** was tested with all network offline. Offline reload/navigation is **not** promised; no service worker caches the app shell. Browser eviction, private browsing, storage restrictions or changed model-host files can require redownload. Cancel terminates the worker; downloaded cache entries may remain. A 180-second timeout is bounded and retryable.

The build reuses byte-identical `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm` (SHA-256 `49871f5a4409519797e127440868a6d1923339d9185907f301a5b2a1d90af082`); preserve that app asset in root deployments. Worker and factory are bundled with this app.

## Formats and limits

Paste JSON or import `.json` (up to 50,000 characters / 50 KB file). Use either synthetic example for the schema:

```json
{"retired":[{"path":"/old/coffee","text":"French press brewing guide"}],"destinations":[{"path":"/guides/cafetiere","text":"How to make coffee in a French press"}]}
```

1–24 rows per side, unique local paths within each side, max path 160 characters, max description 600 characters. Paths accept only alphanumeric segments, `_`, `-`, `/`; no domains, dot segments, queries, spaces, fragments or repeated separators. Match source and destination paths to a consistent trailing-slash policy yourself. Batch size four descriptions, maximum 48; max 256 model tokens per description, with truncation. Prefer concise descriptions. Model can be wrong on negation, closely related destinations, jargon or missing destinations. It always ranks a top choice, even for unrelated pages: hold inappropriate matches.

Every record begins pending. Inspect top three source-linked candidate descriptions and cosine scores (not confidence), edit the live target if needed, then accept or hold. Changing a target resets that record to pending. Undo restores the previous review edit. Original source text/paths remain immutable. Any review change invalidates applied exports. Input changes cancel and discard results; run IDs guard stale worker and file-read completions.

Exports:
- JSON: all original inputs, evidence, suggestions, human decisions, notes and computed metrics. Reimport restores **source inventory**, intentionally recomputing suggestions; it does not silently re-approve old decisions.
- CSV: every source row, accepted target (blank for holds), status 301/HOLD, decision, note, original description. Fields beginning with spreadsheet formula characters are prefixed with an apostrophe, including multiline fields; JSON preserves exact text.
- RULES / Copy rules: Netlify-style `from to 301` lines for accepted sources only. Not Apache/Nginx configuration. Adapt to your platform and stage-test URLs before any external deployment. The app never deploys rules.

## Development and publication

`npm install`; `npm run dev`; `npm run predeploy`. Base `/daily-app2/20261108-6/`. Individual gh-pages dependency/scripts are retained, but publish the collection only via root `npm run predeploy` and `npm run deploy`. See root README for Pages build/commit verification.

## Validation

See [observed validation](VALIDATION.md), browser logs/reports, independent artifact parser, core tests, screenshots and production asset audit. Run `python3 serve-test.py` then `node browser-test.cjs`; `node core-test.mjs`; `python3 validate-artifacts.py`. Browser tests use the workspace-installed Playwright and real Chrome. Fault-injected malformed messages/errors/timeouts are defensive tests only; successful inference tests use the actual downloaded model. No real user data or provider keys are included.
