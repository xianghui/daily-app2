# Validation — Signal Fold / 2026-11-06

Production-bundle browser checks and live-site results are recorded in `browser-validation.json` and `live-browser-validation.json` once completed. No credentials or private fixtures are used.

- Real q8 MiniLM CPU/WASM inference on checkout, workplace, imported feedback and a maximum 32-record batch; dimension/schema/unit-norm and original-record checks.
- Known-answer checkout: payment pair and invoice/receipt pair grouped; dark-theme paraphrase pair missed (cosine 0.411). Workplace: all three intended pairs grouped. Overall 5/6 intended pairs, no cross-topic merges, at default 0.45. No claim of general model accuracy.
- Review, assign, reject representative record, undo, apply, stale export invalidation; JSON download, clipboard and CSV parse round trip.
- Empty, oversized and unsupported-format inputs; 32-row inference in batches of four.
- Real network-denied model download, actionable error and real retry; cancellation and source-change invalidation.
- Injected unsupported worker capability, malformed model vector and shortened deadline test error states only (not inference quality).
- Warm-page offline inference with a newly created worker; reload without model-host requests. Offline app navigation not claimed.
- Network log checks: no off-origin traffic before explicit load; off-origin requests only GET/HEAD, no bodies/user content.
- Desktop 1440px and narrow 390px/320px screenshots, no horizontal overflow, keyboard focus. Physical phone and other browsers untested.
- Build and gallery syntax/entry preservation checks; combined root build and live worker/WASM asset/inference verification.

Build success alone is not used as AI validation. The original `/daily_app` tree is read-only. A pre-existing untracked `20261105-7/` directory is intentionally excluded from this app's commit.

## Observed local results

All production-bundle browser assertions passed (`local-browser-validation.json`). Checkout: six records → four suggested themes; workplace: six records → three suggested themes. Imported exact duplicates retain both IDs; maximum 32-record batch produced two themes. No page errors at 1440, 390 or 320 pixels. Fourteen model-host GET/HEAD requests with no bodies were observed; no model-host requests before consent or on cached reload. The cached offline test creates a new worker, so it does not rely on keeping a model alive in worker memory.

Downloaded CSV parsed with Python's CSV reader and matched JSON source IDs, texts, assignments and a reviewed name containing comma/quotes. Core validation separately checks multiline CSV escaping, normalized-vector rejection and input limits. Gallery inline scripts compiled and all 485 older entries remained unchanged. Combined root build: 486 apps, zero failures, zero skips. All 486 deploy directories and copied root index were verified. Built JavaScript/HTML was scanned for common credential patterns (no matches); app source has no credential integration.

Initial test development exposed overly optimistic paraphrase expectations and a browser single-line input newline normalization assumption. Assertions now explicitly document the night-mode miss, test exact duplicate preservation independently, and compare actual single-line reviewed names. App grouping uses real neural embeddings throughout, not fixture-specific behavior.

## Public verification completed

- Pages deployment `1f54d82d5501c5196ba2ab5389b81ac392147849` reached `built`; workflow 42172544849 succeeded. An earlier deployment was superseded/cancelled during the title/icon polish, not an app inference failure.
- The **entire browser suite passed against the public URL**, including both fixtures, 32-record batch, review/reject/undo, download/copy, network failure/retry, stale/cancel guards, cached offline inference and injected error states. See `live-browser-validation.json`.
- Public worker `ai.worker-CfjY4VVc.js`, WASM `ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm` and runtime factory all returned HTTP 200 and executed real inference (`live-assets-validation.json`).
- Live gallery rendered Signal Fold once, retained Shift Weave and AI Utilities category, and had no browser page errors (`live-gallery-validation.json`). Downloaded public CSV/JSON were parsed and compared again successfully.
- Physical mobile hardware, non-Chrome browsers and fully offline app navigation remain untested/not claimed.
