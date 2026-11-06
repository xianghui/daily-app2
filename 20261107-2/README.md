# Pulse Ledger

A no-key, local-AI survey review desk for workshop/event/service survey coordinators. Import comments → load actual neural sentiment classifier → review/override each lens → choose next steps and owners → apply a complete ledger → copy/download CSV or JSON. It makes first-pass reading queues, not decisions about people. No messages are sent.

## Real AI and limitations

- Model: [Xenova/distilbert-base-uncased-finetuned-sst-2-english](https://huggingface.co/Xenova/distilbert-base-uncased-finetuned-sst-2-english), pinned revision `0b6928efcb76139cae2c6881d49cda67fe119f42`, quantized ONNX `q8` (67,581,197 bytes). Tokenizer/config ~713 KB. Source weights [DistilBERT SST-2](https://huggingface.co/distilbert/distilbert-base-uncased-finetuned-sst-2-english), Apache-2.0. ONNX conversion retains upstream licensing; conversion card does not specify an independent license.
- Runtime: @huggingface/transformers 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT), bundled worker and WASM module/binary. React (MIT), Vite (MIT), Papa Parse (MIT).
- Browser CPU WASM inference; **no WebGPU**, no external provider, server or API key.
- The neural model returns two softmax scores per comment: POSITIVE/NEGATIVE. Deterministic schema validation, raw-score-gap cutoff, baseline counts and export assembly follow it. Text is data, never tool instructions. No fake/demo fallback exists.
- This is an English **binary movie-review classifier**, not an urgency/topic/safety classifier. There is NO neutral class. Factual or mixed comments can receive strong but inappropriate labels; sarcastic and domain-specific comments can be wrong. A review band withholds near ties but cannot detect neutrality. Raw scores are not confidence, calibrated probability of correctness or a verified reason. No fabricated explanations.
- Clear positive/negative fixture tests are separate from factual controls. Do not use to judge employment, health or other high-stakes outcomes. Human review is essential.

## Download, devices and privacy

First run needs internet and ~95 MB transfer before compression: ~68.3 MB model/tokenizer from huggingface.co and its CDN (`*.hf.co`), ~27 MB local runtime. Loading is explicitly initiated with **Load AI & classify**, with per-file progress and Cancel. Requires a recent browser with Workers, WebAssembly SIMD, Cache API for offline reuse and about 500 MB available RAM (guidance, not a measured peak). Desktop Chrome is tested; Safari/Firefox and physical phones are not verified. Model limits are modest but phones may be slow/memory constrained.

User content stays only in browser memory and worker messages; no uploading, analytics, persistent user storage or provider integration. Public model/runtime files use Cache API; no input is placed in URLs or request bodies. Reload loses user work; export first. Cache eviction/private mode may require a new download. No shared or user API keys are needed.

After one successful load, the already-open page can terminate its worker and perform another **real inference offline** using cached worker, factory, WASM and weights. Tested with all network disabled and a fresh worker. Offline app-shell navigation/reopening is NOT promised: no service-worker app-shell cache. Deleting site data clears cached public files.

## Inputs, constraints and review

CSV header exactly `id,comment`, RFC-style quoted commas/newlines supported. 1–40 unique IDs (1–80 characters), 1–500 characters/comment, max file 40,000 bytes and pasted text 40,000 JS characters. Use `.csv`, not spreadsheets/PDF. Model reads up to 256 tokens per comment, four comments per inference chunk; tails beyond model context can be ignored but exact full original is retained. English only. All examples are synthetic.

Review band (0–0.9) withholds the suggested lens if absolute positive-minus-negative score is less than the band. Reviewer choices: concern, appreciation, mixed/factual, unassigned. Select an action and optional owner/note; explicitly mark reviewed. Changing a field clears that row's reviewed checkbox. Original comments cannot be destructively edited; change source and rerun if necessary. Last 30 edits can be undone. Input/constraint changes invalidate results; edits invalidate applied export snapshots. Cancel terminates inference and run IDs prevent stale results/file reads overwriting newer work. 180-second timeout; model/network/schema errors produce actionable failures, not outputs.

**Apply reviewed ledger** snapshots all rows, including unreviewed ones. Visible counts show pending reviews and ownerless follow-ups. Filters affect display only. No irreversible/external actions.

## Useful outputs and comparisons

CSV contains original ID/comment, AI lens, reviewed lens, reviewed flag, action, owner, note and baseline. JSON also retains raw model scores, model provenance and actual counts. Formula-like text starting with `= + - @ tab CR` is apostrophe-prefixed in CSV; exact originals remain in JSON. Download and clipboard reflect the currently applied review; reapply after any edit. All records preserved in source order, including unassigned/unreviewed.

Baseline counts fixed positive words good/great/love/wonderful/delighted against bad/poor/hate/filthy/broken, ties unassigned. It is explicitly a simple non-AI comparison and is never a fallback. AI/keyword disagreements are computed across source records and are NOT accuracy improvements or time-saved estimates. The useful optimization is one batch screening pass plus an editable, complete follow-up queue; no performance gain is invented.

## Build and validation

`npm install`, `npm run predeploy`. Vite base `/daily-app2/20261107-2/`. Per-app gh-pages scripts retained, but **publish only from the collection root** to preserve all older apps.

`python3 serve-test.py` serves the production bundle on port 6178. `node core-test.mjs`; `node browser-test.cjs`; `python3 export-roundtrip.py`. Browser script uses the installed workspace Playwright and Chrome, processes real default weights (two synthetic domains plus max batch), and fault-injects only defensive branches. See VALIDATION.md and browser-validation.json for actual outcomes. Unsupported-runtime tests simulate missing capabilities; no physical device crash testing. Production app assets, live gallery and the full real-inference workflow were rechecked successfully at the public URL; see deployment-validation.json and live-browser-validation.json.
