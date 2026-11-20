# Pairblock Studio — observed validation

## Actual model and objective

Desktop Chrome on macOS, headless, GPU disabled for the real inference suite. Production Vite output (not dev runtime) loads real Xenova/all-MiniLM-L6-v2 q8 through Transformers.js 4.3.2 on single-thread WASM CPU. Model source/license and required immutable runtime paths are in README and `runtime-dependency-audit.json`.

Both materially different synthetic fixtures produce the three known matching pairs (six total): p1/p4, p2/p6, p3/p5 for tool experience; v1/v4, v2/v6, v3/v5 for archive duties. No model mocks are used in successful inference. Tool-learning proposed total pair distance is **0.4532096955**, source-order distance **2.6682448301**; archive **0.6877038849** versus **2.5545819769**. These are actual combined cosine/skill distances, not measured bias reduction or accuracy percentages. Every resulting pair has one A and one B; equal skill within these planted pairs yields equal mean skill across arms. Hidden covariate balance is not claimed.

Changing profile meanings while retaining record IDs changes real-model pair membership as expected. The maximum 16-participant roster executes real inference in four four-text chunks and produces eight valid pairs. An infeasible hard-gap roster produces empty proposals instead of invented pairs.

**Known failed challenge:** “Has never repaired paper, mended torn pages or restored fragile book bindings” is paired with experienced restoration. Semantic proximity misses negation; this is not a validated comparability or fairness classifier. Mandatory human review, visible source profiles and all-peer evidence remain essential. Simple fixture success is not general accuracy.

## Independent calculations and reviewed artifacts

`core-test.mjs` compares the exact dynamic program with an independent exhaustive matching enumerator on 25 varied symmetric matrices; verifies hard constraints, infeasibility, reproducible seeded allocation, one-per-arm conservation, held pairs and schema/bounds. Numerical skill scores and constraints are supplied, never inferred. Xorshift32 is non-cryptographic reproducibility, not concealed randomization.

`browser-test.cjs` checks mandatory approve/hold gates, current real JSON/CSV/Markdown downloads, multiline formula-like notes, clipboard equality, edit invalidation, broken pair and odd approval blocks, undo, hold conservation, original-only audit import, maximum audit export/reimport, invalid/empty/oversized input and file formats, cancellation and real retry. `artifact-test.py` uses Python's independent CSV parser to compare every original profile, ID, skill, reviewed pair, decision, arm and multiline note, plus pair and row totals, constraints and displayed distance sums. Spreadsheet-like text is escaped; numeric skills remain numeric. Summary output contains every approved member exactly once. No held member receives an arm.

## Defensive tests, privacy and offline scope

`defensive-test.cjs` intercepts model/worker download failures, disables WASM, forces module-worker construction failure, worker error, malformed vectors/envelopes, accelerated 180-second timeout, late cancelled output and stale-input output. These are defensive fault injections only. Errors leave exports disabled and no fake AI; a genuine model retry after network recovery succeeds. `cold-cancel-test.cjs` gates a first model download, cancels before completion and verifies no stale output followed by actual-model retry.

Request capture begins at production navigation: no model-host request before explicit loading; only asset GETs, no request bodies, no content upload. Audits persist sanitized host/path/query-key names, never signed CDN query values. Built asset credential patterns and source integration inspection report no credentials/provider path/analytics. Pattern scanning alone is not exhaustive security proof.

After online warmup, terminate the worker, disable all network and execute another real inference with a fresh worker: passed. Worker source, factory, binary and model caching are exercised, not inferred from HTTP caching. Offline reload/navigation is untested and not promised. Cache eviction and low-memory devices can fail explicitly.

## UI and collection

1440, 390 and 320 CSS-pixel viewports: no horizontal overflow, labeled fields, visible status/errors, buttons ≥44 pixels, keyboard focus, and actual input/review/result screenshots. Narrow input/result screenshots were visually inspected. Physical mobile devices, other browser engines and screen readers remain untested.

Gallery scripts compile using Node `new Function`; new entry occurs exactly once as ai-utility; all 757 prior gallery objects, earlier categories and search remain intact. Pre-existing unrelated working-tree changes are preserved. Root combined build hit the unchanged 1 GB guard, so deploy-only byte-identical Manifold reuse was extended to Step & Stack (20261028-2), keeping its source build and legacy JS URLs unchanged and using its existing 20261028-24 shared binary. Actual legacy PNG/STL import, preview/export fingerprint equality and independent mesh validation are checked on assembled and public sites. No app is removed and no guard is relaxed. See assembly, legacy, public asset, gallery, inference and publication reports for final release evidence.

## Public release verified

Matching Pages commit `ed37f4f999e0856c1756b536c5dac57c1b7296db` reached built; workflow `44770542399` succeeded on the first publication. Nine public gallery/app/worker/factory/WASM files match assembled bytes. The entire real-model browser suite passed at the public URL, including six known-answer pairs, changed-meaning behavior, maximum batching, reviewed downloads and fully offline fresh-worker inference in a warmed open page. Public artifacts were independently parsed again. All 758 gallery cards and earlier categories passed. The legacy app’s actual PNG/STL imports, validated exported meshes and shared-runtime byte identities passed publicly. Combined bytes: 999,603,985 under the unchanged 1 GB guard. A first public suite completed all assertions but hung in browser teardown; bounded test-harness cleanup was added and the full public suite rerun successfully, without changing app/runtime assets. Unrelated pre-existing work remains unstaged. No digest sent.
