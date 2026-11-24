# Observed validation

## Local production bundle

- `npm run predeploy` passed. Real CPU/WASM inference, not mocks: both materially different synthetic batches matched all 8 intended contracts. Task outputs matched known answers: first batch revalidate/fresh/revalidate/revalidate; second revalidate/fresh/revalidate/blocked.
- Context-only change with identical timeline changed real inferred contract and downstream output from revalidate to fresh. This demonstrates AI materially drives the workflow.
- Negation challenge **failed**: note explicitly preferring news and excluding bank balances still selected balance. Similarity is not truth; mandatory review is essential. Tiny fixtures do not establish general accuracy.
- Independent Python oracle passed 1,200 generated age/lifetime/noCache cases. Explicit equality, future Date clamping, upstream age and malformed fields passed core checks. Vector schema/count/norm validation passed malformed-output checks.
- Actual JSON/CSV/Markdown/release downloads independently parsed in Python: all source rows preserved, current reviewed values, escaped quotes/commas/newlines and formula-leading notes/IDs survived; 250 assertions. Maximum 24-row batches chunked; complete audit reimport restored originals. Clipboard worked. Approval gates, edit invalidation, undo, holds and invalid-case release exclusion passed.
- Successful online then fully offline fresh-worker real inference in the already-open page passed. Cold offline navigation/reload untested and not promised. Network capture: GET asset downloads only, no bodies, no source snippets in URLs, no model host download before explicit Load.
- Empty/invalid/oversized sources, unsupported/oversized import, worker network abort, unavailable Worker/WebAssembly, construction/error, malformed vectors, timeout, cancel during pending fetch and stale messages passed. Actual model-host download abort produced an error with no fabricated result; removing the network fault and explicitly retrying completed real inference. A delayed imported-file read could not overwrite newer typed input. Defensive tests use fault injection only; successful AI paths use the real model. A delayed valid mock result could not overwrite a newer real-model result; keyboard review focus order passed.
- Desktop 1440px and narrow 390/320px layouts: no document overflow; all input/select/textarea labels associated; controls ≥44px. Screenshots captured and visually inspected. Physical phones and other browsers remain untested.

## Publication checks

Assembled/public checks and exact Pages commit are recorded separately in validation JSON and publication-status.json when complete. A branch push alone is not proof of a working public app. No digest sent.

## Assembled collection

All 842 entries preserved, inline scripts compile and new AI Utilities entry appears once/newest. Full production browser suite, 250 independent artifact assertions and nine asset byte matches passed. Combined site **999,715,880 bytes** under unchanged 1 GB guard. Byte-identical deploy-only legacy WASM reuse for 20261106-11 loaded the shared 20261028-24 binary and passed real STL import/export and portable-design restore; original source builds unchanged.

## Public GitHub Pages validation

Matching built Pages commit `cc2384fd2bfa1e0882c84fd1b1d7d849e3231e31`, successful workflow `45331139618`. Public production suite passed both real-AI fixtures, context-only impact, fresh-worker offline inference, full batch/review/edit/undo/holds, real exports and defensive source checks. Independent public artifact parser passed 250 assertions. Nine public app/gallery/AI runtime assets and four affected legacy shell/worker/shared-WASM assets matched assembled bytes. All 842 gallery cards and the affected older app’s real STL import/export and design restore passed. No content uploads observed; known negation misroute remains documented. Source pushed separately to main; no digest.
