# Observed validation — Reserve Passage

All documents/data are synthetic. Tests exercise the production build, not a mocked successful AI path.

## Real neural inference and workflow

- Desktop Chrome, GPU disabled, real shared WASM CPU worker and q8 MiniLM model: two materially different inputs (media equipment and library digitization), **8/8 intended resource links**. Each resulting matrix reports 2 immediately fitting requests, 1 independently completion-safe candidate, 1 fit-now unsafe candidate. This is a tiny known-answer test, not general accuracy.
- Actual negation challenge returned camera (`R0`) for a projection-equipment request whose known answer was projector (`R1`). This observed limitation is why approval is mandatory; scores are cosine evidence, not confidence. No fallback responses exist.
- Maximum 32 claims / 8 resources / 40 texts / 10 neural chunks: all 32 intended links, preserved record counts, valid matrices and final free vector equal to total supply. Maximum audit reimport restores all originals.
- Reviewed resource and quantity changes reset approval. Edit/undo/reject/hold, pending-review blocking, current-applied-only downloads, multiline notes, clipboard, file import and explicit retry passed. Any hold preserves all records and withholds the calculation.
- Numeric review guards, empty counts, maximum beyond supply, duplicate reviewed cells and unsafe-original-state reporting passed; undo restored the valid plan.

Reports: `browser-validation.json`, `assembled-browser-validation.json`, `partial-inference.json`, `review-edge-validation.json` and exported synthetic artifacts.

## Independent deterministic checks

`node core-test.mjs`: **1,600 generated small resource systems** matched an independent recursive exhaustive completion-order oracle. Every witness step satisfied remaining-need bounds, before/after free vectors and final conservation on safe states. Both known-answer matrices, holds, pending decisions, duplicate cells, invalid sources and malformed vectors were also checked. `core-validation.json` records outcomes. No universal performance or real deadlock prediction claim.

## Failure/cancellation/stale protection

Ten defensive cases passed: model network failure with real retry, no WebAssembly, worker-download failure, unsupported module workers, malformed vectors, malformed envelope, accelerated timeout, worker error, late-cancel and late-input responses. Fault injection is used ONLY for defensive checks, never successful inference claims. No fake output and exports stayed disabled on failures. Cold download progress/cancellation followed by real retry passed. A delayed old run could not overwrite a newer real library inference. See `defensive-validation.json`, `cold-cancel-validation.json`, `stale-validation.json`.

## Privacy, caching, runtime & export round trips

- Requests captured from production startup through model loading/runs: no model-host calls before explicit Load AI; all observed requests were static GETs with no body, from same-origin and documented Hugging Face/CDN hosts. User content was not sent in requests. Source/worker data flow was inspected; no remote inference, telemetry or credential integrations. Built-asset credential-pattern scan found no hits (not exhaustive proof).
- Worker, factory and WASM bytes/hash-checked; current model-host revision and actual tokenizer 512-token ceiling rechecked. Worker batches four texts; app bounds each description to 300 characters.
- With browser context fully offline after warming, a NEW worker ran real inference successfully. This does not establish offline navigation/reload or persistence after cache eviction.
- Real browser downloads independently reopened with Python CSV and JSON parsers: all original/review fields, 4-row fixtures, 32-row maximum audit, held records, independent grant rows, quotes/commas/newlines and formula-leading notes survived. Held plan CSV contained only headers, never invented grants. Clipboard exactly matched downloaded current Markdown. See `artifact-validation.json`.

## UI and deployment

Production workflow tested at desktop 1440 and narrow 390/320 pixel viewports: no horizontal overflow; every input/select/textarea labeled; touch controls ≥44px; focus target works; screenshots of input/review/results captured. Screenshots inspected visually. Physical phones and non-Chrome engines remain untested.

Gallery: every inline script compiled with Node `new Function` (missing scripts fail), new entry exactly once, AI Utilities first, every previous entry retained, legacy categories/search working. 777 previous cards + Reserve Passage = 778. Combined production assembly: **999,713,345 bytes**, under the unchanged 1,000,000,000-byte guard, 778 built / 0 failed / 0 skipped. No old app removed and no new runtime-sharing rule. New app assets and gallery byte-match assembly. Existing unrelated working recovery edits are preserved but excluded from this run's source commit.

Public release verification is recorded below only after matching Pages deployment and actual public AI/assets checks succeed.


## Public release — verified

GitHub Pages release `61fdff542c0177b2e757302a117a21dd4761b4a2` reached **built**; matching workflow `44902481772` succeeded. Seven public gallery/app/worker/factory/WASM assets byte-match the assembled production files. Full public-browser suite passed: both real neural fixtures, reviewed current artifacts, maximum batching, negation limitation, cold-page request capture, cancellation/retry, offline fresh-worker inference and phone-width UI checks. All 778 public gallery cards/categories and search passed. Independently parsed public-run downloads passed again.

Live: https://xianghui.github.io/daily-app2/20261121-21/

Source staging includes only this app plus its root gallery/tagline and README additions, leaving unrelated pre-existing recovery work untouched. No digest sent.
