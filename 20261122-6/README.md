# Return Passage

For workflow operators reconciling rough handoff/rework logs. Paste/import JSON, define 2–8 state descriptions and terminal flags, pick a nonterminal start, and supply 1–40 observed transitions (from/to descriptions plus positive integer counts). Run local AI, review **every** endpoint and count, approve or hold, apply, then export JSON/CSV/Markdown or copy a worksheet. Field edits invalidate exports and reset approval; undo restores reviews. Any hold withholds the forecast. Originals are retained; audit JSON reimport restores originals only, requiring fresh inference/review.

## Real AI and deterministic boundary

Xenova/all-MiniLM-L6-v2, Apache-2.0, quantized q8 ONNX, [model/source](https://huggingface.co/Xenova/all-MiniLM-L6-v2). Transformers.js 4.3.2 / ONNX Runtime Web single-thread WASM CPU. Mean-pooled normalized 384-dimensional neural embeddings reconcile endpoint paraphrases against **user-supplied state descriptions**; cosine ranking exposes the nearest three candidates, not confidence. No canned AI, remote providers, keys or generative claims. Imported text is data.

A shared immutable same-origin worker from `20261115-6` runs four texts per chunk; tokenizer model_max_length is 512 (not a promise based on pipeline max_length). Preserve its worker/factory and shared `20261107-2` WASM; exact paths/hashes in runtime-dependency-audit.json. Reusing the full runtime avoids duplicating 27 MB in this nearly-full collection.

After review, deterministic code aggregates all outgoing observed counts into transition probabilities, blocks terminal outgoing edges, missing nonterminal observations, nonabsorbing closed classes and unstable systems, and solves `(I-Q)t=1`, `(I-Q)^T v=e_start` and terminal absorption systems with pivoted elimination. It verifies finite outputs, residual ≤1e-7 and terminal probability sum. Expected handoffs equal expected nonterminal visits. Baseline is one visit to each reachable nonterminal stage: a deliberately simple map-count shortcut, **not a lower bound**. Branching can give a negative difference. No fabricated speed/accuracy improvement.

## Downloads, privacy, supported devices

Before explicit run, no model requests. Initially internet downloads about 23 MB model/tokenizer from Hugging Face and its CDN, plus 27 MB same-site CPU runtime and bundled app/worker JS. User content never leaves the device in the default path; no analytics or API credentials. Cache API retains downloads when supported. Fresh-worker real inference with all network disabled is tested in a warmed already-open page. **Offline startup/reload is not promised.** Storage eviction/private mode can force redownload. Cancel terminates the worker and run IDs discard late results; retry uses cached files where available. 180-second timeout and actionable errors, never fake output.

Desktop Chrome headless with GPU disabled was tested. Requires HTTPS/localhost, WebAssembly SIMD, module workers, and several hundred MB RAM. No WebGPU required. Other browsers and physical low-memory phones were not tested. The 320/390px layouts are browser simulations, not device performance claims.

## Formats and limits

Synthetic examples: Editorial desk and Repair bench. Source JSON ≤60,000 characters, descriptions ≤200, state IDs ≤50, title ≤200; 2–8 distinct states, 1–40 transitions. Counts integers 1–1,000,000; expected handoffs capped at 1,000,000. Notes ≤2,000 characters. Source/audit import .json ≤8 MB. Other formats rejected. JSON and Markdown preserve complete inputs, evidence, decisions and analysis. CSV preserves all original/reviewed rows, counts, notes and holds; quoted delimiters/newlines round-trip and spreadsheet-formula-like strings are prefixed with an apostrophe. JSON remains lossless. Exports always reflect the applied reviewed snapshot; edits disable them.

## Assumptions and limitations

These are descriptive stationary, memoryless transition scenarios—not guaranteed completion, elapsed-time estimates, causal effects or process-control instructions. Counts must be comparable transitions, not population totals; history-dependent paths, selection bias, missing exits and changing policies invalidate the model. All nonterminal catalog states require observed outgoing handoffs, even if unreachable from start. Nearest semantic matching always produces a candidate, including unknown/negated text. Human review is mandatory. The editorial fixture has one real error; see VALIDATION.md. Changing catalog/terminal/start definitions requires editing originals and rerunning. No external actions.

## Development/publication

React + Vite; `npm install`, `npm run dev`, `npm run predeploy`. Base `/daily-app2/20261122-6/`. Required per-app gh-pages scripts retained, but publish **only** with repository root predeploy/deploy to preserve the collection. Browser tests use workspace Playwright and system Chrome. See test scripts, JSON reports and VALIDATION.md for observed checks; successful build alone is not AI validation.
