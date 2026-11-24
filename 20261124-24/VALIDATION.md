# Observed validation — 2026-11-24

## Local production bundle

- `npm run predeploy` passed (React/Vite production bundle, no build warnings).
- Real Chrome WASM/CPU inference on both synthetic examples: **6/6** profile matches. Commerce has 2 ready / 1 duplicate-expanded-attribute block; research has 3 ready / 0 blocked. Default-to-all baseline disagrees on 2 ready records in each example.
- Context-only changes for identical raw fragments changed expanded element from `{urn:shop:orders}receipt` to `{urn:office:people}receipt` after real inference. One negated-context probe selected intended shipping; this does not establish reliable negation handling.
- 24-row real inference: 24 preserved, 16 ready, 8 intentional duplicate-attribute blocks, correct repeated profile matches. Audit originals round-tripped through import.
- Required approvals, editable multiline fragments/notes, renewal of approvals, undo, hold, invalid fragments, export invalidation, clipboard and actual downloads passed.
- Independent Python standard-library CSV/JSON parsers and ElementTree reopened downloaded outputs: fixture0 3 audit rows/2 XML cases; fixture1 3/3; edited 3/3; max 24/16. Expanded names, exact attributes/text, escaping, quote/newline/tab preservation and formula-protected CSV notes checked. No lost source rows.
- Fresh worker with network fully disabled performed real inference in warmed production page. No claim of cold offline navigation/reload.
- Defensive browser checks: worker/model-download network aborts, missing Worker/WebAssembly, worker construction/error, malformed output, accelerated timeout, stale callback and cancellation during fetch all passed with no fabricated results. Real model retry after each network failure passed. Delayed imported file read cannot overwrite newer input.
- 57 deterministic known-answer/boundary checks: default-vs-attribute semantics, xml namespace, alias collisions, unbound/malformed names, duplicate attributes, XML-forbidden characters, surrogate rejection, emoji/control whitespace, reserved bindings and invalid model vectors.
- Desktop 1440px and narrow 390px/320px checks: no horizontal overflow, all form fields labeled, focus-visible styling, controls ≥44px; normal viewport screenshots captured and phone hero/review inspected. No physical-device or screen-reader testing.
- Requests captured from page startup through all runs: no model-host requests before explicit loading; only GETs, no bodies, no user context in URLs, only same-origin/blob runtime and Hugging Face/CDN hosts. Signed download query values excluded from reports.

## Collection/publication

Status and additional assembled/public production checks are recorded in the companion reports and publication-status.json. A branch push alone is not treated as runtime verification. The collection's existing 1 GB guard initially blocked assembly by 201,046 bytes; deploy-only sharing of an exact-byte legacy WASM copy preserves source builds and the size limit. That older app's real worker/import/export flow must pass before publication.

## Limits

Tiny synthetic fixtures are not a benchmark or universal accuracy claim. Model picks nearest vocabulary for unrelated text; human review/hold is required. This is bounded standalone XML fixture preparation, not schema validation or arbitrary XML repair. Offline guarantee is only the warmed open-page scope actually tested. Credential scans complement code/network inspection, not exhaustive security verification.

## Assembled collection checks

Root predeploy passed after exact-byte deploy-only reuse: 852 apps, zero failed/skipped, 999,659,782 bytes under unchanged 1,000,000,000 limit. All prior gallery entries/categories preserved and inline scripts compiled. Assembled app, gallery, worker, factory and WASM bytes matched their builds. Real inference/workflow/offline/artifact suite repeated against assembled bundle. Older 20261106-6 runtime, PNG/STL imports, portable restore and actual exports passed; independent topology checks and exact assembled asset hashes passed. No legacy source builds were changed.

## Public GitHub Pages verification

The remote gh-pages head `3abf32819f40b755efcf0cde1ae0d7303b976bca` reached Pages `built`; matching workflow completed successfully. Public app returned HTTP 200. App/collection index, worker, module factory and WASM matched assembled hashes; public gallery retained 852 entries and old categories with no phone overflow. Public production suite repeated both real inference fixtures (6/6), 24-row chunks, reviewed exports, cancellation/retry, malformed/invalid inputs, desktop/phone layout checks, privacy GET-only audit and fully offline fresh-worker inference. Independent parsers reopened all public downloads and preserved every audit row and every ready XML value/expanded name. Public older-app worker/import/portable-restore/export and asset hashes passed, plus downloaded STL topology checks. See `public-*-validation.json` and `pages-*.json`. No builder digest was sent.
