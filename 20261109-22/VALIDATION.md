# Observed validation — 2026-11-09

## Real AI and known answers

Actual headless desktop Chrome, production Vite bundle, MiniLM q8 ONNX WASM inference, not mocks:

- Desk kits: expected and observed `pen-set, book, pen, sleeve` (4/4), exact-description baseline 0/4. Three kits require three pen modules, six pens, three sleeves and three notebooks. Gross raw units 12; stock used 8; buy 4.
- Plant stands: expected and observed `leg, board, timber, screw` (4/4), exact baseline 0/4. Two stands plus one separate leg require nine legs, nine timber posts, 27 screws and two boards. Gross raw units 38; stock used 25; buy 13. Shared assembly demand aggregates before expansion; subassemblies precede final builds.
- Negation challenge: “Do NOT supply ballpoint blue ink writing pens” still proposed `pen` (wrong). Held explicitly. Similarity is not suitability or intent understanding; mandatory human review remains necessary.
- `core-test.mjs`: 600 seeded random acyclic multi-level BOMs with approved/held lines compared to an independent recursive demand expansion. All part quantities, stock/buy conservation, extended line quantities and partial-plan status agreed. Prototype-like valid IDs (`__proto__`, `constructor`, `toString`) also pass using a prototype-free graph-state dictionary. These are deterministic checks, not model accuracy evidence.

## Browser workflow and artifacts

`browser-validation.json`: 11 passing check groups, no page errors. Mandatory review, corrected selection resets approval, undo, held demanded branch explicitly PARTIAL, multiline quoted/formula-like Unicode note, applied-export invalidation, clipboard equals downloaded Markdown, 10 parts + 16 lines = 26 descriptions in seven four-text batches, eight demand records, JSON audit roundtrip with originals preserved and approval reset.

Cycles are blocked (including a corrected link causing assembly → subassembly → assembly), holding that link yields explicitly incomplete lower bounds. Excessive multi-level quantities are blocked at one billion. Independent Python parsing checks actual browser downloads, every original line, recursive quantities, stock netting, formula-safe multiline CSV, Markdown buy entries and partial warning.

Empty/null/invalid/oversized payloads, missing arrays/labels, duplicate IDs, too many lines/parts/demands, long descriptions, invalid assembly stock, bad reference/quantity and unsupported/oversized files rejected. Input changes/cancel/retry and explicitly delivered stale worker callbacks cannot overwrite newer results. Malformed vectors, worker construction errors, runtime error and accelerated timeout exercised with fault injection only for defensive tests. Successful workflow uses real inference, never injected outputs.

`network-validation.json`: actual model-host download blocked in a fresh context → visible error/no suggestions → unblocked retry executes real inference. `cancel-download-validation.json`: actual model-weight request delayed, cancellation produces no stale suggestions, retry executes real inference. `runtime-validation.json`: real worker bundle with WebAssembly deliberately disabled reports actionable requirement and no output. No WebGPU fallback is needed: actual CPU WASM path is tested.

After online loading, browser context fully offline, worker terminated and a fresh worker created: real inference succeeds in the already-open page. Worker/factory/WASM and model caches exercised. Offline navigation/reload/startup untested and not promised.

Desktop and 320/390px browser layouts: no horizontal overflow, visible labels/focus, >=44px action buttons, usable input/review/export. Screenshots retained and visually inspected. Physical touch devices, other engines, screen-reader audit and manufacturing use untested.

## Privacy / deployment

Network capture begins at production-bundle startup. No model-host requests before explicit load; all captured requests GET without bodies, only same-origin assets or documented Hugging Face download hosts. Source phrase not present in URLs. Reviewed worker: content stays in postMessage and model calls. No remote inference, credentials, analytics or provider endpoints. Credential-pattern scan of built text assets had no hits (not an exhaustive secret-proof claim). Shared WASM byte equality and production asset hashes recorded in `asset-audit.json`.

Gallery scripts, entry conservation, combined deployment and public app/runtime/worker/WASM hash and real-inference checks are recorded in the gallery/public JSON reports and publication-status.json. Local tests alone do not establish publication success.

## Public verification completed

Published combined collection: 561 apps, all 560 previous working-gallery entries unchanged. GitHub Pages build for `aefcffa045e02a7fee0062633c96868c2154fb5b` reached **built**; matching workflow completed successfully: https://github.com/xianghui/daily-app2/actions/runs/42623417216. Public gallery renders AI Utilities first, Assembly Ledger newest, legacy categories/search and app links intact.

`public-validation.json`: public root gallery bytes equal source; app HTML, JavaScript/CSS, actual worker, WASM factory and shared 26.9 MB binary SHA-256 equal the production build. `public-browser-validation.json`: all 11 workflow groups repeated successfully on https://xianghui.github.io/daily-app2/20261109-22/, including real inference on both synthetic fixtures (8/8 intended component links), offline fresh-worker inference, batch limits, review/undo/partial/cycle/overflow, stale/cancel/retry, malformed/runtime/timeout defenses and phone layouts. Actual public-browser downloads parsed independently afterward; all lines, recursive quantities and stock accounting retained. No public page errors or content-upload requests observed.

An initial deployment completed successfully; a final catalog-ID robustness fix was then rebuilt, retested and published after that deployment finished. The final public hashes and tests above target the corrected bundle, not the superseded build. An early public lookup while the first Pages build was still active timed out; the completed public checks passed. No legacy rebuild trigger or hosting/config change was needed.
