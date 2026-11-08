# Observed validation — 2026-11-08

## Actual production bundle, real model

- Science practice: four prompts; intended photosynthesis pair and evaporation pair both grouped correctly (within-pair cosines 0.857 and 0.807). Same-topic neighbors fell from 2 in the input-order baseline to 0; neighbor cosine sum 1.929 → 0.734.
- Computing practice: four prompts; intended database-index pair and message-encryption pair both grouped correctly (cosines 0.870 and 0.635). Same-topic neighbors 2 → 0; cosine sum 1.626 → 0.447.
- These are two tiny synthetic known-answer fixtures (4/4 intended pair relations), **not** general accuracy, time-saving or learning-gain measurements.
- Real 12-card inference in four-text batches: every ID preserved once, applied sequence complete, no equal-topic neighbors. Export/import reran original inputs successfully.
- Instruction-like/negated photosynthesis prompt remained inert source text and was still grouped into the photosynthesis topic. The encoder is not a fact checker: it does not detect false premises, validate supplied answers, or distinguish mastery/difficulty. No credentials requested, no tool authority changed.

## Defenses / review / artifacts

`browser-validation.json` records 13 browser workflow checks: pending-review blocking; corrected topic and answer; hold/undo; apply invalidation; real offline fresh-worker inference; max batching; empty, invalid, duplicate, oversized and out-of-range schemas; cancel/retry and source invalidation; unsupported file; impossible-constraint blocking; phone review/export; worker-download failure/recovery; stale delayed fetch isolation; malformed vectors; unavailable runtime; worker crash; timeout; inert instruction text. Successful checks use real inference; fault injection only tests failures.

`extra-validation.json`: real uncached model-host download failure gives no result, retry recovers; stale delayed file read cannot replace a newer example. `core-validation.json`: exact optimizer compared to exhaustive permutations at n=2,4,6,8; all-held case, malformed/zero/nonfinite vectors and invalid schemas rejected.

`artifact-validation.json`: actual browser downloads independently parsed by Python CSV/JSON. All reviewed records and original answers preserved; edited multiline answer and formula-like multiline note round-trip safely; positions match sequence; held record omitted from worksheet but retained in audit. Learner worksheet contains only source questions, separate answer key reflects edited answers. Clipboard equals downloaded learner Markdown.

## Privacy / runtime / layout

All recorded browser requests through startup/inference are GETs without request bodies, and no model-host request occurs before the explicit load action. Inspection confirms source content flows only to local worker; no content API integration. Bundle credential-pattern scan found no matches (not a universal secret detector). Local JS/factory and shared WASM hashes are in `asset-audit.json`. Fresh-worker inference passed with all browser networking disabled after online warm-up; offline reload is not claimed.

Desktop screenshot plus 320/390-pixel narrow layouts inspected/tested for document overflow, editing, downloads and keyboard focus. Physical phones, other browsers, screen readers and learning outcomes remain untested. Chrome WASM CPU works without WebGPU.

## Gallery / publication

Gallery source scripts compile with Node `new Function`; one new AI utility entry, all 529 previous entries/categories preserved. Local browser checks confirm 530 cards, AI Utilities before STL/mini-game categories, correct new link and search. Publication and public real-inference results are recorded in `deployment-validation.json`, `public-assets-validation.json`, `public-browser-validation.json` and `public-gallery-validation.json` when verified; do not infer publication from build success alone.

### Publication verified

Root `npm run predeploy` and `npm run deploy` passed (530 built; 0 failed/skipped). GitHub Pages built gh-pages commit `2800e4ad4d36b40432d8a9d2d85fa892f94eef0c`. Every public app asset and shared WASM matched local hashes. The full 13-check production browser suite passed again at https://xianghui.github.io/daily-app2/20261108-14/, including two real-inference fixtures and fully offline fresh-worker inference. Public gallery has 530 cards, the new entry once, all earlier categories and working search; no page errors. Independently parsed downloaded artifacts passed again after public-browser exports. Source publishing excludes the pre-existing unrelated untracked `20261105-7/` draft.
