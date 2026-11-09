# Observed validation — 2026-11-09

## Production-bundle checks

- `npm run predeploy` passes; React/Vite production worker/runtime paths load.
- Real CPU/WASM MiniLM inference, no API key: Carpentry batch 6/6 expected material proposals; Fabrication batch 6/6. This is a tiny easy synthetic fixture, not measured general accuracy.
- Both approved plans use 3 stock lengths vs next-fit baseline 4. Carpentry balances 2800 finished + 30 kerf + 200 unused = 3030 mm. Fabrication balances 3400 + 30 + 200 = 3630 mm. Metrics compare computed plans, not measured cost/time gains.
- Independent brute-force optimizer comparison: 100 deterministic cases, all minimum-board counts equal. Held conservation, pending decision gate and overlength blocking pass.
- Negation challenge: “Do not use pine wood … No wooden framing battens are allowed; … unrelated catering request” still retrieves pine (cosine ~0.739). Similarity is NOT material eligibility. Human review/holds are mandatory.
- Maximum 6-stock/12-piece input: 18 embeddings processed in four-text batches; every approved piece allocated once; JSON reimport retains all originals and requires fresh review.
- Pending application blocked. Material edit resets approval; undo restores it. Hold and reviewer note edit reflected in current exports. Every review edit disables stale exports.
- Actual browser downloads of JSON/CSV/Markdown independently parsed with Python; all 6 records survive, including a held piece and formula-leading multiline quoted note. CSV formula escaping verified; original text/lengths and board assignments retained. Clipboard equals exported Markdown.
- After initial cache fill, all network disabled: terminated model worker recreated and completed fresh real inference inside already-open page. Offline reload/navigation NOT tested or promised.
- Model host aborted in a clean browser context: actionable error, no proposals; network recovery succeeds with real inference. Actual ONNX weight download paused then cancelled; real retry succeeds.
- Empty/null/malformed JSON, missing arrays, duplicate IDs, excessive piece counts/text, zero length, negative kerf, oversized source and unsupported CSV import rejected. An oversized approved cut blocks plan application.
- Cancellation, rapid input replacement, run retry and late stale callbacks do not overwrite current results. Injected malformed vector, unsupported-WASM error, module-worker absence/crash, and timeout surface failures and recover. These defensive fault checks are injection, not successful AI evidence.
- Desktop and 390/320 CSS-pixel phone layouts checked for overflow, focus and working review/export controls. Screenshots saved; narrow layout visually inspected. Physical phone performance/other browser engines untested.
- Browser network recording covers startup through real inference: only GET asset downloads, no request bodies, only same-origin and documented Hugging Face/CDN hosts. No model-host request before Run; representative input text absent from request URLs. Built JS/HTML/CSS/mjs credential-pattern scan clear. This plus source inspection is not a mathematical secret scanner guarantee.

## Evidence

`browser-validation.json`, `core-validation.json`, `export-validation.json`, `network-validation.json`, `cancel-download-validation.json`, `bundle-audit.json`, `defense-validation.json`, actual downloaded `export-*` files and screenshots. Public hosting verification recorded separately after root deployment.

## Public publication verified

Root `npm run predeploy`: 552 builds copied, zero failures/skips, every gallery app present. Root `npm run deploy`: Published; Pages commit `0e4d644c9661b62a72f6d6d25f9265c365906c36` reached `built`. No rebuild fallback required.

Public https://xianghui.github.io/daily-app2/20261109-13/ passed the complete real-inference browser suite on both fixtures, offline fresh-worker inference, max batching, review/undo/hold, exports/copy, malformed/timeout/stale defensive checks and desktop/narrow layouts. Downloaded public artifacts were independently parsed again. Root gallery, app assets, worker, runtime factory and shared WASM matched local SHA-256 byte-for-byte; all 551 older gallery records remain unchanged, all categories intact. See `public-validation.json`, `public-browser-validation.json`, `publication-status.json`, `local-deploy-validation.json`, `gallery-validation.json`.
