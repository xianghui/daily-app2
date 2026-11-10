# Observed validation — Sample Balance / 20261110-16

## Production-bundle local checks

- `npm run predeploy`: passed. Real Vite production bundle and production base, not dev-server-only behavior.
- Real q8 MiniLM CPU inference in Chrome: **Library workshops 6/6**, **Repair cafés 6/6** tiny intended branch links matched. Literal branch-title baseline **0/6** on each. Ratings/populations are supplied, never inferred. Results and cosine vectors are in `browser-validation.json` / fixture exports.
- Known-answer library raw mean **17/6 ≈ 2.833333**, weighted **3.875**. Repair raw mean **23/6 ≈ 3.833333**, weighted **2.9**. These are descriptive changes, not accuracy gains or causal evidence.
- `core-test.mjs`: **1,800 generated independent arithmetic/conservation cases**, two known-answer fixtures; weight total, weighted/raw means, ESS, per-branch source counts, holds, missing branches, oversampling, unconfirmed frame, malformed vectors and invalid bounds passed.
- Actual production-browser flow: pending review guard, rating edit, branch reassignment, invalid rating rejection, undo, hold blocking, frame confirmation/invalidation, current exports and clipboard passed. No auto-approval.
- **64 responses / 8 branches**, real model chunking and complete audit reimport passed. A first run caught an audit envelope incorrectly constrained by the 40 KB original-input limit. Fixed to allow an audit up to 1 MB while independently enforcing original-input ≤40 KB; the full browser suite then passed.
- Empty/malformed/oversized JSON, duplicate IDs, too many responses, invalid populations/ratings, >400-character text, unsupported CSV and oversized import rejected with no stale rows.
- Cancellation/retry and input invalidation passed. Separate real weight-download cancellation plus real inference retry passed. Delayed file import and delayed worker download could not replace newer input. Deliberately late callbacks could not overwrite a newer real run.
- Model-host network abort showed a real fetch failure and no suggestions; unblocking then retrying executed the real model successfully (`network-validation.json`).
- Malformed vector output, worker construction failure, unsupported WASM error and timeout paths tested by **fault injection**. No fake success or deterministic fallback. Cancellation and fault recovery returned to real inference.
- Negated waterfront description still matched waterside; unrelated instruction-like spacecraft text also matched waterside. Both were explicitly held, blocked weighted output and survived exports. Nearest-neighbor semantics cannot certify relevance or correct negation.
- New worker with **all network blocked** inside already-open cached production page ran real inference. Offline reload/navigation is untested and not promised. Cache behavior is browser/device dependent.
- Request audit from startup through real inference found documented static/model downloads only, GET methods, null bodies and no synthetic content in request URLs. No model-host requests before explicit load. Source contains no optional remote provider or credentials; built text credential-pattern scan had no matches (not an exhaustive secret-detection proof).
- Shared WASM byte/hash equality with installed ONNX binary checked. Worker/factory paths and generated bundle assets are verified, not assumed from source.
- Actual browser-downloaded JSON/CSV/Markdown independently parsed using Python csv/json: all six reviewed records, original/edited ratings, branch/decision, multiline quoted Unicode notes, formula-like apostrophe escaping, current weight totals and independently recomputed weighted mean survived. All 64 originals survived audit roundtrip. Held rows remain visible with no applied weights. Clipboard equals downloaded Markdown.
- Desktop 1280 and narrow 390/320 CSS-pixel layouts: no horizontal overflow, associated labels, source keyboard focus and ≥44 px main controls checked. Screenshots captured; desktop entry inspected visually. This is not a physical-phone or full accessibility certification.

## Gallery, combined build and public release

- All inline gallery scripts compiled with Node `new Function`; the new entry appears once, newest first, in AI Utilities. All **572** baseline entries and categories preserved. Gallery UI checks passed locally and in the combined folder.
- Root `npm run predeploy` assembled **573** app shells, no failed/skipped builds. New app output files byte-identical to its production dist. Combined site **910,388,270 bytes**, under the 1,000,000,000-byte guard.
- Both fixture inference workflows, applied JSON downloads, layouts, request privacy and fresh-worker offline inference also passed against the assembled combined production folder (`combined-browser-validation.json`).
- Root `npm run deploy` published combined site, Pages workflow **42773483126** succeeded and Pages reports **built** for gh-pages commit `0c8c0642685cdbb5df8c239d8dfa1cf00fa9c397`. No retries were needed.
- Public HTML, entry JS/CSS, actual worker, WASM module factory and every app asset are byte-identical to validated dist. Public shared WASM SHA-256 matches the installed binary; public root gallery bytes match source (`public-asset-validation.json`).
- At the public URL, both real inference fixtures again matched **12/12** intended links. Actual reviewed downloaded JSON preserved every row and expected weighted means. Fresh-worker offline inference inside the already-open public page passed, as did request/privacy checks and 1280/390/320 layouts/labels (`public-browser-validation.json`).
- Public gallery rendered **573** cards with AI Utilities first and Sample Balance newest. Existing STL Generators/Mini Games categories and oldest-app search remained intact (`gallery-public-ui-validation.json`).
- Release is publicly verified. See `publication-status.json` and `hosting-attempts.json`.

## Untested / limitations

Physical phones, Firefox/Safari/Edge, screen readers, low-memory devices, offline shell reload, non-English inputs, real survey representativeness and live personal datasets. Unpinned upstream model revision, token truncation, branch ambiguity, unknown duplicates and within-branch nonresponse bias remain limitations. No inferential uncertainty, statistical significance, causal inference, accuracy or time-saving claim is made.
