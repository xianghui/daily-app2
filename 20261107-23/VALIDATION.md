# Anchor Desk — observed validation

## Local production bundle

- React/Vite `npm run predeploy` passed. Runtime worker and WASM factory are local; shared binary matches installed ONNX WASM SHA-256 `49871f5a4409519797e127440868a6d1923339d9185907f301a5b2a1d90af082`.
- Real MiniLM WASM CPU inference in headless installed Chrome on macOS; no mocked successful inference. Garden fixtures matched 4/4 expected destinations (watering, compost, pests, watering). Distinct bicycle workshop fixtures matched 4/4 (brakes, punctures, gears, brakes). Source fixture truth was specified before running; these eight easy examples are not an accuracy benchmark.
- Garden semantic plan selected four links, cosine sum 2.543; lexical-overlap baseline selected one, sum 0.713. Counts and scores are actual model calculations, not quality percentages or confidence. Sum favors selecting more links. Both use identical deterministic budget/self-link/duplicate-target guards.
- Full batch: 24 anchors plus 16 destination descriptions = 40 texts / 10 inference batches. All 24 source records and 16 destinations survived export; finite 24×16 cosine matrix. A one-link-per-source setting retained all rows while selecting exactly two links across two sources.
- Applied-review gating, note editing (including quoted/newline/formula-looking synthetic text), changed destination, reject all, restore AI, undo, and removal of stale exports after edits passed. A duplicate destination edit blocked application. An additional real-inference browser check verified a self-link edit blocks application and a 0.99 threshold preserves all rows unlinked. Core tests additionally cover self-link and over-budget rejection, safe URL restrictions, exact anchor occurrence and Markdown escaping of syntax/URL parentheses.
- Actual downloaded JSON was parsed by Node and independently Python; all exact original source fields and all records preserved. Markdown downloads were parsed for expected reviewed anchor/URL pairs and sections, unlinked output had no inserted links, and clipboard text equaled the reviewed download. Exported JSON original-input reimport/re-inference passed; saved decisions intentionally are not restored.
- Network capture from page startup through inference showed no remote request before loading. Subsequent remote traffic was only GET/HEAD model file downloads, without user-content bodies or inventory URL requests. Built text assets scanned for common key formats with no matches; source has no remote-provider integration or shared credentials.
- Online first load, cached online reload, and **fully offline fresh-worker inference** in the open page passed with exactly equal garden scores. This does not test or promise offline navigation/reopening.
- Empty, invalid JSON, excessive input/file size, missing anchors, invalid constraints and unsupported file extensions rejected. Cancel/retry, cancelling an active model download/retry, replacing input while processing, delayed cancelled-worker messages and delayed file reads did not overwrite new input/results.
- Actual model-network abort and WASM abort displayed errors without fabricated outputs; retry after restoring network/runtime passed. Defensive fault injection separately exercised unavailable Worker/WASM, worker construction/execution error, malformed vectors and shortened 180-second timeout. Successful inference tests use the real unmodified worker/model, not injected vectors.
- Desktop 1440 and narrow 390/320 CSS-pixel layouts have no horizontal overflow, working labelled controls and keyboard focus. Screenshots inspected; viewport screenshots supplement full-page capture artifacts on this Chrome host. Physical phones, memory-constrained devices and other browser engines remain untested.

Evidence: `browser-validation.json`, `browser-test.log`, `core-test.mjs`, `artifact-validation.json`, `asset-audit.json`, synthetic `export-*` artifacts and viewport screenshots.

## Collection validation

All gallery inline scripts compile with `new Function`; new AI-utility entry occurs once, first category is AI Utilities, old 514 entries remain byte-preserved as entries. Gallery browser check rendered 515 cards and preserved STL Generators and Mini Games; search located the new app. Root predeploy assembled the gallery plus all 515 app indexes, with zero failures/skips and byte-identical new app assets. Root deployment, not individual app deployment, is used.

Public validation is recorded separately in `deployment-validation.json` and `public-evidence/`; publication is complete only if those checks succeed.
