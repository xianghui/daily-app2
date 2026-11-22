# Chunk Harbor

A local-AI review desk for analysts reconciling recurring multipart-transfer handoff logs. Informal part descriptions obscure which fixed-version file they belong to; adding received part lengths can overstate progress when retries overlap. This utility produces reviewed missing-range worksheets, not a transfer client.

## Workflow

1. Choose **Report & photograph** or **Audio & handbook**, paste source JSON, or import a `.json` source/audit. All fixtures are synthetic. Audit imports restore originals only.
2. Enter expected file descriptions/sizes and actually received part notes, zero-based `start` offsets and positive `length` values. Keep one fixed version per file. Edit constraints in the source; rerun AI after changes.
3. Explicitly click **Load AI & reconcile**. Real browser neural inference proposes a file for each note, with cosine-ranked source descriptions. Loading/chunk progress, cancellation, retry and a 180-second timeout are provided. No model loads before invocation.
4. Correct identity, verify version/size/range evidence, approve each record or hold it. Changing identity resets approval; a hold withholds the entire coverage worksheet, retaining all source records. Multiline reviewer notes and undo are available.
5. **Apply reviewed scenario** runs exact interval arithmetic: unique coverage, repeated logged bytes, missing ranges and source-linked elementary-interval witnesses. A range beyond its reviewed file size blocks calculation; correct the match or source.
6. Export JSON, audit CSV, **Ranges CSV**, Markdown or copy the current worksheet/audit. Edits invalidate exports. Originals never change. Range strings in the CSV are worksheet notation, not executed requests.

## Actual AI

[`Xenova/all-MiniLM-L6-v2`](https://huggingface.co/Xenova/all-MiniLM-L6-v2), q8 ONNX, Apache-2.0; Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT). Real normalized mean-pooled 384-value embeddings compare informal part notes with supplied file descriptions. AI materially reduces repeated semantic alias lookup; it does **not** infer byte offsets, file sizes, contents or transfer success. The deterministic sweep runs only after mandatory review.

No key, paid service, remote inference, agent-provider credentials or WebGPU is needed. Single-thread WASM CPU is the tested path. Requires HTTPS/localhost, WebAssembly SIMD, module workers, initial internet and several hundred MB RAM. Chrome with GPU disabled tested; physical phones, Safari/Firefox and low-memory devices untested.

First load approximately **23 MB model/tokenizer/config + 27 MB WASM**, plus app/worker/factory code, from this static site and Hugging Face/CDN redirects. Downloads are public files, not user-content uploads. Model revision is upstream `main`, unpinned: upstream changes are a reproducibility limitation. The tokenizer context is 512 tokens; pipeline `max_length=256` is not relied upon as an enforced cap. Every text is independently limited to 200 characters. At most 40 texts in chunks of four. Vector count, 384 dimensions, finite values and normalization are validated.

Cosine similarity is not confidence or identity proof. Unknown, negated and instruction-like notes still get a nearest candidate; hold unsuitable proposals. The two tiny fixtures' 12/12 simple label matches are not general accuracy claims. Imported text remains data, without tools, authority or credential requests.

### Shared same-origin runtime dependencies

Preserve these existing immutable production assets when deploying the combined collection:

- `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`
- `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`
- `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`

Sizes/hashes in `runtime-dependency-audit.json`. No new geometry/runtime sharing rules are needed for this app; the unchanged combined-site 1 GB guard is retained.

## Exact accounting and baseline

A received part covers `[start,start+length)`. Sort all endpoints plus 0 and expected size. For each adjacent endpoint interval, record all covering source part IDs. Nonempty witness lists contribute to unique bytes; empty lists are merged into maximal missing ranges. Repeated logged bytes = sum of received lengths minus unique bytes. Distinct positions received more than once (`overlapBytes`) differ from repeated bytes when multiplicity exceeds two.

For every file, **unique + missing = expected size** and **unique + repeated = logged lengths**. Absent files remain in the catalog and yield one full-file missing range. All original parts, even exact retries, survive audit exports. The range worksheet exports missing ends **inclusive**, so `[600,700)` becomes `bytes=600-699`, length 100. Gap-free files receive an explicit COVERED row.

Baseline: sum part lengths for each file and cap at its expected size; declare nominally complete if the uncapped sum reaches size. Compare on the same reviewed identities. This shortcut overstates coverage when parts overlap. Counts are exact conditional metadata arithmetic, not measured speed, model accuracy, network efficiency or time savings. No fabricated confidence or percentage improvement.

Coverage is **not** checksum equality, assembly correctness, durable storage or transfer success. Repeated coverage is not proof of identical bytes. No actual file bytes/hashes are imported. No PCAP parsing, TCP sequence-number wrap, version mixing, storage APIs, file modifications, remote actions or automatic retries. Use only confirmed received ranges; rejected/unknown/failed attempts must be held or corrected, not asserted received.

## Privacy, cache and failure behavior

Content remains in page memory and a local worker. No credentials, accounts, uploads, telemetry or optional remote-provider integration. Network captures check GET-only public-file requests without fixture content. Only explicit downloads/clipboard persist user output; browser caches retain public runtime/model files, not user records.

Worker source, WASM factory and binary are explicitly Cache-API cached; Transformers caches model files. Tested offline scope: **fresh-worker real inference in an already-open warmed page with all networking disabled**. Cold offline navigation/reload is neither supported nor claimed. Cache eviction or disabled storage requires internet again.

Run IDs and terminated workers prevent stale responses from overwriting new input or cancelled runs, including delayed file reads and worker-source downloads. Model/network/runtime/worker failures, malformed vectors/envelopes and timeout show actionable errors without fake results. Retry is user-invoked.

## Input/output limits

Source JSON only, no unknown fields:

- `title`: nonblank ≤200 characters.
- `files`: 2–8 objects: unique `id` ≤50, nonblank `description` ≤200, integer `size` 1–1,000,000,000 bytes.
- `records`: 1–32 objects: unique `id` ≤100, nonblank `fileNote` ≤200, integer `start` ≥0, positive integer `length`, end ≤1,000,000,000. Reviewed end must not exceed matched file size.

Source ≤60,000 characters; source/audit JSON files ≤16 MB (larger envelope allowance for expanded review/evidence). Reviewer notes ≤2,000 characters. Duplicate IDs, malformed JSON, bad/oversized/unsupported inputs and invalid numbers are rejected.

- JSON: `chunk-harbor/1`, every original, review/evidence and ready/held analysis including interval witnesses. Reimport restores originals only; renew AI and reviews.
- CSV: one row per original part, source offsets/lengths, AI/reviewed identities, review decision and notes. Formula-like strings are apostrophe-guarded including multiline text; numeric fields stay numeric.
- Ranges CSV: merged missing intervals with inclusive endpoints, length and nonexecuted range notation; explicit COVERED rows. Disabled while held.
- Markdown/clipboard: readable worksheet plus full current audit.

## Development and validation

React + Vite, base `/daily-app2/20261123-3/`. `npm install`, `npm run predeploy`. Required per-app scripts `predeploy: npm run build`, `deploy: gh-pages -d dist` exist, but **publish only through collection-root combined-site predeploy/deploy**.

See [VALIDATION.md](VALIDATION.md) and machine-readable reports. Browser success tests use real default inference, never mocks. Fault injection is limited to failure/stale-result tests. Independent Python parses actual downloaded JSON/CSV/Markdown; 1,000 randomized byte-array oracles check the deterministic interval sweep. Production and public asset hashes, public real-AI workflow and gallery are required before marking publication complete.
