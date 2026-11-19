# Offset Harbor — 20261119-11

Local-AI clock-skew worksheet for incident analysts and laboratory log reviewers. Input: informal device-pair comparison notes with already measured signed bounds. Bottleneck: reconciling aliases and reasoning across indirect comparisons. Output: reviewed offset/correction ranges or a contradiction/recheck worksheet. No clocks or logs are changed.

Distinct from Witness Window (event order from UTC intervals): this solves device offset difference constraints, negative cycles and reference reachability. Both galleries were inspected; 719 existing second-gallery entries (237 AI utilities) and the original read-only gallery (3,595 entries, no AI utility entries). See gallery-catalog-review.json.

## Use and data formats

1. Choose either synthetic fixture, paste JSON or import .json under 2 MB. Shape: `{context,anchor,maxWidth,devices:[{id,description}],observations:[{id,fromText,toText,lower,upper}]}`. Bounds and width are integer milliseconds.
2. Edit the device catalog, reference, width goal and supplied measurements. The convention is `lower ≤ offset(to) − offset(from) ≤ upper`; positive destination offset means its clock reads ahead. Anchor offset is zero. Bounds must already include uncertainty, not raw uncorrected network delays.
3. Explicitly Load AI starts real local neural embeddings. Both endpoints get independent semantic rankings, with cosine evidence (not confidence). Review every endpoint and signed bound. Edits reset approval; hold uncertain comparisons, add multiline notes and undo edits.
4. Apply reviewed plan. Every comparison needs approve/hold. Any hold blocks all calibration. Negative cycles block offsets even outside the anchor component. Disconnected devices remain unbounded; no record silently disappears. Every review edit invalidates the snapshot and disables stale exports.
5. Export complete JSON audit (lossless originals, reviews, neural evidence and computed plan), audit CSV (all original/edited comparisons), Offsets CSV (all device marginal bounds, direct-only baseline and additive correction ranges), or Markdown (full audit and follow-up checklist). Copy exports current Markdown. CSV quotes commas/newlines and apostrophe-prefixes formula-leading strings; genuine signed numeric fields remain numeric. JSON is lossless. Null JSON bounds/empty CSV numeric cells mean unbounded, never zero. JSON/Markdown include context and assumptions omitted by the compact CSV.
6. Reimport audit JSON restores ORIGINALS ONLY and requires fresh AI/review. It deliberately does not trust previous approvals or silently rewrite original measurements. To reuse edited measurements, explicitly change source JSON.

Limits: 2–8 devices, 1–24 comparisons; each description/context 1–300 characters; IDs 1–40 ASCII alphanumeric, underscore or hyphen; source ≤50,000 characters; import ≤2 MB; review notes ≤1,000 characters; bounds integers within ±1,000,000 ms, lower ≤ upper; width goal 0–2,000,000 ms. Oversized/invalid JSON and non-JSON input fail with actionable errors. One common short constant-offset measurement window only; no drift, timezone conversion or timestamp extraction.

## Real AI, downloads and privacy

- [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, q8 ONNX normalized mean-pooled 384-dimensional embeddings. Cosine nearest-device retrieval materially reconciles paraphrased aliases. Vector count, dimensions, finite values and approximate unit norm are validated. No canned responses or deterministic fallback.
- Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT), single-thread WASM CPU. No WebGPU or API key. Maximum 56 texts, four-text chunks. Pipeline ignores the supplied max_length:256; actual tokenizer ceiling is 512 tokens. Description character limits bound context.
- About 23 MB model weights plus 27 MB WASM and runtime/tokenizer files. First use needs internet. Download/progress/cancel, retry, 180-second timeout, worker and malformed-output errors are visible before/while loading.
- Shared immutable worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, module factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`, binary `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve original paths/apps; production/public audit records hashes and byte matches. App shell and runtime assets are same-origin, not external executable CDNs.
- Only model/tokenizer downloads use Hugging Face/CDN/Xet. Upstream main revision is not pinned. No remote inference, keys, provider integration, telemetry or user-content upload. Network audit observes static GET/HEAD without bodies or source strings in URLs. Saved reports omit temporary signed query values. Imported instructions are data, never tool authority or credential requests.
- Cache API stores downloads, not source content. Tested offline scope: fresh worker real inference in an ALREADY-OPEN warmed page, all networking disabled. Offline reload/navigation is NOT promised. Cache eviction/private mode may require internet again.
- Requires module workers, WebAssembly SIMD, Cache API and several hundred MB RAM. Desktop Chrome CPU with GPU disabled tested; 320/390px responsive layouts emulated and visually inspected. Physical phones, Safari/Firefox, low-memory hardware and screen readers untested. Unsupported devices get an error, not fake AI. Run IDs guard worker fetch/replies and async file imports; cancelled workers terminate.

## Deterministic calculation and honest comparison

Each approved inequality gives two directed difference-constraint edges: from→to weight upper, to→from weight −lower. Floyd–Warshall computes all-pairs shortest bounds. Any negative diagonal proves inconsistency; no offset output is released. Implicated negative-cycle devices are investigation cues, not attribution of which measurement is wrong.

For device i and anchor a, tight marginal upper offset is distance(a,i), lower is −distance(i,a). Unreachable devices are unbounded. Additive timestamp correction range is [−upper, −lower]. Self comparisons are valid only when their interval includes zero. Integer bounds keep arithmetic exact at these small limits. The reference component has bounded relative offsets; other components have no absolute reference.

Baseline uses only directly anchored measurements, intersected per device. Show bounded nonreference devices, count of finite/narrower propagated intervals, and number unbounded/wider than the supplied width goal. These are computed worksheet metrics, not measured time or accuracy improvements. A zero-width goal is allowed. Marginal endpoints/midpoints cannot be independently combined as one feasible calibration. Constant offsets and valid measured bounds are assumptions, not certified by the app.

## Development / verification / publishing

React + Vite, base /daily-app2/20261119-11/. npm install; npm run dev; npm run predeploy. Per-app gh-pages dependency and exact required predeploy/deploy scripts retained. Publish ONLY via repository ROOT npm run predeploy / npm run deploy, never per-app deploy (which would replace the collection).

See [VALIDATION.md](VALIDATION.md) and reports. Commands: node core-test.mjs; python3 serve-built.py (port 6971, real dist); node browser-test.cjs; node defensive-test.cjs; node newer-run-test.cjs; node import-stale-test.cjs; python3 artifact-test.py. Browser scripts use installed Playwright at /Users/hsianghui/.openclaw/workspace/node_modules/playwright. Success uses the real model; fake workers are only fault/race injection. APP_URL/REPORT select assembled/public browser checks. gallery-test.cjs compiles every inline script and compares every old entry; gallery-ui-test.cjs supports GALLERY_URL/GALLERY_REPORT. asset-audit.py supports ASSET_BASE/ASSET_REPORT. No tests run concurrently with clearing/rebuilding deploy.

Two small synthetic fixtures matched 14/14 endpoint identities; this is NOT universal accuracy. Irrelevant text still gets a nearest device, so mandatory review/hold is essential. Maximum-batch identities are manually reviewed, not evidence of eight-way general discrimination. Original daily_app remains read-only; no digest is sent.
