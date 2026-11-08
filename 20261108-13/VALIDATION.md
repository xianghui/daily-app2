# Observed validation — 2026-11-08

Production Vite bundle, real headless Chrome, no mocked success path. Synthetic data only.

## AI quality (tiny fixtures, not general accuracy)

At the default 0.60 threshold:
- Finance: invoice-entry paraphrases cosine 0.762 grouped; payment-reminder paraphrases 0.821 grouped; unrelated families separated.
- People operations: account-provisioning paraphrases 0.681 grouped; interview-scheduling paraphrases cosine **0.527 were incorrectly split**. Thus 3/4 known paraphrase pairs grouped, with no between-family merge in these tiny fixtures. This demonstrates undergrouping, not universal accuracy. A human merged the interview group and reapplied.
- After that correction, a 90-minute setup budget selected interview scheduling (60 setup minutes; estimated net 420 minutes over eight weeks) versus the first-group baseline's estimated 380 minutes. These are computed from synthetic workload and editable 50% reduction assumptions, NOT measured time savings or model predictions.
- Instruction-like content remained ordinary text; no credentials requested or network content transmission occurred. It formed a separate group. This is not an exhaustive semantic adversarial evaluation.

## Core and browser checks

- 25 core assertions, including independent exhaustive subset enumeration for 20 budget/cost configurations against the dynamic-programming allocator. All passed.
- 13 browser check groups passed: two materially different real AI fixtures; review/hold/split/merge/undo; current export invalidation; assumption edits; clipboard exact match; max 24 tasks with preserved IDs and JSON audit reimport; invalid/empty/oversized/duplicate IDs; source edits/cancel/retry; unsupported files and invalid setup; worker-download failure/retry; delayed failed worker fetch after a newer successful run; malformed vector, unsupported runtime, worker-crash and timeout injection; instruction-like text.
- Three extra checks: **real uncached model-host network failure** gave a visible error and no result; unblocking/retry ran actual inference; delayed async file import could not overwrite newer input. Fault injection tests only failure handling, never substitutes successful AI.
- An online run followed by blocked-network **fresh worker** real inference passed. This supports only cached inference on the existing open page, not offline navigation/reload. Cache eviction remains possible.
- Python's independent CSV parser reopened downloads, verified multiline/comma/quote escaping and formula-prefix protection, source descriptions/IDs, current reviewed group and notes; 24-row batch had no lost IDs. Markdown contained all reviewed source records. JSON preserved originals and all review fields.
- Network capture: all observed requests GET with no request bodies; no content in URLs; no Hugging Face request before explicit loading. No external inference integrations, telemetry or API credentials exist in this app. Built-text credential-pattern scan passed (not an exhaustive guarantee).
- Desktop and 320/390px layout checked in browser and screenshots visually inspected: no horizontal overflow, input/results/downloads worked, keyboard focus visible. Real physical phones, screen readers, other browser engines and cold offline reload remain untested.
- Shared runtime binary is byte-identical to installed ONNX binary: 26,861,777 bytes; SHA-256 `49871f5a4409519797e127440868a6d1923339d9185907f301a5b2a1d90af082`.

## Publication

See deployment/public asset/public browser/gallery reports for final hosting verification. The combined root gallery must retain all 528 earlier entries and add Repeat Radar once as AI Utilities. Never infer public success from a branch push alone.

### Public verification completed

GitHub Pages workflow `42449542836` completed successfully for gh-pages commit `60c4750bb2d48181232a665cb561e3a4c372e38f`. The Pages API confirmed that exact commit built. Every public app/worker/runtime asset and shared WASM matched local SHA-256; public gallery matched root source byte-for-byte. All 13 browser check groups were rerun successfully against https://xianghui.github.io/daily-app2/20261108-13/ including both actual-model fixtures, max batching, reviewed exports and fresh-worker offline inference. Public gallery rendered all 529 cards with AI Utilities first and older categories intact. Independent artifact parsing was rerun after the public downloads. See `public-browser-validation.json`, `public-assets-validation.json`, `public-gallery-validation.json` and `deployment-validation.json`.
