# Observed validation — Quality Ledger

## Production bundle and actual local AI

Chrome headless with GPU disabled ran the Vite production bundle at the real `/daily-app2/20261113-7/` base. Real q8 MiniLM inference ran on two materially different synthetic quality-cost batches:

- Assembly team: prevention, appraisal, internal failure, external failure; **4/4** matched intended labels. Reviewed total 100,000 cents; failure 75,000; 25% reduction assumption gives 18,750 avoided minus 10,000 investment = 8,750 scenario net versus zero avoided baseline.
- Repair workshop: **3/4** matched. Pre-shipment testing was proposed as internal failure, not appraisal. Browser validation corrected it explicitly before applying; reviewed total 200,000 cents; failure 150,000; 20% assumption gives 30,000 avoided minus 20,000 investment = 10,000 net.
- These are eight tiny examples, not a production-accuracy estimate. An unrelated instruction-like note mapped to appraisal and remained pending until held. No credentials or content upload was initiated.

`browser-validation.json` stores raw observed labels and GET-only request evidence. No model request occurred before explicit loading. The suite asserted no request body and no input text in request URLs, no page errors, reviewed row conservation and current snapshot exports. Runtime/model requests download static assets only; built text assets passed a credential-pattern scan (not a universal proof against all secrets).

## Arithmetic, artifacts and interaction

- 3,000 randomized independent BigInt arithmetic cases verified cents, category/hold conservation, flooring and scenario net calculations; revenue and zero-failure break-even checked. Invalid vectors, pending reviews and lost rows rejected.
- Actual browser downloads parsed independently with Python CSV/JSON. Both fixtures, reviewed multiline formula-like notes/owners and all 40 maximum-batch rows survived. Numeric cents, original cents, decisions, categories and Unicode preserved; spreadsheet-leading text escaped. Reviewed Markdown and clipboard contained the edits. JSON audit reimport returned originals with all approvals reset.
- Empty, malformed, null/array, oversized source/file, invalid revenue/reduction, negative amounts, duplicate IDs and unsupported formats blocked. Invalid reviewed amount blocks apply. Hold, undo, export invalidation, all-held result and input changes tested.
- Cancel/retry, real intercepted model-download cancellation, slow worker-source cancellation, delayed imports and a deliberately late valid-vector worker that ignored terminate were tested. Old results did not replace current input.
- Network/model-host failure followed by real recovery, worker-source download failure, unavailable module workers, disabled WASM in an actual worker, worker runtime error, malformed output and accelerated timeout were exercised. Fault injection is only for defensive checks; successful fixtures and offline tests use real inference.
- Desktop 1440 and narrow 390/320 CSS-pixel layouts passed no-document-overflow checks, labeled controls, ≥44px buttons and keyboard focus checks. Screenshots inspected; the two-column results table fits phone width. Emulated touch workflow runs real inference/review/undo/apply/download; physical mobile devices are untested.
- Fully blocked networking after an online run still allowed another fresh worker to execute real inference from cache in the open page. Offline reload/navigation remains untested and explicitly not promised.

## Publishing

Combined assembly, gallery preservation, public asset hash matching, Pages commit status and public real-inference checks are recorded separately as those steps complete. A source/branch push alone does not establish public readiness. No changes to the original `/Volumes/ExternalHD/daily_app` tree.


### Completed public verification

Root predeploy assembled all 632 app indexes with zero failed/skipped builds. Root deploy published combined `deploy/`; Pages built deployment commit `80487467e24628ae01d4a47f7277abccd142be28` on its first attempt. Every public new-app file, worker, runtime factory and shared WASM matched local production bytes; the entire public gallery matched the working-tree gallery. The full browser workflow suite was rerun at https://xianghui.github.io/daily-app2/20261113-7/ with actual default-model inference on both fixtures, fresh-worker offline inference, maximum batch, editable review, undo, copy/download parsing, invalid inputs and phone/desktop layouts. Public fixture labels again matched 7/8 intended labels. All 631 earlier gallery entries and categories remain preserved in the 632-entry gallery. Physical phones and non-Chrome engines remain untested.

Source-only lint (`npx oxlint src`) passed. Unrestricted scaffold lint also exited zero but reported warnings in the third-party minified runtime; vendor code was not rewritten. Pre-existing unrelated working-tree edits and unpublished folders are excluded from this app's source commit.
