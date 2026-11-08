# Branch Harbor

A three-way checklist merge desk for operations leads. Start with one common original and two independently edited checklists; real local AI proposes identities despite rewording. Human-approved identity links feed deterministic edit/delete conflict detection. Resolve every unit, then export a current reviewed checklist and a complete audit. No source files or external systems are modified.

## Run and publish

```sh
npm install
npm run dev
npm run predeploy
```

React + Vite; base `/daily-app2/20261109-4/`. Required per-app scripts are `predeploy: npm run build` and `deploy: gh-pages -d dist`, but **publish only through the root combined-site workflow**, never this individual deploy command.

## Workflow / formats

1. Load a synthetic Launch or Community example, paste JSON, or import `.json` under 1 MB. Payload under 50 KB; `base` has 1–8 steps, `left`/`right` have 0–10 each. Each step has a unique simple `id` (24 chars max, within its version) and `text` (1–300 chars). Empty branches mean deletion. No PDF, CSV or document parsing.
2. Explicitly load AI. Cancel terminates the worker. Input changes invalidate runs, review and exports. Retry loads a fresh worker. Timeout: 180 seconds. No fake fallback.
3. Inspect branch snippets, source-base candidates and cosine scores. Correct identities or mark new additions; approve every branch step. Holds block merging. Duplicate approved base targets within a branch are rejected. Changing a target resets its approval; undo is available.
4. Prepare the reviewed merge. Exact strings identify unchanged, one-sided edits/deletions, agreement, competing edits and edit-versus-delete conflicts. Inspect each original/left/right text, choose a source, omission or custom resolution (500 chars max), then confirm every unit. Even non-conflicting suggestions need confirmation. Custom edits reset confirmation; resolution undo is available.
5. Apply the confirmed merge. Any review/resolution change invalidates the export snapshot. Download JSON, CSV, Markdown or copy Markdown. The JSON contains all three originals, all branch identities/evidence/notes, every merge unit including omissions, and the released sequence. CSV contains every merge unit and its source versions, with formula-safe strings. Markdown contains the current release checklist and unit-level merge audit. JSON reimport restores originals for fresh inference, not silent approval restoration.

Output order is original base order followed by left then right additions. Split/merged steps, renumbering intent, dependencies and semantic reorderings are not inferred. Duplicate additions across branches are deliberately not silently collapsed; omit one explicitly. Deleted originals remain in the audit. Every base and branch record is accounted for; an empty release requires explicitly confirmed deletion of every unit.

## Real AI / deterministic boundaries

- Model: [`Xenova/all-MiniLM-L6-v2`](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized q8 ONNX. English sentence embeddings, 384 dimensions, normalized mean pooling, maximum 256 tokens, batches of four.
- Runtime: `@huggingface/transformers` 4.3.2, ONNX Runtime Web 1.31.0-dev.20260914-8d85527a0 WASM CPU (see package lock for actual installed versions). No WebGPU needed and no server-only inference. Vector count, finite values, dimension and normalization are validated.
- AI materially drives semantic alignment. Exact one-to-one maximum-score assignment per branch uses cosine and a 0.38 unmatched/addition score; its optimizer was checked against exhaustive enumeration. This is not calibrated confidence. Exact text three-way conflict detection and output/schema/conservation checks are deterministic.
- Baseline: count of branch records with exact text appearing in base versus reviewed linked identities. These computed counts are not accuracy, equivalence proof or measured productivity gains. Counts use all branches as denominator, including new additions. Known-answer test quality is reported separately.

## Download, privacy, devices and caching

Initial ~23 MB model plus ~27 MB WASM and <1 MB app/runtime code. Internet needed initially; configuration/tokenizer/weights use Hugging Face and its CDN. No shared keys, no provider integration and no optional remote inference. Only static files are requested; user text is posted to a same-origin/local blob worker, not a network API. No input persistence or telemetry. Cache API stores worker source, runtime factory/WASM and model files, not user content. Browser download artifacts may contain sensitive original text: treat them as full audits.

Runtime and worker ship locally. The byte-identical 26,861,777-byte WASM is reused from the collection's immutable `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`; preserve this asset. Factory JS is in this app's `runtime/`. See asset audit for hashes. A fresh worker can perform inference offline in the **already-open page** after a successful cached run while browser caches remain. Offline page reload/navigation is not promised. Eviction or disabled caches require another download.

Supported requirement: a modern browser with WebAssembly, module workers, sufficient memory and preferably Cache API on a secure context. Actual inference is tested in desktop Chrome with CPU, including narrow viewport UI checks. Safari/Firefox/Edge, physical phones and low-memory devices are not tested. Errors explain retry/device requirements; no fallback to fabricated results. Content resembling instructions is inert data and cannot request credentials or invoke tools.

## Limitations and validation

Semantic proximity is not step identity, policy equivalence or correctness: negation can retrieve the opposite action, unrelated additions can be linked, and a global assignment can displace a locally best candidate. Similarity thresholding does not solve this. Manual review is mandatory. No document authenticity checks, team approval tracking, external changes, sending or deletion. See `VALIDATION.md` and machine-readable evidence for actual checks, sample outcomes, privacy/network observations and public deployment checks. No universal accuracy or time-saving claim.

Licenses: `THIRD_PARTY_NOTICES.md` and `licenses/`.
