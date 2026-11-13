# Observed validation — 2026-11-14

## Local production bundle

- Real Chrome headless browser, CPU WASM inference, no mock/default responses. Both examples matched **10/10** intended stage assignments (6 course, 4 library). Additional materially reworded notes matched **6/6**. These are tiny synthetic checks, not general accuracy estimates.
- Course fixture: observed overall conversion 20% → 22.5%; target 40 requires 179 initial opportunities. Forward stage counts 179 → 107 → 80 → 40. First-stage-only baseline chooses 67 and produces just 15 final completions. Library target 30 requires 67; baseline 50 produces 22. All values computed from supplied fixtures, not measured real improvements.
- 1,200 generated scenarios with 2–6 stages matched an independent forward oracle: proposed intake reaches target, one fewer does not. Maximum 6-stage/24-row dimensions, exact BigInt arithmetic, zero-rate sizing block and unbalanced handoffs checked.
- Full browser review suite: mandatory approval, edits to counts/stages/periods, missing cells/handoff mismatch, hold/all-hold, undo, input-invalidated late results, cancel/retry, 24-observation batching, maximum audit reimport, multiline owners/notes, clipboard and actual JSON/CSV/Markdown downloads. Independent Python csv/json parsing checks row identities, reviewed values, original snippets and formula/multiline escaping.
- Actual offline inference succeeded after terminating the previous worker and disabling all network in an **already-open warmed page**. Not an offline-start/reload claim.
- Defensive browser tests: aborted model downloads and successful real retry; aborted local worker fetch, unsupported module-worker constructor, malformed vectors, accelerated 180-second timeout, worker error. No fake output or enabled export on failure. Fault injection only for defensive checks, not successful inference.
- Download cancellation and real retry have their own report. Imported instruction-like unrelated text cannot auto-approve; it still gets a potentially meaningless nearest-stage suggestion requiring hold. This model cannot establish semantic identity or completeness.
- Production startup-to-inference request audit: only GET requests, no request bodies or user text in URLs, documented local/model download hosts; no model download before explicit loading. Built JS/HTML/CSS/MJS scanned for common credential formats; no matches. No provider integration is present. This is code/network inspection plus pattern scan, not a universal secret-detection guarantee.
- Desktop 1440px and narrow 390/320px: no horizontal overflow, labeled fields, keyboard focus, buttons ≥44px, input/review/results screenshots. Phone-width screenshots inspected. Physical phones and other browser engines not tested.

## Reproduce

`npm run predeploy`; serve production paths using `python3 serve.py` on 6772. `node browser-test.cjs`, `node defensive-test.cjs`, `node model-cancel-test.cjs`, `node paraphrase-test.cjs`, `node oracle-test.mjs`, `python3 artifact-test.py`, `python3 asset-audit.py`. Browser test tool dependency is the host's Playwright installation. Recorded JSON reports contain observed assertions; no real user data.

Combined assembly and public verification are recorded separately after publishing. Do not interpret local checks alone as proof of publication.

## Combined-site checks

Root predeploy assembled **651 apps**, zero failures/skips. Gallery scripts compile; new entry appears exactly once, AI Utilities remains first, all 650 earlier entries/categories remain unchanged. Gallery search and desktop/narrow layouts pass. Combined app bundle is byte-identical to its own dist; the full real-inference/workflow suite also passed against the assembled production directory, including a fresh offline worker. Combined deployed size after root runtime deduplication: 978,530,632 bytes.


## Public release

GitHub Pages built commit `f9ce5f54aab8c5107027552a6c32e778cc045b54` successfully on the first deployment. All public app assets, worker, WASM factory and shared WASM byte-match local production files. The complete public workflow suite passed, including both real-AI fixtures, 24-record batches, review/undo/import/downloads, fresh-worker offline inference within the warmed public page and desktop/narrow layouts. Public gallery preserves all 651 entries and older categories. See `public-browser-validation.json`, `public-asset-validation.json`, `public-gallery-ui-validation.json` and `publication-status.json`.
