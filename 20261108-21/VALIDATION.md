# Observed validation — 2026-11-08

## Production bundle, local Chrome

- Real quantized MiniLM WASM inference, not mocked: Museum welcome matched `welcome → photos → donate` with the final bus digression off-script; safety remained unconfirmed. Software onboarding matched `login → import → backup`, leaving the coffee digression off-script and invite unconfirmed. All six simple expected links, two off-script decisions and two gaps matched fixture expectations. This tiny set does not estimate general accuracy.
- Museum above-floor positional baseline: 1 pair; ordered semantic proposals: 3. Software: 3 vs 3. These are computed structural counts, not claimed productivity or accuracy gains.
- Negation challenge: “Flash photography is allowed in every gallery” still links to the no-flash cue. This is a known semantic limitation; human review is required. Instruction-like hostile text was preserved as inert data with no upload or credential action.
- Maximum 24 script + 24 transcript records processed in four-text batches; every record survived JSON export and original-input reimport. Finite normalized 384-vector schema enforced. No input text was lost.
- 120 deterministic small matrices compared against exhaustive ordered-alignment oracle; duplicate/crossing links and pending reviews blocked application.
- Reviewed link changes reset approval; undo restored the prior review. Hold, note edit, disabled stale exports, applied JSON/CSV/Markdown and clipboard equality checked.
- Independent Python CSV/JSON parser checked both source sides, current reviewed decisions/cues, quoted multiline fields, formula-like source and notes, and complete Markdown audit.
- Fresh-worker real inference succeeded with the browser context offline after online caching. Offline reload/startup is explicitly not promised.
- Empty/malformed/oversized JSON, invalid threshold, duplicate IDs, too many/long records, unsupported and oversized imports rejected.
- Cancel/retry, input-change invalidation, stale failed fetch and late cancelled worker output checked. Worker network abort, model-host abort and WASM-factory download abort yielded visible errors and no fake results; restoring network allowed real inference.
- Malformed-vector, unsupported runtime, worker crash and timeout UI paths fault-injected; successful inference tests always used the real model. Physical unsupported devices were not tested.
- Chrome desktop plus emulated 320px and 390px layouts: no horizontal overflow, labeled controls, visible keyboard focus, touch-sized controls and reviewed exports passed. Screenshots saved. Physical phones, Firefox and Safari unverified.
- Request capture from app startup through inference showed only GET file downloads, no POST/body, and no user-content URL transport; no model host requests before explicit load. Static text assets scanned for common credential patterns; source contains no remote provider/key integration. Pattern scanning is not an exhaustive secret detector.
- Root inline scripts compile using Node `new Function`, the new AI-utility entry appears once and all prior gallery entries remain byte-identical in order. Local real-browser gallery render and narrow layout checked.

Evidence: `browser-validation.json`, `core-validation.json`, `network-validation.json`, `boundary-validation.json`, `artifact-validation.json`, actual `export-*` files and `asset-audit.json`. Public hosting and runtime verification are recorded separately when complete; a branch push alone is not proof.

## Public GitHub Pages verification

Matching gh-pages commit `cfe56b66a0f4d1771b9315753be023687e09a488` reached **built**; the Pages workflow completed successfully. The public index, app assets, worker, local WASM factory and immutable shared WASM hash-match the validated production files. Public gallery renders the new entry once with all 536 previous entries preserved.

All 13 browser workflow/defensive checks were rerun against `https://xianghui.github.io/daily-app2/20261108-21/`, including both real-model fixtures, fresh-worker offline inference, maximum batching, current exports and narrow layouts. Independent parsing of downloaded public CSV/JSON/Markdown confirmed current reviewed fields and complete source sequences. See `public-evidence/`, `public-assets-validation.json`, `public-gallery-validation.json` and `deployment-validation.json`.
