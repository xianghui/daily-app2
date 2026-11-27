# Observed validation — 2026-11-28

## Local production bundle

- `npm run predeploy` passed (React/Vite build). Runtime fetched through production base paths, not development-only imports.
- Real MiniLM CPU inference in Chrome with GPU disabled: Garden expected/actual boundaries **[1,4,6]**; Workshop expected/actual **[3,4,6]**. Both equal-spacing legal baselines returned [2,4,6]. Known-answer boundary sets passed 2/2, four topic boundaries total; tiny synthetic fixtures do not establish general accuracy.
- Computed boundary-separation objective: Garden **1.912317** vs baseline **1.437474**; Workshop **1.783206** vs **1.283303**. These are sums of semantic dissimilarities, not percentage improvements, confidence, measured accuracy or time saved.
- 24-fragment maximum batch, six actual inference chunks, 12 cues, every source retained once/in order, no overlapping output times. Maximum exported audit restored original source/settings and reran real AI.
- Reviewed multiline captions and quoted/formula-like multiline notes survived JSON/CSV/Markdown and actual downloaded WebVTT. Chromium subtitle-track parser checked escaped `<login> &`, line breaks and source-derived timing. Python independently parsed CSV and checked VTT/audit coverage, constraints and objective math (19 artifact assertions/groups).
- Approval/hold, blank/oversized caption gates, text-edit approval reset, boundary edits/invalid boundaries, review undo, pending-state apply rejection, snapshot invalidation and clipboard passed.
- Eleven empty/invalid/oversized source cases, unsupported/invalid/oversized file imports, impossible grouping constraints, instruction-like data probe, actual cancel/retry and 1440/390/320px responsive/focus/44px form checks passed. Screenshots of normal viewport hero, input, review and result panels retained. Desktop hero and 320px review inspected visually.
- Real fresh-worker inference with all network disabled after cache warmup passed. No claim of offline page reload/startup.
- Ten defensive checks: real worker-fetch abort, real model-host abort, absent Worker/WASM, worker-construction/worker-error injection, malformed-vector result, accelerated 180-second timeout, stale errors after input change, cancellation during pending worker fetch. Real retry after network error and newer real inference after delayed schema-valid old output/error passed. Delayed file import could not overwrite newer example input. Actual model-download interception/cancellation and real retry passed. Fault injection was used only to exercise defenses; successful inference used the real model.
- 28 core assertions/groups: exact dynamic-programming optimum checked against exhaustive legal partitions, invalid schemas/vector normalization/coverage/timing/decisions/text, line constraints, held WebVTT gate.
- Network capture from page startup: no model-host request before explicit action; all requests GET without bodies; no synthetic source text in URLs/bodies; only documented model-file hosts externally. Reports retain URL paths and query **key names**, not signed CDN query values. Build credential-pattern scan found no candidate secrets; code uses no provider integration. Shared worker/factory/WASM hashes verified.

## Scope and limitations

English-first semantic model; no audio listening/alignment verification, no grammar guarantee or universal readability certification. Atomic fragments can make a plan infeasible; source timing is never stretched. Similarity is not confidence and may fail on negation, technical jargon or subtle within-topic thought boundaries. Physical phones, other browser engines, assistive devices, cold offline navigation and long-term cache retention are untested. All bundled examples and saved test outputs are synthetic.

## Publication

- Root `npm run predeploy`, then root `npm run deploy` both passed; **926 apps, 0 failed, 0 skipped**. Combined deploy is **827,092,563 bytes**, below the unchanged 1 GB guard. No per-app deployment was used.
- Gallery inline scripts compiled with `new Function`; entry appears exactly once under `ai-utility`; all 925 earlier entries preserved byte-for-byte as objects. Desktop/320px gallery rendering and old/new searches passed locally and publicly.
- Root published gh-pages commit `8dacd4ea0390f516e75b7694a2cf66ba551f5b27`; Pages workflow **46039804757** completed successfully and the Pages API reported matching commit **built**.
- Public URL https://xianghui.github.io/daily-app2/20261128-2/ passed the complete browser workflow suite: both real AI fixture sets, 24-fragment batch, fresh-worker fully offline run, review/edit/hold/undo, downloaded artifacts, Chromium subtitle parsing, input errors, cancellation/retry, keyboard/labels/touch targets and 1440/390/320px layouts. Public network capture found only GET file downloads with no bodies or source content. Public independent Python artifact checks: **19**.
- Public app HTML/JS/CSS and all three immutable shared runtime/worker assets matched local production SHA-256 hashes. Public gallery HTML matched source SHA-256 exactly and rendered **926** cards; legacy categories remain intact.
- Full assembled-production browser suite, defense/network recovery tests and independent artifacts also passed. No provider-side deployment retry was needed. Reports include `public-browser-validation.json`, `public-artifact-validation.json`, `public-gallery-browser-validation.json`, `public-security-validation.json`, and `publication-status.json`.
- Source and validation artifacts committed/pushed separately to `main`; unrelated pre-existing untracked folders were not included.
