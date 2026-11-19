# Observed validation — 2026-11-20

## Real production-bundle AI

Desktop Chrome, GPU disabled, actual MiniLM q8 WASM CPU. No mocked model used for workflow/quality/offline checks.

| Synthetic fixture | Known-answer donor family matches | Proposed minutes | Analog leave-one-out MAE | Median baseline MAE |
|---|---:|---|---:|---:|
| Repair workshop | 3/3 | 20, 180, 60 | 11.67 min | 64.17 min |
| Publishing desk | 3/3 | 90, 5, 40 | 8.33 min | 35.83 min |

These are tiny deliberately separable examples, not general accuracy. Swapping only two upcoming descriptions changed their actual neural proposals from 20/180 to 180/20 while preserving IDs, observations and all other inputs. Model inference materially affects the result; no fallback predictions exist.

- `browser-validation.json`: real inference, mandatory review, numeric edits reset approval, hold/undo, multiline scope notes, invalidated export snapshots, clipboard, originals-only audit import, fresh-worker fully offline real inference, bad/empty/oversized/duplicate/unsupported-format inputs, cancel/retry and changing input mid-run.
- Maximum: 12 historical plus 12 upcoming jobs, k=3, six actual four-text model batches; all records survive JSON/CSV and source reimport. Benchmark contains all 12 held-out jobs.
- `core-validation.json`: 120 generated independent squared-Euclidean-distance retrieval oracle cases, k=1/2/3, median estimates, leave-one-out self-exclusion, review/hold and original conservation. These deterministic checks do not establish AI relevance.
- `artifact-validation.json`: independent Python CSV/JSON/Markdown reopening, exact reviewed estimate 123 minutes, quoted comma/newline/formula-like note escaping, held released minutes blank and all 12 maximum rows retained. Global-median held-out baselines checked independently with Python statistics.
- `semantic-change-validation.json`: real inference responds to changing description meaning.

## Defenses, privacy and UX

`defensive-validation.json` exercises model-host failure with actual successful retry, WASM unavailable, worker download failure, worker construction failure, malformed vectors, null envelope, shortened injected timeout and worker error. Fault injection is used only for defenses. None creates fake review/export output.

`cold-cancel-validation.json` cancels an intercepted cold model download and verifies successful real retry. `import-stale-validation.json`, `worker-fetch-stale-validation.json` and `newer-run-validation.json` prove delayed file reads, delayed worker-source downloads and late old messages cannot overwrite newer input/results. Late-message injection is defense-only, not AI validation.

Browser request inspection starts at page startup: no model download before the explicit button; inference traffic is GET/HEAD only with no content-bearing body or source text in URLs. Persisted network evidence contains sanitized origin/path only, never signed CDN token values. `source-audit.json` records built credential-pattern checks plus source/dataflow review. All examples, downloaded fixtures and screenshots are synthetic. No optional provider integration or keys.

Production page fresh-worker inference with **every network request blocked** passed after warming caches. This proves offline processing in an already-open page only; offline navigation/reload is not claimed. Worker/factory/WASM hashes and exact dependencies are documented in `runtime-dependency-audit.json`.

1440/390/320 CSS-pixel layouts have no horizontal overflow, every form field has a label, buttons are ≥44px and keyboard focus is visible. Normal viewport input/review/results screenshots were visually inspected. Physical phones, low-memory systems, other browser engines and assistive-technology behavior are untested. Source text remains untouched and history durations never become predicted values.

## Publication

Local production validation passed. Combined-site and public URL verification are recorded below only after completion.

Combined root predeploy succeeded: 735 built, zero failed/skipped; every gallery folder is present. All 734 previous gallery objects/categories remain unchanged; every inline script compiled via Node `new Function`. Existing runtime-sharing rules are unchanged. Combined published bytes: **999,930,009**, below the preserved 1,000,000,000-byte guard. Seven assembled app/gallery/worker/factory/WASM assets matched source bytes. The assembled production browser suite is recorded in `assembled-browser-validation.json`.


Public release: matching Pages `a08245b5cbd6f8debfd2a816e09942f894ecdebd` reached `built` with a successful workflow on the first deployment. Seven public app/gallery/runtime asset byte matches, both real-AI fixtures, semantic-change sensitivity, the full reviewed-artifact/privacy/offline/max-batch suite and all 735 gallery cards passed. Source staging excludes unrelated pre-existing edits. No digest sent.
