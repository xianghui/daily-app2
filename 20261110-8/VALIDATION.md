# Observed validation — 2026-11-10

## Local production bundle

- React + Vite `npm run predeploy` passed. Tests run against dist at its real `/daily-app2/20261110-8/` base in desktop Chrome, not the Vite development server.
- Real MiniLM WASM inference: Garden launch W/W/S/P and Audio release R/R/E/M, **8/8** tiny expected package links versus **0/8** literal package-title hits. Human approval was required before applying. Garden: PV 230000, EV 190000, AC 240000 cents; audio: PV 200000, EV 170000, AC 200000 cents. These are supplied synthetic report calculations, not verified real-world progress or measured savings.
- Negation test still retrieved W for a report explicitly saying watering work was not done; unrelated concert text retrieved P. Both were held. Similarity cannot establish relevance, truth, or completion.
- 1,200 seeded generated cases independently checked integer-cent rounding using BigInt, latest-report selection, conflicting latest-day block, missing-progress ratio/variance/forecast suppression and every-record preservation. Forecast zero denominators, half-cent rounding and unsafe integer bounds checked.
- Browser checks: approve/hold, package evidence, edited progress/date, invalid percentage, conflicting same-day claims, undo, snapshot invalidation, JSON audit reimport resets approvals; maximum 24-note/12-package batching; empty/malformed/oversized JSON, duplicate IDs, future/invalid dates, unsupported import types.
- Cancellation, input changes and stale callbacks cannot replace a new result. Malformed AI vectors, unsupported worker/WASM errors and timeout were fault-injected solely for defensive checks, then real inference recovered. Successful fixture tests always used the real model.
- Fresh browser-context model-host request abortion produced an explicit failure and no suggestions, then real retry succeeded. Actual ONNX weight download was gated and cancelled; a new real run succeeded.
- Offline: after an online run, browser context was set offline and a **fresh worker** completed real inference within the already-open page. Offline app-shell navigation/reload is untested and not claimed.
- Startup makes no model-host requests until explicit loading. Recorded inference requests were GET-only with no request bodies, no user content in URLs, only same-origin and documented model hosts. Bundled credential-pattern scan plus source inspection found no credentials or remote inference integrations; pattern scanning alone is not proof of all conceivable secrets.
- Actual downloaded JSON/CSV/Markdown parsed independently in Python. All four edited/held reports survived, including multiline quotes, Unicode and formula-like annotation escaping. JSON reimport preserved all original input at maximum batch size. Clipboard equaled downloaded Markdown.
- 1280/390/320px browser viewports: no horizontal overflow, labels on every form control, keyboard focus on input, primary touch target ≥44px, current exports usable. Phone screenshot visually inspected. Physical phones/other browser engines untested.

## Publishing

Combined-gallery, deployment and public-model results are recorded in gallery-validation.json, gallery-ui-validation.json, public-inference-validation.json, public-assets-validation.json and publication-status.json when complete. A branch push alone is not counted as working public inference.

### Published verification

Root `npm run predeploy` and `npm run deploy` succeeded: 569 apps, zero failed/skipped, deduplicated combined site 906,842,620 bytes. Pages workflow 42717896139 succeeded and latest Pages build is `built` at `e5084d1a35b9a7552ed6fbe3d909f97f883d924b`. Public app, entry JS/CSS, worker, runtime factory and shared WASM are byte-identical to the build. Public gallery is byte-identical to current working gallery, renders 569 cards, puts AI Utilities first, preserves legacy categories and search, and links this app correctly. The **full ten-check production-browser suite was rerun at the actual public URL**, including both real-model fixtures, reviewed artifact downloads/copy, fresh-worker offline inference, maximum batch, review/undo/holds, malformed/invalid inputs, cancellation/stale results, unsupported runtime and timeout defenses, and phone layouts. See public-inference-validation.json. Public host responses, not only branch push, were verified.

Pre-existing uncommitted Receipt Current gallery/docs/source and another older untracked folder were preserved in place, not swept into this app's source commit.
