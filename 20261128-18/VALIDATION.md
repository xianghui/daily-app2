# Skyfield Desk — observed validation, 2026-11-28

## Real AI / workflow

- Production Vite bundle in installed desktop Chrome, headless WASM CPU (`--disable-gpu`), not mocked model inference. Both distinct synthetic batches matched `[WIDE, PLANET]` and `[MOON, GALAXY]`: 4/4 supplied short-note expected profiles. Eyepieces were `[E32, E5]` and `[E10, E20]`.
- Approved highest-power-only baseline missed 1/2 and 2/2 supplied constraints; constrained choices missed 0/2 in each batch. These are computed model fixture outcomes, not physical performance or generalized accuracy.
- Extended paraphrases: 3/4 expected top profile matches. A gas-cloud note retrieved GALAXY rather than WIDE; manual correction then application succeeded. Negation challenge also recorded, not treated as an accuracy guarantee. Inspect `local-extra-validation.json` and `*-browser-validation.json`.
- Independent deterministic enumeration: 162 angular-size/power/pupil cases agreed with maximal feasible power; malformed vector and schema tests reject invalid data. `core-validation.json`.
- Maximum 8 profiles + 8 targets processed in four real embedding chunks. Every original row survived. A 12-eyepiece catalog rendered all 24 alternatives for two targets. Maximum audit JSON reimported and was reprocessed.
- Review selectors, numeric edits, approval reset, approve/hold, undo, no-feasible-choice worksheet lock, blank numeric rejection and export invalidation passed. Source snippets and ranked cosine evidence are inspectable; all rows remain in audits.

## Failure / privacy / artifacts

- Real worker and model-host network aborts gave visible failures without output. Real same-page retry and cancellation during a delayed actual model request succeeded. Late old-worker error could not replace a newer real-AI run. Delayed imported file could not replace newer input.
- Defensive **fault injection only** tested absent Worker/WASM, construction/error events, malformed vectors, timeout and stale messages. Successful inference checks always used real model weights.
- Invalid/empty/oversized source, unsupported import, >1 MB file, invalid telescope/eyepiece/profile bounds and instruction-like imported text tested. No credential prompt or authority change.
- From bundle startup through inference, recorded requests were GET without bodies; input notes were not found in URLs. No model downloads before explicit run. Reports retain asset paths, not signed CDN query values. Built JS/CSS scanned for common credential patterns; no remote inference or credential integration exists. A pattern scan is not a general security proof.
- Warmed open page with network disabled, old worker terminated and new worker created: real inference passed. This does **not** test/claim offline page startup, reload or navigation. Cache eviction/storage-denial offline behavior is not guaranteed.
- Browser-downloaded JSON, audit/worksheet CSV and Markdown were independently opened using Python JSON/CSV parsers. Each suite made 182 conservation, optical-choice, reviewed-field and escaping assertions. Multiline quoted formula-like reviewer note survived JSON/Markdown/clipboard; CSV preserved it with spreadsheet-safety prefix. Held rows stayed in audit and were excluded only from worksheet CSV.

## Layout / collection / deployment

- Normal-viewport desktop 1440px and phone 390/320px screenshots inspected, including review/results at narrow width. No horizontal overflow; fields have labels; numeric/select/button controls ≥44px; keyboard focus and clipboard/download actions passed.
- All root inline scripts compiled with Node `new Function`; missing scripts cause failure. New entry appears once in AI Utilities; all 941 preceding entries are deep-equal and preserved. Browser gallery ordering, old/new search and legacy categories passed.
- Root predeploy assembled 942 apps, zero failed/skipped; combined output ~831.3 MB, under existing preserved guard. Shared runtime paths and all new production files byte/hash-audited. Immutable older worker/WASM source files were not modified.
- Publication proof and public tests are recorded in `publication-status.json` and `public-*` reports after Pages deployment. Only root combined-site deploy is used; no individual app publish.

## Limits / untested

No physical telescope/eyepieces or actual sky observations, physical phone, non-Chrome engine, cold offline navigation, arbitrary unseen-description accuracy or timing improvement tested. AFOV/M is approximate; no measured field-stop, atmospheric/seeing, aberration, observer vision, target visibility, tracking or solar-observing model. Human review remains required. No content uploads, external actions, real personal data or provider keys were used.

## Publication verified

Root deploy published `d636f754a3caa9e8df36aa9eabfe71457875c74c`; Pages reached `built` and workflow [46129096846](https://github.com/xianghui/daily-app2/actions/runs/46129096846) succeeded. The public URL passed the real-model browser suite, offline fresh-worker test, 182 independent downloaded-artifact assertions, eight asset byte/hash comparisons, gallery preservation, all ten defensive checks and extended paraphrase/catalog checks. Reports are saved as `public-*`. No digest was sent.
