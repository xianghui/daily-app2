# Chord Ledger — 20261128-16

A local-only shortcut migration workbench for desktop-app keymap maintainers. Rough command notes are semantically linked to an action catalog; reviewed links drive an exact prefix-safe minimum-change assignment. This is not a chat interface and does not install shortcuts or control any application.

## Workflow
1. Load either **synthetic** example or paste/import source JSON. Set a single shared context, 2–8 described actions with 1–3 allowed choices each, and 1–8 command records with original current bindings.
2. Explicitly load AI. MiniLM infers action identities from meaning, rather than exact labels. Inspect ranked descriptions/cosine evidence, correct action identities and current bindings, optionally pin an offered shortcut, and approve or hold every record.
3. Apply the review. An exact search (at most 3^8 assignments) rejects equal bindings and one-stroke prefixes of two-stroke chords. Duplicate approved action identities block the plan. It minimizes changes from reviewed current bindings, then total strokes, then lexical shortcut order. Holds are excluded from planning and both comparison counts, but remain in audits.
4. Inspect computed current-conflict witnesses, planned conflicts and changed-binding count. Export the current snapshot as full JSON, CSV or plain Markdown; copy Markdown or export **neutral-keymap-v1** JSON with action IDs and ordered key-stroke arrays. The latter is a planning handoff, not a native VS Code/editor configuration. At least one approved record and a feasible plan are required. Edit invalidates exports; undo restores the last review state, then apply again.

Source/audit JSON import restores original inputs, not prior approvals; rerun inference. No automatic local saving. Export before closing. CSV uses RFC-style quoted fields/CRLF and prefixes leading `= + - @ TAB CR` text with an apostrophe to reduce spreadsheet-formula execution. Raw text remains exact in JSON/Markdown.

## Real AI and runtime
- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), quantized ONNX q8, Apache-2.0; upstream sentence-transformers/all-MiniLM-L6-v2.
- Runtime: Transformers.js **4.3.2**, ONNX Runtime Web WASM **CPU**, one thread. Normalized mean-pooled 384-dimensional embeddings; deterministic cosine ranking after genuine transformer inference. No model-generated commands, tools or external actions.
- First run: approximately **23 MB** model/tokenizer from Hugging Face and its CDN plus **27 MB** same-origin runtime, about 50 MB total; adequate device memory and internet needed. Modern WebAssembly SIMD, module workers and browser storage. Desktop Chrome CPU tested. No WebGPU required; physical phones/other engines unverified.
- Immutable same-origin dependencies: `20261115-6/assets/ai.worker-lkOoPoq8.js`, `20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`, `20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve these earlier apps and paths. `runtime-provenance.json` records exact hashes; the production/public asset audit checks them.
- Worker protocol: `{id,texts}` → progress/batch/result messages, vector count/order/dimension/finite/normalization validation before applying suggestions. Chunks of four; at most 16 short strings. Descriptions and notes are bounded to 200 characters. The shared pipeline passes max_length 256, but the pipeline's tokenizer actually enforces its model_max_length **512**; no stricter token guarantee is claimed. These short inputs remain bounded.
- Explicit load, per-file progress, batch counts, cancellation, 180-second timeout and actionable failures. Cancellation terminates the worker and aborts pending worker fetch. Run IDs prevent late callbacks and delayed imports overwriting newer inputs. No fake fallback.

## Privacy, caching, offline scope
Default content stays on the device. Only static runtime and model GET requests occur; notes are passed to a browser worker, not a server. No API keys, analytics, optional provider integration, uploads, credentials or real personal fixtures. Imported text is treated as data, never tool authority. React escapes displayed text; Markdown is downloaded/copied as text, never rendered imported HTML.

Cache API stores the worker source, CPU factory and WASM; the runtime caches model/tokenizer assets. After a successful online run, **fresh-worker inference in the same already-open warmed page** was tested with all network disabled. Offline navigation, reload and cold startup are **not** supported or claimed. Cache eviction/denied storage requires internet again. First-run model downloads require explicit processing.

## Formats and hard limits
Source: `{title,context,actions:[{id,description,options}],records:[{id,note,current}]}`. IDs unique per table, ASCII letters/digits/underscore/hyphen ≤24. Title/context ≤100 chars. Source ≤30,000 chars, import envelope ≤1 MB, reviewer note ≤1,000 chars. Controls/broken Unicode rejected.

Shortcuts: canonical Ctrl/Alt/Shift/Meta modifiers; A–Z, 0–9, F1–F12, Enter, Escape, Space, Tab or ArrowUp/Down/Left/Right; one or two space-separated strokes. Modifier order normalizes; duplicate modifiers, unknown keys and >2 strokes fail. No punctuation/layout parsing. Offered normalized choices must be distinct.

## Limitations
Semantic nearest-neighbor retrieval always proposes something, even for unrelated or negated text. Cosine is not confidence; human review is mandatory. Different actions may receive the same nearest identity; correct or hold duplicates. No contextual `when` clauses, timeout chord semantics, multi-action aliases, OS/browser reserved keys, physical layout compatibility or actual usability measurement. Prefix safety is conservative under an explicitly eager shared-context policy, not a universal application behavior claim. Zero planned conflicts means only the defined equality/prefix checks pass. Current versus planned pair counts are computed, not accuracy/time-saving percentages.

## Build/deploy
React + Vite; base `/daily-app2/20261128-16/`. `npm run predeploy` builds the app. Required per-app `deploy` exists, but **do not invoke it for publication**: publish the complete collection through the root predeploy/deploy workflow. No original daily_app files modified. See `VALIDATION.md` for observed checks; scripts and synthetic artifacts are reproducible.
