# Return Mosaic

A local AI-assisted return-window worksheet for product/community analysts reconciling differently worded activity logs. The bottleneck is identifying substantive use versus administration before calculating retention with a fair observation denominator. This is not a churn classifier or outreach tool.

## Workflow

1. Try **Learning workshop** or **Community lending**, paste source JSON or import `.json` (source or an exported audit).
2. Define `start`, `return`, `other` event cards, the observation cutoff `asOf` and `[windowStartDays, windowEndDays)` after activation. All timestamps must be real UTC `YYYY-MM-DDTHH:mm:ssZ` values. `asOf` is your completeness assumption, not the browser clock.
3. Explicitly choose **Load AI & classify activities**. Inspect source snippets and cosine evidence, correct type/account/time and approve or hold **each** event. No preapproval, bulk adoption or automatic external action.
4. **Apply reviewed worksheet**. Review mature-window versus naive rates, weekly UTC activation cohorts and account-level tracking investigations. Every review edit invalidates exports; Undo restores the preceding review. Source edits reset suggestions. Originals are retained.
5. Download full audit JSON, all-event CSV, account worksheet CSV or Markdown; copy Markdown. Exports reflect only the current applied review. JSON imports restore originals only, deliberately requiring fresh inference/review, not trusting imported approvals. Work is in memory: export before closing.

## Real AI / source / license

- [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0; quantized q8 ONNX, normalized mean-pooled 384-dimensional sentence embeddings.
- [Transformers.js](https://github.com/huggingface/transformers.js) 4.3.2, Apache-2.0; ONNX Runtime Web WASM CPU (MIT). Worker protocol: `{id,texts}` → batch/progress → `{id,type:'result',vectors}`. Finite normalized vector count/dimension validated before cosine ranking. Each note is matched against the three supplied descriptions. It is **not** regex, a hard-coded response or a language-model agent. Examples/expected test answers never replace inference.
- Immutable same-origin worker/runtime reused from `../20261115-6/assets/ai.worker-lkOoPoq8.js` and `../20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`; WASM from `../20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve these collection builds. Dependency hashes in `asset-audit.json`. No runtime CDN script dependency.
- First load: roughly **23 MB model + 27 MB runtime**, plus ~1 MB worker/app code. Internet required. Public model/tokenizer files download from Hugging Face and its CDN. Download progress and per-batch progress shown; cancellation terminates the worker. Retry starts fresh; 180-second timeout.
- WebAssembly SIMD, module workers, Cache API, modern browser and several hundred MB RAM required. Tested Chrome desktop **with GPU disabled**: no WebGPU needed. Other browsers, low-memory devices and physical phone inference not verified; narrow-phone layout tested.

## Privacy / offline

No keys, backend, paid service, analytics or optional remote provider. Notes stay in browser memory; only public file GET downloads are made, never user-content uploads. Imported instruction-like text is data fed to the embedder, not executable authority. Public model weights, worker source and both WASM factory/binary use browser caches. Records are not saved in those caches by the application.

Tested offline scope: **fresh-worker inference inside an already-open warmed production page after a successful online run**, with all networking blocked. Offline app-shell reload/navigation/startup is NOT claimed. Cache eviction/private browsing may require redownload. Public-host requests are inspected by production-browser tests; persisted traffic logs discard signed query values. No agent credentials used.

## Input limits / interpretation

Three cards, exactly IDs `start`, `return`, `other`, each 1–300 character label/description. 1–48 records: `id`, `account` (1–40 ASCII letters/digits/hyphens/underscores), `at`, `text` (1–300 characters). Unique event IDs. Four embedded texts per batch; 256 token/text cap; 50,000 source characters; import envelope under 2 MB. Day start integer 1–60; end integer greater than start, at most 90. Invalid UTC dates, future events, bad JSON, unsupported/oversized imports block processing. See synthetic source fixtures in the app.

AI cannot verify identities, tracking completeness, chronology, return suitability, negation or ambiguous near-duplicate classes. Nearest-definition matching always returns something, even for unrelated text; review/hold is mandatory. Similarity is not confidence. No inferred timestamps or fabricated confidence percentages. Worker/network/runtime failures, malformed outputs and cancellation never silently fall back to fake AI.

## Deterministic calculations

Earliest approved `start` per account anchors activation. Repeated starts never reset it. Approved `return` events count only if their exact time is in `[activation + start days, activation + end days)`. Days are elapsed 24-hour UTC periods, not business/calendar dates. Multiple returns count once per account; their evidence IDs remain inspectable. `other` never counts. Returns without a start are flagged for identity/tracking reconciliation. Input order does not affect the chronological calculation.

A window is mature when `asOf >= windowEnd`. **Primary return rate = mature accounts with a qualifying return / mature activated accounts.** Empty denominator gives no rate. Immature accounts remain excluded even if a return is already observed. Weekly cohorts use UTC Monday of activation, with per-account maturity. Naive baseline counts observed in-window return accounts / **all** activated accounts, including immature; this is an observation-bias comparison, not measured performance improvement. Holds make the entire worksheet explicitly partial. Administrative-only accounts are also no-start cases.

Account worksheet suggests waiting for incomplete windows or checking tracking before investigating non-return. It does not declare churn, contact anyone, forecast, test significance or establish causal effects. Missing starts/returns and censored tracking can bias any rate.

## Output and reversibility

Audit JSON `return-mosaic/v1` preserves original source and every review, held event, cohort, account/evidence link and computed metric. CSV retains every original event with reviewed account/type/time/decision/note. Account CSV retains every approved account, maturity/status, precise windows, return IDs and follow-up. CSV quotes/escapes commas/newlines; formula-leading text gets a protective apostrophe, while exact originals remain in JSON. Markdown includes every source and review plus account follow-ups. No files/accounts are changed. Download/copy current results only; review changes disable stale exports.

## Development / publication

`npm install`, `npm run dev`, `npm run predeploy`. Base `/daily-app2/20261115-21/`. Required per-app scripts `predeploy: npm run build`, `deploy: gh-pages -d dist`; **publish only through root combined-site workflow**, not the per-app deploy. See root README and `VALIDATION.md` for observed checks. Local production server: `PORT=6899 node serve.cjs`; `COMBINED=1` serves assembled deploy. Test suite uses installed Playwright/Chrome, real model downloads and synthetic fixtures only.
