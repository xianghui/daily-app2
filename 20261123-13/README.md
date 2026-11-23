# Byte Loom

[Open the published app](https://xianghui.github.io/daily-app2/20261123-13/)

Local-first integer import review for telemetry and data migration teams. Mixed shorthand notes make it tedious to choose the right documented integer layout; the wrong byte order or signedness can silently produce plausible but wrong numbers. Real MiniLM retrieves the nearest supplied layout from the meaning of context notes. Mandatory human review confirms it; exact arithmetic decodes the reviewed payload and supplies a typed CSV release.

## Workflow and schemas

1. Try **Sensor intake** and **Archive migration** (synthetic), paste source JSON, or import `.json`. Source is `{title, profiles, records}`. Profiles: `{id, description, bytes, endian, signed, min, max}`. `bytes` is 1/2/4; `endian` is BE/LE; `signed` is boolean; min/max are safe integers. Records: `{id, note, value}` where value is complete hexadecimal byte pairs, optionally whitespace-separated, without a `0x` prefix. One complete integer per record, not a packet parser.
2. Read the download notice; click **Load AI & reconcile**. The real model embeds notes and profile descriptions locally in chunks of four and proposes each nearest layout using cosine similarity. No canned responses. Progress, cancellation and retry are available. Changing input cancels/invalidates old work.
3. Review every source note, candidate score and documented layout. Change layout or repair hex only against actual documentation/evidence; approve or hold each row. Changing layout/hex resets approval. Notes and hex editors preserve line breaks. Undo restores the preceding review edit. Change byte order, width, signedness and acceptable ranges in source JSON and rerun.
4. **Apply reviewed scenario**. Exact unsigned positional decoding plus two’s-complement interpretation produces integers. Re-encoding must reproduce canonical input bytes. Length/hex/range violations block release, with every source record retained in the audit. Holds never enter release. Review changes invalidate exports until reapply.
5. Download complete JSON, audit CSV, Markdown or approved-only **Release CSV**; copy current worksheet and audit. Release columns: record_id, profile, layout, canonical_hex, integer. Complete audit includes originals, all reviews, source evidence and held/blocked rows. JSON is lossless. CSV quotes fields and preserves multiline values; formula-leading textual cells are apostrophe-prefixed, while actual signed integers remain numeric. Reimporting audit JSON restores originals only and requires fresh inference/review.

## AI versus deterministic processing

Real [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), quantized q8 ONNX, Apache-2.0; Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT), on WASM CPU. Mean-pooled normalized 384-dimensional embeddings link context notes to supplied descriptions. This materially proposes which integer interpretation the reviewer sees; it does not detect endianness from raw bytes. No WebGPU, key or paid service. No remote inference integration.

The baseline decodes the **same reviewed bytes at the same width** as unsigned little-endian. The displayed difference count includes syntactically decodable approved rows (even if range-blocked), not held/invalid-byte rows. It is a count of interpretation differences, not proven baseline mistakes, general AI accuracy or measured time savings. Length checks, integer decoding, re-encoding, range validation, baseline and exports are deterministic.

Similarity is not confidence or protocol identification. Unknown/negated contexts may misroute. Review against authoritative documentation, and hold unknown layouts. Byte round trips prove internal consistency, not semantic correctness or authenticity. Range checks use your assumptions, not inferred knowledge. No scaling, floating-point, bitfields, timestamps, variable-width integers, mixed packets or device connections. No external account/equipment actions.

## Downloads, privacy and devices

Before explicit loading, no model-host requests. Initial internet download: approximately **23 MB weights + 27 MB CPU runtime**, plus tokenizer/config/worker files. Model files come from Hugging Face and CDN hosts; app, worker and runtime are same-origin collection assets. No user content uploads, analytics, credentials or agent-provider keys. Only notes/descriptions go to the **local** embedding worker; hexadecimal payloads do not. Imported text is data and cannot request credentials or change authority. Source and reviews remain memory-only, apart from user-initiated exports. Cache API stores model/runtime assets, not records.

Requires HTTPS/localhost, module workers, WebAssembly SIMD, several hundred MB RAM, and Cache API for tested caching. Default WASM CPU is tested with desktop Chrome and GPU disabled; WebGPU is not required. Physical phones, low-memory devices and other browser engines are untested. Missing runtime, network failures, malformed vectors/envelopes, worker failures and 180-second timeout give retryable errors, never fake results. Cancel terminates workers; run identities protect file reads, worker fetches and late messages.

Immutable shared dependencies (preserve their originating apps and paths):

- `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`
- `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`
- `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`

The actual worker protocol is `{id,texts}` → progress/batch/result vectors or error. Worker source and runtime factory/WASM are explicitly Cache API cached; Transformers.js caches weights/tokenizers. Model revision follows main, not a claimed pinned checkpoint. Actual tokenizer context is 512; feature extraction does not enforce a smaller passed max_length, so context strings are bounded to 200 characters. Runtime asset hashes are in runtime-dependency-audit.json.

**Tested offline scope:** fresh-worker real inference after one successful online run in the same already-open warmed page. **Not promised:** cold offline reload/navigation, installable PWA, permanent cache retention. Cache eviction/private storage restrictions can require internet. Clear site data to remove cached model/runtime assets.

## Limits and build

2–8 profiles, 1–24 records; ≤32 texts in chunks of four. Title ≤200, profile ID ≤50, record ID ≤100, descriptions/notes ≤200, hex ≤1000 and reviewer note ≤2000 characters. Source ≤60,000 characters. JSON file ≤16 MB to allow full audit envelopes; restored originals must meet source bounds. Unique IDs, field schemas, vector counts/dimensions/norms, finite values and review indexes are validated.

React + Vite, base `/daily-app2/20261123-13/`. `npm install`, `npm run predeploy`. Per-app scripts are `predeploy: npm run build`, `deploy: gh-pages -d dist`; publish **only** via repository root combined-site predeploy/deploy workflow. The existing collection size guard and runtime-sharing rules are unchanged. See root README and VALIDATION.md for publication/observed checks.

## Reproducing browser validation in this environment

From the repository root, `npm run predeploy` first. From this app folder run `node serve-collection.cjs` (port 7393). In another shell, `APP_URL=http://127.0.0.1:7393/daily-app2/20261123-13/ node browser-test.cjs`, then `python3 artifact-test.py`. `node core-test.mjs` runs independent integer checks. Browser scripts use the Playwright installation in this machine’s OpenClaw workspace and installed Chrome; adapt the import path on another machine. Defensive/race scripts default to the earlier local validation port 7392; change their URL port to 7393 when reproducing against the assembled server. Never run collection assembly concurrently with tests that read deploy/, since assembly replaces that directory.
