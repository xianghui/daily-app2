# Observed validation — Looprate Desk

## Production-bundle local checks

- React/Vite `npm run predeploy` passed. Real CPU inference used the default downloaded MiniLM model with GPU disabled. No mocked successful results.
- Two different fixtures: jazz/electronic requests → BRUSH/SYNTH; percussion/jazz requests → CONGA/BRUSH. **4/4** small known-answer clip links matched. Both catalogs yield different source rates/beat counts and different computed plans. This tiny synthetic result is not general accuracy.
- Maximum 12 requests + 8 catalog clips retained, 20 texts in five real inference chunks; maximum exported JSON reimport preserved originals. All source rows survive audits, including held/blocked ones.
- All nine numeric review fields and multiline notes edited, applied, downloaded and undone; relink resets metadata/approval; holds preserve rows and block Conform CSV; pending approval blocks apply. Edits invalidate old exports. Clipboard and JSON/CSV/Markdown downloads reflect current values. Formula-like multiline notes retain quoted commas, quotes and line breaks.
- Python Fraction independently replayed **603** deterministic cases with **4,221** assertions for beat repetition, duration ratios, output-frame rounding and pitch/status. No failures. Python csv/json independently reopened real browser downloads and checked reviewed values and original-row conservation (counts in each artifact-validation.json).
- Actual worker/model-host network aborts showed errors without fake results. Unsupported Worker/WASM, constructor/worker errors, malformed vectors and accelerated 180-second timeout fault injections passed. Cancellation during worker fetch and inference prevented late results; real retry succeeded. Delayed schema-valid old vectors/errors cannot overwrite a newer real inference; delayed imported files cannot overwrite new source.
- Eighteen invalid/empty/oversized sources plus invalid file extension/size rejected. Nonwhole repeat, duration-ratio and varispeed-pitch guards block operational conform output while complete audits remain available.
- Real inference with a **fresh worker, entire browser context offline, already-open warmed page** passed. Cold-offline navigation/reload is not implemented or claimed. No WebGPU required; desktop Chrome CPU only verified, physical phones/other engines untested.
- Request capture found asset GETs only, no bodies or source notes in URLs; no model-host requests before explicit model action. External traffic limited to documented Hugging Face model-host/CDN downloads. Built text credential-pattern scan clear; source inspected: no credential or remote inference integration. This is not a universal secret-scanner guarantee.
- Desktop 1440px and narrow 390/320px layouts passed overflow, labels, keyboard traversal and ≥44px input/button target checks; normal viewport screenshots saved and visually inspected. No JS page errors.

## Limitations exposed by probes

An explicit electronic-not-jazz probe retrieved SYNTH. An unrelated instruction-like note retrieved BRUSH because nearest-neighbor matching always chooses one catalog candidate. No instruction ran or content uploaded. This demonstrates the need for mandatory human approval/hold, not prompt-following or semantic correctness. MiniLM may still mishandle other negations or unfamiliar clip descriptions. No fabricated confidence percentages or measured quality/time claims.

Metadata is supplied, not inferred from sound. Beat count and frame/rate mistakes cause wrong worksheets. No listening quality, transient alignment, fractional-loop cuts, per-repeat boundaries, physical audio rendering or DAW import interoperability tested. Pitch-preserving mode describes intended edit behavior, not achieved pitch quality.

## Collection and public release

All 917 previous gallery entries remain byte-for-byte equivalent as parsed objects; new entry appears exactly once first with area ai-utility. All inline scripts compiled with Node new Function. Gallery rendering/search/old categories checked at 1440/390/320px. Root combined assembly built 918 apps with no failures/skips and kept the existing runtime-sharing rules and size guard unchanged. Shared runtime hashes verified; originals read-only.

Publication status and public verification evidence are recorded separately after deployment. A branch push alone is not considered a pass.

Assembly-specific results: 597 independent downloaded-artifact assertions passed; all 10 defensive cases plus real network recovery/stale-run and import-race checks passed against the combined deploy tree. Combined site size **824,948,600 bytes**. Existing sharing rules unchanged; three immutable shared runtime hashes match.

## Verified public release

Pages commit `19e3b840cd65a2267cf470fae67a969a001abe4d` reached **built** with successful workflow **45971358342**. Nine public files (gallery, app assets and shared runtime) match the assembled bytes exactly. Full public real-model workflow passed: both fixture sets (4/4 known links), maximum-batch conservation, review/edit/hold/undo, actual downloads and clipboard, fresh-worker offline CPU inference, GET-only privacy, input/network/runtime defenses, cancellation/retry, newer-run protection and delayed-file guards. Independent public export replay passed **597** assertions. Public gallery renders **918** cards, preserves old categories and search, and passes narrow layouts. No digest sent.
