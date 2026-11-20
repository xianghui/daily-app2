# Replicate Commons — observed validation, 2026-11-20

## Real AI, production bundle

- `npm run predeploy` passed. Vite base is `/daily-app2/20261120-14/`.
- Desktop installed Chrome, headless, GPU disabled, real quantized MiniLM on WASM CPU. No mocked successful inference.
- Two materially different synthetic fixtures: textile prototypes **8/8** intended specimen links; workshop objects **8/8**. Exact fixture outcomes: equal-specimen contrast **10** versus pooled-reading **20**, and **2** versus **4.5**. Textile repeat-range flags **2**, workshop **0**. These are tiny fixtures, not universal accuracy estimates.
- Changing one note from bowl meaning to chair meaning changes its real neural link, specimen counts/means and final contrast.
- Negation challenge “This is not a linen towel. It is a rubber bicycle tire.” mislinked to `linen` instead of `rubber`. Human correction tested. Instruction-like unrelated source remained inert and was below threshold in the observed run; all rows still require approve/hold.
- Maximum **96** readings plus **8** registered units, **26** real embedding batches, complete source/audit reimport. Four deliberately unrepresented added units block equal-specimen summaries rather than producing zero scores.
- Model host/dependency protocol and SHA-256 audit, observed model revision, real 384-dimensional normalized vectors and actual tokenizer ceiling recorded in `runtime-dependency-audit.json`.

## Arithmetic, invariants and artifacts

- **1,800** independent randomized aggregation/sensitivity oracle cases; signed readings, unequal repeats, per-group means, pooled baselines, omit-one scenarios and exactly-once approved-row conservation passed.
- Known-answer unit-omission contrasts `[0,20,20,0]`, missing-specimen nulls, all-held/no-data behavior, no unassigned approvals and malformed vector envelopes passed.
- Real browser downloads reopened by independent Python CSV/JSON parsers; all original/reviewed IDs, numeric values, decisions, held rows and full specimen roster preserved. Markdown reopened and source/results checked.
- Multiline edited note containing formula-like text, comma and quotes survives JSON/clipboard and safe CSV escaping. Signed numeric reading remains `-8`, not formula-prefixed text. Maximum last-row edited note survives complete audit export/reimport.
- Review/hold, explicit correction, measurement edits resetting approval, undo, pending-decision apply blocking and post-edit stale-export invalidation passed. Audit imports intentionally restore originals only, never approvals.
- The first artifact-parser test exposed a test assertion bug (`'' in string` is true in Python); corrected to require nonempty formula-like text and reran. No app output was altered to satisfy it.

## Failure, race and privacy checks

- Empty/invalid/oversized source, bad JSON, unsupported PDF, >2 MB files, empty roster/records, duplicate IDs, invalid group coverage/value/tolerance/threshold and overly long descriptions rejected with no fake result.
- Eight defensive fault injections passed: blocked model network, no WASM, worker download failure, unsupported Worker construction, malformed vectors, malformed envelope, worker error and accelerated timeout. Real-model retry after a blocked download passed.
- Cold model-download cancel/retry, mid-run cancel/retry, input change during inference, delayed old result after a newer completed run, delayed worker-source fetch and delayed file read passed. Late operations cannot restore old output.
- Request observation from bundle startup through real inference: no model-host requests before explicit Load AI; only public asset GET/HEAD downloads, no request bodies or source text in URLs. Signed model-download query values never saved in public audits. No provider/key/analytics integration. Built text credential-pattern scan had no matches; supplemental to source and network inspection, not an absolute secret-detector claim.
- Worker/runtime/model caches verified by successful online inference, worker termination, network disabled and **new-worker real inference**. Scope limited to an already-open warmed page; offline navigation/reload not claimed.

## Accessibility and layout

- 1440px desktop, 390px and 320px phone viewport emulation passed no-horizontal-overflow checks. Visible normal-viewport overview/review/results screenshots inspected.
- Form controls have labels; visible focus style and ≥44px button targets checked. Imports, review, apply, copy and all downloads work.
- Physical phones, other browsers, low-memory hardware and screen readers **not tested**. Desktop Chrome CPU is the tested inference environment; no WebGPU dependency.

## Collection and publication

Gallery script compilation, exactly-one new AI Utilities entry, prior entry/category preservation, assembled production-byte/runtime hashes, size guard, public Pages commit and public real-model checks are recorded in companion JSON reports and `publication-status.json`. Do not infer public success from a branch push alone. No digest sent.


## Assembled production result

Root predeploy: **747 built, zero failures/skips**, **999,956,174 bytes**, below the unchanged 1,000,000,000-byte guard. No new legacy-sharing rule or older-source/runtime change was needed. All five new app files plus shared worker/factory/WASM matched the assembled build. The complete actual browser suite passed again on that assembled site; **746 prior gallery entries** and older categories remain intact, AI Utilities first. Root deploy reported Published; final hosted verification is recorded separately.


## Public verification

Matching Pages `8de6080326e01347b7dcdb9d35e68be417145758` reached **built**, workflow **44679238949** completed successfully. **Nine** public root/app/worker/factory/WASM files matched assembled bytes. Both real-model fixtures and the full public workflow suite passed again: reviewed exports, all 96-row batches, no content uploads, fresh-worker offline inference, 1440/390/320 layouts, and the preserved **747-card** gallery. Artifacts independently reopened after the public run. Public reports: `public-asset-validation.json`, `public-browser-validation.json`, `public-gallery-ui-validation.json`, `artifact-validation.json`. No digest sent.
