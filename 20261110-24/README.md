# Deadline Foundry

A project-expediting worksheet for small teams comparing independent rush-work offers. The bottleneck is linking informal quote descriptions to structured tasks, then avoiding paying to accelerate tasks that do not move the overall finish. Real local AI proposes links; a human verifies them; exact deterministic discrete project crashing finds the cheapest deadline-feasible offer combination. No orders, messages or account changes occur.

## Workflow

1. Load **Print launch** or **Workshop opening**, or paste/import JSON. Supply the relative deadline, task durations/dependencies and individual expediting offers. All included data is synthetic.
2. Press **Load AI & link offers** explicitly. Review source snippets, task definitions and ranked semantic similarity (not confidence). Correct task links, integer days removed, cents and notes. Every offer must be approved or held. No automatic approval.
3. Verify finish-to-start dependencies, independent offer availability and elapsed-day estimates. Confirm the model assumptions. Apply the reviewed plan.
4. Inspect the no-expediting baseline, minimum-cost feasible schedule and selected offers. Infeasible deadlines are blocked; the fastest combination is diagnostic, not a feasible promise. Editing any review or confirmation invalidates exports. Undo restores review states. Input edits terminate/invalidate inference and clear reviews.
5. Download current JSON, CSV or Markdown, or copy Markdown. Originals, held offers and unused offers remain in the audit. Importing an audit restores original input only; approvals must be renewed. Everything is in memory: export before closing.

## Real AI and privacy

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized q8 ONNX; [original sentence-transformers source](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2). Runtime: Transformers.js 4.3.2 / ONNX Runtime Web, single-thread WASM CPU. No API key, WebGPU, paid provider or server-side inference required. No optional remote inference exists.
- Learned mean-pooled normalized 384-dimensional embeddings compare supplied task descriptions with every offer description. Four texts per batch, first 256 tokens, finite dimension/count/norm validation. Task/cost/schedule rules are deterministic **after** inference and human review, not advertised as AI. Inference is real, never a canned response or regex fallback.
- Initial explicit loading requires internet: approximately 23 MB model/tokenizer files from huggingface.co / hf.co and redirected Hugging Face file hosts, plus approximately 27 MB same-origin runtime. App and worker are locally bundled. Immutable byte-identical shared WASM at `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm` must be preserved. The upstream model main revision is not pinned; upstream changes/cache eviction can change results/downloads.
- Input, vectors and reviews stay in browser memory. Network inspection observed only GET file downloads with no request bodies, no input in URLs and no model requests before explicit loading. No telemetry, credentials, remote content processing or vendor contact. Imported instructions are text data and have no tool authority.
- Worker source, runtime factory and WASM are explicitly cached with Cache API; model assets use Transformers.js caching. Fresh-worker offline inference was actually tested after one online success **within an already-open cached page**. Offline navigation/reload is NOT promised. Browser eviction or disabled storage can require a new download.
- Tested desktop Chrome on this macOS host; requires module workers, WebAssembly SIMD, Cache API and several hundred MB of available memory. WASM CPU works without WebGPU. Physical phones, Safari/Firefox, low-memory hardware and offline reload remain unverified. 320/390px layouts are emulated, not physical-device certification.
- File download progress, inference batch counts, cancellation and a 180-second timeout are exposed. Cancel terminates the worker. Run identity guards also discard stale file reads, worker source fetches and responses. Network/download/runtime/malformed-vector errors show retryable errors without fabricated output.

## Schema and limits

JSON only, no CSV/PDF input. Original JSON ≤40 KB; audit import ≤1 MB. `name` ≤80 chars, `currency` uppercase three-letter label (no conversion), `deadline` integer 1–10,000 elapsed days. `tasks`: 1–8 objects with unique alphanumeric/underscore/hyphen `id` ≤40 chars, `title` ≤80, `description` ≤400, integer `days` 1–365, and `after` array of existing distinct task IDs. Self-links and cycles rejected. `offers`: 1–16 objects with unique `id`, `text` ≤400, integer `daysSaved` 1–364 and `costCents` 0–100,000,000. See examples in `src/core.js` or UI.

Every approved offer's reviewed reduction must leave at least one day on its task. All offers, including holds, retain bounded numeric fields and originals. Review notes ≤400 chars. Positive IDs resolve against tasks; no arbitrary execution or dynamic source evaluation from input.

## Deterministic schedule assumptions

Exact enumeration picks zero or **one** approved offer per task; no stacking. For each combination, earliest start is the maximum predecessor finish; finish is start plus reviewed duration. Project finish is the maximum task finish. Among combinations finishing at or before deadline, minimize extra cents, then finish time; remaining ties follow stable input order. Also compute the fastest reviewed combination. Maximum feasible enumeration within limits is 6,561 combinations (two offers on each of eight tasks). No-expediting baseline uses the same DAG and original durations, with zero extra cost.

**Important:** unrestricted parallel resources, integer elapsed days, finish-to-start/zero-lag dependencies, independent offers, no working-day calendar, lag, resource contention, discounts, budget cap, overtime legality, shared crews, probability or uncertainty. No guaranteed completion or real savings claim. These assumptions require human confirmation. A plan is not safe to execute if offers share a scarce crew or affect other task durations. This app does not infer durations, prices, dependencies or contractual equivalence.

The gallery's Dependency Lens derives timing from reviewed prerequisite links; Setup Harbor sequences a single machine. Deadline Foundry instead optimizes a supplied parallel dependency graph over discrete priced acceleration alternatives. It is not a cosmetic variant of either.

## Artifacts

- JSON: original full project, every original/reviewed offer, ranked evidence, decision, note, baseline, optimized/fastest schedules, blockers and computed metrics.
- CSV: every offer's original text/numeric fields, proposed/reviewed task, reviewed numeric fields, status, notes and selection. Full task graph/schedules are in JSON/Markdown, not CSV. Formula-like text is apostrophe escaped, including multiline values; numeric cents/durations remain numbers.
- Markdown/copy: current status, relative deadline, baseline, estimated cost, feasible reviewed schedule and complete offer audit. No feasible schedule is exported for an impossible deadline. JSON remains the lossless source audit.

## Validation and limitations

See [VALIDATION.md](VALIDATION.md) and machine-readable checks. Both tiny known-answer fixtures matched 8/8 intended links, versus 2/8 literal-title hits. This is not an accuracy estimate. Unrelated/negated sources still get a nearest candidate: similarity does not establish intent, contractual equivalence or feasibility. Mandatory review and holds remain essential. Costs and duration reductions are user estimates, not AI facts.

`npm install`; `npm run dev`; `npm run predeploy`. Required per-app scripts remain `predeploy: npm run build` and `deploy: gh-pages -d dist`, but never publish this app alone. Publish only through root `/Volumes/ExternalHD/daily_app2` predeploy/deploy to preserve the collection. Base `/daily-app2/20261110-24/`. Public verification status is recorded separately; branch publication alone is insufficient.

Public release verified at https://xianghui.github.io/daily-app2/20261110-24/ after two Pages synchronization timeouts and a successful third rebuild of the unchanged gh-pages commit. Byte-matched app/worker/runtime/WASM, both real-AI fixtures, all 11 public workflow checks, reviewed artifacts and the preserved 579-entry gallery passed. See `publication-status.json`, `public-validation.json` and `public-browser-validation.json`.
