# Facet Ledger — observed validation

## Production bundle, real AI and quality

- React/Vite production build passed with base `/daily-app2/20261121-4/`.
- Actual default MiniLM q8 model ran on WASM CPU in Chrome with GPU disabled, no key or server.
- Delivery fixture: comment labels `[shipping, packaging]`, `[support, shipping]`, `[packaging]`.
- Library fixture: `[hours, noise]`, `[collection, hours]`, `[noise]`.
- Ten supplied single-concern segments matched ten known topic keys across these two tiny fixtures. Each fixture had 5 reviewed assignments vs 3 single-label baseline assignments, two multi-topic comments and two co-occurring pairs. Not a population accuracy or percentage improvement claim.
- Changing source text while retaining IDs changed real neural suggestions and applied counts. Strict cosine floor 1 produced no labels and three explicitly uncoded comments. A negated noise statement still selected noise: topic similarity does not infer sentiment/entailment.
- Maximum batch: 24 comments × 4 segments plus 8 topics = 104 embedded texts, 26 actual four-text chunks. All originals and 96 segment evidence entries survived export/reimport.

## Workflow, artifacts, runtime and failures

- Approve/hold required for every comment. Label edits reset review decision; any edit invalidates the applied export. Undo, removing labels, holds, multiline notes, clipboard and JSON originals-only reimport passed.
- Independent Python CSV/JSON/Markdown parser recomputed counts and source IDs from ten actual browser JSON downloads, parsed audited CSV rows and summary rows, and checked multiline quoted/formula-like notes and every original segment.
- Fully offline fresh-worker real inference passed in a warmed open page. Offline navigation/reload is not claimed. Runtime assets were byte-audited and tokenizer ceiling verified at 512, not the ignored per-call max_length.
- Captured browser traffic from startup through inference: only GET file downloads, no request bodies or content uploads; no model request before explicit loading. Saved reports strip signed query values. Built assets passed credential-pattern scan and integration inspection.
- Empty/malformed/oversized source, duplicate/invalid data, bad numeric floor, unsupported/oversized files and unavailable runtime did not produce fabricated labels. Defensive injections covered malformed vectors/envelopes, worker failures, timeouts and late cancelled/input-changed responses.
- Real failed model download recovered on retry; cold-download cancellation and real retry passed. A late injected result from an older cancelled run could not overwrite a newer real-model run.
- Delayed source-file reads and worker-source fetches cannot overwrite newer inputs; a real new run still succeeds. Permitted topic IDs whose naive concatenations collide display six distinct pairs with correct counts and no React errors. All-held batch export preserves all records with zero counts.
- Deterministic-only unit suite: 500 independently recomputed count/pair-conservation cases, 20 schema/review rejections. Successful AI behavior above was not mocked.
- Desktop 1440 and narrow 390/320 widths passed no-horizontal-overflow, form labels, focus and ≥44px button checks. Normal viewport overview/review/results screenshots inspected. Physical phones, low-memory hardware and non-Chrome engines not tested.

## Gallery and publication

Final assembled size: 999,843,413 bytes, below the unchanged 1,000,000,000-byte guard; 761 apps built with no failures/skips. No deployment deduplication rule was changed.

760 prior gallery objects were preserved byte-for-value and the new entry appears once as `ai-utility`; every inline script compiled with `new Function`. Gallery category order, older cards, search and narrow layouts passed. Original `/daily_app` was read only.

Publication/assembled/public results are recorded in the corresponding machine-readable reports and `publication-status.json`. No untested public success is implied by a branch push alone.


## Public release verified

Matching Pages commit `b9773a6ef0de2b065070e2d85d758929fd1e7fb4` reached `built`. All eight public gallery/app/worker/factory/WASM files matched assembled bytes. The full public real-model browser suite passed both known-answer fixtures, semantic changes, 104-text batching, all-held and uncoded exports, review/undo, independent artifact checks, clipboard/reimport, responsive layouts, privacy traffic and fully offline fresh-worker inference. Public topic-pair edge IDs and all 761 gallery cards/categories/search also passed. The icon resource 404 found during an extra edge-case check was fixed and both local/assembled/public checks rerun successfully. Public bundle/runtime success is established by these checks, not merely by pushing a branch.
