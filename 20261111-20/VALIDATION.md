# Observed validation — 2026-11-11

## Real production-bundle browser inference

Actual headless desktop Chrome, Transformers.js 4.3.2 / q8 MiniLM / WASM CPU; no mocked successful inference. Office fixture matched paper, coffee, soap (3/3); art fixture matched paint, clay, yarn (3/3). First-catalog baseline matched 2/6 vs AI 6/6 on these six synthetic known-answer labels only. This is not a general accuracy claim.

Office lots: 10000 paper sheets, 40 coffee units, 54 soap units; estimated annual relevant cost 339.10 vs monthly-rounded 727.50. Art lots: 96 paint tubes, 70 clay bags, 100 yarn balls; estimated cost 610.80 vs baseline 952.00. These are computed model costs from synthetic inputs, not observed savings. Independent Python checks verified optimality over every feasible integer pack multiple.

The explicit negation probe proposed coffee correctly. The unrelated/instruction-like Jupiter note was forced to soap: demonstrates no reliable out-of-domain rejection. Both were held and all order recommendations blocked. No credential prompts/tools/network content uploads occurred. Mandatory human review is necessary.

## Functional / defensive checks

- Production worker and same-origin factory/WASM loaded. No model-host request before explicit invocation. Captured 48 successful-run requests, all GET with no body; URLs did not contain fixture content. Integration inspection plus built-asset credential pattern scan found no keys/content upload integration. This scan is not exhaustive proof.
- Fresh worker in the already-open page ran actual inference with network disabled, following an online run. Offline reload/navigation not claimed/tested.
- Maximum 6-catalog/12-record input (18 texts in four-text chunks), audit JSON reimport, every record and total preserved. Reimport restores originals and requires fresh inference/review.
- Edit identity/quantity/note; undo; approve/hold; pending approval blocking; stale export invalidation; copy/download; zero demand; infeasible storage and aggregate-cost suppression.
- Empty, invalid JSON/schema, oversized text/file, unsupported CSV input, negative/fractional/oversized/empty reviewed quantities rejected.
- Cancel/retry, input-change stale worker messages, delayed file reads and delayed worker downloads cannot replace newer input; real retry succeeds.
- Fault injections ONLY for error paths: model-host network abort and real recovery, worker-download abort, missing Worker, actual worker missing WebAssembly, malformed vector, worker error, accelerated 180-second timeout. All leave no fabricated records and exports disabled.
- Independent Node cost tests compared 162 demand/pack/minimum/capacity combinations with brute-force minima and validated hold/no-demand/infeasibility/schema paths.
- Browser-downloaded JSON/CSV/Markdown independently parsed with Python; 3 reviewed, 12 max and 3 phone rows preserved including edited annual units and formula-like multiline quoted reviewer text. JSON round trip preserved originals and plan. Clipboard matched downloaded Markdown.
- 1440/390/320 px viewport checks: no horizontal overflow, every input labeled, focus works, buttons ≥44 px. Screenshots saved; phone screenshot inspected. Physical mobile devices, screen-reader testing and other browsers unverified.

## Publication

Public asset hashes, combined gallery preservation and actual public browser AI results are recorded after deployment in separate machine-readable reports. A branch push alone is not considered verification.

Public release verified: Pages workflow `43009378269` built/deployed commit `105b24c40ad367d7b5c15981380c24b5215d4bbf`. Public app, bundled worker/factory and shared WASM hashes matched the local production build; the 597-entry public gallery was byte-identical to workspace source, with older entries/categories preserved and Lot Lantern first. The complete real-browser workflow suite passed again at the public URL, including both fixtures, fresh-worker offline inference, 12-record batching, review/edit/undo, exports and 1440/390/320 px layouts. See `public-validation.json`, `public-browser-validation.json`, `public-gallery-validation.json` and `publication-status.json`.
