# Quota Spring — observed validation, 2026-11-11

Status: **published and verified** at https://xianghui.github.io/daily-app2/20261111-2/. Local, assembled and public production checks passed. Test fixtures are synthetic. No physical phone/other-browser or offline navigation/reload claim.

## Actual AI and task quality

Real q8 MiniLM WASM inference in headless desktop Chrome, using the Vite production bundle and real downloads (no mocked successful model calls):

- Neighbourhood grants: 8/8 intended links across garden/art requests. Garden claims `[1000,4000,7000,8000]`, budget 10000 cents → equal awards `[1000,3000,3000,3000]`; first-come `[1000,4000,5000,0]`. Four vs three nonzero recipients, **not** measured social benefit.
- Learning grants: 8/8 intended book/sports links. Book budget 10001 cents → `[1000,2000,3501,3500]`, including deterministic one-cent tie handling.
- Full boundary: 4 pots, 24 requests, 28 embedded texts across seven batches; 24/24 repeated synthetic routing links and all separate budgets conserved. This is a tiny easy fixture, not general accuracy.
- Challenge: `Not library books: football equipment for sports coaching.` linked to sport; unrelated instruction-like Jupiter text still linked to books. Similarity is not eligibility or an out-of-domain detector. Both challenge requests held, null awards exported; text never changed authority or requested credentials.

## Independent arithmetic and defensive checks

`core-test.mjs`: 1,800 deterministic randomized cases independently simulated one cent at a time and matched batched binary-search equal awards. Exact claims/budgets/first-come spending conserved. Empty claims, zeros, surplus funds, single-cent and capped residuals passed. Confirmation, holds, invalid amounts/schema and malformed vector rejection passed.

Production-browser suite passed both locally and served from assembled `deploy/`: mandatory review, pot/amount editing and reapproval, undo, export invalidation, all-held and unconfirmed states, copy, imports of original audits, empty/invalid/oversized JSON and unsupported files, cancellation, input change during inference, retry, and no stale result overwrite. Separate delayed-file/delayed-worker-fetch tests passed. Separate fault-injection tests exercised failed model network, worker download, unsupported worker, actual worker without WebAssembly, malformed vectors, 180-second timeout and worker errors. Every failure showed an error without fake proposals/export; network failure recovered through real inference.

## Artifacts, privacy, caching and layout

Actual browser-download JSON, CSV and Markdown parsed independently (`artifact-test.py`): every original request, corrected claim, hold, note, budget and allocation survived; JSON original reimport loses approvals intentionally. CSV quoted comma/newline/formula-like notes escaped correctly, clipboard equalled current Markdown. Blank held/unconfirmed awards distinguished from numeric zero. Cent conservation checked on every downloaded JSON artifact.

Browser request capture began at navigation: no model-host requests before explicit load, all requests GET without bodies, only app/model downloads and local blob workers observed. No content in URLs. Source review found no remote inference/integrations. Built text assets passed credential-pattern scan (not a universal proof). CPU WASM works without WebGPU. After warming, a fresh worker ran real inference with browser network fully offline in the already-open page. Offline reload/startup untested and not promised.

Widths 1440, 390, 320 CSS pixels: no horizontal overflow, source field focus works, labels/touch controls and working result/export controls checked; screenshots retained. Phone top/review screenshots visually inspected. Physical devices, Safari and Firefox not tested.

## Collection and release

Root gallery inline scripts compiled using `new Function`; new entry exactly once, all prior 579 entries and order preserved. AI Utilities remains first; older STL, games and SaaS categories retained. Gallery browser check passed desktop/320px. Root predeploy assembled 580 apps, zero failures/skips; app files byte-match `dist`, bundled worker/factory paths and immutable shared WASM SHA-256 verified. Combined production browser suite repeated real AI and offline checks successfully.

See machine-readable `*-validation.json`, browser logs and test scripts. Public asset/hash, gallery and real browser checks will be recorded separately; a branch push alone is not proof of public operation.

## Verified public release

Root `npm run deploy` published combined branch commit `a58e41c4a93590a9d2f84562b875e1a401747f34`; Pages workflow `42861635650` completed successfully and Pages API reported that exact commit `built`. Public app index/code/worker/runtime and immutable shared WASM hashes match the tested production files. Public gallery is byte-identical to source (580 entries), new app appears exactly once and older categories remain. Both real-AI fixtures and all ten public browser workflow checks passed, including offline fresh-worker inference, reviewed downloads, copy, cancellation/retry, invalid input and phone layouts. Public request capture again showed only GET file downloads without content payloads. Independent artifact/metric parsers reran on actual public exports and passed. No hosting retries were required.
