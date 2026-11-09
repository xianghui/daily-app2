# Observed validation — Transfer Twin

Production Vite bundle, actual desktop Chrome through Playwright, 2026-11-09. No mocked model used in successful workflow/inference checks. Fault injection is used only for defensive failure tests.

## Real model and task quality

- Treasury fixture: actual `C2, C1, unpaired` proposals, matching all three intended debit outcomes. Two approved 50000-cent internal pairs; six records preserved, two unpaired. Net 78000 cents before and after removing internal pairs. Gross 302000 cents before / 102000 unpaired cents after. AI reviewed-counterpart agreement 2/2 vs greedy amount/date input-order baseline 0/2.
- Community fixture: actual `C2, C1, unpaired`, all three intended outcomes. Two 25000-cent pairs; all six rows preserved, two unpaired. Net 66000 unchanged. Gross 174000 / unpaired 74000 cents. Agreement 2/2 vs baseline 0/2.
- Two materially different domains and memo inputs execute real MiniLM q8 WASM inference. Tiny fixtures do NOT establish general accuracy; unpaired external-looking rows were deliberately excluded by hard amount constraints.
- Challenge: replacing the emergency memo with a negated internal-transfer description still proposed C2. This is a semantic false match. Mandatory human verification and explicit unpaired decisions remain essential. No automatic identity, ownership or bookkeeping guarantee.
- Full 24-record limit executed six embedding batches; all rows survived applied export and JSON reimport, with review reset. Independent core checks cover exact assignment cardinality over greedy collision, duplicate-credit rejection, wrong account/amount/date gates, numeric/net conservation, malformed vector rejection and all source rows retained.

## Workflow and defensive behavior

Browser tests passed pending-review gate, counterpart edit resetting decision, duplicate credit apply rejection, undo restoring choice/approval, explicit hold, Unicode multiline note, export invalidation, actual JSON/CSV/Markdown downloads and clipboard content equality. Source input changes invalidate in-flight work. Cancellation/retry, delayed stale callback after cancellation and after a successful newer run do not replace current output.

Empty/invalid/null JSON, duplicate IDs, empty batch, too many rows, oversized memo/payload/file, invalid dates, currency/window/threshold and noninteger/zero/oversized amounts fail visibly. Unsupported CSV import rejected. Defensive injected malformed vectors, worker constructor failure, missing-WASM error and shortened timeout all produce errors without fake output, and real inference recovers afterward. Model-host network abort was tested in a fresh browser context, followed by successful real retry. A separate test paused an actual quantized ONNX request, cancelled, then successfully retried real inference.

## Offline, privacy and artifacts

After successful online inference, full browser context network was disabled and a fresh worker ran actual model inference successfully inside the already-open page. Explicit worker/runtime/model Cache API paths exercised. Offline navigation/reload is NOT claimed.

Requests captured from production navigation through inference and defensive checks: no model-host download before explicit loading; GET-only requests with no bodies; local-origin assets and documented Hugging Face hosts only; synthetic source phrase not in URLs. Source review confirms texts only go to the worker via postMessage and no remote inference/upload integration exists. Credential-pattern scan of built JS/HTML/MJS had no hits; this is not an exhaustive secret-detection guarantee. Installed and immutable shared WASM bytes match; hashes recorded in asset-audit.json.

Python independently parsed every downloaded audit and CSV: all original fields/rows preserved, signed numeric cents unchanged, edited multiline Unicode rationale retained, CSV leading formula protection present, unique counterparts and unchanged net verified. Markdown retains complete source record identifiers. JSON audit reimport retains originals but resets approvals.

Desktop plus 390px and 320px viewport checks passed no horizontal document overflow, input focus, >=44px primary controls and working exports. 320px full-page screenshot visually inspected; readable single-column layout with review and export controls intact. Physical mobile devices, other engines, full accessibility audit and app-shell offline startup untested.

Publication/public verification is recorded below after deployment and in public-validation.json / public-browser-validation.json.

## Published verification

Root predeploy assembled 557 apps with zero failures or skips. Gallery inline scripts compiled with Node `new Function`; new entry occurs exactly once as `ai-utility`, and all 556 previously present entries remain unchanged. Existing AI Utilities and STL categories rendered publicly. Combined root deployment published gh-pages commit `bcc15c91de817c93fc3928dcb8c73f51dff59c55`; GitHub Pages run `42590964535` completed build/deploy successfully and Pages API reported `built` for that exact commit. An early public probe while artifact upload was still running timed out on the new gallery name; it was rerun after deployment, without republishing.

Public URL: https://xianghui.github.io/daily-app2/20261109-18/

At the public URL, root gallery, app HTML/JS/CSS, AI worker, local WASM factory and shared WASM SHA-256 hashes matched source production assets. The entire real-browser workflow suite was rerun against GitHub Pages: both fixtures again produced `C2, C1, unpaired`, offline fresh-worker real inference passed, full batches/reimport/review/undo/export/copy/phone/failure/stale protections passed. `public-browser-validation.json` captures observed public checks and sanitized request metadata; `public-validation.json` captures asset/gallery verification. Independent artifact parsing passed again after the public suite. No claim of universal model suitability or full offline startup is made.

Pre-existing unrelated root edits and untracked draft/app folders were preserved and excluded from this app's source commit. Public combined deployment retained the entire existing working gallery, including its prior entries.
