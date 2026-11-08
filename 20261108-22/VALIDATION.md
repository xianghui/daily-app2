# Observed validation — 2026-11-08

- Vite production build passed. Real Chrome browser ran production worker and q8 MiniLM WASM CPU; no key or model mock for successful paths.
- Urban ecology: expected/actual heat, water, birds, heat. Digital operations: test, access, backup, test. All eight simple known-answer links matched; numbering [1,2,3,1] and one unused source each. Exact-title baseline 0/8; AI proposals 8/8. Tiny fixtures, not a general accuracy claim.
- Negation limitation: “Trees always increase urban temperatures” still retrieved heat; held successfully. Credential-request text stayed inert and below threshold. No factual-support claim.
- Real fresh-worker offline inference passed with all network disabled after loading. No offline navigation/reload claim.
- Full 24+24 batch inference conserved every record. JSON reimport restored original records. Review pending guard, changed-link reset, undo, hold numbering, export invalidation, multiline quoted/formula-safe CSV, current JSON/MD downloads and clipboard checked. Independent Python CSV/JSON parser verified IDs, source text, hints, reviews, metadata, numbers and note escaping.
- Empty, null, malformed, oversized, duplicate-ID, over-limit and invalid-threshold inputs rejected. Unsupported file rejected. Worker download failure and Hugging Face model-download failure recovered with real inference on retry.
- Cancellation, input changes, late cancelled results and stale failed worker fetch could not overwrite newer success. Injected malformed vectors, unavailable worker/runtime, crash and timeout failed visibly without canned results. Core tests also check invalid references, original tampering, dropped rows, numbering after holds/duplicates and Markdown HTML escaping.
- Desktop and 320/390-pixel layouts: no horizontal overflow; real review/application/download actions worked, focus outline checked. Screenshots inspected. Physical phones, other browsers, screen-reader testing and low-memory behavior not tested.
- Browser request capture: only GET asset requests, no request bodies, no user snippets in network paths. No model request before explicit loading. Built-asset credential scan and runtime hash audit recorded in asset-audit.json. Pattern scan is not a universal security proof.

Evidence: browser-validation.json (13 checks), network-validation.json, core-validation.json, artifact-validation.json, desktop.png, phone-320.png, phone-390.png and downloaded synthetic export artifacts. Public verification will be recorded separately after combined deployment.

Additional boundary browser test: aborting the local runtime module download failed visibly, then actual inference succeeded after retry. Multiline formula-like original passage survived JSON unchanged and was independently parsed from CSV with a protective apostrophe. Oversized JSON file was rejected. See boundary-validation.json.

## Public production verification

GitHub Pages built gh-pages commit `46273be40628d0f0076c18a37416bc3a25baf14b`. The public app, all seven emitted assets (including worker and WASM factory), shared WASM and root gallery were fetched and hash-compared with the tested bundle/source. The public gallery rendered Citation Loom once and retained the prior 537 entries. The complete 13-check browser suite reran at https://xianghui.github.io/daily-app2/20261108-22/ : both actual AI fixtures, real offline fresh-worker inference, full batches, review/export, defensive tests and phone widths passed. Independently parsed public downloads also passed. See public-assets-validation.json, public-gallery-validation.json, deployment-validation.json and public-evidence/.
