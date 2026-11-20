# Observed validation — Factor Grove

## Real AI quality (not universal accuracy)

Actual production Vite bundle, current desktop Chrome headless with GPU disabled, shared Transformers.js/ONNX WASM worker and real downloaded MiniLM weights. Workshop drying and Parcel handling both matched all 8 intended condition links (16/16 total on tiny synthetic fixtures). A same-ID run changed to another condition's wording changed its neural proposal; its resulting imbalanced design was blocked. All suggestions require human review.

**Known failure retained:** “Paint misted with a spray gun; left to dry in the room without airflow” should map to ambient spray `cell1`, but mapped to warm-fan spray `cell3`. This first surfaced during development; the runnable example now uses affirmative ambient wording. `browser-validation.json` retains a separate failing known-answer challenge. MiniLM does not reliably handle negation or distinguish every crossed combination. Human holds and checks are essential. No confidence percentages or real-world accuracy claims.

Fixture contrasts: drying main application +6, air +4, interaction +16 minutes; additive-only cell-mean RMSE 8, within-cell repeat RMS 1. Parcel handling −4, +8, −10 minutes; RMSE 5, repeat RMS 2. These are exact planted descriptive calculations, not measured productivity savings or predictive accuracy.

## Independent calculations and workflow

`core-test.mjs` independently checks 1,200 seeded balanced 2/3-factor datasets by direct positive-group minus negative-group means, full Walsh reconstruction and within-cell residual sums. Checks cover missing/unequal cells, malformed/duplicate designs, invalid input/vector shapes/norms and review gates.

`browser-test.cjs` executes both actual default AI fixtures, pending-review blocks, current JSON/CSV/Markdown downloads, formula-like multiline review notes, clipboard equality, signed numeric editing and undo, hold retention with no fabricated contrasts, original-only audit import, 80-record/84-text real inference in 21 worker chunks and maximum audit reimport. It changes source semantics and verifies changed neural assignment, tests invalid/empty/oversized inputs/files, cancels then retries actual inference, and checks stale invalidation. `artifact-test.py` independently parses actual CSV/JSON files and validates every row, source identity, cell calculation and escaped field.

`defensive-test.cjs` aborts model/worker downloads and tests runtime without WASM, module-worker constructor failure, worker error, malformed envelope/vector messages, accelerated timeout, late cancelled and stale-input messages. Failure injection applies only to defensive cases, never passing inference. No fake results appear; a genuine model retry after network failure succeeds. `cold-cancel-test.cjs` gates a first model download, cancels before completion, releases the request and verifies no stale result then a real-model retry.

## Privacy, assets, caching and layout

Default requests are captured from initial production navigation through processing; no model request before explicit load, all HTTP requests are asset GETs without bodies, and persisted network reports include only hosts/paths/query names, never signed CDN tokens. Only the local/public origin and documented Hugging Face/CDN hosts are allowed. Source inspection finds no remote inference or credentials; built JS/HTML/CSS credential-pattern scan is recorded, not claimed exhaustive.

Real fresh-worker inference succeeded with network disabled in a warmed, open page. Worker source/factory/WASM and model Cache API dependencies are audited, including actual tokenizer ceiling, runtime version and hashes. Offline reload/navigation is untested and not promised.

At 1440, 390 and 320 CSS-pixel viewports: input, review and results actions work, no horizontal overflow, all fields have explicit labels, buttons are ≥44 px high, keyboard focus works and normal viewport screenshots are recorded. Narrow screenshots were visually inspected. Physical phones and other browser engines/accessibility readers remain untested.

## Collection/publication

The pre-existing gallery entries/categories and unrelated workspace edits must remain intact. Root gallery inline scripts must compile, the new ai-utility entry must appear once, the assembled collection must stay below its unchanged 1 GB guard. Assembly and public asset/gallery/inference evidence are separate reports; no branch push alone is treated as public success. See publication-status.json once the deployment has settled.

### Public release verified

Matching Pages commit `ed29f7daa16739eb386353cba6d1c8ddf421d54a` is built; workflow `44760651535` succeeded on the first publication. Nine public app/gallery/worker/factory/WASM files match the assembled bytes. The full browser suite passed at the actual public URL, including both real-model fixtures, the retained failed negation challenge, current artifacts, 80-record batching and fully offline fresh-worker inference in a warmed page. All 757 gallery cards and earlier categories passed. Actual downloaded public artifacts were parsed again with Python. Combined site: 999,889,152 bytes, unchanged <1 GB guard; no new legacy sharing rule. Source staging excludes unrelated pre-existing work. No digest sent.
